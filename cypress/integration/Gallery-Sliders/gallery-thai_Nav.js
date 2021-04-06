//*********************Navigation in Thai Version (Desktop)*****************

///<reference types="cypress"/>

describe.skip('Navigations in slider at thai version', () => {

    it('Navigate in  และผลงานศิลปะที่  Sliders', () => {
        cy.visit('http://localhost:8080/articles/thai.html').url().should('include', '/thai.html')
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderNxtBtn().should('be.visible').click()
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Navigate in วัดร่องขุ่น Sliders', () => {
        cy.visit('http://localhost:8080/articles/thai.html')
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)', {timeout:15000}).click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
        cy.sliderImg1().should('be.visible')
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Navigate in จังหวัดเชียงราย Sliders', () => {
        cy.visit('http://localhost:8080/articles/thai.html')
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click()
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

})


