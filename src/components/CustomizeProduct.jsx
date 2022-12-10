import React from "react";

const CustomizeProduct = () => {
  return (
      <section id="CustomizeProduct" className="flex h-screen pl-10 font-['Helvetica']">
        <div className="my-auto justify-end">
          <p className="text-5xl font-bold">Customize Product Section</p>
          <p className="text-lg my-2">Try out a variety of our curated designs to put in your soon-to-be tumblers!</p>
          <div className="grid grid-cols-3 gap-4 h-[50vh] w-[50rem] text-white">
            <button className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text1.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Design 1</h3>
                <p className="text-left">Whe you are feeling fancy!</p>
             </div>
            </button>
            <button className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text2.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Design 2</h3>
                <p className="text-left">Whe you are feeling fancy!</p>
             </div>
            </button>
            <button className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text3.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Design 3</h3>
                <p className="text-left">Whe you are feeling fancy!</p>
             </div>
            </button>
            <button className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text4.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Design 4</h3>
                <p className="text-left">Whe you are feeling fancy!</p>
             </div>
            </button>
            <button className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text5.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Design 5</h3>
                <p className="text-left">Whe you are feeling fancy!</p>
             </div>
            </button>
            <button className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text6.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Design 6</h3>
                <p className="text-left">Whe you are feeling fancy!</p>
             </div>
            </button>
          </div>
        </div>
      </section>
  );
};

export default CustomizeProduct;