//นี่คือการเขียนคำอธิบายใน JavaScript
//alert("Hello js");
/* comment ได้หลาย บรรทัด */

//คำสั่งในการเเสดงผลข้อความออกไปที่หน้าเว็ป

document.write("Hello JavaScript<br>");

document.write("<b>ยินดีตอนรับทุกท่าน</b>");

document.write("<h1><font color='red'>ยินดีตอนรับ</font></h1>");


//การสร้างตัวเเปร ใน JavaScript
var name="apichit.pu";
var age=28;

// //เเสดงผลไปที่ Console
// console.log(name);
// console.log(age);

// //Method Confirmed
// var status = confirm("Are you OK ?");
// console.log(status);

// //Method Prompt
// var msg = prompt("กรุณาป้อนชื่อ","apichit");
// console.log(msg);

// //Condition Operator
// var age = prompt("กรุณาป้อนอายุของคุณ","0");
// var votable = (age <= 18)?"To young":"Old enough";
// console.log(votable);

//Condition if
var number = 10;
if(number <= 10){
    x = "Success";
}else if (number <= 20){
    var x = "Young"
}else{
    var x = "Fail";
}
console.log(x);

//ฟังชั่นดึงวันที่ออกมา
var day = new Date().getDay();
switch (day)
{
    case 0:
        console.log("Sunday");
        document.body.style.backgroundColor = "red";
        break;
    case 1:
        console.log("Monday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 2:
        console.log("Tueday");
        document.body.style.backgroundColor = "pink";
        break;
    default:
        console.log("Invalid day");
        document.body.style.backgroundColor = "blue";
        break;
}
console.log(day);

// Day 1 Complelt