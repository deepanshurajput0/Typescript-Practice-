function wishMe(name:string){
   return `Good Morning ${name}`
}


console.log(wishMe('deepanshu'))




// functions returning array 




type Developer = Array<string> 

const developers:Developer = ['deepanshu','shivam','abhay','rishabh','umesh']

function startUpDevs(dev:Developer){
     return dev.map((item)=>[
         console.log(item)
     ])
}
startUpDevs(developers)



/// Sum of array 

let numbers:Array<number> = [12,34,56,87,12,4]
let sum =0;
for(let i=0; i<numbers.length; i++){
  sum += numbers[i]
  console.log(sum)
}



/// arrow functions 
type Name = Array<string>

const anime = (name:Name):Name=>{
     return name
}

console.log(['Idaten Jump','Pokemon','doraemon'])


