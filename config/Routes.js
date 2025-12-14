'use strict';

module.exports.routes = (app) => {
  app.use('/role', require('../features/role/controller/RoleController'));
  app.use('/user', require('../features/user/controller/UserController'));
  app.use('/auth', require('../features/auth/controller/AuthController'));
  app.use('/project-category', require('../features/projectCategory/controller/ProjectCategoryController'));
  app.use('/assembly', require('../features/assembly/controller/AssemblyController'));
  app.use('/structure', require('../features/structure/controller/StructureController'));
  app.use('/project', require('../features/project/controller/ProjectController'));

};
