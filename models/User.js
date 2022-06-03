const { Schema, model } = require('mongoose');
const dateFormat = require('../utils/dateFormat');

const UserSchema = new Schema (
  {
    username: {
      type: String,
      value: Unique,
    },
    email: {

    },
    thoughts: {

    },
    friends: {

    }
  }
)

const User = model('User', UserSchema);

module.exports = User;