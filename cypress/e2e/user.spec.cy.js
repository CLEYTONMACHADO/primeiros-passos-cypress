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
  it.only('Login - Fail', () => {
      login.acessLoginPage()
      login.loginWithAnyUser(userData.userFail.username,userData.userFail.password)

      login.loginInvalid()

    
    
    
    // cy.visit('/auth/login')
    // cy.get(selectorList.usernameField).type(userData.userFail.username)
    // cy.get(selectorList.passwordField).type(userData.userFail.password)
    // cy.get(selectorList.loginButton).click()
    // cy.get(selectorList.wrongCredentialAlert)
  })

})