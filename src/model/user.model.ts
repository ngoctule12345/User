import sequelize from "../database/sequelize.config";
import {
  Sequelize,
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
} from "sequelize";

class User extends Model<InferAttributes<User>, InferCreationAttributes<User>> {
    declare iD: string;
    declare email: string;
    declare passWord: string;
  }
  User.init(
    {
      iD: {
        type: DataTypes.STRING,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      passWord: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
        freezeTableName: true,
        sequelize,
    }
);

export default User;
