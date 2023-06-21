//! 函数调用
function ninja() {
    return this;
}
function samurai() {
    "use strict";
    return this;
}
// console.log(ninja() === window ? "YES" : "no");
// console.log(samurai() === undefined ? "YES" : "no");


//! 作为方法被调用
// 当一个函数作为对象的方法调用时，函数内部的 this 值会自动绑定到调用该方法的对象上
function whatMyContent() {
    return this;
}
// console.log(whatMyContent === window ? "YES" : "NO");
var getMyThis = whatMyContent;
// console.log(getMyThis() === window ? "YES" : "NO");
var ninja = {
    getMyThis: whatMyContent
}
// console.log(ninja.getMyThis() === ninja ? "YES" : "NO");// 函数的上下文是 ninja


//! 作为构造函数调用
// 构造函数的目的是创建一个新对象，并进行初始化设置，然后将其作为构造函数的返回值
function Ninja() {
    this.skulk = function () {
        return true;
    };
    return 1;
}
// console.log(Ninja() === 1);
var ninja = new Ninja();
// console.log(typeof ninja === "object");
//- 显式返回对象值的构造函数
var puppet = {
    rules: false
}
function Emperor() {
    this.rules = true;
    return puppet;
}

var emperor = new Emperor();
// console.log(emperor === puppet);
// console.log(emperor.puppet === false);// 返回的是由构造器作为上下文的 this
/*
● 如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的this将被丢弃。
● 但是，如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象。
*/

