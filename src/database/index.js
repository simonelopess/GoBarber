import Sequelize from 'sequelize';
import User from '../app/models/User';

import databaseConfig from '../config/database';

const models = [User];

class Database {
  constructor(){
    this.init();
  }

  init(){
    this.connection = new Sequelize(databaseConfig); //conexão com o banco
    models.map((model) => model.init(this.connection));
  }
}

export default new Database();
