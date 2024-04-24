const jwt=require('jsonwebtoken')
const {UserDetail}=require('../Models/User.js')

const secretKey = '1njn4t5jj4b36un5474nmvoin35h245nio4io5niy7n425ignvion'
function generateToken(userDetails) {
    return jwt.sign(userDetails, secretKey)
}


async function validateuser(req,response){
    // console.log('ghj');
    try{
        const user= await UserDetail.find({"email":req.body.email})
         if(user.length === 0) { 
             const user=await UserDetail.create({
                 "user_name":req.body.user_name,
                 "email":req.body.email,
                 "password":req.body.password
                })
                // console.log('ghjhg');
               const userDetails = {
                "user_name": user.user_name,
                "email": user.email,
                "userID": user._id.toString()
            }
            console.log(userDetails);
            const accessToken = generateToken(userDetails)
            response.status(201).json({
                "status": "success",
                "message": "new user created",
                "accessToken": accessToken,
                "userDetails":userDetails
            })
            } else {
                response.status(200).json({
                    "status": "success",
                    "message": "user exists"
                })
    
        }
    }catch(error){

        response.status(500).json({
            "Status":"Failure"
        })
    }
}

async function createuser(req,response){
    try{

        const usercheck= await UserDetail.find({"email":req.body.email , "password":req.body.password})
         if(usercheck.length === 0) { 
            response.status(401).json({
                "status": "failure",
                "message": "user does not exist"
            })
        } else {
            const userDetails = {
                "user_name": user[0].user_name,
                "email": user[0].email,
                "userID": user[0]._id.toString()
            }
            const accessToken = generateToken(userDetails)
            response.status(201).json({
                "status": "success",
                "message": "new user created",
                "accessToken": accessToken,
                "userDetails":userDetails
            })
        }
            } catch(error) {
        response.status(500).json({
            "status": "failure",
            "message": "authentication failed",
            "error": error
        })
    }
}

module.exports={validateuser,createuser}