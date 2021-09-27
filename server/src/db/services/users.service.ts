import { users } from "../constants/tableNames";
import knex from "../knex";

export const getAllUser = async(req: any, res: any, next: any) => {
    let data = await knex.select('*').from(users);
    res.json(data)
}