const userCtrl={};
userCtrl.getUsers=(req,res)=>res.json({message:'GET usuarios'})
userCtrl.createUser=(req,res)=>res.json({message:'POST usuarios'})
userCtrl.deleteUser=(req,res)=>res.json({message:'DELETE usuarios'})

module.exports=userCtrl;