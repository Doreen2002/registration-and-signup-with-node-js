const express = require('express');
const route = express.Router();
const bcrypt = require('bcrypt');
const jsonwt = require('jsonwebtoken');

const users = require('../models/registerModels.js');
const mongoose = require('mongoose');

exports.registerController = async(req, res)=>
{
    const emailExists = await users.findOne({email:req.body.email});
    if (emailExists) return res.status(400).json({success:false, message:"user with this email already exists"});
       
     
        //hashing passwords
       const salt = await bcrypt.genSalt(10);
       const hashPassword = await bcrypt.hash(req.body.password, salt);
     

    const userPerson = new users({
        username:req.body.username,
        email:req.body.email,
        password:hashPassword,
    });
    

    try{
        const saved = await userPerson.save();
        if(saved)
        {
            res.status(200).json({success: true, message:"registered succesfully"})

        }
        
    }
    catch(err)
    {
        res.status(400).json({message: err.message});
    }
   
   

}   

exports.loginUserController = async(req, res)=>
{
    //checking user exists
    const user = await users.findOne({username: req.body.username});
    if(!user) res.status(400).json({success:false, message:"wrong username or  Password"})
    //using bcrypt to compare passwords
    const validpass = await bcrypt.compare(req.body.password, user.password);
    if (!validpass) return res.status(404).json({ success: false, message: "wrong username or  Password" });
    //creating a token to send to the user
    const token = jsonwt.sign({ user_id: user.user_id }, process.env.USER_TOKEN );
    if(validpass)
    {
        res.status(200).json({succes:true, message:"logged in succefully", token:token});

    }
    
}