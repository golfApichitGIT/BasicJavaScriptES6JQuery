async function f(){
    let promise = new Promise((resole, reject) => {
        setTimeout(() => resole("done "),2000);
    })


    let result = await promise // มันจะรอจนกว่า promise ทำงานเสร็จ
    console.log(result);
}


//เรียก้ฟังก์ชั้น f()
f()
