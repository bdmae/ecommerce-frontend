import styled from "styled-components";
import { ProductStyle } from "../styles/ProductStyle";

export default function Product({ product }) {

  //extract the info from props
  const { title, price, image } = product.attributes;
  console.log({product}, "main product");
  console.log("inside product", {image});
  return (
    <ProductStyle>
        <h1>hello there</h1>
        <div>
          <img src={image.data.attributes.formats?.small?.url} alt="" />
        </div>
        <h2>title</h2>
        <h3>price</h3>
    </ProductStyle>
  );
}

