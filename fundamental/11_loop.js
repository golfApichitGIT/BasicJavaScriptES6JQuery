//fot loop
var num;
for(num=1;num <= 10 ; num++){
    if(num == 5){
        console.log("Middle");
        break;//ออกจาก loop
        // continue;
    }
    console.log(num)
}

//While loop
var i=0;
while(i<=5){
    console.log(i);
    i++;
}

//While infinity loop

// while(true){
//     console.log(i)
//     i++;
// }

var a = 0;
while(a <=5 ){
    console.log('*'.repeat(a))
    a++;
}

var j = 5;
while(j){
    console.log('*'.repeat(j))
    j--;
}