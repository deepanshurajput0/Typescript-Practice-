type Info = {
    name:string,
    profession:string,
    age:number,
    nature:string,
    address:{
        city:string,
        country:string
    }
}


const myLife:Info = {
   name:'Deepanshu Verma',
   profession:'Software developer',
   age:20,
   nature:'Introvert & Shy',
   address:{
    city:'Bulandshahr',
    country:'India'
   }
}


console.log(myLife)




type Product ={
    name:string,
    price:number,
    quantity:number
}

const product:Product = {
   name:'Laptop',
   price:120000,
   quantity:5
}


function findTotalAmount(items:Product){
      console.log(items.price * items.quantity)
}

findTotalAmount(product)



