import knex from "../knex";
import { chatroom, users } from "../constants/tableNames";
import roomSchema from "../schema/room.schema";
import axios from "axios";

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

export const getOne = async(req: any, res: any, next: any) => {
    let { id } = req.params;
    if(id) return next()

    await knex(chatroom).where({ room_id: id })
    .asCallback(async(err: any, result: any) => {
        if(err) return next(err)

        let owner = {}
        await axios.get(`http://localhost:4000/api/v1/users/${result.owner}`)
        .then((response) => {
            response.data = owner;
        })
        .catch((err) => {
           return next(err)
        })

        res.json({
            room: result,
            owner: owner
        })
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

export const deleteOne = async(req: any, res: any, next: any) => {

}