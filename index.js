const express=require('express')
const mongoose=require('mongoose')

const app=express()

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

async function ConnectionToDb(){
    try{
        await mongoose.connect('mongodb+srv://prathish0071:prathish2004@cluster0.iq2tnz2.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
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