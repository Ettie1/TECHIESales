const express = require('express');
const router = express.Router();

router.get('/', (req, res)=>{
    res.render('frm/index');
})

router.get('/login', (req, res)=>{
    res.render('frm/login');
})

module.exports = router;