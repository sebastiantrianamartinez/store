const express = require('express');
const app = express();
const ports = [80, 443];
const routerApi = require('./routes');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        "message": "welcome"
    });
})


app.listen(ports[0], () => {
    console.log('Server running on port: ' + ports[0])
});

routerApi(app);
