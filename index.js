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

const phoneDigits = await page.$$("div.col.col-1-4.provider-npi-gender ");

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

for (const phoneDigit of phoneDigits){

            try{
                phoneNumber = await page.evaluate((el) => el.querySelector(" div.provider-phone").textContent, phoneDigit);
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

let provname = networkName.split("\n")
let npi = npiNumber.split("\n")
let street = providerStreet.split("\n")
let citystatezip = providerCitystatezip.split("\n")
let phone = phoneNumber.split("\n")


let partsa = plansAvailablea.split("\n")
let partsb = plansAvailableb.split("\n")
let partsc = plansAvailablec.split("\n")



let object1 = {
    "resultName": provname[1],
    "resultNPI": npi[2]
}

let object2 = {
    "phoneNumber": phone[2]
}

let object3 = {
    "address1": street[0],
    "address2": citystatezip
    // "addressState": citystatezip[1],
    // "addressZip": citystatezip[2]
}

let object4 = {
    "planType": partsa[1],
     "planName": partsa[2]
}

let object5 = {
    "planType": partsa[1],
    "planName": partsa[3]
}
let object6 = {
    "planType": partsa[1],
    "planName": partsa[4]
}
let object7 = {
    "planType": partsb[1],
    "planName": partsb[2]
}
let object8 = {
    "planType": partsb[1],
    "planName": partsb[3]
}
let object9 = {
    "planType": partsc[1],
    "planName": partsc[2]
}
console.log( object1, object2, object3, object4, object5, object6, object7, object8, object9)

    })();


   

