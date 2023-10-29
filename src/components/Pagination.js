import React from "react";

export default function Pagination({ nextPageFun, prevPageFun, nextPBtn }) {
  return (
    <div className="flex justify-center relative z-10">
      <button
        disabled={nextPBtn > 2 ? false : true}
        onClick={prevPageFun}
        className="py-2 px-4 my-5 mx-[50px] bg-green-500 border-none rounded-md text-white cursor-pointer text-base"
      >
        Prev Page
      </button>
      <button
        onClick={nextPageFun}
        className="py-2 px-4 my-5 mx-[50px] bg-green-500 border-none rounded-md text-white cursor-pointer text-base"
      >
        {" "}
        Next Page
      </button>
    </div>
  );
}
