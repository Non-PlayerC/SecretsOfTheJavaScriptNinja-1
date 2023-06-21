function juggle() {
    var result = 0;
    for (var n = 0; n < arguments.length; n++) {
        result += arguments[n];
    }
    this.result = result;
}

var ninja1 = {};
var ninja2 = {};

juggle.apply(ninja1, [1, 2, 3, 4]);
juggle.call(ninja2, 5, 6, 7, 8);

// --------------------------------------------

function forEach(list, callback) {
    for (var i = 0; i < list.length; i++) {
        callback.call(list[i], i);
    }
}

var weapons = [
    { type: 'sword', damage: 10 },
    { type: 'axe', damage: 12 },
    { type: 'bow', damage: 7 },
];

forEach(weapons, function (index) {
    console.log(this === weapons[index],
        "Got the expected value of " + weapons[index].type);
});
array.forEach(callback(currentValue, index, array))
var arr = ['apple', 'banana', 'orange'];
arr.forEach(function (item, index) {
    console.log(index + ': ' + item);
});
