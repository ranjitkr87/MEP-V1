import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  fallbackTitle?: string;
  className?: string;
  aspectRatioClass?: string;
}

export const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  fallbackTitle = 'TECTONIC Architectural Asset',
  className = 'w-full h-full object-cover',
  aspectRatioClass = '',
  ...props
}) => {
  const [hasError, setHasError] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-surface-container ${aspectRatioClass}`}>
      {!isLoaded && !hasError && (
        <div 
          className="absolute inset-0 bg-surface-container animate-pulse flex items-center justify-center text-outline-variant font-tech-caption text-xs"
          aria-hidden="true"
        >
          <span>LOADING ASSET // BIM REPO</span>
        </div>
      )}

      {!hasError ? (
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          className={`${className} ${!isLoaded ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onLoad={() => setIsLoaded(true)}
          onError={() => setHasError(true)}
          {...props}
        />
      ) : (
        <div className="w-full h-full min-h-[220px] bg-primary-container text-on-primary p-6 flex flex-col justify-between hairline-grid">
          <div className="flex items-center justify-between">
            <span className="font-tech-data text-xs text-secondary font-mono tracking-wider">
              ASSET REF // SCHEMATIC
            </span>
            <span className="font-tech-caption text-[10px] text-outline-variant uppercase">
              BIM LOD 400
            </span>
          </div>
          <div>
            <h4 className="font-tech-index text-sm font-bold uppercase tracking-wider text-surface mb-1">
              {fallbackTitle}
            </h4>
            <p className="font-tech-data text-xs text-on-primary-container">
              Integrated Architectural Infrastructure Node
            </p>
          </div>
          <div className="pt-3 border-t border-outline-variant/30 flex items-center justify-between text-[10px] font-mono text-outline-variant">
            <span>COORD: 25.1972° N, 55.2744° E</span>
            <span>VERIFIED OK</span>
          </div>
        </div>
      )}
    </div>
  );
};
