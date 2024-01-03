describe("Testul automat gmail", () => {
  it("test2", () => {
    cy.visit("https://www.linkedin.com/home");
    cy.get(".nav__button-secondary").click();
    cy.get("#username").type("alinaharas99@gmail.com");
    cy.get("#password").type("password");
    cy.get(".btn__primary--large").click();
    cy.get(":nth-child(4) > .app-aware-link").click();
    cy.get("#search-conversations").type("Pantiru Gabriel").type("{enter}");
    cy.get(".msg-conversation-card__message-snippet").click();
    cy.get(".msg-form__contenteditable").type(
      "Va intereseaza o oferta de un job?"
    );
    cy.get(".msg-form__send-button").click();
  });
});
