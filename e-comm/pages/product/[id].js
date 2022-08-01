import {useRef, useEffect} from 'react'
import baseUrl from "../../helpers/baseUrl"
import { useRouter } from "next/router"

const Product = ({product}) => {
  const modalRef = useRef(null)

  const router = useRouter()
  
  if(router.isFallback){
    return(
      <div>
        <h3>Loading...</h3>
      </div>
    )
  }

  useEffect(()=>{
     M.Modal.init(modalRef.current);
  },[])

  const getModals = ()=>{
    return (
      <div id="modal1" class="modal" ref={modalRef}>
    <div className="modal-content">
      <h4>{product.name}</h4>
      <p>Are you sure want to delete this ?</p>
    </div>
    <div className="modal-footer">
    <a class="modal-close waves-effect waves-light btn #f44336 red">YES</a>
    <a class="modal-close waves-effect waves-light btn #757575 grey darken-1">No</a>
    </div>
  </div>
    )
  }

  return (
    <div className="" >
        <div class="card">
        <div class="card-image">
          <img src={product.mediaUrl} />
          <span class="card-title">{product.name}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red">
            {/* <div> */}
            {/* <i class="material-icons"> add </i>  */}
            <i className="material-icons">
            shopping_cart
            </i>
            <span style={{position: "absolute",
    left: "28px",
    top: "-10px"}} >
            3
            </span>
            {/* </div> */}
            </a>
          {/* <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"> <input /> </i></a> */}
        </div>
        <div className="card-content">
          <p>{product.description}</p>
        </div>
        <hr />
        <div className="card-content #ffca28-text amber-text lighten-1">
          <p>&#x20B9; {product.price}</p> 
          <div style={{display:"grid", gridTemplateColumns: "40% 30% 30%"}}>
            
          <input placeholder="add items"  /> 
          <span></span> <a className="btn-floating btn-large waves-effect #4caf50 green "><i class="material-icons">add</i></a>
          </div>
          <a data-target="modal1"className="btn modal-trigger waves-effect waves-light btn #f44336 red">Delete</a>
         
         {getModals()}
        </div>
      </div>
    </div>

    
  )
}

export default Product

// export async function getServerSideProps({params}){

//     const productId = params.id
//     const response = await fetch(`${baseUrl}/api/product/${productId}`)
//     const data = await response.json()

//     return{
//         props:{
//             product: data
//         }
//     }
// }

export async function getStaticPaths(){
  return { 
    paths:[
      {
        params: {id: '62e3e783240b8ee54290e1bb'}
      }
    ], 
    fallback: true
  }
}

export async function getStaticProps({params}){
  const productId = params.id
      const response = await fetch(`${baseUrl}/api/product/${productId}`)
      const data = await response.json()


return {
  props:{
    product: data
  }
}
}


