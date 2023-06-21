function Button() {
    this.clicked = false;
    // this.click = function () {
    this.click = () => {// 由于箭头函数没有自己的 this 值，因此在调用该方法时会使用外层作用域（即构造函数）的 this 值
        this.clicked = true;
        console.log(button.clicked, "The button has been clicked");
    }
}
var button = new Button();
var elem = document.getElementById("test");
elem.addEventListener("click", button.click);