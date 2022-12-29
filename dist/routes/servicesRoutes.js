"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _ServicesController = require('../controllers/ServicesController'); var _ServicesController2 = _interopRequireDefault(_ServicesController);
var _loginRequired = require('../middlewares/loginRequired'); var _loginRequired2 = _interopRequireDefault(_loginRequired);

const router = new (0, _express.Router)();

router.post('/', _loginRequired2.default, _ServicesController2.default.create);
router.get('/', _loginRequired2.default, _ServicesController2.default.index);
router.put('/:id', _loginRequired2.default, _ServicesController2.default.update);
router.get('/:id', _loginRequired2.default, _ServicesController2.default.show);
router.delete('/:id', _loginRequired2.default, _ServicesController2.default.delete);

exports. default = router;
