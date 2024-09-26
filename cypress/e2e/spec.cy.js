describe("template spec", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173/");
    cy.get("div").contains("Reports").click();
    cy.get('input[id="email"]').type("fdegracia@msupply.com.pa");
    cy.get('input[id="password"]').type("12345");
    cy.get("button").contains("Iniciar Sesión").click();

    cy.get("button").contains("Create Report").click();
    cy.get("h5").contains("Create Report").should("be.visible");

    cy.get('input[id="VesselName"]').type("Hiro");

    cy.get('svg[data-testid="CalendarIcon"]').click();
    cy.get('.MuiPickersDay-today').click();

    cy.get('div[id="simple-select"]').click();
    cy.get('li[data-value="Refloat"]').click();

    cy.get("button").contains("Continue").click();

    //-------------------//
    cy.get('div[id="VesselType"]').click();
    cy.get('li[data-value="Bulk Carrier"]').click();

    cy.get("input[id=IMO]").type("1234567");
    cy.get("input[id=LOA]").type("121");
    cy.get("input[id=Breadth]").type("24");
    cy.get("input[id=DraftAFT]").type("22.4");
    cy.get("input[id=DraftFWD]").type("15.2");
    cy.get('div[id="location"]').click();
    cy.get('li[data-value="Balboa Anchorage"]').click();
    cy.get('div[id="WeatherConditions"]').click();
    cy.get('li[data-value="Calm"]').click();
    cy.get('div[id="SeaConditions"]').click();
    cy.get('li[data-value="Calm"]').click();
    cy.get('div[id="SeaCurrent"]').click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get('input[id="PortOfRegistry"]').type("Balboa");
    cy.get('input[id="Owners"]').type("Michael Chung");
    cy.get("button").contains("Continue").click();

    //-------------------//

    cy.get('#PhotoInspection > span > input[type="checkbox"]').check();
    cy.get('#VideoInspection > span > input[type="checkbox"]').check();
    cy.get('#ClassSurvey > span > input[type="checkbox"]').check();
    cy.get("#ClassSurveyType").click();
    cy.get('li[data-value="RINA"]').click();
    cy.get('#Repairs> span > input[type="checkbox"]').check();

    cy.get('#BowArea> span > input[type="checkbox"]').check();
    cy.get('#Transducers> span > input[type="checkbox"]').check();
    cy.get('#Thrusters> span > input[type="checkbox"]').check();
    cy.get('#VerticalSides> span > input[type="checkbox"]').check();
    cy.get('#SeaChestGrids> span > input[type="checkbox"]').check();
    cy.get('#SternFrame> span > input[type="checkbox"]').check();
    cy.get('#PropellerPolishing> span > input[type="checkbox"]').check();
    cy.get('#BilgeKeels> span > input[type="checkbox"]').check();
    cy.get('#FlatBottom> span > input[type="checkbox"]').check();
    cy.get('#RopeGuard> span > input[type="checkbox"]').check();
    cy.get('#Rudder> span > input[type="checkbox"]').check();
    cy.get('#Other> span > input[type="checkbox"]').check();
    cy.get("button").contains("Continue").click();

    //-------------------//

    cy.get("#Remarks1").type("All checks working properly");
    cy.get("button").contains("Continue").click();

    //-------------------//

    cy.get("#bow-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bow-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#bow-port-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-bow-port-side").type("110");

    cy.get("#bow-flat-bottom-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bow-flat-bottom-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#bow-flat-bottom-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-bow-flat-bottom").type("105");

    cy.get("#bow-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bow-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#bow-stb-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-bow-stb-side-bottom").type("100");

    cy.get("button").contains("Midship").click();

    cy.get("#midship-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#midship-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#midship-port-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-midship-port-side").type("110");

    cy.get("#midship-flat-bottom-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#midship-flat-bottom-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#midship-flat-bottom-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-midship-flat-bottom").type("105");

    cy.get("#midship-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#midship-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#midship-stb-side-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-midship-stb-side-bottom").type("100");

    cy.get("button").contains("Stern").click();

    cy.get("#stern-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#stern-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#stern-port-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-stern-port-side").type("110");

    cy.get("#stern-flat-bottom-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#stern-flat-bottom-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#stern-flat-bottom-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-stern-flat-bottom").type("105");

    cy.get("#stern-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#stern-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#stern-stb-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-stern-stb-side-bottom").type("100");

    cy.get("button").contains("Bilge Keels").click();

    cy.get("#bilge-keels-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-port-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-bilge-keels-port-side").type("110");

    cy.get("#bilge-keels-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-stb-side-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-bilge-keels-stb-side").type("100");

    cy.get("button").contains("Sea Chest Grids").click();

    cy.get("#sea-chest-grids-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#sea-chest-grids-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#sea-chest-grids-port-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-sea-chest-grids-port-side").type("110");

    cy.get("button").contains("Propeller").click();

    cy.get("#propeller-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#propeller-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#propeller-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-propeller").type("110");

    cy.get("button").contains("Rudder").click();

    cy.get("#rudder-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#rudder-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#rudder-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-rudder").type("110");

    cy.get("button").contains("Continue").click();
    //-------------------//
    cy.get("#remarks2").type("All tabs working properly");
    cy.get("button").contains("Continue").click();

    //-------------------//

    cy.get("#StarboardSide").click();
    cy.get('li[data-value="clean"]').click();

    cy.get("#PortSide").click();
    cy.get('li[data-value="Dirty"]').click();

    cy.get("#FlatBottom").click();
    cy.get('li[data-value="Dirty"]').click();

    cy.get("button").contains("Continue").click();

    //-------------------//
    cy.get("#Remarks3").type("All sketches are working properly");
    cy.get("button").contains("Continue").click();

    //-------------------//
    cy.get("#bow-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bow-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#bow-port-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-bow-port-side").type("110");

    cy.get("#bow-flat-bottom-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bow-flat-bottom-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#bow-flat-bottom-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-bow-flat-bottom").type("105");

    cy.get("#bow-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bow-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#bow-stb-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-bow-stb-side-bottom").type("100");

    cy.get("button").contains("Midship").click();

    cy.get("#midship-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#midship-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#midship-port-side-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-midship-port-side").type("110");

    cy.get("#midship-flat-bottom-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#midship-flat-bottom-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#midship-flat-bottom-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-midship-flat-bottom").type("105");

    cy.get("#midship-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#midship-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#midship-stb-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-midship-stb-side-bottom").type("100");

    cy.get("button").contains("Stern").click();

    cy.get("#stern-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#stern-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#stern-port-side-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-stern-port-side").type("110");

    cy.get("#stern-flat-bottom-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#stern-flat-bottom-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#stern-flat-bottom-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-stern-flat-bottom").type("105");

    cy.get("#stern-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#stern-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#stern-stb-side-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-stern-stb-side-bottom").type("100");

    cy.get("button").contains("Bilge Keels").click();

    cy.get("#bilge-keels-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-port-side-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-bilge-keels-port-side").type("110");

    cy.get("#bilge-keels-stb-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-stb-side-area").click();
    cy.get('li[data-value="30%"]').click();
    cy.get("body").click();
    cy.get("#bilge-keels-stb-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-bilge-keels-stb-side").type("100");

    cy.get("button").contains("Sea Chest Grids").click();

    cy.get("#sea-chest-grids-port-side-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#sea-chest-grids-port-side-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#sea-chest-grids-port-side-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-sea-chest-grids-port-side").type("110");

    cy.get("button").contains("Propeller").click();

    cy.get("#propeller-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#propeller-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#propeller-severity").click();
    cy.get('li[data-value="Light"]').click();
    cy.get("body").click();
    cy.get("#height-propeller").type("110");

    cy.get("button").contains("Rudder").click();

    cy.get("#rudder-type").click();
    cy.get('li[data-value="Barnacles"]').click();
    cy.get('li[data-value="Algae"]').click();
    cy.get("body").click();
    cy.get("#rudder-area").click();
    cy.get('li[data-value="40%"]').click();
    cy.get("body").click();
    cy.get("#rudder-severity").click();
    cy.get('li[data-value="Moderate"]').click();
    cy.get("body").click();
    cy.get("#height-rudder").type("110");

    cy.get("button").contains("Continue").click();

    cy.get("#PostCleaningInspection").click();
    cy.get('li[data-value="false"]').click();

    cy.get("#AllAreasSuccessfullyCleaned").click();
    cy.get('li[data-value="true"]').click();

    cy.get("#DamagedFoundAndReportedToMaster").click();
    cy.get('li[data-value="false"]').click();

    cy.get("#CheckedInspectionPhoto").click();
    cy.get('li[data-value="false"]').click();

    cy.get("button").contains("Continue").click();
    //-------------------//

    cy.get("#Remarks4").type("All post cleaning are working properly");
    cy.get("button").contains("Continue").click();

    //-------------------//
    cy.get("#StarboardSideAC").click();
    cy.get('li[data-value="clean"]').click();

    cy.get("#PortSideAC").click();
    cy.get('li[data-value="Dirty"]').click();

    cy.get("#FlatBottomAC").click();
    cy.get('li[data-value="Dirty"]').click();

    cy.get("button").contains("Continue").click();

    //-------------------//
    cy.get("#Remarks5").type("All sketches working properly");
    cy.get("button").contains("Continue").click();

    //-------------------//

    cy.get("#CoatingType").click();
    cy.get('li[data-value="Conventional"]').click();

    cy.get("#CoatingCondition").click();
    cy.get('li[data-value="Satisfactory"]').click();
    //-------------------//

    cy.get("#bow-port-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#bow-port-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#bow-port-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//
    cy.get("#bow-flat-bottom-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#bow-flat-bottom-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#bow-flat-bottom-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//

    cy.get("#bow-stb-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#bow-stb-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#bow-stb-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();
    cy.get("button").contains("Midship").click();

    //-------------------//

    cy.get("#midship-port-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#midship-port-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#midship-port-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//

    cy.get("#midship-flat-bottom-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#midship-flat-bottom-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#midship-flat-bottom-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//

    cy.get("#midship-stb-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#midship-stb-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#midship-stb-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();
    cy.get("button").contains("Stern").click();
    //-------------------//

    cy.get("#stern-port-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#stern-port-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#stern-port-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//

    cy.get("#stern-flat-bottom-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#stern-flat-bottom-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#stern-flat-bottom-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//

    cy.get("#stern-stb-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#stern-stb-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#stern-stb-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();
    cy.get("button").contains("Bilge Keels").click();

    //-------------------//
    cy.get("#bilge-keels-port-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#bilge-keels-port-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#bilge-keels-port-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//

    cy.get("#bilge-keels-stb-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#bilge-keels-stb-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#bilge-keels-stb-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();
    cy.get("button").contains("Sea Chest Grids").click();

    //-------------------//
    cy.get("#sea-chest-grids-port-side-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#sea-chest-grids-port-side-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#sea-chest-grids-port-side-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();
    cy.get("button").contains("Propeller").click();

    //-------------------//

    cy.get("#propeller-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#propeller-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#propeller-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();
    cy.get("button").contains("Rudder").click();

    //-------------------//

    cy.get("#rudder-type").click();
    cy.get("li[data-value='Scratches']").click();
    cy.get("li[data-value='Corrosion']").click();
    cy.get("body").click();

    cy.get("#rudder-area").click();
    cy.get("li[data-value='40%']").click();

    cy.get("#rudder-general-condition").click();
    cy.get("li[data-value='Satisfactory']").click();

    //-------------------//

    cy.get("button").contains("Continue").click();

    //-------------------//

    cy.get("#Remarks6").type("All paint damages are working properly");

    //-------------------//

    cy.get("button").contains("Continue").click();

    //-------------------//

    cy.get("div").contains("Bow").click();

    cy.get("#ShellPlateGeneral").click();
    cy.get("li[data-value='Satisfactory']").click();

    cy.get("#ShellPlateCorrosion").click();
    cy.get("li[data-value='false']").click();

    cy.get("#ShellPlateIndent").click();
    cy.get("li[data-value='false']").click();

    cy.get("button").contains("Welding Seam").click();
    cy.get("#WeldingSeamGeneral").click();
    cy.get("li[data-value='Satisfactory']").click();

    cy.get("#WeldingSeamCorrosion").click();
    cy.get("li[data-value='true']").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks4").type("bow ok");

    //-------------------//

    cy.get("div").contains("Vertical Side Port Side").click();

    cy.get("#ShellPlateGeneral").click();
    cy.get("li[data-value='Satisfactory']").click();

    cy.get("#ShellPlateCorrosion").click();
    cy.get("li[data-value='Forward']").click();

    cy.get("#ShellPlateIndent").click();
    cy.get("li[data-value='false']").click();

    cy.get("button").contains("Welding Seam").click();
    cy.get("#WeldingSeamGeneral").click();
    cy.get("li[data-value='Satisfactory']").click();

    cy.get("#WeldingSeamCorrosion").click();
    cy.get("li[data-value='true']").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks4").type("vertical port side damaged");

    //-------------------//

    cy.get("div").contains("Vertical Side Starboard Side").click();

    cy.get("#ShellPlateGeneral").click();
    cy.get("li[data-value='Satisfactory']").click();

    cy.get("#ShellPlateCorrosion").click();
    cy.get("li[data-value='Aft']").click();

    cy.get("#ShellPlateIndent").click();
    cy.get("li[data-value='false']").click();

    cy.get("button").contains("Welding Seam").click();
    cy.get("#WeldingSeamGeneral").click();
    cy.get("li[data-value='Satisfactory']").click();

    cy.get("#WeldingSeamCorrosion").click();
    cy.get("li[data-value='true']").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks4").type("vertical port side damaged");

    //-------------------//
    cy.get("div").contains("Bilge Keels").click();

    cy.get("#GeneralType").click();
    cy.get("li[data-value='split']").click();

    cy.get("#NoSections").type("2");

    cy.get("button").contains("Port Side").click();
    cy.get("#DamagesFound").click();
    cy.get("li[data-value='true']").click();

    cy.get("#Anodes").click();

    cy.get("#AnodesRemaining").type("50");
    cy.get("#Below").click();

    //-------------------//
    cy.get("div").contains("Sea Chest Grids").click();
    cy.get("input[value=Hinged]").click();
    cy.get("#Total").type("2");
    cy.get("#FlatBottom").type("3");
    cy.get("#PortSide").type("4");
    cy.get("#StbSide").type("5");

    cy.get("input[value=Satisfactory]").click();
    cy.get("input[value=Intact]").click();

    //-------------------//
    cy.get("div").contains("Bow Thruster").click();
    //cy.get("#BowThrusterNA").click();

    cy.get("input[value=Hinged]").click();
    cy.get("#VisibleYes").click();

    cy.get("#Anodes").type("4");
    cy.get("#StainlessFalse").click();
    cy.get("#BracketTrue").click();
    cy.get("#BladesTrue").click();
    cy.get("#GearFalse").click();
    cy.get("#OilFalse").click();
    cy.get("#Welded").click();

    cy.get("button").contains("Bow Thruster 2").click();
    //cy.get("#BowThrusterNA").click();

    cy.get("input[value=Hinged]").click();
    cy.get("#VisibleYes").click();

    cy.get("#Anodes").type("4");
    cy.get("#StainlessTrue").click();
    cy.get("#BracketFalse").click();
    cy.get("#BladesTrue").click();
    cy.get("#GearFalse").click();
    cy.get("#OilFalse").click();
    cy.get("#Bolted").click();
    //-------------------//

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("bow thruster not ok");
    cy.get("div").contains("Stern Thruster").click();

    //-------------------//

    //cy.get("#SternThrusterNA").click();

    cy.get("input[value=Hinged]").click();
    cy.get("#STVDtrue").click();

    cy.get("#STAnodes").type("3");
    cy.get("#STAMissing").click();
    cy.get("#STARemaining").type("50");
    cy.get("#StainlessFalse").click();
    cy.get("#BracketTrue").click();
    cy.get("#BladesTrue").click();
    cy.get("#GearFalse").click();
    cy.get("#OilFalse").click();
    cy.get("#Welded").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("stern thruster 1 not ok");

    cy.get("button").contains("Stern Thruster 2").click();

    //cy.get("#SternThrusterNA").click();

    cy.get("input[value=Hinged]").click();
    cy.get("#ST2VDfalse").click();

    cy.get("#ST2Anodes").type("3");
    cy.get("#ST2AMissing").click();
    cy.get("#ST2ANA").click();
    // cy.get("#ST2ARemaining").type("50");
    cy.get("#StainlessFalse").click();
    cy.get("#BracketTrue").click();
    cy.get("#BladesTrue").click();
    cy.get("#GearFalse").click();
    cy.get("#OilFalse").click();
    cy.get("#Welded").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Stern thruster 2 not ok");

    //-------------------//
    cy.get("div").contains("Transducers").click();
    cy.get("#ESLBow").click();
    cy.get("#TransducerVDTrue").click();
    cy.get("#SLAlt").click();
    cy.get("#SLTrue").click();
    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Transducers not ok");

    //-------------------//

    cy.get("div").contains("Cathodic Protection System").click();
    cy.get("#SacrificialRemainingNA").click();
    cy.get("#ICCPFalse").click();
    cy.get("#ICCPVDTrue").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Cathodic Protection System not ok");

    //-------------------//

    cy.get("div").contains("Rope Guard (s)").click();
    cy.get("#RGF").click();
    cy.get("#RGW").click();
    cy.get("#RGWSPoor").click();
    cy.get("#RGVTrue").click();
    cy.get("#RGRCWelded").click();
    cy.get("#RGReadingHoleTop").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Rope Guard not ok");

    //-------------------//
    cy.get("div").contains("Tail Shaft (s)").click();
    cy.get("#TSGCFair").click();
    cy.get("#TSBCPoor").click();
    cy.get("#TSOFalse").click();
    cy.get("#Present").click();
    cy.get("#WearDownTrue").click();
    cy.get("#TopReading").type("20");
    cy.get("#BottomReading").type("30");
    cy.get("#TSSecondShaftFalse").click();
    cy.get("#SSTopReading").type("20");
    cy.get("#SSBottomReading").type("30");

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Tail Shaft not ok");

    //-------------------//

    cy.get("div").contains("Propeller (s)").click();
    cy.get("#Quantity").type("2");
    cy.get("#TypePitch").click();
    cy.get("#NoOfBlades").type("4");
    cy.get("#PConditionSatisfactory").click();
    cy.get("#PropellerDiameter").type("1");
    cy.get("#BAIntactTrue").click();
    cy.get("#BossConePoor").click();
    cy.get("#CCoversIntactFalse").click();
    cy.get("#BAIntactTrue").click();

    cy.get("button").contains("Pressure Side").click();
    cy.get("#BeforePolish").find("#1").type("A");
    cy.get("#BeforePolish").find("#2").type("B");
    cy.get("#BeforePolish").find("#3").type("C");
    cy.get("#BeforePolish").find("#4").type("D");
    cy.get("#BeforePolish").find("#5").type("E");
    cy.get("#BeforePolish").find("#6").type("F");

    cy.get("#AfterPolish").find("#1").type("A");
    cy.get("#AfterPolish").find("#2").type("B");
    cy.get("#AfterPolish").find("#3").type("C");
    cy.get("#AfterPolish").find("#4").type("D");
    cy.get("#AfterPolish").find("#5").type("E");
    cy.get("#AfterPolish").find("#6").type("F");

    cy.get("button").contains("Suction Side").click();
    cy.get("#BeforePolish").find("#1").type("A");
    cy.get("#BeforePolish").find("#2").type("B");
    cy.get("#BeforePolish").find("#3").type("C");
    cy.get("#BeforePolish").find("#4").type("D");
    cy.get("#BeforePolish").find("#5").type("E");
    cy.get("#BeforePolish").find("#6").type("F");

    cy.get("#AfterPolish").find("#1").type("A");
    cy.get("#AfterPolish").find("#2").type("B");
    cy.get("#AfterPolish").find("#3").type("C");
    cy.get("#AfterPolish").find("#4").type("D");
    cy.get("#AfterPolish").find("#5").type("E");
    cy.get("#AfterPolish").find("#6").type("F");

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Propeller not ok");

    //-------------------//
    cy.get("div").contains("Blade Condition").click();
    cy.get("#Blade6NoItemsOfConcern").click();
    cy.get("#Blade1Pitting").click();
    cy.get("#Blade2Cavitation").click();
    cy.get("#Blade3Crack").click();
    cy.get("#Blade4Nick").click();
    cy.get("#Blade5Dent").click();
    cy.get("#Blade6Undulation").click();
    cy.get("#Blade3Dent").click();
    cy.get("#Blade4SerratedEdge").click();

    //-------------------//

    cy.get("button").contains("Suction Side").click();

    cy.get("#Blade6NoItemsOfConcern").click();
    cy.get("#Blade1Pitting").click();
    cy.get("#Blade2Cavitation").click();
    cy.get("#Blade3Crack").click();
    cy.get("#Blade4Nick").click();
    cy.get("#Blade5Dent").click();
    cy.get("#Blade6Undulation").click();
    cy.get("#Blade3Dent").click();
    cy.get("#Blade4SerratedEdge").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Blades  not ok");

    //-------------------//

    cy.get("div").contains("Rudder").click();
    cy.get("#RudderPlateCondition").find("input[value=Satisfactory]").click();
    cy.get("#RudderWeldingCondition").find("input[value=Satisfactory]").click();
    cy.get("#RudderCornerPlates").find("input[value=Satisfactory]").click();
    cy.get("#RudderHorn").find("input[value=Satisfactory]").click();
    cy.get("#RudderAccessCoverPlate").find("input[value=Bolted]").click();
    cy.get("#RudderSkeg").find("input[value=Satisfactory]").click();
    cy.get("#RudderVisibleDamage").find("input[value=Missing]").click();
    cy.get("#RudderRemaining").type("50");
    cy.get("#RudderDrainPlugs").find("input[value=Intact]").click();

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Rudder not ok");

    //-------------------//

    cy.get("div").contains("Rudder Clearances").click();
    cy.get("#MeasurementTaken").find("input[value=No]").click();
    cy.get("#forward").type("10");
    cy.get("#starboard").type("10");
    cy.get("#aft").type("10");
    cy.get("#portside").type("10");

    cy.get("button").contains("Remarks").click();
    cy.get("#Remarks").type("Rudder Clearances not ok");

    //-------------------//

    cy.get("button").contains("Continue").click();
  });
});
