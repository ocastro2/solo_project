const SpecialController = require('../controllers/special.controller')
const { authenticate,isLoggedIn } = require('../config/jwt.config')

    const routes = (app)=>{
    
    //Create
    app.post('/api/specials',SpecialController.create)
    // http://localhost:8000/api/special
    //Read
    app.get('/api/specials',
    // authenticate
    SpecialController.getAll)
    app.get('/api/specials/:id',SpecialController.getOne)
    //Update
    app.put('/api/specials/:id',SpecialController.updateOne)
    //Delete
    app.delete('/api/specials/:id',SpecialController.deleteOne)
}


module.exports = routes