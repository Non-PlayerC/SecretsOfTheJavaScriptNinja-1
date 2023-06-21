function getSamurai(samurai) {
    "use strict"

    // arguments[0] = "Ishida";

    return samurai;
}

function getNinja(ninja) {
    arguments[0] = "Fuma";
    return ninja;
}

var samurai = getSamurai("Toyotomi");
var ninja = getNinja("Yoshi");

console.log(samurai);
console.log(ninja);