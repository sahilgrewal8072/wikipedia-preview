/// <reference types="Cypress" />

describe.skip('Testing Thai version', () => {

    it('Check URL', () => {
        cy.visit('http://localhost:8080/articles/thai.html').url().should('include', '/thai.html')  
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
        cy.titleCheck().should('have.text', 'เฉลิมชัย โฆษิตพิพัฒน์') 
    })

    it('Check Content', () => {
        cy.para1().should('be.visible')  
        cy.para2().should('be.visible')  
    })

    it('Check Content Font-Size', () => {
        cy.para1().should('have.css', 'font-size', '16px')  
        cy.para2().should('have.css', 'font-size', '16px')  
    })

    it('Check previewBox in พระมหาชนก', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)', {timeout:15000}).should('have.text', 'พระมหาชนก').click()
        cy.previewBox().should('be.visible') 
        cy.previewBoxHeaderImg().should('be.visible')  
        cy.continueReadBtn().should('have.text', 'อ่านต่อ').click()     
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')  
        cy.previewBoxFooterImg2().should('be.visible')    
        cy.readMoreBtn().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย').and('have.attr', 'href', 'https://th.wikipedia.org/wiki/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%8A%E0%B8%99%E0%B8%81?wprov=wppw1').click() 
        cy.previewBoxCloseBtn().click()  
        cy.previewBox().should('not.be.visible')  
    })

    it('Check previewBox in วัดร่องขุ่น', () => {
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)', {timeout:15000}).should('have.text', 'วัดร่องขุ่น').click({force:true})
        cy.previewBox().should('be.visible') 
        cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-image').should('be.visible')  
        cy.continueReadBtn().should('have.text', 'อ่านต่อ').click({force:true})     
        cy.previewBoxFooterImg1().scrollIntoView().should('be.visible')  
        cy.readMoreBtn().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย').and('have.attr', 'href', 'https://th.wikipedia.org/wiki/%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%A3%E0%B9%88%E0%B8%AD%E0%B8%87%E0%B8%82%E0%B8%B8%E0%B9%88%E0%B8%99?wprov=wppw1').click()  
        cy.previewBoxCloseBtn().click()  
        cy.previewBox().should('not.be.visible') 
    })

    it('Check previewBox in จังหวัดเชียงราย', () => {
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).should('have.text', 'จังหวัดเชียงราย').click({ force: true })
        cy.previewBox().should('be.visible') 
        cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-image').should('be.visible')  
        cy.continueReadBtn().should('have.text', 'อ่านต่อ').click()     
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().should('be.visible')  
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)').should('be.visible')    
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)').should('be.visible')    
        cy.readMoreBtn().should('be.visible').should('have.text', 'อ่านเพิ่มเติมบนวิกิพีเดีย').and('have.attr', 'href', 'https://th.wikipedia.org/wiki/%E0%B8%88%E0%B8%B1%E0%B8%87%E0%B8%AB%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B9%80%E0%B8%8A%E0%B8%B5%E0%B8%A2%E0%B8%87%E0%B8%A3%E0%B8%B2%E0%B8%A2?wprov=wppw1').click() 
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