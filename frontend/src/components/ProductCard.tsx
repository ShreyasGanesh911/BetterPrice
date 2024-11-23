import React from 'react'
export default function ProductCard({link,title,price}:{link:string,title:string,price:string}) {
  return (
    <div className='w-full border border-black h-32 flex my-2 text-white hover:border-white hover'>
        <div className='w-3/4 bg-black h-full flex flex-col justify-center pl-3'>
            <p className='truncate '>{title}</p>
            <p>₹{price}/-</p>
            <p><a target='_blank' href={link} rel="noreferrer">View Product</a></p>
        </div>
        <div className='w-1/4 bg-purple-500 h-full'></div>
    </div>
  )
}
