var numeral = require("numeral");

const result = {
  aum: "$146.1 billion",
  ytm: "0.5%",
  dur: "8.4 years",
  wam: "10.0 years",
  expr: "0.08%",
  date: "Characteristicsas of 06/30/2020",
};

var aum = numeral(result.aum.replace("illion", "")).value();
var ytm = Number(result.ytm.replace("%", ""));
var dur = Number(result.dur.replace("years", ""));
var wam = Number(result.wam.replace("years", ""));
var expr = Number(result.expr.replace("%", ""));
var date = result.date.slice(-10);
var newdate =
  date.split("/")[2] + "-" + date.split("/")[0] + "-" + date.split("/")[1];

console.log(aum, ytm, dur, wam, expr, newdate);
