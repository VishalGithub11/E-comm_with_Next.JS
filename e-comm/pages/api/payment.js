import Stripe from 'stripe'
import {v4 as uuidV4 } from 'uuid'
import Cart from '../../models/Cart'
import jwt from 'jsonwebtoken'
import User from '../../models/User'
// import Order from '../../models/Order'
import initDb from '../../helpers/initDB'


initDb()


const stripe = Stripe(process.env.STRIPE_SECRET_KEY)
export default async (req,res)=>{
    // const {paymentInfo} = req.body
    const {authorization} = req.headers
    if(!authorization){
        return res.status(401).json({error:"you must logged in"})
    }
   
    try{
          const {userId} = jwt.verify(authorization,process.env.JWT_SECRET)   
          
            
          
          

        //   const cart = await Cart.findOne({user:userId}).populate("products.product")
        //   let price  = 0
        //   cart.products.forEach(item=>{
        //     price = price + item.quantity * item.product.price
        //   })

        // email:paymentInfo.email,
          const prevCustomer = await stripe.customers.list({
              email: req.body.email
          })
          const isExistingCustomer  = prevCustomer.data.length > 0
          let newCustomer
          if(!isExistingCustomer){
               newCustomer =  await stripe.customers.create({
                email: req.body.email
              })
          }

        //   const line_items = req.body.item.products.map((item)=>{
        //    return item.product
        //   }).map((product)=>{
        //     return {
        //         price_data:{
        //             currency: "INR",
        //             product_data:{
        //                 name: product.name,
        //             },
        //             unit_amount: product.price * 100,
        //         },
        //         quantity: 1
        //     }
        //   })

        const line_items = [{
            price_data: {
              currency: "usd",
              product_data: {
                name: 'some name',
                
                description: "some description",
                metadata: {
                  id: 'some item id',
                },
              },
              unit_amount: 200 * 100,
            },
            quantity: 2,
          }];

          console.log('items', line_items);

        //  await stripe.charges.create(
        //       {
        //           currency:"USD",
        //           amount: price * 100,
        //           receipt_email:paymentInfo.email,
        //           customer: isExistingCustomer ? prevCustomer.data[0].id : newCustomer.id,
        //           description:`you purchased a product | ${paymentInfo.email}`
        //       },{
        //         idempotencyKey:uuidV4()  
        //       }
        //   )
        const session =   await stripe.checkout.sessions.create({
            success_url: 'http://localhost:3000/payment_success',
            cancel_url: 'http://localhost:3000/cart',
            line_items,
            customer: isExistingCustomer ? prevCustomer.data[0].id : newCustomer.id,
            mode: 'payment',  
        }, {
                idempotencyKey:uuidV4()  
                  }
          )
        //   await new Order({
        //       user:userId,
        //       email:paymentInfo.email,
        //       total:price,
        //       products:cart.products
        //   }).save()
        //   await Cart.findOneAndUpdate(
        //       {_id:cart._id},
        //       {$set:{products:[]}}
        //   )

        console.log('session', session);
        res.send({ url: session.url })
        // res.status(200).json(line_items)
         
    }catch(err){
        console.log(err)
        return res.status(401).json({error:"error processing payment"})
    }
   

}