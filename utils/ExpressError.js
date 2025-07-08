class ExpressError extends Error{
    constructor(statusCode,message){
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
}
//we will require this code in app.js 
module.exports = ExpressError;