export interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function extractHeadings(content: string): TOCItem[] {
  const headings: TOCItem[] = [];
  const lines = content.split('\n');
  
  lines.forEach((line) => {
    const trimmed = line.trim();
    const match = trimmed.match(/^(#{2,6})\s+(.+)$/);
    
    if (match) {
      const [, hashes, text] = match;
      const level = hashes.length;
      const id = generateId(text);
      
      headings.push({
        id,
        text,
        level,
      });
    }
  });
  
  return headings;
}

function generateId(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .replace(/\s+/g, '-')
    .trim();
}