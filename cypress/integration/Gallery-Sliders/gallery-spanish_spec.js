// ****************Gallery for Chinko Project**************

/// <reference types="Cypress" />

describe('Checking image gallery sliders', () => {

    it('Opening motor de corriente alterna slider via image1', () => {
        cy.visit('http://localhost:8080/articles/spanish.html').url().should('include', '/spanish.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Elektromotori asinkron') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tEgzon123\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=26601156') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening motor de corriente alterna slider via image2', () => {
        cy.visit('http://localhost:8080/articles/spanish.html').url().should('include', '/spanish.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Animation (GIF) of the rotating magnetic field produced by the stator in a synchronous or asynchronous (induction) motor') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tel Fantin\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=65379268') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening motor de corriente alterna slider via image3', () => {
        cy.visit('http://localhost:8080/articles/spanish.html').url().should('include', '/spanish.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg3().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption3().should('be.visible').and('have.text', 'Foto de una jaula de ardillas de un motor de corriente alterna a 220 V.') //pic 1 caption
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tGelpgim22 (Sergio Panei Pitrau)\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=15743010') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })
     
    it('Opening Edison slider via image1', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', '"Thomas Alva Edison, three-quarter length portrait, seated, facing front". Photographic print.') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tLouis Bachrach, Bachrach Studios, restored by Michel Vuijlsteke\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=6582301') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening Edison slider via image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Young Thomas Edison, age 14') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tUnknown\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=629336') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening Edison slider via image3', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg3().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption3().should('be.visible').and('have.text', 'Thomas Edison y su primer fonógrafo. Recorte de una copia de la biblioteca del congreso estadounidense. Versión retocada. Polvo eliminado por Arad.') //pic 1 caption
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tLevin C. Handy (per http://hdl.loc.gov/loc.pnp/cwpbh.04326)\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=1550649') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening Smiljan slider via image1', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(3) > span', {timeout:15000}).click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'A Nikola Tesla Emlékközpont (Smiljan, Horvátország).') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tZátonyi Sándor, (ifj.) Fizped\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=27839271') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening Smiljan slider via image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(3) > span', {timeout:15000}).click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Positionskarte von Kroatien') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tNordNordWest\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=4390148') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

})