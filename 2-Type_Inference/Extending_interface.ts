export{}

interface User{
    name : string,
    email : string,
    password : string
}

interface Admin extends User{
    admin : boolean;
}

