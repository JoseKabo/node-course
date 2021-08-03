const { Router } = require('express');
const { usersGET, usersPOST, usersPUT, usersDELETE, usersPATCH } = require('../controllers/users.controller');
const { check } = require('express-validator');


const router = Router();

router.get('/', usersGET);
router.post('/', [
    check('email', 'That\'s not email').isEmail()
], usersPOST);
router.put('/', usersPUT);
router.delete('/', usersDELETE);
router.patch('/', usersPATCH);

module.exports = router;