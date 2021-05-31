/* eslint-disable no-undef */
describe("The App Component", () => {
  it("successfully loads the magic card app", () => {
    cy.visit("/");

    cy.get("[data-cy=loader-wrapper]");

    cy.get("[data-cy=loader-message]").should(
      "contain",
      "Loading magic cards..."
    );

    cy.get(".cards-container").children().should("have.length", 12);

    cy.get(".css-g1d714-ValueContainer").type("Unlimited Edition {enter}");

    cy.get("button").contains("Gather Cards").click();

    cy.get("[data-cy=loader-message]").should(
      "contain",
      "Loading magic cards..."
    );

    cy.wait(2000);

    cy.get(".cards-container").children().should("have.length", 12);

    cy.get(".App").scrollTo("bottom", {
      duration: 2000,
      easing: "swing",
    });

    cy.wait(2000);

    cy.get(":nth-child(3) > .MuiButtonBase-root").click();

    cy.get(".css-g1d714-ValueContainer")
      .contains("Unlimited Edition")
      .should("be.visible");

    cy.get(".cards-container > :nth-child(1) > :nth-child(1)")
      .contains("Unlimited Edition")
      .should("be.visible");
  });
});
