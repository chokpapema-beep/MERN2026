let data = {
    email: "lazyfox916@gmail.com",
    password: "Hello@123",
    age: 20,
    gender: "Male"
}

const hashedPassword = "$2326846238432rcvufvufvbcdjvcjwcjew"

data = {
    ...data, //rest 
    password: hashedPassword
}

console.log(data)