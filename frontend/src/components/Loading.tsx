import React from 'react'

export default function Loading() {
  return (
    <>
     <div className='w-full h-full  text-white displayFlex scroll-m-2' style={{height:"60vh"}}>
        <p className='animate-bounce text-2xl font-semibold'>Fetching data</p>
      </div> 
    </>
  )
}
