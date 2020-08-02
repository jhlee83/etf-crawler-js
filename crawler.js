var numeral = require("numeral");
const { etfs, selectors } = require("./etfs-data");

const puppeteer = require("puppeteer");
const run = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const browser = await puppeteer.launch({
        args: ["--no-sandbox"],
      });
      const page = await browser.newPage();

      let res_data = [];
      for (let index = 0; index <= etfs.length - 1; index++) {
        await page.goto(etfs[index].url);
        let etf_data = {};

        await page.waitForSelector(selectors.aum);
        aum = await page.$eval(selectors.aum, (element) => {
          return element.textContent;
        });

        await page.waitForSelector(selectors.ytm);
        ytm = await page.$eval(selectors.ytm, (element) => {
          return element.textContent;
        });

        await page.waitForSelector(selectors.dur);
        dur = await page.$eval(selectors.dur, (element) => {
          return element.textContent;
        });

        await page.waitForSelector(selectors.wam);
        wam = await page.$eval(selectors.wam, (element) => {
          return element.textContent;
        });

        await page.waitForSelector(selectors.expr);
        expr = await page.$eval(selectors.expr, (element) => {
          return element.textContent;
        });

        await page.waitForSelector(selectors.date);
        date = await page.$eval(selectors.date, (element) => {
          return element.textContent;
        });

        etf_data.aum = numeral(aum.replace("illion", "")).value();
        etf_data.ytm = Number(ytm.replace("%", ""));
        etf_data.dur = Number(dur.replace("years", ""));
        etf_data.wam = Number(wam.replace("years", ""));
        etf_data.expr = Number(expr.replace("%", ""));
        date_pre = date.slice(-10);
        // etf_data.date = date_pre;
        etf_data.date =
          date_pre.split("/")[2] +
          "-" +
          date_pre.split("/")[0] +
          "-" +
          date_pre.split("/")[1];
        res_data.push(etf_data);
      }

      await page.waitFor(1000);
      browser.close();

      return resolve(res_data);
    } catch (e) {
      return reject(e);
    }
  });
};

run()
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.error(err);
  });
