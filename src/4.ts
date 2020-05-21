namespace a {
  interface Person {
    xx: string
    yy: string
  }
  function enhancer(target: any) {
    target.prototype.xx = 'xx'
    target.prototype.yy = 'yy'
  }
  @enhancer
  class Person {
  }
  let p = new Person()
  console.log(p.xx)
}

// 把类整个进行替换
namespace b {
  interface Person {
    age: number
  }
  function enhancer<T extends new (...args: any[]) => Person>(target: T) {
    return class extends target {
      age: number = 10
    }
  }
  @enhancer
  class Person {
    name: string = 'person'
    constructor(){}
  }
  let p = new Person()
  console.log(p.age)
}

// 属性装饰器 装饰属性的
namespace c {
  // target如果装饰的是个普通属性的话, 那么这个target指向类的原型
  // target装饰的是一个类的属性static, 那么这个target指定类的定义
  function upperCase(target: any, propertyName: string){
    let value = target[propertyName]
    const getter = () => value
    const setter = (newVal: string) => {
      value = newVal.toUpperCase()
    }
    Object.defineProperty(target, propertyName, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    })
  }
  function enumerable(flag: boolean) {
    return function (target: any, propertyName: string, propertyDescriptor: PropertyDescriptor) {
      propertyDescriptor.enumerable = flag
    }
  }
  function setAge(age: number){
    return function (target: any, methodName: string, propertyDescriptor: PropertyDescriptor) {
      target.age = age
    }
  }
  function toNumber(target: any, methodName: string, propertyDescriptor: PropertyDescriptor){
    let oldMethod = propertyDescriptor.value
    propertyDescriptor.value = function (...args: any[]) {
      args = args.map(item => parseFloat(item))
      return oldMethod.apply(this, args)
    }
  }
  class Person {
    static age: number
    @upperCase name: string = 'zhufeng'
    @enumerable(false)
    getName(){
      console.log('getName')
    }
    @setAge(100)
    static getAge() {

    }
    @toNumber
    sum(...args: any[]) {
      return args.reduce((accu, item) => accu + item, 0)
    }
  }
  let p = new Person()
  console.log(p.name)
  for(let key in p){
    console.log(key)
  }
  console.log(Person.age)
  console.log(p.sum(1, '2', '3'))
}

// 参数装饰器
namespace d {
  interface Person {
    age: number
  }
  // Person.prototype
  function addAge(target: any, paramName: string, paramIndex: number) {
    target.age = 10
  }
  class Person {
    login(username: string, @addAge password: string){
      console.log(this.age, username, password)
    }
  }
  let p = new Person()
  p.login('zhufeng', '123')
}

// 顺序
// 属性方法先执行, 谁先写谁先执行
// 方法的时候, 先参数后方法
// 最后是类
// 如果是同类型的, 先执行后写的