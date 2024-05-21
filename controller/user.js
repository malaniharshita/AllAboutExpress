const { json } = require('body-parser');
const User = require('../models/UserModel');    

const postUserData = async(req,res,next) => {
    try{
    console.log('in controller');
    const name = req.body.name;
    console.log('name'+name);
    
    const emailId = req.body.emailId;
    console.log('mail'+emailId);
    const phonenumber = req.body.number;
    console.log('num'+phonenumber);
    const data = await User.create({
        name: name, 
        email: emailId, 
        phonenumber: phonenumber
    })
    res.status(201).json({newUserDetail: data});
    console.log(JSON.stringify(data));

    }
    catch(err)  {
        res.status(500).json({
            error:err
        })
    }
}
const getUserData = async(req,res,next)=>{
    try{
        const users = await User.findAll();
        res.status(200).json({allUsers: users});
    }
    catch(err){
        console.log('Get User is failing', JSON.stringify(err));
        res.status(500).json({error:err});
    }
} 
const deleteUserData = async(req,res,next)=>{
    console.log(req.params.id);
    try{
        if(!req.params.id){
            console.log('id is missing');
            return res.status(400).json({error: 'ID is missing'})
        }
        const uid = req.params.id;
        await User.destroy({where: {id:uid}});
        res.status(200);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
}
    
module.exports = {
    postUserData,
    getUserData,
    deleteUserData
}
   
