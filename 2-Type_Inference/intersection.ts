export{}

type User = {
    name : string,
    email : string
}

type Admin = User & {
    getDetails(user : string) : void
}

function abcd(a:Admin){
    a.email
    a.getDetails
}