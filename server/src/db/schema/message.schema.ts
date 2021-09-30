import * as yup from 'yup'

const messageSchema = yup.object().shape({
    content: yup.string().trim().required().max(200),
    author: yup.string().trim().required()
})

export default messageSchema;