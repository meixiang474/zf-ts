// 为什么会有泛型, 它的意义在哪里
import React from 'react'

namespace a {
  // 定义函数 类
  function createArray<T>(length: number, value: T): Array<T>{
    let result: Array<T> = []
    for(let i = 0; i < length; i++){
      result[i] = value
    }
    return result
  }
  let result = createArray<number>(3, 3)
  console.log(result)

  // 类数组
  function sum(...args2: any[]) {
    let args: IArguments = arguments
    for(let i = 0; i < args.length; i++){
      console.log(args[i])
    }
  }
  sum(1,2,3)

  // let root: HTMLElement | null = document.getElementById('root')
  // let children: HTMLCollection = root!.children
  // let childNodes: NodeListOf<ChildNode> = root!.childNodes

  class MyArray<T> {
    private list: T[] = []
    add(val: T){
      this.list.push(val)
    }
    getMax(): T {
      let result = this.list[0]
      for(let i = 0; i < this.list.length; i++){
        if(this.list[i] > result){
          result = this.list[i]
        }
      }
      return result
    }
  }
  let arr = new MyArray<number>()
  arr.add(1)
  arr.add(2)
  arr.add(3)
  console.log(arr.getMax())

  //接口泛型
  interface Calculate {
    <T>(a: T, b: T): T
  }
  let add: Calculate = function <T>(a: T, b: T): T {
    return a
  }
  console.log(add<number>(1,2))

  // 多个类型参数, 如何在不增加中间变量的情况下, 交换两个变量的值
  function swap<A, B>(tuple: [A, B]): [B, A] {
    return [tuple[1], tuple[0]]
  }
  let result5 = swap<string, number>(['zhufeng', 10])
  console.log(result5)

  // 默认泛型类型
  function createArray2<T = number>(length: number): T {
    let t: T = null
    return t
  }
  let result6 = createArray2(3)

  // 泛型的约束
  // 在函数中使用泛型的时候, 由于预先不知道具体类型, 所以不能访问相应类型的方法
  interface LengthWise {
    length: number
  }
  function logger<T extends LengthWise>(val: T){
    console.log(val.length)
  }

  interface Cart<T>{
    list: T[]
  }
  let cart: Cart<string> = {
    list: ['1', '2', '3']
  }

  // 泛型类型别名
  type Cart2<T> = {list: T[]} | T[]
  let c1: Cart2<string> = {list: ['1', '2', '3']}
  let c2: Cart2<string> = ['1']

  // interface 是接口, 定义了一个实实在在的接口, 他是一个真正的类型
  // type一般用来定义别名, 并不是真正的类型
}