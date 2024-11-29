import puppeteer from "puppeteer";
import { Attributes } from "../assets/attributes.js";
type List = {
    title: string,
    price: string
    link: string,
    img: string
}

const scrap = async(url:string,obj:Attributes)=>{
    const browser = await puppeteer.launch({headless: true,userDataDir:"./temp"})
    const page = await browser.newPage()
    await page.goto(url)

    const data = await page.evaluate((obj)=>{
        let list:List[] = []
        let titleArr,priceArr,linkArr,imgArr
        titleArr = Array.from(document.querySelectorAll(obj.title1)).map(e=>e.innerHTML)
       
        if(titleArr.length<2){
            titleArr = Array.from(document.querySelectorAll(obj.title2)).map(e=>e.innerHTML)
            priceArr = Array.from(document.getElementsByClassName(obj.price2)).map(e=>e.innerHTML)
            linkArr = Array.from(document.querySelectorAll(obj.link2)).map((e)=>(e as HTMLAnchorElement).href)
            imgArr = Array.from(document.getElementsByClassName(obj.pic2)).map((e)=>(e as HTMLImageElement).src)
        }
        else{
            priceArr = Array.from(document.getElementsByClassName(obj.price1)).map(e=>e.innerHTML)
            linkArr = Array.from(document.querySelectorAll(obj.link1) ).map((e)=>(e as HTMLAnchorElement).href)
            imgArr = Array.from(document.getElementsByClassName(obj.pic1)).map((e)=>(e as HTMLImageElement).src)
        }
       
       
        let it = Math.min(titleArr.length,priceArr.length)
        for(let i=0;i<titleArr.length;i++){
            list.push({
                title:titleArr[i],
                price:priceArr[i],
                link:linkArr[i],
                img: imgArr[i]
            })
        }
        return list
    },obj)
    
    await browser.close()

    return data
}

export default scrap
