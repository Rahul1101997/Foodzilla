context('Check Content Of Home Page',()=>{
    beforeEach(() => {
        cy.visit("/");
    });

    it('contains "Foodzilla" in the title',()=>{
        cy.title().should('contain','Foodzilla');
    });

    it('contains "Foodzilla" in the header',()=>{
        cy.get("#headbrand").should("contain", "Foodzilla");
    });
});

context("Check for Register credentials", () => {

    beforeEach(() => {
        cy.visit("/");
    });

    it('contains "Create New Account" in the form',()=>{
        cy.get('[data-cy="header-link-register"]').click();
        cy.get("#registerhead").should("contain", "Create New Account");
    });

    it("Firstname,Email and Password should not be empty", () => {
        cy.get('[data-cy="header-link-register"]').click();
        cy.get("#firstname").type(25);
        cy.get("#lastname").type(' ');
        cy.get("#age").type(' ');
        cy.get("#city").type(' ');
        cy.get("#registeremail").type(' ');
        cy.get("#registerpassword").type(' ');
        cy.get("#btnRegister").click();
        cy.wait(2000);
        cy.get(".MuiAlert-message").should("contain", 'Please filled firstname,email and password');
    });

    it("Firstname length should be more thaen 2", () => {
        cy.get('[data-cy="header-link-register"]').click();
        cy.get("#firstname").type('Ra');
        cy.get("#lastname").type(' ');
        cy.get("#age").type(' ');
        cy.get("#city").type(' ');
        cy.get("#registeremail").type('Rahul@gamil.com');
        cy.get("#registerpassword").type('1234567');
        cy.get("#btnRegister").click();
        cy.wait(2000);
        cy.get(".MuiAlert-message").should("contain", 'Firstname length is too short');
    });

    it("Password length sholud be greater then 6 character", () => {
        cy.get('[data-cy="header-link-register"]').click();
        cy.get("#firstname").type('Rahul');
        cy.get("#lastname").type(' ');
        cy.get("#age").type(' ');
        cy.get("#city").type(' ');
        cy.get("#registeremail").type('Rahul@gamil.com');
        cy.get("#registerpassword").type('12345');
        cy.get("#btnRegister").click();
        cy.wait(2000);
        cy.get(".MuiAlert-message").should("contain", 'Password length sholud be greater then 6 character');
    });

    it("Email should have in proper format", () => {
        cy.get('[data-cy="header-link-register"]').click();
        cy.get("#firstname").type('Rahul');
        cy.get("#lastname").type(' ');
        cy.get("#age").type(' ');
        cy.get("#city").type(' ');
        cy.get("#registeremail").type('Rahul.com');
        cy.get("#registerpassword").type('1234567');
        cy.get("#btnRegister").click();
        cy.wait(2000);
        cy.get(".MuiAlert-message").should("contain", 'invalid email format');
    });

    it("Link refer to login", () => {
        cy.get('[data-cy="header-link-register"]').click();
        cy.get("#refertologin").click();
    });
});



context("Check for login credentials", () => {

    beforeEach(() => {
        cy.visit("/");
    });

        it('contains "Login" in the form',()=>{
        cy.get('[data-cy="header-link-login"]').click();
        cy.get("#loginhead").should("contain", "Login");
    });
   
    it("Email and Password should not be empty", () => {
        cy.get('[data-cy="header-link-login"]').click();
        cy.get("#loginuser").type(" ");
        cy.get("#loginpassword").type(" ");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.get(".MuiAlert-message").should("contain", 'Please Enter Email and Password');
    });
    
    it("Should check for wrong credentials", () => {
        cy.get('[data-cy="header-link-login"]').click();
        cy.get("#loginuser").type("Rahul@gmail");
        cy.get("#loginpassword").type("71548715");
        cy.get("#btnLogin").click();
        cy.wait(1000);
        cy.get(".MuiAlert-message").should("contain", 'Incorrect email or password');
    });

    it("Should check for right credentials", () => {
        cy.get('[data-cy="header-link-login"]').click();
        cy.get("#loginuser").type("Rahul20@gmail.com");
        cy.get("#loginpassword").type("12345");
        cy.get("#btnLogin").click();
        cy.wait(2000);
        cy.get("#h2id").should("contain", "Welcome To Foodzilla");
    });
   

    it("Should check for logout", () => {
        cy.get('[data-cy="header-link-login"]').click();
        cy.get("#loginuser").type("Rahul20@gmail.com");
        cy.get("#loginpassword").type("12345");
        cy.get("#btnLogin").click();
        cy.wait(2000);
        cy.get("#btnLogout").click();
        cy.wait(2000);
        cy.get("#linklogout").click();
        cy.wait(2000);
    });
});

context('Navigation', () => {
    beforeEach(() => {
        cy.visit("/");
    });  

    it('set the viewport size and dimension', () => {
        cy.get('.navbar').should('be.visible')
        cy.viewport(320, 680)
        // the navbar should have collapse since our screen is smaller
        cy.wait(1000);
        cy.get('.navbar-toggler').should('be.visible').click()
        cy.get('.navbar').find('ul').should('be.visible')
    });

    it('can navigate around the website', () => {
        cy.get('[data-cy="header-link-home"]').click();
        cy.get('li:contains("Home")');
        cy.wait(1000);
        cy.get('[data-cy="header-link-register"]').click();
        cy.get('li:contains("Register")');
        cy.wait(1000);
        cy.get('[data-cy="header-link-login"]').click();
        cy.get('li:contains("Login")');
        cy.wait(1000);
        cy.get("#loginuser").type("Rahul20@gmail.com");
        cy.get("#loginpassword").type("12345");
        cy.get("#btnLogin").click();
        cy.wait(2000);
        cy.get('[data-cy="header-link-fav"]').click();
        cy.get('li:contains("Favrouite")');
        cy.wait(3000);
      });
  });
