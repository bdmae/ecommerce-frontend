import { useQuery } from "urql";
import { GET_PRODUCT_QUERY } from "../../lib/query";


export default function ProductDetails() {
  //example slug - cable-knit-jumper
  const [results] = useQuery({
    query: GET_PRODUCT_QUERY,
    variables: {slug: 'cable-knit-jumper' },
  });

  const { data, fetching, error } = results;
  //check for data
  if (fetching) return <p>LOADING</p>;
  if (error) return <p>Uh oh, something went wrong. {error.message}</p>
  if (data) console.log(data);

  return(
    <div>
    <img src="" alt="" />
    <div>
      <h3>title</h3>
      <p>description</p>
    </div>
    <div>
      <span>quantity</span>
      <button>+</button>
      <p>0</p>
      <button>-</button>
    </div>
    <button>add to cart</button>
    </div>
  )
}
