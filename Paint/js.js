$(function () {
    var x,y =0;
    var a = false;
    $("body").on("mousedown", function (e) {
        x = e.pageX;
        y = e.pageY;
        a=true;

    })
    $("body").on("mouseup", function (e) {
        a=false;
    })
    $("body").on("mousemove", function (e) {
        if (a) {
            var size = (Math.abs(e.pageX-x)^2+Math.abs(e.pageY-y)^2)^(1/2)/20000;
            x = e.pageX;
            y = e.pageY;
            var obj = $("<div></div>");
            obj.appendTo("body");
            obj.css({'height':size,'width':size,"top": y, "left": x, "background":"rgb("+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+","+Math.floor(Math.random()*256)+")"})
        }
    })
})