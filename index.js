const express = require("express")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const todo=require("./routes/todo");
const authRouter =require("./routes/authRoute");
const { notFound, errorHandler } = require("./middleware/errorHandler");
const app = express()
const port = 5000 
const cors = require('cors')
dotenv.config();
app.use(cors())


app.use(express.json());
app.use("/api/todo",todo);
app.use("/api/user",authRouter);

app.use(notFound);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log("database connected");
}).catch((err) => {
    console.log(err);
})


app.listen(port, () => {
    console.log(`Server is running port : ${port}`);
})