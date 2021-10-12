const {model, Schema} = require('mongoose')
    // datos a solicitar 
const newSchema  = new Schema ({

    user:{
        type: String,
    },

    correo:{
        type: String,
    },

    password:{
        type: String,
    },

    role:{
        type: String,
    },
});

userSchema.methods.toJSON = function () {
    const { password, ...user } = this.object();
    user.vid=_id;
    return user;
}

module.exports = model('User', userSchema);