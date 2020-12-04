describe ('Clicks on Login', function(){
    // Valid Data
      it("Login Successful C9", function(){
        cy.visit('https://www.phptravels.net/login')
        cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
         .type('user@phptravels.com')
         cy.get(':nth-child(2) > .pure-material-textfield-outlined > span')
         .type('demouser')
         cy.get('#loginfrm > .btn-primary').click
      })
    });
    
    // Invalid email, Valid Password 
it ("invalid Username", function(){
      cy.visit('https://www.phptravels.net/login')
      cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
        .type('user@vels.com')
      cy.get(':nth-child(2) > .pure-material-textfield-outlined > span') 
        .type('demouser')
        cy.get('#loginfrm > .btn-primary').click
      cy.get('.alert')
        .should("have.text", "Invalid Email or Password");
      
    })

      // Valid email, Invalid Password 
  it ("invalid Password", function(){
    cy.visit('https://www.phptravels.net/login')
    cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
      .type('user@phptravels.com')
    cy.get(':nth-child(2) > .pure-material-textfield-outlined > span')
      .type('Gul123')
    cy.get('#loginfrm > .btn-primary').click
    cy.get('.alert')
      .should("have.text", "Invalid Email or Password");
    

  // Invalid email/Password
  it ("invalid login", function(){
    cy.visit('https://www.phptravels.net/login')
    cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
      .type('user@pptravels.com')
    cy.get(':nth-child(2) > .pure-material-textfield-outlined > span')
      .type('Gul123')
    cy.get('#loginfrm > .btn-primary').click
    cy.get('.alert')
      .should("have.text", "Invalid Email or Password");
    
  })


  // Login with one blank field 
  it ("login with one blank field ", function(){
    cy.visit('https://www.phptravels.net/login')
    cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
     .focus()
     .blur()
     .click()
     cy.get('#username-helper-text')
     .should("have.text", "Username is required")
     cy.get(':nth-child(2) > .pure-material-textfield-outlined > span') 
     .type('demouser')
    
  })

// Login with blank fields
// it ("Blank fields ", function(){
//     cy.visit('https://www.phptravels.net/login')
//     cy.get(':nth-child(1) > .pure-material-textfield-outlined > span')
//      .focus()
//      .blur()
//      .click
//     cy.get('#username-helper-text')
//     .should("have.text", "Username is required")
//     cy.get(':nth-child(2) > .pure-material-textfield-outlined > span')  
//      .focus()
//      .blur()
//      .click
//      cy.get('#loginfrm > .btn-primary').click
})
