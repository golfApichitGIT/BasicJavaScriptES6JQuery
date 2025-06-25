//Promise = value, future


const a = 'Yes'

const ap = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('OK')
        reject('Cancel')
    }, 2000)
})

console.log(a);//Yes
console.log(ap);//promise{<panding>}

//หากเราต้องการเปิดกล่อง promise ออกมา
ap.then( e => {
    return 'My answser is : ' + (e)
})
.then(e => {
    console.log(e);
}).catch( e => {
    console.log(e);
})