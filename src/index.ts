import app from './server';
const sslCertificate = require('get-ssl-certificate')
import config from '../config.json';
require('dotenv').config();

// Start the application by listening to specific port
const port = Number(process.env.PORT || 8096);
app.listen(port, () => {
/*   sslCertificate.get('https://bncr.fi.cr').then(function (certificate: { issuer: any; valid_from: any; valid_to: any; pemEncoded: any; }) {
    console.log(certificate)
    // certificate is a JavaScript object
  
    console.log(certificate.issuer)
    // { C: 'GB',
    //   ST: 'Greater Manchester',
    //   L: 'Salford',
    //   O: 'COMODO CA Limited',
    //   CN: 'COMODO RSA Domain Validation Secure Server CA' }
  
    console.log(certificate.valid_from)
    // 'Aug  14 00:00:00 2017 GMT'
  
    console.log(certificate.valid_to)
    // 'Nov 20 23:59:59 2019 GMT'
  
    // If there was a certificate.raw attribute, then you can access certificate.pemEncoded
    console.log(certificate.pemEncoded)
    // -----BEGIN CERTIFICATE-----
    // ...
    // -----END CERTIFICATE-----
  }); */
  console.info('Express application started on port: ' + port);
});

