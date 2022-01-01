import postMessage from "../models/postMessage.js";
import mongoose from 'mongoose';

export const getPosts = async (req, res) => {//search function
    try {
        const postMessages = await postMessage.find(); //find the post searched in the database

        res.status(200).json(postMessages);
    } catch (err) {
        res.status(404).json({message: err.message})
    }
}

export const createPosts = async (req, res) => {
    const post = req.body;
    const newPost = new postMessage(post);

    try {
        await newPost.save();

        res.status(201).json(newPost);
    } catch (err) {
        res.status(409).json({message: err.message})
    }
}


export const updatePost = async (req, res) => {
    const { id } = req.params;
    const { title, message, creator, selectedFile, tags } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

    await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

    res.json(updatedPost);
}

export const deletePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await postMessage.findByIdAndRemove(id);

    res.json({ message: "Post deleted successfully." });
}

export const likePost = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);
    
    const post = await postMessage.findById(id);

    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true });
    
    res.json(updatedPost);
}