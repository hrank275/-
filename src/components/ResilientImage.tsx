import { useState } from 'react';
import { BookOpen } from 'lucide-react';

interface ResilientImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTitle: string;
  fallbackSubtitle?: string;
}

export function ResilientImage({
  src,
  alt,
  className = '',
  fallbackTitle,
  fallbackSubtitle,
}: ResilientImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex flex-col items-center justify-center bg-gradient-to-br from-[#F3EFE8] via-[#EBE5DB] to-[#E2DBD0] border border-[#DFD8CC] p-8 text-center ${className}`}
      >
        <div className="w-12 h-12 flex items-center justify-center border border-[#C9C0B1] bg-[#FAF8F4] text-[#9A2B26] mb-4">
          <BookOpen className="w-5 h-5" aria-hidden="true" />
        </div>
        <p className="font-serif text-base font-semibold text-[#18181B]">{fallbackTitle}</p>
        {fallbackSubtitle && (
          <p className="text-sm text-[#52525B] mt-1">{fallbackSubtitle}</p>
        )}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      referrerPolicy="no-referrer"
      onError={() => setHasError(true)}
      className={className}
    />
  );
}
