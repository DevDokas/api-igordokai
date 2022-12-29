import multer from 'multer';

import multerConfig from '../config/multerConfig';

import Pics from '../models/Pics.js';

const upload = multer(multerConfig).single('archive');
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

        const pic = await Pics.create({ originalname, filename, user_id });

        return res.json(pic);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe']
        });
      }
    });
  }
}

export default new PicsController();
