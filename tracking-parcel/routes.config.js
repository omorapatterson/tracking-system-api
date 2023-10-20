const trackingParcelController = require('./controllers/tracking-parcel-controller');
exports.routesConfig = function (app) {
    app.get('/tracking', [
        trackingParcelController.trakingParcel
    ]);
};