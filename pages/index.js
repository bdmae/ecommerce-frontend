import Head from 'next/head'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'
import Product from '../components/Products';
import { Gallery } from '../styles/Gallery';
import Nav from '../components/Nav';

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const {data, fetching, error} = results;
  const products = data?.products.data;


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
        <Nav></Nav>
        <Gallery>
          {products?.map((product) => (
            <Product key={products.attributes?.slug} product={product} />
          ))}
        </Gallery>
      </main>
    </>
  );
}
