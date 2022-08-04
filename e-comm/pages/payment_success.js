import Link from 'next/link';
import {useRouter} from 'next/router'
import React, { useEffect, useState } from 'react'

const Payment_sucess = () => {

  const [sec, setSec] = useState(5)
  const router = useRouter();

  useEffect(()=>{
    if(sec>0){
      setTimeout(()=>{
        setSec(sec - 1)
      }, 1000)
    }
  },[sec])

  useEffect(()=>{
    if(sec == 0){
      router.push('/')
    }
  },[sec])

  return (
    
<div class="row">
    <div class="col s10 m6">
      <div class="card blue-grey darken-1 success_card">
        <div class="card-content white-text">
          <span class="card-title">Payment Successfull</span>
          <p>You will be redirect to Homepage within <span className='sec'> {sec}</span> {sec > 1 ? "seconds" : "second" } </p>
        </div>
        <div class="card-action">
         <Link href="/"><a>homepage</a></Link>
         <Link href="/cart"><a>cart</a></Link>

         
        </div>
      </div>
    </div>
  </div>

     
      
  )
}

export default Payment_sucess