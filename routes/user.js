const exp=require("express");
const router=exp.Router();

router.get("/add",(req,res)=>{
res.json({msg:"I am add"})
});

module.exports=router;