const mongoose=require('mongoose')
const UserDetailsSchema=new mongoose.Schema({
    user_name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String
    }
})

const UserDetail=mongoose.model('UserDetails',UserDetailsSchema)

module.exports ={UserDetail}