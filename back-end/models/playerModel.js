import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const PlayerSchema = new Schema({
    firstName: {
        type: String,
        required: true,
    },
    lastName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: Number,
    },
    isCoach: {
        type: Boolean,
        default: false
    },
    team: {
        type: String,
    },
    speed: {
        type: Number,
        enum: [1, 2, 3]
    },
    strength: {
        type: String,
        enum: [1, 2, 3]
    },
    endurance: {
        type: String,
        enum: [1, 2, 3]
    },
    ability: {
        type: String,
        enum: [1, 2, 3]
    },
    technique: {
        type: String,
        enum: [1, 2, 3]
    },
    tactical: {
        type: String,
        enum: [1, 2, 3]
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})