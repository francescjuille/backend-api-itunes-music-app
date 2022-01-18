const jwt = require("jsonwebtoken");
var moment = require('moment');  
const bcrypt = require("bcryptjs")

module.exports = {

    async checkLogin(email, password) {
        console.log("email: "+email);
        console.log("password: "+password)
        //MOCK LOGIN, TODO: put a query to DB for check user
        return new Promise((resolve, reject)=>{
            let response = false;
            if(email==="demo@demo.com" && password==="root") {
                response = true;
            }
            resolve(response);
        });
    },

    async createNewUser(newUserData) {
        //TODO: connect  with database, add user
    },

    createToken(email, idUser) {
        const userInfo = {
            email: email,
            id: idUser,
            createdAt: moment().unix(),
            expiredAt: moment().add(30,'days')
        }
        const newUserToken = jwt.sign(userInfo,"root");
        return newUserToken;
    }
}