const ProjectRepo = require('../repository/project.repository');
const ProjectCategoryService = require('../../projectCategory/services/ProjectCategoryService');
const AssemblyService = require('../../assembly/services/AssemblyService');
const StructureService = require('../../structure/services/StructureService');

class ProjectService {
  static async addProject(data) {
    try {
      const { code, category, sets = [], structures = [] } = data;

      const existingProject = await ProjectRepo.getByCode(code);
      if (existingProject) {
        return { status: 400, message: 'Project code already exists', result: null };
      }

      const categoryRecord = await ProjectCategoryService.getCategoryById(category);
      if (!categoryRecord) {
        return { status: 400, message: 'Invalid project category', result: null };
      }

      let assembliesToValidate = [];
      sets.forEach((set) => {
        if (Array.isArray(set.assemblies)) {
          assembliesToValidate = assembliesToValidate.concat(set.assemblies);
        }
      });

      if (assembliesToValidate.length) {
        const uniqueAssemblyIds = [...new Set(assembliesToValidate.map(String))];
        const foundAssemblies = await AssemblyService.findAssembliesByIds(uniqueAssemblyIds);
        if (foundAssemblies.length !== uniqueAssemblyIds.length) {
          return { status: 400, message: 'One or more assemblies are invalid', result: null };
        }
      }

      if (structures.length) {
        const uniqueStructureIds = [...new Set(structures.map(String))];
        const foundStructures = await StructureService.findStructuresByIds(uniqueStructureIds);
        if (foundStructures.length !== uniqueStructureIds.length) {
          return { status: 400, message: 'One or more structures are invalid', result: null };
        }
      }

      const project = await ProjectRepo.create(data);
      return { status: 200, message: 'Created', result: project };
    } catch (error) {
      throw error;
    }
  }

  static async getAllProjects() {
    try {
      const projects = await ProjectRepo.getAll();
      return { status: 200, message: 'Record Found', result: projects };
    } catch (error) {
      throw error;
    }
  }
}

module.exports = ProjectService;
