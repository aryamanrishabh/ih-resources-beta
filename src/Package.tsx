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

export const Package: React.FC<Props> = ({
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
        d="M16.5 9.40094L7.5 4.21094"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 16.0019V8.00186C20.9996 7.65113 20.9071 7.30667 20.7315 7.00302C20.556 6.69937 20.3037 6.44722 20 6.27186L13 2.27186C12.696 2.09632 12.3511 2.00391 12 2.00391C11.6489 2.00391 11.304 2.09632 11 2.27186L4 6.27186C3.69626 6.44722 3.44398 6.69937 3.26846 7.00302C3.09294 7.30667 3.00036 7.65113 3 8.00186V16.0019C3.00036 16.3526 3.09294 16.697 3.26846 17.0007C3.44398 17.3043 3.69626 17.5565 4 17.7319L11 21.7319C11.304 21.9074 11.6489 21.9998 12 21.9998C12.3511 21.9998 12.696 21.9074 13 21.7319L20 17.7319C20.3037 17.5565 20.556 17.3043 20.7315 17.0007C20.9071 16.697 20.9996 16.3526 21 16.0019Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3.26953 6.96094L11.9995 12.0109L20.7295 6.96094"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 22.08V12"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

Package.defaultProps = defaultProps;
