import jwt from 'jsonwebtoken'
import Cart from '../../models/Cart'
import Authenticated from '../../helpers/Authenticated'
import initDb from '../../helpers/initDB'


initDb()


export default async (req,res)=>{
    switch(req.method){
        case "GET":
            await fetchUserCart(req,res)
            break
        case "PUT":
            await fetchUserCart(req,res)  
            break   
        case "DELETE":
            await fetchUserCart(req,res) 
            break   
    }
}



const fetchUserCart =  Authenticated(async (req,res) =>{
         const cart =  await Cart.findOne({user:req.userId})
                    //    .populate("products.product")
         res.status(200).json(cart)
})


