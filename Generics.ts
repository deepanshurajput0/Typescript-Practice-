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
















