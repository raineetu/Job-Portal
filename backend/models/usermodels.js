import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phoneNumber: {
        type: String,  // Changed from Number to String
        required: true
    },
    role: {
        type: String,
        enum: ['student', 'recruiter'],
        required: true
    },
    profile: {
        bio: { type: String, default: "" },
        skills: [{ type: String }],
        resume: { type: String },  // URL to resume
        resumeOriginalName: { type: String },
        company: { type: mongoose.Schema.Types.ObjectId, ref: 'company' },
        profilePhoto: {
            type: String,
            default: ""  // Added a default empty string
        }
    }
}, { timestamps: true });

export const User = mongoose.model('User', userSchema);
