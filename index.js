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
const express=require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser');
const jwt=require('jsonwebtoken')
// const {Expense,UserDetail} = require('./schema.js')
const app=express()
app.use(bodyParser.json())

const expenserout=require('./routes/Expenseroute.js')
const userroute=require('./routes/Userroute.js')

app.use('/expense',expenserout)
app.use('/user',userroute)

const secretKey = '1njn4t5jj4b36un5474nmvoin35h245nio4io5niy7n425ignvion'
function generateToken(userDetails) {
    return jwt.sign(userDetails, secretKey)
}

// app.use(authenticatedToken)
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






