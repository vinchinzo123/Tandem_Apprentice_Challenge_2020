import React from "react";

export const Button = ({ handleOnClick, text }) => {
  return (
    <div
      className="my-2 mx-4 rounded-md w-3/5 sm:w-2/5 flex border border-gray-600 transition duration-100 hover:border-transparent hover:shadow-md hover:bg-gray-600 hover:text-white  justify-center"
      key={text}
    >
      <button
        className=" w-screen tracking-wide font-medium"
        name={text}
        onClick={handleOnClick}
      >
        {text}
      </button>
    </div>
  );
};
