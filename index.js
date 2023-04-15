//--------------------------------------------------//
//--------------------------------------------------//
//---------------MEDICAID NPI LOOKUP----------------//
//--------------------------------------------------//
//---------------------------------------oriole-----//
//--------------------------------------------------//


const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto("https://ncmedicaidplans.gov/enroll/online/find/find-plan-by-organization/");

    await page.waitForSelector('#ember101', { visible: true, });

// --------------------ADMIN INPUT-----------------------------//

//       ENTER ORGANIZATION NAME  
await page.type('#ember101', 'HCH')

//        ENTER CITY
await page.type('#ember489', 'Raleigh')

// ENTER NPI NUMBER
await page.type('#ember512', '1376509372')

// -----------------------MAGICAL-PUPPETRY--------------------------------//
   
await page.click('#ember555')
const providersInfo = await page.$$(".col.col-1-4.provider-headline");

const addressInfos = await page.$$(".choose-item-details-top > .row  > .col.col-1-4.provider-phone-address > .provider-address");

const planInfos = await page.$$(".choose-item-details-top > .row");

for (const providerInfo of providersInfo){
    
        try{
                networkName = await page.evaluate((el) => el.querySelector(".h3.text-link.network-name").textContent, providerInfo);
            } catch(error) {}
        };

for (const addressInfo of addressInfos){

    try{
        providerAddress = await page.evaluate((el) => el.querySelector(".listing-item").textContent, addressInfo);
    } catch(error) {}
};

for (const planInfo of planInfos){

    try{
        plansAvailable = await page.evaluate((el) => el.querySelector(".col.col-1-4.benefit-plan-wrapper").textContent, planInfo);
    } catch(error) {}
};
  
console.log(networkName + providerAddress + plansAvailable);
    
    })();






//----------other possibilities below-----------------//































// const puppeteer = require("puppeteer");

// (async () => {
//     const browser = await puppeteer.launch({headless: false});    
//     const page = await browser.newPage()
//     await page.goto("https://ncmedicaidplans.gov/enroll/online/find/find-plan-by-organization/");

   
//     await page.waitForSelector('#ember101', {
//         visible: true,    
//       });



// //       ENTER ORGANIZATION NAME  
// await page.type('#ember101', 'HCH')

// //        ENTER CITY
// await page.type('#ember489', 'Raleigh')

// // ENTER NPI NUMBER
// await page.type('#ember512', '1376509372')

   
// await page.click('#ember555')
        
// const grabPlans = await page.evaluate(() => {
//     const planTags = document.querySelectorAll(".provider-plans p")    
    
// let plans = [];
//     planTags.forEach((tag) => {
//         plans.push(tag.innerText);    
//     });

// return plans;

// });

//     console.log(grabPlans);
    
    

// })();








// const puppeteer = require("puppeteer");

// (async () => {
//     const browser = await puppeteer.launch({headless: false});    
//     const page = await browser.newPage()
//     await page.goto("https://ncmedicaidplans.gov/enroll/online/find/find-plan-by-organization/");

   
//     await page.waitForSelector('#ember101', {
//         visible: true,    
//       });



// //       ENTER ORGANIZATION NAME  
// await page.type('#ember101', 'HCH')

// //        ENTER CITY
// await page.type('#ember489', 'Raleigh')

// // ENTER NPI NUMBER
// await page.type('#ember512', '1376509372')

   
// await page.click('#ember555')
        
// const grabPlans = await page.evaluate(() => {
//     const plans = document.querySelectorAll(".provider-plans p")    
    
// let plansArr = [];
//     plans.forEach((plansTag) => {
//         const plansInfo = plansTag.querySelectorAll(".listing-item p");    
//         const actualPlans = plansInfo[0];
//         const actualAddress = plansInfo[1];

//         plansArr.push({plans: actualPlans.innerText, address: actualAddress.innerText, });

//     });

//     return plansArr;



// });






//     console.log(grabPlans);
    
// })();









