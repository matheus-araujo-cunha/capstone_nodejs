import * as yup from "yup";

const createReserveSchema = yup.object().shape({
  startDate: yup.string().required(),
  finishDate: yup.string().required(),
  itemId: yup.string().uuid().required(),
});

const serializedCreateReserveSchema = yup
  .object()
  .shape({
    reserveUuid: yup.string().required(),
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

const serializedReservesOfUserSchema = yup
  .array()
  .of(
    yup
      .object()
      .shape({
        reserveUuid: yup.string().required(),
        value: yup.number().positive().required(),
        startDate: yup.date().required(),
        finishDate: yup.date().required(),
        item: yup
          .object()
          .shape({
            id: yup.string().required(),
            model: yup.string().required(),
            brand: yup.string().required(),
          })
          .required(),
      })
      .required()
  )
  .required();

const updateReserveSchema = yup.object().shape({
  startDate: yup.date().optional(),
  finishDate: yup.date().optional(),
});

export {
  createReserveSchema,
  serializedCreateReserveSchema,
  serializedReservesOfUserSchema,
  updateReserveSchema,
};
