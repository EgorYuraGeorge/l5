import EmailValidator from './EmailSchema.js';
import AgeValidator from './AgeSchema.js';

class Validator {
  // Метод, создающий валидатор для чисел
  email() {
    return new EmailValidator();
  }

  age() {
    return new AgeValidator();
  }
}

export default Validator;
