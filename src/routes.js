import { Router } from 'express';

import ChaoticController from './app/controllers/ChaoticController';

const routes = new Router();

routes.get('/api/v2/order-by-status', ChaoticController.getOrdenedByStatus);

routes.get('/api/v2/order-total/:status', ChaoticController.getTotalByStatus);

routes.get('/api/v2/order-major-values', ChaoticController.orderByMajorValue);

routes.get('/api/v2/group-by-country', ChaoticController.groupByCountry);

export default routes;
