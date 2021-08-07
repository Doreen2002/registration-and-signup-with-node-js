const express = require('express');
const route = express.Router();

const jsonwt = require('jsonwebtoken');

const createTask= require('../models/registerModels.js');
const mongoose = require('mongoose');


exports.createTaskController = async (req, res)=>
{
   
     const user = await createTask.findOne({username:"doreen"})
     const date = new Date().toLocaleString();
    

    try{
         
        user.taskname.push({task:req.body.taskname, date: date});
        const savedTask = user.save();
        if(savedTask) return res.status(201).json({success:true, message:"tasks has been added to task list"});
        if(!savedTask) return res.status(400).json({success:false, message:"error occured message wasnt created successfully"});
     


    }
    catch(error)
    {
       res.send(`error message: ${error.message}`);
    }
}
exports.viewTaskController = async (req, res)=>
{
    const user = await createTask.findOne({username:"doreen"})
 
    try
    {
        
        
        
       
            res.status(200).json({success:true, message:user.taskname});

        


    }
    catch(error)
    {
        res.send(`message:${error.message}`);
    }


}