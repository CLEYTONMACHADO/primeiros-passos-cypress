import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import Dashboard from '../pages/dashboardPage.js'
import Menu from '../pages/menuPage.js'
import MyInfoPage from '../pages/myInfoPage.js'

const login = new LoginPage()
const dashboard = new Dashboard()
const menu = new Menu()
const myInfoPage = new MyInfoPage()

describe('Orange HRM Tests', () => {

  it('User Info Upadate - Sucesso', () => {
    
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardConfirm()
    menu.acessMyInfo()

    myInfoPage.fillPersonalDetails('Cleyton', 'Machado', 'Siqueira')
    myInfoPage.fillEmployeeDetails('123456', '22222','98758','2025-10-12','1970-22-10')
    myInfoPage.saveForm()
  
  })


})