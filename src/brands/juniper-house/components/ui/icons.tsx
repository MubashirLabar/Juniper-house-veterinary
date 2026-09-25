import type { SVGProps } from "react";

/**
 * Line icons drawn for Juniper House on a 24px grid.
 * Stroke follows `currentColor`, so color comes from a text-* class.
 */
const paths = {
  alert: (
    <>
      <path d="M12 4l9 16H3z" />
      <path d="M12 10v4M12 17v.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7 3v5c0 5-3 8.5-7 10-4-1.5-7-5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  message: (
    <>
      <path d="M5 5h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-9l-4 3v-3H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2z" />
      <path d="M7.5 10h9M7.5 13h5" />
    </>
  ),
  doorway: (
    <>
      <path d="M6 21V10a6 6 0 0 1 12 0v11" />
      <path d="M3 21h18" />
      <path d="M12 4v17" />
      <circle cx="10" cy="14" r=".6" />
      <circle cx="14" cy="14" r=".6" />
    </>
  ),
  leaf: (
    <>
      <path d="M5 19C5 10 11 5 20 5c0 9-5 14-14 14" />
      <path d="M5 19l8-8" />
    </>
  ),
  diagnostics: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.3-4.3" />
      <path d="M7.5 11h1.8l1-2 1.6 4 1-2h1.6" />
    </>
  ),
  tooth: (
    <path d="M7 4c-2 0-3 2-3 4 0 3 1 5 2 7s1 5 2.5 5 1.5-4 3.5-4 2 4 3.5 4 1.5-3 2.5-5 2-4 2-7c0-2-1-4-3-4s-3 1-5 1-3-1-5-1z" />
  ),
  heart: <path d="M12 20s-7-4.5-7-9.5A3.5 3.5 0 0 1 12 8a3.5 3.5 0 0 1 7 2.5C19 15.5 12 20 12 20z" />,
  moon: <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />,
  calendar: (
    <>
      <rect x="4" y="5" width="16" height="15" rx="2" />
      <path d="M4 10h16M9 3v4M15 3v4" />
      <path d="M9 15l2 2 4-4" />
    </>
  ),
  home: (
    <>
      <path d="M4 11l8-6 8 6v9H4z" />
      <path d="M10 20v-5h4v5" />
    </>
  ),
  pin: (
    <>
      <path d="M12 21s-7-6.5-7-12a7 7 0 0 1 14 0c0 5.5-7 12-7 12z" />
      <circle cx="12" cy="9" r="2.5" />
    </>
  ),
  clock: (
    <>
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </>
  ),
  phone: <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a1 1 0 0 1-1 1A16 16 0 0 1 4 5a1 1 0 0 1 1-1z" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  menu: <path d="M4 9h16M4 15h16" />,
  close: <path d="M6 6l12 12M18 6L6 18" />,
} as const;

export type IconName = keyof typeof paths;

type IconProps = Omit<SVGProps<SVGSVGElement>, "name"> & {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

export function Icon({ name, size = 24, strokeWidth = 1.5, ...props }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      {paths[name]}
    </svg>
  );
}
