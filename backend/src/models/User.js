import mongoose from "mongoose"


const UserSchema = mongoose.Schema({
    name:{ type: String, require:true},
    email:{type:String, required:true, unique:true},
    password:{type:String, required:true},
    isAdming:{type:Boolean,default:false}

},{timestaps:true});

const User = mongoose.model("User", UserSchema);
export default User;