export default function(Vue){
    Vue.directive("height",{
        inserted(el,binding){
            if( binding.value == undefined){
                $(el).height($(window.height))
            }else if(typeof binding.value == 'number'){
                $(el).height($(window).height()-binding.value)
            }
        }
    })
}