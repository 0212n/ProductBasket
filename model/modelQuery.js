const mongoose = require('mongoose');

const productModel = require('./model.js');

mongoose.Promise = global.Promise;

module.exports = {
    findAll : function () {
        return productModel.find({});
    },
    
    createProduct : function (req) {
        console.log(req.body);
        var post = new productModel({
            title : req.body.title,
            price : req.body.price,
            quantity : req.body.quantity,
            picture : req.body.picture,
            description : req.body.description,
            postedBy: req.body.postedBy
        });
        
        return post.save();
    },
    
    findProduct : function (id) {
        return productModel.findById(id);
    },
    
    editProduct : function (id, obj) {
        return productModel.findByIdAndUpdate(id, {$set : obj});
    },
    
    deleteProduct : function (id) {
        return productModel.findByIdAndRemove(id);
    }
};