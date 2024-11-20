class AgeValidator {
  constructor() {
    this.checkAdult = false;
  }

  isValid(input) {
    if (typeof input !== 'number' || Number.isNaN(input)) return false;

    if (this.checkAdult && input < 18) return false;

    return true;
  }

  isAdult() {
    this.checkAdult = true;
    return this;
  }
}

export default AgeValidator;
