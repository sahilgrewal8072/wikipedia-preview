//*********************Navigation in french Version (Desktop)*****************

///<reference types="cypress"/>

describe('Navigations in slider at french version', () => {

    it('Navigate in résolutions Sliders', () => {
        cy.visit('http://localhost:8080/articles/french.html').url().should('include', '/french.html')
        cy.get('body > div.container > div.content > p:nth-child(2) > span').click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg2().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg3().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg4().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg5().should('be.visible')
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

})