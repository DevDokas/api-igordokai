"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

var _PicsController = require('../controllers/PicsController'); var _PicsController2 = _interopRequireDefault(_PicsController);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _PicsController2.default.store);

exports. default = router;
