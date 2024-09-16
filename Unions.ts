/// Unions 


function Input(value:string | number | boolean){
      return value
}


console.log(Input('deepanshu'))




const userInput =(value:string | number)=>{
   if(typeof value === 'number'){
    return value*2
   }else{
    return value.toUpperCase()
   }
}


console.log(userInput(24))



const homework =(value:string | number | boolean)=>{
   if(typeof value === 'number'){
    return ` $ ${value / 100 }`
   }else if( typeof value === 'string' ){
      return value.toString()[0].toUpperCase()+value.slice(1)
   }else{
    return value === true ? 'Yes' : 'No'
   }
}


console.log(homework('deepanshu'))


