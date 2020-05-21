// 任意属性
namespace a {
  interface PlainObject {
    [propName: string]: number
    y: number
  }
  
  let obj: PlainObject = {
    x: 1,
    y: 2,
    z: 3
  }
  // 接口的继承
  interface Speakable {
    speak(): void
  }
  interface SpeakChinese extends Speakable {
    speakChinese(): void
  }
  class Person implements SpeakChinese {
    speak(){}
    speakChinese(){}
  }

  // 接口的readonly
  interface Circle {
    readonly PI: number;
    radius: number;
  }
  let circle: Circle = {
    PI: 3.14,
    radius: 10
  }

  // 接口还可以用来约束函数
  interface Discount {
    (price: number): number
  }
  let cost: Discount = function (price: number) {
    return price * 0.8
  }

  // 可索引接口
  // 是用来对数组和对象进行约束
  interface UserInterface {
    [index: number]: string
  }
  let arr: UserInterface = ['1', '2', '3']
  console.log(arr)
  let obj2: UserInterface = {
    1: '1',
    2: '2'
  }

}

namespace b {
  // 类接口, 可以用接口装饰类
  interface Speakable {
    name: string;
    speak(words: string): void
  }
  class Dog implements Speakable {
    name: string;
    speak(){}
  }
  class Animal {
    constructor(public name: string){
      
    }
  }
  // 约束构造类型 使用new来约束
  interface WithNameClass {
    new(name: string): Animal
  }
  function createAnimal(clazz: WithNameClass, name: string){
    return new clazz(name)
  }
  let a = createAnimal(Animal, 'zhufeng')
}

