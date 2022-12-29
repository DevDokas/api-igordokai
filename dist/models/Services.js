"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Services extends _sequelize.Model {
  static init(sequelize) {
    super.init({
      job_label: {
        type: _sequelize2.default.STRING,
        defaultValue: '',
        unique: {
          msg: 'Pedido já existente.',
        },
        validate: {
          len: {
            args: [2, 50],
            msg: 'Digite o nome do projeto, loja ou empresa.',
          },
        },
      },
      job_service: {
        type: _sequelize2.default.TEXT,
        defaultValue: '',
        validate: {
          notEmpty: {
            msg: 'Descreva brevemente o serviço almejado.',
          },
        },
      },
    }, {
      sequelize,
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.User, { foreignKey: 'user_id' });
  }
} exports.default = Services;
