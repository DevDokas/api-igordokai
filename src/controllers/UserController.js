import User from '../models/User.js';
import Pics from '../models/Pics.js';

class UserController {
  async create(req, res) {
    try {
      const newUser = await User.create(req.body);
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
      const users = await User.findAll({
        attributes: ['id', 'nome', 'sobrenome', 'email'],
        order: [['id', 'DESC'], [Pics, 'id', 'DESC']],
        include: {
          model: Pics,
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
      const user = await User.findByPk(req.params.id, {
        attributes: ['id', 'nome', 'sobrenome', 'email'],
        order: [['id', 'DESC'], [Pics, 'id', 'DESC']],
        include: {
          model: Pics,
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
      const user = await User.findByPk(req.userId);

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
      const user = await User.findByPk(req.userId);

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

export default new UserController();
