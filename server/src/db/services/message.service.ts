import { messages } from "../constants/tableNames";
import knex from "../knex";
import messageSchema from "../schema/message.schema";

export interface Message {
    message_id: any;
    content: string;
    at_chat?: any;
    created_at: Date;
}

export const getAllMessage = async(req: any, res: any, next: any) => {
    await knex.select('*').from<Message>(messages)
    .asCallback((err: any, result: any) => {
        if(err) return next(err)
        res.json(result)
    })
}

export const getOneMessage = async(req: any, res: any, next: any) => {
    let { id } = req.params;
    if(id) return next()

    await knex(messages)
    .where({ message_id: id })
    .first()
    .asCallback((err: any, result: any) => {
        if(err) return next(err)
        res.json(result[0])
    })
}

export const createMessage = async(req: any, res: any, next: any) => {
    let { id } = req.params;
    if(!id) return next();
    let { content, author } = req.body;

    if(!content) {
        return messageSchema.validate({
            content,
            author
        }).catch((err) => {
            next(err)
        })
    }

    await knex(messages).insert({
        content,
        at_chat: id,
        author
    })
    .asCallback((err: any, result: any) => {
        if(err) return next(err)
        res.json(result)
    });
}

export const deleteOne = async(req: any, res: any, next: any) => {
    let { id } = req.params;
    if(!id) return next()

    await knex(messages).where({
        message_id: id
    })
    .first()
    .del()
    .asCallback((err: any, result: any) => {
        if(err) return next(err)
        res.json(result)
    });
}