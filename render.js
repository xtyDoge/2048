//格子的组件
var gamePad = game1.show();
console.log(gamePad);

var compcol = {
    template:"<div class=\"col\"><div class=\"col-color\">{{number}}</div></div>",
    props:['number']
};

var Game = new Vue({
    el:"#app",
    data:{
      items:game1.show()
    },
    components:{
      'col-component':compcol
    },
    methods:{
      goLeft:function(){
         game1.moveLeft();
         this.items = game1.show();
      },
      goRight:function(){
         game1.moveRight();
         this.items = game1.show();
      },
      goUp:function(){
         game1.moveUp();
         this.items = game1.show();
      },
      goDown:function(){
         game1.moveDown();
         this.items = game1.show();
      }
    }
  });



// $(window).on("swipeLeft",function() {
//   game1.moveLeft();
//   game1.show();
// });
// $(window).on("swipeRight",function() {
//   game1.moveRight();
//   game1.show();
// });
// $(window).on("swipeUp",function() {
//   game1.moveUp();
//   game1.show();
// });
// $(window).on("swipeDown",function() {
//   game1.moveDown();
//   game1.show();
// });

// $(window).on("keydown",function() {
//   switch (event.keyCode) {
//     case 38:
//       game1.moveUp();
//       gamePad = game1.show();
//       break;
//     case 40:
//       game1.moveDown();
//       gamePad = game1.show();
//       break;
//     case 37:
//       game1.moveLeft();
//       gamePad = game1.show();
//       break;
//     case 39:
//       game1.moveRight();
//       gamePad = game1.show();
//       break;
//     default:
//       console.log("没这个操作")
//       break;
//   }
// });

