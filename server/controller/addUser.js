const userModel= require('../model/userModel')


const saveUser=async(req, res)=>{
    try{
        const user= req.body
        const data= await userModel.create(user)
        
        res.status(201).json({
            message:"User saved Successfully",
            error:false,
            success:true,
            data:data
        })

    }
    catch(err){
        res.status(500).json({
            message:err.message || err,
            success:false,
            error:true
        })
    }
   

}



module.exports = saveUser