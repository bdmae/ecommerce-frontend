import Head from 'next/head'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import Product from '../components/Products';

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const {data, fetching, error} = results;
  console.log({data});
  const products = data?.products.data;

  console.log({products}, "got the products");


  if (fetching) return <p>LOADING</p>;
  if (error) return <p>Uh oh, something went wrong. {error.message}</p>
  if (data) console.log(data);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <h1>hello</h1>
        {products?.map((product) => (
          <Product key={products.attributes?.slug} product={product}/>
        ))}
      </main>
    </>
  )
}
