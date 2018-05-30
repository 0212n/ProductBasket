const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var Product = new Schema({
    title : {
        type: String,
        required: true
    },
    price : {
        type: Number,
        required: true,
        min:0
    },
    quantity : {
        type: Number,
        required: true,
        min:0
    },
    picture : {
        data: Buffer,
        contentType: String 
    },
    description : {
        type: String,
        required: true,
        validate: {
          validator: function(v) {
            return v.length > 5;
          },
          message: 'There should be more than 5 characters in body!'
        },
    },
    postedBy : {  
        type: String,
        required: true
    }
})

var productModel = mongoose.model('productmodel', Product);

module.exports = productModel;