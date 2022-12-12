import React from "react";

const BuyProduct = () => {
  return (
      <section id="BuyProduct" className="flex h-screen w-auto pl-10 font-['Helvetica'] text-green-900">
        <div className="my-auto justify-end">
          <h1 className="text-8xl font-semibold">13.42 USD</h1>
          <p className="text-xl mb-5">-100% Discount!</p>
            <a href="">
                <h2 className=" text-center text-3xl font-bold text-white bg-green-700 py-4 px-10 rounded-full shadow-xl transition select-none cursor-pointer shadow-lg transition hover:text-white hover:bg-green-600 hover:shadow-xl active:text-white visited:text-white hover:scale-105 active:scale-100 active:bg-green-800">Buy & Order Now</h2>
            </a>
            <p className="text-lg mt-4">Includes Free Shipping!*</p>
        </div>
      </section>
  );
};

export default BuyProduct;