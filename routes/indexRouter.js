'use strict';

const express = require('express');
const router = express.Router(); 
const controller = require('../controllers/indexController');

// Hàm tạo databse, nếu đã tạo thì comment để tránh bị tạo lại 
// router.get('/createTables', (req, res) => {
//     let modles = require('./models');
//     modles.sequelize.sync().then(() => {
//         res.send('Table created');
//     })
// })

router.get( '/',      controller.showHomepage );
router.get( '/:page', controller.showPage );


module.exports = router;