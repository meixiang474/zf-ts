namespace a {
  // 接口的兼容性 ts跟类型没有关系, 只跟属性有关系
interface Animal {
  name: string;
  age: number
}
interface Person {
  name: string;
  age: number;
  speak(words: string): void;
}
function getName(animal: Animal): string{
  return animal.name
}
let p: Person = {
  name: 'zhufeng',
  age: 10,
  speak(){}
}

console.log(getName(p))

// 基本类型兼容性
let num: string | number = 1
let str: string = 'hello'
num = str

let num2 : {
  toString(): string
}
let str2: string = 'jiagou'
let tmp = {
  toString(){
    return 'x'
  },
  x: 1
}
num2 = str2
num2 = tmp

}

namespace b {
  // 类的兼容性 跟类型无关 与属性有关
  class Animal {
    name: string
  }
  class Bird extends Animal {
    swing: number
  }
  let a: Animal
  a = new Bird()
}

namespace c {
  // 函数的兼容性
  // 比较参数 可以少不能多
  type sumFunction = (a: number, b: number) => number
  let sum: sumFunction
  function f1(a: number, b: number): number{
    return a
  }
  sum = f1
  function f2(a: number, b: number): number{
    return a
  }
  sum = f2
  function f3(): number{
    return 1
  }
  sum = f3

  // 比较返回值 多了可以, 少了不行
  type GetPerson = () => {name: string, age: number}
  let getPerson: GetPerson
  function g1(){
    return {
      name: 'string',
      age: 10
    }
  }
  getPerson = g1
  function g2(){
    return {
      name: 'string',
      age: 10,
      gender: 'male'
    }
  }
  getPerson = g2

  interface T {
    name: string
  }
  let t: T
  let t1 = {
    name: 'string',
    age: 10
  }
  t = t1

  // 函数参数的协变
  type logFunc = (a: number | string) => void
  let log: logFunc
  function log1(a: number | string | boolean){
    console.log(a)
  }
  log = log1

  // 判断兼容性的时候先判断具体的类型 再进行兼容性判断
  interface Empty<T>{

  }
  let x: Empty<string>
  let y: Empty<number>
  x = y

  interface NotEmptyString<T> {
    data: string
  }
  interface NotEmptyNumber<T> {
    data: number
  }

  // 枚举的兼容性
  enum Colors {
    Red,
    Yellow
  }
  let c: Colors
  c = Colors.Red
  c = 1
  let d: number
  d = Colors.Yellow
}