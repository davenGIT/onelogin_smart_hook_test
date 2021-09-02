const express = require('express');
const router = express.Router();

const app = express();

const subdomain = require('../config/config').SUBDOMAIN;
const clientid = require('../config/config').OIDC_CLIENT_ID;
const secret = require('../config/config').OIDC_SECRET;

//const https = require('https');
var sessionState = '';

// Welcome Page
router.get('/', async (req, res, next) => {

  res.render('welcome', {
    hidclient_id: clientid,
    hidsubdomain: subdomain,
    divLogin: 'block',
    divLogout: 'none'
  });
});

module.exports = router;
