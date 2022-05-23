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

router.post('/signup',(req,res)=>{
    const newUser = new User({
        email: req.body.email,
        username: req.body.username,
        password: bcrypt.hashSync(req.body.password)
    })
    newUser.save()
    .then(data => {
        res.status(201).json(data)
    })
    .catch(err => {
        res.json(400).json({message: "Please try again", errors: err.errors})
    })
})

router.post('/signin', async(req,res)=> {
    const user = await User.findOne({email: req.body.email} || {username: req.body.username})
    if(user && bcrypt.compareSync(req.body.password, user.password)){
        res.json({userID:user._id, accessToken:user.accessToken})
    } else {
        res.json({notFound: true})
    }
})

router.get('/memberzone', authenticateUser)
router.get('/memberzone', (req, res) => {
    res.json({message: "Please signin or signup"})
})



module.exports = router