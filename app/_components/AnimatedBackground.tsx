'use client';

interface AnimatedBackgroundProps {
  variant?: 'float' | 'pulse';
}

export default function AnimatedBackground({ variant = 'float' }: AnimatedBackgroundProps) {
  const animationClass = variant === 'pulse' ? 'animate-pulse-slow' : 'animate-float';

  return (
    <div className="fixed inset-0 z-0 opacity-5">
      <div
        className={`absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl ${animationClass}`}
      ></div>
      <div
        className={`absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-400 rounded-full blur-3xl ${animationClass} animation-delay-1000`}
      ></div>
      <div
        className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl ${animationClass} animation-delay-2000`}
      ></div>
    </div>
  );
}
