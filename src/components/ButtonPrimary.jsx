import React from "react";

const ButtonPrimary = ({ children, className = "", ...rest }) => {
  return (
    <>
      <button
        type="button"
        className={`cursor-pointer border border-transparent bg-[#1c0b0c] px-5 py-2 text-base font-medium text-white transition-colors duration-300 hover:bg-[#f38e8c] ${className}`}
        {...rest}
      >
        {children}
      </button>
    </>
  );
};

export default ButtonPrimary;
