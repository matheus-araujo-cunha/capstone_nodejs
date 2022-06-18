import * as yup from "yup"

const serializedCreateRateSchema=yup.object().shape({
    rate:yup.number().required(),
    comment:yup.string().required(),
})

export default serializedCreateRateSchema
