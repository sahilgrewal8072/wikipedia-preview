// ****************Gallery for Hindi in desktop view**************

/// <reference types="Cypress" />

describe('Checking image gallery sliders', () => {

    it('Opening मन्दिर slider via image1', () => {
        cy.visit('http://localhost:8080/articles/hindi.html').url().should('include', '/hindi.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(1) > span').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Temple') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tG. Simpson\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=8716506') // i button
        cy.sliderPrevBtn().should('not.be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('not.be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening हुमांयू slider via image1', () => {
        cy.visit('http://localhost:8080/articles/hindi.html').url().should('include', '/hindi.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(2) > span').click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', '"India, Delhi, South Asia\nEmperor Humayun (reigned 1530-1540/1555-1556), circa 1875\n\n"') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\nLACMA\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=7908166') // i button
        cy.sliderPrevBtn().should('not.be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('not.be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening अंकगणितीय slider for image1', () => {
        cy.visit('http://localhost:8080/articles/hindi.html').url().should('include', '/hindi.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(4) > span').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Aryabhata, mathematician and astronomer in Ancient India.') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tAuthor unknown\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=1266822') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening अंकगणितीय slider via image2', () => {
        cy.visit('http://localhost:8080/articles/hindi.html').url().should('include', '/hindi.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(4) > span').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'The support vote symbol redrawn in the SVG format.') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tZscout370, improved by Ed g2s, simplified by Erin Silversmith\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=371250') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening अंकगणितीय slider via image3', () => {
        cy.visit('http://localhost:8080/articles/hindi.html').url().should('include', '/hindi.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(4) > span').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg3().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption3().should('be.visible').and('have.text', 'The oppose vote symbol redrawn in SVG.') //pic 1 caption
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t!Original:NorroVector: Zscout370\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=371252') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

})