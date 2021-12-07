/// <reference types="cypress" />

describe("get geo features app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should allow using form to get and render geo features", () => {
    cy.get(".sc-kDTinF").contains("Geo Features(51):");
    cy.get(".sc-kDTinF").contains("Geo Features(9):").should("not.exist");

    cy.get('input[name="left"]').clear().type("13.422923798692025");
    cy.get('input[name="bottom"]').clear().type("52.53294470039786");
    cy.get('input[name="right"]').clear().type("13.423245418262722");
    cy.get('input[name="top"]').clear().type("52.533127439393645");

    cy.contains("Submit").click();
    cy.wait(5000);

    cy.get(".sc-kDTinF").contains("Geo Features(51):").should("not.exist");
    cy.get(".sc-kDTinF").contains("Geo Features(9):");
    cy.get(
      ":nth-child(5) > .sc-crHmcD > .react-json-view > .pretty-json-container > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .variable-value > div > .string-value"
    )
      .invoke("text")
      .should("equal", '"way/83381736"');
    cy.get(
      ":nth-child(6) > .sc-crHmcD > .react-json-view > .pretty-json-container > :nth-child(1) > :nth-child(1) > :nth-child(2) > :nth-child(1) > :nth-child(2) > .variable-value > div > .string-value"
    )
      .invoke("text")
      .should("equal", '"way/83381920"');
  });
});
