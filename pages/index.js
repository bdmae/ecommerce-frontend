import Head from 'next/head'
import { useQuery } from 'urql'
import { PRODUCT_QUERY } from '../lib/query'

export default function Home() {
  const [results] = useQuery({ query: PRODUCT_QUERY });
  const {data, fetching, error} = results;

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
        <h1>Hello test</h1>
      </main>
    </>
  )
}
