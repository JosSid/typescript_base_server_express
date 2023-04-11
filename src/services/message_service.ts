import { Message } from "../interfaces/message.interface";
import MessageModel from "../models/Message";

const insertMessage = async (message: Message) => {
    const responseInsert = await MessageModel.create(message);
    return responseInsert;
};

const getMessages = async() => {
    const responseMessages = await MessageModel.find({});
    return responseMessages;
};

const getMessageById = async(id: string) => {
    const responseMessage = await MessageModel.findById(id);
    return responseMessage;
};

const updateMessage = async(id: string, data:Message) => {
    const responseMessage = await MessageModel.findOneAndUpdate({_id: id}, data, {new:true});
    return responseMessage;
};

const deleteMessage = async(id: string) => {
    const responseMessage = await MessageModel.findOneAndDelete({_id: id});
    return responseMessage;
};

export { insertMessage, getMessages, getMessageById, updateMessage, deleteMessage };