// 实例化vue对象
new Vue({
	el: "#vue-app",
	data: {
		name: "晓晓",
		job: "改变世界，创造未来",
		website: "http://www.baidu.com",
		websiteTag: "<a href='http://www.zhihu.com'>new web</a>"
	},
	methods: {
		hello: function(time){
			return 'Good ' + time + ' ' + this.name
		}
	}
});
/*
* el: element需要获取的元素，一定是HTML中的根容器元素
* data: 用于数据的存储
* methods: 用于存储各种方法
* data-binding: 给属性绑定对应的值
*/