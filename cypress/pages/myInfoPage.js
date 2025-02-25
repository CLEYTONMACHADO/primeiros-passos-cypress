class MyInfoPage{
    selectorList(){
       const selectors = {
        firstNameField: "[name='firstName']",
        lastNameField: "[name='lastName']",
        middleNameField: "[name='middleName']",
        genericItem:".oxd-input--active",
        genericItemDropDow:".oxd-date-wrapper",            //".oxd-select-text",
        genericDrop: ".oxd-select-text",
        closeButton:".--close",
        submitButton: "[type='submit']",
        radioButtonGender:".oxd-radio-wrapper",
        
        

       }
       return selectors 
    }

    fillPersonalDetails(firstName, middleName, lastName){
        cy.get(this.selectorList().firstNameField).clear().type(firstName)
        cy.get(this.selectorList().middleNameField).clear().type(middleName)
        cy.get(this.selectorList().lastNameField).clear().type(lastName)
    }

    fillEmployeeDetails(employeeId,otherId,driverLicenseNumber,licenseExpiryDate,dateOfBirth ){
        cy.get(this.selectorList().genericItem).eq(3).clear().type(employeeId)
        cy.get(this.selectorList().genericItem).eq(4).clear().type(otherId)
        cy.get(this.selectorList().genericItem).eq(5).clear().type(driverLicenseNumber)
        cy.get(this.selectorList().genericItem).eq(6).clear().type(licenseExpiryDate)
        cy.get(this.selectorList().closeButton).click()
        
        cy.get(this.selectorList().genericDrop).eq(0).click()
        cy.contains('Canadian').click()

        cy.get(this.selectorList().genericDrop).eq(1).click()
        cy.contains('Single').click()

        cy.get(this.selectorList().genericItem).eq(7).clear().type(dateOfBirth)
        cy.get(this.selectorList().closeButton).click()

        cy.get(this.selectorList().radioButtonGender).eq(1).click()

        
        
        
        // cy.get(this.selectorList().genericItemDropDow).eq(1).click()
        // cy.contains('Single').click()
        // cy.get(this.selectorList().genericItem).eq(8).clear().type('1984-23-02')
    }

    saveForm(){
        cy.get(this.selectorList().submitButton).eq(0).click({force:true})
        cy.get('body').should('contain', 'Successfully Updated')
        cy.get('.oxd-toast-close')
    }
    
}

export default MyInfoPage
