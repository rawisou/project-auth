import express from "express"
import bcrypt from "bcrypt-nodejs"

import User from "../models/SignUp" 

const router = express.Router()

const authenticateUser = async (req, re, next) => {
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
        res.json(data)
    })
    .catch(err => {
        res.json(400).json({message: "Please try again", errors: err.errors})
    })
})

router.post('/memberzone', async (req,res) => {

})
module.exports = router