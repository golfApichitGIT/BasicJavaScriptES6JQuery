//Synchronous & Asyncronous Programmiing in Javascript
// function doA(){
//     setTimeout(() => {
//     console.log("This is 1st say message");
//     }, 2000);
// }

// function duB(){
//     console.log("This is 2st say message");
// }

// //ทดสอบเรียกฟังชั้นด้านบน
// doA()
// duB()

//การเเก้ปัญหาด้านบนเราจะใช้เเบบ Asynchronous

function doA(callback){
    console.log("Loading.....");
    setTimeout(() => {
    console.log("This is 1st say message");
    callback()
    }, 2000);
}

function doB(){
    console.log("This is 2st say message");
}

//เรียกทำงาน
doA(function(){
    doB()
})

    console.log("---------------------");


//ตัวอย่างการจำลองโหลดข้อมูลจาก Ajax
function loadNews(cb){
        console.log("Loading....");
    setTimeout(() => {
     cb([
       {id:1, title: 'a'} ,
       {id:2, title: 'b'} ,
       {id:3, title: 'c'} ,
       {id:4, title: 'd'} ,
       {id:5, title: 'e'} ,
       {id:6, title: 'f'} ,
       {id:7, title: 'g'} ,
       {id:8, title: 'h'} ,
       {id:9, title: 'i'} ,
       {id:10, title: 'j'} ,
     ])   
    }, 3000);
}

//เรียกใช้งาน
loadNews(function(result){
    console.log(result);
    console.log("Load data comlete");
})




