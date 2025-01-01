// interface User {
//     name:string,
//     age:number
// }

// function sumOfAge(user1:User,user2:User){
//    return user1.age + user2.age
// }

// const result4 = sumOfAge({
//     name:'deep',
//     age:20
// },{
//     name:'raman',
//     age:20
// })

// console.log(result4)



/// Using Pick 

// Pick allows you to create a new type by selecting a set of properties (Keys) from an existing type (Type).
// Imagine you have a User model with several properties, but for a user profile display, you only need a subset of these properties.


interface User {
    name:string,
    email:string,
    password:string,
    age:number,
    Single:boolean
}

type UpdatedUser = Pick<User , 'name' | 'email' > 

type UpdatePropsOptional = Partial<UpdatedUser>

function updatedUser(user:UpdatePropsOptional){
   console.log(`${user.name} + ${user.email}`)
}

updatedUser({
    name:'deep'
})