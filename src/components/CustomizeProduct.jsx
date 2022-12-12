import React from "react";

const CustomizeProduct = () => {
  return (
      <section id="CustomizeProduct" className="flex h-screen pl-10 font-['Helvetica'] text-green-900">
        <div className="my-auto justify-end">
          <p className="text-5xl font-bold">Customize and See!</p>
          <p className="text-lg my-2">Try out a variety of our curated designs to put in your soon-to-be tumblers!</p>
          <div className="grid grid-cols-3 gap-4 h-[50vh] w-[50rem] text-white">
            <button id="texture-1" className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text1.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Flowing</h3>
                <p className="text-left">Going with the flow of time.</p>
             </div>
            </button>
            <button id="texture-2" className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text2.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Intricate</h3>
                <p className="text-left">Going for serious mode.</p>
             </div>
            </button>
            <button id="texture-3" className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text3.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Modern Art</h3>
                <p className="text-left">For the creative in mind.</p>
             </div>
            </button>
            <button id="texture-4" className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text4.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Funtime</h3>
                <p className="text-left">Chaos meets fun.</p>
             </div>
            </button>
            <button id="texture-5" className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text5.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Green</h3>
                <p className="text-left">Change the world better.</p>
             </div>
            </button>
            <button id="texture-6" className="relative bg-white rounded h-64 transition ease-out duration-150 hover:shadow-xl hover:-translate-y-2 p-0 hover:ring hover:ring-green-100 active:-translate-y-1 active:shadow-lg">
             <img src="./src/assets/texture-set/Text6.png" alt="Design" className="object-cover h-full w-full rounded transition"/>
             <div className="rounded absolute bottom-0 w-full bg-gradient-to-t from-black py-3 px-4">
                <h3 className="text-3xl font-bold text-left">Traditional</h3>
                <p className="text-left">Elegance in culture.</p>
             </div>
            </button>
          </div>
        </div>
      </section>
  );
};

export default CustomizeProduct;