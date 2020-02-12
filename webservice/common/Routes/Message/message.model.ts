import * as mongoose from 'mongoose';

export interface Message extends mongoose.Document{
    name: String,
    email: String,
    phone: String,
    message: String
}

const messageSchema = new mongoose.Schema({
    name: {
        type: String
    },
    email: {
        type: String,
        unique: true
    },
    phone: {
        type: String,
        unique: true
    },
    message: {
        type: String,
        select: false
    },
    date_created: {
        type: Date,
        default: Date.now
    }
});

export const Message = mongoose.model<Message>('Message', messageSchema);