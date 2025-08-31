import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class Payment extends Model {}

Payment.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  orderId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  provider: { type: DataTypes.STRING(30), allowNull: false, defaultValue: 'manual' },
  status: { type: DataTypes.ENUM('pending','success','failed'), defaultValue: 'pending' },
  amount: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  payload: { type: DataTypes.JSON }
}, { sequelize, modelName: 'Payment', tableName: 'payments', timestamps: true });
