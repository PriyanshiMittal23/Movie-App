import express from 'express';
import { addToPlaylist, allPlaylist, newPlaylist } from '../controllers/playlist.controller.js';
import { isLoggedIn } from '../middleware.js';
const router = express.Router();

router.get('/all',isLoggedIn,allPlaylist);

router.post('/:id/add',isLoggedIn,addToPlaylist);

router.post('/new',isLoggedIn,newPlaylist);

export default router;