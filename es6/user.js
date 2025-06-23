export default class User { // มีการเติม default ไป หลัง export
    constructor(name){
        this.name = name
    }
    sayHi(){
        console.log('Hi  '+this.name);
    }
}