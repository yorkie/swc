class A {
    static foo() {
        return 1;
    }
}
!function(M1) {
    var n;
    M1.n = n;
}(M || (M = {}));
var M, objA = new A();
objA.a, M.n, A.foo(), objA.a, M.n, objA.a, M.n;
z: ;
x: ;
r: ;
z: ;
z: objA.a;
z: A.foo;
z: M.n;
