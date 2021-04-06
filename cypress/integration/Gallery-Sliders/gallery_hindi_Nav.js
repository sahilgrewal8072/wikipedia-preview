//*********************Navigation in Hindi Version (Desktop)*****************

///<reference types="cypress"/>

describe.skip('Navigations in slider at Hindi version', () => {

    it('Navigate in मन्दिर Sliders', () => {
        cy.visit('http://localhost:8080/articles/hindi.html').url().should('include', '/hindi.html')
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderCloseBtn().should('be.visible').click() 
    })

    it('Navigate in हुमांयू Sliders', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderCloseBtn().should('be.visible').click() 
    })

    it('Navigate in अंकगणितीय Sliders', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(4) > span', {timeout:15000}).click()
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
        cy.sliderCloseBtn().should('be.visible').click() 
    })

})