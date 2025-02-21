/// <reference types="Cypress" />

describe('Testing Spanish version for Mobileview', () => {

    beforeEach(() => {
        cy.viewport('iphone-xr')
    })

    it('Check URL', () => {
        cy.visit('http://localhost:8080/articles/spanish.html').url().should('include', '/spanish.html')
    })

    it('Check Header', () => {
        cy.pageHeader().should('be.visible').should('have.text', 'Wikipedia Preview demo')
    })

    it('Check link in Header', () => {
        cy.linkInHeader().should('have.attr', 'href', '../index.html')
    })

    it('Check Header Font-Size', () => {
        cy.pageHeader().should('be.visible').should('have.css', 'font-size', '18px')
    })

    it('Check Image Rendering', () => {
        cy.coverImage().should('be.visible')
    })

    it('Check Title', () => {
        cy.titleCheck().should('have.text', 'Nikola Tesla')
    })

    it('Check Content', () => {
        cy.para1().should('be.visible')
        cy.para2().should('be.visible')
        cy.para3().should('be.visible')
    })

    it('Check Content Font-Size', () => {
        cy.para1().should('have.css', 'font-size', '16px')
        cy.para2().should('have.css', 'font-size', '16px')
        cy.para3().should('have.css', 'font-size', '16px')
    })

    it('Check previewBox in motor de corriente alterna', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).should('have.text', 'motor de corriente alterna').click()
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'Continuar leyendo').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.previewBoxFooterImg3().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'Leer más en Wikipedia').and('have.attr', 'href', 'https://es.wikipedia.org/wiki/Motor_de_corriente_alterna?wprov=wppw1').click()
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check previewBox in Edison', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).should('have.text', 'Edison').click({ force: true })
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'Continuar leyendo').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.previewBoxFooterImg3().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'Leer más en Wikipedia').and('have.attr', 'href', 'https://es.wikipedia.org/wiki/Thomas_Alva_Edison?wprov=wppw1').click()
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check previewBox in Smiljan', () => {
        cy.get('body > div.container > div.content > p:nth-child(3) > span', {timeout:15000}).should('have.text', 'Smiljan').click({ force: true })
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'Leer más en Wikipedia').and('have.attr', 'href', 'https://es.wikipedia.org/wiki/Smiljan?wprov=wppw1').click()
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check Footer', () => {
        cy.pageFooter().should('be.visible')
    })

    it('Check Link in Footer', () => {
        cy.linkInFooter().should('have.attr', 'href', 'https://github.com/wikimedia/wikipedia-preview')
    })

    it('Check Footer Font-Size', () => {
        cy.get('body > div.footer > p').should('be.visible').should('have.css', 'font-size', '12px')
    })

})