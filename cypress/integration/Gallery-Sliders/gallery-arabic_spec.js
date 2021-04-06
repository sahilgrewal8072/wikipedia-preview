// ****************Gallery for Arabic in desktop view **************

/// <reference types="Cypress" />

describe('Checking image gallery sliders in Arabic', () => {

    it('Opening القاهرة slider via image1', () => {
        cy.visit('http://localhost:8080/articles/arabic.html').url().should('include', '/arabic.html')
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)', { retries: 2 }).scrollIntoView().click()
        cy.sliderGalleryMain().should('be.visible')
        cy.sliderImg3().should('be.visible')
        cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > div.wp-gallery-fullscreen-slider-item-caption > div.wp-gallery-fullscreen-slider-item-caption-text').should('be.visible').and('have.text', 'Map of Cairo, Egypt\nGeographic limits of the map:\n\n\nN: 30.1445°\nS: 29.9617°\nW: 31.162°\nE: 31.4596°\n\n\n\n\n\n\n\nهذا الملف مُرخص تحت رخصة المشاع المبدع نسبة المصنف إلى مؤلفه - المشاركة على قدم المساواة 2.0 العامة\n\n\n\n\n\n\n\n\nيحقُّ لك:\n\n\nمشاركة العمل – نسخ العمل وتوزيعه وبثُّه\n\nإعادة إنتاج العمل – تعديل العمل\n\n\nحسب الشروط التالية:\n\n\nنسب العمل إلى مُؤَلِّفه – يلزم نسب العمل إلى مُؤَلِّفه بشكل مناسب وتوفير رابط للرخصة وتحديد ما إذا أجريت تغييرات. بالإمكان القيام بذلك بأية طريقة معقولة، ولكن ليس بأية طريقة تشير إلى أن المرخِّص يوافقك على الاستعمال.\n\nالإلزام بترخيص المُشتقات بالمثل – إذا أعدت إنتاج المواد أو غيرت فيها، فيلزم أن تنشر مساهماتك المُشتقَّة عن الأصل تحت ترخيص الأصل نفسه أو تحت ترخيص مُتوافِقٍ معه.\n\n\n\nhttps://creativecommons.org/licenses/by-sa/2.0\nCC BY-SA 2.0 \nCreative Commons Attribution-Share Alike 2.0 \ntruetrue\n\n\n').and('have.css', 'max-height', '80px')
        cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(5) > div.wp-gallery-fullscreen-slider-item-caption > div.wp-gallery-fullscreen-slider-item-caption-text').click().and('have.css', 'max-height', '241px')
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tOpenStreetMap\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=18916361')
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1')
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1')
        cy.sliderCloseBtn().should('be.visible').click()
    })

    it('Opening القاهرة slider via image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)', { retries: 2 }).scrollIntoView().click()
        cy.sliderGalleryMain().should('be.visible')
        cy.sliderImg2().should('be.visible')
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'علم محافظة القاهرة\n')
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tالمؤلف غير معروف\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://ar.m.wikipedia.org/w/index.php?curid=3227378')
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1')
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1')
        cy.sliderCloseBtn().should('be.visible').click()
    })

    it('Opening القاهرة slider via image3', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)', { retries: 2 }).scrollIntoView().click()
        cy.sliderGalleryMain().should('be.visible')
        cy.sliderImg1().should('be.visible')
        cy.get('body > div.wp-gallery-fullscreen > div.wp-gallery-fullscreen-main > div > div:nth-child(3) > div.wp-gallery-fullscreen-slider-item-attribution > div.wp-gallery-fullscreen-slider-item-attribution-info > div.wp-gallery-fullscreen-slider-item-attribution-info-author').should('be.visible').and('have.text', 'Wael Mostafa') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tWael Mostafa\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=51829814')
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1')
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5')
        cy.sliderCloseBtn().should('be.visible').click()
    })


    it.skip('Opening مصر slider via image1', () => {  //****************Bug************
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)', { retries: 2 }).scrollIntoView().click()
        cy.sliderGalleryMain().should('be.visible')
        cy.sliderImg3().should('be.visible')
        cy.sliderImgCaption3().should('be.visible').and('have.text', 'Orthographic map of Egypt centered at 26° N, 30º E.\n\n  Official territory.\n\n  Claimed territories.') //pic 1 caption
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tWael Mostafa\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=51829814')
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1')
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5')
        cy.sliderCloseBtn().should('be.visible').click()
    })

    it('Opening مصر slider via image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)', { retries: 2 }).scrollIntoView().click()
        cy.sliderGalleryMain().should('be.visible')
        cy.sliderImg2().should('be.visible')
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Coat of Arms of Egypt, Official version. Government Website')
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tFlag of Egypt (variant).svg: F l a n k e r from original Flag of Egypt.svg / derivative work: Fry1989 (نقاش)\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=11907624')
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderCloseBtn().should('be.visible').click() 
    })

    it('Opening مصر slider via image3', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)', { retries: 2 }).scrollIntoView().click()
        cy.sliderGalleryMain().should('be.visible')  
        cy.sliderImg1().should('be.visible') 
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'علم مصر') 
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tOpen Clip Art\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=433098') 
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') 
        cy.sliderCloseBtn().should('be.visible').click() 
    })

    it('Opening محمد_عبد_الوهاب slider via image1', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)', { retries: 2 }).scrollIntoView().click() 
        cy.sliderGalleryMain().should('be.visible') 
        cy.sliderImg3().should('be.visible')
        cy.sliderImgCaption3().should('be.visible').and('have.text', 'Egyptian poet Ahmed Shawqi (left) & Egyptian Singer-Composer Mohammed Abdel Wahab.') 
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tغير معروفUnknown author\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') 
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=9955236') 
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderCloseBtn().should('be.visible').click() 
    })

    it('Opening محمد_عبد_الوهاب slider via image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)', { retries: 2 }).scrollIntoView().click() 
        cy.sliderGalleryMain().should('be.visible') 
        cy.sliderImg2().should('be.visible') 
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Egyptian singer & composer Mohammed Abdel Wahab Statue at Bab El-Sharyia square, Cairo') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tAshashyou (talk)\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=4654933') 
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderCloseBtn().should('be.visible').click() 
    })

    it('Opening محمد_عبد_الوهاب slider via image3', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)', { retries: 2 }).scrollIntoView().click() 
        cy.sliderGalleryMain().should('be.visible')  
        cy.sliderImg1().should('be.visible') 
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'en:Mohammad Abdel Wahab, Egyptian singer with a mandolin-banjo.') 
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tUnknown - probably dead the photo was first published in Egypt and taken by a government photographer working for the local press\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') 
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=2839310') 
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') 
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') 
        cy.sliderCloseBtn().should('be.visible').click() 
    })

})