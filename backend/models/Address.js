import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';

export class Address extends Model {}

Address.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  userId: { type: DataTypes.INTEGER.UNSIGNED, allowNull: false },
  line1: { type: DataTypes.STRING(120), allowNull: false },
  line2: { type: DataTypes.STRING(120) },
  city: { type: DataTypes.STRING(60), allowNull: false },
  state: { type: DataTypes.STRING(60), allowNull: false },
  postalCode: { type: DataTypes.STRING(20), allowNull: false },
  country: { type: DataTypes.STRING(60), defaultValue: 'India' }
}, { sequelize, modelName: 'Address', tableName: 'addresses', timestamps: true });
