import { DataTypes, Model } from 'sequelize';
import { sequelize } from '../config/db.js';
import bcrypt from 'bcryptjs';

export class User extends Model {
  async comparePassword(pw) { return bcrypt.compare(pw, this.passwordHash); }
}

User.init({
  id: { type: DataTypes.INTEGER.UNSIGNED, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING(50), allowNull: false },
  email: { type: DataTypes.STRING(120), unique: true, allowNull: false },
  passwordHash: { type: DataTypes.STRING(120), allowNull: false },
  role: { type: DataTypes.ENUM('customer','admin'), defaultValue: 'customer' }
}, { sequelize, modelName: 'User', tableName: 'users', timestamps: true });
