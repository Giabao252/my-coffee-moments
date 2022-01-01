import express from "express";
import { getPosts, createPosts, deletePost, updatePost, likePost } from "../controllers/functions.js";
 
const router = express.Router();

//websites' abilities
router.get('/', getPosts);
router.post('/', createPosts);
router.patch('/:id', updatePost);
router.patch('/:id/likePost', likePost);
router.delete('/:id', deletePost);

export default router;