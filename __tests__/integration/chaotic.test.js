import request from 'supertest';
import app from '../../src/app';

describe('Chaotic', () => {
  it('Should return data order by status', async () => {
    const response = await request(app)
      .get('/api/v2/order-by-status')
      .expect(200);

    expect(response.body.data).toHaveProperty('Pending');
    expect(response.body.data).toHaveProperty('Paid');
    expect(response.body.data).toHaveProperty('Cancelled');
    expect(response.body.data).toHaveProperty('Refunded');
    expect(response.body.data).toHaveProperty('Expired');
  });

  it('Should return data with amount by pass status', async () => {
    const response = await request(app)
      .get('/api/v2/order-total/Pending')
      .expect(200);

    expect(response.body).toHaveProperty('data');
  });

  it('Should return data order by values', async () => {
    const response = await request(app)
      .get('/api/v2/order-major-values')
      .expect(200);

    expect(response.body).toHaveProperty('data');
  });

  it('Should return order by country', async () => {
    const response = await request(app)
      .get('/api/v2/group-by-country')
      .expect(200);

    expect(response.body).toHaveProperty('data');
  });
});
