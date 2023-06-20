const express = require('express');
const Users = require('../Models/Users');
const router = express.Router();

// GET all users
router.get('/allusers', async (req, res) => {
  try {
    const users = await Users.find({});
    res.status(200).json({
      success: true,
      message: 'Lấy tất cả thông tin của các user thành công',
      users,
    });
  } catch (err) {
    res.status(500).json({ success: false, message: err });
  }
});

module.exports = router;
