const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {

/*   get rootEl() {
    return $('.new-doctor-dialog');
  } */

  constructor() {
    super('.new-doctor-dialog');
  }

  get saveBtn() {
    return this.rootEl.$('.e-footer-content button.e-primary');
  }

  input(param) {
    const selectors = {
      name: '[name="Name"]',
      phone: '#DoctorMobile',
      email: '[name="Email"]',
      education: '[name="Education"]',
      designation: '[name="Designation"]'
    }

    return this.rootEl.$(selectors[param.toLowerCase()]);
  }


}

module.exports = AddDoctorComponent;