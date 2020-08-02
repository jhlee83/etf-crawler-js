exports.etfs = [
  {
    ticker: "BNDX",
    asset_manager: "Vanguard",
    name: "Vanguard Total International Bond ETF",
    url: "https://investor.vanguard.com/etf/profile/BNDX",
  },
  {
    ticker: "VCIT",
    asset_manager: "Vanguard",
    name: "Vanguard Intermediate-Term Corporate Bond ETF",
    url: "https://investor.vanguard.com/etf/profile/VCIT",
  },
  {
    ticker: "VWOB",
    asset_manager: "Vanguard",
    name: "Vanguard Emerging Markets Government Bond ETF",
    url: "https://investor.vanguard.com/etf/profile/VWOB",
  },
  {
    ticker: "BSV",
    asset_manager: "Vanguard",
    name: "Vanguard Short-Term Bond ETF",
    url: "https://investor.vanguard.com/etf/profile/BSV",
  },
  {
    ticker: "BIV",
    asset_manager: "Vanguard",
    name: "Vanguard Intermediate-Term Bond ETF",
    url: "https://investor.vanguard.com/etf/profile/BIV",
  },
  {
    ticker: "BLV",
    asset_manager: "Vanguard",
    name: "Vanguard Long-Term Bond ETF",
    url: "https://investor.vanguard.com/etf/profile/BLV",
  },
];

exports.selectors = {
  aum:
    "#overviewContainer > div.row.component-block.funds-section.component-block-margin-medium.ng-scope > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > table > tbody > tr:nth-child(1) > td.ng-scope.right > div > span.ng-scope.ng-binding.sceIsLayer.arrangeSec",
  ytm:
    "#overviewContainer > div.row.component-block.funds-section.component-block-margin-medium.ng-scope > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > table > tbody > tr.ng-scope.lastRowNoBottomPadding > td.ng-scope.right > div > span.ng-scope.ng-binding.sceIsLayer.arrangeSec",
  dur:
    "#overviewContainer > div.row.component-block.funds-section.component-block-margin-medium.ng-scope > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > table > tbody > tr:nth-child(4) > td.ng-scope.right > div > span.ng-scope.ng-binding.sceIsLayer.arrangeSec",
  wam:
    "#overviewContainer > div.row.component-block.funds-section.component-block-margin-medium.ng-scope > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > table > tbody > tr:nth-child(3) > td.ng-scope.right > div > span.ng-scope.ng-binding.sceIsLayer.arrangeSec",
  expr:
    "#overviewContainer > div:nth-child(1) > div:nth-child(2) > div > div > table > tbody > tr:nth-child(4) > td:nth-child(2) > div > span.ng-scope.ng-binding.sceIsLayer.arrangeSec > p",
  date:
    "#overviewContainer > div.row.component-block.funds-section.component-block-margin-medium.ng-scope > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div > p > span",
};
