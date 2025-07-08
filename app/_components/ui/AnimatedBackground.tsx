interface AnimatedBackgroundProps {
  className?: string;
}

export function AnimatedBackground({ className = '' }: AnimatedBackgroundProps) {
  return (
    <div className={`fixed inset-0 z-0 opacity-5 ${className}`}>
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse-slow" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-cyan-400 rounded-full blur-3xl animate-pulse-slow animation-delay-300" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />
    </div>
  );
}
