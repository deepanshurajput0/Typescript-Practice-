/// practice  typescript 


// type notations


const fullName:string = 'deepanshu'
console.log(fullName)



// find sum of first 10 natural numbers 
let nums:Array<number> = [1,2,3,4,5,6,7,8,9,10]
// let sums = 0;

// for(let i=0; i<nums.length; i++){
//    sums += nums[i]
//    console.log(sums)
// }




/// by using reduce method 


function findSumofArray(num:Array<number>){
       return num.reduce((acc,v)=>(
         acc+v
     ))
}


console.log(findSumofArray(nums))




/// type 



type Products={
  name:string,
  price:number,
  exp:boolean,
  orderedFrom:string
}



const products:Products = {
   name:'Creatine',
   price:300,
   exp:false,
   orderedFrom:'Amazon'
}



for( let product in products ){
    console.log(product)
}

console.log(products)



interface Features {
    display:string,
    RAM:number | string,
    processor:string,
    ssd:string

}

interface Features2 extends Features {
   speaker:string,
   keyboard:string 
}


const laptop:Features2 = {
   display:'Oled Dispaly',
   RAM:'4GB',
   processor:'intel core i5',
   ssd:'512 GB',
   speaker:'harman kardon',
   keyboard:'backlight'
}






console.log(laptop)










