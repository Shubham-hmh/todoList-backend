const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const coords = require("./routes/coords");
const todo=require("./routes/todo");
const app = express()
const port = 5000
const cors = require('cors')
dotenv.config();
app.use(cors())


app.use(express.json());
app.use("/api/coords", coords);
app.use("/api/todo",todo);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
})




// // create post 
// app.post("/", async (req, res) => {
//     const newTodo = new Todo(req.body);

//     try {
//         const savedTodo = await newTodo.save();
//         res.status(200).json(savedTodo);
//     }
//     catch (err) {
//         res.status(500).json(err);
//     }

// })

// //update 

// app.patch("/updateUser/:id", async (req, res) => {
//     try {
//         const updateTodo = await Todo.findByIdAndUpdate(req.params.id, {
//             $set:req.body
//         }, { new: true }
//         );
//         res.json(updateTodo);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// })


// // delete 
// app.delete("/deleteUser/:id",async(req,res)=>{
//     try{
//         await Todo.findByIdAndDelete(req.params.id);
//         res.status(200).json("Todo has been deleted...")
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// })


// // get single todo
// app.get("/find/:id",async(req,res)=>{
//     try{
//         const todo=await Todo.findById(req.params.id);
//         res.status(200).json(todo);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// })


// // get all todo
// app.get("/",async(req,res)=>{
//     try{
//         const todoList =await Todo.find();
//         res.status(200).json(todoList);
//     }
//     catch(err){
//         res.status(500).json(err);
//     }
// })



app.listen(port, () => {
    console.log(`Server is running port : ${port}`);
})