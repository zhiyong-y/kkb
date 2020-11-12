import Vue from 'vue'
import Tips from '@/components/popWindow/Tips'

function create(Component, props) {
    // 获取组件构造函数
    // 1. Vue.extend()
    // 2. render
    const vm = new Vue({
        // h: createElement，生成VNode虚拟dom
        render: h => h(Component, { props })
    }).$mount();// 不指定宿主元素，不会创建真实dom，不会追加

    //得到VNode后添加到body中
    document.body.appendChild(vm.$el)

    // 返回实例
    const comp = vm.$children[0];
    // 提供销毁方法
    comp.remove = () => {
        document.body.removeChild(vm.$el);
        comp.$destroy();
    }

    return comp;
}
// export default create;
// 写成插件形式，需要返回Object

export default {
    // 实现install的方法
    install(Vue) {
        // 挂载到Vue的原型链上，同时传option，popWidow组件需要的配置对象
        Vue.prototype.$tips = function (options) {
            return create(Tips, options)
        }
        // $alert
        Vue.prototype.$alert = function () {
            alert(1)
        }
    }
}