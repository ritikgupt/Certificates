var c = require('mongoose');
var ParticipantSchema = new c.Schema({
  email: {type: String, required: true,unique:true},
  name:  {type: String, required: true},
});
module.exports = c.model('Participant', ParticipantSchema);
