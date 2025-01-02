/// Advanced typescript Concepts 


// Pick 


interface userData {
    name:string,
    email:string,
    password:string,
    age:number
}


type updatedData = Pick<userData, 'email'|'password'>

function updatedUserData(){

}