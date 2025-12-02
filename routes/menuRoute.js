const express = require('express')
const router = express.Router()

router.post('/', (req, res)=>{
    const btn = req.query.body;

    if(btn == 'addInvoice'){
        res.render('frm/addInvoice', { title: 'Add Invoice' });
    } else if (btn == 'viewInvoices'){
        res.render('frm/viewInvoices', { title: 'View Invoices' });
    } else {
        //res.render('frm/mainMenu', { title: 'Main Menu' });
        res.end('Page not found')
    }
})



module.exports = router;