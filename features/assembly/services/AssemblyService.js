const AssemblyRepo = require('../repository/assembly.repository');

class AssemblyService {
  static async addAssembly(data) {
    try {
      const assembly = await AssemblyRepo.create(data);
      return { status: 200, message: 'Created', result: assembly };
    } catch (error) {
      throw error;
    }
  }

  static async getAllAssemblies() {
    try {
      const assemblies = await AssemblyRepo.getAll();
      return { status: 200, message: 'Record Found', result: assemblies };
    } catch (error) {
      throw error;
    }
  }

  static async findAssembliesByIds(ids) {
    try {
      return await AssemblyRepo.findByIds(ids);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = AssemblyService;
