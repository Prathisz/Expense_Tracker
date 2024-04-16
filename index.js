const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const {Expense,UserDetail} = require('./schema.js')
const app=express()
app.use(bodyParser.json())

// Connection

//  async function connecttodb(){
//     try{
//         await mongoose.connect('mongodb+srv://prathish0071:prathish2004@cluster0.iq2tnz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
//         app.listen(8000,function(){
//             console.log("Connected To DataBase!!!");
//         })
//     }
//     catch(error){
//         console.log("Database_Error:",error);
//     }

// }
// connecttodb()


/**
 * CRUD operations
 * adding a new expense -> /add-expense (post) 
 * view existing ones  -> /get-expenses expense (get)
 * edit existing entriesm ->/update-expense (patch)
 * deleting entries ->/delete-expense (delete)
 * 
 * adding a new user
 * validating existing user
 * 
 * monthly analysis
 */

/**
 * Schema
 * Database - Expense Tracker
 * Collections- 
 *          i)ExpenseDetails
 *              - amount
 *              - category
 *              - date
 *          ii)UserDetails
 *              - username
 *              - emailId
 *              - password
 */

async function ConnectionToDb(){
    try{
        await mongoose.connect('mongodb+srv://prathish0071:prathish2004@cluster0.iq2tnz2.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
        app.listen(8000,function(){
            console.log('Connected to Db');
        })

    }
    catch(error){
        console.log("ErrorFron DB",error);
    }
}
ConnectionToDb()
// app.get('/',(req,res)=>{
//     res.status(200).json({
//         "mess":"Done uhh"
//     })
// })


app.post('/addExpense', async(req,res)=>{//get detail from user and store it so we use POST method
   console.log("ghjk")
    try{
     await Expense.create({
           "amount":req.body.amount,
           "category":req.body.category,
           "date":req.body.date
       })
       res.status(200).json({
        "status":"true",
        "message":"Entry success"
       })

   } catch(error){
    res.json({
        "status":"failure",
        "MEssage":"entry not created",
        "error":error
    })
   }
})