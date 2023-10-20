const authorizationController = require('./controllers/authorization-controller');
exports.routesConfig = function (app) {
    app.post('/Generate_Token', [
        authorizationController.auth
    ]);
};