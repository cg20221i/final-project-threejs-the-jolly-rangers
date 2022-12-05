import React from "react";

const DisplayTitle = () => {
  return (
      <section id="DisplayTitle" className="flex h-screen pl-16 font-['Helvetica'] text-green-900 z-0">
        <div className="my-auto">
            <h1 className="text-[4rem] font-extrabold">Drink More</h1>
            <h1 className="text-[8rem] font-extrabold">Waste Less</h1>
            <p className="text-lg">Introducing our lates most ergnonimic and economical product range of tumblers<br/>for you to satisfy your hydration needs.</p>
            <br />
            <a href="#BuyProduct" className="mt-8 py-4 px-12 rounded-sm bg-green-700 text-white text-xl font-semibold select-none cursor-pointer transition hover:text-white hover:bg-green-600 hover:shadow-xl active:text-green-500 visited:text-white">Get This Tumbler Right Now!</a>
        </div>
      </section>
  );
};

export default DisplayTitle;
