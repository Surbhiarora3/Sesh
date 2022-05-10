const express = require('express');
const router = express.Router();

const userRoutes = require("./userRoutes");
router.use("/api/users",userRoutes)

// const blogRoutes = require("./blogRoutes");
// router.use("/api/blogs",blogRoutes)

const frontEnd = require("./frontEndRoutes");
router.use("/",frontEnd)

router.get("/showsessions",(req,res)=>{
    res.json(req.session)
})
module.exports = router;