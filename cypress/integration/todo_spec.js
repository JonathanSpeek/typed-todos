context("Actions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it(".submit() - submit a form", () => {
    // https://on.cypress.io/submit
    cy.get(".mt-6").find('[type="text"]').type("do laundry{enter}");

    cy.get(".ml-6").should("contain", "do laundry");
  });
});
