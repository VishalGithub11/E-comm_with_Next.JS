import Head from "next/head"
import Navbar from "./navbar"

export default function Layout  (props)  {
   
  return (
    <>
    <Head>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/css/materialize.min.css" />

    </Head>
    <Navbar />
    {props.children}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/materialize/1.0.0/js/materialize.min.js"></script>
</>
  )
}

