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
    id: yup.string().required(),
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
    owner: yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      email: yup.string().required(),
      phone: yup.string().required(),
    }),
  })
  .required();

const serializedGetItemsSchema = yup.array().of(
  yup.object().shape({
    id: yup.string().required(),
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
    owner: yup.object().shape({
      id: yup.string().required(),
      name: yup.string().required(),
      email: yup.string().required(),
      phone: yup.string().required(),
    }),
  })
);

export {
  createItemSchema,
  serializedGetItemsSchema,
  serializedItemCreatedSchema,
};
