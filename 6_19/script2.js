function Person(name, age) {
    this.name = "jack";
    this.age = 20;
}

var obj = { name: "Tom", age: 18 };
const data = new Person(obj);
console.log(data);
console.log(new Person("Berlin", 10));
/*
Person { name: 'jack', age: 20 } -> 如果我们传入一个已经存在的对象作为参数并使用该对象来初始化实例属性，
                                    则该已存在的对象中与实例属性同名的属性值会覆盖掉原本在构造函数中定义的默认值
Person { name: 'jack', age: 20 } -> 如果传入的参数不是一个对象类型，则会被忽略掉
*/

