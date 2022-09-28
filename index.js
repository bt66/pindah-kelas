const puppeteer = require('puppeteer');

// const websocket = 'ws://127.0.0.1:9222/devtools/browser/b50f7e59-7244-4945-9737-472ab810e224'
(async () => {
    const browser = await puppeteer.connect({
        browserWSEndpoint: "ws://127.0.0.1:9222/devtools/browser/b50f7e59-7244-4945-9737-472ab810e224"
    });
    const page = await browser.newPage();
    await page.setViewport({width: 1920, height: 1080});
    await page.goto('https://mhs.amikom.ac.id/kuliah/#!/pindah_kelas', {
        waitUntil: 'networkidle2',
    });
    await page.waitForSelector('#content > div > div.row > div > div > div > div > div.card-body.card-padding.p-t-20 > div > table > tbody > tr:nth-child(12) > td:nth-child(2) > div > a:nth-child(2) > div.pull-left > button')
    var i = 0;
    while(true) {
        await page.click('#content > div > div.row > div > div > div > div > div.card-body.card-padding.p-t-20 > div > table > tbody > tr:nth-child(12) > td:nth-child(2) > div > a:nth-child(2) > div.pull-left > button')
        await new Promise(r => setTimeout(r, 1000));
    }

    
    // await page.screenshot({path: 'example.png'});

    // await page.click('#content > div > div.row > div > div > div > div > div.card-body.card-padding.p-t-20 > div > table > tbody > tr:nth-child(12) > td:nth-child(2) > div > a:nth-child(2) > div.pull-left > button')
    // await page.screenshot({path: 'example.png'});

    // await browser.close();
})();