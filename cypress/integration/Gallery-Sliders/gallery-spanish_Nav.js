//*********************Navigation in Spanish Version (Desktop)*****************

///<reference types="cypress"/>

describe('Navigations in slider at Spanish version', () => {

    it('Navigate in  motor de corriente alterna  Sliders', () => {
        cy.visit('http://localhost:8080/articles/spanish.html').url().should('include', '/spanish.html')
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg2().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg3().should('be.visible')
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Navigate in Edison  Sliders', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg2().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg3().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg4().should('be.visible')
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Navigate in Smiljan  Sliders', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(3) > span', {timeout:15000}).click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg2().should('be.visible')
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

})