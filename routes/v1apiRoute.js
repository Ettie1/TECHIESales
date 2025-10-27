const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const conn = require('../db/dbconn')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frm/index', { title: 'TECHIESales' });
});

router.post('/login', (req, res)=>{
    const Username = req.body.Username
    const Password = req.body.Password

    console.log(Username)
    console.log(Password)


    
    conn.query(`select * from TECHIESales.UserLogin where Username='${Username}' and Password='${Password}'`, (err, results, fields)=>{
        if(err) throw err;
        //stoken = jwt.sig

        if(results.length > 0){
            // res.json({status: 'success', message: 'Login successful.', tkn: stoken});
            //res.json({status: 'success', message: 'Login successful.'/*, tkn: stoken*/});
            res.render('frm/firstInvoice')

        } else {
            res.json({status: 'error', message: 'Invalid credentials.'});
        }
    })


})

router.get('/alogin', (req, res)=>{
    conn.query(`select * from TECHIESales.UserLogin`, (err, results, fields)=>{
        if(err) throw err;
        res.json(results);
    })
})

module.exports = router;