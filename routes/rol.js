router.get('/get/rol',async(req,res)=>{
    res.json({"rol":req.session.email})
})
module.exports=router