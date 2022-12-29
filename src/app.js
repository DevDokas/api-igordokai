// Dotenv
import dotenv from 'dotenv';

dotenv.config();

// Database tables index
import './database/index.js';

// Express
import express from 'express';

// Cors & Helmet
import cors from 'cors';

// Path resolve
import { resolve } from 'path';

// Import das rotas
import homeRoutes from './routes/homeRoutes.js';
import userRoutes from './routes/userRoutes.js';
import tokenRoutes from './routes/tokenRoutes.js';
import servicesRoutes from './routes/servicesRoutes.js';
import picsRoutes from './routes/picsRoutes.js';

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
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, '..', 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/services/', servicesRoutes);
    this.app.use('/pics/', picsRoutes);
  }
}

export default new App().app;
