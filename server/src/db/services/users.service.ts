import { users } from "../constants/tableNames";
import knex from "../knex";

export const getAllUser = async(req: any, res: any, next: any) => {
    let data = await knex.select('*').from(users);
    res.json(data)
}

export const getOneUser = async(req: any, res: any, next: any) => {
    let { id } = req.params
    if(!id) return next()

    await knex(users).where({ user_id: id })
    .asCallback((err: any, result: any) => {
        if(err) return next(err);
        res.json(result)
    })
}
