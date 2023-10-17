const auth=(req,res,next)=>{
    console.log('auth middleware');
   next();  
}
const auth2=(req,res,next)=>{
    console.log('auth middleware2 is running this is second one')
   next();
   
   
}
module.exports={auth,auth2};