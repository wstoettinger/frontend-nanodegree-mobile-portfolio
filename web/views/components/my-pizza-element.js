var MyPizzaPrototype = Object.create(HTMLDivElement.prototype);
MyPizzaPrototype.createdCallback = function () {
  var shadow = this.createShadowRoot();
  shadow.innerHTML = ' <style>.pizza { display: table; width: 100%; margin: 0 100px 0 100px;}.pizza .image { width: 10%; float: left;}.pizza .image img{ width: 100px;}.pizza .text { width: 90%; float: left;} </style> <div class="pizza"> <div class="image"> <img src="images/pizza.png" srcset="images/pizza.webp"> </div> <div class="text"> <content></content> </div> </div>';

};

var MyPizza = document.registerElement("my-pizza", {
  prototype: MyPizzaPrototype,
  extends: "div"
});