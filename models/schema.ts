
import { Sequelize, Model, DataTypes } from "sequelize";

import db from '../database/mysql'

// We need to declare an interface for our model that is basically what our class would be
export interface UserInstance extends Model {
  id: number;
  name: string;
  email: string;
  product: string;
  product_qty: string;
}

 export const UserModel = db.define<UserInstance>("User-data", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  product:{
    type: DataTypes.STRING,
    allowNull: false,
  },
  product_qty:{
    type: DataTypes.INTEGER,
    allowNull: false,
  }
},
{
    timestamps: true,
    createdAt: false,
    updatedAt: false
}


);


    // export default UserModel;

