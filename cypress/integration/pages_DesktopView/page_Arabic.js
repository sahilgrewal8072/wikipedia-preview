// ********************Arabic Page  Test in Desktop View*******************

/// <reference types="Cypress" />

describe.skip('Testing Arabic version', () => {

    it('Check URL', () => {
        cy.visit('http://localhost:8080/articles/arabic.html').url().should('include', '/arabic.html')
    })

    it('Check Header', () => {
        cy.pageHeader().should('be.visible').should('have.text', 'Wikipedia Preview demo')
    })

    it('Check Header Font-Size', () => {
        cy.pageHeader().should('be.visible').should('have.css', 'font-size', '32px')
    })

    it('Check Image Rendering', () => {
        cy.coverImage().should('be.visible')
    })

    it('Check Title', () => {
        cy.titleCheck().should('have.text', 'أم كلثوم (مطربة)')
    })

    it('Check Content', () => {
        cy.para1().should('be.visible')
        cy.para2().should('be.visible')
    })

    it('Check Content Font-Size', () => {
        cy.para1().should('have.css', 'font-size', '16px')
        cy.para2().should('have.css', 'font-size', '16px')
    })

    it('Check previewBox القاهرة', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)', {timeout:15000}).should('have.text', 'القاهرة').click({ force: true })
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'مواصلة القراءة').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.previewBoxFooterImg3().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا').and('have.attr', 'href', 'https://ar.wikipedia.org/wiki/%D8%A7%D9%84%D9%82%D8%A7%D9%87%D8%B1%D8%A9?wprov=wppw1').click()
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check previewBox مصر', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)', {timeout:15000}).should('have.text', 'مصر').click({ force: true })
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'مواصلة القراءة').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.previewBoxFooterImg3().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا').and('have.attr', 'href', 'https://ar.wikipedia.org/wiki/%D9%85%D8%B5%D8%B1?wprov=wppw1').click()
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check previewBox محمد_عبد_الوهاب ', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).should('have.text', 'محمد_عبد_الوهاب').click({ force: true })
        cy.previewBox().should('be.visible')
        cy.previewBoxHeaderImg().should('be.visible')
        cy.continueReadBtn().should('have.text', 'مواصلة القراءة').click()
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')
        cy.previewBoxFooterImg2().should('be.visible')
        cy.previewBoxFooterImg3().should('be.visible')
        cy.readMoreBtn().should('be.visible').should('have.text', 'اقرأ المزيد عن ويكيبيديا').and('have.attr', 'href', 'https://ar.wikipedia.org/wiki/%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D8%A8%D8%AF_%D8%A7%D9%84%D9%88%D9%87%D8%A7%D8%A8?wprov=wppw1').click()
        cy.previewBoxCloseBtn().click()
        cy.previewBox().should('not.be.visible')
    })

    it('Check Footer', () => {
        cy.pageFooter().should('be.visible')
    })

    it('Check link in Footer', () => {
        cy.linkInFooter().should('have.attr', 'href', 'https://github.com/wikimedia/wikipedia-preview')
    })

    it('Check Footer Font-Size', () => {
        cy.get('body > div.footer > p').should('be.visible').should('have.css', 'font-size', '12px')
    })

})