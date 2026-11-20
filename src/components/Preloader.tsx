import React from 'react';

interface PreloaderProps {
  percentage: number;
  isLoading: boolean;
}

export const Preloader: React.FC<PreloaderProps> = ({ percentage, isLoading }) => {
  if (!isLoading) return null;

  const clampedPercentage = Math.min(100, Math.max(0, percentage));

  return (
    <div className="Preloader_wrapper__R8BcK" aria-label="Loading JG2 Gaming Lounge">
      <div className="Preloader_loader__0sn5l">
        <div className="Preloader_loaderInner__RPOuk">
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>
          <svg
            width="36"
            height="36"
            viewBox="0 0 36 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="18" cy="18" r="15.5" stroke="#544239" strokeWidth="5" />
          </svg>
        </div>
      </div>
      <div className="Preloader_progressBar__0d1Y7">
        <div
          style={{ width: `${clampedPercentage}%` }}
          className="Preloader_progressLine__qpB3O"
        />
      </div>
    </div>
  );
};
