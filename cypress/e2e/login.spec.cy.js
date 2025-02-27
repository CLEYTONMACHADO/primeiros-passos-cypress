import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import Dashboard from '../pages/dashboardPage.js'


const login = new LoginPage()
const dashboard = new Dashboard()


describe('Login HRM Tests', () => {

  it('Login - Fail', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userFail.username,userData.userFail.password)

    login.loginInvalid()

})
  it('Login - Sucesso', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardConfirm()
  })
  


})