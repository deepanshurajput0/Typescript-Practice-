const form = document.getElementById('myform') as HTMLFormElement;
const myInput = document.querySelector('form > input') as HTMLInputElement;
const container = document.getElementById('container') as HTMLElement; // Add an element with this ID in your HTML

form.onsubmit = (e: SubmitEvent) => {
  e.preventDefault();
  const value =  Number(myInput.value);
  const totalValue = value + 20
  const newElem = document.createElement('h1');
  newElem.innerHTML = String(totalValue) ;

  // Append the new element to a specific container
  container.appendChild(newElem);
};



interface Person {
  [key: string]:string;
}

const myobj:Person ={
  name:'Abhi',
  email:'abhi@gmail.com'
}
const getName =():string=>{
   return myobj['name']
}

const getEmail =():string=>{
   return myobj['email']
}


