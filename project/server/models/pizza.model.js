const mongoose = require('mongoose');

const MeatToppingSchema = new mongoose.Schema({
    topping:{
        type:String,
        enum:{
            values:[
                'ham',
                'beef',
                'salami',
                'pepperoni',
                'sausage',
                'chicken',
                'bacon',
                'philly steak',
                'Prosciutto',
                'crab meat',
                'shrimp',
                'meatballs'
            ],
        }
    }
})


const PizzaSchema = new mongoose.Schema({
    name:{type: String,
        required:[true, 'Name toppings required']
    },
    boxArt:{
        type:String,
        // required:[true,"Image is necessary"]
    },
    crust: {        type:String, 
        required:[true, 'crust toppings required'],
        enum: {
            values:[
                'brooklyn style',
                'hand tossed',
                'crunchy thin crust',
                'Chicago Deep Dish',
                'cheese stuffed crust',
                'Cracker Crust',
                'cinnamon crust',
                'Flatbread Crust',
                'Sicilian-Style Crust',
                'vegan crust',
                'cauliflower'

            ],
            message:"{VALUE} is not supported",
            validate:{
                validator:function(v){
                    if (v.length > 1) {
                        return false
                    }
                },
                message:"Only one crust type allowed"
            },
            validate:{
                validator:function(v){
                    if (v.length == 0) {
                        return false
                    }
                },
                message:"Atleast one Crust type required"
            }
        },
},
    size: {
        type : String, 
        // required:[true, 'Size is required'],
        enum: {
            values:[
                'small',
                'medium',
                'large',
                'x-large',
            ],
            message:"{VALUE} is not supported",
            validate:{
                validator:function(v){
                    if (v.length > 1) {
                        return false
                    }
                },
                message:"Only one pizza size allowed"
            }
        },
    },
    sauce: { 
        type : String, 
                required:[true, 'Sauce is required'],
                enum: {
                    values:[
                        'robust inspired tomato sauce',
                        'marinara sauce',
                        'honey BBQ sauce',
                        'garlic parmesan sauce',
                        'alfredo sauce',
                        'ranch',
                        'buffalo',
                        'Pesto',
                        'Hummus',
                        'White Garlic Sauce'
                    ],
                    message:"{VALUE} is not supported",
                    validate:{
                        validator:function(v){
                            if (v.length > 1) {
                                return false
                            }
                        },
                        message:"Only one sauce type allowed"
                    }
                },
},
    meatToppings: { 
                type:[MeatToppingSchema],
            validate:{
                validator:function(v){
                    if (v.length > 4) {
                        return false
                    }
                },
                message:"Only four meat toppings allowed"
            },
        },

    nonMeatToppings: { 
        type : String, 
        required:[true, 'Non-meat toppings required'],
        enum: {
            values:[
                'jalapeno peppers',
                'onions',
                'banana peppers',,
                'broccoli',
                'eggplant',
                'diced tomatoes',
                'black olives',
                'mushrooms',
                'pineapple',
                'spinach',
                'roasted red peppers',
                'feta cheese',
                'green peppers',
                'arugula', 
                'kale',
                'zucchini'
            ],
            message:"{VALUE} is not supported",
            validate:{
                validator:function(v){
                    if (v.length > 4) {
                        return false
                    }
                },
                message:"Only four Non-meat toppings allowed"
            }
        },
    },
    cheese: { 
        type : String, 
                required:[true, 'cheese is required'],
                enum: {
                    values:[
                        'shredded provolone cheese',
                        'cheddar',
                        'pepper jack',
                        'mozzarella cheese',
                        'parmesan cheese',
                        'gouda',
                        'goat cheese',
                        'gruyere',
                        'ricotta'
                    ],
                    message:"{VALUE} is not supported",
                    validate:{
                        validator:function(v){
                            if (v.length > 3) {
                                return false
                            }
                        },
                        message:"Only three cheeses allowed"
                    },
                    validate:{
                        validator:function(v){
                            if (v.length == 0) {
                                return false
                            }
                        },
                        message:"Atleast one cheese required"
                    }
                },
},
    Instructions: {
        type: String,
        minLength:[3, "min character length should be 3, got {VALUE}"],
        maxLength:[100, "max character length should be 100, got {VALUE}"]
    }
    }, { timestamps: true });
module.exports = mongoose.model('Pizza', PizzaSchema);