class Player {
  constructor( private height:number, public weight:number, protected power:number){
  }
  get getHeight():number{
    return this.height
  }
  set changeHeight(val:number){
     this.height = val
  }
}

const deep = new Player(100,150,23)
deep.changeHeight = 120
console.log(deep.getHeight)

class Player2 extends Player{
    special:boolean;
    constructor(height:number, weight:number, power:number, special:boolean){
       super(height,weight,power);
       this.special = special
    }
}

// const deep2 = new Player2(100,150,23,true)
// console.log(deep2.weight)
// console.log(deep2.special)



/// classes with interfaces 


interface ProductType {
    name:string,
    price:number,
    stock:number,
}

class Product implements ProductType{
   private id:string = String(Math.random()*1000)
  constructor( public name:string, public price:number, public stock:number){
    
  }
}

const product1 = new Product('Macbook',2000,200)