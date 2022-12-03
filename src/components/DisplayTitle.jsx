import React from "react";

const DisplayTitle = () => {
  return (
      <div className="flex h-screen pl-16 font-['Helvetica'] text-green-900 z-0">
        <div className="m-auto">
            <h1 className="text-[4rem] font-extrabold">Drink More</h1>
            <h1 className="text-[8rem] font-extrabold">Waste Less</h1>
            <p className="text-lg">Introducing our lates most ergnonimic and economical product range of tumblers<br/>for you to satisfy your hydration needs.</p>
            <button className="mt-8 py-4 px-12 rounded-sm bg-green-700 text-white text-xl font-semibold transition hover:bg-green-600 hover:shadow-xl active:text-green-500">See Our Latest Products</button>
        </div>
      </div>
  );
};

export default DisplayTitle;
