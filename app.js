const express = require('express');
var cors = require('cors')
const app = express();
const port = 3030;

const authorizationRouter = require('./authorization/routes.config');
const trackingParcelRouter = require('./tracking-parcel/routes.config');

app.use(cors());
app.use(express.json());

authorizationRouter.routesConfig(app);

trackingParcelRouter.routesConfig(app);

app.listen(port, () => {
    console.log('app listening at port: ' + port);
});
