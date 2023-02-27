const expect = require("chai").expect;
const {before, after, beforeEach} = require('mocha')
let chai = require("chai");
let should = chai.should();
const axios = require("axios");

const { API_URL, createUser, newUser, updateUserData, deleteUser } = require("./test_utils");
console.log("++++++", updateUserData, newUser)



describe('update user', ()=>{
    beforeEach(async ()=>{
        targetUser = await createUser()
    })
    
    afterEach(async ()=>{
        await deleteUser(targetUser._id)
    })

    it('should update a user - everything', async ()=>{
        const response = await axios.put(`${API_URL}/api/updateinfo/${targetUser._id}`,updateUserData)
        const updatedUser = response.data
        
        expect(response.status).to.be.equal(201)
        expect(updatedUser).to.be.an('object')
        expect(updatedUser._id).to.be.equal(targetUser._id)

        const result = Object.keys(updateUserData).every(key=>updatedUser[key]===updateUserData[key])
        expect(result).to.be.equal(true)

    })

    it('should update a user - name', async ()=>{
        const { name } = updateUserData

        const response = await axios.put(`${API_URL}/api/updateinfo/${targetUser._id}`,{name})
        const updatedUser = response.data
        
        expect(response.status).to.be.equal(201)
        expect(updatedUser).to.be.an('object')
        expect(updatedUser._id).to.be.equal(targetUser._id)
    })

    it('should update a user - age', async ()=>{
        const { age } = updateUserData
        
        const response = await axios.put(`${API_URL}/api/updateinfo/${targetUser._id}`,{age})
        const updatedUser = response.data
        
        expect(response.status).to.be.equal(201)
        expect(updatedUser).to.be.an('object')
        expect(updatedUser._id).to.be.equal(targetUser._id)
    })

    it('should not update a user - with a wrong id', async ()=>{
        try {
            const wrongId="23abd"

            const response = await axios.put(`${API_URL}/api/updateinfo/${wrongId}`,{updateUserData})
    
            expect(response.status).not.to.be.equal(201)
        } catch (error) {
            expect(error.response.status).to.be.equal(500)  
        }
        
    })
})