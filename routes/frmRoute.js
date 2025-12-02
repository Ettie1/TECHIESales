const express = require('express');
const router = express.Router();
const {ValUser} = require('./v1apiRoute');

router.get('/', (req, res)=>{
    res.render('frm/index');
})

router.get('/login', (req, res)=>{
    res.render('frm/login');
})

router.get('/addinvoice', (req, res)=>{
    res.render('frm/addInvoice', { valUser: ValUser });
})


module.exports = router;