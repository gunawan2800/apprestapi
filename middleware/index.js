const { Router } = require('express');
var express=require('express');
var auth=require('./auth');
var router=express.Router();

// daftarkan menu registrati
router.post('/api/v1/register', auth.registrasi);

module.exports=router;
 