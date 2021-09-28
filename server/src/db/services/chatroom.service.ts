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

    await knex(chatroom)
    .where({ room_id: id })
    .first()
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

        let roomdata = {
            id: result[0].id,
            room_id: result[0].room_id,
            title: result[0].title,
            owner: result[0].owner,
            created_at: result[0].created_at
        }

        res.json({
            room: roomdata,
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

export const updateOne = async(req: any, res: any, next: any) => {
    let { id } = req.params;
    if(!id) return next()
    
    let { title } = req.body;

    if(!title) {
        return next()
    }

    await knex(chatroom).where({ room_id: id }).first().update({ 
        title
    }).asCallback((err: any, result: any) => {
        if(err) return next(err)

       res.json(result)
    })
}

export const deleteOne = async(req: any, res: any, next: any) => {
    let { id } = req.params;
    if(id) return next()

    await knex(chatroom).where({ room_id: id })
    .first()
    .del()
    .asCallback((err: any, result: any) => {
        if(err) return next(err)

       res.json(result)
    })
}