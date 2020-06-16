namespace a {
  let x = {name: 'zhufeng'}
  let a = typeof x
  type b = typeof x
  console.log(a)
  console.log(b)

  class Person {
    public name:string = 'zhufeng'
  }
  type PartialPerson = Partial<Person>
  let p: PartialPerson = {
    name: 'zhufeng'
  }
  // 元组和长度和类型是固定的
  let xx: [string, number] = ['1', 1]
  console.log(xx[1])

  interface Fish {
    name1: string
  }
  interface Water {
    name2: string
  }
  interface Bird {
    name3: string
  }
  interface Sky {
    name4: string
  }
  type Condition<T> = T extends Fish ? Water : Sky 
  let condition: Condition<Fish> = {
    name2: 'water',
  }

  // 条件类型的分发
  type Condition2<T> = T extends Fish ? Water : Sky
  // Water | Sky
  let c1: Condition<Fish | Bird> = {
    name2: 'zhufeng'
  }
  let c2: Condition<Fish | Bird> = {
    name4: 'zhufeng'
  }
}

namespace c {
  // 从前者中排出掉后者
  type E = Exclude<string | number, string>
  let e: E = 10
  type E2 = Extract<string | number | null, string>
  let e2: E2 = 'hello'
  type E3 = NonNullable<string | number | undefined | null>
  let e3: E3 = 'hello'
  let e4: E3 = 10
  // redux会用到 ReturnType
  function getUserInfo() {
    return {name: 'zhufeng', age:10}
  }
  type UserInfo = ReturnType<typeof getUserInfo>
  let user: UserInfo =  {name: 'zhufeng', age:10}

  // instanceType 获取构造函数实例类型
  class Person5 {
    name: string
    constructor(name: string){
      this.name = name
    }
  }
  type P = InstanceType<typeof Person5>
  let p: P= new Person5('zhufeng')
}