import Movie from "../models/Movie.js";
import Playlist from "../models/Playlist.js"
import User from "../models/User.js";

export const allPlaylist = async(req,res)=>{
    try {
        const userId = req.user.userId;
        const playlists = await Playlist.find({ author: userId });
        // console.log(playlists);
        res.status(201).json(playlists);
    } catch (error) {
        console.log("Error in allPlaylist Controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const addToPlaylist = async(req,res)=>{
    try {
        const {Title, Year, Poster} = req.body;
        // const {id:playlistId} = req.params;
        const {id: playlistId} = req.params;
        const playlist = await Playlist.findById(playlistId);
        let movie = await Movie.findOne({ Title, Year, Poster });
        if (!movie) {
            movie = new Movie({ Title, Year, Poster });
        }
        if (!playlist.movies.includes(movie._id)) {
            playlist.movies.push(movie._id);
        }
        await Promise.all([movie.isNew ? movie.save() : Promise.resolve(), playlist.save()]);

        res.status(201).json({
            _id:movie._id,
            Title:movie.Title,
            Year:movie.Year,
            Poster:movie.Poster
        });
        
    } catch (error) {
        console.log("Error in addToPlaylist Controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}

export const newPlaylist = async(req,res)=>{
    try {
        const {Name, Type, author} = req.body;
        const playlist = await Playlist.findOne({Name});
        
        if(playlist){
            return res.status(404).json({error:"Playlist already exists"})
        }
        
        const user = await User.findOne({username:author});
        if (!user) {
            return res.status(404).json({ error: 'Author are not authenticated' });
        }
        if(user._id.toString()!==req.user.userId){
            return res.status(404).json({error:"Author doesn't match your current username"});
        }
        const newPlaylist = new Playlist({Name,Type,author:user._id});
        user.playlist.push(newPlaylist._id);
        // await newPlaylist.save();
        await Promise.all([newPlaylist.save(),user.save()]);
        res.status(201).json({
            _id:newPlaylist._id,
            Name:newPlaylist.Name,
            Type:newPlaylist.Type,
            author:user._id
        })
        
    } catch (error) {
        console.log("Error in newPlaylist Controller",error.message);
        res.status(500).json({error:"Internal server error"});
    }
}