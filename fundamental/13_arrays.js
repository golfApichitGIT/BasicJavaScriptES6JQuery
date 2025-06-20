//Basic Arrays

var name = ['john','joe','jack','jane'];//จะเกิดปัญหาเมื่อเรียกใช่งานสมาชิกในตัวเเปร name นี้
var fruits = new Array('Apple','Banana','Orange','Mango');

//ex
//console.log(typeof(name));
//console.log(typeof(window.name));//is string

//เเสดงผลสมาชิกออกมา
//console.log(name);
//เรียกชนิดข้อมูลตัวเเปรนี้
//console.log(typeof(name));

var firstname = ['john','joe','jack','jane'];

console.log(firstname[0]);
console.log(firstname[1], firstname[3]);

//เปลี่ยนค่าสมาชิก
firstname[1] = "Jany";
console.log(firstname);

//เพิ่มสมาชิกใหม่
firstname[4] = "johny"
console.log(firstname);
console.log(fruits);

//การวนลูปอ่านสมาชิกของ Array
for(var i =0;firstname[i];i++){
    console.log(firstname[i]);
}

//การวนลูปด้วยฟังชั่น forEach
fruits.forEach(myFruit);

function myFruit(value){
    console.log(value);
}