function swap<T, U>(a: T, b: U){

}
namespace x {
  type logFunc = (a: number | string ) => void
  let log: logFunc
  function log1(a: number | string | boolean): void {}
  log = log1
  log1(true)
  // log(true) // 报错
}