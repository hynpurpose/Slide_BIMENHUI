import React, { useRef, useState } from 'react';

/* 通用视频框：
 * - 未播放时显示居中玻璃质感播放键，点击开始播放
 * - 播放中显示原生控制条，暂停/结束后播放键重新出现
 * - onPlayingChange 通知父组件播放状态（用于隐藏角标等装饰）
 * - 视频加载失败时回退为播放键占位框 */
export default function VideoFrame({
  src,
  radius = 24,
  showPlayHint = true,
  onPlayingChange,
}) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  const updatePlaying = (value) => {
    setPlaying(value);
    onPlayingChange?.(value);
  };

  return (
    <div
      className="relative w-full h-full bg-black overflow-hidden border border-white/20 shadow-[0_30px_90px_-25px_rgba(0,0,0,0.85)]"
      style={{ borderRadius: radius }}
    >
      {!failed && (
        <video
          ref={videoRef}
          src={src}
          className="w-full h-full object-contain"
          controls={playing}
          playsInline
          onPlay={() => updatePlaying(true)}
          onPause={() => updatePlaying(false)}
          onEnded={() => updatePlaying(false)}
          onError={() => setFailed(true)}
        />
      )}

      {/* 未播放时：居中播放键，点击开始播放 */}
      {!failed && !playing && (
        <button
          type="button"
          onClick={() => videoRef.current?.play()}
          className="absolute inset-0 z-10 flex items-center justify-center cursor-pointer group"
        >
          <div className="w-[128px] h-[128px] rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center shadow-2xl transition-colors group-hover:bg-white/20">
            <svg className="w-14 h-14 text-white ml-2" fill="currentColor" viewBox="0 0 24 24">
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </button>
      )}

      {/* Fallback 占位 */}
      {failed && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-[#0b0b0f]">
          {showPlayHint && (
            <div className="w-[96px] h-[96px] rounded-full bg-[#004CE5]/15 border border-[#004CE5]/50 flex items-center justify-center">
              <svg className="w-10 h-10 text-[#5B8CFF] ml-1" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
