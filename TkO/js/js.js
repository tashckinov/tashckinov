class Player{
    constructor(){
        var tPlayer = this;
        this.height=100;
        this.width=100;
        this.x=$("main").width()/2-this.width/2;
        this.y=$("main").height()/2-this.height/2;
        this.obj=$("<div class='player'></div>");
        this.obj.css({"top":this.y,"left":this.x,"height":this.height,"width":this.width}).appendTo("main");
    }
}
class Map{
    constructor(){
        var tMap = this;
        this.height=$(".map").height();
        this.width=$(".map").width();
        this.obj=$("<div class='map'></div>");
        this.obj.appendTo("main");
        this.x=0;
        this.y=0;
        this.v_x=0;
        this.v_y=0;

        $("body").on("keydown", function (e) {
            switch (e.keyCode){
                case 37:
                        tMap.v_x=1;
                        tMap.v_y=0;
                    break;
                case 38:
                        tMap.v_x=0;
                        tMap.v_y=1;
                    break;
                case 39:
                        tMap.v_x=-1;
                        tMap.v_y=0;
                    break;
                case 40:
                        tMap.v_x=0;
                        tMap.v_y=-1;
                    break;
            }
        })
        $("body").on("keyup", function (e) {
            switch (e.keyCode){
                case 37:
                    tMap.v_x=0;
                    tMap.v_y=0;
                    break;
                case 38:
                    tMap.v_x=0;
                    tMap.v_y=0;
                    break;
                case 39:
                    tMap.v_x=0;
                    tMap.v_y=0;
                    break;
                case 40:
                    tMap.v_x=0;
                    tMap.v_y=0;
                    break;
            }
        })
        this.timer = setInterval(function () {
            tMap.x+=tMap.v_x;
            tMap.y+=tMap.v_y;
            tMap.obj.css({"top":tMap.y,"left":tMap.x});
        },10)
    }
}
$(function () {
    Map = new Map();
    new Player();
})