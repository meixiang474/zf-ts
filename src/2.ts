// 函数定义
function hello(name: string): void {
  console.log(`hello ${name}`)
}

// 函数表达式
type GetUserNameType = (firstName: string, lastName: string) => string
let getUserName: GetUserNameType = function (firstName: string, lastName: string): string {
  return firstName + lastName
}

// 可选参数
function print(name: string, age?: number, home?: string): void {

}
print('zhufeng', 10, 'beijing')

// 默认参数
function ajax(url: string, method: string = 'GET'): void {
  console.log(url, method)
}
ajax('/user')
ajax('/user', 'POST')

// 剩余参数
function sum(...numbers: Array<number>): number{
  return numbers.reduce((accu, item) => accu + item, 0)
}

// 函数重载
let obj: any = {}
function attr(val: string): void
function attr(val: number): void
function attr(val: any): void {
  if(typeof val === 'string'){
    obj.name = val
  }else if (typeof val === 'number'){
    obj.age = val
  }
}
attr('zhufeng')
attr(10)
console.log(obj)

function sum2(a: string, b: string): string
function sum2(a: number, b: number): number 
function sum2(a: any, b: any): any {
  return a + b
}

// 箭头函数
let delay = (ms: number): void => {
  setTimeout(function(){

  }, ms)
}