import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";
import type { Product } from "../types/shopTypes";

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState<Product[]>([]);
  const [category, setCategory] = useState<string[]>([]);
  const [subCategory, setSubCategory] = useState<string[]>([]);
  const [sort, setSort] = useState<string>("relavent");

  const handleCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (category.includes(e.target.value)) {
      setCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setCategory((prev) => [...prev, e.target.value]);
    }
  };

  const handleSubCategory = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory((prev) => prev.filter((item) => item !== e.target.value));
    } else {
      setSubCategory((prev) => [...prev, e.target.value]);
    }
  };

  const applyFilter = () => {
    let filteredProducts = products.slice();

    if (showSearch && search.length > 0) {
      filteredProducts = filteredProducts.filter((item: Product) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (category.length > 0) {
      filteredProducts = filteredProducts.filter((item: Product) =>
        category.includes(item.category)
      );
    }
    if (subCategory.length > 0) {
      filteredProducts = filteredProducts.filter((item: Product) =>
        subCategory.includes(item.subCategory)
      );
    }

    setFilterProducts(filteredProducts);
  };

  const sortProduct = () => {
    let filteredProductsCopy = filterProducts.slice();

    switch (sort) {
      case "low-high":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => a.price - b.price)
        );
        break;
      case "high-low":
        setFilterProducts(
          filteredProductsCopy.sort((a, b) => b.price - a.price)
        );
        break;
      default:
        applyFilter();
        break;
    }
  };

  useEffect(() => {
    applyFilter();
  }, [category, subCategory, search, showSearch]);

  useEffect(() => {
    sortProduct();
  }, [sort]);

  return (
    <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
      {/* Filter options */}
      <div className="min-w-60">
        <p
          onClick={() => setShowFilter(!showFilter)}
          className="my-2 text-xl flex items-center cursor-pointer gap-2"
        >
          FILTERS
          <img
            className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
            src={assets.dropdown_icon}
            alt="dropdown"
          />
        </p>
        <div
          className={`border border-gray-300 pl-5 py-3 mt-6 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">CATEGORIES</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"components"}
                onChange={handleCategory}
              />{" "}
              Components
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"peripherals"}
                onChange={handleCategory}
              />{" "}
              Peripherals
            </p>
          </div>
        </div>

        <div
          className={`border border-gray-300 pl-5 py-3 my-5 ${
            showFilter ? "" : "hidden"
          } sm:block`}
        >
          <p className="mb-3 text-sm font-medium">TYPE</p>
          <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"processor"}
                onChange={handleSubCategory}
              />{" "}
              Processor
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"graphics"}
                onChange={handleSubCategory}
              />{" "}
              Graphics
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"memory"}
                onChange={handleSubCategory}
              />{" "}
              Memory
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"storage"}
                onChange={handleSubCategory}
              />{" "}
              Storage
            </p>
            <p className="flex gap-2">
              <input
                type="checkbox"
                className="w-3"
                value={"motherboard"}
                onChange={handleSubCategory}
              />{" "}
              Motherboard
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <div className="flex justify-between text-base sm:text-2xl mb-4">
          <Title text1={"ALL"} text2={"COLLECTIONS"} />

          {/* Product Sort */}
          <select
            onChange={(e) => setSort(e.target.value)}
            className="border-2 border-gray-300 text-sm px-2"
          >
            <option value="relavent" className="text-sm">
              Sort by: Relavent
            </option>
            <option value="low-high" className="text-sm">
              Sort by: Low to High
            </option>
            <option value="high-low" className="text-sm">
              Sort by: High to Low
            </option>
          </select>
        </div>

        {/* Map Products */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
          {filterProducts.map((item, index) => (
            <ProductItem
              key={index}
              name={item.name}
              id={item._id}
              price={item.price}
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
