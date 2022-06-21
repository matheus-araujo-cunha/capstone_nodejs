import * as yup from "yup";

const createRentSchema = yup.object().shape({
  reserveId: yup.string().uuid().required(),
});

const serializedCreateRentSchema = yup
  .object()
  .shape({
    rentUuid: yup.string().required(),
    value: yup.number().positive().required(),
    startDate: yup.date().required(),
    finishDate: yup.date().required(),
    item: yup
      .object()
      .shape({
        itemUuid: yup.string().required(),
        model: yup.string().required(),
        brand: yup.string().required(),
        year: yup.number().integer().positive().required(),
        capacity: yup.number().integer().positive().required(),
        location: yup.string().max(50).required(),
        owner: yup
          .object()
          .shape({
            userUuid: yup.string().required(),
            name: yup.string().required(),
            email: yup.string().required(),
            phone: yup.string().required(),
          })
          .required(),
        dailyPrice: yup.number().positive().required(),
        service: yup.boolean().required(),
        image: yup.string().required(),
      })
      .required(),
  })
  .required();

const serializedRentsOfUserSchema = yup
  .array()
  .of(
    yup
      .object()
      .shape({
        rentUuid: yup.string().required(),
        value: yup.number().positive().required(),
        startAt: yup.date().required(),
        finishAt: yup.date().required(),
        item: yup
          .object()
          .shape({
            itemUuid: yup.string().required(),
            model: yup.string().required(),
            brand: yup.string().required(),
          })
          .required(),
      })
      .required()
  )
  .required();

const updateRentSchema = yup.object().shape({
  startAt: yup.date().optional(),
  finishAt: yup.date().optional(),
});

export {
  createRentSchema,
  serializedCreateRentSchema,
  serializedRentsOfUserSchema,
  updateRentSchema,
};
