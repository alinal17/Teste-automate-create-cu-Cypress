describe("Suita1", () => {
  it("test1", () => {
    cy.visit("https://www.google.com/");

    // Adaugă o pauză de 2 secunde înainte de click
    cy.wait(2000);

    cy.get("#L2AGLb").click();
    cy.get(".gLFyf").type("vlog de it").type("{enter}");
    cy.get("#result-stats").should("exist");
  });
});
