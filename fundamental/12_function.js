//การสร้างฟังชั่นเเบบไม่มีการรับ parameter
function wakeup(){
    console.log("Hey! wakeup now");
}
//ฟังชั่นเเบบมีการรับ parameter
function sayHello(name){
    console.log("Hello : "+name)
}

//ฟังชั่นเบบมี parameter หลายตัว
function calArea(width, height){
    var area = width * height;
    return area;
}

//การเรียกใช้งานฟังชั่น
wakeup();
sayHello("golf");
console.log("พื้นที่คือ: " + calArea(3,4)+ " ตรม");

//ฟังชั่น Expressions
//เป็นการเก็บฟังชั่นลงในตัวเเปร
var action = function (a,b){ // ฟังชั่นเเบบนี้เรียกว่า anonymous functon
    return a*b;
}
var result = action(4,3);

console.log(action(3,5));
console.log(result);