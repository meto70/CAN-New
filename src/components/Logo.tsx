import React from "react";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      <div className="relative w-12 h-12 flex-shrink-0">
        <svg
          viewBox="0 0 100 120"
          className="w-full h-full drop-shadow-sm"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Water Drop */}
          <path
            d="M50 5C50 5 92 55 92 90C92 113.196 73.196 132 50 132C26.804 132 8 113.196 8 90C8 55 50 5 50 5Z"
            fill="#3b82f6"
          />
          
          {/* House Base */}
          <rect x="32" y="85" width="36" height="30" fill="black" />
          {/* Roof */}
          <path d="M25 85L50 62L75 85H25Z" fill="black" />
          {/* Chimney */}
          <rect x="62" y="70" width="6" height="12" fill="black" />
          {/* Windows */}
          <rect x="40" y="93" width="8" height="8" fill="white" />
          <rect x="52" y="93" width="8" height="8" fill="white" />
          <rect x="40" y="105" width="8" height="8" fill="white" />
          <rect x="52" y="105" width="8" height="8" fill="white" />
          
          {/* Bottom ground curve (as seen in the image) */}
          <path
            d="M8 90C8 113.196 26.804 132 50 132C73.196 132 92 113.196 92 90C92 95 85 105 50 105C15 105 8 95 8 90Z"
            fill="black"
            opacity="0.1"
          />

          {/* Sparkles */}
          <path
            d="M82 35L84.5 41L91 43L84.5 45L82 51L79.5 45L73 43L79.5 41L82 35Z"
            fill="#60a5fa"
          />
          <path
            d="M92 65L93.5 69L98 70.5L93.5 72L92 76L90.5 72L86 70.5L90.5 69L92 65Z"
            fill="#60a5fa"
          />
        </svg>
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-3xl text-gray-900 font-extrabold tracking-tighter uppercase">CAN</span>
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 mt-0.5">Gebäudereinigung</span>
        <span className="text-[9px] font-medium text-blue-600 tracking-wide italic mt-0.5 uppercase">CLEAN AS NEW</span>
      </div>
    </div>
  );
}
