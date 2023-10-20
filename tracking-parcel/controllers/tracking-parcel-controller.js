const axios = require('axios');

const trackingParcelApi = require('../../common/config/env.config.js').trackingParcelApi;
const bearerToken = require('../../common/config/env.config.js').bearerToken;

exports.trakingParcel = (req, res) => {
    const instance = axios.create({
        baseURL: trackingParcelApi + '/get/parcel/tracking.json?tracking_number=' + req.query.tracking_number
    });
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + bearerToken;
    try {
        instance.get('')
            .then(function (response) {
                res.status(200).send(response.data);
               })
            .catch(function (error) {
                res.status(404).send(error);
            })
    } catch (err) {
        res.status(500).send({errors: err});
    }
};
