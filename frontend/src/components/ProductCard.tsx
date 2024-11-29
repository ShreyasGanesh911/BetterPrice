import React from 'react'
export default function ProductCard({link,title,price,img}:{link:string,title:string,price:string,img: string}) {
  return (
      <a target='_blank' href={link} rel="noreferrer">
            <div className='w-full border border-black h-32 flex my-2 text-white hover:border-white hover'>
        <div className='w-3/4 bg-black h-full flex flex-col justify-center pl-3'>
            <p className='truncate '>{title}</p>
            <p>₹{price?price:null}/-</p>
            <p><a target='_blank' href={link} rel="noreferrer">View Product</a></p>
        </div>
        <div className='w-1/4 bg-black h-full '>
          <img className='object-contain w-full h-full' src={img} alt="" />
        </div>
    </div>
      </a>
  )
}
