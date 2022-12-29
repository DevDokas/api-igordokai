"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// Dotenv
var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);

_dotenv2.default.config();

// Database tables index
require('./database/index.js');

// Express
var _express = require('express'); var _express2 = _interopRequireDefault(_express);

// Cors & Helmet
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

// Path resolve
var _path = require('path');

// Import das rotas
var _homeRoutesjs = require('./routes/homeRoutes.js'); var _homeRoutesjs2 = _interopRequireDefault(_homeRoutesjs);
var _userRoutesjs = require('./routes/userRoutes.js'); var _userRoutesjs2 = _interopRequireDefault(_userRoutesjs);
var _tokenRoutesjs = require('./routes/tokenRoutes.js'); var _tokenRoutesjs2 = _interopRequireDefault(_tokenRoutesjs);
var _servicesRoutesjs = require('./routes/servicesRoutes.js'); var _servicesRoutesjs2 = _interopRequireDefault(_servicesRoutesjs);
var _picsRoutesjs = require('./routes/picsRoutes.js'); var _picsRoutesjs2 = _interopRequireDefault(_picsRoutesjs);

// Whitelist
const whiteList = [
  'https://igordokai.com.br',
  'https://www.igordokai.com.br',
  'https://api.igordokai.com.br',
  'https://igordokai.com',
  'https://www.igordokai.com',
  'https://api.igordokai.com',
];

const corsOptions = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
};

class App {
  constructor() {
    this.app = _express2.default.call(void 0, );
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(_express2.default.urlencoded({ extended: true }));
    this.app.use(_cors2.default.call(void 0, corsOptions));
    this.app.use(_express2.default.json());
    this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', _homeRoutesjs2.default);
    this.app.use('/users/', _userRoutesjs2.default);
    this.app.use('/tokens/', _tokenRoutesjs2.default);
    this.app.use('/services/', _servicesRoutesjs2.default);
    this.app.use('/pics/', _picsRoutesjs2.default);
  }
}

exports. default = new App().app;
