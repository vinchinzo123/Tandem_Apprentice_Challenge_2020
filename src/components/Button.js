import React from "react";

export const Button = ({ handleOnClick, text }) => {
  return (
    <div
      className=" my-2 mx-4  text-gray-600 w-3/5 sm:w-2/5 flex rounded-full  bg-gray-200 transition duration-100  hover:shadow-lg hover:bg-blue-400 hover:text-white  justify-center"
      key={text}
    >
      <button
        className=" py-2 w-screen focus:outline-none rounded-full tracking-wide font-medium"
        name={text}
        onClick={handleOnClick}
      >
        {text}
      </button>
    </div>
  );
};
