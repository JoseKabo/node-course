const { Router } = require('express');
const { usersGET, usersPOST, usersPUT, usersDELETE, usersPATCH } = require('../controllers/users.controller');

const router = Router();

router.get('/', usersGET);
router.post('/', usersPOST);
router.put('/', usersPUT);
router.delete('/', usersDELETE);
router.patch('/', usersPATCH);

module.exports = router;