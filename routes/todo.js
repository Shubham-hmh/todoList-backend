const Todo = require("../model/Todo");
const express = require("express");
const router = express.Router();



// create post 
router.post("/", async (req, res) => {
    const newTodo = new Todo(req.body);

    try {
        const savedTodo = await newTodo.save();
        res.status(200).json(savedTodo);
    }
    catch (err) {
        res.status(500).json(err);
    }

})

//update 

router.patch("/updateUser/:id", async (req, res) => {
    const {id}=req.params;

    try {
        const newBrand =await Todo.findByIdAndUpdate(id,req.body,{new:true});
        res.json(newBrand);
        
    } catch (error) {
        throw new Error(error);
        
    }
})


// delete 
router.delete("/deleteUser/:id",async(req,res)=>{
    try{
        await Todo.findByIdAndDelete(req.params.id);
        res.status(200).json("Todo has been deleted...")
    }
    catch(err){
        res.status(500).json(err);
    }
})


// get single todo
router.get("/find/:id",async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        res.status(200).json(todo);
    }
    catch(err){
        res.status(500).json(err);
    }
})


// get all todo
router.get("/",async(req,res)=>{
    try{
        const todoList =await Todo.find();
        res.status(200).json(todoList);
    }
    catch(err){
        res.status(500).json(err);
    }
})

module.exports = router;