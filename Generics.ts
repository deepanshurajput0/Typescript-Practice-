/// Generics 

// Generics in TypeScript are a powerful feature that allows you to create reusable, flexible, and type-safe components, functions, and classes

function Identity<T> (arg:T): T{
   return arg
}

const results = Identity('deepanshu'
)
console.log(results)


function add <T,U>(a:T,b:U){
    console.log( typeof a) 
    console.log( typeof b) 
}


const ourType = add<number ,string >(2,'deepanshu')



function names<T,L> (nam:T, lNam:L){
    console.log(nam , lNam) 
}

names('deepanshu','verma')


interface Product {
    name:string,
    price:number,
    quantity:number
}


const product1:Product = {
    name:'Laptop',
    price:40000,
    quantity:5
}

console.log(product1)

function totalPrice (product1:Product){
    console.log(product1.quantity * product1.price)
}


totalPrice(product1)









