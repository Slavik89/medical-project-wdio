
const DashboardPage = require('./../po/pages/dashboard.page');
const DoctorsPage = require('./../po/pages/doctors.page');

const dashboardPage = new DashboardPage();
const doctorsPage = new DoctorsPage();

const { pages } = require('./../po');


describe('Medical application', () => {

  beforeEach(async () => {   
    
    // 1. Go to Main page
    // await dashboardPage.open();
    await pages('dashboard').open();

  });

/*   it('Check header', async () => {    

    const textInsideHeader = await dashboardPage.header.getText();
    expect(textInsideHeader).toBe('APPOINTMENT PLANNER');
  }); */

  it('Open modal window for adding a new doctor', async () => {

    // Click on doctors item on the side menu
    // await dashboardPage.sideMenu.item('doctors').click();
    await pages('dashboard').sideMenu.item('doctors').click();

    // Click on add new doctor btn
    // await $('.specialization-types button.e-control').click();
    // await doctorsPage.doctorListHeader.addNewDoctorBtn.click();   
    await pages('doctors').doctorListHeader.addNewDoctorBtn.waitForExist();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.waitForClickable();
    await pages('doctors').doctorListHeader.addNewDoctorBtn.click();

    // await expect($('.new-doctor-dialog')).toBeDisplayed();
    // await browser.pause(4000);
    await expect(pages('doctors').addDoctorModal.rootEl).toBeDisplayed();

  });

  it('Add a new doctor', async () => {   

    // const doctorItem = await $('[routerLink="/doctors"');
    // await doctorItem.click();
    await dashboardPage.sideMenu.item('doctors').click();

    // await $('.specialization-types button.e-control').click();
    await doctorsPage.doctorListHeader.addNewDoctorBtn.click();    

    // await $('.new-doctor-dialog').waitForDisplayed();
    await doctorsPage.addDoctorModal.rootEl.waitForDisplayed();

    await $('[name="Name"]').setValue("John Jackson");
    // await doctorsPage.doctorListHeader.getDoctorSelectors('name').setValue("John Jackson");

    await $('#DoctorMobile').setValue("1111111111111");
    await $('[name="Email"]').setValue("test@test.com");
    await $('[name="Education"]').setValue("Basic");
    await $('[name="Designation"]').setValue("Test");

    await $('.e-footer-content button.e-primary').click();

    await expect($('.new-doctor-dialog')).not.toBeDisplayed();

    await expect($('#Specialist_8').$('.name')).toHaveText('Dr. John Jackson');

  });

})

