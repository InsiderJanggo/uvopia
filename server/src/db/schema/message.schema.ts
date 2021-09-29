import * as yup from 'yup'

const messageSchema = yup.object().shape({
    content: yup.string().trim().required().max(200)
})

export default messageSchema;