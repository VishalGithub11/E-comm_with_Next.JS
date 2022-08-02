import { useEffect, useState } from 'react'
import '../styles/globals.css'

import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {

  const [domLoaded, setDomLoaded] = useState(false);
  useEffect(() => {
    setDomLoaded(true);
  }, []);

  if (!domLoaded) {
    return null;
  }

  if (typeof window !== 'undefined') {
    return (<>
      <Layout>
        <Component {...pageProps} />
     </Layout>
     </>)
  }
  

}

export default MyApp
