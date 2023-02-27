const expect = require("chai").expect;
const {before} = require('mocha')
let chai = require("chai");
let should = chai.should();
const axios = require("axios");

const { API_URL, createUser, newUser } = require("./test_utils");

// before(async ()=>{
//     targetUser = await createUser()
// })



describe('create new User ', () =>{

    it('should create a new User', async () =>{
        const response = await axios.post(`${API_URL}/api/postuserInfo`, newUser)
        expect(response.status).to.be.equal(201)
        expect(response.data).to.be.an('object')
    })

    it('should NOT create a new User without name', async () =>{
        try {
            const newUserCpy = {...newUser}
            delete newUserCpy.name
            const response = await axios.post(`${API_URL}/api/postuserInfo`, newUserCpy)
            expect(response.status).not.to.be.equal(201)
            expect(response.status).not.to.be.an("object")
        } catch (error) {
            if(error.response){
                expect(error.response.status).to.be.equal(422)
            }else{
                throw error
            }
        }
    })

    it('should NOT create a new User without email', async () =>{
        try {
            const newUserCpy = {...newUser}
            delete newUserCpy.email
            const response = await axios.post(`${API_URL}/api/postuserInfo`, newUserCpy)
            expect(response.status).not.to.be.equal(201)
            expect(response.status).not.to.be.an("object")
        } catch (error) {
            if(error.response){
                expect(error.response.status).to.be.equal(422)
            }else{
                throw error
            }
        }
    })

    it('should NOT create a new User without age', async () =>{
        try {
            const newUserCpy = {...newUser}
            delete newUserCpy.age
            const response = await axios.post(`${API_URL}/api/postuserInfo`, newUserCpy)
            expect(response.status).not.to.be.equal(201)
            expect(response.status).not.to.be.an("object")
        } catch (error) {
            if(error.response){
                expect(error.response.status).to.be.equal(422)
            }else{
                throw error
            }
        }
    })
})