const roleSchema = require('mongoose')

const {model, Schema} = new Schema({
    
    role:{
        type: String
    },
}); 

module.exports = ('Role', roleSchema)