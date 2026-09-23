import { useId } from "react";

type Props = {
  className?: string;
  size?: number;
};

export default function LogoMark({ className = "", size = 36 }: Props) {
  const uid = useId().replace(/:/g, "");
  const bgId = `om-mark-bg-${uid}`;
  const sparkId = `om-mark-spark-${uid}`;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 36 36"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden
    >
      <defs>
        <linearGradient id={bgId} x1="6" y1="4" x2="30" y2="32" gradientUnits="userSpaceOnUse">
          <stop stopColor="#9338c1" />
          <stop offset="1" stopColor="#7b3dff" />
        </linearGradient>
        <linearGradient id={sparkId} x1="10" y1="12" x2="24" y2="26" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ffffff" />
          <stop offset="1" stopColor="#e8f5c4" />
        </linearGradient>
      </defs>
      <rect
        x="1"
        y="1"
        width="34"
        height="34"
        rx="10"
        fill={`url(#${bgId})`}
        stroke="rgba(255,255,255,0.28)"
        strokeWidth="1"
      />
      <path
        d="M11.5 12.5c0-.83.67-1.5 1.5-1.5h7.2c2.87 0 5.3 2.43 5.3 5.3 0 1.86-1 3.55-2.62 4.46l-5.38 3.12a.75.75 0 000 1.3l5.38 3.12c1.62.91 2.62 2.6 2.62 4.46 0 2.87-2.43 5.3-5.3 5.3H13a1.5 1.5 0 01-1.5-1.5v-11a1.5 1.5 0 011.5-1.5h6.7c1.05 0 1.9-.85 1.9-1.9s-.85-1.9-1.9-1.9H13a1.5 1.5 0 01-1.5-1.5v-.4z"
        fill={`url(#${sparkId})`}
      />
      <path
        d="M24.2 8.8l.95 1.92 2.12.31-1.53 1.49.36 2.1-1.9-1-.9 1.9-.36-2.1-1.53-1.49 2.12-.31.95-1.92z"
        fill="#b6e368"
      />
    </svg>
  );
}
