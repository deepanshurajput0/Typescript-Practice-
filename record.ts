type User2 ={
    name:string,
    email:string
}

type userObject = {
    [key:string] : User2
}


const users:userObject = {
    'user1':{
       name:'deep',
       email:"deep@gmail.com"
    },
    'user2':{
        name:'viv',
        email:'viv@gmail.com'
    }
}

// / By using Records 

type Users = Record<string,User2>

const userz = {
    'user1':{
        name:'deep',
        email:"deep@gmail.com"
     },
     'user2':{
         name:'viv',
         email:'viv@gmail.com'
     }
}
console.log(userz)


/// We can do the same thing by using maps


interface userType {
    name:string,
    age:number
}

const users1:Map<string,userType> = new Map()
users1.set('user@1',{name:'deep',age:20})
users1.set('user@2',{name:'viv',age:20})