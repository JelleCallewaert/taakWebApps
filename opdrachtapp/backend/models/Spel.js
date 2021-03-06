let mongoose = require('mongoose');

let SpelSchema = new mongoose.Schema({
  titel: String,
  beschrijving: String,
  benodigdheden: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Benodigdheid'
    }
  ],
  maxAantal: Number,
  minAantal: Number,
  doelgroepen: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Doelgroep'
    }
  ],
  datumCreated: { type: Date, default: Date.now },
  ratings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Rating'
    }
  ]
});	

mongoose.model('Spel', SpelSchema);