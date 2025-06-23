//ES5 
var greet = function(name,message){
    return message+name
}

console.log(greet('Golf','Apichit'));

//ES6
// var arrowGreet = (name,message) =>{
//     return message+name
// }

// ลดรุปกรณีมีการ Return เียงอย่างเดียว
// var arrowGreet = (name,message) => message+name

//ลดรูปต่อไปอีก ถ้าฟังชั้นมีการรับเพียง 1 parameter
var arrowGreet = message => message
console.log(arrowGreet('Golf','Apichit'));

//ตัวอย่าง
var square = x  => x*x
console.log(square(3));