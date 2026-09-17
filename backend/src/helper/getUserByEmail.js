const Users = require("../schema/userSchema");

async function getUserByEmail(email) {
    try{
        const user = await Users.findOne({email:email});
        return user
    }
    catch(err){
        return err;
    }
}

module.exports = getUserByEmail