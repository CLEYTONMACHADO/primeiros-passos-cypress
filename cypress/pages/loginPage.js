class LoginPage{
    selectorList(){
        const selectors = {
            usernameField: "[name='username']",
            passwordField: "[name='password']",
            loginButton: "[type='submit']",
            wrongCredentialAlert: "[role='alert']"
        }

        return selectors
    }

    acessLoginPage(){
        cy.visit('/auth/login')
    }

    loginWithAnyUser(username, password){
        cy.get(this.selectorList().usernameField).type(username)
        cy.get(this.selectorList().passwordField).type(password)
        cy.get(this.selectorList().loginButton).click()

    }

    loginInvalid(){
        cy.get('body').should('contain', 'Invalid credentials')
    }
}

export default LoginPage  // deve colocar para poder exportar a classe, e ela ser chamada em outros lugares.