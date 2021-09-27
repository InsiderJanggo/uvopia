import { users } from "../constants/tableNames";
import knex from "../knex";
import bcrypt from 'bcrypt'
import { LoginSchema, RegisterSchema } from "../schema/auth.schema";

export interface User {
    username: string;
    email?: string;
    password: string
}

const saltRounds = 15;

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

    
   await bcrypt.genSalt(saltRounds, (err, salts) => {
       bcrypt.hash(password, salts, async(err, hash) => {
           await knex(users).insert({
               username,
               email,
               password: hash
           })
           .asCallback((err: any, result: any) => {
               if(err) return next(err)
               res.json(result)
           })
       })
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
        if(err) return res.json(result)
        let pass = result.password;
        bcrypt.compare(password, pass, (err, response) => {
            if(err) return next(err);
            if(response) {
                return res.json(result)
            } else {
                return res.json({
                    message: 'Wrong Password or Username'
                })
            }
        })
    })
}