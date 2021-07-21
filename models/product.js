const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    category: {
        type: String,
        lowercase: true,
        enum: ['fruit', 'vegetables', 'dairy']
    },
    onStock: {
        type: String,
        lowercase: true,
        enum: ['yes', 'no']
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;