import './config/loadEnv.js';
import { app } from './app.js';
import { sequelize } from './models/index.js';
import { logger } from './utils/logger.js';

const PORT = process.env.PORT || 4000;

(async () => {
  try {
    await sequelize.authenticate();
    logger.info('✅ Database connected');

    if (process.env.DB_AUTO_SYNC === 'true') {
      await sequelize.sync({ alter: true });
      logger.info('🛠️  Models synchronized');
    }

    app.listen(PORT, () => logger.info(`🚀 Server listening on ${PORT}`));
  } catch (err) {
    logger.error('Failed to start server', err);
    process.exit(1);
  }
})();
