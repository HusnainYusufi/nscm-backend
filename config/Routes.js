'use strict';

module.exports.routes = (app) => {
  app.use('/role', require('../features/role/controller/RoleController'));
  app.use('/user', require('../features/user/controller/UserController'));
  app.use('/auth', require('../features/auth/controller/AuthController'));

};
