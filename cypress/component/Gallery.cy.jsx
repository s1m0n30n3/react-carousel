import React from "react";
import { Gallery } from "../../src/lib/index";

import slide1 from "../../src/assets/images/slide-1.jpg";
import slide2 from "../../src/assets/images/slide-2.jpg";
import slide3 from "../../src/assets/images/slide-3.jpg";
import slide4 from "../../src/assets/images/slide-4.jpg";
import slide5 from "../../src/assets/images/slide-5.png";
import slide6 from "../../src/assets/images/slide-6.jpg";

describe("<Gallery /> without bounded navigation", () => {
  beforeEach(() => {
    cy.mount(
      <Gallery
        mode="return"
        navigationPosition="bottom"
        dotsNavigation={{
          areDotsSet: true,
          dotSize: 12,
          dotColor: "black",
          dotRadius: 6,
          dotSpacing: 2,
          position: "bottomOutside",
        }}
        navigationType="arrowsAndDots"
        images={[
          { src: slide1, alt: "slide1" },
          { src: slide2, alt: "slide2" },
          { src: slide3, alt: "slide3" },
          { src: slide4, alt: "slide4" },
          { src: slide5, alt: "slide5" },
          { src: slide6, alt: "slide6" },
        ]}
      />
    );
  });

  it("should display n images", () => {
    cy.get('[role="region"]').find("figure").should("have.length", 6);
  });

  it("should display n dot navigators", () => {
    cy.get('[role="region"]')
      .find("[data-cy^='dot-navigator-']")
      .should("have.length", 6);
  });

  it("should navigate forward if the screenX difference between mousedown and mouseup is < -50", () => {
    cy.get('[role="listbox"]').trigger("mousedown", {
      which: 1,
      screenX: 0,
      screenY: 0,
    });
    cy.get('[role="listbox"]').trigger("mouseup", {
      which: 1,
      screenX: -51,
      screenY: 0,
    });

    cy.get("[data-cy='image-slide-1']").should(($figure) => {
      const className = $figure[0].className;
      expect(className).to.match(/image-selected/);
    });
  });

  it("should navigate backward if the screenX difference between mousedown and mouseup is > 50", () => {
    cy.get('[role="listbox"]').trigger("mousedown", {
      which: 1,
      screenX: 0,
      screenY: 0,
    });
    cy.get('[role="listbox"]').trigger("mouseup", {
      which: 1,
      screenX: 51,
      screenY: 0,
    });

    cy.get("[data-cy='image-slide-5']").should(($figure) => {
      const className = $figure[0].className;
      expect(className).to.match(/image-selected/);
    });
  });

  it("should navigate forward if the screenX difference between touchstart and touchend is < -50", () => {
    cy.viewport("iphone-x", "portrait", { log: true });
    cy.get('[role="listbox"]').trigger("touchstart", {
      which: 1,
      screenX: 0,
      screenY: 0,
    });
    cy.get('[role="listbox"]').trigger("touchend", {
      which: 1,
      screenX: -51,
      screenY: 0,
    });

    cy.get("[data-cy='image-slide-1']").should(($figure) => {
      const className = $figure[0].className;
      expect(className).to.match(/image-selected/);
    });
  });

  it("should navigate backward if the screenX difference between touchstart and touchend is > 50", () => {
    cy.get('[role="listbox"]').trigger("touchstart", {
      screenX: 0,
      screenY: 0,
    });
    cy.get('[role="listbox"]').trigger("touchend", {
      screenX: 51,
      screenY: 0,
    });

    cy.get("[data-cy='image-slide-5']").should(($figure) => {
      const className = $figure[0].className;
      expect(className).to.match(/image-selected/);
    });
  });

  it("navigate to index by clicking dot navigator", () => {
    cy.get("[data-cy='dot-navigator-1']").click();
    cy.get("[data-cy='image-slide-1']").should(($figure) => {
      const className = $figure[0].className;
      expect(className).to.match(/image-selected/);
    });
  });

  it("navigate forward by clicking arrow right", () => {
    cy.wait(500);
    cy.get('[data-cy="arrow-right"]')
      .click()
      .wait(500)
      .click()
      .wait(500)
      .click()
      .wait(500)
      .click();
    cy.get("[data-cy='image-slide-4']").should(($figure) => {
      const className = $figure[0].className;
      expect(className).to.match(/image-selected/);
    });
  });

  it("navigate back by clicking arrow left", () => {
    cy.wait(500);
    cy.get('[data-cy="arrow-left"]')
      .click()
      .wait(500)
      .click()
      .wait(500)
      .click()
      .wait(500)
      .click();
  });
});
