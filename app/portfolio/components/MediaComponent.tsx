import Image from 'next/image';

interface MediaComponentProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

export default function MediaComponent({
  src,
  alt,
  width = 400,
  height = 250,
  className,
  sizes,
  priority = false,
}: MediaComponentProps) {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.mov') || src.endsWith('.webm');

  if (isVideo) {
    return (
      <video
        width={width}
        height={height}
        className={className}
        autoPlay
        muted
        loop
        playsInline
        disablePictureInPicture
        preload="metadata"
      >
        <source src={src} type="video/mp4" />
        <track kind="captions" />
        Your browser does not support the video tag.
      </video>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      sizes={sizes}
      priority={priority}
    />
  );
}
