export{}

// Interfaces and type aliases

interface User{
    name : string,
    email : string,
    password: string,
    gender?: string
}

//obj ko shakal user ke jaisi hai or obj user type ka hai yaa user interface hai

function getDataofUser(obj : User){
}

getDataofUser({ name : "ayush", email:"ayush@gmail.con", password:"password"
 })