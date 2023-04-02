router.get('/get/sell',async(req,res)=>{
    const items =[]
    const organs=await RunSQL("SELECT * from users")
    res.render('sell',{
        allitems:items,
        organs:organs
    })
})
router.post('/add/sell',async(req,res)=>{
    console.log(req.body)
    console.log(req.session.user_id)
    const{pulkochrish,plastik,naqd,minusName,minusCount,minusPayment,bazanarx,barkod,idfornews,organid,curiername,summa,allid}=req.body;
    let inserting=[]
    let updating=[]
    let insertfortranz=[]
    let inserttranzfororgan=[]
    order_id="id" + Math.random().toString(16).slice(2)
    inserttranzfororgan.push([curiername,summa,organid,order_id])
    for(let i=0;i<req.body.minusName.length;i++){
        insertfortranz.push([allid[i],minusCount[i],req.session.user_id,order_id])
        await RunSQL("UPDATE filial_count SET  pr_count=pr_count-? WHERE product_id=? and pr_user_id=?",[minusCount[i],allid[i],req.session.user_id])
}
await RunSQL("INSERT INTO ALLSUMMA(cash,card,transfer,order_id,user_id) VALUES (?,?,?,?,?)",[parseInt(naqd),plastik,pulkochrish,order_id,req.session.user_id])

await RunSQL("INSERT INTO tranzfilial(product_id,pr_count,magid,order_id) VALUES ?",[insertfortranz])
res.json({})
// const insertingfortranz=await RunSQL("INSERT INTO tranzactions(pr_name, barcode,pr_count, price,organ_id,order_id) VALUES ?",[insertfortranz]) 
})

module.exports=router