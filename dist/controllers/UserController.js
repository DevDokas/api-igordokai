"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Userjs = require('../models/User.js'); var _Userjs2 = _interopRequireDefault(_Userjs);
var _Picsjs = require('../models/Pics.js'); var _Picsjs2 = _interopRequireDefault(_Picsjs);

class UserController {
  async create(req, res) {
    try {
      const newUser = await _Userjs2.default.create(req.body);
      return res.status(200).json(newUser);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const users = await _Userjs2.default.findAll({
        attributes: ['id', 'nome', 'email'],
        order: [['id', 'DESC'], [_Picsjs2.default, 'id', 'DESC']],
        include: {
          model: _Picsjs2.default,
          attributes: ['id', 'filename', 'url']
        }
      });
      return res.json(users);
    } catch (e) {
      return res.json(null);
    }
  }

  // Show
  async show(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'email'],
        order: [['id', 'DESC'], [_Picsjs2.default, 'id', 'DESC']],
        include: {
          model: _Picsjs2.default,
          attributes: ['id', 'filename', 'url']
        }
      });

      return res.json(user);
    } catch (e) {
      return res.json('Usuário não encontrado');
    }
  }

  // Update
  async update(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      const novosDados = await user.update(req.body);
      const {
        id, nome, email, password
      } = novosDados;
      return res.json({
        id, nome, email, password
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const user = await _Userjs2.default.findByPk(req.userId);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não existe'],
        });
      }

      await user.destroy();
      return res.json(null);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
