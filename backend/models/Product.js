import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class Product extends Model {}

Product.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(120), allowNull: false },
  description: { type: DataTypes.TEXT },
  price: { type: DataTypes.DECIMAL(10,2), allowNull: false },
  stock: { type: DataTypes.INTEGER.UNSIGNED, defaultValue: 0 },
  isActive: { type: DataTypes.BOOLEAN, defaultValue: true },
  categoryId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false }
}, { sequelize, modelName: 'Product', tableName: 'products', timestamps: true });
