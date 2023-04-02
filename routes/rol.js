router.get('/get/rol',checker,async(req,res)=>{
    res.json({"rol":req.session.email})
})
module.exports=router