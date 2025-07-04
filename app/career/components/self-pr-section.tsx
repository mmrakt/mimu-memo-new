interface SelfPRSectionProps {
  selfPR: {
    autonomy: { title: string; content: string };
    fullstack: { title: string; content: string };
    teamwork: { title: string; content: string };
  };
}

export function SelfPRSection({ selfPR }: SelfPRSectionProps) {
  const prItems = [
    { ...selfPR.autonomy, icon: '🚀', gradient: 'from-cyan-600 to-blue-600' },
    { ...selfPR.fullstack, icon: '💻', gradient: 'from-purple-600 to-pink-600' },
    { ...selfPR.teamwork, icon: '👥', gradient: 'from-indigo-600 to-purple-600' },
  ];

  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center reveal opacity-0 translate-y-8 transition-all duration-1000">
          My Strengths
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {prItems.map((item, index) => (
            <div
              key={item.title}
              className="reveal opacity-0 translate-y-8 transition-all duration-1000 group"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl p-6 h-full transition-all duration-300 hover:border-slate-600 hover:-translate-y-1 hover:shadow-xl">
                <div
                  className={`text-4xl mb-4 bg-gradient-to-br ${item.gradient} bg-clip-text text-transparent inline-block`}
                >
                  {item.icon}
                </div>
                <h3
                  className={`text-xl font-semibold mb-3 bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}
                >
                  {item.title}
                </h3>
                <p className="text-slate-300 leading-relaxed">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
