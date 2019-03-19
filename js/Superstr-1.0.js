function Superstr(){}
Superstr.prototype.version='1.0';
Superstr.prototype.arrays={
       /**
	*移除数组中重复的对象
	*param:arr 数组
	*param:property 数组中对象的属性名称
	*return:array 处理后的数组
	*/
	only: function(arr, property) {
		let hash = {}
		var array = arr.reduce((item, next) => {
		    if (!hash[next[property]]) {
				hash[next[property]] = true;
				item.push(next);
		    }
			return item;
		}, [])
		return array;
	},
       /**
	*过滤数组中的对象
	*param:arr 数组
	*param:property 数组中对象的属性名称
	*param:value 数组中对象属性的值
	*return:array 处理后的数组
	*/
	remove: function(arr,property,value) {
		var array = arr.filter(
			(obj) => {return obj[property] != value} 
		)
		return array;
	},
       /** 
	*数组冒泡排序
	*param:arr 数组
	*param:property 数组中对象的属性名称
	*/
	bubbleSort: function(arr, property) {
		var array = arr,temp;
		for(var i=0; i<arr.length;i++) {
			for(var j=i+1;j<arr.length;j++) {
				if(arr[i][property]>arr[j][property]) {
					temp=arr[i];
					arr[i]=arr[j];
					arr[j]=temp;
				}
			 }
		}
		return array;
	}
}
var _ = new Superstr();
