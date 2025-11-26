import React, { useEffect } from "react";
import usefetch from "./usefetch";
import ProductCard from "./ProductCard";

function ProductsCompo() {
  // const { data, fetchdata } = usefetch(
  //   "https://691c6d5e3aaeed735c90cb31.mockapi.io/products"
  // );

  // useEffect(() => {
  //   fetchdata();
  // }, []);

  return (
    // <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-6">
    //   {data.map((item) => (
    //     <ProductCard key={item.id} item={item} />
    //   ))}
    // </div>

    <div class="bg-yellow-500 text-black text-center py-2 font-semibold">
      🚧 Preview Mode: Project Under Development
    </div>
  );
}

export default ProductsCompo;
