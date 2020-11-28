const express = require('express');
const router = express.Router();
const controller = require('../controllers/museum.js')


router.get('/museum', function (req, res) {
        const errors = validationResult(req);
        if (errors.isEmpty()) {
            controller.getMuseum(req, res);
        } else {
            res.status(404).json({
                errors: errors.array()
            })
        }
    })

module.exports = router;