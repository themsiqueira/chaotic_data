import { Router } from 'express';

import ChaoticController from './app/controllers/ChaoticController';

const routes = new Router();

// #region
/**
 * @api {get} /api/v2/order-by-status Order by status
 * @apiGroup Chaotic
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Sucess to get data",
 *      "data": {
 *                "Pending": [
 *			                        {
 *                                "_id": "5ddfdde9fc13ae36960003ec",
 *                                "order_id": "88735413-c2a8-4dc7-ac22-bebe16359418",
 *                                "status": "Pending",
 *                                "order_items": [
 *                                                  {
 *                                                    "amount": 53557,
 *                                                    "name": "Mushroom - Porcini Frozen",
 *                                                    "picture": "http://dummyimage.com/187x240.jpg/ff4444/ffffff",
 *                                                    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
 *                                                  },
 *                                                  {
 *                                                    "amount": 39020,
 *                                                    "name": "Kaffir Lime Leaves",
 *                                                    "picture": "http://dummyimage.com/136x155.bmp/cc0000/ffffff",
 *                                                    "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
 *                                                  }
 *                                              ],
 *                                "shipping": {
 *                                  "address": "93984 Spohn Center",
 *                                  "city": "Unaí",
 *                                  "reference": "Major Banks",
 *                                  "country": {
 *                                    "code": "BR",
 *                                    "name": "Brazil"
 *                                  }
 *                                },
 *                              "person": {
 *                              "full_name": "Fitzgerald Frowd",
 *                              "gender": "Male",
 *                              "phone": "339-309-5602"
 *                            }
 *                         }
 *                    ],
 *
 *            }
 *       }
 */
// #endregion

routes.get('/api/v2/order-by-status', ChaoticController.getOrdenedByStatus);

// #region
/**
 * @api {get} /api/v2/order-total/:status Order by total by status
 * @apiGroup Chaotic
 * @apiParam {String} status
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *       "message": "Sucess to get total by status Pending",
 *       "data": {
 *           "status": "Pending",
 *           "totalAmount": 62178359
 *        }
 *    }
 */
// #endregion

routes.get('/api/v2/order-total/:status', ChaoticController.getTotalByStatus);

// #region
/**
 * @api {get} /api/v2/order-major-values Order by major values
 * @apiGroup Chaotic
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *     {
 *         "message": "Sucess to get data",
 *         "data": [
 *             {
 *                 "status": "Pending",
 *                 "totalAmout": 62178359
 *             },
 *             {
 *                 "status": "Cancelled",
 *                 "totalAmout": 59239780
 *             },
 *             {
 *                 "status": "Refunded",
 *                 "totalAmout": 58222622
 *             },
 *             {
 *                 "status": "Paid",
 *                 "totalAmout": 57177356
 *             },
 *             {
 *                 "status": "Expired",
 *                 "totalAmout": 56354867
 *             }
 *         ]
 *     }
 */
// #endregion

routes.get('/api/v2/order-major-values', ChaoticController.orderByMajorValue);

// #region
/**
 * @api {get} /api/v2/group-by-country Order by country
 * @apiGroup Chaotic
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 *    {
 *      "message": "Sucess to get data by country",
 *      "data": {
 *         "Canada": [
 *                   {
 *                     "_id": "5ddfdde9fc13ae36960003ec",
 *                     "order_id": "88735413-c2a8-4dc7-ac22-bebe16359418",
 *                     "status": "Pending",
 *                     "order_items": [
 *                                      {
 *                                        "amount": 53557,
 *                                        "name": "Mushroom - Porcini Frozen",
 *                                        "picture": "http://dummyimage.com/187x240.jpg/ff4444/ffffff",
 *                                        "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus."
 *                                       },
 *                                       {
 *                                         "amount": 39020,
 *                                         "name": "Kaffir Lime Leaves",
 *                                         "picture": "http://dummyimage.com/136x155.bmp/cc0000/ffffff",
 *                                         "description": "In hac habitasse platea dictumst. Etiam faucibus cursus urna. Ut tellus.\n\nNulla ut erat id mauris vulputate elementum. Nullam varius. Nulla facilisi.\n\nCras non velit nec nisi vulputate nonummy. Maecenas tincidunt lacus at velit. Vivamus vel nulla eget eros elementum pellentesque."
 *                                       }
 *                                     ],
 *                      "shipping": {
 *                                    "address": "93984 Spohn Center",
 *                                    "city": "Unaí",
 *                                    "reference": "Major Banks",
 *                                    "country": {
 *                                      "code": "BR",
 *                                      "name": "Brazil"
 *                                    }
 *                                 },
 *                      "person": {
 *                                  "full_name": "Fitzgerald Frowd",
 *                                  "gender": "Male",
 *                                  "phone": "339-309-5602"
 *                      }
 *                   }
 *       ]
 */
// #endregion

routes.get('/api/v2/group-by-country', ChaoticController.groupByCountry);

export default routes;
