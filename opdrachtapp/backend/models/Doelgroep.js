var mongoose = require('mongoose');

var DoelgroepSchema = new mongoose.Schema({
  naam: String
});	

mongoose.model('Doelgroep', DoelgroepSchema);