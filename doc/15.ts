// 如何定义一个复杂对象
// jQuery
declare namespace jQuery {
  function ajax(url: string, config: any){
    console.log(url, config)
  }
  let name: string
  namespace fn {
    function extend(object: any): void
  }
}
jQuery.ajax('/', {})
jQuery.fn.extend({})