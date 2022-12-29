import Services from '../models/Services.js';

class ServicesController {
  // Create
  async create(req, res) {
    try {
      const { job_label, job_service, user_id } = req.body;

      const newService = await Services.create({ job_label, job_service, user_id });
      return res.status(200).json(newService);
    } catch (e) {
      return res.status(400).json({
        errors: ['Erro ao criar a requisição de serviço.'],
      });
    }
  }

  // Update
  async update(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }

      const service = await Services.findByPk(id);

      if (!service) {
        return res.status(400).json({
          errors: ['Serviço não existe'],
        });
      }

      const serviceAtualizado = await service.update(req.body);
      return res.json(serviceAtualizado);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Index
  async index(req, res) {
    try {
      const services = await Services.findAll({
        attributes: ['id', 'job_label'],
        order: [['id', 'DESC']]
      });
      return res.json(services);
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  // Show
  async show(req, res) {
    try {
      const currentService = await Services.findByPk(req.params.id);

      const { id, job_label, job_service } = currentService;
      return res.json({ id, job_label, job_service });
    } catch (e) {
      return res.json('Usuário não encontrado');
    }
  }

  // Delete
  async delete(req, res) {
    try {
      const { id } = req.params;

      if (!id) {
        return res.status(400).json({
          errors: ['Faltando ID'],
        });
      }
      // agora recebemos o aluno para verificar se ele existe
      const service = await Services.findByPk(id);

      if (!service) {
        return res.status(400).json({
          errors: ['Serviço não existe'],
        });
      }
      // Aqui precisamos só pagar ele e retornar um true que ele foi apagado.
      await service.destroy();

      return res.json({
        apagado: true,
      });
    } catch (e) {
      return res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

export default new ServicesController();
