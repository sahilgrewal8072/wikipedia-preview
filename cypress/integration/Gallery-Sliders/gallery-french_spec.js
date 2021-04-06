// ****************Gallery for french **************

/// <reference types="Cypress" />

describe('Checking image gallery sliders in French', () => {

    it('Opening résolutions slider via image1', () => {
        cy.visit('http://localhost:8080/articles/french.html').url().should('include', '/french.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'La Salle de réunion du Conseil de sécurité des Nations unies au siège des Nations unies à New York.') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\nNeptuul\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=32410206') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening résolutions slider via image2', () => {
        cy.visit('http://localhost:8080/articles/french.html').url().should('include', '/french.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Church House is the headquarters of the Church of England, occupying the south end of Dean\'s Yard next to Westminster Abbey in London') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tPaasikivi\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=47979986') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening résolutions slider via image3', () => {
        cy.visit('http://localhost:8080/articles/french.html').url().should('include', '/french.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg3().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption3().should('be.visible').and('have.text', 'La Salle de réunion du Conseil de sécurité des Nations Unies à New York') //pic 1 caption
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\nBernd Untiedt, Germany\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=46303') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

})