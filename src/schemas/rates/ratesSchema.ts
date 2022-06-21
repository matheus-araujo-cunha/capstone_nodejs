import * as yup from "yup"

const serializedCreateRateSchema=yup.object().shape({
    rate:yup.number().required().min(0).max(5),
    comment:yup.string().required(),
})
const responseCreateSchema=yup.object().shape({
    rate:yup.number().required().min(0).max(5),
    comment:yup.string().required(),
    rateUuid:yup.string().uuid().required(),
})

const serializedGetRateSchema= yup.object().shape({
    ratings:yup.array().of(
        yup.object().shape({
            rate:yup.number().required(),
            comment:yup.string().required(),
            rateUuid:yup.string().required()
        }).required()
    ).required()
})

export {serializedCreateRateSchema,serializedGetRateSchema,responseCreateSchema}
