describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get("div").contains("Reports").click();
    cy.get('input[id="email"]').type("fdegracia@msupply.com.pa");
    cy.get('input[id="password"]').type("12345");
    cy.get("button").contains("Iniciar Sesión").click();
    cy.get("td").contains("1000").click();

    cy.get('svg[data-testid="MenuIcon"]').click();
    cy.get("div").contains("Operation Details").click();
    
    cy.get('button[aria-label="Choose date"]').each(($el, index, $list) => {
      cy.wrap($el).click();
      cy.get('button[aria-current="date"]').click({multiple: true});
      cy.get("button").contains("OK").click({multiple: true});
    });
    
    cy.get("button").contains("Continue").click();

  });
});
