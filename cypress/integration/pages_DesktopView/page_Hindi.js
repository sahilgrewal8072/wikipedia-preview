/// <reference types="Cypress" />

describe('Testing Hindi version', () => {
    it('Check URL', () => {
        cy.visit('http://localhost:8080/articles/hindi.html').url().should('include', '/hindi.html') 
    })

    it('Check Header', () => {
        cy.pageHeader().should('be.visible').should('have.text', 'Wikipedia Preview demo') 
    })

    it('Check link in Header', () => {
        cy.linkInHeader().should('have.attr', 'href' , '../index.html') 
    })

    it('Check Header Font-Size', () => {
        cy.pageHeader().should('be.visible').should('have.css', 'font-size', '32px')  
    })

    it('Check Image Rendering', () => {
        cy.coverImage().should('be.visible') 
    })

    it('Check Title', () => {
        cy.titleCheck().should('have.text', 'विस्तार से जानिये कालिंजर दुर्ग के बारे में') 
    })

    it('Check Content', () => {
        cy.para1().should('be.visible')  
        cy.para2().should('be.visible') 
        cy.para3().should('be.visible')  
        cy.para4().should('be.visible')  
    })

    it('Check Content Font-Size', () => {
        cy.para1().should('have.css', 'font-size', '16px')  
        cy.para2().should('have.css', 'font-size', '16px')  
        cy.para3().should('have.css', 'font-size', '16px')  
    })

    it('Check previewBox in मन्दिर', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span').should('have.text', 'मन्दिर').click()
        cy.previewBox().should('be.visible') 
        cy.previewBoxHeaderImg().should('be.visible')  
        cy.continueReadBtn().should('have.text', 'पढ़ना जारी रखें').click()     
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')  
        cy.readMoreBtn().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें').and('have.attr', 'href', 'https://hi.wikipedia.org/wiki/%E0%A4%AE%E0%A4%A8%E0%A5%8D%E0%A4%A6%E0%A4%BF%E0%A4%B0?wprov=wppw1').click()  
        cy.previewBoxCloseBtn().click()  
        cy.previewBox().should('not.be.visible')  
    })

    it('Check previewBox in हुमांयू', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span').should('have.text', 'हुमांयू').click({force:true})
        cy.previewBox().should('be.visible') 
        cy.previewBoxHeaderImg().should('be.visible')  
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')  
        cy.readMoreBtn().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें').and('have.attr', 'href', 'https://hi.wikipedia.org/wiki/%E0%A4%B9%E0%A5%81%E0%A4%AE%E0%A4%BE%E0%A4%AF%E0%A5%82%E0%A4%81?wprov=wppw1').click()  
        cy.previewBoxCloseBtn().click()  
        cy.previewBox().should('not.be.visible')  
    })

    it('Check previewBox in अंकगणितीय', () => {
        cy.get('body > div.container > div.content > p:nth-child(4) > span').should('have.text', 'अंकगणितीय').click({force:true})
        cy.previewBox().should('be.visible') 
        cy.previewBoxHeaderImg().should('be.visible')  
        cy.continueReadBtn().should('have.text', 'पढ़ना जारी रखें').click()     
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible') 
        cy.previewBoxFooterImg2().should('be.visible')  
        cy.previewBoxFooterImg3().should('be.visible') 
        cy.readMoreBtn().should('be.visible').should('have.text', 'विकिपीडिया पर अधिक पढ़ें').and('have.attr', 'href', 'https://hi.wikipedia.org/wiki/%E0%A4%85%E0%A4%82%E0%A4%95%E0%A4%97%E0%A4%A3%E0%A4%BF%E0%A4%A4?wprov=wppw1').click()  
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