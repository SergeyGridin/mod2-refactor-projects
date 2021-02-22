class Application {
  constructor(animal, applicant) {
    this._animal = animal;
    this._applicant = applicant;
  }

  getAnimal() {
    return this._animal;
  }

  getApplicant() {
    return this._applicant;
  }

  isValid() {
    const applicant = this.getApplicant();
    if (applicant.getAge() >= 18) {
      return true;
    }
    return false;
  }
}

module.exports = Application;
