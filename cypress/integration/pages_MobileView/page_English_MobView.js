/// <reference types="Cypress" />

describe('Testing English version for Mobileview', () => {

    beforeEach(() => {
        cy.viewport('iphone-6')
    })

    it('Check URL', () => {
        cy.visit('http://localhost:8080/articles/english.html').url().should('include', '/english.html')
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
        cy.titleCheck().should('have.text', 'Wildlife of the Central African Republic')
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

    it('Check Close Button for Mobile', () => {
        cy.get('body > div.container > div.cover > a > div').should('be.visible')
    })

    it('Check previewBox in Ivory', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).should('have.text', 'ivory').click()
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'Continue Reading').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.previewBoxFooterImg3().should('be.visible')
        cy.previewBoxFooterImg4().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg5().should('be.visible')
        cy.previewBoxFooterImg6().should('be.visible')
        cy.previewBoxFooterImg7().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg8().should('be.visible')
        cy.previewBoxFooterImg9().should('be.visible')
        cy.previewBoxFooterImg10().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg11().should('be.visible')
        cy.previewBoxFooterImg12().should('be.visible')
        cy.previewBoxFooterImg13().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg14().should('be.visible')
        cy.previewBoxFooterImg15().should('be.visible')
        cy.previewBoxFooterImg16().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg17().should('be.visible')
        cy.previewBoxFooterImg18().should('be.visible')
        cy.previewBoxFooterImg19().scrollIntoView().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'Read more on Wikipedia').and('have.attr', 'href', 'https://en.wikipedia.org/wiki/Ivory?wprov=wppw1').click()
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check previewBox in Bamingui-Bangoran National', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).should('have.text', ' Bamingui-Bangoran National').click({ force: true })
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'Continue Reading').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'Read more on Wikipedia').and('have.attr','href', 'https://en.wikipedia.org/wiki/Bamingui-Bangoran_National_Park_and_Biosphere_Reserve?wprov=wppw1').click() 
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check previewBox in Chinko Project', () => {
        cy.get('body > div.container > div.content > p:nth-child(3) > span:nth-child(1)', {timeout:15000}).should('have.text', 'Chinko Project').click({ force: true })
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'Continue Reading').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'Read more on Wikipedia').and('have.attr', 'href', 'https://en.wikipedia.org/wiki/Chinko?wprov=wppw1').click()
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