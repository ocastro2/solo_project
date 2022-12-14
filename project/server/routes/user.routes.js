// const UserController = require('../controllers/user.controller');
// const { authenticate,isLoggedIn } = require('../config/jwt.config');
// module.exports = (app) => {
//     app.post("/api/login", UserController.login);
//     app.post("/api/register", UserController.register);
//     app.get("/api/users", authenticate, UserController.findAll);
//     app.post('/api/isLoggedIn',isLoggedIn)
//     // app.get('/api/users/:id', authenticate, UserController.getOne);
//     // app.put('/api/users/:id', authenticate, UserController.edit);
//     // app.delete('/api/users/:id', authenticate, UserController.kabloowie);
// }
// // app.post('/api/users', authenticate, UserController.create);

const UserController = require('../controllers/user.controller')
const { authenticate,isLoggedIn } = require('../config/jwt.config')

const routes = (app)=>{

    
    //Create
    app.post('/api/register',UserController.register)
    //Read
    app.post('/api/login',UserController.login)
    
    app.get('/api/logout',UserController.logout)

    app.get("/api/user", 
    // authenticate
     UserController.getAll);

    app.post('/api/isLoggedIn',isLoggedIn)
}


module.exports = routes