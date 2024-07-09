const animes:Array<string> = ['Idaten Jump','Pokemon','doraemon','kirmada']
animes.forEach((item)=>{
  console.log(item)
})


const result1 = animes.map((items)=>{
  return items
})

console.log(result1)

type Num = Array<number>

const digits:Num = [23,45,76,78,988,9]

const result = digits.filter((num)=>{
    return num % 2 === 0
})

console.log(result)






