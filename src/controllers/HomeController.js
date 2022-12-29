import User from '../models/User';

class HomeController {
  async index(req, res) {
    res.json('OK');
  }
}

export default new HomeController();
