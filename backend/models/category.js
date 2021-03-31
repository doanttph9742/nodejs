import mongoose from 'mongoose';
const {ObjectId}=mongoose.Schema;
const categorySchema =mongoose.Schema({
    name: {
        type: String,
        trim:true,
        maxLength:32,
        required: true
    }
},{timeStamps:true});
module.exports =mongoose.model("Category",categorySchema)