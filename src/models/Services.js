import Sequelize, { Model } from 'sequelize';

export default class Services extends Model {
  static init(sequelize) {
    super.init({
      job_label: {
        type: Sequelize.STRING,
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
        type: Sequelize.TEXT,
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
}
