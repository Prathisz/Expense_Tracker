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
const Expense=mongoose.model('ExpenseDeatails',expenseDetailSchema)

module.exports ={Expense};