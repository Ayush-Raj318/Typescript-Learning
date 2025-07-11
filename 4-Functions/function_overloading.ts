// pehle function signature create karenge fir batayemge ko functiom kya return karega

function bac(a:string) : void;
function bac(a:string, b: number): number;

function bac(a:any, b?:any){
    if(typeof a === "string" && typeof b === undefined){
        console.log("hey");
    }
    if(typeof a === "string" && typeof b === "number"){
        return 123;
    }
    else throw new Error("Something is Wrong");
}

bac('HEY');
bac("hey", 12);