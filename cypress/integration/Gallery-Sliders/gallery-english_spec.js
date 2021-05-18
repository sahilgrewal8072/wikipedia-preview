// ******************Gallery for English Desktop Version **********************
/// <reference types="Cypress" />

describe('Checking image gallery sliders in English', () => {

    it('Opening Ivory in slider for image1', () => {
        cy.visit('http://localhost:8080/articles/english.html').url().should('include', '/english.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.previewBoxFooterImg1().scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Olifant. Ivory, southern Italy, late 11th century.') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\nUnknown artistUnknown artist\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=916963') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening Ivory in slider with image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).click()  //span ivory click
        cy.continueReadBtn().click()  //continue btn
        cy.previewBoxFooterImg2().scrollIntoView().click() //pic 2
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 2 visible in slider
        cy.captionInExpander2().should('be.visible').and('have.text', '\nThis casket is an example of one made by Arab craftsmen in Sicily during a period of German rule, a time when the cultural influences of Islam was welcome, and from when the term Siculo-Arabic derives. Many such caskets were made with a hipped roof and decorated with semi-precious stones. \n\nThis circular shape of this casket is achieved by holding together two half circles of ivory with mounts on one side, a good and practical illustration of the use of the natural shape of the elephant tusk. The lid is made from an ivory disc, its outer rim is secured with a bronze mount.').and('have.css', 'max-height', '80px')
        cy.captionExpander().click()
        cy.captionInExpander2().should('be.visible').and('have.text', '\nThis casket is an example of one made by Arab craftsmen in Sicily during a period of German rule, a time when the cultural influences of Islam was welcome, and from when the term Siculo-Arabic derives. Many such caskets were made with a hipped roof and decorated with semi-precious stones. \n\nThis circular shape of this casket is achieved by holding together two half circles of ivory with mounts on one side, a good and practical illustration of the use of the natural shape of the elephant tusk. The lid is made from an ivory disc, its outer rim is secured with a bronze mount.').and('have.css', 'max-height', '241px')
        cy.attrInExpander2().should('be.visible').and('have.text', '\nEamonn O\'Mahony') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=88879687') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })


    it('Opening Ivory in slider with image3', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span', {timeout:15000}).click()  //span ivory click
        cy.continueReadBtn().click()  //continue btn
        cy.previewBoxFooterImg3().scrollIntoView().click() //pic 2
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg3().should('be.visible') //pic 2 visible in slider
        cy.captionInExpander3().should('be.visible').and('have.text', 'Statuette en ivoire dite "Vierge à l\'Enfant debout" (hauteur environ 25 cm) - Paris, fin du XIIIème siècle - Musée du Louvre, Inv. n° OA 9490')
        cy.attrInExpander3().should('be.visible').and('have.text', '\nSiren-Com\n') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=8396998') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening bbNational in slider for image1', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Physical location map of the Central African Republic') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tCarport\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=9672773') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening bbNational in slider for image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)').scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Red-faced Lovebird (Agapornis pullarius), a female and male.') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tUser:JoJan\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=253343') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening Chinko in slider for image1', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(3) > span:nth-child(1)', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)', { retries: 2 }).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Location map of the Central African Republic') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tNordNordWest\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=8679912') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening Chinko in slider for image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(3) > span:nth-child(1)', {timeout:15000}).click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)', { retries: 2 }).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Photo of Dologale Dybowskii taken in the wild, within the Chinko Project Area.  Taken May 16, 2012 at 8:33:24.') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tAebischer Thierry and Hickisch Raffael\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=53386695') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

})