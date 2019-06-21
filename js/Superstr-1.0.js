function Pretty() {
	// Pretty 漂亮
}
Pretty.prototype.version = '1.0.0';
Pretty.prototype.HttpRequest = {
   /**
	* 请求数据
	* @param:method 请求方式，标准的GET、POST（_method=PUT）
	* @param:url 请求地址URL
	* @param:asyn 是否异步请求
	* @param:callback 请求成功执行的回调函数
	* @data:请求参数
	*/
	request: function(method, url, asyn, callback, data) {
		var param = null;
		var temp = 'pretty_timestamp=' + new Date().getTime();
		if(data) {
			for(var key in data) {
				temp = temp + '&' + key + '=' + data[key]; 
			}
		}
		if(method.toLocaleUpperCase() == 'POST') {
			param = temp;
		} else {
			method = 'GET';
			if(url.indexOf('?') > -1) {
				url = url + '&' + temp;
			} else {
				url = url + '?' + temp;
			}
		}
		var xhr = new XMLHttpRequest();// 创建Http请求对象
		xhr.onreadystatechange = function() {
			if(xhr.readyState == 4 && xhr.status == 200) {
                callback(xhr.responseText);
			} else if(xhr.readyState == 4){
				console.log("———请求异常———"+"\n"+"请求地址(url)："+url+"\n"+"请求方式(method)："+method+"\n"+"状态码(status)："+xhr.status+"\n"+"异步(asyn)："+asyn);
			}
		}
		xhr.open(method, url, asyn);// asyn(true：异步 false：同步)
		xhr.withCredentials = true;
		xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");// 设置请求头
		xhr.send(param);
	}
}
Pretty.prototype.Arrays = {
   /**
	* 移除数组中重复的对象
	* @param:arr 数组
	* @param:property 数组中对象的属性名称
	* @return:array 处理后的数组
	*/
	only: function(array, property) {
		let hash = {}
		var arr = array.reduce((item, next) => {
		    if (!hash[next[property]]) {
				hash[next[property]] = true;
				item.push(next);
		    }
			return item;
		}, [])
		return arr;
	},
   /**
	* 移除数组中的对象
	* @param:arr 数组
	* @param:property 数组中对象的属性名称
	* @param:value 数组中对象属性的值
	* @return:array 处理后的数组
	*/
	remove: function(array, property, value) {
		var arr = array.filter(
			(obj) => {return obj[property] != value} 
		)
		return arr;
	},
   /**
	* 搜索数组中的对象
	* @param:arr 数组
	* @param:property 数组中对象的属性名称
	* @param:value 数组中对象属性的值
	* @return:array 处理后的数组
	*/
	search: function(array, property, value) {
		var arr = array.filter(
			(obj) => {return obj[property] == value} 
		)
		return arr;
	},
   /** 
	* 数组冒泡排序
	* @param:arr 数组
	* @param:property 数组中对象的属性名称
	*/
	bubbleSort: function(array, property) {
		var arr = array,temp;
		for(var i = 0; i < array.length; i++) {
			for(var j = i + 1; j < array.length; j++) {
				if(array[i][property] > array[j][property]) {
					temp = array[i];
					array[i] = array[j];
					array[j] = temp;
				}
			 }
		}
		return arr;
	}
}
Pretty.prototype.ClassNames = {
   /**
	* 添加拖拽效果，对象互换
	* @descriptions：在添加效果之前需要保证对象可拖动（draggable="true"）
	*/
	draggable: function(className) {
		var obj = null;// 拖动的对象
		window.onload = function() {
			var elements = document.getElementsByClassName(className);
			for(var n = 0; n < elements.length; n++) {
				// 开始拖动
				elements[n].ondragstart = function(event) {  
					obj = event.target;  
					event.dataTransfer.setData("draggable", event.target.innerHTML);  
				}  
				// 放置的位置
				elements[n].ondragover = function(event) {  
					event.preventDefault();  
				}
				// 进行放置
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
Pretty.prototype.Events={
   /**
    * 阻止事件冒泡
	*/
	stopBubble: function(event) {
		if(event && event.stopPropagation) {
			event.stopPropagation();
		} else {
			window.event.cancelBubble=true;
		}
	}
}
var _ = new Pretty();
