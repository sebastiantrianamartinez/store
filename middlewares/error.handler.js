function logError(error, req, res, next){
    console.error("ERROR FATAL EN EL SERVIDOR");
    next(error);
}

function errorHandler(error, req, res, next){
    res.status(500)
    .json({
        message: error.message,
        stack: error.stack
    });
}

function boomErrorHandler(error, req, res, next){
    if(error.isBoom){
        const { output } = error;
        res.status(output.statusCode)
        .json({
            message: "boom error",
            stack: output.payload
        });
    }
    else{
        next(error);
    }
}

module.exports = { logError, errorHandler, boomErrorHandler};
