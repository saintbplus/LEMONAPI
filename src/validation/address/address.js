const Joi = require('@hapi/joi');
// change regex using [^] for restrict characters
module.exports.addressValidate = data => {
  const schema = Joi.object({
    address1: Joi.string()
      .max(100)
      .regex(/[\u0E00-\u0E7Fa-zA-Z \d]/)
      .required(),
    address2: Joi.string()
      .max(100)
      .empty('')
      .regex(/[\u0E00-\u0E7Fa-zA-Z \d]/),
    subDistrict: Joi.string()
      .max(150)
      .regex(/[\u0E00-\u0E7Fa-zA-Z]/)
      .required(),
    district: Joi.string()
      .max(150)
      .regex(/[\u0E00-\u0E7Fa-zA-Z]/)
      .required(),
    province: Joi.string()
      .max(150)
      .regex(/[\u0E00-\u0E7Fa-zA-Z]/)
      .required(),
    postcode: Joi.string()
      .regex(/[^0]\d{4}/)
      .required()
  });

  return schema.validate(data)
}

module.exports.addressIsUndefined = data => {
  const schema = Joi.object({
    address1: Joi.string().max(0).empty(''),
    address2: Joi.string().max(0).empty(''),
    subDistrict: Joi.string().max(0).empty(''),
    district: Joi.string().max(0).empty(''),
    province: Joi.string().max(0).empty(''),
    postcode: Joi.string().max(0).empty(''),
  })
  const {error} = schema.validate(data);
  if (!error) return true;
  return false;
}