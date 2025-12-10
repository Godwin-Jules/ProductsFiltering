import { JSX } from "react";
import "./Products.css";

type Props = {
  prods: JSX.Element[];
};

const Products = ({ prods }: Props) => {
  return <section className="card-container">{prods}</section>;
};

export default Products;
