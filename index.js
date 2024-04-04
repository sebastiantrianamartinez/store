const express = require('express');
const app = express();
const ports = [80, 443];
const routerApi = require('./routes');
const cors = require('cors');

const {logError, errorHandler, boomErrorHandler} = require('./middlewares/error.handler');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        "message": "welcome"
    });
})

routerApi(app);

const whiteList = ['http://localhost:8080'];
const options = {
    origin: (origin, callback) => {
        if(whiteList.includes(origin)){
            callback(null, true);
        }
        else{
            callback(new Error('CORS alert not allowed'));
        }
    }
}
app.use(cors());
app.use(logError);
app.use(boomErrorHandler);
app.use(errorHandler);


app.listen(ports[0], () => {
    console.log('Server running on port: ' + ports[0])
});
