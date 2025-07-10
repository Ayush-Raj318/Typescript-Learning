// ek aisi machine jo produce kr rahi hai final consumable product usko constructor kehte hai

// constructor -> human maker, biscuit maker

// class BottleMaker {
//   constructor(public name: string, public price: number) {}
// }
// let b1 = new BottleMaker("milton", 1200 );

// class HumanMaker{
//     age = 0;
//     constructor(public name : string, public isHandsome : boolean){}
// }

// let h1 = new HumanMaker("Ayush", true)
// let h2 = new HumanMaker("Rohit", false)

class Music{
    constructor(public name:string, public artist: string, public thumbnail:string ='somethumbnail.jpg', public length: number, public free: boolean ){

    }
}

let m1 = new Music("Chaiya chaiya", "sukhvinder", " " , 1200, false);
let m2 = new Music("Vol1", "Honey Singh", "vol.png", 2000, true )
m2.name = "Badshah"
