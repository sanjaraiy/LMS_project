class AppError extends Error{
    constructor(message,statusCode){
        super(message);


        this.statusCode=statusCodel;

        Error.captureStackTrace(this,this,contructor);
    }
}

export default AppError;