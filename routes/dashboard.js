router.get('/user/dashboard',checker,async(req,res)=>{
    
    res.render('dashboard')
})
module.exports=router;