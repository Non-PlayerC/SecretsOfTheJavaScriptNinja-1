// 函数进阶: 理解函数调用
/*
    你知道吗？
        ● 为什么this参数表示函数上下文？
        ● 函数（function）和方法（method）之间有什么区别？
        ● 如果一个构造函数显式地返回一个对象会发生什么？
*/

// 你知道吗？
// ● 为什么this参数表示函数上下文？
// ● 函数（function）和方法（method）之间有什么区别？
// ● 如果一个构造函数显式地返回一个对象会发生什么？
/*
function foo() {
  console.log(this.name);
}

var obj = {
  name: 'John',
  method: foo
};

obj.method(); // 在非严格模式下输出: John

'use strict';
obj.method(); // 在严格模式下输出: TypeError: Cannot read property 'name' of undefined
*/
// ----------------------------------------------
// 作为函数被直接调用
function skulk(name) { };
function Ninja(name) { };

skulk('Hattori');
(function (who) { return who; })('Hattori');

var ninja = {
    skulk: function () { },
};

ninja.skulk("Hattori");// 作为对象调用
ninja = new Ninja('Hattori');// 构造函数调用

skulk.call(ninja, "Hattori");// call方法调用
skulk.apply(ninja, ["Hattori"]);// apply方法调用


// --------------------------------------------------
// 作为方法被调用
function whatMyContent() {
    return this;
}
// console.log(whatMyContent() === window);

var ninja = {
    getMyThis: whatMyContent
}
// console.log(ninja.getMyThis() === ninja);