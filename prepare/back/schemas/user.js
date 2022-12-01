const mongoose = require('mongoose');

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String, // type은 문자열
      required: true, // 꼭 필요한가?
      // unique: true, // 유니크한 값인가?
    },
    ID: {
      type: String, // type은 문자열
      required: true, // 꼭 필요한가?
      unique: true, // 유니크한 값인가?
    },
    pw: {
      type: String,
      required: true,
    },
  },
  {
    versionKey: false, // __v 제거하기
  }
);

module.exports = mongoose.model('Users', userSchema);
