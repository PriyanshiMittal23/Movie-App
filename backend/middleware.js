import jwt from 'jsonwebtoken';
import Playlist from './models/Playlist.js';

export const isLoggedIn = (req, res, next) => {
  const token = req.cookies.jwt || req.headers['authorization']?.split(' ')[1];

  if(!token){
    return res.status(401).json({error:"Unauthorized User"});
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(403).json({ error: 'User not found' });
    }
    req.user = { userId: decoded.userId };
    next();
  });
};

export const isAuthor = async (req, res, next) => {
    try {
      const playlistId = req.params.id;
      const playlist = await Playlist.findById(playlistId).populate('author');
  
      if (!playlist) {
        return res.status(404).json({ error: 'Playlist not found' });
      }
  
      if (playlist.author._id.toString() !== req.user.userId) {
        return res.status(403).json({ error: 'You do not have permission' });
      }
  
      next();
    } catch (err) {
      console.error('Error in isAuthor middleware:', err.message);
      res.status(500).json({ error: 'Internal server error' });
    }
  };