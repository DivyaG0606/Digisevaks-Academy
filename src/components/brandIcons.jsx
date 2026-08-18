import React from 'react';
import {
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,
  SiWordpress,
  SiElementor,
  SiSemrush,
  SiGoogletagmanager,
  SiMailchimp,
  SiClaude,
  SiHostinger,
  SiCpanel
} from 'react-icons/si';

// Export available Simple Icons directly
export {
  SiGoogleads,
  SiMeta,
  SiGoogleanalytics,
  SiWordpress,
  SiElementor,
  SiSemrush,
  SiGoogletagmanager,
  SiMailchimp,
  SiClaude,
  SiHostinger,
  SiCpanel
};

// 1. ChatGPT & OpenAI Official Logo (SiOpenai) with crisp evenodd petal geometry
export function SiOpenai({ size = 32, color = '#10A37F', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path 
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.2819 9.8211a5.9847 5.9847 0 0 0-.5157-4.9108 6.0462 6.0462 0 0 0-6.5098-2.9A6.0651 6.0651 0 0 0 4.9807 4.1818a5.9847 5.9847 0 0 0-3.9977 2.9 6.0462 6.0462 0 0 0 .7427 7.0966 5.98 5.98 0 0 0 .511 4.9107 6.051 6.051 0 0 0 6.5146 2.9001A5.9847 5.9847 0 0 0 13.2599 24a6.0557 6.0557 0 0 0 5.7718-4.2058 5.9894 5.9894 0 0 0 3.9977-2.9001 6.0557 6.0557 0 0 0-.7475-7.0729zM13.2599 22.45a4.4754 4.4754 0 0 1-2.8763-1.0406l.1425-.0818 3.5857-2.0702a.792.792 0 0 0 .396-.6858v-4.9807l1.4925.8617a.076.076 0 0 1 .0396.0651v4.757a4.4984 4.4984 0 0 1-2.78 3.1753zm-8.4907-3.664a4.4754 4.4754 0 0 1-.539-3.0034l.1425.0872 3.5857 2.0702a.792.792 0 0 0 .792 0l4.3129-2.4903v1.7235a.076.076 0 0 1-.0396.0651l-4.12 2.3787a4.4984 4.4984 0 0 1-4.1345-.831zm-1.8906-8.7523a4.4754 4.4754 0 0 1 2.3373-1.9628l-.005.1634v4.1404a.792.792 0 0 0 .396.6858l4.3129 2.4903-1.4925.8617a.076.076 0 0 1-.0792 0l-4.12-2.3787a4.4984 4.4984 0 0 1-1.3545-3.9998zm13.7915-4.1873v4.1404a.792.792 0 0 0 .396.6858l4.3129 2.4903-1.4925.8617a.076.076 0 0 1-.0792 0l-4.12-2.3787a4.4984 4.4984 0 0 1-1.3545-3.9998l.005.1634zm2.1481-1.7828a4.4754 4.4754 0 0 1 2.3373 1.9628 4.4984 4.4984 0 0 1-1.3545 4.0002l-4.12 2.3787a.076.076 0 0 1-.0792 0l-1.4925-.8617v-4.9807a.792.792 0 0 0-.396-.6858l-4.3129-2.4903 1.4925-.8617a.076.076 0 0 1 .0792 0l4.12 2.3787zm-7.9042-2.5855a4.4984 4.4984 0 0 1 4.1345.831l-3.5857 2.0702a.792.792 0 0 0-.396.6858v4.9807l-1.4925-.8617a.076.076 0 0 1-.0396-.0651v-4.757a4.4754 4.4754 0 0 1 1.3793-2.884zm-1.0772 7.7471l2.42-1.3971 2.42 1.3971v2.7942l-2.42 1.3971-2.42-1.3971z" 
      />
    </svg>
  );
}

// 2. Canva Pro Official Brand Icon (SiCanva)
export function SiCanva({ size = 32, color = '#00C4CC', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Canva Iconic "C" Script Emblem */}
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.12 16.89c-2.45 0-4.32-1.63-4.32-4.12 0-2.87 2.27-5.06 5.09-5.06 1.74 0 3.01.76 3.65 1.83l-1.43.91c-.44-.73-1.24-1.2-2.18-1.2-1.8 0-3.15 1.4-3.15 3.39 0 1.77 1.25 2.87 2.82 2.87.97 0 1.86-.48 2.37-1.23l1.45.92c-.88 1.15-2.28 1.69-4.3 1.69z" />
    </svg>
  );
}

// 3. Midjourney Official Sailboat Logo (SiMidjourney)
export function SiMidjourney({ size = 32, color = '#2563EB', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* Midjourney Official Sailboat Icon */}
      <path d="M12 2L4.5 15.5h15L12 2zm0 3.8l4.4 8.7H7.6L12 5.8zM2.5 17.5h19l-2.8 4H5.3l-2.8-4z" />
    </svg>
  );
}

// 4. DALL-E AI Visual Icon (SiDalle)
export function SiDalle({ size = 24, color = '#FF1744', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      {/* DALL-E Grid / Visual AI Blocks */}
      <path d="M3 3h8v8H3V3zm10 0h8v8h-8V3zM3 13h8v8H3v-8zm10 0h8v8h-8v-8z" />
    </svg>
  );
}

// 5. Ahrefs Icon (SiAhrefs)
export function SiAhrefs({ size = 32, color = '#0052CC', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.8 17.5l-1.5-4.5H5.7l-1.5 4.5H1.8L7.2 4.5h2.6l5.4 13h-2.4zm-2.2-6.5L6.5 6.2 5.0 11h3.0zm11.5 6.5h-2.4v-6.3c0-1.8-.7-2.7-2.1-2.7-1.3 0-2.2.8-2.7 1.8v7.2h-2.4V4.5h2.4v4.1c1.0-1.4 2.5-2.1 4.3-2.1 2.7 0 4.1 1.7 4.1 5.0v6.0z" />
    </svg>
  );
}

// 6. CapCut Icon (SiCapcut)
export function SiCapcut({ size = 32, color = '#000000', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M2.25 5.25h19.5v13.5H2.25V5.25zm3.75 3.75v6h3.75l4.5 3V6l-4.5 3H6zm10.5 1.5a2.25 2.25 0 1 0 0 3 2.25 2.25 0 0 0 0-3z" />
    </svg>
  );
}

// 7. Google Business Profile Icon (SiGooglemybusiness)
export function SiGooglemybusiness({ size = 32, color = '#4285F4', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
    </svg>
  );
}

// 8. Copy.ai Icon (SiCopydotai)
export function SiCopydotai({ size = 24, color = '#2563EB', className = '', ...props }) {
  return (
    <svg
      stroke="currentColor"
      fill={color}
      strokeWidth="0"
      viewBox="0 0 24 24"
      height={size}
      width={size}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      {...props}
    >
      <path d="M16 1H8C6.9 1 6 1.9 6 3v14c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H8V3h8v14zM4 5H2v14c0 1.1.9 2 2 2h12v-2H4V5z" />
    </svg>
  );
}
