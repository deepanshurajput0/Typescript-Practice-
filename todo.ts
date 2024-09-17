

const myform = document.getElementById('myform') as HTMLFormElement
const myInput = document.querySelector('form > input') as HTMLInputElement

myform.onsubmit =(e: SubmitEvent)=>{
  e.preventDefault()
  const value = myInput.value
  const todos:Array<string> = []
  todos.push(value)
  const h2 = document.createElement('h2')
   todos.forEach((item)=>{
     const todoItem = item
     h2.textContent = todoItem
     document.body.appendChild(h2)
   })
   
}




