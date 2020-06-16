// 如果代码里有export import之类的代码, 那么这个文件就变成了一个模块
export {}
let name: string = 'zhufeng'
let age: number = 10
let married: boolean = true
let hobbies: string[] = ['1', '2', '3']
let interests: Array<string> = ['4', '5', '6']
// 元组 类似一个数组, 是一个长度和类型都固定的数组
// 1. 长度固定, 2. 类型可以不一样
let point: [number, number] = [100, 100]
let person: [string, number] = ['zhufeng', 10]

enum Gender {
  BOY,
  GIRL
}
// var Gender2
// (function (Gender) {
//   Gender[Gender['BOY'] = 0] = 'BOY'
//   Gender[Gender['GIRL'] = 1] = 'GIRL' 
// }(Gender2 || (Gender2 = {})))
console.log(`李雷是${Gender.BOY}`)
console.log(`MM是${Gender.GIRL}`)

enum Week {
  MONDAY = 1,
  TUESDAY = 2
}

// 常数枚举
const enum Colors {
  Red,
  Yellow,
  Blue
}
console.log(Colors.Red)

// 任意类型
// ts为dom提供了一整套类型声明
// let root: HTMLElement | null = document.getElementById('root')
// root!.style.color = 'red' // !断言不为空

// null undefined
// null 空 undefined 未定义
// 它们都是其他类型的子类型, 你可以把它们赋给其他类型的变量
let myname1: string = null
let myname2 :string = undefined

let x: number
x = 1
x = undefined
x = null

// void类型 空的 没有
function greeting(name: string): void {
  console.log(`hello ${name}`)
}
greeting('zhufeng')

// never 永远不
// never是其他类型的子类型, 代表不会出现的值
// 在函数内部永远会抛出错误, 导致函数无法正常结束
function createError(message: string): never {
  throw new Error(`error ${message}`)
}

function sum(): never {
  while(true){
    console.log('hello')
  }
}

// 推论 猜
let name2 = 2
let name3
name3 = 4
name3 = 'zhufeng'

// 包装对象
// 自动的在基本类型和对象类型之间切换
// 1. 基本类型上没有方法
// 2. 在内部迅速的完成一个装箱的操作, 把基本类型迅速包装成对象类型, 然后用对象来调用方法
let name4: string = 'zhufeng'
name4.toLocaleLowerCase()
// let name44 = new String(name4)
// name44.toLocaleLowerCase()

let isOk: boolean = true
let isOk2: boolean = Boolean(1)
// let isOk3: boolean = new Boolean(1) // 错误

let name5: string | number
name5 = 'zhufeng'
name5.toLowerCase()
name5 = 5
name5.toFixed(3)

let name6: string | number;
(name6 as string).toLowerCase();
(name6 as number).toFixed(2);

// 字面量类型
let Gender3: 'Boy' | 'Girl'
