import React from "react";

const Button = ({ id, title, RightIcon, LeftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
    >
      {LeftIcon && <LeftIcon className="text-sm" />}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {RightIcon}
    </button>
  );
};

export default Button;
