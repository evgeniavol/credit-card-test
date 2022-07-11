import {
  validateHolder,
  validateNumber,
  validateCVV
} from './validate';

describe('Проверка валидатора имени владельца карты', () => {
  it('Корректная отработка правильного имени', () => {
    expect(validateHolder('IVAN PETROV')).toBe(true);
    expect(validateHolder(' PETROV  IVAN ')).toBe(true);
    expect(validateHolder('IVAN  PETROV')).toBe(true);
  });

  it('Корректная отработка неправильного имени', () => {
    expect(validateHolder('ИВАНОВ ВЯЧЕСЛАВ')).toBeFalsy();
    expect(validateHolder('UNKNOWN')).toBe(false);
    expect(validateHolder('IVAN 20')).toBeFalsy();
  });
});

describe('Проверка валидатора номера карты', () => {
  it('Корректная отработка правильного номера', () => {
    expect(validateNumber('1234 1234 1234 1234')).toBe(true);
    expect(validateNumber('1234 123456 1234')).toBe(true);
  });

  it('Корректная отработка неправильного номера', () => {
    expect(validateNumber('1 1234 1234 1234')).toBeFalsy();
    expect(validateNumber('123 123 123 123')).toBe(false);
    expect(validateNumber('1234 A12A 1234 1234')).toBe(false);
    expect(validateNumber('1234 1234 1234')).toBeFalsy();
    expect(validateNumber('1234 1234 1234 1234 1234')).toBeFalsy();
    expect(validateNumber('1234 1,34 1234 1234 1234')).toBeFalsy();
  });
});

describe('Проверка валидатора CVV', () => {
  it('Корректная отработка правильного CVV', () => {
    expect(validateCVV('123')).toBe(true);
  });

  it('Корректная отработка неправильного CVV', () => {
    expect(validateCVV('1')).toBeFalsy();
    expect(validateCVV('12')).toBe(false);
    expect(validateCVV('1234')).toBe(false);
    expect(validateCVV('A12')).toBeFalsy();
    expect(validateCVV('1,2')).toBeFalsy();
  });
});
