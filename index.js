const express=require("express");
const categoryRoute = require("./Routing/categories");
const {auth2} = require("./middleware/auth");
const Port=4000;
const app=express()
const cors=require("cors")
app.use(cors({
        origin:"*"
}))
const middleware1=(req,res,next)=>{
        console.log('middleware1 will run first then only api will works')
        next();
}
app.use(middleware1)
app.use(auth2)

app.use("/api",categoryRoute);
app.get('/',(req,res)=>{
        console.log('Homme page')
     res.send('API is running fine')   
})


app.listen(7000,()=>{
        try{
                console.log(`Server is running fine-${Port}`)
        }
        catch(err){
                console.log(`Error occured in the code-${err}`)
        }
})
