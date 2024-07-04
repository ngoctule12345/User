import 'dotenv/config'
import sequelize from "./database/sequelize.config";
import { sequelizeInit } from "./database/sequelize.init";


sequelizeInit();