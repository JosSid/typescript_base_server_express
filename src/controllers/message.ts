import { NextFunction, Request, Response } from "express";
import createError from 'http-errors';
import { getMessages, getMessageById, insertMessage, updateMessage, deleteMessage } from "../services/message_service";

const getItems = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const results = await getMessages();
        res.status(200).json({results})
    } catch (error) {
        next(createError(400, 'ERROR_GET_DB'))
    }
}
const getItem = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id;
        const response = await getMessageById(id);
        const data = response ? response : "THIS_DOCUMENT_NOT_EXISTS_IN_DB"
        res.status(200).json(data);
    } catch (error) {
        next(createError(404, 'ERROR_NOT_FOUND'))
    }
}

const createItem = async ({body}: Request, res: Response, next: NextFunction) => {
    try {
       const responseInsert =  await insertMessage(body);
       res.status(201).json(responseInsert)
    } catch (error) {
        next(createError(400, 'ERROR_CREATE_ITEM'));
    }
}

const updateItem = async ({params, body}: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = params;
        const response = await updateMessage(id, body);
        res.status(200).json(response);
    } catch (error) {
        next(createError(400, 'ERROR_UPDATE_ITEM'));
    }
}

const deleteItem = async({params}: Request, res: Response, next: NextFunction) => {
    try {
        const {id} = params;
        const response = await deleteMessage(id);
        res.status(200).json(response);
    } catch (error) {
        next(createError(400, 'ERROR_DELETE_ITEM'))
    }
}

export { getItem, getItems, createItem, updateItem, deleteItem}
