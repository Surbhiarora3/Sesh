const express = require('express');
const router = express.Router();
const {User,PlayList} = require('../models');



router.get("/",(req,res)=>{ //login page
    if(req.session.user){
        return res.redirect("/mySesh")
    }
    res.render("login")
})
router.get("/signup",(req,res)=>{ //signup page
    if(req.session.user){
        return res.redirect("/mySesh")
    }
    res.render("signup")
})
router.get("/mySesh",(req,res)=>{
    if(!req.session.user){
        return res.redirect("/")
    }
    User.findByPk(req.session.user.id,{
        include:[PlayList]
    }).then(userData=>{
        console.log(userData);
        const hbsData = userData.get({plain:true})
        console.log("=======")
        console.log(hbsData);
        hbsData.loggedIn = req.session.user?true:false
        res.render("mySesh",hbsData)
    })
})
module.exports = router