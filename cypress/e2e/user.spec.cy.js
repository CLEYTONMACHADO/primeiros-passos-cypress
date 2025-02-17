import userData from '../fixtures/userData.json'
import LoginPage from '../pages/loginPage.js'
import Dashboard from '../pages/dashboardPage.js'
import Menu from '../pages/menuPage.js'

const login = new LoginPage()
const dashboard = new Dashboard()
const menu = new Menu()

describe('Orange HRM Tests', () => {

  const selectorList = {
    
    //dashboardGrid: ".orangehrm-dashboard-grid",
    // myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericItem:".oxd-input--active",
    genericItemDropDow:".oxd-select-text",
    closeButton:".--close",
    submitButton: "[type='submit']",
    radioButtonGender:".oxd-radio-wrapper"
    
  }

  it.only('User Info Upadate - Sucesso', () => {
    login.acessLoginPage()
    login.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboard.checkDashboardConfirm()
    menu.acessMyInfo()
    
   
    // cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
    // cy.get(selectorList.dashboardGrid)
    // cy.get(selectorList.myInfoButton).click()
    // cy.get(selectorList.firstNameField).clear().type('Primeiro Nome')
    // cy.get(selectorList.lastNameField).clear().type('Nick Name')
    // cy.get(selectorList.genericItem).eq(3).clear().type('0123')
    // cy.get(selectorList.genericItem).eq(4).clear().type('321')
    // cy.get(selectorList.genericItem).eq(5).clear().type('1234')
    // cy.get(selectorList.genericItem).eq(6).clear().type('2025-14-02')
    // cy.get(selectorList.closeButton).click()
    // cy.get(selectorList.genericItemDropDow).eq(0).click()
    // cy.contains('Brazilian').click()
    // cy.get(selectorList.genericItemDropDow).eq(1).click()
    // cy.contains('Single').click()
    // cy.get(selectorList.genericItem).eq(8).clear().type('1984-23-02')
    // cy.get(selectorList.closeButton).click()
    // cy.get(selectorList.radioButtonGender).eq(1).click() //muda o radio button para female
    
    // cy.get(selectorList.submitButton).eq(0).click()
    // cy.get('.oxd-toast-close')


  })
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorList.usernameField).type(userData.userFail.username)
    cy.get(selectorList.passwordField).type(userData.userFail.password)
    cy.get(selectorList.loginButton).click()
    cy.get(selectorList.wrongCredentialAlert)
  })

  //   it('Login - Sucesso', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("[name='username']").type('Admin')
  //   cy.get("[name='password']").type('admin123')
  //   cy.get("[type='submit']").click()
  //   cy.get('.oxd-topbar-header-breadcrumb > .oxd-text').contains('Dashboard')
  // })
  // it('Login - Fail', () => {
  //   cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
  //   cy.get("[name='username']").type('Admin123')
  //   cy.get("[name='password']").type('admin1234')
  //   cy.get("[type='submit']").click()
  //   cy.get('.oxd-alert')

    
  // })



})