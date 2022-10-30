import React from 'react';

const Twitter = ({ isDark }) => {
  return (
    <svg
      width="30"
      height="24"
      viewBox="0 0 30 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M29.5324 2.84126C28.4459 3.32363 27.2781 3.64848 26.0525 3.79491C27.3039 3.04553 28.265 1.85808 28.7166 0.442986C27.5463 1.137 26.2494 1.64151 24.8687 1.91345C23.765 0.735849 22.1887 0 20.4463 0C16.5345 0 13.66 3.64971 14.5435 7.43847C9.50943 7.18622 5.04512 4.7744 2.05619 1.1087C0.468827 3.83183 1.23298 7.39417 3.93027 9.19811C2.93847 9.16612 2.00328 8.89417 1.18745 8.44011C1.121 11.2469 3.1329 13.8728 6.04676 14.4573C5.19401 14.6887 4.26005 14.7428 3.31009 14.5607C4.08039 16.9676 6.31747 18.7186 8.97047 18.7678C6.4233 20.765 3.21411 21.6571 0 21.2781C2.6813 22.9971 5.8671 24 9.28794 24C20.5373 24 26.8929 14.4992 26.509 5.97785C27.6928 5.12264 28.7203 4.05578 29.5324 2.84126V2.84126Z"
        fill={isDark ? '#fff' : '#160344'}
      />
    </svg>
  );
};

export default Twitter;
