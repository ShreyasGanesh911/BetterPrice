import ProductCard from './ProductCard'
import { ProductDetails } from '../Types/Index'
type Props = {
    title:string,
    products:ProductDetails[] | undefined
}
export default function ProductList({title,products}:Props) {
  return (
    <>
        <div className='w-1/2  min-h-96 h-auto px-1'>
            <div className='w-full h-24 border-r border-l displayFlex'>
                <h2 className='text-5xl font-thin text-white'>{title}</h2>
            </div>
            {products?.map((e,i)=><ProductCard title={e.title} price = {e.price} key={i} link={e.link} img={e.img}/>)}
            
        </div>
    </>
  )
}
