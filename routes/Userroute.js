const express=require('express')
const router=express.Router()

const {validateuser,createuser}=require('../controllers/UserController.js')


router.post('/new' ,validateuser)

router.post('/login',createuser)

module.exports=router;