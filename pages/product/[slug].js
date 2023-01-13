import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";
import { useRouter } from "next/router";
import { ProductDetailsStyle, ProductInfo, Quantity } from "../../styles/ProductDetails";


export default function ProductDetails() {
  //example slug - cable-knit-jumper

  //fetch slug
  const { query } = useRouter();

  //fetch graphql data
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {slug: query.slug },
  });

  const { data, fetching, error } = results;
  //check for data
  if (fetching) return <p>LOADING</p>;
  if (error) return <p>Uh oh, something went wrong. {error.message}</p>
  if (data) console.log({data}, 'do you give me dataaaa');

  const {title,description,image} = data.products.data[0].attributes;


  return(
    <ProductDetailsStyle>
    <img src={image.data.attributes.formats.medium.url} alt={title} />
    <ProductInfo>
    <div>
      <h3>title</h3>
      <p>description</p>
     <Quantity>
        <span>quantity</span>
        <button>+</button>
        <p>0</p>
        <button>-</button>
      </Quantity>
    </div>
    <Buy>add to cart</Buy>
    </ProductInfo>

    </ProductDetailsStyle>
  )
}
