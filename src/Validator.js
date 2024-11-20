import EmailValidator from './EmailSchema.js';

class Validator {
  // Метод, создающий валидатор для чисел
  email() {
    return new EmailValidator();
  }
}

export default Validator;
