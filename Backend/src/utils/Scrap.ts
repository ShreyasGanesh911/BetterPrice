import puppeteer from "puppeteer";
type List = {
    title: string,
    price: string
    reviews?: string,
    link: string
}
const scrap = async(url:string,titleClass:string,priceClass:string,reviewClass:string,linkClass:string)=>{
    const browser = await puppeteer.launch({headless: true})
    const page = await browser.newPage()
    await page.goto(url)
    const data = await page.evaluate((priceClass,titleClass,reviewClass,linkClass)=>{
        let list:List[] = []
        const titleArr = Array.from(document.querySelectorAll(titleClass)).map(e=>e.innerHTML)
        const priceArr = Array.from(document.getElementsByClassName(priceClass)).map(e=>e.innerHTML)
        const reviewArr = Array.from(document.querySelectorAll(reviewClass)).map(e=>e.innerHTML)
        const linkArr = Array.from(document.querySelectorAll(linkClass) ).map((e)=>(e as HTMLAnchorElement).href)
        let it = Math.min(titleArr.length,priceArr.length)
        for(let i=0;i<it;i++){
            list.push({
                title:titleArr[i],
                price:priceArr[i],
                reviews:reviewArr[i]? reviewArr[i] :"",
                link:linkArr[i]
            })
        }
        return list
    },priceClass,titleClass,reviewClass,linkClass)
    
    await browser.close()

    return data
}

export default scrap
