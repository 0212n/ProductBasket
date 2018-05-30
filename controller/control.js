var modelQuery = require('./../model/modelQuery.js');

module.exports = {
    homeMessage : function (req, res) {
        res.send ('WELCOME! \n 1. CREATE Product -> POST at /products (Raw JSON data in body) \n 2. GET ALL products -> GET at /products \n 3. GET A product -> GET at /products/:id \n 4. EDIT a product -> PUT at /products/:id \n 5. DELETE a product -> DELETE at /products/:id');
    },
    viewProducts : function(req,res){
        modelQuery.findAll()
        .then(function(data){
            if(data.length >0){
                console.log("Retreiving list of products" + data);
                res.send(data);
            }
            else{
                console.log("unable to read products");
            }
        })
        .catch(function(e){
            res.send(e);
        })
    },

    addProduct : function (req, res) {
        modelQuery.createProduct(req)
            .then(function (d) {
                console.log('Product added');
                res.status(201).send(d);
        })
            .catch(function (e) {
                console.log('ERROR IN ADDING PRODUCT');
                res.status(202).send(e.message);
        });
    },
    
    viewProduct : function (req, res) {
        modelQuery.findProduct(req.params.id)
            .then(function (d) {
            
            if(d) {
                console.log('PRODUCT FOUND');
                res.send(d);
            }
            else {
                console.log('PRODUCT NOT PRESENT IN DB');
                res.send('PRODUCT NOT PRESENT IN DATABASE! TRY WITH VALID ID');
            }
        })
            .catch(function (e) {
                console.log('ERROR IN GETTING PRODUCT');
                res.send(e);
        });
    },
    
    updateProduct : function (req, res) {
        modelQuery.editProduct(req.params.id, req.body)
            .then(function (d) {
                
            if(d) {
                console.log('PRODUCT UPDATED');
                res.send(d);
            }
            else {
                console.log('PRODUCT NOT PRESENT IN DB');
                res.send('PRODUCT ASKED TO BE UPDATED NOT PRESENT IN DATABASE! TRY WITH VALID ID');
            }
        })
            .catch(function (e) {
                console.log('EDIT FAILED');
                res.status(304).send(e);
        })
    },
    
    removeProduct : function (req, res) {
        modelQuery.deleteProduct(req.params.id)
            .then(function (d) {
                
            if(d) {
                console.log('PRODUCT REMOVED');
                res.send(d);
            }
            else {
                console.log('PRODUCT NOT PRESENT IN DB');
                res.send('PRODUCT ASKED TO BE DELETED NOT PRESENT IN DATABASE! TRY WITH VALID ID');
            }
        })
            .catch(function (e) {
                console.log('ERROR IN DELETING PRODUCT');
                res.send(e);
        })
    }
}