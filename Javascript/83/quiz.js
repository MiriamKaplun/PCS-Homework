(function () {
    'use strict';

    /* let store = [
         {
             "customer": "Bob",
             "address": "123 Any Street Lakewood NJ 08701",
             "items": [
                 {
                     "item": "cookies",
                     "quantity": 5,
                     "total": 4.95
                 },
                 {
                     "item": "jelly beans",
                     "quantity": 2,
                     "total": 3
                 }
             ]
         },
         {
             "customer": "Joe",
             "address": "456 Any Street Lakewood NJ 08701",
             "items": [
                 {
                     "item": "carrots",
                     "quantity": 3,
                     "total": 1.02
                 }
             ]
         }
     ];
     */

    class Item {
        constructor(itemName, price, quantity) {
            this.itemName = itemName;
            this.price = price;
            this.quantity = quantity;
        }
    }

    class Order {
        constructor(customerName, address, items) {
            this.customerName = customerName;
            this.address = address;
            this.items = items;
        }

        get total() {
            for (let i = 0; i < data.items.length; i++) {
                for (let j = 0; j < data[i].items.length; j++) {
                    const orderTotal = (data[i].items[j].total) / (data[i].items[j].quantity);
                    return orderTotal;
                }
            }
        }
    }

    /*
    const item1 = new Item(store[0].items[0].item, 5, store[0].items[0].quantity);
    console.log(item1);
    const order1 = new Order(store[0].customer, store[0].address, store[0].items[0].item);
    console.log(order1);
    console.log('total: ', order1.total);
    */

    fetch('quiz.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            appendData(data);
        })
        .catch(function (err) {
            console.log('error: ' + err);
        });

    function appendData(data) {
        let theDiv = document.getElementById("myData");
        for (let i = 0; i < data.length; i++) {
            let div1 = document.createElement("div");
            div1.innerText = 'Customer: ' + data[i].customer;
            theDiv.appendChild(div1);
            let div2 = document.createElement("div");
            div2.innerText = ' Address: ' + data[i].address;
            theDiv.appendChild(div2);
            let div3 = document.createElement("div");
            const order1 = new Order(data[i].customer, data[i].address, data[i].items[i].item);
            console.log(order1);
            div3.innerText = ' Total: ' + order1.total(data);
            theDiv.appendChild(div3);
        }
    }

}());