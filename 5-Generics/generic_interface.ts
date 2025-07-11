interface Hero<T>{
    name : string,
    age : number,
    key : T
}

function abc(obj:Hero<string>){

}

abc({name : "ayush", age : 22, key : "rkjrnrjfjrk"})