import * as swcHelpers from "@swc/helpers";
function _templateObject() {
    var data = swcHelpers.taggedTemplateLiteral([
        "",
        ""
    ]);
    _templateObject = function _templateObject() {
        return data;
    };
    return data;
}
function foo() {
    for(var _len = arguments.length, rest = new Array(_len), _key = 0; _key < _len; _key++){
        rest[_key] = arguments[_key];
    }
}
foo(_templateObject(), function(x) {
    x = "bad";
});
