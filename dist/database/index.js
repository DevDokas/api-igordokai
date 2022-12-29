"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _databasejs = require('../config/database.js'); var _databasejs2 = _interopRequireDefault(_databasejs);
var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _Servicesjs = require('../models/Services.js'); var _Servicesjs2 = _interopRequireDefault(_Servicesjs);
var _Picsjs = require('../models/Pics.js'); var _Picsjs2 = _interopRequireDefault(_Picsjs);

const models = [_Userjs2.default, _Servicesjs2.default, _Picsjs2.default];

const connection = new (0, _sequelize2.default)(_databasejs2.default);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
