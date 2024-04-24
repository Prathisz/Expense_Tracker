/**
 * git clone <link>
 * 
 * git add .
 * git commit -m "message"
 * git push
 * 
 * git config --global user.name '<github username>'
 * git config --global user.email <github emailID>
 */

/**
 * Functionalities of the application
 * End points
 * Express application
 * DB connection
 * Schema definition and creating a model
 */

/**
 * CRUD operations
 * adding a new expense -> /add-expense (post)
 * view existing ones -> /get-expenses (get)
 * edit existing entries -> /update-expense (patch)
 * deleting entries -> /delete-expense (delete)
 * 
 * adding a new user
 * validating existing user
 * 
 * monthly analysis
 */

/**
 * Database - Expense Tracker
 * Collections
 *      i) ExpenseDetails
 *          - amount (number)
 *          - category (string)
 *          - date (string)
 *      ii) UserDetails
 *          - username
 *          - emailID
 *          - password
 */

const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const mongoose = require('mongoose')

const { Expense, User } = require('./schema.js')

const app = express()
app.use(bodyParser.json())
app.use(cors())

async function connectToDb() {
    try {
        await mongoose.connect('mongodb+srv://prathish0071:prathish2004@cluster0.iq2tnz2.mongodb.net/ExpenseTracker?retryWrites=true&w=majority&appName=Cluster0')
        console.log("DB connection established :)")

        const port = process.env.PORT || 8000
        app.listen(port, function() {
            console.log(`Listening on port ${port}...`)
        })
    } catch(error) {
        console.log(error)
        console.log('Couldn\'t establish DB connection :(')
    }
}
connectToDb()

app.post('/add-expense', async function(request, response) {
    try {
        await Expense.create({
            "amount": request.body.amount,
            "category": request.body.category,
            "date": request.body.date
        })
        response.status(201).json({
            "status" : "success",
            "message" : "entry successfully added"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "entry not created",
            "error" : error
        })
    }
})

app.get('/get-expenses', async function(request, response) {
    try {
        const expenseDetails = await Expense.find()
        response.status(200).json(expenseDetails)
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "could not fetch data",
            "error" : error
        })
    }
})

app.delete('/delete-expense/:id', async function(request, response) {
    try {
        await Expense.findByIdAndDelete(request.params.id)
        response.status(200).json({
            "status" : "success",
            "message" : "entry deleted"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "couldn\'t delete entry",
            "error" : error
        })
    }
})

app.patch('/update-expense/:id', async function(request, response) {
    try {
        await Expense.findByIdAndUpdate(request.params.id, {
            "amount": request.body.amount,
            "category": request.body.category,
            "date": request.body.date
        })
        response.status(200).json({
            "status" : "success",
            "message" : "entry updated"
        })
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "couldn\'t update entry",
            "error" : error
        })
    }
})