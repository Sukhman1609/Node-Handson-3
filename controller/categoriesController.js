
const { bollywood, hollywood, Technology, Food, Fitness } = require("../dummy");

const bollywoodcon=(req,res)=>{
return res.send(bollywood)
}
const Technologycon=(req,res)=>{
    return res.send(Technology)
}
const hollywoodcon=(req,res)=>{
    return res.send(hollywood)
}
const Foodcon=(req,res)=>{
    return res.send(Food)
}
const Fitnesscon=(req,res)=>{
    return res.send(Fitness)
}

module.exports={bollywoodcon,hollywoodcon,Technologycon,Fitnesscon,Foodcon}