const AssemblyRepo = require('../repository/assembly.repository');

class AssemblyService {
  static async addAssembly(data) {
    try {
      const { type, parentAssembly } = data;

      if (type === 'sub-assembly') {
        if (!parentAssembly) {
          return { status: 400, message: 'Parent assembly is required for a sub-assembly', result: null };
        }

        const parent = await AssemblyRepo.findById(parentAssembly);
        if (!parent) {
          return { status: 400, message: 'Parent assembly not found', result: null };
        }

        if (parent.type === 'sub-assembly') {
          return { status: 400, message: 'Sub-assemblies cannot be nested under another sub-assembly', result: null };
        }
      } else if (parentAssembly) {
        return { status: 400, message: 'Parent assembly is only applicable for sub-assemblies', result: null };
      }

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
