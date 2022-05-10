const express = require('express');
const router = express.Router();
const {User,PlayList} = require('../models');



router.get("/",(req,res)=>{ //login page
    if(req.session.user){
        return res.redirect("/playlist")
    }
    res.render("login")
})
router.get("/signup",(req,res)=>{
    if(req.session.user){
        return res.redirect("/playlist")
    }
    res.render("signup")
})
module.exports = router