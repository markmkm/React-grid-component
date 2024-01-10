import { ComponentProps } from "react";

export default function IconAnotation(props: ComponentProps<"svg">) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      {...props}
    >
      <path
        d="M10.667 12H21.3337"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10.667 17.333H18.667"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 5.33301C25.0609 5.33301 26.0783 5.75444 26.8284 6.50458C27.5786 7.25473 28 8.27214 28 9.33301V19.9997C28 21.0605 27.5786 22.078 26.8284 22.8281C26.0783 23.5782 25.0609 23.9997 24 23.9997H17.3333L10.6667 27.9997V23.9997H8C6.93913 23.9997 5.92172 23.5782 5.17157 22.8281C4.42143 22.078 4 21.0605 4 19.9997V9.33301C4 8.27214 4.42143 7.25473 5.17157 6.50458C5.92172 5.75444 6.93913 5.33301 8 5.33301H24Z"
        stroke="inherit"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
