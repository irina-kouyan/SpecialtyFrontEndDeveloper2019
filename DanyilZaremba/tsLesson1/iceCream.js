let size;
let topping;
let marshmallow;
let iceCreamPrice = [];
let toppingPrice;
let sizePrice;
var Sizes;
(function (Sizes) {
    Sizes[Sizes["Small"] = 10] = "Small";
    Sizes[Sizes["Large"] = 25] = "Large";
})(Sizes || (Sizes = {}));
;
var addOns;
(function (addOns) {
    addOns[addOns["Chocolate"] = 5] = "Chocolate";
    addOns[addOns["Caramel"] = 6] = "Caramel";
    addOns[addOns["Berries"] = 10] = "Berries";
})(addOns || (addOns = {}));
;
let order = document.getElementById('order');
order.innerHTML += 'Ваш заказ:' + '<br/>';
do {
    size = prompt('Выберите размер мороженого (М - маленький, Б - большой)');
    if (size == 'М') {
        sizePrice = Sizes.Small;
    }
    else if (size == 'Б') {
        sizePrice = Sizes.Large;
    }
} while (size == null || size == '');
iceCreamPrice.push(sizePrice);
order.innerHTML += Sizes[sizePrice] + ' ice-cream with:' + '<br/>';
let more;
function askTopping() {
    topping = prompt('Выберите начинку (Шоколад/карамель/ягоды)');
    if (topping == 'шоколад') {
        toppingPrice = addOns.Chocolate;
    }
    else if (topping == 'карамель') {
        toppingPrice = addOns.Caramel;
    }
    else if (topping == 'ягоды') {
        toppingPrice = addOns.Berries;
    }
    else if (topping == null || topping == '') {
        alert('Должна быть начинка!');
        askTopping();
    }
}
;
do {
    askTopping();
    iceCreamPrice.push(toppingPrice);
    order.innerHTML += addOns[toppingPrice] + '<br/>';
    more = prompt('Выбрать ещё? (да/нет)');
} while (more == 'да');
marshmallow = prompt('Добавить маршмеллоу? (да/нет)');
if (marshmallow == "да") {
    iceCreamPrice.push(5);
    order.innerHTML += 'Marshmallow' + "<br/>";
}
function calculate(size, topping, marshmallow) {
    let total = 0;
    for (let i = 0; i < iceCreamPrice.length; i++) {
        total += iceCreamPrice[i];
    }
    order.innerHTML += 'Total: ' + total + 'грн';
}
calculate(size, topping, marshmallow);
