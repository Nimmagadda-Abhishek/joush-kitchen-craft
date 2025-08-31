import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class ProductImage extends Model {}

ProductImage.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  productId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  key: { type: DataTypes.STRING(255), allowNull: false },
  url: { type: DataTypes.STRING(500), allowNull: false }
}, { sequelize, modelName: 'ProductImage', tableName: 'product_images', timestamps: true });
