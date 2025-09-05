import React from 'react';

// This component creates an animated grid background with a dark overlay.
// It wraps your page content, placing the animated grid and overlay behind it.
const GridBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* This is the primary background layer combining the animated grid and a radial gradient spotlight. */}
      <div
        className="
          absolute inset-0 h-full w-full 
          bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,187,249,0.05)_0%,rgba(0,187,249,0)_50%)]
          [background-size:200%_200%]
          [background-repeat:repeat]
          animate-[background-pan_30s_linear_infinite]
          [mask-image:radial-gradient(ellipse_at_center,white,transparent_100%)]
        "
        style={{
          backgroundImage: 'linear-gradient(to right, #ffffff0a 1px, transparent 1px), linear-gradient(to bottom, #ffffff0a 1px, transparent 1px)',
        }}
      ></div>

      {/* This is the dark overlay. It sits on top of the grid but below your content. */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* This div contains your actual page content.
          We set a default white text color here and a higher z-index to ensure it's visible. */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center text-white">
        {children}
      </div>
    </div>
  );
};

export default GridBackground;