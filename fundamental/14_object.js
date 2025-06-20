//การสร้างข้อมูล object
var person = {
    firstName:"Golf",
    latName:"Apichit",
    age:22,
    gender:"Male",
    fullName: function(){
        return this.firstName+" "+this.latName;
    }
}

//การเรียกใช้หรือการเข้าถึงสมาชิกใน Object
//Method 1
//ojectName.propertyName
console.log(person.firstName);

//Method 2
//ojectName["propertyName"]
console.log(person["latName"]);

//Method 3
//ojectName.methodName()
console.log(person.fullName());

//Oject Nested มีการซ้อนกันมากกว่า 1 ชั้น
var user = {
    id: "1",
    email: "apichit.pu@gmail.ac.th",
    personlnfo: {
        name: "Golf",
        address: {
            line1: "349 นครราชสีมา",
            line2: "ถนน มิตรภาพ",
            city: "เมืองนครราชสีมา",
            zipcode: "30000"
        },
        data : Array("sss","dddd")
    }
}


//การเข้าถึงสมาชิก
console.log(user.personlnfo);
console.log(user.personlnfo.name);
console.log(user.personlnfo.address.line1);
console.log(user.personlnfo.address.city);