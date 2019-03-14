// 实例化vue对象
new Vue({
	el: "#vue-app",
	data: {
	},
	methods: {
		logName: function(){
			console.log("输入姓名");
		},
		logEmail: function(){
			console.log("输入邮箱");
		},
		logAge: function(){
			console.log("输入年龄");
		}
	}
});