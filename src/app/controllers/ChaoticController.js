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

  async orderByStatus(req, res) {
    const result = this.getJsonFileToJson();



    return
  }

  async getTotalByStatus(req, res) {
    return
  }

  async orderByMajorValue(req, res) {

    return
  }

  async groupByCountry(req, res) {


    return
  }

}

export default new ChaoticController();
