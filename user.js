const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
  name: {
    type: String,
    maxlength: 50
  },
  email: {
    type: String,
    trim: true // space를 없애주는 역할
    // unique: 1
  },
  password: {
    type: String,
  },
  lastname: {
    type: String,
    maxlength: 50
  },
  role: {
    type: Number,
    default: 0
  },
  image: String,
  token: {
    type: String
  },
  tokenExp: {
    type: Number
  }
})

const User = mongoose.Model('User', userSchema);
module.exports = {User};

// 비밀번호 암호화.

const saltRounds = 10;

userSchema.methods.encryptPassword = function(cb) {
    let user = this;
	
    // bcrypt로 암호화할 수 있는 salt를 생성한다.
    bcrypt.genSalt(saltRounds, function(err, salt) {
        if (err) return cb(err);
		
        // 생성한 salt를 이용하여 암호화된 hash를 생성한다.
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);
            user.password = hash;
            cb()
        });
    });
};