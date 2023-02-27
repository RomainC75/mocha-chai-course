const expect = require("chai").expect;
const {before} = require('mocha')
let chai = require("chai");
let should = chai.should();
const axios = require("axios");

const { API_URL, createUser, newUser } = require("./test_utils");

describe("Get User infos", () => {
    
    before(async ()=>{
        targetUser = await createUser()
    })

  it("should get All users list", async () => {
    const response = await axios.get(`${API_URL}/api/getuserInfo`);
    const { data } = response;
    expect(response.status).to.be.equal(200);
    expect(data).to.be.an("object");
  });


  it("should post a new user", async ()=>{
    const response = await axios.post(`${API_URL}/api/postuserInfo`,newUser)
    expect(response.status).to.be.equal(201)
    expect(response.data).to.be.an('object')
  });


  it("should get a single user with an Id", async () => {
    const targetId = targetUser._id

    const response = await axios.get(`${API_URL}/api/singleuser/${targetId}`);
    const foundUser = response.data.foundUser

    expect(response.status).to.be.equal(200)
    expect(foundUser).to.be.an('object')
    expect(targetUser._id).to.be.equal(foundUser._id)
  });

  it('should have all properties in each user', async ()=>{
    const targetId = targetUser._id

    const {data} = await axios.get(`${API_URL}/api/singleuser/${targetId}`);
    const foundUser = data.foundUser

    expect(foundUser).to.be.an('object')
    expect(foundUser).to.have.property('name')
    expect(Object.keys(foundUser)).to.include.members(['name','date','email'])
    expect(targetUser.name).to.be.equal(foundUser.name)
  })
});

// describe('Check two numbers', ()=>{
//     it('should match two numbers',()=>{
//         let first = 10
//         let second = 10

//         expect(first).to.be.equal(second)
//     })

//     it('should NOT match two numbers',()=>{
//         let first = 10
//         let second = 1

//         expect(first).not.to.be.equal(second)
//     })
//     it('should NOT match two numbers',()=>{
//         const name ="bob"

//         expect(name).to.be.equal("bob")
//     })
// })
