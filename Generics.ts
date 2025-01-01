/// Generics 

// Generics in TypeScript are a powerful feature that allows you to create reusable, flexible, and type-safe components, functions, and classes

// function Identity<T> (arg:T): T{
//    return arg
// }

// const results = Identity('deepanshu'
// )
// console.log(results)


// function add <T,U>(a:T,b:U){
//     console.log( typeof a) 
//     console.log( typeof b) 
// }


// const ourType = add<number ,string >(2,'deepanshu')



// function names<T,L> (nam:T, lNam:L){
//     console.log(nam , lNam) 
// }

// names('deepanshu','verma')


// interface Product {
//     name:string,
//     price:number,
//     quantity:number
// }


// const product1:Product = {
//     name:'Laptop',
//     price:40000,
//     quantity:5
// }

// console.log(product1)

// function totalPrice (product1:Product){
//     console.log(product1.quantity * product1.price)
// }


// totalPrice(product1)






// // Generics in Details 

// type Info={
//     name:string,
//     age:number
// }

// const getValue =<T>(data:T,)=>{
//        console.log(data)
// }

// const person1:Info ={
//   name:'deepanshu',
//   age:19
// }

// getValue<Info>(person1)

// type Person2 ={
//     name:string,
//     age:number,
//     email:string
// }
// const user2:Person2 ={
//    name:'deepanshu',
//    age:19,
//    email:'deepanshu@gmail.com'
// }

// type Person1 ={
//     name:string,
//     age:number
// }
// const user:Person1 = {
//    name:'shivam',
//    age:17
// }

// const func=<T, U extends T>(n:T, o:U)=>{
//     return { n, o }
// }

// const ans = func<Person1,Person2>(user,user2)

// console.log(ans)


/// Why we have to use generics 


// Now In this code i have to make my string in uppercase but i am unable to do it beacause of Type of Arr it has two types one is string other is number

// Thats why we have to use generics to handle these situations 

// type Arr = string | number

// This is example how we can use Generics 

function firstElement<T>(arr:T[]){
  return arr[0]
}

const result2 = firstElement<string>(['deep','verma'])
const result3 = firstElement<number>([1,2])
console.log(result2)


