import React from "react";

const ProductDetail = () => {
  return (
      <section id="ProductDetail" className="flex h-screen pl-10 font-['Helvetica'] text-green-900">
        <div className="my-auto justify-end">
          <p className="text-5xl font-bold">Product Detail Section</p>
          <p className="text-lg"><br/>TheTumblerCo. pairs a series of various patterns with the high-performing<br/>hydration insulation you know and love.</p>
          <p className="text-lg mt-2">Tumbler keeps your beverages cold for 9+ hours and hot for 3 hours.<br/>Stays cold even longer with drinks containing ice.</p>
          <div className="flex items-stretch gap-12 px-8 py-4 bg-green-800 mt-4 rounded shadow-2xl text-white">
            <div>
              <h2 className="text-lg font-semibold mb-1 tracking-widest">FEATURES</h2>
              <ul className="list-disc ml-4">
                  <li> Cool for 9+ hours, hot for 3 hours </li>
                  <li> Triple insulated </li>
                  <li> Easy-grip, flat sides </li>
                  <li> Stay-put silicone bottom </li>
                  <li> Stainless steel </li>
              </ul>
            </div>
            <div>
            <h2 className="text-lg font-semibold mb-1 tracking-widest">DIMENSIONS</h2>
              <ul className="list-disc ml-4">
                  <li> Width: 3.63in </li>
                  <li> Length: 3.5in </li>
                  <li> Height: 6.89in </li>
                  <li> Weight: 0.78lb </li>
              </ul>
            </div>
          </div>
          <div className="flex h-12 mt-4 w-20 gap-3">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Food_and_Drug_Administration_logo.svg" alt="FDA" className="p-2" />
            <img src="https://www.astahomeware.com/wp-content/uploads/2020/01/safe-for-food-use-icon-01.png" alt="Food Safe" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/8/89/Symbol_Resin_Code_1_PETE.svg" alt="Type 1 PETE"  />
          </div>
        </div>
      </section>
  );
};

export default ProductDetail;