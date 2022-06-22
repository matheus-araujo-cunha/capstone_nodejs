import * as yup from "yup";

const createItemSchema = yup
  .object()
  .shape({
    model: yup.string().required().max(120),
    brand: yup.string().required().max(100),
    year: yup.number().required().positive().integer(),
    capacity: yup.number().required().positive().integer(),
    location: yup.string().required().max(50),
    dailyPrice: yup.number().required().positive(),
    service: yup.boolean().required(),
    image: yup
      .string()
      .optional()
      .default(
        "https://uploaddeimagens.com.br/images/003/904/917/original/Produto-sem-imagem.jpg?1655305876"
      ),
  })
  .required();

const serializedItemCreatedSchema = yup
  .object()
  .shape({
    itemUuid: yup.string().required(),
    model: yup.string().required(),
    brand: yup.string().required(),
    year: yup.number().required().positive().integer(),
    createdAt: yup.string().required(),
    updatedAt: yup.string().required(),
    capacity: yup.number().required().positive().integer(),
    location: yup.string().required(),
    dailyPrice: yup.number().required().positive(),
    service: yup.boolean().required(),
    image: yup.string().required(),
    average:yup.number().required(),
    owner: yup.object().shape({
      userUuid: yup.string().required(),
      name: yup.string().required(),
      email: yup.string().required(),
      phone: yup.string().required(),
    }),
  })
  .required();

const serializedGetItemsSchema = yup.array().of(
  yup.object().shape({
    itemUuid: yup.string().required(),
    model: yup.string().required(),
    brand: yup.string().required(),
    year: yup.number().required().positive().integer(),
    createdAt: yup.string().required(),
    updatedAt: yup.string().required(),
    capacity: yup.number().required().positive().integer(),
    location: yup.string().required(),
    dailyPrice: yup.number().required().positive(),
    service: yup.boolean().required(),
    image: yup.string().required(),
    average:yup.number().required(),
    owner: yup.object().shape({
      userUuid: yup.string().required(),
      name: yup.string().required(),
      email: yup.string().required(),
      phone: yup.string().required(),
    }),
  })
);

const updateItemSchema = yup
  .object()
  .shape({
    model: yup.string().optional(),
    brand: yup.string().optional(),
    year: yup.number().positive().integer().optional(),
    capacity: yup.number().positive().integer().optional(),
    location: yup.string().optional(),
    dailyPrice: yup.number().positive().optional(),
    service: yup.boolean().optional(),
    image: yup.string().optional(),
  })
  .required();

export {
  createItemSchema,
  serializedGetItemsSchema,
  serializedItemCreatedSchema,
  updateItemSchema,
};
