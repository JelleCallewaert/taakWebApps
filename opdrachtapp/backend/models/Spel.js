var mongoose = require('mongoose');

var SpelSchema = new mongoose.Schema({
  titel: String,
  beschrijving: String,
  benodigdheden: [String],
  maxAantal: Number,
  minAantal: Number,
  doelgroepen: [String],
  datumCreated: Date
});	
mongoose.model('Spel', SpelSchema);