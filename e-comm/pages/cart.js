import {parseCookies} from 'nookies'

const Cart = () => {
  return (
    <div> <h2>Cart</h2></div>
  )
}

export default Cart

export async function getServerSideProps(ctx){
    const {token} = parseCookies(ctx)
    if(!token){
        const {res} = ctx
        res.writeHead(302,{Location:"/login"})
        res.end()
    }
  
    // const res = await fetch(`${baseUrl}/api/orders`,{
    //     headers:{
    //         "Authorization":token
    //     }
    // })
    // const res2 =  await res.json()
    // console.log(res2)
  
    // return {
    //     props:{orders:res2}
    // }
  }