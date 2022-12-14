const mongoose = require('mongoose');

const SpecialSchema = new mongoose.Schema({
    name:{type: String,
        required:[true, 'crust toppings required']
    },
    crust: {        type:String, 
        required:[true, 'crust toppings required'],
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

},
    meatToppings: { 
                type:String, 
        // required:[true, 'meat toppings required'],

    },
    nonMeatToppings: { 
        type : String, 
        // required:[true, 'Non-meat toppings required'],
    },
    cheese: { 
        type : String, 
                // required:[true, 'cheese is required'],
},
boxArt:{
    type:String,
    // required:[true,"Image is necessary"]
},
    Instructions: {
        type: String,
        minLength:[3, "min character length should be 3, got {VALUE}"],
        maxLength:[100, "max character length should be 100, got {VALUE}"]
    }
    }, { timestamps: true });
module.exports = mongoose.model('Special', SpecialSchema);