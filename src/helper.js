let puppeteer = require('puppeteer');

const Helper = async ( req ) =>{

   const { method, jsonBody, header, testUrl, route } = req;
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    const contentType = {"Content-Type": "application/json" }
    await page.setRequestInterception(true);
    page.on("request", interceptedRequest => {
        interceptedRequest.continue({
            method: method,
            postData: JSON.stringify(jsonBody),
            headers: { ...contentType, ...header },
        });
    });

    const response = await page.goto(testUrl + route);
    const res =  await response.text()

    await browser.close();
    return await res;
};


module.exports = Helper;
