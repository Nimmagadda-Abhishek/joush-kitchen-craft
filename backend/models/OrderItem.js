import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class OrderItem extends Model {}

OrderItem.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  orderId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  productId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  quantity: { type: DataTypes.INTEGER.UNSIGNED, defaultValue: 1 }
}, { sequelize, modelName: 'OrderItem', tableName: 'order_items', timestamps: true });
