import React, { useState } from 'react'
import ProductList from '../components/ProductList'
import axios from 'axios'
import Loading from '../components/Loading'
import Hero from '../components/Hero'
import { ProductDetails, Data } from '../Types/Index'

export default function Home() {
    const [search,setSearch] = useState<string>("")
    const [aData,setAData] = useState<ProductDetails[]>()
    const [fData,setFData] = useState<ProductDetails[]>()
    const [showLoad,setShowLoad] = useState<boolean>(false)
    const handleSubmit = async(e: React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault() 
            if(search === "") return 
            setAData(undefined)
            setFData(undefined)
            setShowLoad(true)
            axios.get(`http://localhost:4000/e/products?product=${search}`).then((e)=>{
            const data:Data = e.data
            setAData(data.AmazonData)
            setFData(data.FlipkartData)
            console.log(data)
            setShowLoad(false)
        }).catch(e=>console.log("Some error occured: ",e))
    }
  return (
    <section className='page'>
      <form className='w-full h-36  displayFlex flex-col' onSubmit={handleSubmit}>
            <div className='w-1/2 border-purple-300 bg-purple-500 h-12'>
                <input type="text" className='w-full h-full rounded px-2 outline-none' value={search} placeholder='Type a product name here' onChange={(e)=>setSearch(e.target.value)} />
            </div>
            <div className='mt-3'>
                <button className='border-purple-400 border py-2 px-2 mt-2 rounded-md hover:border-white hover:text-white text-purple-500' >Search Product</button>
            </div>
      </form>
    {showLoad && <Loading/> }
      {
      aData?.length || fData?.length ?
      <>
        <div className='flex h-full'>
        <ProductList title='Flipkart' products={fData}/>
        <ProductList title='Amazon' products={aData}/>
        
      </div>
      </>:  <Hero/>}
      {aData?.length ===0 && fData?.length ===0 ? <p className='text-white'>No products found</p> : null }
    </section>
  )
}
