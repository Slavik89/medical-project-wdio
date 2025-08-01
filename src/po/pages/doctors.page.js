/* const ListHeaderComponent = require("../components/doctors/list-header.component");
const AddDoctorComponent = require("../components/doctors/add-doctor.component"); */
const BasePage = require("./base.page");

const { AddDoctorModal, DoctorListHeader } = require('./../components');

class DoctorsPage extends BasePage {

  constructor() {
    super('/showcase/angular/appointmentplanner/#/doctors');
    this.doctorListHeader = new DoctorListHeader();
    this.addDoctorModal = new AddDoctorModal();
  } 

}

module.exports = DoctorsPage;