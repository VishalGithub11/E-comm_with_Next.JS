import {parseCookies} from 'nookies'
import cookie from 'js-cookie'
import baseUrl from '../helpers/baseUrl'


const cartItem = () => {
  return (
    <div>cartItem</div>
  )
}

export default cartItem



export async function getServerSideProps(ctx){
    console.log('shhhh');
    const {token} = parseCookies(ctx)
    if(!token){
        return {
            props:{products:[]}
        }
    }
    const res =  await fetch(`${baseUrl}/api/numberofproductincart`,{
        headers:{
            "Authorization":token 
        }
    })
    const products =  await res.json()
    console.log('productss', products);
    if(products.error){
        return{
            props:{error:products.error}
        }
    }
   return {
        props:{products}
    }
  }