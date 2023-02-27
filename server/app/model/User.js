const mongoose = require('mongoose')

var userShema = mongoose.Schema({
    name:{
        type: String
        
    },
    email:{
        type: String
    },
    age:{
        type: Number
    },
    date:{
        type: Date,
        default: Date.now()
    }
})


module.exports = mongoose.model('UserInfo', userShema)