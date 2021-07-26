const mongoose = require('mongoose');
const Product = require('./models/product');

mongoose.connect('mongodb://localhost:27017/farmStand', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGOOSE CONNECTION OPEN!!");
    })
    .catch(err => {
        console.log("OH NO, MONGOOSE NOT OPEN, ERRORRRRRR!!");
        console.log(err);
    })

// const p = new Product({
//     name: 'Ruby Grapefuit',
//     price: 1.99,
//     category: 'fruit'
// })
// p.save()
//     .then(p => {
//         console.log(p)
//     })
//     .catch(e => {
//         console.log(e);
//     })


// const seedProducts = [
//     {
//         name: 'Fairy Eggplant',
//         price: 1.00,
//         Category: 'vegetable'
//     },
//     {
//         name: 'Organic Goddess Melon',
//         price: 4.99,
//         Category: 'fruit'
//     },
//     {
//         name: 'Organic Mini Seedless Watermelon',
//         price: 3.99,
//         Category: 'fruit'
//     },
//     {
//         name: 'Organic Celery',
//         price: 1.50,
//         Category: 'vegetable'
//     },
//     {
//         name: 'Chocolate Whole Milk',
//         price: 2.69,
//         Category: 'dairy'
//     }
// ]

Product.insertMany(seedProducts)
    .then(res => {
        console.log(res)
    })
    .catch(e => {
        console.log(e)
    })