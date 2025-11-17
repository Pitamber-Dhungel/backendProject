const authRouter=require('express').Router();


//registeration
authRouter.post('/register',(req,res,next)=>{
    //todo logic
    let user={};
    res.json({
        data:user,
        message:"user register successful",
        status:"ok",
        options:null
    })
})

module.exports=authRouter;