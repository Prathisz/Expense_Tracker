const {Expense} =require('../Models/Expense.js')

 const addnewexpense =async (req,res)=>{//get detail from user and store it so we use POST method

    req.header.auth
   console.log("ghjk")
    try{
     await Expense.create({
           "amount":req.body.amount,
           "category":req.body.category,
           "date":req.body.date,
           "userID":req.params.userID
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
}

 const getExpense =async function(request, response) {
    try {
        const expenseDetails = await Expense.find({"userID":request.params.userID})
        response.status(200).json(expenseDetails)
    } catch(error) {
        response.status(500).json({
            "status" : "failure",
            "message" : "could not fetch data",
            "error" : error
        })
    }
}


const deleteExpense=async function(request, response) {
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
}

const updateexpense=async function(request, response) {
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
}

module.exports={addnewexpense ,getExpense,deleteExpense,updateexpense}