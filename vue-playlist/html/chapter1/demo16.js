// 实例化vue对象
var one = new Vue({
	el: "#vue-app1",
	data: {
		title: "vue one"
	},
	methods: {
	},
	computed: {
		greet: function(){
			return "Hello app one";
		}
	}
});
var two = new Vue({
	el: "#vue-app2",
	data: {
		title: "vue two"
	},
	methods: {
		changeTitle: function(){
			one.title = "已经改名了"
		}
	},
	computed: {
		greet: function(){
			return "Hello app two";
		}
	}
});
