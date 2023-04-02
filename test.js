
// var adjective = ["Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even","Excited", "Anxious", "Overweight", "Demonic", "Jumpy", "Misunderstood", "Squashed", "Gargantuan","Broad", "Crooked", "Curved", "Deep", "Even", "Flat", "Hilly", "Jagged", "Round", "Shallow", "Square", "Steep", "Straight", "Thick", "Thin", "Cooing", "Deafening", "Faint", "Harsh", "High-pitched", "Hissing", "Hushed", "Husky", "Loud", "Melodic", "Moaning", "Mute", "Noisy", "Purring", "Quiet", "Raspy", "Screeching", "Shrill", "Silent", "Soft", "Squeaky", "Squealing", "Thundering", "Voiceless", "Whispering"] 
// var object = ["Taco", "Operating System", "Sphere", "Watermelon", "Cheeseburger", "Apple Pie", "Spider", "Dragon", "Remote Control", "Soda", "Barbie Doll", "Watch", "Purple Pen", "Dollar Bill", "Stuffed Animal", "Hair Clip", "Sunglasses", "T-shirt", "Purse", "Towel", "Hat", "Camera", "Hand Sanitizer Bottle", "Photo", "Dog Bone", "Hair Brush", "Birthday Card"]
// var list;

// function generator() {
//  return adjective[Math.floor(Math.random() * adjective.length)] + " " + object[Math.floor(Math.random() * object.length)];;;
// }
// function getRndInteger(min, max) {
//   return Math.floor(Math.random() * (max - min) ) + min;
// }
// function randomDate(start, end) {
//   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime())).toISOString()
// }




var obj=require('./products.json')
var ad=[]
for(q of obj){
ad.push({"name":q.name[q.name.length-1],"price":q.price[q.price.length-1],"sell_price":q.buyprice[q.buyprice.length-1],"barkod":q.barkod,'count':q.countnum})
}
console.log(ad)
s="insert into products(product_id,pr_count,pr_user_id) values"
v={}
x=4534
for(let i=0;i<ad.length;i++){
  if ((ad[i].barkod in v)==false){
v[ad[i].barkod]=1
s=s+`("${x}",${ad[i].count},1),\n`
x+=1;
}
}
var fs = require('fs');
fs.writeFile('products.text', s, 'utf8',(err)=>{
  console.log(err)
});




