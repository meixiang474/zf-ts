export {}
// 声明文件怎么写
declare const $: (selector: string) => {
  click(): void
  width(length: number): void
}
$('#root').click()
$('#root').width(100)
declare let name: string
declare let age: number
declare function getName(): string
declare class Animal {name: string}
interface Person6 {
  name: string
}
type Student = Person6 | string
declare enum Seasons {
  Spring,
  Summer,
  Autumn,
  Winter
}