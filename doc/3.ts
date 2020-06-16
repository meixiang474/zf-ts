// 如何定义类
namespace a {
  class Person {
    name: string = 'zhufeng'
    age: number
    constructor(){
      this.age = 10
    }
  }
  let p1 = new Person()
  console.log(p1.name)
}

// 存取器 getter setter
namespace b {
  class Person {
    private _name: string
    constructor(name: string){
      this._name = name
    }
    get name(): string {
      return this._name
    }
    set name(val: string){
      this._name = val
    }
  }

  let p = new Person('zhufeng')
  console.log(p.name)
  p.name = 'zf'
  console.log(p.name)
}

namespace c {
  class Person {
    constructor(public readonly name: string){}

  }

  let p = new Person('zhufeng')
  console.log(p.name)
}

// 继承
// 子类继承父类后, 子类的实例上就拥有了父类中的属性和方法
// 访问修饰符 public protected private
// public 自己的子类和其他类都可以访问
// protected 受保护的 自己和自己的子类能访问, 其他类不能访问
// private 只能自己访问, 自己子类不能访问, 其它类也不可以访问
namespace d {
  class Person {
    name: string
    age: number
    constructor(name: string, age: number){
      this.name = name
      this.age = age
    }
    getName(): string{
      return this.name
    }
    setName(newName: string): void {
      this.name = newName
    }
  }
  class Student extends Person {
    stuNo: number
    private static _type = 'Student'
    static get type(): string {
      return this._type
    }
    constructor(name: string, age: number, stuNo: number){
      super(name, age)
      this.stuNo = stuNo
    }
    getStuNo(): number{
      return this.stuNo
    }
    setStuNo(newStuNo: number): void{
      this.stuNo = newStuNo
    }
  }
  console.log(Student.type)
}