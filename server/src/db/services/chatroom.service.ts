import knex from "../knex";
import { chatroom } from "../constants/tableNames";
import roomSchema from "../schema/room.schema";

export default interface Room {
    id?: number;
    room_id: any;
    title: string;
    owner: number;
    created_at?: Date;
}

export const getAll = async(req: any, res: any, next: any) => {
    await knex.select('*')
    .from<Room>(chatroom)
    .asCallback((err: any, results: any) => {
        if(err) return next(err)
        res.json(results)
    })
}

export const createOne = async(req: any, res: any, next: any) => {
    let { title, owner } =  req.body;
    if(!title || !owner) {
        return roomSchema.validate({
            title,
            owner
        })
    }

    await knex(chatroom).insert({
        title,
        owner
    }).asCallback((err: any, result: any) => {
        if(err) return next(err)
        res.json(result)
    })
}