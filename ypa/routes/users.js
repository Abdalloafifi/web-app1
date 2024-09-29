const express = require('express');
const router = express.Router();
const User = require('../models/user'); // استيراد نموذج المستخدم

// جلب جميع المستخدمين
router.get('/', async (req, res) => {
    try {
        const users = await User.find(); // جلب جميع المستخدمين من قاعدة البيانات
        res.json(users); // إرجاع البيانات كاستجابة بصيغة JSON
    } catch (error) {
        res.status(500).send('Error retrieving users');
    }
});

// إضافة مستخدم جديد

router.post('/', async (req, res) => {
    const user = new User(req.body);
    try {
        const savedUser = await user.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(400).json({ error: 'Error saving user: ' + error.message });
    }
});


module.exports = router;
