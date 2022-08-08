import { useEffect, useState } from 'react'
import '../styles/globals.css'

import Layout from '../components/layout'

import store from '../store/store'
import {Provider} from 'react-redux'

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
   <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
     </Layout>
     </Provider>
     </>)
  }
  

}

export default MyApp
