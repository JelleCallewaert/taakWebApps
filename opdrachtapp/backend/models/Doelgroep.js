let mongoose = require('mongoose');

let DoelgroepSchema = new mongoose.Schema({
  naam: String
});	

DoelgroepSchema.pre('remove', function (next) {
  this.model('Spel').update(
    {}, 
    { $pull: { doelgroepen: this._id } }, 
    { safe: true, multi: true }, next);
});
mongoose.model('Doelgroep', DoelgroepSchema);