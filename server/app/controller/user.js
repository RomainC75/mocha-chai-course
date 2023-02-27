const User = require('../model/User')

exports.getUserInfo = async (req,res) =>{
    try {
        const ans = await User.find({}).sort({date:"desc"})
        res.status(200).json({
            users : ans
        })
    } catch (error) {
        next(error)
    }
    
}

exports.postuserInfo = async (req,res,next)=>{
    try {
        const {name,email,age} = req.body
        if(!name){
            return res.status(422).json({err: "please add a name"})
        }
        if(!age){
            return res.status(422).json({err: "please add a age"})
        }
        if(!email){
            return res.status(422).json({err: "please add a email"})
        }
        const userInfo = new User({
            name,
            email,
            age
        })
        
        const userPostResult = await User.create(userInfo)

        res.status(201).json(userPostResult)
    } catch (error) {
        next(error)
    }
}


exports.getSingleUser = async(req,res,next)=>{
    try {
        const {id} = req.params
        const foundUser = await User.findOne({_id:id})
        res.status(200).json({
            foundUser
        })
    } catch (error) {
        next(error)
    }
}


exports.deleteUser = async(req,res,next)=>{
    try {
        const {id}=req.params
        console.log('delete ', id)
        const ans = await User.findOneAndDelete({_id:id})
        if(!ans){
            return res.status(404).json({message : "user not deleted"})
        }
        res.status(200).json(ans)
    } catch (error) {
        next(error)
    }
}

exports.updateUser = async(req,res,next)=>{
    try {
        console.log('update body : ', req.body)
        const {id}=req.params
        const {name,age, email} = req.body
        const ans = await User.findOneAndUpdate({_id:id},{
            name,
            age,
            email
        },{new:true})
        
        res.status(201).json(ans)
    } catch (error) {
        next(error)
    }
}