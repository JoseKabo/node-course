const { Router } = require('express');
const { usersGET, usersPOST, usersPUT, usersDELETE, usersPATCH } = require('../controllers/users.controller');
const { check } = require('express-validator');
const { validationFields } = require('../middlewares/validationfields.middleware');
const { isValidRole } = require('../helpers/validators.helpers');

const router = Router();

router.get('/', usersGET);
router.post('/', [
    check('email', 'That\'s not email').isEmail(),
    check('name', 'Its obligatory field').not().isEmpty(),
    check('password', 'Its mandatory field and follow the next rules: \n * 8 letters, uppercase with lowercase and number with symbol').isLength({ min: 8 }),
    // check('role', 'Invalid role').isIn(['ADMIN', 'EMPLOYEE']),
    // check('role').custom(isValidRole),
    validationFields
], usersPOST);
router.put('/', usersPUT);
router.delete('/', usersDELETE);
router.patch('/', usersPATCH);

module.exports = router;