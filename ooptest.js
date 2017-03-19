//如何让一个类调用其中的方法
//prototype究竟和this封装方法有什么区别
//多态的写法？

//solution 1
// var Animal = function(name) {
// 	this.name = name;
// 	this.action = function(){
// 		return this.name + " is Moving!";
// 	}
// 	this.whoIsMoving = function(action){
// 		return this.action() + " Spotted!";
// 	}
// }

// cat = new Animal("cat");
// console.log(cat.whoIsMoving());//cat is Moving! Spotted!

//简单递归尝试
var arr = [2,0,3,0,0,9,2,0,1];

var moveLeft = function(arr){
	if(arr[arr.length - 2] == 0 && arr[arr.length - 1]!=0){
		arr[arr.length - 2] = arr[[arr.length - 1];
		return arr
	}

}