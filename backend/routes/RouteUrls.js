import express from "express"
import bcrypt from "bcrypt-nodejs"

import User from "../models/SignUp" 

const router = express.Router()

const authenticateUser = async (req, res, next) => {
    const user = await User.findOne({accessToken: req.header('Authorization')})
    if (user) {
        req.user = user
        next()
    } else {
        res.status(401).json({loggedOut: true})
    }
}

const salt = bcrypt.genSaltSync()
router.post('/signup',(req,res)=>{
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password, salt)
    })
    newUser.save()
    .then(() => {
        res.status(201).json({
            username: newUser.username,
            accessToken: newUser.accessToken,
            userId: newUser._id
        })
    })
    .catch(err => {
        res.json(400).json({
            message: "Please try again", 
            errors: err.errors,
            success: false
        })
    })
})

router.post('/signin', async(req,res)=> {
    const {email, username, password} = req.body
    const conditions = !!username ? {username: username} : {email: email};
    const user = await User.findOne(conditions)
    if(user && bcrypt.compareSync(password, user.password)){
        res.json({
            success: true,
            userID: user._id, 
            username: user.username,
            accessToken: user.accessToken
        })
    } else {
        res.json({notFound: true})
    }
})

router.get('/memberzone', authenticateUser)
router.get('/memberzone', (req, res) => {
    res.json({message: "Please signin or signup"})
})



module.exports = router