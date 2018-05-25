/** Validation Logic */
/*
rules = {
  name: [
    {test, message},
    {test, message}
  ],
  title: [
    {test, message},
    {test, message}
  ]
}
formData = {
  name: 'Joey',
  title: 'Dev'
}
*/

export const validate = (formData, rules) => {
  // create key array from rules
  let ruleFields = Object.keys(rules);

  // create default return validation object where each
  // key will be of shape { valid: bool, message: string }
  let validatedFormData = {};

  // loop through the key array and populate return object
  ruleFields.forEach(field => {
    // loop through array of validation rules in order
    for (let i = 0; i < rules[field].length; i++) {
      let valid = rules[field][i].test(formData[field], formData);
      validatedFormData[field] = {
        valid,
        message: rules[field][i].message
      };
      if (!valid) break;
    }
  });

  return validatedFormData;
};

export const isValid = validatedFormData => {
  let validArray = [];
  Object.keys(validatedFormData).forEach(field =>
    validArray.push(validatedFormData[field].valid)
  );
  return validArray.filter(p => !p).length === 0;
};
