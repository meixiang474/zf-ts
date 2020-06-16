function Animal() {}
Animal.prototype.getName = function(){
  return '父亲的名称'
}
__extends(Cat, Animal)
function Cat() {
  return _supper !== null && _supper.apply(this, arguments) || this
}
Cat.prototype.getName = function(){
  return _super.prototype.getName.call(this) + '儿子的名称'
}