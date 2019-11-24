import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    return res.json({
        state : "User API",
        health : "100"
    })
});

export default router;
