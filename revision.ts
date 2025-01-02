/// Advanced typescript Concepts 


// Pick 


interface userData {
    name:string,
    email:string,
    password:string,
    age:number
}


type updatedData = Pick<userData, 'email'|'password'>

/// Using Partial 

type newUserData = Partial<updatedData>

function updatedUserData(user:updatedData){

}


interface Book {
    name:string,
    author:string,
    price:number
}

const bookData:Readonly<Book> = {
    name:'Geeky world',
    author:'Dustin Markz',
    price:200
}


// here we can able to add new data. but the question is how to restrict it 
// for this we are using readOnly

// bookData.author = 'Linus Torvalds'

console.log(bookData)


/// Yeh hain aam zindagi 



// interface user {
//   name:string,
//   email:string
// }


// type objectType = {
//     [key:string] : user
// }

// const userData:objectType ={
//     '@user1':{
//         name:'deep',
//         email:"deep@gmail.com"
//     },
//     '@user2':{
//         name:'viv',
//         email:'viv@gmail.com'
//     }
// }


// or ye hai hain mentos zindagi 


interface user {
    name:string,
    email:string
  }
  
  
  
  const userData:Record<string,user> ={
      '@user1':{
          name:'deep',
          email:"deep@gmail.com"
      },
      '@user2':{
          name:'viv',
          email:'viv@gmail.com'
      }
  }
  


  // using Map 

  interface Admin {
    name:string,
    password:string
  }


  const userMap = new Map<string,Admin>()
  userMap.set('@user1',{name:'deep',password:"12345"})
  userMap.set('@user2',{name:'viv',password:"12345"})

