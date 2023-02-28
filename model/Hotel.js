const mongoose =require("mongoose");

const HotelSchema = new mongoose.Schema({
    hotelName:{type:String ,required:true},
    hotel_rating:{type:Number,required:true},
    state:{type:String,required:true},
    city:{type:String,required:true},
    foodCategory:{type:Array,required:true,unique:true},
    foodItems:{type:Array},
    amount:{type:Number,required:true},

},{timestamps:true}
)

module.exports=mongoose.model("Hotel",HotelSchema)