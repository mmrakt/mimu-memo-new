import fs from 'node:fs';
import path from 'node:path';

interface CareerData {
  title: string;
  subtitle: string;
  tags: string[];
  timeline: TimelineItem[];
  stats: StatItem[];
}

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  description: string;
  skills: string[];
  gradientClass: string;
}

interface StatItem {
  number: string;
  label: string;
}

const gradientClasses = [
  'from-indigo-500/10 to-indigo-500/5',
  'from-cyan-500/10 to-cyan-500/5',
  'from-amber-500/10 to-amber-500/5',
  'from-emerald-500/10 to-emerald-500/5',
  'from-red-500/10 to-red-500/5',
];

export function getCareerData(): CareerData {
  const filePath = path.join(process.cwd(), 'app/career/index.md');
  const content = fs.readFileSync(filePath, 'utf8');

  // Parse frontmatter
  const frontmatterMatch = content.match(/^---\n(.*?)\n---/s);
  const frontmatter = frontmatterMatch?.[1] || '';

  // Extract title, subtitle, and tags from frontmatter
  const titleMatch = frontmatter.match(/title: "(.*?)"/);
  const subtitleMatch = frontmatter.match(/subtitle: "(.*?)"/);
  const tagsMatch = frontmatter.match(/tags:\s*\n((?:\s*-\s*".*?"\s*\n)*)/s);

  const title = titleMatch?.[1] || '';
  const subtitle = subtitleMatch?.[1] || '';
  const tags =
    tagsMatch?.[1]
      ?.split('\n')
      .filter((line) => line.trim())
      .map((line) => line.replace(/\s*-\s*"(.*?)"/, '$1')) || [];

  // Remove frontmatter from content
  const mainContent = content.replace(/^---\n.*?\n---\n/s, '');

  // Parse timeline sections
  const timelineSections = mainContent.split(/^## /m).filter((section) => section.trim());
  const timeline: TimelineItem[] = [];

  timelineSections.forEach((section, index) => {
    if (
      section.startsWith('IT Intern') ||
      section.startsWith('Junior') ||
      section.startsWith('Frontend') ||
      section.startsWith('Full Stack') ||
      section.startsWith('Senior')
    ) {
      const lines = section.split('\n').filter((line) => line.trim());
      const title = lines[0] || '';
      const company = lines[1]?.replace(/^\*\*(.*?)\*\*/, '$1') || '';
      const date = lines[2]?.replace(/^\*(.*?)\*/, '$1') || '';

      let description = '';
      let skills: string[] = [];

      for (let i = 3; i < lines.length; i++) {
        const line = lines[i];
        if (line.startsWith('**Technologies:**')) {
          skills = line
            .replace('**Technologies:**', '')
            .split(',')
            .map((s) => s.trim());
          break;
        } else if (line.trim() && !line.startsWith('**')) {
          description += (description ? ' ' : '') + line.trim();
        }
      }

      timeline.push({
        date,
        title,
        company,
        description,
        skills,
        gradientClass: gradientClasses[index % gradientClasses.length] || gradientClasses[0],
      });
    }
  });

  // Parse stats
  const statsSection = mainContent.split('# Statistics')[1];
  const stats: StatItem[] = [];

  if (statsSection) {
    const statLines = statsSection.split('\n').filter((line) => line.startsWith('- **'));
    statLines.forEach((line) => {
      const match = line.match(/- \*\*(.*?)\*\* (.*)/);
      if (match) {
        stats.push({
          number: match[1],
          label: match[2],
        });
      }
    });
  }

  return {
    title,
    subtitle,
    tags,
    timeline,
    stats,
  };
}
