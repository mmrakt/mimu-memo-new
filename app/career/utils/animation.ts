import { CAREER_CONFIG } from '@/career/config/constants';

export function setupScrollAnimations(): () => void {
  const timelineItems = document.querySelectorAll('.timeline-item');
  const animateTimeline = () => {
    timelineItems.forEach((item) => {
      const windowHeight = window.innerHeight;
      const elementTop = item.getBoundingClientRect().top;

      if (elementTop < windowHeight - CAREER_CONFIG.TIMELINE.VISIBLE_THRESHOLD) {
        item.classList.add('opacity-100', 'scale-100');
        item.classList.remove('opacity-0', 'scale-90');
      }
    });
  };

  // Run on mount and scroll
  animateTimeline();
  window.addEventListener('scroll', animateTimeline);

  return () => window.removeEventListener('scroll', animateTimeline);
}
