import type { SVGProps } from "react";

function NavArrow(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Navigation Arrow</title>
      <path
        d="M2.66687 11.3333H13.3335M13.3335 11.3333L10.6669 8.66665M13.3335 11.3333L10.6669 14M13.3335 4.66665H2.66687M2.66687 4.66665L5.33354 1.99998M2.66687 4.66665L5.33354 7.33332"
        stroke="#232323"
        strokeWidth="0.851064"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default NavArrow;
