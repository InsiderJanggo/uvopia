import * as yup from 'yup'

const roomSchema = yup.object().shape({
    title: yup.string().trim().min(4).required(),
    owner: yup.number().required().positive()
})

export default roomSchema