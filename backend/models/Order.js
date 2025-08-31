import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class Order extends Model {}

Order.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  status: { type: DataTypes.ENUM('pending','paid','shipped','delivered','cancelled'), defaultValue: 'pending' },
  totalAmount: { type: DataTypes.DECIMAL(10,2), defaultValue: 0 },
  paymentMethod: { type: DataTypes.STRING(30), defaultValue: 'COD' },
  addressSnapshot: { type: DataTypes.JSON }
}, { sequelize, modelName: 'Order', tableName: 'orders', timestamps: true });
