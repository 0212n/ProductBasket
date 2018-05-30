const Controller = require('./../controller/control.js');

module.exports = function (app) {
    
    app.get('/', Controller.homeMessage);
    
    app.get('/products', Controller.viewProducts);
    
    app.post('/products', Controller.addProduct);
    
    app.get('/products/:id', Controller.viewProduct);
    
    app.put('/products/:id', Controller.updateProduct);
    
    app.delete('/products/:id', Controller.removeProduct);
    
    app.get('*', function(req, res, next) {
        var err = new Error();
        err.status = 404;
        next(err);
    });
    
};