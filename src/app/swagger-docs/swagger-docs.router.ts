import { Router } from 'express';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from '../../swagger';

export const router: Router = Router();

router.get('/api-docs.json', (req, res) => {
  res.json(swaggerSpec);
});

router.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, {
  customSiteTitle: 'Visitasbackend API Docs',
}));
