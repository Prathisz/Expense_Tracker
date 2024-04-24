const express=require('express')
const router=express.Router()
const jwt=require('jsonwebtoken')


const {addnewexpense ,getExpense,deleteExpense,updateexpense}=require('../controllers/ExpenseController.js');


const secretKey='hello'
function authenticatedToken(req,res,next){
const authHeader=req.headers.authorization
const accessToken=authHeader&&authHeader.split(' ')[1]
if (accessToken){
    jwt.verify(accessToken,secretKey,(error,userDetails)=>{
if(error){
    console.log(error);
    res.status(403).json({
        "status":"failure",
        "message":"access denied"
    })

}else{
    next()
}
    })
}else{
    res.status(401).json({
        "status":"failure",
        "message":"access denied"
    })
}
}


router.post('/new/:userID',authenticatedToken,addnewexpense )

router.get('/all/userID',authenticatedToken,getExpense )

router.delete('/delete/:id',authenticatedToken,deleteExpense)

router.patch('/update/:id',authenticatedToken,updateexpense)

module.exports=router