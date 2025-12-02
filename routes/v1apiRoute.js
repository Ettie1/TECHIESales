const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken')

const conn = require('../db/dbconn')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('frm/index', { title: 'TECHIESales' });
});

const ValUser = (user)=>{
    return user;
}
router.post('/login', (req, res)=>{
    const Username = req.body.Username
    const Password = req.body.Password
        
    conn.query(`select * from TECHIESales.UserLogin where Username='${Username}' and Password='${Password}'`, (err, results, fields)=>{
        if(err) throw err;
        //stoken = jwt.sign({Username}, 'secretKey', { expiresIn: '1h' });
        //jwt.decode(stoken)

        if(results.length > 0){

            let valUser = results[0].Username;
            ValUser(valUser);
            res.render('frm/mainMenu', {ValUser: valUser} );    

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

module.exports =  [router, ValUser];