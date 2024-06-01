import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    Title:{
        type:String,
        trim:true,
        required:true
    },
    Year:{
        type:String,
        required:true,
    },
    Poster:{
        type:String,
        default:""
    }
},{timestamps:true})

const Movie = mongoose.model("Movie",movieSchema);
export default Movie;