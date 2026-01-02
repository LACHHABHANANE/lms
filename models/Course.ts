import mongoose from 'mongoose';

const CourseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Please provide a title for this course.'],
        maxlength: [100, 'Title cannot be more than 100 characters'],
    },
    description: {
        type: String,
        required: [true, 'Please provide a description for this course.'],
    },
    price: {
        type: Number,
        required: [true, 'Please provide a price.'],
        min: 0,
    },
    image: {
        type: String,
        default: '/images/default-course.jpg',
    },
    level: {
        type: String,
        enum: ['Collège', 'Lycée', 'Supérieur', 'Autre'],
        default: 'Autre',
    },
    instructor: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    status: {
        type: String,
        enum: ['draft', 'published'],
        default: 'draft',
    },
}, { timestamps: true });

export default mongoose.models.Course || mongoose.model('Course', CourseSchema);
