import { Sequelize } from 'sequelize';

const sequelize = new Sequelize(
    process.env.RDS_DB_NAME,
    process.env.RDS_USERNAME,
    process.env.RDS_PASSWORD,
    {
        host: process.env.RDS_HOSTNAME,
        port: process.env.RDS_PORT,
        operatorAliases: false,
        dialect: 'mysql',
        dialectOptions: { ssl: 'Amazon RDS' },
        storage: ':memory:',
        protocol: 'TCP',
        timezone: '+01:00',
        pool: { maxConnections: 5, maxIdleTime: 30 },
        language: 'en',
    });

export { sequelize };