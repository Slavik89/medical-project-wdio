const BaseComponent = require("../common/base.component");

class AddDoctorComponent extends BaseComponent {

/*   get rootEl() {
    return $('.new-doctor-dialog');
  } */

  constructor() {
    super('.new-doctor-dialog');
  }

}

module.exports = AddDoctorComponent;