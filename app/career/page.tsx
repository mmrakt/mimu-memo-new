import { CareerAnimations } from './career-animations';
import { getCareerData } from './data';

export default function CareerPage() {
  const careerData = getCareerData();

  const heroContent = (
    <section className="min-h-screen flex items-center justify-center relative px-8">
      <div className="text-center z-10 max-w-4xl">
        <h1 className="font-bold text-5xl md:text-6xl lg:text-7xl mb-4 bg-gradient-to-r from-purple-400 via-pink-500 to-cyan-400 bg-clip-text text-transparent animate-gradient-x bg-[length:200%_200%]">
          {careerData.title}
        </h1>
        <p className="text-xl md:text-2xl text-slate-400 mb-8">{careerData.subtitle}</p>
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {careerData.tags.map((tag, index) => (
            <span
              key={tag}
              className="px-6 py-2 bg-indigo-600/10 border border-indigo-600/30 rounded-full text-sm transition-all hover:bg-indigo-600/20 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-indigo-600/30 animate-fadeInUp"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );

  const restContent = (
    <>
      {/* Timeline Section */}
      <section id="timeline" className="py-20 relative">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 reveal opacity-0 translate-y-8 transition-all duration-1000">
          Career Timeline
        </h2>
        <div className="max-w-6xl mx-auto relative px-8">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-600 via-cyan-600 to-amber-600 hidden md:block" />

          {/* Timeline items */}
          {careerData.timeline.map((item, index) => (
            <div
              key={`timeline-${item.date}-${index}`}
              className={`timeline-item group relative mb-16 md:w-1/2 opacity-0 scale-90 transition-all duration-700 ${
                index % 2 === 0 ? 'md:pr-12 md:text-right md:mr-auto' : 'md:left-1/2 md:pl-12'
              }`}
              style={{ transitionDelay: `${index * 0.2}s` }}
            >
              {/* Timeline dot */}
              <div
                className={`absolute w-5 h-5 bg-slate-900 border-4 border-indigo-600 rounded-full top-6 z-10 transition-all duration-300 group-hover:scale-150 group-hover:border-cyan-400 group-hover:shadow-lg group-hover:shadow-cyan-400/50 ${
                  index % 2 === 0 ? 'md:right-0 md:translate-x-1/2 md:left-auto' : 'md:-left-2.5'
                } left-0`}
              />

              {/* Content */}
              <div
                className={`bg-slate-800 p-6 rounded-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-xl border border-indigo-600/10 group-hover:border-indigo-600/30 bg-gradient-to-br ${item.gradientClass} ml-8 md:ml-0`}
              >
                <div className="text-indigo-400 font-semibold mb-1 text-sm uppercase tracking-wider">
                  {item.date}
                </div>
                <h3 className="text-2xl font-bold mb-1">{item.title}</h3>
                <p className="text-cyan-400 text-lg mb-4">{item.company}</p>
                <p className="text-slate-400 leading-relaxed mb-4">{item.description}</p>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : ''}`}>
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-white/10 rounded-full text-xs border border-white/20 transition-all hover:bg-white/20 hover:scale-105"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-indigo-600/5 to-cyan-600/5">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-8">
          {careerData.stats.map((stat, index) => (
            <div
              key={`stat-${stat.label}-${index}`}
              className="reveal bg-slate-800 p-8 rounded-xl text-center transition-all hover:-translate-y-1 hover:shadow-xl border border-indigo-600/10 hover:border-indigo-600/30 opacity-0 translate-y-8"
              style={{ transitionDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl font-bold bg-gradient-to-r from-indigo-600 to-cyan-600 bg-clip-text text-transparent">
                {stat.number}
              </div>
              <div className="text-slate-400 mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );

  return <CareerAnimations heroContent={heroContent} restContent={restContent} />;
}
