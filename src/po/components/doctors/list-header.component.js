const BaseComponent = require("../common/base.component");

class ListHeaderComponent extends BaseComponent {
  
/*   get rootEl() {
    return $('.specialization-types');
  } */

  constructor() {
    super('.specialization-types');
  }  

  get addNewDoctorBtn() {
    return $('button.e-control');
  }

  getDoctorSelectors(param) {
    const selectors = {
      name: '[name="Name"]',
      schedule: '[routerLink="/calendar"]',
      doctors: '[routerLink="/doctors"]',
    }

    return this.rootEl.$(selectors[param.toLowerCase()]);
  }
}

module.exports = ListHeaderComponent;