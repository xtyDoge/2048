var app = new Vue({
  el: '#app',
  data: {
    message: 2
  },
  methods:{
  	goLeft:function () {
  		game1.moveLeft();
		game1.show(); 
  	},
  	goRight:function () {
  		game1.moveRight();
		game1.show(); 
  	},
  	goUp:function () {
  		game1.moveUp();
		game1.show(); 
  	},
  	goDown:function () {
  		game1.moveDown();
		game1.show(); 
  	}
  }
})