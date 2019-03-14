// 实例化vue对象
new Vue({
	el: "#vue-app",
	data: {
		name: '',
		age: '',
		hobby: ''
	},
	methods: {
		logName: function(){
			// console.log("输入姓名");
			this.name = this.$refs.name.value;
			// console.log(this.$refs.name.value);
		},
		logAge: function(){
			// console.log("输入年龄");
			this.age = this.$refs.age.value;
			// console.log(this.$refs.age.value);
		}
	}
});