'use strict';

module.exports.routes = (app) => {
  app.use('/role', require('../features/role/controller/RoleController'));

};
