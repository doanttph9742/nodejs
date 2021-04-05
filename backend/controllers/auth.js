// const User = require('../models/user');
import User from '../models/user'
export const signup=(req, res)=>{
    console.log("request body",req.body);
    const user = new User(req.body);
    console.log('thông tin user sau khi mã hóa',user)
    user.save((error,user)=>{
        if(error){
            return res.status(400).json({
                error:"không thể đăng kí"
            })
        }
        user.salt = undefined;//k trả về khi post trong postman
        user.hashed_password = undefined;
        res.json({user})
    });
}
