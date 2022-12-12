import React from "react";

const ProductDetail = () => {
  return (
      <section id="ProductDetail" className="flex h-screen pl-10 font-['Helvetica']">
        <div className="my-auto justify-end">
        <p className="text-5xl font-bold">Product Detail Section</p>
        <p className="text-lg"><br/>TheTumblerCo. pairs a series of various patterns with the high-performing<br/>hydration insulation you know and love.</p>
        <p className="text-lg">Tumbler keeps your beverages cold for 9+ hours and hot for 3 hours.<br/>Stays cold even longer with drinks containing ice.</p>
        <h2 className="text-lg"><br/>FEATURES</h2>
        <ul className="circles">
            <li> Cool for 9+ hours, hot for 3 hours </li>
            <li> Triple insulated </li>
            <li> Easy-grip, flat sides </li>
            <li> Stay-put silicone bottom </li>
            <li> Stainless steel </li>
        </ul>
        <h2 className="text-lg"><br/>DIMENSIONS</h2>
        <ul className="circles">
            <li> Width: 3.63in </li>
            <li> Length: 3.5in </li>
            <li> Height: 6.89in </li>
            <li> Weight: 0.78lb </li>
        </ul>
        </div>
      </section>
  );
};

export default ProductDetail;