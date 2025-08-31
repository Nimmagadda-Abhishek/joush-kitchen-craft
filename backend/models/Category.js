import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class Category extends Model {}

Category.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(50), unique: true, allowNull: false },
  description: { type: DataTypes.TEXT }
}, { sequelize, modelName: 'Category', tableName: 'categories', timestamps: true });
