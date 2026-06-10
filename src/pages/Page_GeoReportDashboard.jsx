import React, { useState } from 'react';
import SlideLayout from '../components/SlideLayout';

function Page_GeoReportDashboard() {
    const [imgLoaded, setImgLoaded] = useState(false);
    const [imgError, setImgError] = useState(false);

    return (
        <SlideLayout
            title="总览"
            subtitle="核心指标定义与表现概览"
        >
            <div className="w-full h-full flex flex-col relative text-white font-sans px-12 sm:px-16 pt-6 lg:pt-8 pb-4 overflow-hidden animate-fade-in">
                <div className="w-full max-w-[1700px] mx-auto flex flex-col flex-grow min-h-0 relative z-10 pt-4">
                    {/* Main Content Layout: Single Centered Image Container */}
                    <div className="flex-grow flex flex-col justify-center items-center min-h-0 pb-1">
                        
                        {imgLoaded && !imgError ? (
                            /* Adaptive Border Wrapper: Tightly wraps the image based on its natural dimensions, scaling to maximum allowed space without overflow */
                            <div className="relative max-h-full max-w-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 shadow-2xl transition-all duration-300 hover:border-white/20 group flex items-center justify-center">
                                <img 
                                    src="/geo-report/page-54-dashboard-left.jpg" 
                                    alt="核心指标表现大图" 
                                    className="max-w-full max-h-full w-auto h-auto rounded-xl object-contain group-hover:scale-[1.002] transition-transform duration-500"
                                    onLoad={() => setImgLoaded(true)}
                                    onError={() => setImgError(true)}
                                />
                            </div>
                        ) : (
                            /* Fallback Placeholder with default 2:1 aspect ratio, bounded by max-h-full */
                            <div className="w-full max-w-[1550px] aspect-[2/1] max-h-full bg-[#0a0a0a] border border-white/10 rounded-2xl p-3 flex flex-col justify-center items-center relative overflow-hidden group hover:border-white/20 transition-all duration-300 shadow-2xl">
                                {/* Hidden Image for loading detection */}
                                <img 
                                    src="/geo-report/page-54-dashboard-left.jpg" 
                                    alt="核心指标表现大图" 
                                    className="hidden"
                                    onLoad={() => setImgLoaded(true)}
                                    onError={() => setImgError(true)}
                                />
                                
                                {/* Fallback Placeholder UI */}
                                <div className="absolute inset-2 flex flex-col items-center justify-center p-4 text-center bg-white/[0.01] rounded-xl border border-dashed border-white/10">
                                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3">
                                        <svg className="w-6 h-6 text-zinc-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <p className="text-zinc-300 font-bold text-base mb-1">此处为大图展示位 (支持任意比例自适应)</p>
                                    <p className="text-zinc-500 text-xs max-w-sm mb-3">上传任意比例的图片，外边框将自动无缝贴合原图尺寸，同时最大化屏幕显示。</p>
                                    <div className="bg-black border border-white/10 px-3 py-1.5 rounded-lg text-[10px] font-mono text-[#004CE5]">
                                        存放路径: /public/geo-report/page-54-dashboard-left.jpg
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </SlideLayout>
    );
}

export default Page_GeoReportDashboard;
