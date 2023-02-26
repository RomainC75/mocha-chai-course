const mongoose = require('mongoose')
require('dotenv').config()

const rootUserName = process.env.ME_CONFIG_MONGODB_ADMINUSERNAME
const rootPassword = process.env.ME_CONFIG_MONGODB_ADMINPASSWORD
const mongoDbDomain = process.env.ME_CONFIG_MONGODB_DOMAIN_NAME

const mongoAddress = `mongodb://${rootUserName}:${rootPassword}@${mongoDbDomain}:27017/`


mongoose.set("strictQuery", false);

mongoose.connect(mongoAddress,{
    useNewUrlParser: true,
    useUnifiedTopology: true
},(err)=>{
    if(!err){
        console.log('Database Connected')
    }else{
        console.log('We got an error', err)
    }
})

