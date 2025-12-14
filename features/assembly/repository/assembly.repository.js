const Assembly = require('../model/Assembly.model');

class AssemblyRepository {
  static async create(data) {
    return await Assembly.create(data);
  }

  static async findByIds(ids) {
    return await Assembly.find({ _id: { $in: ids } }).exec();
  }

  static async getAll() {
    return await Assembly.find({}).exec();
  }
}

module.exports = AssemblyRepository;
