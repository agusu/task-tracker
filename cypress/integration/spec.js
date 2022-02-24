/// <reference types="cypress" />

const { default: React } = require("react");

describe("First render", () => {
    it("has title", () => {
        cy.visit("/");
        cy.get("h4").contains("Task Tracker");
    });
});

describe("Add task", () => {
    it("creates task", () => {
        cy.visit("/");
        cy.get("input[name=name]").type("Test task");
        cy.get("input[name=estimate]").type("1");
        cy.get("button").contains("Add").click();
    });
    it("renders task", () => {
        cy.get("div").contains("Test task").parent().parent().should("contain.text", "Planned");
        cy.get("div").contains("Test task").parent().parent().should("contain.text", "1");
    });
    it("disallows adding incomplete tasks", () => {
        cy.get("button").contains("Add").should("be.disabled");
        cy.get("input[name=name]").type("Incomplete task");
        cy.get("button").contains("Add").should("be.disabled");
        cy.get("input[name=estimate]").type("-1");
        cy.get("input[name=estimate]").parent().parent().should("contain.text", "Must be between 0 and 99");
        cy.get("button").contains("Add").should("be.disabled");
        cy.get("input[name=estimate]").type("NaN");
        cy.get("input[name=estimate]").parent().parent().should("contain.text", "Must be between 0 and 99");
        cy.get("button").contains("Add").should("be.disabled");
    });
    it("disallows creating tasks twice", () => {
        cy.get("input[name=name]").clear().type("Test task");
        cy.get("input[name=estimate]").clear().type("1");
        cy.get("button").contains("Add").click();
        cy.get("div").contains("Task already exists!").should("be.visible");
    });
});

describe("Change task state", () => {
    it("set task to in progress", () => {
        cy.get("div").contains("Test task").parent().parent().find("select").select("In progress");
    });
    it("updates total counts", () => {
        cy.get("div").contains("⏳").parent().parent().should("contain.text", "1");
    });
});

describe("Delete task", () => {
    it("find previously created task", () => {
        cy.get("div").contains("Test task").parent().parent().find("button").click();
    });
    it("delete task", () => {
        cy.get("div").contains("Test task").should("not.exist");
    });
});
