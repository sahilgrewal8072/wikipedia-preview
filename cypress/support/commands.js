Cypress.Commands.add('titleCheck', () => {
    cy.get('body > div.container > div.title > p')  
})

Cypress.Commands.add('para1', () => {
    cy.get('body > div.container > div.content > p:nth-child(1)')  
})

Cypress.Commands.add('para2', () => {
    cy.get('body > div.container > div.content > p:nth-child(2)')  
})

Cypress.Commands.add('para3', () => {
    cy.get('body > div.container > div.content > p:nth-child(3)') 
})

Cypress.Commands.add('para4', () => {
    cy.get('body > div.container > div.content > p:nth-child(4)') 
})

Cypress.Commands.add('coverImage', () => {
    cy.get('body > div.container > div.cover', {timeout:25000})  
})

Cypress.Commands.add('pageHeader', () => {
    cy.get('body > a > div')                                    
})

Cypress.Commands.add('linkInHeader', () => {
    cy.get('body > a')                               
})

Cypress.Commands.add('previewBox', () => {
    cy.get('body > div.wp-popup', {timeout:50000})      
})

Cypress.Commands.add('previewBoxHeaderImg', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-image',{timeout:25000})
})

Cypress.Commands.add('continueReadBtn', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-footer > span', {timeout:15000})  
})

Cypress.Commands.add('previewBoxFooterImg1', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg2', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg3', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg4', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(4)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg5', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(5)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg6', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(6)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg7', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(7)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg8', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(8)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg9', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(9)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg10', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(10)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg11', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(11)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg12', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(12)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg13', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(13)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg14', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(14)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg15', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(15)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg16', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(16)',{timeout:25000})
})
Cypress.Commands.add('previewBoxFooterImg17', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(17)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg18', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(18)',{timeout:25000})
})

Cypress.Commands.add('previewBoxFooterImg19', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(19)',{timeout:25000})
})

Cypress.Commands.add('pageFooter', () => {
    cy.get('body > div.footer')
})

Cypress.Commands.add('linkInFooter', () => {
    cy.get('body > div.footer > p > a:nth-child(5)')
})

Cypress.Commands.add('readMoreBtn', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-footer > a')
})

Cypress.Commands.add('previewBoxCloseBtn', () => {
    cy.get('body > div.wp-popup > div > div.wikipediapreview-header > div.wikipediapreview-header-closebtn')
})

//  ******************Commands for Slider Gallery***************

Cypress.Commands.add('sliderGalleryMain', () => {
    cy.get('body > div.wp-gallery-fullscreen')
})

Cypress.Commands.add('sliderImg1', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(3) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg2', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(4) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg3', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg4', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(6) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg5', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(7) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg6', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(8) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg7', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(9) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg8', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(10) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg9', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(11) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg10', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(12) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg11', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(13) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg12', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(14) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg13', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(15) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg14', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(16) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg15', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(17) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg16', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(18) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg17', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(19) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg18', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(20) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg19', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(21) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg20', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(22) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImg21', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(23) > img', {timeout:40000})
})

Cypress.Commands.add('sliderImgCaption1', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(3) > div.wp-gallery-fullscreen-slider-item-caption > div')
})

Cypress.Commands.add('sliderImgCaption2', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(4) > div.wp-gallery-fullscreen-slider-item-caption > div')
})

Cypress.Commands.add('captionInExpander1', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(3) > div.wp-gallery-fullscreen-slider-item-caption > div.wp-gallery-fullscreen-slider-item-caption-text')
})

Cypress.Commands.add('captionInExpander2', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(4) > div.wp-gallery-fullscreen-slider-item-caption > div.wp-gallery-fullscreen-slider-item-caption-text')
})

Cypress.Commands.add('captionInExpander3', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > div.wp-gallery-fullscreen-slider-item-caption > div.wp-gallery-fullscreen-slider-item-caption-text')
})

Cypress.Commands.add('captionExpander', () => {
   cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(4) > div.wp-gallery-fullscreen-slider-item-caption > div.wp-gallery-fullscreen-slider-item-caption-expand-cue')
})

Cypress.Commands.add('attrInExpander1', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(3) > div.wp-gallery-fullscreen-slider-item-attribution > div.wp-gallery-fullscreen-slider-item-attribution-info > div.wp-gallery-fullscreen-slider-item-attribution-info-author')
})

Cypress.Commands.add('attrInExpander2', () => {
   cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(4) > div.wp-gallery-fullscreen-slider-item-attribution > div.wp-gallery-fullscreen-slider-item-attribution-info > div.wp-gallery-fullscreen-slider-item-attribution-info-author')
})

Cypress.Commands.add('attrInExpander3', () => {
   cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > div.wp-gallery-fullscreen-slider-item-attribution > div.wp-gallery-fullscreen-slider-item-attribution-info > div.wp-gallery-fullscreen-slider-item-attribution-info-author')
})

Cypress.Commands.add('sliderImgCaption3', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > div.wp-gallery-fullscreen-slider-item-caption > div')
})

Cypress.Commands.add('sliderImgAttr1', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(3) > div.wp-gallery-fullscreen-slider-item-attribution')
})

Cypress.Commands.add('sliderImgAttr2', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(4) > div.wp-gallery-fullscreen-slider-item-attribution')
})

Cypress.Commands.add('sliderImgAttr3', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > div.wp-gallery-fullscreen-slider-item-attribution')
})

Cypress.Commands.add('sliderPrevBtn', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div.wp-gallery-fullscreen-slider-button.previous')
})

Cypress.Commands.add('sliderNxtBtn', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div.wp-gallery-fullscreen-slider-button.next')
})

Cypress.Commands.add('sliderCloseBtn', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-close')
})

Cypress.Commands.add('iButtonImg1', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(3) > div.wp-gallery-fullscreen-slider-item-attribution > div.wp-gallery-fullscreen-slider-item-attribution-more-info > a')
})

Cypress.Commands.add('iButtonImg2', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(4) > div.wp-gallery-fullscreen-slider-item-attribution > div.wp-gallery-fullscreen-slider-item-attribution-more-info > a')
})

Cypress.Commands.add('iButtonImg3', () => {
    cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > div.wp-gallery-fullscreen-slider-item-attribution > div.wp-gallery-fullscreen-slider-item-attribution-more-info > a')
})





