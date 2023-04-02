router.get('/user/sign-in',(req,res)=>{
    req.session.destroy()
    res.render('login',{
        message:""
    })
})
router.post('/user/sign-in',async(req,res)=>{
    const{email,pass}=req.body
    const user =await RunSQL("SELECT * FROM USERS WHERE email=? and pass=?",[email,pass])
    if (!user||user.length==0 || user.err){
        res.render('login',{
            message:"Login yoki Email Xato"
        })
    }else{
        req.session.email=email
       
        req.session.user_id=user[0].user_id;
        res.redirect('/user/dashboard')
    }
})
module.exports=router;