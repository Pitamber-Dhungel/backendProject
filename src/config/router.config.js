const router=require('express').Router();
const authRouter=require('../module/auth/auth.router');

router.get('/',(req,res,next)=>{
    res.json({
        data:"api is working properly",
         message:"success",
         status:"OK",
         options:null
    })
});

//modules router
router.use('/auth',authRouter);





module.exports=router;