"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _TokenControllerjs = require('../controllers/TokenController.js'); var _TokenControllerjs2 = _interopRequireDefault(_TokenControllerjs);
var _loginRequiredjs = require('../middlewares/loginRequired.js'); var _loginRequiredjs2 = _interopRequireDefault(_loginRequiredjs);

const router = new (0, _express.Router)();

router.post('/user', _TokenControllerjs2.default.create);

exports. default = router;
