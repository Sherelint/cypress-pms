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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="20"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="20"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="20"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="20"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="20"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="20"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="30"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get('li[data-value="10"]').click();
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
    cy.get("#BowThrusterNA").click();

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
    cy.get("#BowThrusterNA").click();

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
    //-------------------//

  });
});
