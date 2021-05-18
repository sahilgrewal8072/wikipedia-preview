//*********************Navigation in English Version (Desktop)*****************

///<reference types="cypress"/>

describe('Navigations in slider at English version', () => {

    it('Navigate in Ivory Sliders', () => {
        cy.visit('http://localhost:8080/articles/english.html').url().should('include', '/english.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click() //pic 1
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg2().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg3().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg4().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg5().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg6().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg7().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg8().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg9().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg10().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg11().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg12().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg13().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg14().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg15().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg16().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg17().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg18().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg19().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg20().should('be.visible') //pic 2 visible in slider
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg21().should('be.visible')//pic 2 visible in slider
        cy.sliderCloseBtn().should('be.visible').click()
    })

    it('Navigate in bbNational Sliders', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click() //pic 1
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg2().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderCloseBtn().should('be.visible').click()
    })

    it('Navigate in chinko Sliders', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(3) > span:nth-child(1)', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg2().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderCloseBtn().should('be.visible').click()
    })

})