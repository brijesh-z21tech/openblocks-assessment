import { Sequelize } from 'sequelize-typescript';
import { SEQUELIZE, DEVELOPMENT, TEST, PRODUCTION } from '../constants';
import { databaseConfig } from './database.config';
import { Wallet } from 'src/wallet/entities/wallet.entity';

export const databaseProviders = [
  {
    provide: SEQUELIZE,
    useFactory: async () => {
      let config;
      switch (process.env.NODE_ENV) {
        case DEVELOPMENT:
          config = databaseConfig.development;
          break;
        case TEST:
          config = databaseConfig.test;
          break;
        case PRODUCTION:
          config = databaseConfig.production;
          break;
        default:
          config = databaseConfig.development;
      }
      const sequelize = new Sequelize(
        databaseConfig.development.database,
        databaseConfig.development.username,
        databaseConfig.development.password,
        {
          host: databaseConfig.development.host,
          dialect: 'postgres',
          define: { timestamps: false },
          schema: 'public',
        },
      );
      sequelize.addModels([Wallet]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
