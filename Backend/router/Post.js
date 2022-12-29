const router =require("express").Router();
const { Promise } = require("mongoose");
const Post = require("../Modals/Post.js");
const User = require("../Modals/User.js");
const { verifyToken } = require("./verifytoken");


//create Post

router.post("/user/post", verifyToken , async(req, res)=>{
    try {
        let {title , image , video} =req.body;
        let newpost = new Post({
            title , image , video, user:req.user.id
        })
        const post =await newpost.save()
        res.status(200).json(post)
        
    } catch (error) {
        return res.status(500).json("Intrnal server error")
        
    }
})

router.get("/get/post/:id",async(req,res)=>{
    try {
        const mypost = await Post.find({user:req.params.id});
        if(!mypost){
            return res.status(400).json("You Dont have any post")
        }

        res.status(200).json(mypost)
    } catch (error) {
        res.status(500).json("Internal error")
        
    }
})

//Update user post

router.put("/update/post/:id", verifyToken,async(req,res)=>{
    try {
        let post = await Post.findById(req.params.id);
        if(!post){
            return res.status(400).json("Post doesnt found")
        };

        post = await Post.findByIdAndUpdate(req.params.id, {
            $set:req.body
        })
        let updatepost = await post.save();
        res.status(200).json(updatepost);
        
    } catch (error) {
        return res.status(500).json("Internal error")
        
    }

})


//Like 
router.put("/:id/like", verifyToken,async(req,res)=>{
    try {
    const post = await Post.findById(req.params.id);
    if(!post.like.includes(req.user.id)){
        if(post.dislike.includes(req.user.id))
        {
            await post.updateOne({$pull:{dislike:req.user.id}})
        }
            await post.updateOne({$push:{like:req.user.id}})
            return res.status(200).json("Post has been liked")
        
    
    }else{
        await post.updateOne({$pull:{like:req.user.id}})
        return res.status(200).json("Post has been unliked")
    }
        
} catch (error) {
    return res.status(500).json("internal server error")
        
}
})


//Dislike
router.put("/:id/dislike", verifyToken,async(req,res)=>{
    try {
    const post = await Post.findById(req.params.id);
    if(!post.dislike.includes(req.user.id)){
        if(post.like.includes(req.user.id))
        {
            await post.updateOne({$pull:{like:req.user.id}})
        }
            await post.updateOne({$push:{dislike:req.user.id}})
            return res.status(200).json("Post has been disliked")
        
        
    }else{
        await post.updateOne({$pull:{dislike:req.user.id}})
        return res.status(200).json("Post has been unliked")
    }
         
} catch (error) {
    return res.status(500).json("internal server error")
        
}
})

//comment
router.put("/comment/post", verifyToken,async(req,res)=>{
    // try {
        const {comment , postid,profile} = req.body;
        const comments={
            user:req.user.id,
            username:req.user.username,
            comment,
            profile
        }
        const post = await Post.findById(postid);
        post.comments.push(comments);
        await post.save();
        res.status(200).json(post);
        
    // } catch (error) {
    //     return res.status(500).json("internal server error")
        
    // }
}
)


//delete the post

router.delete("/delete/post/:id", verifyToken,async(req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.user === req.user.id){
            const deletepost = await Post.findByIdAndDelete(req.params.id);
            return res.status(200).json("Sucessfully deleted")
        }else{
            return res.status(400).json("You are not allowed to delete")
        }
        
    } catch (error) {
        return res.status(500).json("internal server error")
        
    }
})


//get a following user

router.get("/following/:id", async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const followinguser = await Promise.all(
            user.Following.map((item)=>{
                return User.findById(item)
            })
        )
        let followingList=[];
        followinguser.map((person)=>{
            const {email , password , phonenumber , Following , Followers, ...others}= person._doc;
            followingList.push({others});
        
        })
        res.status(200).json(followingList)
        
    } catch (error) {
        
    }
})




//get a follower user

router.get("/followers/:id", async(req,res)=>{
    try {
        const user = await User.findById(req.params.id);
        const followersuser = await Promise.all(
            user.Followers.map((item)=>{
                return User.findById(item)
            })
        )
        let followersList=[];
        followersuser.map((person)=>{
            const {email , password , phonenumber , Following , Followers, ...others}= person._doc;
            followersList.push({others});
        
        })
        res.status(200).json(followersList)
        
    } catch (error) {
        
    }
})







module.exports =router;