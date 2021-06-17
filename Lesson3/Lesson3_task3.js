"use strict"

const products = [
    {
        id: 3,
        price: 200,
    },
    {
        id: 4,
        price: 900,
    },
    {
        id: 1,
        price: 1000,
    },
];

products.forEach(function (item,i,arr){
    console.log (`Товар id: ${item["id"]}`);
    console.log (`Старая цена - ${item["price"]}`);
    item["price"] =  item["price"] * 0.85;
    console.log (`Цена со скидкой 15 %!!! - ${item["price"]}`);
});