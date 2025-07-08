import { slides } from '../../_contents/slides';
import type { PostListItem } from '../lib/types';

export const getSlides = async (): Promise<PostListItem[]> => {
  return slides.map((slide, index) => ({
    id: `slide-${index}`,
    title: slide.title,
    tag: slide.tag,
    pubDate: slide.pubDate,
    link: slide.link,
    media: 'owned' as const,
  }));
};
