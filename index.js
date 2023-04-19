// //--------------------------------------------------//
// //--------------------------------------------------//
// //---------------MEDICAID NPI LOOKUP----------------//
// //--------------------------------------------------//
// //---------------------------------------oriole-----//
// //--------------------------------------------------//


const puppeteer = require("puppeteer");

(async () => {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage()
    await page.goto("https://ncmedicaidplans.gov/enroll/online/find/find-plan-by-organization/");

    await page.waitForSelector('#ember101', { visible: true, });

// --------------------ADMIN-INPUT-----------------------------//

//       ENTER ORGANIZATION NAME  
await page.type('#ember101', 'HCH')

//        ENTER CITY
await page.type('#ember489', 'Raleigh')

// ENTER NPI NUMBER
await page.type('#ember512', '1376509372')

// -----------------------MAGICAL-PUPPETRY--------------------------------//
   
await page.click('#ember555')


const providersInfo = await page.$$("div.col.col-1-4.provider-headline > .headline ");

const providerNpis = await page.$$("div.col.col-1-4.provider-npi-gender");

const addressInfoas = await page.$$(".choose-item-details-top > .row  > .col.col-1-4.provider-phone-address");

const addressInfobs = await page.$$(".choose-item-details-top > .row  > .col.col-1-4.provider-phone-address");

const planInfoas = await page.$$("div.col.col-1-4.benefit-plan-wrapper");

const planInfobs = await page.$$("div.col.col-1-4.benefit-plan-wrapper");

const planInfocs = await page.$$("div.col.col-1-4.benefit-plan-wrapper");

for (const providerInfo of providersInfo){
    
        try{
                networkName = await page.evaluate((el) => el.querySelector(" .h3").textContent, providerInfo);
            } catch(error) {}
        };

 for (const providerNpi of providerNpis){

            try{
                npiNumber = await page.evaluate((el) => el.querySelector(" div.provider-npi").textContent, providerNpi);
            } catch(error) {}
        };
        
for (const addressInfoa of addressInfoas){

    try{
        providerStreet = await page.evaluate((el) => el.querySelector(" div:nth-child(2) > p:nth-child(2)").textContent, addressInfoa);
    } catch(error) {}
};

for (const addressInfob of addressInfobs){

    try{
        providerCitystatezip = await page.evaluate((el) => el.querySelector(" div:nth-child(2) > p:nth-child(4)").textContent, addressInfob);
    } catch(error) {}
};

for (const planInfoa of planInfoas){

    try{
        plansAvailablea = await page.evaluate((el) => el.querySelector("div:nth-child(1)").textContent, planInfoa);
    } catch(error) {}
};

for (const planInfob of planInfobs){

    try{
        plansAvailableb = await page.evaluate((el) => el.querySelector("div:nth-child(2)").textContent, planInfob);
    } catch(error) {}
};

for (const planInfoc of planInfocs){

    try{
        plansAvailablec = await page.evaluate((el) => el.querySelector("div:nth-child(3)").textContent, planInfoc);
    } catch(error) {}
};

console.log( networkName + npiNumber + providerStreet + providerCitystatezip + plansAvailablea + plansAvailableb + plansAvailablec );
    
    })();


   

