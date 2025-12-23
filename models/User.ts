import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name for this user.'],
        maxlength: [60, 'Name cannot be more than 60 characters'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email for this user.'],
        maxlength: [100, 'Email cannot be more than 100 characters'],
        unique: true,
    },
    password: {
        type: String,
        required: [true, 'Please provide a password for this user.'],
    },
    role: {
        type: String,
        enum: ['student', 'instructor'],
        default: 'student',
    },
}, { timestamps: true });

export default mongoose.models.User || mongoose.model('User', UserSchema);
