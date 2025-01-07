import type { SVGProps } from "react";

function SUI(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title>Sui</title>
      <g id="chain / sui">
        <rect width="16" height="16" rx="8" fill="#84A7FA" />
        <path
          id="icon"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M5.08456 11.162C5.69238 12.2159 6.78458 12.8474 8.00024 12.8474C9.21589 12.8474 10.3081 12.2159 10.9159 11.162C11.5237 10.108 11.5237 8.84983 10.9159 7.79584L8.35164 3.35201C8.19493 3.08139 7.80554 3.08139 7.64883 3.35201L5.08456 7.79584C4.47198 8.84983 4.47198 10.108 5.08456 11.162ZM7.27844 5.46473L7.82454 4.51519C7.90051 4.38226 8.09996 4.38226 8.17594 4.51519L10.2796 8.16142C10.6642 8.83084 10.7402 9.60471 10.498 10.3169C10.4743 10.2029 10.4363 10.0842 10.3888 9.96554C10.0991 9.22964 9.43908 8.66467 8.43236 8.28486C7.73906 8.02373 7.29743 7.63442 7.12173 7.13592C6.8938 6.49023 7.13598 5.78757 7.27844 5.46473ZM6.34295 7.07894L5.72088 8.16142C5.24601 8.98751 5.24601 9.97028 5.72088 10.7964C6.19574 11.6225 7.0505 12.1115 8.00024 12.1115C8.63181 12.1115 9.22064 11.8931 9.68601 11.5085C9.74775 11.3566 9.93294 10.8011 9.70026 10.2267C9.48657 9.69492 8.97371 9.27237 8.17119 8.96852C7.26894 8.62669 6.68011 8.0902 6.42368 7.37805C6.39044 7.27835 6.3667 7.17865 6.34295 7.07894Z"
          fill="white"
        />
      </g>
    </svg>
  );
}

export default SUI;
