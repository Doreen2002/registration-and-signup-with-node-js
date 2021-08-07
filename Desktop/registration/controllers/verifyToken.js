const jsonwt = require('jsonwebtoken');

//middleware function added to routes that need to be protected.

exports.verifyer = async(req,res,next)=>
{
    //check for token in the header
    const token = req.header('user-token');
    //check if token doesnt exist
    if(!token) res.status(400).json({success:false, message:"cant acess unless logged in"});

    try {
        
        //verify token
        const verified = jsonwt.verify(token, process.env.USER_TOKEN );
        req.user = verified;
        //go to next middleware
        next();
    } 
    catch (err) {
        
        res.status(400).send(err);
    }
}