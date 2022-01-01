import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3
    },
    password: {
        type: String,
        require: true,
        minlength: 4
    }
});

const users = mongoose.model('users', usersSchema);

export default users;