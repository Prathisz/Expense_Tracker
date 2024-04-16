const mongoose=require('mongoose')

//Defining Schema
const expenseDetailSchema=new mongoose.Schema({
    amount:{
        type:Number
    },
    category:{
        type:String
    },
    date:{
        typr: String
    }
},{versionKey:false})

//creating a model

const Expense=mongoose.model('ExpenseDeatails',expenseDetailSchema)

//Userdetail Schema
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
//creating a model

const UserDetail=mongoose.model('UserDetails',UserDetailsSchema)
module.exports ={Expense,UserDetail}