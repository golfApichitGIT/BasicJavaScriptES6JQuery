//impoet วิธีทีี่ 1 
import { sayHi, sayBye } from './say.js'

//import วิธีที่ 2
import * as say from './say.js'

//import วิธีที่ 3
import { sayHi as sh, sayBye as sb} from './say.js'


sayHi("Golf")
sayBye("golf")

say.sayHi('Golf')
say.sayBye('golf')

sh('Golf')
sb('golf')

//import Class ที่มีการกำหนด Default
import User from './user.js'

//สร้าง object
const obj = new User('Golf')

console.log(obj.name);
obj.sayHi()
