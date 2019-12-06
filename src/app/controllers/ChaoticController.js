import path from 'path';
import fs from 'fs';

class ChaoticController {
  async getJsonFileToJson() {
    const filePath = path.join(
      __dirname,
      '..',
      '..',
      '..',
      'tmp',
      'chaotic_data.json'
    );

    const rawData = fs.readFileSync(filePath);
    const result = JSON.parse(rawData);

    return result;
  }

  async getOrdenedByStatus(req, res) {
    const chaoticController = new ChaoticController();

    const toOrder = await chaoticController.getJsonFileToJson();

    const data = chaoticController.orderByStatus(toOrder);

    return res.json({ message: 'Sucess to get data', data });
  }

  orderByStatus(toOrder) {
    const Pending = [];
    const Paid = [];
    const Cancelled = [];
    const Refunded = [];
    const Expired = [];

    toOrder.forEach(item => {
      switch (item.status) {
        case 'Pending':
          Pending.push(item);
          break;
        case 'Paid':
          Paid.push(item);
          break;
        case 'Cancelled':
          Cancelled.push(item);
          break;
        case 'Refunded':
          Refunded.push(item);
          break;
        case 'Expired':
          Expired.push(item);
          break;
        default:
          break;
      }
    });

    const result = { Pending, Paid, Cancelled, Refunded, Expired };

    return result;
  }

  async getTotalByStatus(req, res) {
    const { status } = req.params;

    const chaoticController = new ChaoticController();

    const toCalc = await chaoticController.getJsonFileToJson();

    const totalAmount = chaoticController.calcTotalByStatus(toCalc, status);

    const data = { status, totalAmount };

    return res.json({
      message: `Sucess to get total by status ${status}`,
      data,
    });
  }

  calcTotalByStatus(toCalc, status) {
    const toCalcFiltered = toCalc.filter(item => item.status === status);

    const totalAmountByAllOrders = [];

    toCalcFiltered.forEach(item => {
      const totalAmountByOrder = item.order_items.reduce(
        (a, b) => a + b.amount,
        0
      );
      totalAmountByAllOrders.push(parseInt(totalAmountByOrder, 10));
    });

    const totalByStatus = totalAmountByAllOrders.reduce((a, b) => a + b, 0);

    return totalByStatus;
  }

  async orderByMajorValue(req, res) {
    const chaoticController = new ChaoticController();

    const toCalc = await chaoticController.getJsonFileToJson();

    const Pending = chaoticController.calcTotalByStatus(toCalc, 'Pending');
    const Paid = chaoticController.calcTotalByStatus(toCalc, 'Paid');
    const Cancelled = chaoticController.calcTotalByStatus(toCalc, 'Cancelled');
    const Refunded = chaoticController.calcTotalByStatus(toCalc, 'Refunded');
    const Expired = chaoticController.calcTotalByStatus(toCalc, 'Expired');

    const result = [
      {
        status: 'Pending',
        totalAmout: Pending,
      },
      {
        status: 'Paid',
        totalAmout: Paid,
      },
      {
        status: 'Cancelled',
        totalAmout: Cancelled,
      },
      {
        status: 'Refunded',
        totalAmout: Refunded,
      },
      {
        status: 'Expired',
        totalAmout: Expired,
      },
    ];

    result.sort((x, y) => {
      if (x.totalAmout > y.totalAmout) {
        return -1;
      }
      if (x.totalAmout < y.totalAmout) {
        return 1;
      }
      return 0;
    });

    return res.json({ message: 'Sucess to get data', data: result });
  }

  async groupByCountry(req, res) {}
}

export default new ChaoticController();
