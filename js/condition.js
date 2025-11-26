// const a=10
// if(a<10){
//     console.log(true)
// }
// else if(a==10)


const data = {
    email: "email@gmail.com",
    password:"Hello@123",
    isVerified: true,
}
const userInput = "email@gmail.com"
const userInput2 = "Hello@123"

if(data.email == userInput){
  if(data.password == userInput2){
    if(data.isVerified == true){
        console.log("Access Granted")
    }
    else{
        console.log("User not verified")
    }
  }
  else{
    console.log("Invalid Password")
  }
}
else{
    console.log("Invalid Email")
} 