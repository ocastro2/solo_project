const Special= require('../models/special.model')
const jwt = require('jsonwebtoken')

const SpecialController = {
    test:(req,res)=>{
        res.json({message:"Hello World"})
    },

//create 
    create:(req,res)=>{
        console.log(req.Token)
        Special.create({...req.body,
            // owner:req.Token.id
        })
        .then((special)=>{
            res.status(201).json({special})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })
    },
    
//read
    getOne:(req,res)=>{
        Special.findOne({_id:req.params.id})
        .then((special)=>{

            res.status(200).json({special})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })

        
    },

    getAll:(req,res)=>{
        // console.log(req.Token.id)
        Special.find({})
        .then((special)=>{
            res.status(200).json({specials:special})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })    },

//update
    updateOne:(req,res)=>{
        Special.findByIdAndUpdate({_id:req.params.id},req.body,{new:true,runValidators:true})
        .then((special)=>{
            res.status(200).json({updatedSpecial:special})
        })
        .catch((err)=>{
            res.status(400).json({message:"Something went wrong",error:err})
        })    
    },
//delete
    deleteOne:(req,res)=>{
        Special.findByIdAndDelete({_id:req.params.id})
        .then((special)=>{
            res.status(200).json({deletedSpecial:special})
        })
        .catch((err)=>{
            res.status(500).json({message:"Something went wrong",error:err})
        })
    }
}

module.exports = SpecialController