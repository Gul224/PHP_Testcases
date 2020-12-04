describe ('Forgot Password',function(){

    //forgot password  
   
    it("Forgot Password C4", function(){
     cy.visit('/')
     cy.get('.zoomInDown > :nth-child(3) > .btn').click()
     cy.get('#resetemail')
     .type('user@phptravels.com')
     cy.get('.input-group-btn > .btn').click()
     cy.get('.alert')
     .should("have.text","New Password sent to user@phptravels.com, Kindly check email")
    })
});

// Invalid email id 
it("Valid email id", function(){
    cy.visit('/')
    cy.get('.zoomInDown > :nth-child(3) > .btn') .click()
    cy.get('#resetemail')
    .type('user@phptrav.com')
    cy.get('.input-group-btn > .btn').click()
    cy.get('.alert')
    .should("have.text","Email Not Found")
   })

     
   // Blank reset email
it("Blank reset email", function(){
    cy.visit('/')
    cy.get('.zoomInDown > :nth-child(3) > .btn').click()
    cy.get('#resetemail')
    .focus()
    .blur()
    .click()
    cy.get('.input-group-btn > .btn').click()
    cy.get('.alert')
    .should("have.text","Email Not Found")
})



