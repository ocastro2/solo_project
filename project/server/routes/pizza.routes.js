const PizzaController = require('../controllers/pizza.controller')
const { authenticate,isLoggedIn } = require('../config/jwt.config')

    const routes = (app)=>{
    
    //Create
    app.post('/api/pizzas',PizzaController.create)
    // http://localhost:8000/api/pizza
    //Read
    app.get('/api/pizzas',
    // authenticate
    PizzaController.getAll)
    app.get('/api/pizzas/:id',PizzaController.getOne)
    //Update
    app.put('/api/pizzas/:id',PizzaController.updateOne)
    //Delete
    app.delete('/api/pizzas/:id',PizzaController.deleteOne)
}


module.exports = routes