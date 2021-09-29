import { users } from "../constants/tableNames";
import knex from "../knex";

interface User {
    user_id: any;
    username: string;
    email: string;
    avatar: string;
    created_at: Date;
}

export const getAllUser = async(req: any, res: any, next: any) => {
    await knex.select('*')
    .from<User>(users)
    .asCallback((err: any, result: any) => {
        if(err) return next(err)
        for(let i = 0; i < result.length; i++) {
            let user = [{
                id: result[i].id,
                user_id: result[i].user_id,
                username: result[i].username,
                email: result[i].email,
                avatar: result[i].avatar,
                created_at: result[i].created_at
            }]
            res.json(user)
        } 
    })
}

export const getOneUser = async(req: any, res: any, next: any) => {
    let { id } = req.params
    if(!id) return next()

    await knex(users).where({ user_id: id })
    .asCallback((err: any, result: any) => {
        if(err) return next(err);
        let user = {
            id: result[0].id,
            user_id: result[0].user_id,
            username: result[0].username,
            email: result[0].email,
            avatar: result[0].avatar,
            created_at: result[0].created_at
        }
        res.json(user)
    })
}
