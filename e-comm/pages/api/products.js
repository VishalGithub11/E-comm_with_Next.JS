// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import initDB from "../../helpers/initDB"
import Product from "../../models/Product"

initDB()

export default function handler(req, res) {
  Product.find().then(products=>{
    console.log("response", res.status);
    res.status(200).json(products)
  })
  // res.status(200).json({ name: 'John Doe' })
}
