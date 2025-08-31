import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class Review extends Model {}

Review.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  productId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  rating: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false, validate: { min: 1, max: 5 } },
  comment: { type: DataTypes.TEXT }
}, { sequelize, modelName: 'Review', tableName: 'reviews', timestamps: true });
