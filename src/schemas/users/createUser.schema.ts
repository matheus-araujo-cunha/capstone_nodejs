import * as yup from "yup"



const createUserSchema=yup.object().shape({
    name:yup.string().required(),
    email:yup.string().email().required().lowercase(),
    password:yup.string().required(),
    phone:yup.string().required(),
    licensed:yup.bool().default(false).optional()
})

const serializedCreateUserSchema=yup.object().shape({
    userUuid:yup.string().uuid().required(),
    name:yup.string().required(),
    email:yup.string().email().required().lowercase(),
    phone:yup.string().required(),
    licensed:yup.bool().required()
})


export {createUserSchema,serializedCreateUserSchema}