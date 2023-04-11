import { Schema, Types, model, Model } from "mongoose";
import { Message } from "../interfaces/message.interface";

const MessageSchema = new Schema<Message>(
    {
        name: {
            type: String,
            required: true,
        },
        mail: {
            type: String,
            required: true,
        },
        phone: {
            type: String || null
        },
        comments: {
            type: String,
            required: true,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

MessageSchema.index({ name: 1 });
MessageSchema.index({ mail: 1 });

const MessageModel = model('message', MessageSchema);

export default MessageModel;