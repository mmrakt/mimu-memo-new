import { ABOUT_SITE } from '@/config';

export function SiteOverview() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-slate-200 dark:text-slate-200 light:text-slate-800">
          About this site
        </h2>
        <p className="text-lg text-slate-400 dark:text-slate-400 light:text-slate-600 leading-relaxed mb-12">
          {ABOUT_SITE[0]}
          <br className="hidden md:block" />
          {ABOUT_SITE[1]}
        </p>
      </div>
    </section>
  );
}
