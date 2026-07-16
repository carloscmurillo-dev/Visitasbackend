import app from './server';
const sslCertificate = require('get-ssl-certificate')
import config from '../config.json';
require('dotenv').config();

// Start the application by listening to specific port
const port = Number(process.env.PORT || 8096);

// Manejar errores no capturados
process.on('uncaughtException', (err: Error) => {
  console.error('❌ Uncaught Exception:', err);
  process.exit(1);
});

process.on('unhandledRejection', (reason: any, promise: Promise<any>) => {
  console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});

const server = app.listen(port, () => {
  console.info('✅ Express application started on port: ' + port);
  console.info('📊 Environment: ' + (process.env.NODE_ENV || 'development'));
});

// Manejar cierre graceful
process.on('SIGTERM', () => {
  console.info('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.info('HTTP server closed');
    process.exit(0);
  });
});

