import { users } from "../constants/tableNames";
import knex from "../knex";
import * as dotenv from 'dotenv'
dotenv.config()
import CryptoJS from "crypto-js";
import { LoginSchema, RegisterSchema } from "../schema/auth.schema";

export interface User {
    username: string;
    email?: string;
    password: string
}

export const Register = async(req: any, res: any, next: any) => {
    let { username, email, password }: User = req.body;

    if(!username || !email || !password) {
        return RegisterSchema.validate({
            username,
            email,
            password
        }).catch((err) => {
            next(err)
        })
    }

    let encryptPass = await CryptoJS.SHA256(process.env.SECRET_KEY as string)
    let hash = await CryptoJS.AES.encrypt(password, encryptPass)
    await knex(users).insert({
        username,
        email,
        password: hash
    })
    .asCallback((err: any, result: any) => {
        if(err) return next(err)
        res.json(result)
    })
}

export const Login = async(req: any, res: any, next: any) => {
    let { username, password }: User = req.body;
    if(!username || !password) {
        return LoginSchema.validate({
            username,
            password
        }).catch((err) => {
            next(err)
        })
    }
}