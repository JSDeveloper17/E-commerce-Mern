const bcrypt = require("bcrypt")

async function hashedPassword(password) {
    try{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password,salt)
        return hashedPassword
    }
    catch(err){
        console.log(err)
    }
    
}
async function comparePassword(password, hashed) {
    return bcrypt.compare(password, hashed)
}

module.exports = {hashedPassword, comparePassword}