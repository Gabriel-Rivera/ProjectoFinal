const Schema = require("mongoose").Schema;
const PassportLocalMongoose = require("passport-local-mongoose");

const userSchema = new require("mongoose").Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    roles:{
        type:String,
        enum:["USER", "PREMIUM", "ADMIN"],
        default:"USER"
    }
},
{
    timestamps:{
        createdAt:"created_at",
        updatedAt:"updated_at"
    }
});
userSchema.plugin(PassportLocalMongoose, {usernameField:"email"})
module.exports = require("mongoose").model("User", userSchema);