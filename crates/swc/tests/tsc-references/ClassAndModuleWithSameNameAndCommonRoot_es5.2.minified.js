function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
!function(X1) {
    var Y, Point;
    Y = X1.Y || (X1.Y = {
    }), Point = function(x, y) {
        "use strict";
        _classCallCheck(this, Point), this.x = x, this.y = y;
    }, Y.Point = Point;
}(X || (X = {
})), (function(X2) {
    var Y, Point;
    (Point = (Y = X2.Y || (X2.Y = {
    })).Point || (Y.Point = {
    })).Origin = new Point(0, 0);
})(X || (X = {
})), new X.Y.Point(1, 1), X.Y.Point.Origin;
var X, A = function() {
    "use strict";
    _classCallCheck(this, A);
};
(A || (A = {
})).Instance = new A(), A.Instance, new A();