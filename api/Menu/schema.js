const Joi = require("joi");

module.exports.options = {
  abortEarly: false,
  convert: true,
  stripUnknown: true,
};

const categoryValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
  }),
};

const itemValidationSchema = {
  body: Joi.object().keys({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
  }),
};

module.exports = { categoryValidationSchema, itemValidationSchema };
