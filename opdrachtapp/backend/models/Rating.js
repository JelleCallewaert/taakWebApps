let mongoose = require('mongoose');

let RatingSchema = new mongoose.Schema({
    rate: Number,
    username: String
})

RatingSchema.pre('remove', function (next) {
    this.model('Spel').update(
      {}, 
      { $pull: { ratings: this._id } }, 
      { safe: true, multi: true }, next
    );
});

mongoose.model('Rating', RatingSchema);