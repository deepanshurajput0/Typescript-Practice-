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


