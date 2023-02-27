const mongoose = require('mongoose')
require('dotenv').config()

const rootUserName = process.env.ME_CONFIG_MONGODB_ADMINUSERNAME
const rootPassword = process.env.ME_CONFIG_MONGODB_ADMINPASSWORD
const mongoDbDomain = process.env.ME_CONFIG_MONGODB_DOMAIN_NAME

console.log('=====>', rootUserName, rootPassword, mongoDbDomain)

const mongoAddress = `mongodb://${rootUserName}:${rootPassword}@${mongoDbDomain}:27017/`
console.log('address : ', mongoAddress)

mongoose.set("strictQuery", false);

mongoose.connect(mongoAddress,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    auth: {
        username: rootUserName,
        password: rootPassword,
      },
},(err)=>{
    if(!err){
        console.log('Database Connected')
    }else{
        console.log('We got an error', err)
    }
})

