const boom = require('@hapi/boom');

function validatorHandler(schema, propriety){
    return (req, res, next) => {
        const data = req[propriety];
        const { error } = schema.validate(data);
        if(error){
            next(boom.badRequest(error));
        }
        else{
            next();
        }
    }
}

module.exports = {validatorHandler};
