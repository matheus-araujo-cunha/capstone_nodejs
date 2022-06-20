import * as yup from "yup";

const createReserveSchema = yup.object().shape({
  startAt: yup.date().default(() => new Date()),
  finishAt: yup.date().required(),
  itemId: yup.string().uuid().required(),
});

const serializedCreateReserveSchema = yup
  .object()
  .shape({
    id: yup.string().required(),
    value: yup.number().positive().required(),
    startDate: yup.date().required(),
    finishDate: yup.date().required(),
    item: yup
      .object()
      .shape({
        id: yup.string().required(),
        model: yup.string().required(),
        brand: yup.string().required(),
        year: yup.number().integer().positive().required(),
        capacity: yup.number().integer().positive().required(),
        location: yup.string().max(50).required(),
        owner: yup
          .object()
          .shape({
            id: yup.string().required(),
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
        id: yup.string().required(),
        value: yup.number().positive().required(),
        startAt: yup.date().required(),
        finishAt: yup.date().required(),
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
  startAt: yup.date().optional(),
  finishAt: yup.date().optional(),
});

export {
  createReserveSchema,
  serializedCreateReserveSchema,
  serializedReservesOfUserSchema,
  updateReserveSchema,
};