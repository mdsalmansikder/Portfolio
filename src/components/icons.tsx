import React from "react";

/** Premium RIYAD.DEV Brand Logo — Hexagonal tech emblem with "R" initial */
export function RiyadDevLogo({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 36 36" fill="none" className={className} aria-label="RIYAD.DEV Logo">
      {/* Hexagon outer frame */}
      <path
        d="M18 2L32.5 10.5V25.5L18 34L3.5 25.5V10.5L18 2Z"
        stroke="url(#hex-stroke)"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />
      {/* Inner filled hexagon */}
      <path
        d="M18 5.5L30 12.5V23.5L18 30.5L6 23.5V12.5L18 5.5Z"
        fill="url(#hex-fill)"
        opacity="0.15"
      />
      {/* Forward slash / — developer symbol */}
      <path
        d="M14.5 25L21.5 11"
        stroke="url(#slash-grad)"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.45"
      />
      {/* Bold "R" monogram centered */}
      <path
        d="M12.5 25V11.5H19.5C20.6 11.5 21.65 11.94 22.43 12.72C23.2 13.5 23.65 14.55 23.65 15.65C23.65 16.75 23.2 17.8 22.43 18.58C21.65 19.35 20.6 19.8 19.5 19.8H17L23.5 25"
        stroke="url(#r-gradient)"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
      {/* Glowing accent dot */}
      <circle cx="26" cy="25.5" r="1.8" fill="url(#dot-gradient)" />
      <circle cx="26" cy="25.5" r="3" fill="url(#dot-gradient)" opacity="0.2" />
      <defs>
        <linearGradient id="hex-stroke" x1="3.5" y1="2" x2="32.5" y2="34" gradientUnits="userSpaceOnUse">
          <stop stopColor="#38bdf8" />
          <stop offset="1" stopColor="#6366f1" />
        </linearGradient>
        <linearGradient id="hex-fill" x1="6" y1="5.5" x2="30" y2="30.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#3b82f6" />
        </linearGradient>
        <linearGradient id="slash-grad" x1="14.5" y1="25" x2="21.5" y2="11" gradientUnits="userSpaceOnUse">
          <stop stopColor="#94a3b8" />
          <stop offset="1" stopColor="#e2e8f0" />
        </linearGradient>
        <linearGradient id="r-gradient" x1="12.5" y1="11" x2="23.5" y2="25" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="0.6" stopColor="#93c5fd" />
          <stop offset="1" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="dot-gradient" x1="24" y1="23.5" x2="28" y2="27.5" gradientUnits="userSpaceOnUse">
          <stop stopColor="#22d3ee" />
          <stop offset="1" stopColor="#06b6d4" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function HtmlIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#E44D26" />
      <path d="M12 3.8V20.3L16.8 18.9L18.4 3.8H12Z" fill="#F16529" />
      <path
        d="M7.7 7.2H16.3L16.1 9.4H10.1L10.3 11.6H15.9L15.4 16.6L12 17.6L8.6 16.6L8.4 13.9H10.6L10.7 14.8L12 15.2L13.3 14.8L13.5 13.4H8.2L7.7 7.2Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function CssIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M4 2L5.8 20.2L12 22L18.2 20.2L20 2H4Z" fill="#1572B6" />
      <path d="M12 3.8V20.3L16.8 18.9L18.4 3.8H12Z" fill="#33A9DC" />
      <path
        d="M7.7 7.2H16.3L16 10H10.1L10.2 11.6H15.8L15.3 16.6L12 17.6L8.6 16.6L8.4 13.9H10.6L10.7 14.8L12 15.2L13.3 14.8L13.5 13.4H8.2L8 10H15.9L16.1 7.2H7.7Z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function TailwindIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z"
        fill="#38BDF8"
      />
    </svg>
  );
}

export function JavaScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#F7DF1E" />
      <path
        d="M12.4 17.5c.5.8 1.2 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.7-3-1.7-3-3.7 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.5 3.5 1.9l-1.7 1.1c-.4-.7-.9-1-1.8-1-.8 0-1.3.5-1.3 1.1 0 .7.5 1 1.6 1.4l.6.3c2.1.9 3.2 1.9 3.2 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.6-1.1-4.2-2.4l1.8-1.2zM7.2 17.9c.3.5.7.8 1.3.8.7 0 1.1-.3 1.1-1.4V9.1h2.3v8.1c0 2.3-1.3 3.4-3.3 3.4-1.8 0-2.8-.9-3.3-2.1l1.9-1.2z"
        fill="#000000"
      />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        d="M12.3 17.5c.5.8 1.2 1.4 2.2 1.4 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.8-1.6l-.6-.3c-1.8-.7-3-1.7-3-3.7 0-1.8 1.4-3.2 3.6-3.2 1.6 0 2.7.5 3.5 1.9l-1.7 1.1c-.4-.7-.9-1-1.8-1-.8 0-1.3.5-1.3 1.1 0 .7.5 1 1.6 1.4l.6.3c2.1.9 3.2 1.9 3.2 3.9 0 2.2-1.7 3.5-4 3.5-2.2 0-3.6-1.1-4.2-2.4l1.8-1.2zM5.5 10.9h2.5v9h2.3v-9h2.5V9.1H5.5v1.8z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ReactIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse
        cx="12"
        cy="12"
        rx="4.2"
        ry="10.2"
        stroke="#61DAFB"
        strokeWidth="1.6"
        transform="rotate(0 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="4.2"
        ry="10.2"
        stroke="#61DAFB"
        strokeWidth="1.6"
        transform="rotate(60 12 12)"
      />
      <ellipse
        cx="12"
        cy="12"
        rx="4.2"
        ry="10.2"
        stroke="#61DAFB"
        strokeWidth="1.6"
        transform="rotate(120 12 12)"
      />
      <circle cx="12" cy="12" r="1.8" fill="#61DAFB" />
    </svg>
  );
}

