const expect = require("chai").expect;
const {before, beforeEach} = require('mocha')
let chai = require("chai");
let should = chai.should();
const axios = require("axios");

const { API_URL, createUser, newUser } = require("./test_utils");



describe('Delete User',()=>{
    beforeEach(async ()=>{
        targetUser = await createUser()
    })
    
    it('delete Single User',async ()=>{
        console.log('delete Single User : ', targetUser._id)
        const response = await axios.delete(`${API_URL}/api/deleteuser/${targetUser._id}`)
        expect(response.status).to.be.equal(200)
        expect(response.data).to.be.an('object')
        expect(response.data._id).to.be.equal(targetUser._id)
    })
})