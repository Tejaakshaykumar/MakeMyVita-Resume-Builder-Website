const express=require('express');
const router=express.Router();
const {home ,register }=require('../controllers/auth-controller');

router.route('/').get(home);
router.route('/register').post(register);
router.route('/login').post();

module.exports=router;