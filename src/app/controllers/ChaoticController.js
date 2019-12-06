import path from 'path';
import fs from 'fs';

class ChaoticController {
  async getJsonFileToJson(){
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
    const toOrder = this.getJsonFileToJson();

    const data = this.orderByStatus(toOrder);

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

    const result = {Pending, Paid, Cancelled, Refunded, Expired};

    return result;
  }

  async getTotalByStatus(req, res) {
    const { status } = req.params;

    const toCalc = this.getJsonFileToJson();

    const totalAmount = calcTotalByStatus(toCalc, status);

    const data = {status, totalAmount}

    return res.json({ message: 'Sucess to get total by status', data });

  }

  calcTotalByStatus(toCalc, status) {

    const toCalcFiltered = toCalc.filter(item => {
      if (item.status === status)
        return items;
    });

    toCalcFiltered.forEach((item, index) => {
      const totalAmountByOrder = item.order_items.reduce(
        (a, b) => a.amount + b.amount,
        0
      );
      this[index].totalAmountByOrder = totalAmountByOrder;
    });

    const totalByStatus = toCalcFiltered.reduce(
      (a, b) => a.totalAmountByOrder + b.totalAmountByOrder,
      0
    );

    return totalByStatus;
  }

  async orderByMajorValue(req, res) {
    const toCalc = this.getJsonFileToJson();

    const Pending = this.calcTotalByStatus(toCalc, 'Pending');
    const Paid = this.calcTotalByStatus(toCalc, 'Paid');
    const Cancelled = this.calcTotalByStatus(toCalc, 'Cancelled');
    const Refunded = this.calcTotalByStatus(toCalc, 'Refunded');
    const Expired = this.calcTotalByStatus(toCalc, 'Expired');;

    const result = [ {
      status: 'Pending',
      totalAmout: Pending
    },{
      status: 'Paid',
      totalAmout: Paid
    },{
      status: 'Cancelled',
      totalAmout: Cancelled
    },{
      status: 'Refunded',
      totalAmout: Refunded
    },{
      status: 'Expired',
      totalAmout: Expired
    }];

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

  async groupByCountry(req, res) {


    return
  }

}

export default new ChaoticController();
