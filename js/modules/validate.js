export const validateHolder = name => {
  let valid = true;
  name = name.trim().replace(/\s+/, ' ');
  name = name.split(' ');
  if (name.length === 2) {
    name.forEach(elem => {
      if (elem.search(/[A-Z]/) == -1) {
        valid = false;
      }
    });
  } else {
    valid = false;
  }

  return valid;
};

export const validateNumber = number => {
  number = number.replace(/\s/g, '');
  if (number.search(/\D/) !== -1 || number.length > 16 || number.length < 14) {
    return false;
  } else return true;
};

export const validateCVV = security => {
  if (security.search(/\d{3}/) === -1 || security.length !== 3) {
    return false;
  } else return true;
};
