let mongoose = require('mongoose');

let BenodigdheidSchema = new mongoose.Schema({
  naam: String,
  aantal: {type: Number}
});	
BenodigdheidSchema.pre('remove', function (next) {
  this.model('Spel').update(
    {}, 
    { $pull: { benodigdheden: this._id } }, 
    { safe: true, multi: true }, next);
});
mongoose.model('Benodigdheid', BenodigdheidSchema);