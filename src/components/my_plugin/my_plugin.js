const MyPlugin = {
  install: function (Vue, options) {
    Vue.globalMethod = function () {
      console.log("global method");
    }

    Vue.directive('demo', function (el, binding) {
      console.log('自定义指令')
    })

    Vue.mixin({ // 全局，所有组件都会使用，官网不推荐
      created() {
        console.log("mixin");
      }
    })

    Vue.prototype.$myMethod = function (options) {
      console.log(options)
    }
  }
}

export default MyPlugin;
