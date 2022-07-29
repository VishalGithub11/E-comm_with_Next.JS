
const Product = ({product}) => {
  return (
    <div className="" >
        <div class="card">
        <div class="card-image">
          <img src={product.mediaUrl} />
          <span class="card-title">{product.name}</span>
          <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons"> + </i></a>
        </div>
        <div class="card-content">
          <p>{product.description}</p>
        </div>
      </div>
    </div>

    
  )
}

export default Product

export async function getServerSideProps({params}){

    const productId = params.id
    const response = await fetch(`http://localhost:3000/api/product/${productId}`)
    const data = await response.json()

    return{
        props:{
            product: data
        }
    }
}


