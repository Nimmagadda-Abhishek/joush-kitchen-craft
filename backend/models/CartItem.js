import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class CartItem extends Model {}

CartItem.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  productId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  quantity: { type: DataTypes.INTEGER.UNSIGNED, defaultValue: 1 }
}, {
  sequelize, modelName: 'CartItem', tableName: 'cart_items', timestamps: true,
  indexes: [{ unique: true, fields: ['userId','productId'] }]
});
