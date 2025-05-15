import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import type { Product } from "../types/shopTypes";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState<Product[]>([]);

  useEffect(() => {
    const bestSellers = products.filter((item: Product) => item.bestseller);
    setBestSeller(bestSellers.slice(0, 5));
  }, []);
  return (
    <div className="my-10">
      <div className="text-center text-3xl py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />
        <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          fringilla, nunc in facilisis efficitur, nisi nunc aliquet nunc, eget
          aliquam nunc nunc eget nunc.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
        {
          bestSeller.map((item, index) => (
            <ProductItem key={index} id={item._id} image={item.image} name={item.name} price={item.price} />
          ))
        }
      </div>
    </div>
  );
};

export default BestSeller;
