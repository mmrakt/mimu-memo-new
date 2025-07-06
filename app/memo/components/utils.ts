import { PATHS, TAG_ICONS } from '@/app/config/constants';

export function getTagIconPath(tag: string): string {
  const iconName = TAG_ICONS[tag.toLowerCase() as keyof typeof TAG_ICONS];
  return iconName ? `${PATHS.IMAGES_DIRECTORY}/${iconName}` : PATHS.FAVICON;
}
