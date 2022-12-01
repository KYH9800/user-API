const express = require('express');
const router = express.Router();
// schemas/user
const Users = require('../schemas/user');

// GET /user, 회원 전체 목록 조회
router.get('/', async (req, res) => {
  try {
    const result = await Posts.find({}, {});
    return res.json({ posts: result });
  } catch (error) {
    console.error('error: ', error);
    return res.status(400).json({ message: '회원 목록 조회 실패' });
  }
});

// GET /user/:userid, 한 회원의 userId를 주었을때 회원 정보를 조회
router.get('/:userid', async (req, res) => {
  try {
    const { userid } = req.params;
    const result = await Posts.findOne({ _id: userid }, {});
    return res.json({ posts: result });
  } catch (error) {
    console.error('error: ', error);
    return res.status(400).json({ message: '회원 상세 조회 실패' });
  }
});

module.exports = router;
