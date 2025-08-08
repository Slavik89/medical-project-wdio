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

}

module.exports = ListHeaderComponent;