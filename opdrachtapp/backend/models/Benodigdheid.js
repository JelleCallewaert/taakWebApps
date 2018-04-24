var mongoose = require('mongoose');

var BenodigdheidSchema = new mongoose.Schema({
  naam: String,
  aantal: {type: Number, default: 1}
});	

BenodigdheidSchema.pre('remove', function (next) {
  this.model('Spel').update({}, 
    { $pull: { benodigdheid: this._id } }, 
    { safe: true, multi: true }, next);
})

mongoose.model('Benodigdheid', BenodigdheidSchema);