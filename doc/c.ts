// namespace 第一个作用是封装类似代码 第二个作用是防止命名冲突
namespace zoo {
  class Dog {

  }
}

namespace home {
  export class Dog {

  }
}
let dog = new home.Dog()
let dog2 = new 
