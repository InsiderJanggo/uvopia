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

