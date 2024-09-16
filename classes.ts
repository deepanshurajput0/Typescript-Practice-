class Player {
  constructor( private height:number, public weight:number, protected power:number){
  }
  getHeight=()=>{
    return this.height
  }
}


class Player2 extends Player{
    special:boolean;
    constructor(height:number, weight:number, power:number, special:boolean){
       super(height,weight,power);
       this.special = special
    }
}
const deep2 = new Player2(100,150,23,true)
console.log(deep2.weight)
console.log(deep2.special)
