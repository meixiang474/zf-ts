abstract class Animal {
  name: string
  abstract getName(): string
}
class Cat extends Animal {
  getName(){
    return this.name
  }
}
let cat = new Cat()
cat.name = '猫'
console.log(cat.getName())

// 1. 可以用来描述对象的形状
interface Point {
  x: number
  y: number
}
let point: Point = {x: 0, y: 0}

// 2. 描述行为的抽象
interface Speakable {
  speak(): void // 接口里只能放抽象方法
}
interface Eatable {
  eat(): void
}
// 类可以实现多个接口, 但只能继承一个父类
class Person implements Speakable, Eatable {
  speak(){

  }
  eat(){

  }
}