const validate = (val, rules, connectedValue) => {
  isValid = true;
  for (let rule in rules) {
    switch (rule) {
      case 'isEmail':
        isValid = isValid && emailValidator(val);
        break;
      case 'minLenght':
        isValid = isValid && minLenghtValidator(val, rules[rule]);
        break;
      case 'equalTo':
        isValid = isValid && equalTolValidator(val, connectedValue[rule]);
        break;
      case 'notEmpty':
        isValid = isValid && notEmptyValidator(val);
        break;
      default:
        isValid = true;
    }
  }
  return isValid;
};

const emailValidator = val => {
  return /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(
    val
  );
};
const minLenghtValidator = (val, minLenght) => {
  return val.length >= minLenght;
};
const equalTolValidator = (val, checkVal) => {
  return val === checkVal;
};

const notEmptyValidator = val => {
  return val.trim() !== '';
};

export default validate;
