function forEach(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback.call(list[i], i);
        /*
        当使用call方法调用函数时，它会立即执行函数，并将指定的this值绑定到函数内部的this关键字上，同时将参数作为函数的参数传递进去。
        这样，在函数内部，我们可以通过this关键字来访问绑定的this值，以及通过函数的参数来访问传递的参数。
        所以，这行代码的作用是将callback函数绑定到list[i]上，即将list[i]作为callback函数内部的this值。
        */
    }
}

var weapons = [
    { type: 'sword', damage: 10 },
    { type: 'axe', damage: 12 },
    { type: 'bow', damage: 7 },
];

forEach(weapons, function (index) {
    // console.log(weapons[index], " >> ", this === weapons[index],
    //     "Got the expected value of " + weapons[index].type);
});
// ---------------------------------------------------
// var arr = ['apple', 'banana', 'orange'];
// // arr.forEach(function (item, index) {// 0: apple
// arr.forEach(function (index) {// apple
//     console.log(index);
// }); 



var name = 'John';

var obj = {
    name: "jack",
    sayHello: function () {
        // setTimeout(function () {// Hello, jack
        setTimeout(function () {
            console.log('Hello, ' + this.name);
        }, 1000);
    }
};

obj.sayHello(); // 输出: Hello, John