export type ProductDetails = {
    title:string
    price: string
    link:string,
    img: string
}

export type Data = {
    success: boolean
    message: string
    product: string
    AmazonData:ProductDetails[]
    FlipkartData:ProductDetails[]
}