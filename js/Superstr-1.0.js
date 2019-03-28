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
Superstr.prototype.classNames={
	names: {
		draggable:"draggable"
	},
   /**
	*添加拖拽效果，对象互换
	*@descriptions：在添加效果之前需要保证对象可拖动（draggable="true"）
	*/
	draggable: function() {
		var className = this.names.draggable;
		var obj = null;//拖动的对象
		window.onload=function() {
			var elements = document.getElementsByClassName(className);
			for(var n=0;n<elements.length;n++) {
				//开始拖动
				elements[n].ondragstart = function(event) {  
					obj=event.target;  
					event.dataTransfer.setData("draggable",event.target.innerHTML);  
				}  
				//放置的位置
				elements[n].ondragover = function(event) {  
					event.preventDefault();  
				}
				//进行放置
				elements[n].ondrop = function(event) {  
					event.preventDefault();  
					if(obj != event.target){  
						obj.innerHTML = event.target.innerHTML; 
						event.target.innerHTML=event.dataTransfer.getData("draggable");
					}  
				} 
			}
		}
	}
}
var _ = new Superstr();
