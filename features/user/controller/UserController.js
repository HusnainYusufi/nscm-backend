const express = require('express');
const router = express.Router();
const UserService = require('../services/UserService');
const logger = require('../../../modules/logger');


router.post('/add', async (req, res, next) => {
    try {
        const result = await UserService.addUser(req.body);
        return res.status(result.status).json(result);
    } catch (error) {
        logger.error('Error in UserController - Add User:', {
            message: error.message,
            stack: error.stack,
            body: req.body
        });
        next(error);
    }
});

module.exports = router;
