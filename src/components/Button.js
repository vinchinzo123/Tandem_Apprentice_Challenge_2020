import React from "react";

export const Button = ({ handleOnClick, text }) => {
  return (
    <div
      className=" my-2 mx-4  text-gray-600 rounded-md w-3/5 sm:w-2/5 flex  bg-gray-200 transition duration-100  hover:shadow-lg hover:bg-blue-400 hover:text-white  justify-center"
      key={text}
    >
      <button
        className=" py-2 w-screen tracking-wide font-medium"
        name={text}
        onClick={handleOnClick}
      >
        {text}
      </button>
    </div>
  );
};
