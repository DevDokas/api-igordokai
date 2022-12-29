import Sequelize from 'sequelize';
import databaseConfig from '../config/database.js';
import User from '../models/User.js';
import Services from '../models/Services.js';
import Pics from '../models/Pics.js';

const models = [User, Services, Pics];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));
