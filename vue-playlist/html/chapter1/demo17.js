// 组件
Vue.component("greeting",{
		template:'<p>{{name}}：大家好，初次相见的朋友初次相见，好久不见的朋友好久不见<button v-on:click="changeName">改名</button></p>',
		data: function(){
			return {
				name: "进击的巨人"
			}
		},
		methods: {
			changeName: function(){
				this.name = "工作细胞";
			}
		}
	}
)
// 实例化vue对象
var one = new Vue({
	el: "#vue-app1"
});
var two = new Vue({
	el: "#vue-app2"
});
