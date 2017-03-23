
var compcol ={
    template:'<div class=\"col\"><div :class="[stylesheet]" class=\"col-color\">{{number}}</div></div>',
    props:['number'],
    data:function(){
         return {stylesheet:0};
    },
    beforeUpdate:function(){
      this.getClass(this.number);
    },
    created:function(){
      this.getClass(this.number);
    },
    methods:{
      getClass:function(i){
        var styleDic = {'0':'zero','2':'two','4':'four','8':'eight','16':'sixteen','32':'thirtytwo','64':'sixtyfour','128':'ohte','256':'thfs','512':'fht','1024':'ottf','2048':'ttfe'};
        //return {stylesheet:styleDic[this.number]};  
        this.stylesheet = styleDic[i];
      }
    }
  };


var Game = new Vue({
    el:"#app",
    data:{
      items:game1.show(),
      score:game1.getScore()
    },
    computed:{
      
    },
    components:{
      'col-component':compcol
    },
    methods:{
      goLeft:function(){
         game1.moveLeft();
         this.items = game1.show();
         this.score = game1.getScore();
      },
      goRight:function(){
         game1.moveRight();
         this.items = game1.show();
         this.score = game1.getScore();
      },
      goUp:function(){
         game1.moveUp();
         this.items = game1.show();
         this.score = game1.getScore();
      },
      goDown:function(){
         game1.moveDown();
         this.items = game1.show();
         this.score = game1.getScore();
      },
      newGame:function(){
        game1.newGame();
        this.items = game1.show();
        this.score = game1.getScore();
      }
    }
  });
