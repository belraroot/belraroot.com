const db = require('../baseModel')
const router = require('express').Router();

db.query('SELECT * FROM `users`', function (err, result) {
    router.get('/users', (req, res) => [
        res.send(result)
    ])
})

module.exports = router;