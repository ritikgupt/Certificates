var c = require('mongoose');
var CertificateSchema = new c.Schema({
  email: {type: String, required: true},
});
module.exports = c.model('Certificate', CertificateSchema);
