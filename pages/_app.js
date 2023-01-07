import '../styles/globals.css'
import {Provider, createClient} from 'urql';

// const client = createClient({ url: 'http://localhost:1337/graphql' });

const backendApi = process.env.NEXT_PUBLIC_API_URL;
const client = createClient({ url: backendApi });

export default function App({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  );
}
