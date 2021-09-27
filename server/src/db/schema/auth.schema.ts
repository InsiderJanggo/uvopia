import * as yup from 'yup'

export const RegisterSchema = yup.object().shape({
    username: yup.string().trim().min(4).required(),
    email: yup.string().email().max(155).required().trim(),
    password: yup.string().trim().min(8).required(),
})

export const LoginSchema = yup.object().shape({
    username: yup.string().trim().min(4).required(),
    password: yup.string().trim().min(8).required()
})