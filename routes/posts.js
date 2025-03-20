const express = require('express')
const router = express.Router()
const Post = require('../models/Post')
const verifyToken = require('../verifyToken')

router.get('/', async(req,res) =>{
    try{
        const films = await Post.find()
        res.send(films)
    }catch(err){
        res.status(400).send({message:err})
    }
})

// create a post (w/ verifyToken)
router.post('/', verifyToken, async (req, res) => {
    try {

        // Extract user ID from the auth-token (set by verifyToken middleware)
        const userId = req.user._id;

        const post = new Post({
            title: req.body.title,
            description: req.body.description,
            creator: userId // Attach user's ID
        });

        const savedPost = await post.save();
        res.status(201).send(savedPost);
    } catch (err) {
        res.status(400).send({ message: err.message });
    }
});

// get single post by ID (no auth token)
router.get('/:id', async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).send({ message: "Post not found" });
        res.send(post);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// update a post (only creator can update)
router.put('/:id', verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).send({ message: "Post not found" });

        // check if the logged-in user is the post's creator
        if (post.creator.toString() !== req.user._id) {
            return res.status(403).send({ message: "Unauthorized to update this post" });
        }

        // Update post fields
        post.title = req.body.title || post.title;
        post.content = req.body.content || post.content;

        const updatedPost = await post.save();
        res.send(updatedPost);
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

// Delete a post (Only the creator can delete)
router.delete('/:id', verifyToken, async (req, res) => {
    try {
        const post = await Post.findById(req.params.id);
        if (!post) return res.status(404).send({ message: "Post not found" });

        // Check if the logged-in user is the post's creator
        if (post.creator.toString() !== req.user._id) {
            return res.status(403).send({ message: "Unauthorized to delete this post" });
        }

        await post.deleteOne();
        res.send({ message: "Post deleted successfully" });
    } catch (err) {
        res.status(500).send({ message: err.message });
    }
});

module.exports = router
