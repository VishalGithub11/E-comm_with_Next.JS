import {parseCookies} from 'nookies'

const Account = () => {
  return (
    <div><h2>Account page</h2></div>
  )
}

export default Account


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
  
    return {
        props:{}
    }
  }