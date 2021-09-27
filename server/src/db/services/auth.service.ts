import { users } from "../constants/tableNames";
import knex from "../knex";
import * as dotenv from 'dotenv'
dotenv.config()
import CryptoJS from "crypto-js";
import { LoginSchema, RegisterSchema } from "../schema/auth.schema";
import e from "express";

let key= CryptoJS.SHA256(process.env.SECRET_KEY as string)

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

    
    let hash = await CryptoJS.AES.encrypt(password, key)
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

    await knex(users).where({
        username
    })
    .asCallback(async(err: any, result: any) => {
        let pass = result.password;
        let hash = await CryptoJS.AES.decrypt(pass, key)
        if(!hash) {
            return res.json({
                message: 'Wrong Password'
            })
        } 
        res.json(result)
    })
}