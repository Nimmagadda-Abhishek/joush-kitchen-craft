import { sequelize } from '../config/db.js';
import './User.js';
import './Category.js';
import './Product.js';
import './ProductImage.js';
import './CartItem.js';
import './Order.js';
import './OrderItem.js';
import './Address.js';
import './Review.js';
import './Payment.js';

import { User } from './User.js';
import { Category } from './Category.js';
import { Product } from './Product.js';
import { ProductImage } from './ProductImage.js';
import { CartItem } from './CartItem.js';
import { Order } from './Order.js';
import { OrderItem } from './OrderItem.js';
import { Address } from './Address.js';
import { Review } from './Review.js';

Category.hasMany(Product, { foreignKey: 'categoryId' });
Product.belongsTo(Category, { foreignKey: 'categoryId' });

Product.hasMany(ProductImage, { foreignKey: 'productId', as: 'images' });
ProductImage.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(CartItem, { foreignKey: 'userId' });
CartItem.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(CartItem, { foreignKey: 'productId' });
CartItem.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Order, { foreignKey: 'userId' });
Order.belongsTo(User, { foreignKey: 'userId' });

Order.hasMany(OrderItem, { foreignKey: 'orderId', as: 'items' });
OrderItem.belongsTo(Order, { foreignKey: 'orderId' });

Product.hasMany(OrderItem, { foreignKey: 'productId' });
OrderItem.belongsTo(Product, { foreignKey: 'productId' });

User.hasMany(Address, { foreignKey: 'userId', as: 'addresses' });
Address.belongsTo(User, { foreignKey: 'userId' });

User.hasMany(Review, { foreignKey: 'userId' });
Review.belongsTo(User, { foreignKey: 'userId' });

Product.hasMany(Review, { foreignKey: 'productId', as: 'reviews' });
Review.belongsTo(Product, { foreignKey: 'productId' });

export { sequelize };
