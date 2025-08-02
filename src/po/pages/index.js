const DashboardPage = require("./dashboard.page");
const DoctorsPage = require("./doctors.page");


/**
 * @param name {'dashboard' | 'doctors'}
 * @returns { DashboardPage | DoctorsPage }
 */

function pages(name) {

  items = {   
    dashboard: new DashboardPage(),
    doctors: new DoctorsPage()
  }

  return items[name.toLowerCase()];
  
}

module.exports = {
  DashboardPage,
  DoctorsPage,
  pages,
}