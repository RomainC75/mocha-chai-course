const axios = require('axios')

const API_URL = "http://localhost:5000"

const newUser = {
    name:"new User",
    email:"new.user@gmail.com",
    age:123,
}
const updateUserData = {
    name:"updated name",
    email:"updated.user@gmail.com",
    age:23456,
}

const createUser = async () =>{
    const response = await axios.post(`${API_URL}/api/postuserInfo`,newUser)
    return response.data
}

const deleteUser = async(id)=>{
    const response = await axios.delete(`${API_URL}/api/deleteuser/${id}`)
    return response.data
} 

module.exports = {
    API_URL, createUser, newUser, updateUserData, deleteUser
}