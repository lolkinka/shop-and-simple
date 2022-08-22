things = [
    {
        id : 1,
    name : 'Меховая шапка',
    description: 'very warm',
    sizes: [47,52,69],
    price: 1200,
    available: 1
    },
    {
        id : 2,
    name : 'Бомбер',
    description: 'very cool',
    sizes: ['M','S','XL'],
    price: 3500,
    available: 1
    },
    {
        id : 3,
    name : 'Чёрная рубашка',
    description: 'very black',
    sizes: ['M','L','XXL'],
    price: 1000,
    available: 0
    },
    {
        id : 4,
    name : 'Джинсы',
    description: 'very warm',
    sizes: [42,44,46],
    price: 1000,
    available: 1
    },
    {
        id : 5,
    name : 'Свитер',
    description: 'very cozy',
    sizes: ['XS','M','L'],
    price: 700,
    available: 1
    },
    {
        id : 6,
    name : 'Пижама',
    description: 'very homely',
    sizes: ['M','L','XL'],
    price: 600,
    available: 1
    },
]


basket = [
    {
    good : 3,
    amount : 1
    },
    {good :5,
    amount : 4}
]


function add_clothes(identy){
    amount = 1
    for (i = 0; i < things.length; i++){
        if (things[i]['id'] == identy){
            if (things[i]['available'] == 1){
                for (a = 0; a < basket.length;a++){
                    if (basket[a]['good'] == identy){
                        basket[a]['amount']++
                        return basket
                }
            }
            basket.push({good: identy, amount : amount})
            return basket
            }
            else {
            return ('Этого товара нет в продаже')
            }
        }           
}return ('Такого товара не существует')           
}

function dev_clothes(identy){
    for (i= 0; i < basket.length; i++){
        if (basket[i]['good'] == identy){
            if (basket[i]['amount'] > 1) {
                basket[i]['amount']--
                return basket
            }
            else{
                basket.splice(i,1)
                return basket
            }
        }
    }
    return ('Такого товара в корзине нет')
}

function dev_all(){
    basket.splice(0)
    return basket
}

function sum(){
    let sum_amount = 0
    let sum_price = 0
    if (basket.lenth != 0){
    for (i = 0; i < basket.length; i++){
        sum_amount += basket[i]['amount']
        for (i_2 = 0; i_2 < things.length; i_2++){
            if (basket[i]['good'] == things[i_2]['id']){
                sum_price += things[i_2]['price'] * basket[i]['amount']
                break
            }
        }
    } return [sum_price,sum_amount]
    }else{return ('Товаров в корзине нет')}}


console.log(add_clothes(Number(process.argv[2])))
console.log(dev_clothes(Number(process.argv[2])))
console.log(sum())
console.log(dev_all())
