module.exports = (fn)=>{
    return (req,res,next)=>{
        fn(req,res,next).catch(next);
    }
}
//we will require this code in app.js
