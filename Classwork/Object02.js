/*
Single ton Object

*/

const user=new Object
console.log(user);

const user1={};  //non Single ton Object

user1.id=1234;
user1.name="Taslima";
user1.isLogin=true;

console.log(user1);

//Object inside the object

const user2={
    email:"abc@gmail.com",
    username:{
        fullName:{
            first:"Taslima",
            last:"Jamadar"
        }
    }
};

console.log(user2);
console.log(user2.username.fullName);
console.log(user2.username.fullName.first);

