namespace a {
  class Animal {
    static getAge(){
      console.log(1)
    }
    getName(){
      console.log(this)
      return '父亲的名称'
    }
  }
  class Cat extends Animal {
    constructor(){
      super()
    }
    getName(): string {
      return super.getName() + '儿子的名称'
    }
  }
  let cat = new Cat()
  cat.getName()
  Cat.getAge()
}