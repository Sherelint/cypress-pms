describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get('input[id="email"]').type("fdegracia@msupply.com.pa");
    cy.get('input[id="password"]').type("12345");
    cy.get("button").contains("Iniciar Sesión").click();

    cy.get("button").contains("Create Report").click();
    cy.get("h5").contains("Create Report").should("be.visible");

    cy.get('input[id="VesselName"]').type("Hiro");
    //cy.get('input[id="JobPerformed"] > button').click();
    cy.get('div[id="simple-select"]').click();
    cy.get('li[data-value="Refloat"]').click();

    cy.get("button").contains("Continue").click();

    //-------------------//
    cy.get('div[id="VesselType"]').click();
    cy.get('li[data-value="Bulk Carrier"]').click();

    cy.get("input[id=imo]").type("1234567");
    cy.get("input[id=LOA]").type("121");
    cy.get("input[id=Breadth]").type("24");
    cy.get("input[id=DraftAFT]").type("22.4");
    cy.get("input[id=DraftFWD]").type("15.2");
    cy.get('div[id="location"]').click();
    cy.get('li[data-value="1"]').click();
    cy.get('div[id="WeatherConditions"]').click();
    cy.get('li[data-value="1"]').click();
    cy.get('div[id="SeaConditions"]').click();
    cy.get('li[data-value="1"]').click();
    cy.get('div[id="SeaCurrent"]').click();
    cy.get('li[data-value="2"]').click();
    cy.get('input[id="PortOfRegistry"]').type("Balboa");
    cy.get('input[id="Owners"]').type("Michael Chung");
    cy.get("button").contains("Continue").click();

    //----

    cy.get('#PhotoInspection > span > input[type="checkbox"]').check();
    cy.get('#VideoInspection > span > input[type="checkbox"]').check();
    cy.get('#ClassSurvey > span > input[type="checkbox"]').check();
    cy.get("#ClassSurveyType").click();
    cy.get('li[data-value="RINA"]').click();
    cy.get('#Repairs> span > input[type="checkbox"]').check();

    
  });
});
