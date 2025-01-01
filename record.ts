// Record 

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