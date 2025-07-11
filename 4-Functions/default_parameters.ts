function abcd(name:string, age:number, gender:string = "not to be disclosed"){
    console.log(name, age, gender);
    
}

// here we have declared a function with a default parameter which is gender


abcd("ayush", 22, "male")
abcd("rohit", 22)