interface PageHeaderProps {
  title: string;
  description: string;
}

export default function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h1 className="text-5xl font-bold font-space-grotesk mb-6 bg-gradient-to-r from-indigo-500 via-cyan-400 to-amber-500 bg-clip-text text-transparent animate-gradient-x">
        {title}
      </h1>
      <p className="text-xl text-slate-400">{description}</p>
    </div>
  );
}