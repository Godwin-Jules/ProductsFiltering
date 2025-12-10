"use client";

import "@/app/index.css";
import { useState } from "react";

import all_products from "@/db/data";
import Card, { CardProps } from "@/components/Card";
import Sidebar from "@/Sidebar/Sidebar";
import Nav from "@/Navigation/Nav";
import Recommended from "@/Recommended/Recommended";
import Products from "@/Products/Products";

type Props = {};

const ECommerce = (props: Props) => {
  const [selectCategory, setSelectCategory] = useState<any>(null);

  // ------------- Input filter -------------
  const [query, setQuery] = useState("");

  const handleInputChange = (e: any) => {
    setQuery(e.target.value);
  };

  const filteredItems = all_products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ------------- Radio filter -------------
  const handleChange = (e: any) => {
    setSelectCategory(e.target.value);
  };

  // ------------- Buttons filter -------------
  const handleClick = (e: any) => {
    setSelectCategory(e.target.value);
  };

  function filteredProducts(
    products: CardProps[],
    selected: string,
    query: string
  ) {
    let filteredData = products;

    // Filtering Input Items
    if (query) {
      filteredData = filteredItems;
    }

    // Filtering Selected Items
    if (selected) {
      filteredData = filteredData.filter(
        ({ title, newPrice, company, color, category }) => {
          return (
            category === selected ||
            color === selected ||
            company === selected ||
            newPrice == selected ||
            title === selected
          );
        }
      );
    }

    return filteredData.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => {
        return (
          <Card
            key={Math.random()}
            img={img}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
        );
      }
    );
  }

  const products_result = filteredProducts(all_products, selectCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Nav query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products prods={products_result} />
    </>
  );
};

export default ECommerce;
