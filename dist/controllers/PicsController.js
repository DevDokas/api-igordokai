"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);

var _multerConfig = require('../config/multerConfig'); var _multerConfig2 = _interopRequireDefault(_multerConfig);

var _Picsjs = require('../models/Pics.js'); var _Picsjs2 = _interopRequireDefault(_Picsjs);

const upload = _multer2.default.call(void 0, _multerConfig2.default).single('archive');
class PicsController {
  store(req, res) {
    return upload(req, res, async (error) => {
      if (error) {
        return res.status(400).json({
          errors: [error.code],
        });
      }

      try {
        const { originalname, filename } = req.file;
        const { user_id } = req.body;

        const pic = await _Picsjs2.default.create({ originalname, filename, user_id });

        return res.json(pic);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }
    });
  }
}

exports. default = new PicsController();
