describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get("div").contains("Reports").click();
    cy.get('input[id="email"]').type("fdegracia@msupply.com.pa");
    cy.get('input[id="password"]').type("12345");
    cy.get("button").contains("Iniciar Sesión").click();

    cy.get("button").contains("Create Report").click();
    cy.get('svg[data-testid="MenuIcon"]').click();
    cy.get("div").contains("Operation Details").click();

    cy.get("button").contains('svg[data-testid="CalendarIcon"]').click()
    
    
    cy.get(".MuiPickersDay-today").click();
    //() => {

    const randomnumber = Math.floor(Math.random() * 30) + 1;
    const randomstring = randomnumber.toString();

    const randomHour = Math.floor(Math.random() * 12) + 1;
    const HourString = randomHour.toString().padStart(2, "0");

    const randomIndex = Math.floor(Math.random() * 12);
    const randomMinutes = randomIndex * 5;
    const MinutesString = randomMinutes.toString().padStart(2, "0");

    const isPM = Math.random() < 0.5;
    const period = isPM ? "PM" : "AM";

    cy.get("button").contains(randomstring).click();
    cy.get("li").contains(HourString).click();
    cy.get("li").contains(MinutesString).click();
    cy.get("li").contains(period).click();
    cy.get("button").contains("OK").click();
    //});

    cy.get("button").contains("Continue").click();
  });
});
