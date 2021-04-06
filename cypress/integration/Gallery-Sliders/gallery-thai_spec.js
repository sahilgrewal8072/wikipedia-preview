// ****************Gallery for Thai in desktop view**************

/// <reference types="Cypress" />

describe('Checking image gallery in thai sliders', () => {
      
    it('Opening พระมหาชนก slider via image1', () => {
        cy.visit('http://localhost:8080/articles/thai.html').url().should('include', '/thai.html') //visit page
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)',{retries:2}).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'พระราชนิพนธ์เรื่องพระมหาชนก') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tไม่รู้จักผู้เขียน\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://th.m.wikipedia.org/w/index.php?curid=148640') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening พระมหาชนก slider via image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(1)').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)',{retries:2}).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'Relief panel of a ship at Borobudur') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tMichaelJLowe\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=2097218') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening วัดร่องขุ่น slider via image1', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(1) > span:nth-child(2)').click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)',{retries:2}).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Wat Rong Khun, Chiang Rai, Nord-Thailand') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tAn-d\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=8630999') // i button
        cy.sliderPrevBtn().should('not.be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('not.be.visible').and('have.css', 'opacity', '0.5') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening จังหวัดเชียงราย slider via image1', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(1)',{retries:2}).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg1().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption1().should('be.visible').and('have.text', 'Photo montage of Chaing Rai—Clockwise from top: King Mangrai Monument, Wat Phra Kaew of Chiang Rai, Wat Rong Khun, Golden Triangle Border in Chiang Saen, Chiang Rai City Clocktower, Doi Tung Royal Villa') //pic 1 caption
        cy.sliderImgAttr1().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t\n\nFile:Chiang Rai Clock Tower.JPG: (WT-shared) Roundtheworld at wts wikivoyage\n\nFile:Wat Phra Kaew Chiang Rai.jpg: User:Chainwit.\n\n\nFile:สวนดอกไม้ที่พระตำหนักดอยตุง , @ Mae Fah Luang Garden - panoramio.jpg: [1]\n\n\nFile:Mangrai Monument.jpg: Thanyakij ที่ วิกิพีเดียภาษาไทย\n\n\nFile:Golden Triangel at Amphoe Chiang Saen.jpg: User:Oatz\n\n\nFile:20171107 White Temple Chiang Rai 0196 DxO.jpg: User:jakubhal\n\nderivative work: User:Chainwit.\n\n\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg1().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=74964296') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '0.5') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening จังหวัดเชียงราย slider via image2', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(2)',{retries:2}).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg2().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption2().should('be.visible').and('have.text', 'ธงสี่เหลี่ยมผืนผ้า พื้นสีฟ้า-ม่วง-ฟ้า แบ่งตามแนวตั้ง กลางแถบสีม่วงมีรูปช้างสีขาวและแถบแพรระบุชื่อจังหวัด') //pic 1 caption
        cy.sliderImgAttr2().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tNOBITAFUNTH\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg2().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=78654252') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

    it('Opening จังหวัดเชียงราย slider via image3', () => {
        cy.reload()
        cy.get('body > div.container > div.content > p:nth-child(2) > span').click()
        cy.continueReadBtn().click()
        cy.get('body > div.wp-popup > div > div.wikipediapreview-body > div > div > div:nth-child(3)',{retries:2}).scrollIntoView().click() //pic 1
        cy.sliderGalleryMain().should('be.visible')  //slider class
        cy.sliderImg3().should('be.visible') //pic 1 visible in slider
        cy.sliderImgCaption3().should('be.visible').and('have.text', 'ตราประจำจังหวัดและตราราชการจังหวัดเชียงราย ภาพนี้มีฐานะเป็นตราราชการ ตามประกาศสำนักนายกรัฐมนตรี เรื่อง กำหนดภาพเครื่องหมายราชการ ตามพระราชบัญญัติเครื่องหมายราชการ พุทธศักราช 2482 (ฉบับที่ 214) [ว่าด้วยการกำหนดเครื่องหมายราชการประจำจังหวัด 75 จังหวัด]') //pic 1 caption
        cy.sliderImgAttr3().should('be.visible').and('have.text', '\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\tFine Arts Department (กรมศิลปากร) of Thailand.\n\t\t\t\t\n\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\n\t\t\t') // pic 1 attribute
        cy.iButtonImg3().should('have.attr', 'href').and('eq', 'https://commons.m.wikimedia.org/w/index.php?curid=4358421') // i button
        cy.sliderPrevBtn().should('be.visible').and('have.css', 'opacity', '1') //previous btn
        cy.sliderNxtBtn().should('be.visible').and('have.css', 'opacity', '1') //next btn
        cy.sliderCloseBtn().should('be.visible').click() //close btn
    })

})

