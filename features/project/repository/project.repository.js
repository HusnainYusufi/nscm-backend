const Project = require('../model/Project.model');

class ProjectRepository {
  static async create(data) {
    return await Project.create(data);
  }

  static async getAll() {
    return await Project.find({})
      .populate('category')
      .populate('structures')
      .populate({ path: 'sets.assemblies', populate: { path: 'parentAssembly' } })
      .exec();
  }

  static async getByCode(code) {
    return await Project.findOne({ code }).exec();
  }
}

module.exports = ProjectRepository;
