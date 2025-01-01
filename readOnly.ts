type User1 = {
    name:string,
    role:string,
    age:number
}

const user ={
    name:'deepanshu',
    role:'full Stack Developer',
    age:20
}

user.name = 'vivek'

console.log(user)



/// we can easily update the values in object but what if i want to restrict that object and no one can change the values in object how to do that 


// For this we are using ReadOnly 



const user3:Readonly<User1> ={
    name:'deepanshu',
    role:'full Stack Developer',
    age:20
}



console.log(user3)



// Another real usecase of ReadOnly 


interface Config {
    readonly endpoint: string;
    readonly apiKey: string;
  }
  
  const config: Readonly<Config> = {
    endpoint: 'https://api.example.com',
    apiKey: 'abcdef123456',
  };
  
  // config.apiKey = 'newkey'; // Error: Cannot assign to 'apiKey' because it is a read-only property.