const express = require('express');
require('dotenv').config();
const app = express();
const port = 8000;
const cors = require('cors')
const cookieParser = require('cookie-parser')
const socket = require('socket.io');
// app.use(cors()) 
app.use(cors(
    {
        origin: "http://localhost:3000",
        credentials:true
    }
    ))
app.use(cookieParser())

app.use(express.json());                           

//MODELS
const Pizza = require('./models/pizza.model')
const Special = require('./models/special.model') 

//CONFIG
require('./config/mongoose.config') 
//ROUTES
require('./routes/special.routes')(app); 
require('./routes/pizza.routes')(app);
require('./routes/user.routes')(app)
app.listen(port, () => console.log(`Listening on port: ${port}`) );
