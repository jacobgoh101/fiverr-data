// gigs-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const gigs = new mongooseClient.Schema({
    link: {
      type: String,
      required: true,
      unique: true
    },
    title: {
      type: String
    },
    rating: {
      type: Number
    },
    subcategory: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now
    },
    updatedAt: {
      type: Date,
      default: Date.now
    }
  });

  return mongooseClient.model('gigs', gigs);
};
