//*********************Navigation in Arabic Version (Desktop)*****************

///<reference types="cypress"/>

describe.skip('Navigations in slider at Arabic version', () => {

    it('Navigate in القاهرة Sliders', () => {
        cy.visit('http://localhost:8080/articles/arabic.html').url().should('include', '/arabic.html')
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)', {timeout:15000}).click()
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
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderCloseBtn().should('be.visible').click()
    })

    it('Navigate in مصر Sliders', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)', {timeout:15000}).click()
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
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderCloseBtn().should('be.visible').click()
    })

    it('Navigate in محمد_عبد_الوهاب sliders', () => {
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
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderImg5().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderCloseBtn().should('be.visible').click()
    })

})