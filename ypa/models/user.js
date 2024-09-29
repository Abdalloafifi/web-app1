const mongoose = require('mongoose');

// نموذج المستخدم
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3,
        maxlength: 50
    },
    email: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 255,
        unique: true
    }
});

// تصدير النموذج
module.exports = mongoose.model('User', userSchema);