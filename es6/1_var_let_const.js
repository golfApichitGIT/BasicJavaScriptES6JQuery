//ปัญหาของการใช้ var
// var name ="John"
// {
//     var name = "Jany"
//     console.warn(name);
// }

// function a(){
//     var name = "Jany"
//     console.warn(name);
// }

// console.warn(name);//John

//ด้วยอย่างปัญหาอื่นๆ ที่เกิดจาก Var
// var messages = ["Hello","JavaScript","es2015"];
// for(var i=0;i<=messages.length;i++){
//     console.warn(i);

//     setTimeout(function(){
//         console.warn(i);
//         console.warn(messages[i])
//     },1000)
// }

// ตัวอย่างการใช้ let
// var fullname;
// var fullname;
// console.log(fullname);

// let fullname;
// let fullname;
// console.log(fullname);

// let name = "John"
// {
//     let name = "Jany"
//     console.log(name);
// }
// console.log(name);

// let messages = ["Hello","JavaScript","es2015"];
// for(let i=0;i<=messages.length;i++){
//     // console.warn(i);

//     setTimeout(function(){
//         // console.warn(i);
//         console.warn(messages[i])
//     },1000)
// }

//ตัวอย่างการใช้ Const
// const firstname = "Samit"
// // ลองเปลี่ยนค่า
// firstname = "Somchai"
// console.log(firstname);

const person = {}
person.name = "Somkid"
person.email = "apihcit.pu@rmuti.ac.th"

console.log(person);