import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    if (window.matchMedia('(pointer: fine)').matches) {
      const handleMouseMove = (e: MouseEvent) => {
        setPosition({ x: e.clientX, y: e.clientY });
        if (!visible) setVisible(true);
      };

      const handleMouseLeave = () => {
        setVisible(false);
      };

      window.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        document.body.removeEventListener('mouseleave', handleMouseLeave);
      };
    }
  }, [visible]);

  if (!visible) return null;

  return (
    <div
      className="fixed pointer-events-none z-30 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        left: -150,
        top: -150,
        width: 300,
        height: 300
      }}
    >
      <div className="w-full h-full rounded-full bg-blue-500/8 blur-3xl" />
    </div>
  );
};
