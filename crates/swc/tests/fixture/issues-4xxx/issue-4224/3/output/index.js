import * as swcHelpers from "@swc/helpers";
import regeneratorRuntime from "regenerator-runtime";
var A = /*#__PURE__*/ function() {
    "use strict";
    function A() {
        swcHelpers.classCallCheck(this, A);
    }
    swcHelpers.createClass(A, [
        {
            key: "method",
            value: function method() {
                var _this = this;
                this.foo = swcHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this.x();
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }));
                var _this1 = this;
                this.bar = swcHelpers.asyncToGenerator(regeneratorRuntime.mark(function _callee() {
                    return regeneratorRuntime.wrap(function _callee$(_ctx) {
                        while(1)switch(_ctx.prev = _ctx.next){
                            case 0:
                                _this1.x();
                            case 1:
                            case "end":
                                return _ctx.stop();
                        }
                    }, _callee);
                }));
            }
        }
    ]);
    return A;
}();
console.log(A);
