import mongoose from "mongoose";

const playlistSchema = new mongoose.Schema({
    Name:{
        type:String,
        trim:true,
        required:true,
        unique: true 
    },
    Type:{
        type:String,
        required:true,
        enum:["Private","Public"]
    },
    author:{
        type: mongoose.Schema.Types.ObjectId,
        ref : 'User',
        required:true
    },
    movies:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Movie",
            default:[]
        }
    ]
},{timestamps:true})

const Playlist = mongoose.model("Playlist",playlistSchema);
export default Playlist;