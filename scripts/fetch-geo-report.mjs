#!/usr/bin/env node
/**
 * 从 GEO 监测系统采集指定项目的报告数据，写入 src/data/geoReport.json。
 * 幻灯片第 35-38 页（优化词总览/词条/竞品/引用源）直接读取该 JSON 渲染。
 *
 * 用法:
 *   node scripts/fetch-geo-report.mjs <project_id> [--start YYYY-MM-DD] [--end YYYY-MM-DD]
 *
 * 可用环境变量覆盖默认配置:
 *   GEO_API_BASE (默认 http://121.43.57.5:3000)
 *   GEO_USER     (默认 hannah)
 *   GEO_PASS     (默认 123456)
 */

import { writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const API_BASE = process.env.GEO_API_BASE || 'http://121.43.57.5:3000';
const USERNAME = process.env.GEO_USER || 'hannah';
const PASSWORD = process.env.GEO_PASS || '123456';

const args = process.argv.slice(2);
const projectId = Number(args.find((a) => !a.startsWith('--')));
if (!projectId) {
  console.error('用法: node scripts/fetch-geo-report.mjs <project_id> [--start YYYY-MM-DD] [--end YYYY-MM-DD]');
  process.exit(1);
}
const getFlag = (name) => {
  const i = args.indexOf(`--${name}`);
  return i !== -1 ? args[i + 1] : undefined;
};

let cookie = '';

async function api(pathname, params = {}) {
  const url = new URL(pathname, API_BASE);
  for (const [k, v] of Object.entries(params)) {
    if (v !== undefined && v !== null && v !== '') url.searchParams.set(k, String(v));
  }
  const res = await fetch(url, { headers: { cookie } });
  const json = await res.json();
  if (!json.ok) throw new Error(`${pathname} 请求失败: ${json.error || res.status}`);
  return json;
}

async function login() {
  const res = await fetch(new URL('/login', API_BASE), {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ username: USERNAME, password: PASSWORD }),
  });
  const json = await res.json();
  if (!json.ok) throw new Error(`登录失败: ${json.error}`);
  cookie = (res.headers.getSetCookie?.() || [res.headers.get('set-cookie')])
    .filter(Boolean)
    .map((c) => c.split(';')[0])
    .join('; ');
  return json.user;
}

const num = (v) => (v === null || v === undefined || v === '' ? null : Number(v));
const today = () => new Date().toISOString().slice(0, 10);

async function main() {
  const user = await login();
  console.log(`已登录: ${user.name} (${user.company_name})`);

  const projects = (await api('/api/projects')).data;
  const project = projects.find((p) => p.id === projectId);
  if (!project) {
    console.error(`未找到项目 ${projectId}，当前账号的项目: ${projects.map((p) => `${p.id}=${p.project_name}`).join(', ')}`);
    process.exit(1);
  }

  const startDate = getFlag('start') || project.created_at.slice(0, 10);
  const endDate = getFlag('end') || today();
  const range = { project_id: projectId, start_date: startDate, end_date: endDate };
  console.log(`项目: ${project.project_name} / 目标产品: ${project.target_product}`);
  console.log(`数据区间: ${startDate} ~ ${endDate}`);

  const [platforms, stats, influence, entries, compare, citationStats, citationArticles] = await Promise.all([
    api('/api/platforms', { project_id: projectId }),
    api('/api/conversations/stats', range),
    api('/api/competitors/influence', range),
    api('/api/entries', { ...range, page: 1, page_size: 100, sort_by: 'mention_rate', sort_order: 'desc' }),
    api('/api/competitors/compare', range),
    api('/api/citations/stats', range),
    api('/api/citations/articles', { ...range, page: 1, page_size: 10, sort_by: 'total_citations', sort_order: 'desc' }),
  ]);

  const platformMap = Object.fromEntries(platforms.data.map((p) => [p.id, p]));

  const report = {
    meta: {
      fetched_at: new Date().toISOString(),
      api_base: API_BASE,
      project_id: projectId,
      project_name: project.project_name,
      target_product: project.target_product,
      target_brand_name: project.target_brand_name || null,
      start_date: startDate,
      end_date: endDate,
    },
    platforms: platforms.data,
    stats: {
      brand_mention_rate: num(stats.data.brand_mention_rate),
      top1_mention_rate: num(stats.data.top1_mention_rate),
      top3_mention_rate: num(stats.data.top3_mention_rate),
      avg_position: num(stats.data.avg_position),
      daily_stats: (stats.data.daily_stats || []).map((d) => ({
        date: d.date,
        mention_rate: num(d.mention_rate ?? d.brand_mention_rate),
        avg_position: num(d.avg_position),
      })),
      platform_stats: (stats.data.platform_stats || []).map((p) => ({
        platform_id: p.platform_id,
        platform_name: platformMap[p.platform_id]?.name || `平台${p.platform_id}`,
        platform_logo: platformMap[p.platform_id]?.url || null,
        brand_mention_rate: num(p.brand_mention_rate),
        avg_position: num(p.avg_position),
      })),
    },
    influence: {
      total_conversations: influence.data.total_conversations,
      list: (influence.data.list || []).map((b) => ({
        rank: b.rank,
        brand_name: b.brand_name,
        favicon_url: b.favicon_url,
        influence_score: num(b.influence_score),
        mention_rate: num(b.mention_rate),
        avg_position: num(b.avg_position),
        is_target: !!b.is_target,
      })),
    },
    entries: {
      total: entries.data.total,
      list: (entries.data.list || []).map((e) => ({
        entry_id: e.entry_id,
        entry_name: e.entry_name,
        mention_rate: num(e.mention_rate),
        position: num(e.position),
        platform_ids: e.platform_ids || [],
        last_conversation_time: e.last_conversation_time,
        last_screenshot_url: e.last_screenshot_url,
      })),
    },
    compare: {
      target_product: compare.data.target_product,
      mention_rate_ranking: compare.data.mention_rate_ranking || [],
      position_ranking: compare.data.position_ranking || [],
      rate_daily: compare.data.rate_daily || compare.data.mention_rate_daily || [],
      position_daily: compare.data.position_daily || [],
    },
    citations: {
      total_conversations: citationStats.data.total_conversations,
      citation_rate: num(citationStats.data.citation_rate),
      total_citations: citationStats.data.total_citations,
      platform_stats: (citationStats.data.platform_stats || []).map((p) => ({
        platform_name: p.platform_name,
        domain: p.domain,
        logo_url: p.logo_url,
        citation_count: p.citation_count,
        share: num(p.share),
      })),
      articles: (citationArticles.data.list || []).map((a) => ({
        title: a.title,
        link_url: a.link_url,
        domain: a.domain,
        platform_name: a.platform_name,
        logo_url: a.logo_url,
        total_citations: a.total_citations,
        avg_citations: num(a.avg_citations),
        has_target_product: !!a.has_target_product,
      })),
    },
  };

  const outPath = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../src/data/geoReport.json');
  writeFileSync(outPath, JSON.stringify(report, null, 2), 'utf-8');
  console.log(`已写入 ${outPath}`);
  console.log(`词条 ${report.entries.list.length} 条 / 竞品 ${report.influence.list.length} 个 / 引用文章 ${report.citations.articles.length} 篇`);
}

main().catch((err) => {
  console.error(err.message);
  process.exit(1);
});
