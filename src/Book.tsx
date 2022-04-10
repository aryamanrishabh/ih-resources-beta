import React from "react";

interface Props {
  bgColor?: string;
  color?: string;
  className?: string;
  onClick?: React.MouseEventHandler<SVGSVGElement>;
}

const defaultProps: Props = {
  bgColor: "none",
  color: "#000",
  onClick: () => {},
};

export const Book: React.FC<Props> = ({
  bgColor,
  color,
  className,
  onClick,
}) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill={bgColor}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <path
        d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2V2Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Book.defaultProps = defaultProps;
