let size: string;
let topping;
let marshmallow: string;

let iceCreamPrice: number[] = [];
let toppingPrice: number;
let sizePrice: number;

enum Sizes{Small = 10, Large = 25};
enum addOns{Chocolate = 5, Caramel = 6, Berries = 10};


let order: HTMLElement = document.getElementById('order');
order.innerHTML += 'Ваш заказ:'+'<br/>';

do{
    size = prompt('Выберите размер мороженого (М - маленький, Б - большой)');
    
    if(size == 'М'){
        sizePrice = Sizes.Small;        
    }else if(size == 'Б'){
        sizePrice = Sizes.Large;
    }
    }while(size == null || size == '');

    
    
    iceCreamPrice.push(sizePrice);
    order.innerHTML += Sizes[sizePrice]+' ice-cream with:'+'<br/>';
    let more;
    function askTopping(){
        topping = prompt('Выберите начинку (Шоколад/карамель/ягоды)');
    
        if(topping == 'шоколад'){
            toppingPrice = addOns.Chocolate;
        }else if(topping== 'карамель'){
            toppingPrice = addOns.Caramel;
        }else if(topping == 'ягоды'){
            toppingPrice = addOns.Berries;
        }else if(topping == null ||topping == ''){
            alert('Должна быть начинка!');
            askTopping();
        }

    };

    do{
        askTopping();
        iceCreamPrice.push(toppingPrice);
        order.innerHTML += addOns[toppingPrice] +'<br/>';
        more = prompt('Выбрать ещё? (да/нет)');
    }while(more == 'да');
marshmallow = prompt('Добавить маршмеллоу? (да/нет)');

if(marshmallow == "да"){
    iceCreamPrice.push(5);
    order.innerHTML += 'Marshmallow' + "<br/>";
}


function calculate(size:string, topping: string, marshmallow?: string){
    let total: number = 0;
    for(let i = 0; i<iceCreamPrice.length; i++){
        total += iceCreamPrice[i];
    }
    order.innerHTML += 'Total: '+total+'грн';

}
calculate(size, topping, marshmallow);
