import express, { Express } from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import config from '../config.json';
import { getFilesWithKeyword } from './utils/getFilesWithKeyword';

const app: Express = express();

/************************************************************************************
 *                              Basic Express Middlewares
 ***********************************************************************************/

app.set('json spaces', 4);
app.use(express.json({limit: '50mb'}));
//app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Handle logs in console during development
if (process.env.NODE_ENV === 'development' || config.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.use(cors());
}

// Handle security and origin in production
if (process.env.NODE_ENV === 'production' || config.NODE_ENV === 'production') {
  app.use(helmet());
}

/************************************************************************************
 *                               Register all routes
 ***********************************************************************************/

try {
  const routerFiles = getFilesWithKeyword('router', __dirname + '/app');
  console.log(`📂 Found ${routerFiles.length} router files`);
  
  routerFiles.forEach((file: string) => {
    try {
      const { router } = require(file);
      app.use('/', router);
      console.log(`✅ Loaded router: ${file}`);
    } catch (err) {
      console.error(`❌ Error loading router ${file}:`, err);
    }
  });
} catch (err) {
  console.error('❌ Error scanning for routers:', err);
}
/************************************************************************************
 *                               Express Error Handling
 ***********************************************************************************/

// eslint-disable-next-line @typescript-eslint/no-unused-vars
app.use((err: Error, req: express.Request, res: express.Response, next: express.NextFunction) => {
  return res.status(500).json({
    errorName: err.name,
    message: err.message,
    stack: err.stack || 'no stack defined'
  });
});

export default app;