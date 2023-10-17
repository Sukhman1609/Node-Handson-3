// const { hollywood, bollywood } = require("../dummy");
const {auth}=require('../middleware/auth')
const { bollywoodcon, hollywoodcon, Technologycon, Foodcon, Fitnesscon } = require("../controller/categoriesController");

const categoryRoute=require("express").Router();

categoryRoute.get("/bollywood",auth,bollywoodcon)

categoryRoute.get("/hollywood",auth,hollywoodcon)
categoryRoute.get("/technology",Technologycon)
categoryRoute.get("/food",Foodcon)
categoryRoute.get("/fitness",Fitnesscon)

module.exports=categoryRoute