export function NextjsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle cx="12" cy="12" r="11" fill="currentColor" className="text-slate-900 dark:text-white" />
      <path
        d="M15.8 17.5L8.9 8.5H7.2V15.5H8.6V10.2L14.7 18.2C15.1 18 15.5 17.8 15.8 17.5Z"
        fill="currentColor"
        className="text-white dark:text-slate-900"
      />
      <rect
        x="15.2"
        y="8.5"
        width="1.4"
        height="7"
        fill="currentColor"
        className="text-white dark:text-slate-900"
      />
    </svg>
  );
}

export function NodejsIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2L21 7.2V16.8L12 22L3 16.8V7.2L12 2Z" fill="#339933" />
      <path d="M12 4.2L19.2 8.3V15.7L12 19.8L4.8 15.7V8.3L12 4.2Z" fill="#5FA04E" />
      <path
        d="M10.8 10.5v4.5h1.6v-2.2l1.6 2.2h1.5v-4.5h-1.5v2.2l-1.6-2.2h-1.6z"
        fill="#FFFFFF"
      />
    </svg>
  );
}

export function ExpressIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect width="24" height="24" rx="5" fill="currentColor" className="text-slate-800 dark:text-slate-100" />
      <path
        d="M5.5 8h4.5v1.5H7.2v1.8h2.3v1.5H7.2v2h2.9v1.5H5.5V8zm6.5 3.8L14.3 8h2l-3 4.4 3.2 4.8h-2l-2.2-3.4-2.2 3.4H8.2l3.2-4.8-3-4.4h2l2.3 3.8z"
        fill="currentColor"
        className="text-white dark:text-slate-900"
      />
    </svg>
  );
}

export function MongodbIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 2C11.5 3.5 8 8.8 8 13.5C8 17.5 10 20.5 12 22C14 20.5 16 17.5 16 13.5C16 8.8 12.5 3.5 12 2Z"
        fill="#47A248"
      />
      <path
        d="M12 2C11.8 3.5 11.5 5.5 11.5 7.5C11.5 14.5 12 18.5 12 22C12 22 12 21.5 12 22C14 20.5 16 17.5 16 13.5C16 8.8 12.5 3.5 12 2Z"
        fill="#4DB33D"
      />
      <path
        d="M12 22V2C12 2 11.9 2.4 11.7 3.3C11.5 4.3 11.4 18.5 12 22Z"
        fill="#FFFFFF"
        opacity="0.35"
      />
    </svg>
  );
}

export function BetterAuthIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <defs>
        <linearGradient id="betterAuthGrad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
          <stop stopColor="#0066FF" />
          <stop offset="1" stopColor="#00F0FF" />
        </linearGradient>
      </defs>
      <path
        d="M12 2L4 5.5V11.5C4 16.5 7.5 21 12 22C16.5 21 20 16.5 20 11.5V5.5L12 2Z"
        fill="url(#betterAuthGrad)"
      />
      <path
        d="M12 4.2L5.8 7V11.6C5.8 15.6 8.5 19.3 12 20.2C15.5 19.3 18.2 15.6 18.2 11.6V7L12 4.2Z"
        fill="#0A0F1D"
        opacity="0.25"
      />
      <path
        d="M9 12L11.2 14.2L15.5 9.8"
        stroke="#FFFFFF"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function GitIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M21.7 10.7L13.3 2.3C12.9 1.9 12.3 1.9 11.9 2.3L10.5 3.7L12.2 5.4C13.1 5.1 14.1 5.5 14.6 6.4C15.1 7.2 14.9 8.3 14.2 9L15.9 10.7C16.8 10.2 17.9 10.4 18.6 11.2C19.4 12 19.4 13.3 18.6 14.1C17.8 14.9 16.5 14.9 15.7 14.1C15 13.4 14.8 12.3 15.3 11.4L13.6 9.7V14.6C13.9 14.8 14.1 15.1 14.2 15.4C14.7 16.3 14.4 17.4 13.6 18.1C12.8 18.8 11.6 18.8 10.8 18C10.1 17.3 9.9 16.2 10.4 15.3V9.7C9.9 9.3 9.7 8.7 9.8 8L8.1 6.3L2.3 12.1C1.9 12.5 1.9 13.1 2.3 13.5L10.7 21.9C11.1 22.3 11.7 22.3 12.1 21.9L21.7 12.3C22.1 11.9 22.1 11.1 21.7 10.7Z"
        fill="#F05032"
      />
      <circle cx="12" cy="7.5" r="1.5" fill="#FFFFFF" />
      <circle cx="12" cy="16.5" r="1.5" fill="#FFFFFF" />
      <circle cx="17" cy="12.5" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

export function GithubIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
      />
    </svg>
  );
}

export function VsCodeIcon({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M17.5 2.2L6.8 11.2L2.5 8L1.2 9.1L4.8 12.4L1.2 15.6L2.5 16.7L6.8 13.5L17.5 22.5L22.8 20V4.7L17.5 2.2Z"
        fill="#0065A9"
      />
      <path d="M17.5 2.2L7.8 11.3L17.5 19.3V2.2Z" fill="#007ACC" />
      <path d="M17.5 19.3L6.8 11.2L4.8 12.4L17.5 22.5V19.3Z" fill="#1F9CF0" />
      <path d="M22.8 4.7L17.5 2.2V7.4L20.8 10L22.8 8.8V4.7Z" fill="#007ACC" />
      <path d="M22.8 20L17.5 22.5V17.3L20.8 14.7L22.8 15.9V20Z" fill="#0065A9" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
