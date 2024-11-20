class EmailValidator {
  constructor() {
    this.minLength = null;
    this.maxLength = null;
  }

  isValid(input) {
    if (typeof input !== 'string') return false;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(input.trim())) return false;

    const localPart = input.split('@')[0];

    if (this.minLength !== null && localPart.length < this.minLength) return false;
    if (this.maxLength !== null && localPart.length > this.maxLength) return false;

    return true;
  }

  setEmailLengthConstraint(min, max = null) {
    this.minLength = min;
    this.maxLength = max;
    return this;
  }
}
export default EmailValidator;
