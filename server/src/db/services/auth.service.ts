import { users } from "../constants/tableNames";
import knex from "../knex";
import bcrypt from 'bcrypt'
import { LoginSchema, RegisterSchema } from "../schema/auth.schema";

const saltRounds = 15;

export const Register = async(req: any, res: any, next: any) => {
    let { username, email, password, avatar } = req.body;

    if(!username || !email || !password) {
        return RegisterSchema.validate({
            username,
            email, 
            password,
            avatar
        }).catch((err) => {
            next(err)
        })
    }

    
   await bcrypt.genSalt(saltRounds, (err, salts) => {
       bcrypt.hash(password, salts, async(err, hash) => {
           await knex(users).insert({
               username: username,
               email: email,
               password: hash,
               avatar
           })
           .asCallback((err: any, result: any) => {
               if(err) return next(err)
               res.json(result)
           })
       })
   })
}

export const Login = async(req: any, res: any, next: any) => {
    let { username, password } = req.body;
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