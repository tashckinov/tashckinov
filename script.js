$(function() {

    var timer;
    var flag;

    $('#app').click(function(e) {

        // if (going) clearTimeout(timer);
        clearTimeout(timer);

        var target = this.getBoundingClientRect();
        var xb = e.clientX - target.left - 25;
        var yb = e.clientY - target.top - 25;

        var xa = $('#object').position()['left'];
        var ya = $('#object').position()['top'];

        if (xb==xa && yb==ya){return;}

        var x = xa;
        xa = (-1) * xa;
        ya = (-1) * ya;
        var xn = xb + xa;
        var yn = yb + ya;

        var n = (yn / xn);

        if (xa * (-1) < xb) flag = 1
        if (xa * (-1) > xb) flag = -1

        walk(x, flag);

        function walk(x, flag) {
            var y = n * x + n * xa + (-1) * ya
            y = Math.round(y)
            $('#object').offset({
                top: y,
                left: x
            })
            timer = setTimeout(function() {
                walk(x + flag, flag);
            }, 1);
            if (((xa * (-1) < xb) && (x >= xb)) || ((xa * (-1)) > xb) && ((x <= xb))) {
                clearTimeout(timer);
            }
        }

    });

});