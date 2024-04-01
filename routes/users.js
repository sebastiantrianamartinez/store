const express = require('express');
const router = express.Router();

// ¡ products

router.get('/:id', (req, res) => {
    res.json({"user": "100"});
});

router.get('/', (req, res) => {

});

router.post('/login', (req, res) => {
    const body = req.body;

    if(body.username == "sebas" && body.password == "123"){
        res.status(201)
        .json({
            "message": "success login"
        });
    }
    else{
        res.status(401)
        .json({
            "message": "Incorrect password"
        });
    }

});

module.exports = router;
