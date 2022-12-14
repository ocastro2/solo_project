const Pizza= require('../models/pizza.model')
const jwt = require('jsonwebtoken')

const PizzaController = {
    test:(req,res)=>{
        res.json({message:"Hello World"})
    },

//create 
    create:(req,res)=>{
        console.log(req.Token)
        Pizza.create({...req.body,
            // owner:req.Token.id
        })
        .then((pizza)=>{
            res.status(201).json({pizza})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },
    
//read
    getOne:(req,res)=>{
        Pizza.findOne({_id:req.params.id})
        .then((pizza)=>{

            res.status(200).json({pizza})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })

        
    },

    getAll:(req,res)=>{
        // console.log(req.Token.id)
        Pizza.find({})
        .then((pizza)=>{
            res.status(200).json({pizzas:pizza})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })    },

//update
    updateOne:(req,res)=>{
        Pizza.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((pizza)=>{
            res.status(200).json({updatedPizza:pizza})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })    
    },
//delete
    deleteOne:(req,res)=>{
        Pizza.findByIdAndDelete({_id:req.params.id})
        .then((pizza)=>{
            res.status(200).json({deletedPizza:pizza})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    }
}

module.exports = PizzaController