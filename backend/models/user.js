import mongoose from 'mongoose';
const crypto = require('crypto');
const { v1: uuidv1 } = require('uuid');
const userSchema =mongoose.Schema({
    username: {
        type: String,
        trim:true,
        maxLength:32,
        required: true
    },
    hashed_password: {
        type: String,
        required: true
    },
    email: {
        type:String,
        trim:true,
        unique:true,
        required: true
    }
    // about: {
    //     type: String,
    //     trim:true,
    // },
    // roles: {
    //     type:Number,
    //     default:0
    // },
    // history: {
    //     type:Array,
    //     default:[]
    // }
},{timestamps:true})

userSchema.virtual('password')//tạo ra password qua virtual trong mooge
    .set(function (password) {//lấy password
        this._password = password
        this.salt = uuidv1()//ramdom 1 chuổi nào đó
        this.hashed_password =this.encrytPassword(password)//mã hóa password r gán vò hashed_pasword
    })
module.exports =mongoose.model("User",userSchema)