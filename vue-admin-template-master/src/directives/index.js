export const imgerror = {
    // 当使用了这个指令的标签被渲染的时候就会执行inserted钩子
    // el:表示的是使用了这个指令的标签
    //binding:使用指令的时候传过来的标签。
    // img标签有一个onerror事件，执行时机：当图片加载失败的时候会执行这个onerror事件
    inserted(el, binding) {
        el.onerror = function () {
            el.src = binding.value;
        }
    }
}
export const color = {
    inserted(el, binding) {
        el.style.color = binding.value;
    }
}