var greet = name => {
    var helloString = "Greetings";
    return helloString + name;
}

function performAction(ninja, action = "skulking", message = ninja + " " + action) {
    return message;
}

var samurai = (() => "Tom")();
var ninja = (() => { return "YOshi" })();


function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}



var puppet = {
    rules: false
}
function Emperor() {
    this.rules = true;
    return puppet;
}

var emperor = new Emperor();
// console.log(emperor);// 返回的是由构造函数返回的对象，而不是 new 表达式所返回的对象
// ● 如果构造函数返回一个对象，则该对象将作为整个表达式的值返回，而传入构造函数的this将被丢弃。
// ● 但是，如果构造函数返回的是非对象类型，则忽略返回值，返回新创建的对象。
function Person(name, age) {
    // console.log(arguments);
    this.name = "jack";
    this.age = 20;

    // 返回非对象类型
    return this;
}

const p = new Person('Tom', 18);
// console.log(p); // 输出 Person { name: 'jack', age: 20 }A


function Animal(type) {
    this.type = type;
    this.a = "data";

    // 返回新创建的对象 -> Animal { type: 'cat', a: 'data' }
    return 'animal';
}

const a1 = new Animal('cat');
// console.log(a1);


