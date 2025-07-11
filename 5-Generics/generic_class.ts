class BottleMaker<T>{
    constructor(public key : T){}
}

let b1 = new BottleMaker<string>("hey");
let b2 = new BottleMaker<number>(12);

console.log(b1, b2);
