---
layout: null
title: Baltic investment plan
description: Nasdaq Baltic portfolio report
---
<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Baltic investment plan</title>
<style>
:root { --ink:#17212b; --muted:#607080; --accent:#007f8b; --line:#dce3e8; --paper:#fff; --bg:#f3f6f8; }
* { box-sizing:border-box; }
html { scroll-behavior:smooth; }
body { margin:0; background:var(--bg); color:var(--ink); font:16px/1.55 system-ui,-apple-system,"Segoe UI",sans-serif; }
main { width:min(1500px,calc(100% - 32px)); margin:24px auto; padding:42px clamp(18px,5vw,72px); background:var(--paper); border-radius:10px; box-shadow:0 2px 16px #20304018; }
h1 { color:#173246; font-size:2.25rem; line-height:1.15; }
h2 { margin-top:2.6rem; padding-bottom:.35rem; color:#173246; border-bottom:2px solid var(--accent); }
h3 { margin-top:2rem; color:#24536a; }
details { margin:1rem 0; padding:.25rem .9rem .8rem; border:1px solid var(--line); border-radius:8px; background:#fbfcfd; }
details details { background:white; }
summary { cursor:pointer; padding:.65rem .1rem; color:#174d61; }
summary:hover { color:var(--accent); }
table { display:block; width:100%; overflow-x:auto; border-collapse:collapse; white-space:nowrap; font-size:.88rem; margin:.7rem 0 1rem; }
.effect-table { display:table; table-layout:fixed; white-space:normal; font-size:.82rem; }
.effect-table th:first-child,.effect-table td:first-child { width:22%; }
.effect-table th,.effect-table td { overflow-wrap:anywhere; }
.stock-summary-table { display:table; table-layout:fixed; width:100%; overflow:visible; white-space:normal; font-size:.76rem; }
.stock-summary-table th { height:150px; padding:.35rem .1rem; text-align:center; vertical-align:bottom; }
.stock-summary-table th span { display:inline-block; writing-mode:vertical-rl; transform:rotate(180deg); white-space:nowrap; }
.stock-summary-table td { padding:.4rem .12rem; text-align:center; overflow-wrap:anywhere; }
.stock-summary-table th:first-child,.stock-summary-table td:first-child { text-align:center; }
th,td { padding:.5rem .65rem; border:1px solid var(--line); text-align:right; }
th { background:#dceff1; color:#173246; }
th:first-child,td:first-child { text-align:left; }
tr:nth-child(even) td { background:#f7fafb; }
img { display:block; max-width:100%; height:auto; margin:1rem auto; border:1px solid var(--line); border-radius:6px; cursor:zoom-in; }
a { color:var(--accent); }
@media(max-width:700px) { main { width:100%; margin:0; padding:22px 14px; border-radius:0; } h1 { font-size:1.7rem; } }
</style>
</head>
<body><main markdown="1">
# Baltic investment plan

Private Nasdaq Baltic portfolio analysis. Tables, figures and individual-share information are collapsed; select a title to expand it.


---

# Nasdaq Baltic universe: maximum-netSD portfolio

Study period: 2023-01-01 to 2026-08-29 | Portfolio ceiling: EUR 15,000 | Existing positions may be sold

## Optimisation result

The best numerical solution found has netSD 0.902655 (OUT=102, IN=0, denominator=113). It is evaluated against one fixed reference network containing 55 quality-approved shares, the current portfolio, and the ten earlier training/full-data portfolios.

Current-portfolio netSD is 0.451327; the optimised-portfolio value is 0.902655. Historical gross dividends for the final whole-share quantities are EUR 2109.24. These historical dividends are a counterfactual, before tax and without reinvestment, rather than a forecast.

<details markdown="1">
<summary><strong>Table 1. Optimisation objective and constraint checks</strong></summary>

| Component | Restriction or objective | Obtained value | Result |
| --- | --- | --- | --- |
| Objective: netSD | maximum value found numerically | 0.90265487 | Reported |
| Budget | invested <= 15000 | 14917.78905687 | Satisfied |
| Residual cash | >= 0 | 82.21094313 | Satisfied |
| Full-investment weights | sum(w) = 1 | 1.00000000 | Satisfied |
| Long only | min(w) >= 0 | 0.00000000 | Satisfied |
| Sales | existing positions may be reduced to zero | -330.00000000 | Allowed |
| Minimum mean | >= 0.00037514 | 0.00059719 | Satisfied |
| Historical dividends | descriptive only; excluded from objective | 2109.24411680 | EUR historical gross cash |

</details>


<details markdown="1">
<summary><strong>Table 2. Eligible Nasdaq Baltic shares and the optimised allocation</strong></summary>

| asset | name | market | last_price | optimal_weight_percent | current_shares | target_shares | trade_shares | action | invested_EUR | historical_dividend_cash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIR | Airobot Technologies | TLN | 1.8100 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| AKO1L | Akola Group | VLN | 1.7700 | 1.4616 | 0 | 123 | 123 | BUY | 217.7100 | 0.0000 |
| AMG1L | Amber Grid | VLN | 1.2000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| APG1L | Apranga | VLN | 3.9800 | 9.4074 | 200 | 354 | 154 | BUY | 1408.9200 | 364.6200 |
| ARC1T | Arco Vara | TLN | 1.2400 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| AUG1L | AUGA group | VLN | 0.0976 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| BAL1R | Amber Latvijas balzams | RIG | 1.3000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| BERCM | Bercman Technologies | TLN | 1.0850 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| CPA1T | Coop Pank | TLN | 2.3300 | 0.1559 | 0 | 10 | 10 | BUY | 23.3000 | 2.6700 |
| CTS1L | City Service | VLN | 0.1560 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| DGR1R | DelfinGroup | RIG | 1.5300 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| EFT1T | EfTEN Real Estate Fund | TLN | 19.4000 | 3.9580 | 0 | 30 | 30 | BUY | 582.0000 | 133.8780 |
| EWA1L | East West Agro | VLN | 15.6000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| GRG1L | Grigeo Group | VLN | 1.0100 | 5.1146 | 0 | 759 | 759 | BUY | 766.5900 | 129.0300 |
| HAE1T | Harju Elekter Group | TLN | 5.1400 | 3.1770 | 100 | 92 | -8 | SELL | 472.8800 | 53.3600 |
| HPR1T | Hepsor | TLN | 5.1400 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IDX1R | INDEXO | RIG | 9.3000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IGN1L | Ignitis grupė | VLN | 22.1000 | 3.5243 | 0 | 23 | 23 | BUY | 508.3000 | 90.1370 |
| INC1L | INVL Technology | VLN | 4.9200 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| INL1L | INVL Baltic Farmland | VLN | 6.9500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| INR1L | INVL Baltic Real Estate | VLN | 3.0400 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IVL1L | Invalda INVL | VLN | 27.8000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| KNE1L | KN Energies | VLN | 0.4920 | 12.0143 | 0 | 3662 | 3662 | BUY | 1801.7040 | 235.8328 |
| KNR1L | Kauno energija | VLN | 2.0800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| LGD1L | LITGRID | VLN | 1.1200 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| LHV1T | LHV Group | TLN | 3.3350 | 0.7640 | 0 | 34 | 34 | BUY | 113.3900 | 14.6200 |
| LINDA | Linda Nektar | TLN | 4.5000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MAGIC | TextMagic | TLN | 1.7100 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MDARA | MADARA Cosmetics | RIG | 9.8800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MODE | Modera | TLN | 5.9000 | 3.1959 | 0 | 81 | 81 | BUY | 477.9000 | 0.0000 |
| MOLNR | J. Molner | TLN | 18.9000 | 4.7693 | 0 | 37 | 37 | BUY | 699.3000 | 0.0000 |
| MRK1T | Merko Ehitus | TLN | 26.9000 | 5.2056 | 20 | 29 | 9 | BUY | 780.1000 | 158.0500 |
| NCN1T | Nordecon | TLN | 0.5980 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| NEOFI | NEO Finance | VLN | 2.2000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PKG1T | Pro Kapital Grupp | TLN | 0.6500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PRF1T | PRFoods | TLN | 0.0550 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PZV1L | Pieno žvaigždės | VLN | 1.7300 | 3.4439 | 0 | 298 | 298 | BUY | 515.5400 | 125.1600 |
| ROE1L | Artea Bankas | VLN | 0.8950 | 1.1915 | 416 | 199 | -217 | SELL | 178.1050 | 27.0640 |
| RSU1L | Rokiškio sūris | VLN | 4.5600 | 7.1815 | 0 | 236 | 236 | BUY | 1076.1600 | 165.2000 |
| SAF1R | SAF Tehnika | RIG | 17.1500 | 0.0000 | 100 | 0 | -100 | SELL | 0.0000 | 0.0000 |
| SAUNA | Saunum Group | TLN | 2.6500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SCM1R | Siguldas ciltslietu un mākslīgās apsēklošanas stacija | RIG | 6.7000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SFG1T | Silvano Fashion Group | TLN | 1.0700 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SKN1T | Nordic Fibreboard | TLN | 0.6200 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| TAL1T | Tallink Grupp | TLN | 0.6200 | 4.2543 | 700 | 1029 | 329 | BUY | 637.9800 | 154.3500 |
| TEL1L | Telia Lietuva | VLN | 2.2200 | 9.3207 | 0 | 629 | 629 | BUY | 1396.3800 | 194.9900 |
| TKM1T | TKM Grupp | TLN | 9.1000 | 4.1929 | 288 | 69 | -219 | SELL | 627.9000 | 182.8500 |
| TPD1T | Trigon Property Development | TLN | 0.5700 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| TSM1T | Tallinna Sadam | TLN | 1.2220 | 0.0000 | 330 | 0 | -330 | SELL | 0.0000 | 0.0000 |
| TVE1T | Tallinna Vesi | TLN | 10.8500 | 0.8246 | 0 | 11 | 11 | BUY | 119.3500 | 21.3400 |
| UTR1L | Utenos trikotažas | VLN | 0.3840 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| VBL1L | Vilniaus baldai | VLN | 9.7000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| VIRSI | VIRŠI-A | RIG | 4.3800 | 6.0258 | 0 | 206 | 206 | BUY | 902.2800 | 56.0923 |
| VLP1L | Vilkyškių pieninė | VLN | 15.5000 | 10.8169 | 42 | 104 | 62 | BUY | 1612.0000 | 0.0000 |
| ZMP1L | Žemaitijos pienas | VLN | 2.5600 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |

</details>


<details markdown="1">
<summary><strong>Table 3. Buy, sell and hold decisions for nonzero current or target positions</strong></summary>

| asset | name | last_price | target_weight_percent | current_shares | target_shares | trade_shares | action | invested_EUR | total_dividend_per_share | historical_dividend_cash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| KNE1L | KN Energies | 0.4920 | 12.0143 | 0 | 3662 | 3662 | BUY | 1801.7040 | 0.0644 | 235.8328 |
| VLP1L | Vilkyškių pieninė | 15.5000 | 10.8169 | 42 | 104 | 62 | BUY | 1612.0000 | 0.0000 | 0.0000 |
| APG1L | Apranga | 3.9800 | 9.4074 | 200 | 354 | 154 | BUY | 1408.9200 | 1.0300 | 364.6200 |
| TEL1L | Telia Lietuva | 2.2200 | 9.3207 | 0 | 629 | 629 | BUY | 1396.3800 | 0.3100 | 194.9900 |
| RSU1L | Rokiškio sūris | 4.5600 | 7.1815 | 0 | 236 | 236 | BUY | 1076.1600 | 0.7000 | 165.2000 |
| VIRSI | VIRŠI-A | 4.3800 | 6.0258 | 0 | 206 | 206 | BUY | 902.2800 | 0.2723 | 56.0923 |
| MRK1T | Merko Ehitus | 26.9000 | 5.2056 | 20 | 29 | 9 | BUY | 780.1000 | 5.4500 | 158.0500 |
| GRG1L | Grigeo Group | 1.0100 | 5.1146 | 0 | 759 | 759 | BUY | 766.5900 | 0.1700 | 129.0300 |
| MOLNR | J. Molner | 18.9000 | 4.7693 | 0 | 37 | 37 | BUY | 699.3000 | 0.0000 | 0.0000 |
| TAL1T | Tallink Grupp | 0.6200 | 4.2543 | 700 | 1029 | 329 | BUY | 637.9800 | 0.1500 | 154.3500 |
| TKM1T | TKM Grupp | 9.1000 | 4.1929 | 288 | 69 | -219 | SELL | 627.9000 | 2.6500 | 182.8500 |
| EFT1T | EfTEN Real Estate Fund | 19.4000 | 3.9580 | 0 | 30 | 30 | BUY | 582.0000 | 4.4626 | 133.8780 |
| IGN1L | Ignitis grupė | 22.1000 | 3.5243 | 0 | 23 | 23 | BUY | 508.3000 | 3.9190 | 90.1370 |
| PZV1L | Pieno žvaigždės | 1.7300 | 3.4439 | 0 | 298 | 298 | BUY | 515.5400 | 0.4200 | 125.1600 |
| MODE | Modera | 5.9000 | 3.1959 | 0 | 81 | 81 | BUY | 477.9000 | 0.0000 | 0.0000 |
| HAE1T | Harju Elekter Group | 5.1400 | 3.1770 | 100 | 92 | -8 | SELL | 472.8800 | 0.5800 | 53.3600 |
| AKO1L | Akola Group | 1.7700 | 1.4616 | 0 | 123 | 123 | BUY | 217.7100 | 0.0000 | 0.0000 |
| ROE1L | Artea Bankas | 0.8950 | 1.1915 | 416 | 199 | -217 | SELL | 178.1050 | 0.1360 | 27.0640 |
| TVE1T | Tallinna Vesi | 10.8500 | 0.8246 | 0 | 11 | 11 | BUY | 119.3500 | 1.9400 | 21.3400 |
| LHV1T | LHV Group | 3.3350 | 0.7640 | 0 | 34 | 34 | BUY | 113.3900 | 0.4300 | 14.6200 |
| CPA1T | Coop Pank | 2.3300 | 0.1559 | 0 | 10 | 10 | BUY | 23.3000 | 0.2670 | 2.6700 |
| SAF1R | SAF Tehnika | 17.1500 | 0.0000 | 100 | 0 | -100 | SELL | 0.0000 | 0.0000 | 0.0000 |
| TSM1T | Tallinna Sadam | 1.2220 | 0.0000 | 330 | 0 | -330 | SELL | 0.0000 | 0.2920 | 0.0000 |

</details>


A positive trade_shares value means buy, a negative value means sell, and zero means hold. Target shares are obtained by flooring the continuous optimal allocation at the last observed price; unused cash therefore remains nonnegative.

## Table 3A: interactive share profiles

Select a share to display its allocation, technical indicators, all PerformanceAnalytics measures, stochastic-dominance curves and leave-one-out effect.

<details markdown="1" class="stock-profile" id="share-molnr">
<summary><strong>MOLNR — J. Molner</strong> | BUY | target 27 shares | priority 1</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>27</td><td>+27</td><td>3.43%</td><td>EUR 18.9000</td><td>0.0354</td><td>4 / 0</td><td>44.96</td><td>Bullish</td><td>Inside bands</td><td>BUY</td><td>2026-08-28</td></tr></tbody></table>

![MOLNR Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/MOLNR_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![MOLNR complete technical history](figures/technical_analysis/MOLNR_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![MOLNR return histogram](figures/stock_profiles/MOLNR_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![MOLNR stochastic dominance](figures/stock_profiles/MOLNR_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.035370 | -0.632155 | DownsideDeviation | 0.021080 | 0.023230 | Selectivity | 0.213933 | -0.453055 |
| AdjustedSharpe | 0.523043 | -0.568889 | DrawdownDeviation | 0.024587 | 0.023438 | Sharpe_Annualized | 0.575704 | -0.664085 |
| AnnualizedReturn_Arithmetic | 0.350903 | -0.358634 | ES_Loss | 0.072744 | 0.076273 | Sharpe_Daily | 0.036266 | -0.041833 |
| AnnualizedReturn_Geometric | 0.193319 | -0.394946 | FamaBeta | 3.471131 | 3.484960 | Sharpe_ES | 0.019142 | -0.018659 |
| Appraisal | 0.351338 | -0.844364 | GeometricReturn | 0.000702 | -0.001992 | Sharpe_VaR | 0.027639 | -0.025591 |
| ArithmeticReturn | 0.001392 | -0.001423 | Hurst | 0.407470 | 0.409377 | Skewness | 3.034693 | 0.637172 |
| AverageDrawdown | 0.120579 | 0.263088 | Information_Annualized | -0.055380 | -1.146735 | Sortino | 0.066055 | -0.061262 |
| AverageDrawdownLength | 43.529412 | 125.000000 | Information_Daily | -0.002883 | -0.081691 | SpecificRisk | 0.608909 | 0.536564 |
| AverageRecoveryTime | 11.941176 | 4.000000 | JensenAlpha | 0.213933 | -0.453055 | Sterling | 0.354247 | -1.087744 |
| BernardoLedoit | 1.148553 | 0.863195 | Kappa | 0.044823 | -0.042704 | SystematicRisk | -0.015828 | 0.037961 |
| BetaCoKurtosis | -0.465313 | -0.257264 | Kelly | 0.944522 | -1.229692 | TotalRisk | 0.609115 | 0.537905 |
| BetaCoSkewness | -8.256766 | -37.945591 | Kurtosis | 30.708821 | 6.963288 | TrackingError_Annualized | 0.638676 | 0.551265 |
| Burke | 0.254461 | -1.212596 | M2Sortino | 0.179156 | -0.378585 | TrackingError_Daily | 0.040233 | 0.034726 |
| CAPMAlpha | 0.001472 | -0.001642 | MSquaredExcess | -0.140797 | -0.283330 | Treynor_Annualized | -2.144712 | -1.612235 |
| CAPMBeta | -0.090138 | 0.244968 | Martin | 1.010558 | -2.729625 | Treynor_Daily | -0.007784 | -0.008131 |
| CDD | 0.248431 | 0.249933 | MaximumDrawdown | 0.445720 | 0.263088 | UlcerIndex | 0.191300 | 0.144689 |
| Calmar | 0.433724 | -1.501197 | Modigliani | 0.000401 | -0.000408 | UpCapture | 0.148826 | 0.355282 |
| CoKurtosis | -0.000000 | -0.000000 | NetSelectivity | -0.600491 | -1.221611 | UpNumber | 0.295872 | 0.260274 |
| CoSkewness | -0.000001 | -0.000000 | Omega | 1.148553 | 0.863195 | UpPercent | 0.252294 | 0.246575 |
| CumulativeReturn | 0.696918 | -0.222148 | OmegaExcessReturn | 0.072625 | -0.507465 | UpsidePotential | 0.510711 | 0.386546 |
| DRatio | 1.067137 | 1.569562 | PainIndex | 0.157711 | 0.126142 | UpsideRisk | 0.032091 | 0.024708 |
| DownCapture | -0.224965 | 0.869388 | PainRatio | 1.225786 | -3.130973 | VaR_Loss | 0.050381 | 0.055611 |
| DownNumber | 0.389937 | 0.377358 | Prospect | -0.489765 | -0.621023 | Volatility | 0.038396 | 0.034019 |
| DownPercent | 0.688679 | 0.660377 | Rachev | 1.351381 | 1.000007 | Volatility_Annualized | 0.609519 | 0.540042 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.725664</td><td>-0.097345</td></tr><tr><td>OUT</td><td>93</td><td>82</td><td>-11</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.084471</td><td>-0.059806</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.147143</td><td>-0.017500</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-vlp1l">
<summary><strong>VLP1L — Vilkyškių pieninė</strong> | HOLD | target 69 shares | priority 2</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>42</td><td>69</td><td>+27</td><td>7.13%</td><td>EUR 15.5000</td><td>0.3805</td><td>43 / 0</td><td>57.67</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![VLP1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/VLP1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![VLP1L complete technical history](figures/technical_analysis/VLP1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![VLP1L return histogram](figures/stock_profiles/VLP1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![VLP1L stochastic dominance](figures/stock_profiles/VLP1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | 0.103798 | 0.335868 | DownsideDeviation | 0.007420 | 0.009399 | Selectivity | 0.319473 | 0.540466 |
| AdjustedSharpe | -0.792235 | -2.184440 | DrawdownDeviation | 0.010767 | 0.011334 | Sharpe_Annualized | 1.495653 | 2.116998 |
| AnnualizedReturn_Arithmetic | 0.308070 | 0.479041 | ES_Loss | 0.024133 | 0.028916 | Sharpe_Daily | 0.094217 | 0.133358 |
| AnnualizedReturn_Geometric | 0.332487 | 0.573077 | FamaBeta | 1.173012 | 1.460236 | Sharpe_ES | 0.050656 | 0.065740 |
| Appraisal | 1.553874 | 2.408683 | GeometricReturn | 0.001140 | 0.001799 | Sharpe_VaR | 0.084766 | 0.143087 |
| ArithmeticReturn | 0.001223 | 0.001901 | Hurst | 0.426761 | 0.450503 | Skewness | 1.859172 | -0.912603 |
| AverageDrawdown | 0.039828 | 0.026784 | Information_Annualized | 0.393018 | 1.282207 | Sortino | 0.164747 | 0.202250 |
| AverageDrawdownLength | 25.392857 | 12.444444 | Information_Daily | 0.019363 | 0.057835 | SpecificRisk | 0.205598 | 0.224383 |
| AverageRecoveryTime | 14.107143 | 7.222222 | JensenAlpha | 0.319473 | 0.540466 | Sterling | 1.292930 | 2.697470 |
| BernardoLedoit | 1.369319 | 1.540203 | Kappa | 0.100544 | 0.111932 | SystematicRisk | 0.009993 | 0.021304 |
| BetaCoKurtosis | -0.007644 | 0.180060 | Kelly | 7.261257 | 9.355517 | TotalRisk | 0.205841 | 0.225392 |
| BetaCoSkewness | -0.725375 | -8.594713 | Kurtosis | 24.383907 | 12.156535 | TrackingError_Annualized | 0.264105 | 0.261945 |
| Burke | 1.256071 | 4.765844 | M2Sortino | 0.332887 | 0.563470 | TrackingError_Daily | 0.016637 | 0.016501 |
| CAPMAlpha | 0.001173 | 0.001778 | MSquaredExcess | 0.044566 | 0.125481 | Treynor_Annualized | 5.842701 | 4.168566 |
| CAPMBeta | 0.056906 | 0.137476 | Martin | 5.265313 | 9.792844 | Treynor_Daily | 0.020028 | 0.013089 |
| CDD | 0.095077 | 0.056340 | MaximumDrawdown | 0.157158 | 0.112450 | UlcerIndex | 0.063147 | 0.058520 |
| Calmar | 2.115625 | 5.096293 | Modigliani | 0.001042 | 0.001302 | UpCapture | 0.183974 | 0.395549 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | 0.064232 | 0.226696 | UpNumber | 0.426606 | 0.493151 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 1.369319 | 1.540203 | UpPercent | 0.275229 | 0.356164 |
| CumulativeReturn | 1.360478 | 0.254224 | OmegaExcessReturn | 0.290002 | 0.527552 | UpsidePotential | 0.610832 | 0.576647 |
| DRatio | 0.658191 | 0.533325 | PainIndex | 0.047953 | 0.043557 | UpsideRisk | 0.010704 | 0.010810 |
| DownCapture | -0.130313 | -0.061796 | PainRatio | 6.933606 | 13.156916 | VaR_Loss | 0.014422 | 0.013285 |
| DownNumber | 0.361635 | 0.396226 | Prospect | -0.392858 | -0.265746 | Volatility | 0.012975 | 0.014255 |
| DownPercent | 0.798742 | 0.811321 | Rachev | 1.428309 | 1.339621 | Volatility_Annualized | 0.205977 | 0.226283 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.699115</td><td>-0.123894</td></tr><tr><td>OUT</td><td>93</td><td>79</td><td>-14</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.131153</td><td>-0.013124</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.134036</td><td>-0.030607</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-kne1l">
<summary><strong>KNE1L — KN Energies</strong> | HOLD | target 1438 shares | priority 3</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>1438</td><td>+1438</td><td>4.72%</td><td>EUR 0.4920</td><td>0.3717</td><td>42 / 0</td><td>55.64</td><td>Bullish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![KNE1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/KNE1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![KNE1L complete technical history](figures/technical_analysis/KNE1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![KNE1L return histogram](figures/stock_profiles/KNE1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![KNE1L stochastic dominance](figures/stock_profiles/KNE1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | 0.023117 | 0.021446 | DownsideDeviation | 0.007426 | 0.006984 | Selectivity | 0.240138 | 0.210158 |
| AdjustedSharpe | 0.864712 | 1.257272 | DrawdownDeviation | 0.011794 | 0.011740 | Sharpe_Annualized | 1.223506 | 1.271371 |
| AnnualizedReturn_Arithmetic | 0.244434 | 0.248977 | ES_Loss | 0.024832 | 0.022242 | Sharpe_Daily | 0.077074 | 0.080089 |
| AnnualizedReturn_Geometric | 0.251806 | 0.258655 | FamaBeta | 1.137731 | 1.263739 | Sharpe_ES | 0.039062 | 0.044421 |
| Appraisal | 1.204012 | 1.091815 | GeometricReturn | 0.000892 | 0.000913 | Sharpe_VaR | 0.062324 | 0.068795 |
| ArithmeticReturn | 0.000970 | 0.000988 | Hurst | 0.383627 | 0.393154 | Skewness | 1.082079 | 1.191092 |
| AverageDrawdown | 0.040766 | 0.036560 | Information_Annualized | 0.088911 | 0.093558 | Sortino | 0.130612 | 0.141463 |
| AverageDrawdownLength | 33.000000 | 16.142857 | Information_Daily | 0.004520 | 0.004727 | SpecificRisk | 0.199448 | 0.192485 |
| AverageRecoveryTime | 18.954545 | 4.857143 | JensenAlpha | 0.240138 | 0.210158 | Sterling | 0.694925 | 1.294711 |
| BernardoLedoit | 1.290164 | 1.276219 | Kappa | 0.083316 | 0.101837 | SystematicRisk | 0.008959 | 0.031682 |
| BetaCoKurtosis | -0.058605 | 0.256004 | Kelly | 6.124211 | 6.492104 | TotalRisk | 0.199650 | 0.195075 |
| BetaCoSkewness | -1.303857 | -8.623774 | Kurtosis | 11.239148 | 6.912086 | TrackingError_Annualized | 0.260001 | 0.229228 |
| Burke | 1.001545 | 2.409198 | M2Sortino | 0.252111 | 0.257359 | TrackingError_Daily | 0.016379 | 0.014440 |
| CAPMAlpha | 0.000925 | 0.000806 | MSquaredExcess | -0.005995 | -0.026297 | Treynor_Annualized | 4.935416 | 1.265141 |
| CAPMBeta | 0.051020 | 0.204448 | Martin | 2.047422 | 5.885860 | Treynor_Daily | 0.017476 | 0.004467 |
| CDD | 0.090512 | 0.082577 | MaximumDrawdown | 0.262350 | 0.099778 | UlcerIndex | 0.122987 | 0.043945 |
| Calmar | 0.959809 | 2.592299 | Modigliani | 0.000853 | 0.000782 | UpCapture | 0.160227 | 0.309463 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | -0.008381 | -0.041115 | UpNumber | 0.364679 | 0.465753 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 1.290164 | 1.276219 | UpPercent | 0.227064 | 0.260274 |
| CumulativeReturn | 0.958110 | 0.121898 | OmegaExcessReturn | 0.209287 | 0.224827 | UpsidePotential | 0.580744 | 0.653606 |
| DRatio | 0.740349 | 0.755580 | PainIndex | 0.091665 | 0.036003 | UpsideRisk | 0.010196 | 0.010158 |
| DownCapture | -0.085429 | 0.099146 | PainRatio | 2.747028 | 7.184345 | VaR_Loss | 0.015563 | 0.014362 |
| DownNumber | 0.355346 | 0.471698 | Prospect | -0.432052 | -0.498715 | Volatility | 0.012585 | 0.012336 |
| DownPercent | 0.801887 | 0.830189 | Rachev | 1.379867 | 1.451616 | Volatility_Annualized | 0.199782 | 0.195833 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.769912</td><td>-0.053097</td></tr><tr><td>OUT</td><td>93</td><td>87</td><td>-6</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.155081</td><td>0.010804</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.155578</td><td>-0.009066</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-mrk1t">
<summary><strong>MRK1T — Merko Ehitus</strong> | HOLD | target 42 shares | priority 4</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>20</td><td>42</td><td>+22</td><td>7.70%</td><td>EUR 26.9000</td><td>0.3717</td><td>42 / 0</td><td>40.54</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![MRK1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/MRK1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![MRK1T complete technical history](figures/technical_analysis/MRK1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![MRK1T return histogram](figures/stock_profiles/MRK1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![MRK1T stochastic dominance](figures/stock_profiles/MRK1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.000176 | -0.574166 | DownsideDeviation | 0.006322 | 0.009127 | Selectivity | 0.207631 | -0.381428 |
| AdjustedSharpe | 0.276910 | 3.557501 | DrawdownDeviation | 0.010945 | 0.019004 | Sharpe_Annualized | 1.307029 | -2.383941 |
| AnnualizedReturn_Arithmetic | 0.219897 | -0.396606 | ES_Loss | 0.021553 | 0.030530 | Sharpe_Daily | 0.082335 | -0.150174 |
| AnnualizedReturn_Geometric | 0.228513 | -0.336957 | FamaBeta | 0.958116 | 1.073578 | Sharpe_ES | 0.040486 | -0.051550 |
| Appraisal | 1.240587 | -2.337786 | GeometricReturn | 0.000817 | -0.001629 | Sharpe_VaR | 0.072461 | -0.104490 |
| ArithmeticReturn | 0.000873 | -0.001574 | Hurst | 0.405900 | 0.474740 | Skewness | 1.268852 | -2.208140 |
| AverageDrawdown | 0.030621 | 0.055630 | Information_Annualized | -0.000761 | -2.779003 | Sortino | 0.138032 | -0.172439 |
| AverageDrawdownLength | 22.258065 | 30.750000 | Information_Daily | -0.000039 | -0.190111 | SpecificRisk | 0.167365 | 0.163158 |
| AverageRecoveryTime | 11.064516 | 6.750000 | JensenAlpha | 0.207631 | -0.381428 | Sterling | 0.729500 | -1.075693 |
| BernardoLedoit | 1.329059 | 0.580787 | Kappa | 0.082490 | -0.102340 | SystematicRisk | 0.016034 | 0.029052 |
| BetaCoKurtosis | -0.013832 | 0.214573 | Kelly | 7.768742 | -14.329540 | TotalRisk | 0.168131 | 0.165724 |
| BetaCoSkewness | -0.108044 | 12.836893 | Kurtosis | 17.955590 | 17.229892 | TrackingError_Annualized | 0.231319 | 0.206609 |
| Burke | 0.901691 | -2.371925 | M2Sortino | 0.231256 | -0.329511 | TrackingError_Daily | 0.014572 | 0.013015 |
| CAPMAlpha | 0.000792 | -0.001741 | MSquaredExcess | 0.007987 | -0.445416 | Treynor_Annualized | 2.502555 | -1.797332 |
| CAPMBeta | 0.091312 | 0.187476 | Martin | 2.953061 | -2.072142 | Treynor_Daily | 0.008948 | -0.008691 |
| CDD | 0.054320 | 0.140231 | MaximumDrawdown | 0.213246 | 0.213246 | UlcerIndex | 0.077382 | 0.162613 |
| Calmar | 1.071592 | -1.580130 | Modigliani | 0.000911 | -0.001466 | UpCapture | 0.232974 | -0.045421 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | 0.009402 | -0.591620 | UpNumber | 0.470183 | 0.342466 |
| CoSkewness | -0.000000 | 0.000000 | Omega | 1.329059 | 0.580787 | UpPercent | 0.243119 | 0.164384 |
| CumulativeReturn | 0.851101 | -0.185726 | OmegaExcessReturn | 0.192319 | -0.381164 | UpsidePotential | 0.557509 | 0.238902 |
| DRatio | 0.694712 | 2.459716 | PainIndex | 0.049366 | 0.148000 | UpsideRisk | 0.008542 | 0.005304 |
| DownCapture | 0.035101 | 0.407574 | PainRatio | 4.628938 | -2.276735 | VaR_Loss | 0.012042 | 0.015062 |
| DownNumber | 0.430818 | 0.490566 | Prospect | -0.386314 | -0.686616 | Volatility | 0.010598 | 0.010480 |
| DownPercent | 0.808176 | 0.792453 | Rachev | 1.344492 | 0.616486 | Volatility_Annualized | 0.168242 | 0.166365 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.734513</td><td>-0.088496</td></tr><tr><td>OUT</td><td>93</td><td>83</td><td>-10</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.127628</td><td>-0.016649</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.150276</td><td>-0.014368</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-virsi">
<summary><strong>VIRSI — VIRŠI-A</strong> | HOLD | target 44 shares | priority 5</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>44</td><td>+44</td><td>1.29%</td><td>EUR 4.3800</td><td>0.3540</td><td>40 / 0</td><td>66.98</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![VIRSI Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/VIRSI_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![VIRSI complete technical history](figures/technical_analysis/VIRSI_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![VIRSI return histogram](figures/stock_profiles/VIRSI_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![VIRSI stochastic dominance](figures/stock_profiles/VIRSI_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.248997 | -0.200331 | DownsideDeviation | 0.003300 | 0.003386 | Selectivity | -0.020793 | 0.037148 |
| AdjustedSharpe | -0.228646 | 0.487406 | DrawdownDeviation | 0.006378 | 0.003585 | Sharpe_Annualized | -0.239101 | 0.501923 |
| AnnualizedReturn_Arithmetic | -0.017763 | 0.039249 | ES_Loss | 0.010920 | 0.010467 | Sharpe_Daily | -0.015062 | 0.031618 |
| AnnualizedReturn_Geometric | -0.020308 | 0.036878 | FamaBeta | 0.423082 | 0.504616 | Sharpe_ES | -0.006455 | 0.014881 |
| Appraisal | -0.280065 | 0.476953 | GeometricReturn | -0.000081 | 0.000144 | Sharpe_VaR | -0.009790 | 0.021000 |
| ArithmeticReturn | -0.000070 | 0.000156 | Hurst | 0.395572 | 0.439377 | Skewness | 0.479749 | 0.124337 |
| AverageDrawdown | 0.031050 | 0.010552 | Information_Annualized | -1.308288 | -1.153097 | Sortino | -0.021361 | 0.046000 |
| AverageDrawdownLength | 107.000000 | 15.125000 | Information_Daily | -0.074984 | -0.064081 | SpecificRisk | 0.074242 | 0.077886 |
| AverageRecoveryTime | 35.285714 | 11.000000 | JensenAlpha | -0.020793 | 0.037148 | Sterling | -0.074176 | 0.280234 |
| BernardoLedoit | 0.952821 | 1.098862 | Kappa | -0.014051 | 0.031662 | SystematicRisk | 0.000372 | -0.000176 |
| BetaCoKurtosis | 0.010497 | 0.034514 | Kelly | -3.218401 | 6.418696 | TotalRisk | 0.074243 | 0.077886 |
| BetaCoSkewness | -1.924716 | -11.264759 | Kurtosis | 13.330999 | 6.746270 | TrackingError_Annualized | 0.190323 | 0.173733 |
| Burke | -0.195219 | 0.901220 | M2Sortino | -0.021757 | 0.039084 | TrackingError_Daily | 0.011989 | 0.010944 |
| CAPMAlpha | -0.000072 | 0.000157 | MSquaredExcess | -0.225190 | -0.132659 | Treynor_Annualized | -9.575251 | -32.456639 |
| CAPMBeta | 0.002121 | -0.001136 | Martin | -0.204125 | 2.586994 | Treynor_Daily | -0.038387 | -0.126487 |
| CDD | 0.079544 | 0.020799 | MaximumDrawdown | 0.173775 | 0.031599 | UlcerIndex | 0.099486 | 0.014255 |
| Calmar | -0.116861 | 1.167082 | Modigliani | -0.000167 | 0.000309 | UpCapture | -0.025506 | 0.004847 |
| CoKurtosis | 0.000000 | 0.000000 | NetSelectivity | -0.117062 | -0.082821 | UpNumber | 0.316514 | 0.356164 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 0.952821 | 1.098862 | UpPercent | 0.119266 | 0.136986 |
| CumulativeReturn | -0.059541 | 0.018272 | OmegaExcessReturn | -0.039201 | 0.020479 | UpsidePotential | 0.431408 | 0.511300 |
| DRatio | 1.070846 | 0.755133 | PainIndex | 0.084862 | 0.010946 | UpsideRisk | 0.003315 | 0.003554 |
| DownCapture | -0.011262 | -0.039889 | PainRatio | -0.239300 | 3.369202 | VaR_Loss | 0.007200 | 0.007417 |
| DownNumber | 0.308176 | 0.301887 | Prospect | -0.587322 | -0.535624 | Volatility | 0.004680 | 0.004926 |
| DownPercent | 0.886792 | 0.924528 | Rachev | 0.954479 | 0.977323 | Volatility_Annualized | 0.074292 | 0.078197 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.144134</td><td>-0.000143</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.164952</td><td>0.000309</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-apg1l">
<summary><strong>APG1L — Apranga</strong> | HOLD | target 254 shares | priority 6</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>200</td><td>254</td><td>+54</td><td>6.76%</td><td>EUR 3.9800</td><td>0.3363</td><td>38 / 0</td><td>55.56</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![APG1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/APG1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![APG1L complete technical history](figures/technical_analysis/APG1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![APG1L return histogram](figures/stock_profiles/APG1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![APG1L stochastic dominance](figures/stock_profiles/APG1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.000764 | -0.019905 | DownsideDeviation | 0.006445 | 0.004490 | Selectivity | 0.215245 | 0.186548 |
| AdjustedSharpe | -5.572545 | 1.548614 | DrawdownDeviation | 0.007213 | 0.007914 | Sharpe_Annualized | 1.547413 | 1.770381 |
| AnnualizedReturn_Arithmetic | 0.215236 | 0.203243 | ES_Loss | 0.018685 | 0.015003 | Sharpe_Daily | 0.097478 | 0.111524 |
| AnnualizedReturn_Geometric | 0.227925 | 0.217304 | FamaBeta | 0.792124 | 0.740832 | Sharpe_ES | 0.045711 | 0.053757 |
| Appraisal | 1.552311 | 1.657018 | GeometricReturn | 0.000815 | 0.000781 | Sharpe_VaR | 0.105986 | 0.086325 |
| ArithmeticReturn | 0.000854 | 0.000807 | Hurst | 0.441221 | 0.371225 | Skewness | -2.803633 | 0.154834 |
| AverageDrawdown | 0.022993 | 0.021918 | Information_Annualized | -0.003533 | -0.113115 | Sortino | 0.132530 | 0.179616 |
| AverageDrawdownLength | 31.090909 | 16.428571 | Information_Daily | -0.000181 | -0.005811 | SpecificRisk | 0.138661 | 0.112581 |
| AverageRecoveryTime | 22.136364 | 6.285714 | JensenAlpha | 0.215245 | 0.186548 | Sterling | 1.024293 | 1.208673 |
| BernardoLedoit | 1.452921 | 1.381514 | Kappa | 0.062549 | 0.123823 | SystematicRisk | 0.009736 | 0.020092 |
| BetaCoKurtosis | 0.019251 | 0.147694 | Kelly | 11.124919 | 15.421172 | TotalRisk | 0.139002 | 0.114360 |
| BetaCoSkewness | -1.508227 | 1.233590 | Kurtosis | 41.870691 | 4.309029 | TrackingError_Annualized | 0.216245 | 0.175972 |
| Burke | 1.133884 | 2.985924 | M2Sortino | 0.230300 | 0.222769 | TrackingError_Daily | 0.013622 | 0.011085 |
| CAPMAlpha | 0.000805 | 0.000691 | MSquaredExcess | 0.048060 | 0.045356 | Treynor_Annualized | 4.110665 | 1.675997 |
| CAPMBeta | 0.055447 | 0.129657 | Martin | 4.059646 | 8.452221 | Treynor_Daily | 0.014701 | 0.006021 |
| CDD | 0.072705 | 0.049098 | MaximumDrawdown | 0.122520 | 0.079787 | UlcerIndex | 0.056144 | 0.025710 |
| Calmar | 1.860315 | 2.723544 | Modigliani | 0.001078 | 0.001089 | UpCapture | 0.127047 | 0.195949 |
| CoKurtosis | 0.000000 | 0.000000 | NetSelectivity | 0.046775 | 0.041572 | UpNumber | 0.424312 | 0.465753 |
| CoSkewness | -0.000000 | 0.000000 | Omega | 1.452921 | 1.381514 | UpPercent | 0.181193 | 0.232877 |
| CumulativeReturn | 0.848452 | 0.103315 | OmegaExcessReturn | 0.191027 | 0.195555 | UpsidePotential | 0.425141 | 0.650414 |
| DRatio | 0.504583 | 0.626403 | PainIndex | 0.042201 | 0.018731 | UpsideRisk | 0.005989 | 0.005690 |
| DownCapture | -0.092921 | 0.009326 | PainRatio | 5.400998 | 11.601133 | VaR_Loss | 0.008059 | 0.009343 |
| DownNumber | 0.330189 | 0.433962 | Prospect | -0.233234 | -0.408881 | Volatility | 0.008762 | 0.007232 |
| DownPercent | 0.877358 | 0.867925 | Rachev | 1.219309 | 1.259273 | Volatility_Annualized | 0.139094 | 0.114802 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.743363</td><td>-0.079646</td></tr><tr><td>OUT</td><td>93</td><td>84</td><td>-9</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.159539</td><td>0.015261</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.154325</td><td>-0.010318</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-hae1t">
<summary><strong>HAE1T — Harju Elekter Group</strong> | BUY | target 147 shares | priority 7</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>100</td><td>147</td><td>+47</td><td>5.06%</td><td>EUR 5.1400</td><td>0.1150</td><td>37 / 24</td><td>42.59</td><td>Bullish</td><td>Inside bands</td><td>BUY</td><td>2026-08-28</td></tr></tbody></table>

![HAE1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/HAE1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![HAE1T complete technical history](figures/technical_analysis/HAE1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![HAE1T return histogram](figures/stock_profiles/HAE1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![HAE1T stochastic dominance](figures/stock_profiles/HAE1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.246414 | -0.309903 | DownsideDeviation | 0.005988 | 0.007672 | Selectivity | -0.023582 | -0.041411 |
| AdjustedSharpe | -0.057893 | -0.321064 | DrawdownDeviation | 0.009361 | 0.013210 | Sharpe_Annualized | -0.058271 | -0.333424 |
| AnnualizedReturn_Arithmetic | -0.008146 | -0.059614 | ES_Loss | 0.020168 | 0.022862 | Sharpe_Daily | -0.003671 | -0.021004 |
| AnnualizedReturn_Geometric | -0.017725 | -0.072693 | FamaBeta | 0.796163 | 1.153778 | Sharpe_ES | -0.001603 | -0.010348 |
| Appraisal | -0.168881 | -0.234070 | GeometricReturn | -0.000071 | -0.000299 | Sharpe_VaR | -0.002878 | -0.016752 |
| ArithmeticReturn | -0.000032 | -0.000237 | Hurst | 0.386445 | 0.446875 | Skewness | 0.500438 | 0.194003 |
| AverageDrawdown | 0.058845 | 0.032257 | Information_Annualized | -1.115467 | -1.241453 | Sortino | -0.005398 | -0.030835 |
| AverageDrawdownLength | 93.375000 | 15.125000 | Information_Daily | -0.063852 | -0.072780 | SpecificRisk | 0.139638 | 0.176916 |
| AverageRecoveryTime | 15.375000 | 4.000000 | JensenAlpha | -0.023582 | -0.041411 | Sterling | -0.057287 | -0.309019 |
| BernardoLedoit | 0.988111 | 0.936887 | Kappa | -0.003342 | -0.019715 | SystematicRisk | 0.004498 | -0.020436 |
| BetaCoKurtosis | 0.053440 | 0.011496 | Kelly | -0.416803 | -1.864855 | TotalRisk | 0.139711 | 0.178092 |
| BetaCoSkewness | 0.134984 | 15.884029 | Kurtosis | 14.435639 | 8.675222 | TrackingError_Annualized | 0.220906 | 0.249629 |
| Burke | -0.088405 | -0.738308 | M2Sortino | -0.017860 | -0.072074 | TrackingError_Daily | 0.013916 | 0.015725 |
| CAPMAlpha | -0.000055 | -0.000119 | MSquaredExcess | -0.204243 | -0.242654 | Treynor_Annualized | -0.691964 | 0.551214 |
| CAPMBeta | 0.025615 | -0.131879 | Martin | -0.156945 | -1.117513 | Treynor_Daily | -0.002770 | 0.002271 |
| CDD | 0.153779 | 0.071630 | MaximumDrawdown | 0.209400 | 0.135239 | UlcerIndex | 0.112935 | 0.065049 |
| Calmar | -0.084644 | -0.537518 | Modigliani | -0.000041 | -0.000205 | UpCapture | -0.001326 | -0.158224 |
| CoKurtosis | 0.000000 | 0.000000 | NetSelectivity | -0.199798 | -0.346380 | UpNumber | 0.373853 | 0.260274 |
| CoSkewness | 0.000000 | 0.000000 | Omega | 0.988111 | 0.936887 | UpPercent | 0.176606 | 0.205479 |
| CumulativeReturn | -0.052102 | -0.037032 | OmegaExcessReturn | -0.052011 | -0.109853 | UpsidePotential | 0.448649 | 0.457729 |
| DRatio | 1.154072 | 1.473980 | PainIndex | 0.098550 | 0.047630 | UpsideRisk | 0.006450 | 0.008188 |
| DownCapture | 0.007906 | -0.130043 | PainRatio | -0.179853 | -1.526195 | VaR_Loss | 0.011233 | 0.014122 |
| DownNumber | 0.430818 | 0.358491 | Prospect | -0.572958 | -0.641539 | Volatility | 0.008807 | 0.011263 |
| DownPercent | 0.823899 | 0.792453 | Rachev | 1.080200 | 1.141043 | Volatility_Annualized | 0.139804 | 0.178794 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.796460</td><td>-0.026549</td></tr><tr><td>OUT</td><td>93</td><td>90</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.128937</td><td>-0.015340</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.166639</td><td>0.001996</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-saf1r">
<summary><strong>SAF1R — SAF Tehnika</strong> | SELL | target 100 shares | priority 8</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>100</td><td>100</td><td>+0</td><td>11.43%</td><td>EUR 17.1500</td><td>-0.1062</td><td>12 / 24</td><td>88.11</td><td>Bullish</td><td>Inside bands</td><td>SELL</td><td>2026-08-28</td></tr></tbody></table>

![SAF1R Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/SAF1R_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![SAF1R complete technical history](figures/technical_analysis/SAF1R_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![SAF1R return histogram](figures/stock_profiles/SAF1R_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![SAF1R stochastic dominance](figures/stock_profiles/SAF1R_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.094113 | 1.521448 | DownsideDeviation | 0.014405 | 0.010543 | Selectivity | 0.104762 | 1.831979 |
| AdjustedSharpe | 0.386716 | -16.270535 | DrawdownDeviation | 0.022354 | 0.013635 | Sharpe_Annualized | 0.536906 | 2.673910 |
| AnnualizedReturn_Arithmetic | 0.185846 | 1.094606 | ES_Loss | 0.046496 | 0.035705 | Sharpe_Daily | 0.033822 | 0.168441 |
| AnnualizedReturn_Geometric | 0.134576 | 1.758657 | FamaBeta | 1.971230 | 2.641687 | Sharpe_ES | 0.015861 | 0.121655 |
| Appraisal | 0.303522 | 4.524113 | GeometricReturn | 0.000501 | 0.004035 | Sharpe_VaR | 0.028405 | 0.165659 |
| ArithmeticReturn | 0.000737 | 0.004344 | Hurst | 0.437121 | 0.482807 | Skewness | 0.763854 | 4.044583 |
| AverageDrawdown | 0.074566 | 0.044658 | Information_Annualized | -0.249216 | 3.348586 | Sortino | 0.051195 | 0.411995 |
| AverageDrawdownLength | 81.666667 | 19.333333 | Information_Daily | -0.013302 | 0.111449 | SpecificRisk | 0.345154 | 0.404937 |
| AverageRecoveryTime | 45.666667 | 9.500000 | JensenAlpha | 0.104762 | 1.831979 | Sterling | 0.188656 | 8.029624 |
| BernardoLedoit | 1.133831 | 1.913900 | Kappa | 0.027611 | 0.280089 | SystematicRisk | 0.022893 | -0.047899 |
| BetaCoKurtosis | 0.368556 | -0.373590 | Kelly | 1.551119 | 6.531847 | TotalRisk | 0.345913 | 0.407760 |
| BetaCoSkewness | 0.819835 | -28.623651 | Kurtosis | 31.980202 | 32.832668 | TrackingError_Annualized | 0.377635 | 0.454355 |
| Burke | 0.254843 | 11.985399 | M2Sortino | 0.129024 | 1.731606 | TrackingError_Daily | 0.023789 | 0.028622 |
| CAPMAlpha | 0.000623 | 0.004619 | MSquaredExcess | -0.130561 | 0.346363 | Treynor_Annualized | 1.032252 | -5.689590 |
| CAPMBeta | 0.130372 | -0.309101 | Martin | 0.263460 | 34.505124 | Treynor_Daily | 0.003844 | -0.013054 |
| CDD | 0.077069 | 0.098897 | MaximumDrawdown | 0.613343 | 0.119021 | UlcerIndex | 0.510804 | 0.050968 |
| Calmar | 0.219415 | 14.776008 | Modigliani | 0.000374 | 0.001644 | UpCapture | 0.225107 | 0.509469 |
| CoKurtosis | 0.000000 | -0.000000 | NetSelectivity | -0.316223 | 1.132025 | UpNumber | 0.389908 | 0.383562 |
| CoSkewness | 0.000000 | -0.000000 | Omega | 1.133831 | 1.913900 | UpPercent | 0.275229 | 0.301370 |
| CumulativeReturn | 0.459036 | 0.660921 | OmegaExcessReturn | 0.052099 | 1.707592 | UpsidePotential | 0.433727 | 0.862806 |
| DRatio | 0.888069 | 0.429191 | PainIndex | 0.424909 | 0.039515 | UpsideRisk | 0.016366 | 0.023821 |
| DownCapture | 0.065218 | -0.639514 | PainRatio | 0.316718 | 44.505740 | VaR_Loss | 0.025963 | 0.026221 |
| DownNumber | 0.408805 | 0.396226 | Prospect | -0.426971 | -0.151517 | Volatility | 0.021805 | 0.025788 |
| DownPercent | 0.735849 | 0.773585 | Rachev | 1.157893 | 1.812138 | Volatility_Annualized | 0.346141 | 0.409365 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.796460</td><td>-0.026549</td></tr><tr><td>OUT</td><td>93</td><td>90</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.175662</td><td>0.031385</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.172213</td><td>0.007569</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-grg1l">
<summary><strong>GRG1L — Grigeo Group</strong> | HOLD | target 519 shares | priority 9</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>519</td><td>+519</td><td>3.50%</td><td>EUR 1.0100</td><td>0.3805</td><td>49 / 6</td><td>35.53</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![GRG1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/GRG1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![GRG1L complete technical history](figures/technical_analysis/GRG1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![GRG1L return histogram](figures/stock_profiles/GRG1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![GRG1L stochastic dominance](figures/stock_profiles/GRG1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.106013 | -0.415512 | DownsideDeviation | 0.006220 | 0.006387 | Selectivity | 0.118837 | -0.170069 |
| AdjustedSharpe | 0.718078 | -1.255464 | DrawdownDeviation | 0.008942 | 0.009068 | Sharpe_Annualized | 0.819174 | -1.495827 |
| AnnualizedReturn_Arithmetic | 0.127810 | -0.188392 | ES_Loss | 0.021228 | 0.020304 | Sharpe_Daily | 0.051603 | -0.094228 |
| AnnualizedReturn_Geometric | 0.122677 | -0.178303 | FamaBeta | 0.888531 | 0.812738 | Sharpe_ES | 0.023893 | -0.036820 |
| Appraisal | 0.762303 | -1.356976 | GeometricReturn | 0.000459 | -0.000779 | Sharpe_VaR | 0.035105 | -0.052697 |
| ArithmeticReturn | 0.000507 | -0.000748 | Hurst | 0.382523 | 0.415342 | Skewness | 1.110901 | -0.960328 |
| AverageDrawdown | 0.025521 | 0.055090 | Information_Annualized | -0.455607 | -2.038616 | Sortino | 0.081544 | -0.117055 |
| AverageDrawdownLength | 19.694444 | 61.500000 | Information_Daily | -0.024444 | -0.126487 | SpecificRisk | 0.155892 | 0.125330 |
| AverageRecoveryTime | 12.250000 | 1.000000 | JensenAlpha | 0.118837 | -0.170069 | Sterling | 0.466265 | -0.885286 |
| BernardoLedoit | 1.173751 | 0.751564 | Kappa | 0.056030 | -0.077901 | SystematicRisk | 0.002948 | -0.005379 |
| BetaCoKurtosis | 0.013070 | 0.024385 | Kelly | 5.250336 | -11.876852 | TotalRisk | 0.155920 | 0.125445 |
| BetaCoSkewness | -1.870061 | 9.436686 | Kurtosis | 12.838329 | 7.291615 | TrackingError_Annualized | 0.232684 | 0.203821 |
| Burke | 0.565621 | -1.979162 | M2Sortino | 0.124429 | -0.178341 | TrackingError_Daily | 0.014658 | 0.012839 |
| CAPMAlpha | 0.000492 | -0.000717 | MSquaredExcess | -0.073755 | -0.369052 | Treynor_Annualized | 7.306573 | 5.136691 |
| CAPMBeta | 0.016790 | -0.034712 | Martin | 2.053835 | -2.605196 | Treynor_Daily | 0.027355 | 0.022442 |
| CDD | 0.057321 | 0.087512 | MaximumDrawdown | 0.163104 | 0.101407 | UlcerIndex | 0.059730 | 0.068441 |
| Calmar | 0.752135 | -1.758285 | Modigliani | 0.000571 | -0.000920 | UpCapture | 0.025515 | -0.173618 |
| CoKurtosis | 0.000000 | 0.000000 | NetSelectivity | -0.080521 | -0.371092 | UpNumber | 0.348624 | 0.232877 |
| CoSkewness | -0.000000 | 0.000000 | Omega | 1.173751 | 0.751564 | UpPercent | 0.206422 | 0.136986 |
| CumulativeReturn | 0.413726 | -0.093525 | OmegaExcessReturn | 0.087066 | -0.209237 | UpsidePotential | 0.550860 | 0.354112 |
| DRatio | 0.806165 | 1.618247 | PainIndex | 0.043336 | 0.061682 | UpsideRisk | 0.007619 | 0.004713 |
| DownCapture | -0.118101 | 0.001480 | PainRatio | 2.830823 | -2.890675 | VaR_Loss | 0.014447 | 0.014186 |
| DownNumber | 0.355346 | 0.283019 | Prospect | -0.505101 | -0.706014 | Volatility | 0.009829 | 0.007934 |
| DownPercent | 0.823899 | 0.867925 | Rachev | 1.114414 | 0.738794 | Volatility_Annualized | 0.156023 | 0.125945 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.814159</td><td>-0.008850</td></tr><tr><td>OUT</td><td>93</td><td>92</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.140842</td><td>-0.003435</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.161601</td><td>-0.003043</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-rsu1l">
<summary><strong>RSU1L — Rokiškio sūris</strong> | HOLD | target 149 shares | priority 10</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>149</td><td>+149</td><td>4.54%</td><td>EUR 4.5600</td><td>0.2566</td><td>35 / 6</td><td>58.03</td><td>Bullish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![RSU1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/RSU1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![RSU1L complete technical history](figures/technical_analysis/RSU1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![RSU1L return histogram](figures/stock_profiles/RSU1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![RSU1L stochastic dominance](figures/stock_profiles/RSU1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.198909 | -0.271256 | DownsideDeviation | 0.010363 | 0.009581 | Selectivity | 0.005979 | -0.036604 |
| AdjustedSharpe | 0.242870 | -0.054593 | DrawdownDeviation | 0.010488 | 0.009781 | Sharpe_Annualized | 0.241649 | -0.054572 |
| AnnualizedReturn_Arithmetic | 0.058990 | -0.011723 | ES_Loss | 0.035860 | 0.030899 | Sharpe_Daily | 0.015222 | -0.003438 |
| AnnualizedReturn_Geometric | 0.029780 | -0.034046 | FamaBeta | 1.390202 | 1.386220 | Sharpe_ES | 0.006528 | -0.001506 |
| Appraisal | 0.024580 | -0.171085 | GeometricReturn | 0.000116 | -0.000137 | Sharpe_VaR | 0.009229 | -0.001859 |
| ArithmeticReturn | 0.000234 | -0.000047 | Hurst | 0.351713 | 0.405827 | Skewness | 0.436525 | -0.070458 |
| AverageDrawdown | 0.073389 | 0.029882 | Information_Annualized | -0.686268 | -1.027891 | Sortino | 0.022589 | -0.004855 |
| AverageDrawdownLength | 67.454545 | 14.375000 | Information_Daily | -0.038401 | -0.059101 | SpecificRisk | 0.243268 | 0.213953 |
| AverageRecoveryTime | 35.272727 | 7.875000 | JensenAlpha | 0.005979 | -0.036604 | Sterling | 0.114943 | -0.184616 |
| BernardoLedoit | 1.052456 | 0.989803 | Kappa | 0.015195 | -0.003389 | SystematicRisk | 0.018275 | 0.001671 |
| BetaCoKurtosis | 0.121557 | 0.086355 | Kelly | 0.989899 | -0.254042 | TotalRisk | 0.243954 | 0.213959 |
| BetaCoSkewness | -3.452885 | 5.219791 | Kurtosis | 8.148953 | 5.071019 | TrackingError_Annualized | 0.289842 | 0.263895 |
| Burke | 0.095021 | -0.264351 | M2Sortino | 0.028780 | -0.033802 | TrackingError_Daily | 0.018258 | 0.016624 |
| CAPMAlpha | 0.000143 | -0.000056 | MSquaredExcess | -0.168690 | -0.211581 | Treynor_Annualized | 0.286143 | -3.157595 |
| CAPMBeta | 0.104075 | 0.010782 | Martin | 0.461094 | -0.685036 | Treynor_Daily | 0.001119 | -0.012748 |
| CDD | 0.125774 | 0.059566 | MaximumDrawdown | 0.159089 | 0.084418 | UlcerIndex | 0.064586 | 0.049700 |
| Calmar | 0.187193 | -0.403308 | Modigliani | 0.000168 | -0.000034 | UpCapture | 0.143059 | 0.034815 |
| CoKurtosis | 0.000000 | 0.000000 | NetSelectivity | -0.288144 | -0.362871 | UpNumber | 0.309633 | 0.328767 |
| CoSkewness | -0.000000 | 0.000000 | Omega | 1.052456 | 0.989803 | UpPercent | 0.236239 | 0.205479 |
| CumulativeReturn | 0.091774 | -0.017171 | OmegaExcessReturn | -0.029551 | -0.080453 | UpsidePotential | 0.453221 | 0.471278 |
| DRatio | 0.967126 | 1.033264 | PainIndex | 0.053798 | 0.040949 | UpsideRisk | 0.011350 | 0.009480 |
| DownCapture | 0.110948 | 0.057736 | PainRatio | 0.553557 | -0.831432 | VaR_Loss | 0.025365 | 0.025021 |
| DownNumber | 0.339623 | 0.377358 | Prospect | -0.515701 | -0.600022 | Volatility | 0.015378 | 0.013532 |
| DownPercent | 0.761006 | 0.735849 | Rachev | 1.071028 | 0.965198 | Volatility_Annualized | 0.244115 | 0.214814 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.796460</td><td>-0.026549</td></tr><tr><td>OUT</td><td>93</td><td>90</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.158492</td><td>0.014215</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.160546</td><td>-0.004097</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-ign1l">
<summary><strong>IGN1L — Ignitis grupė</strong> | HOLD | target 6 shares | priority 11</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>6</td><td>+6</td><td>0.92%</td><td>EUR 22.1000</td><td>0.4071</td><td>56 / 10</td><td>46.17</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![IGN1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/IGN1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![IGN1L complete technical history](figures/technical_analysis/IGN1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![IGN1L return histogram](figures/stock_profiles/IGN1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![IGN1L stochastic dominance](figures/stock_profiles/IGN1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.206414 | -0.329730 | DownsideDeviation | 0.004437 | 0.003522 | Selectivity | 0.016326 | -0.103858 |
| AdjustedSharpe | 0.263485 | -1.154161 | DrawdownDeviation | 0.007873 | 0.007526 | Sharpe_Annualized | 0.268574 | -1.247812 |
| AnnualizedReturn_Arithmetic | 0.027126 | -0.094236 | ES_Loss | 0.015423 | 0.010675 | Sharpe_Daily | 0.016919 | -0.078605 |
| AnnualizedReturn_Geometric | 0.022275 | -0.092520 | FamaBeta | 0.575188 | 0.487345 | Sharpe_ES | 0.006979 | -0.035029 |
| Appraisal | 0.161912 | -1.387410 | GeometricReturn | 0.000087 | -0.000385 | Sharpe_VaR | 0.011676 | -0.053100 |
| ArithmeticReturn | 0.000108 | -0.000374 | Hurst | 0.358896 | 0.362031 | Skewness | -0.033254 | 0.049286 |
| AverageDrawdown | 0.044485 | 0.048326 | Information_Annualized | -1.039489 | -1.991189 | Sortino | 0.024262 | -0.106190 |
| AverageDrawdownLength | 74.400000 | 63.000000 | Information_Daily | -0.058371 | -0.117933 | SpecificRisk | 0.100831 | 0.074858 |
| AverageRecoveryTime | 38.900000 | 19.500000 | JensenAlpha | 0.016326 | -0.103858 | Sterling | 0.083860 | -0.504374 |
| BernardoLedoit | 1.054449 | 0.805154 | Kappa | 0.015679 | -0.078562 | SystematicRisk | 0.004568 | 0.007407 |
| BetaCoKurtosis | -0.082161 | 0.030921 | Kelly | 2.659124 | -16.522785 | TotalRisk | 0.100934 | 0.075223 |
| BetaCoSkewness | -3.787258 | -21.478044 | Kurtosis | 8.810035 | 3.998859 | TrackingError_Annualized | 0.198573 | 0.165594 |
| Burke | 0.127683 | -1.892262 | M2Sortino | 0.023483 | -0.097384 | TrackingError_Daily | 0.012509 | 0.010431 |
| CAPMAlpha | 0.000085 | -0.000417 | MSquaredExcess | -0.154606 | -0.345176 | Treynor_Annualized | 0.856261 | -1.935667 |
| CAPMBeta | 0.026014 | 0.047798 | Martin | 0.259626 | -1.700111 | Treynor_Daily | 0.003361 | -0.008059 |
| CDD | 0.109179 | 0.072903 | MaximumDrawdown | 0.165620 | 0.083436 | UlcerIndex | 0.085796 | 0.054420 |
| Calmar | 0.134494 | -1.108877 | Modigliani | 0.000187 | -0.000767 | UpCapture | 0.040918 | 0.022186 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | -0.109264 | -0.208123 | UpNumber | 0.383028 | 0.342466 |
| CoSkewness | -0.000001 | -0.000000 | Omega | 1.054449 | 0.805154 | UpPercent | 0.162844 | 0.150685 |
| CumulativeReturn | 0.068138 | -0.047383 | OmegaExcessReturn | -0.003127 | -0.109577 | UpsidePotential | 0.469849 | 0.438804 |
| DRatio | 0.968757 | 1.567283 | PainIndex | 0.070307 | 0.050002 | UpsideRisk | 0.004556 | 0.003192 |
| DownCapture | 0.019678 | 0.138513 | PainRatio | 0.316822 | -1.850328 | VaR_Loss | 0.009219 | 0.007042 |
| DownNumber | 0.399371 | 0.490566 | Prospect | -0.532723 | -0.787432 | Volatility | 0.006362 | 0.004757 |
| DownPercent | 0.874214 | 0.886792 | Rachev | 1.039140 | 0.922872 | Volatility_Annualized | 0.101001 | 0.075521 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.143883</td><td>-0.000394</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.164592</td><td>-0.000052</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-ako1l">
<summary><strong>AKO1L — Akola Group</strong> | HOLD | target 111 shares | priority 12</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>111</td><td>+111</td><td>1.32%</td><td>EUR 1.7700</td><td>0.1239</td><td>25 / 11</td><td>45.60</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![AKO1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/AKO1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![AKO1L complete technical history](figures/technical_analysis/AKO1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![AKO1L return histogram](figures/stock_profiles/AKO1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![AKO1L stochastic dominance](figures/stock_profiles/AKO1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.190670 | -0.435112 | DownsideDeviation | 0.007769 | 0.007946 | Selectivity | 0.024661 | -0.220076 |
| AdjustedSharpe | 0.288067 | -1.013817 | DrawdownDeviation | 0.016029 | 0.014928 | Sharpe_Annualized | 0.294564 | -1.269597 |
| AnnualizedReturn_Arithmetic | 0.054158 | -0.207161 | ES_Loss | 0.025400 | 0.027326 | Sharpe_Daily | 0.018556 | -0.079977 |
| AnnualizedReturn_Geometric | 0.038019 | -0.197903 | FamaBeta | 1.047039 | 1.052960 | Sharpe_ES | 0.008461 | -0.030084 |
| Appraisal | 0.134428 | -1.359501 | GeometricReturn | 0.000148 | -0.000875 | Sharpe_VaR | 0.012857 | -0.049292 |
| ArithmeticReturn | 0.000215 | -0.000822 | Hurst | 0.408968 | 0.430814 | Skewness | 0.385739 | -0.509137 |
| AverageDrawdown | 0.070383 | 0.167568 | Information_Annualized | -0.771779 | -2.025444 | Sortino | 0.027662 | -0.103452 |
| AverageDrawdownLength | 81.888889 | 126.000000 | Information_Daily | -0.043019 | -0.127082 | SpecificRisk | 0.183449 | 0.161880 |
| AverageRecoveryTime | 48.222222 | 79.000000 | JensenAlpha | 0.024661 | -0.220076 | Sterling | 0.075109 | -0.739637 |
| BernardoLedoit | 1.061023 | 0.777152 | Kappa | 0.017077 | -0.068466 | SystematicRisk | 0.010257 | 0.014485 |
| BetaCoKurtosis | -0.085834 | 0.099825 | Kelly | 1.602141 | -7.780800 | TotalRisk | 0.183735 | 0.162527 |
| BetaCoSkewness | -4.591177 | -4.726973 | Kurtosis | 14.339191 | 7.603804 | TrackingError_Annualized | 0.247053 | 0.214823 |
| Burke | 0.127391 | -1.295181 | M2Sortino | 0.037933 | -0.195375 | TrackingError_Daily | 0.015563 | 0.013533 |
| CAPMAlpha | 0.000164 | -0.000905 | MSquaredExcess | -0.156572 | -0.343643 | Treynor_Annualized | 0.650874 | -2.117175 |
| CAPMBeta | 0.058412 | 0.093475 | Martin | 0.149407 | -1.937896 | Treynor_Daily | 0.002535 | -0.009358 |
| CDD | 0.203360 | 0.159189 | MaximumDrawdown | 0.406184 | 0.167568 | UlcerIndex | 0.254464 | 0.102123 |
| Calmar | 0.093600 | -1.181033 | Modigliani | 0.000205 | -0.000781 | UpCapture | 0.097979 | -0.014717 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | -0.201428 | -0.447675 | UpNumber | 0.389908 | 0.397260 |
| CoSkewness | -0.000001 | -0.000000 | Omega | 1.061023 | 0.777152 | UpPercent | 0.238532 | 0.205479 |
| CumulativeReturn | 0.118116 | -0.104401 | OmegaExcessReturn | -0.006462 | -0.236392 | UpsidePotential | 0.480974 | 0.360774 |
| DRatio | 0.959257 | 1.454587 | PainIndex | 0.211197 | 0.088969 | UpsideRisk | 0.008582 | 0.006507 |
| DownCapture | 0.059814 | 0.224273 | PainRatio | 0.180016 | -2.224408 | VaR_Loss | 0.016716 | 0.016677 |
| DownNumber | 0.415094 | 0.396226 | Prospect | -0.538978 | -0.683735 | Volatility | 0.011582 | 0.010279 |
| DownPercent | 0.789308 | 0.773585 | Rachev | 1.112303 | 0.809991 | Volatility_Annualized | 0.183857 | 0.163170 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.143852</td><td>-0.000425</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.164145</td><td>-0.000498</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-pzv1l">
<summary><strong>PZV1L — Pieno žvaigždės</strong> | HOLD | target 30 shares | priority 13</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>30</td><td>+30</td><td>0.36%</td><td>EUR 1.7300</td><td>0.1858</td><td>35 / 14</td><td>46.60</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![PZV1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/PZV1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![PZV1L complete technical history](figures/technical_analysis/PZV1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![PZV1L return histogram](figures/stock_profiles/PZV1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![PZV1L stochastic dominance](figures/stock_profiles/PZV1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.020233 | -0.226031 | DownsideDeviation | 0.009069 | 0.008357 | Selectivity | 0.198809 | 0.036142 |
| AdjustedSharpe | 0.494959 | 0.156930 | DrawdownDeviation | 0.014074 | 0.013245 | Sharpe_Annualized | 0.961100 | 0.155753 |
| AnnualizedReturn_Arithmetic | 0.214083 | 0.032358 | ES_Loss | 0.031030 | 0.024274 | Sharpe_Daily | 0.060544 | 0.009812 |
| AnnualizedReturn_Geometric | 0.208457 | 0.011178 | FamaBeta | 1.268520 | 1.340646 | Sharpe_ES | 0.027378 | 0.005290 |
| Appraisal | 0.893618 | 0.175202 | GeometricReturn | 0.000752 | 0.000044 | Sharpe_VaR | 0.050639 | 0.010280 |
| ArithmeticReturn | 0.000850 | 0.000128 | Hurst | 0.406966 | 0.517001 | Skewness | 0.556555 | 1.109540 |
| AverageDrawdown | 0.037616 | 0.038908 | Information_Annualized | -0.072514 | -0.841034 | Sortino | 0.093674 | 0.015365 |
| AverageDrawdownLength | 18.810811 | 17.714286 | Information_Daily | -0.003752 | -0.047308 | SpecificRisk | 0.222477 | 0.206287 |
| AverageRecoveryTime | 9.054054 | 7.142857 | JensenAlpha | 0.198809 | 0.036142 | Sterling | 0.666794 | 0.050729 |
| BernardoLedoit | 1.241052 | 1.037313 | Kappa | 0.054267 | 0.008526 | SystematicRisk | 0.007408 | -0.016308 |
| BetaCoKurtosis | 0.055288 | -0.060055 | Kelly | 4.314746 | 0.749711 | TotalRisk | 0.222600 | 0.206930 |
| BetaCoSkewness | -0.465367 | -8.424866 | Kurtosis | 17.917831 | 24.019710 | TrackingError_Annualized | 0.279015 | 0.268754 |
| Burke | 0.701161 | 0.096201 | M2Sortino | 0.206232 | 0.010702 | TrackingError_Daily | 0.017576 | 0.016930 |
| CAPMAlpha | 0.000812 | 0.000222 | MSquaredExcess | -0.052380 | -0.184990 | Treynor_Annualized | 4.941486 | -0.106215 |
| CAPMBeta | 0.042185 | -0.105240 | Martin | 2.575798 | 0.233270 | Treynor_Daily | 0.017818 | -0.000419 |
| CDD | 0.096713 | 0.088394 | MaximumDrawdown | 0.212625 | 0.120349 | UlcerIndex | 0.080929 | 0.047919 |
| Calmar | 0.980395 | 0.092880 | Modigliani | 0.000670 | 0.000096 | UpCapture | 0.131042 | -0.183091 |
| CoKurtosis | 0.000000 | -0.000000 | NetSelectivity | -0.081640 | -0.306835 | UpNumber | 0.362385 | 0.315068 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 1.241052 | 1.037313 | UpPercent | 0.233945 | 0.219178 |
| CumulativeReturn | 0.762141 | 0.005573 | OmegaExcessReturn | 0.156533 | -0.029300 | UpsidePotential | 0.482278 | 0.427140 |
| DRatio | 0.722207 | 1.293210 | PainIndex | 0.055102 | 0.035411 | UpsideRisk | 0.010729 | 0.010004 |
| DownCapture | -0.086529 | -0.269291 | PainRatio | 3.783116 | 0.315666 | VaR_Loss | 0.016776 | 0.012491 |
| DownNumber | 0.314465 | 0.358491 | Prospect | -0.392082 | -0.499354 | Volatility | 0.014032 | 0.013087 |
| DownPercent | 0.817610 | 0.943396 | Rachev | 1.173382 | 1.208888 | Volatility_Annualized | 0.222748 | 0.207751 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.145374</td><td>0.001097</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.164179</td><td>-0.000465</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-roe1l">
<summary><strong>ROE1L — Artea Bankas</strong> | HOLD | target 906 shares | priority 14</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>416</td><td>906</td><td>+490</td><td>5.41%</td><td>EUR 0.8950</td><td>0.1858</td><td>38 / 17</td><td>51.65</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![ROE1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/ROE1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![ROE1L complete technical history](figures/technical_analysis/ROE1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![ROE1L return histogram](figures/stock_profiles/ROE1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![ROE1L stochastic dominance](figures/stock_profiles/ROE1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.115722 | -0.378050 | DownsideDeviation | 0.006441 | 0.007352 | Selectivity | 0.098738 | -0.128329 |
| AdjustedSharpe | 0.560868 | 0.111426 | DrawdownDeviation | 0.009503 | 0.009974 | Sharpe_Annualized | 0.706419 | -0.634381 |
| AnnualizedReturn_Arithmetic | 0.121675 | -0.131225 | ES_Loss | 0.021779 | 0.022720 | Sharpe_Daily | 0.044500 | -0.039962 |
| AnnualizedReturn_Geometric | 0.112967 | -0.140841 | FamaBeta | 0.980897 | 1.334866 | Sharpe_ES | 0.022170 | -0.022920 |
| Appraisal | 0.574790 | -0.623341 | GeometricReturn | 0.000425 | -0.000602 | Sharpe_VaR | 0.041965 | -0.056317 |
| ArithmeticReturn | 0.000483 | -0.000521 | Hurst | 0.412721 | 0.527537 | Skewness | 1.895772 | 4.249864 |
| AverageDrawdown | 0.026332 | 0.060998 | Information_Annualized | -0.486139 | -1.435718 | Sortino | 0.074968 | -0.070824 |
| AverageDrawdownLength | 30.000000 | 60.500000 | Information_Daily | -0.026193 | -0.087249 | SpecificRisk | 0.171781 | 0.205872 |
| AverageRecoveryTime | 16.541667 | 47.500000 | JensenAlpha | 0.098738 | -0.128329 | Sterling | 0.382037 | -0.666047 |
| BernardoLedoit | 1.170781 | 0.837003 | Kappa | 0.045908 | -0.041295 | SystematicRisk | 0.010925 | -0.008174 |
| BetaCoKurtosis | -0.115281 | -0.025470 | Kelly | 4.101313 | -3.066781 | TotalRisk | 0.172128 | 0.206034 |
| BetaCoSkewness | -3.665609 | -9.333290 | Kurtosis | 23.643745 | 46.314315 | TrackingError_Annualized | 0.238043 | 0.263318 |
| Burke | 0.446368 | -1.194529 | M2Sortino | 0.114315 | -0.139778 | TrackingError_Daily | 0.014995 | 0.016587 |
| CAPMAlpha | 0.000428 | -0.000474 | MSquaredExcess | -0.092393 | -0.277010 | Treynor_Annualized | 1.815646 | 2.670002 |
| CAPMBeta | 0.062219 | -0.052750 | Martin | 1.405464 | -2.227181 | Treynor_Daily | 0.006828 | 0.011416 |
| CDD | 0.088512 | 0.096320 | MaximumDrawdown | 0.195697 | 0.111458 | UlcerIndex | 0.080377 | 0.063237 |
| Calmar | 0.577255 | -1.263623 | Modigliani | 0.000492 | -0.000390 | UpCapture | 0.129274 | -0.114960 |
| CoKurtosis | -0.000000 | -0.000000 | NetSelectivity | -0.111354 | -0.457484 | UpNumber | 0.428899 | 0.424658 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 1.170781 | 0.837003 | UpPercent | 0.208716 | 0.191781 |
| CumulativeReturn | 0.377457 | -0.073092 | OmegaExcessReturn | 0.076092 | -0.176454 | UpsidePotential | 0.513939 | 0.363688 |
| DRatio | 0.967636 | 1.703139 | PainIndex | 0.060631 | 0.053575 | UpsideRisk | 0.008736 | 0.010708 |
| DownCapture | 0.019880 | 0.008580 | PainRatio | 1.863187 | -2.628856 | VaR_Loss | 0.011506 | 0.009247 |
| DownNumber | 0.487421 | 0.566038 | Prospect | -0.473745 | -0.613965 | Volatility | 0.010850 | 0.013031 |
| DownPercent | 0.779874 | 0.830189 | Rachev | 1.372678 | 1.101771 | Volatility_Annualized | 0.172242 | 0.206856 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.831858</td><td>0.008850</td></tr><tr><td>OUT</td><td>93</td><td>94</td><td>+1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.141467</td><td>-0.002810</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.165744</td><td>0.001101</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tkm1t">
<summary><strong>TKM1T — TKM Grupp</strong> | HOLD | target 315 shares | priority 15</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>288</td><td>315</td><td>+27</td><td>19.15%</td><td>EUR 9.1000</td><td>0.0619</td><td>29 / 22</td><td>42.63</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![TKM1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/TKM1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![TKM1T complete technical history](figures/technical_analysis/TKM1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TKM1T return histogram](figures/stock_profiles/TKM1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![TKM1T stochastic dominance](figures/stock_profiles/TKM1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.245633 | -0.320675 | DownsideDeviation | 0.005104 | 0.006504 | Selectivity | -0.025078 | -0.058563 |
| AdjustedSharpe | -0.130610 | -0.343215 | DrawdownDeviation | 0.006232 | 0.006974 | Sharpe_Annualized | -0.123558 | -0.711850 |
| AnnualizedReturn_Arithmetic | -0.012162 | -0.080571 | ES_Loss | 0.015606 | 0.016457 | Sharpe_Daily | -0.007783 | -0.044842 |
| AnnualizedReturn_Geometric | -0.016943 | -0.083466 | FamaBeta | 0.560557 | 0.730403 | Sharpe_ES | -0.003093 | -0.019428 |
| Appraisal | -0.255460 | -0.524923 | GeometricReturn | -0.000068 | -0.000346 | Sharpe_VaR | -0.006871 | -0.073416 |
| ArithmeticReturn | -0.000048 | -0.000320 | Hurst | 0.417088 | 0.513426 | Skewness | -4.151940 | -6.712294 |
| AverageDrawdown | 0.021201 | 0.018467 | Information_Annualized | -1.254642 | -1.567222 | Sortino | -0.009456 | -0.049159 |
| AverageDrawdownLength | 74.300000 | 19.500000 | Information_Daily | -0.071791 | -0.092388 | SpecificRisk | 0.098168 | 0.111565 |
| AverageRecoveryTime | 40.000000 | 4.500000 | JensenAlpha | -0.025078 | -0.058563 | Sterling | -0.062737 | -0.476658 |
| BernardoLedoit | 0.970092 | 0.790245 | Kappa | -0.004604 | -0.023436 | SystematicRisk | 0.006246 | -0.016269 |
| BetaCoKurtosis | 0.036864 | -0.084826 | Kelly | -1.255266 | -6.289215 | TotalRisk | 0.098367 | 0.112745 |
| BetaCoSkewness | -1.671872 | -4.816994 | Kurtosis | 47.689790 | 65.244397 | TrackingError_Annualized | 0.195779 | 0.204614 |
| Burke | -0.104562 | -1.139562 | M2Sortino | -0.017314 | -0.083390 | TrackingError_Daily | 0.012333 | 0.012889 |
| CAPMAlpha | -0.000080 | -0.000226 | MSquaredExcess | -0.210725 | -0.284093 | Treynor_Annualized | -0.476317 | 0.795044 |
| CAPMBeta | 0.035572 | -0.104983 | Martin | -0.147483 | -1.725960 | Treynor_Daily | -0.001906 | 0.003294 |
| CDD | 0.021416 | 0.047726 | MaximumDrawdown | 0.170070 | 0.075107 | UlcerIndex | 0.114883 | 0.048359 |
| Calmar | -0.099626 | -1.111300 | Modigliani | -0.000086 | -0.000438 | UpCapture | 0.023213 | -0.113401 |
| CoKurtosis | 0.000000 | -0.000000 | NetSelectivity | -0.145137 | -0.256724 | UpNumber | 0.396789 | 0.315068 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 0.970092 | 0.790245 | UpPercent | 0.139908 | 0.136986 |
| CumulativeReturn | -0.049845 | -0.042642 | OmegaExcessReturn | -0.046166 | -0.114968 | UpsidePotential | 0.306695 | 0.185206 |
| DRatio | 1.003342 | 1.375468 | PainIndex | 0.105668 | 0.039159 | UpsideRisk | 0.003514 | 0.002870 |
| DownCapture | 0.043554 | -0.048834 | PainRatio | -0.160345 | -2.131479 | VaR_Loss | 0.007024 | 0.004355 |
| DownNumber | 0.411950 | 0.358491 | Prospect | -0.404644 | -0.342116 | Volatility | 0.006201 | 0.007130 |
| DownPercent | 0.874214 | 0.981132 | Rachev | 0.888236 | 0.702365 | Volatility_Annualized | 0.098432 | 0.113186 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.778761</td><td>-0.044248</td></tr><tr><td>OUT</td><td>93</td><td>88</td><td>-5</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.197354</td><td>0.053077</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.182056</td><td>0.017413</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-eft1t">
<summary><strong>EFT1T — EfTEN Real Estate Fund</strong> | HOLD | target 23 shares | priority 16</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>23</td><td>+23</td><td>3.07%</td><td>EUR 19.4000</td><td>0.1150</td><td>36 / 23</td><td>43.20</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![EFT1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/EFT1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![EFT1T complete technical history](figures/technical_analysis/EFT1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![EFT1T return histogram](figures/stock_profiles/EFT1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![EFT1T stochastic dominance](figures/stock_profiles/EFT1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.249120 | -0.315798 | DownsideDeviation | 0.004677 | 0.004800 | Selectivity | -0.021895 | -0.090740 |
| AdjustedSharpe | -0.167524 | -0.502205 | DrawdownDeviation | 0.007374 | 0.005669 | Sharpe_Annualized | -0.163847 | -0.884916 |
| AnnualizedReturn_Arithmetic | -0.015907 | -0.077929 | ES_Loss | 0.015448 | 0.014014 | Sharpe_Daily | -0.010321 | -0.055744 |
| AnnualizedReturn_Geometric | -0.020430 | -0.078589 | FamaBeta | 0.552871 | 0.568283 | Sharpe_ES | -0.004086 | -0.022066 |
| Appraisal | -0.225699 | -1.038739 | GeometricReturn | -0.000082 | -0.000325 | Sharpe_VaR | -0.006635 | -0.040949 |
| ArithmeticReturn | -0.000063 | -0.000309 | Hurst | 0.388273 | 0.483868 | Skewness | -1.382197 | -4.004161 |
| AverageDrawdown | 0.045633 | 0.020570 | Information_Annualized | -1.247719 | -1.844641 | Sortino | -0.013496 | -0.064420 |
| AverageDrawdownLength | 147.000000 | 24.750000 | Information_Daily | -0.071517 | -0.108469 | SpecificRisk | 0.097011 | 0.087356 |
| AverageRecoveryTime | 80.800000 | 12.750000 | JensenAlpha | -0.021895 | -0.090740 | Sterling | -0.067658 | -0.484724 |
| BernardoLedoit | 0.965259 | 0.800466 | Kappa | -0.007768 | -0.033831 | SystematicRisk | 0.001125 | 0.007938 |
| BetaCoKurtosis | -0.031388 | 0.057061 | Kelly | -1.687710 | -10.048644 | TotalRisk | 0.097018 | 0.087716 |
| BetaCoSkewness | -1.120956 | 7.217372 | Kurtosis | 16.679067 | 34.354529 | TrackingError_Annualized | 0.199660 | 0.171197 |
| Burke | -0.129214 | -1.246756 | M2Sortino | -0.021051 | -0.080231 | TrackingError_Daily | 0.012577 | 0.010784 |
| CAPMAlpha | -0.000069 | -0.000355 | MSquaredExcess | -0.216200 | -0.303506 | Treynor_Annualized | -3.189276 | -1.534130 |
| CAPMBeta | 0.006406 | 0.051227 | Martin | -0.126159 | -2.234009 | Treynor_Daily | -0.012786 | -0.006339 |
| CDD | 0.115536 | 0.044782 | MaximumDrawdown | 0.201964 | 0.062130 | UlcerIndex | 0.161942 | 0.035178 |
| Calmar | -0.101159 | -1.264896 | Modigliani | -0.000114 | -0.000544 | UpCapture | -0.005516 | 0.004697 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | -0.146866 | -0.213391 | UpNumber | 0.332569 | 0.273973 |
| CoSkewness | -0.000000 | 0.000000 | Omega | 0.965259 | 0.800466 | UpPercent | 0.137615 | 0.095890 |
| CumulativeReturn | -0.059894 | -0.040098 | OmegaExcessReturn | -0.047208 | -0.101840 | UpsidePotential | 0.374987 | 0.258433 |
| DRatio | 0.996650 | 1.177885 | PainIndex | 0.153465 | 0.026023 | UpsideRisk | 0.003935 | 0.002754 |
| DownCapture | 0.011748 | 0.097296 | PainRatio | -0.133128 | -3.019974 | VaR_Loss | 0.009514 | 0.007552 |
| DownNumber | 0.301887 | 0.283019 | Prospect | -0.499101 | -0.467986 | Volatility | 0.006116 | 0.005547 |
| DownPercent | 0.874214 | 0.905660 | Rachev | 0.875056 | 0.721047 | Volatility_Annualized | 0.097082 | 0.088063 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.805310</td><td>-0.017699</td></tr><tr><td>OUT</td><td>93</td><td>91</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.145198</td><td>0.000921</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.165381</td><td>0.000737</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tel1l">
<summary><strong>TEL1L — Telia Lietuva</strong> | HOLD | target 101 shares | priority 17</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>101</td><td>+101</td><td>1.50%</td><td>EUR 2.2200</td><td>0.1681</td><td>43 / 24</td><td>45.64</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![TEL1L Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/TEL1L_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![TEL1L complete technical history](figures/technical_analysis/TEL1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TEL1L return histogram](figures/stock_profiles/TEL1L_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![TEL1L stochastic dominance](figures/stock_profiles/TEL1L_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.196066 | -0.066828 | DownsideDeviation | 0.004604 | 0.003713 | Selectivity | 0.027961 | 0.170005 |
| AdjustedSharpe | 0.333757 | 1.660770 | DrawdownDeviation | 0.008616 | 0.006146 | Sharpe_Annualized | 0.358884 | 1.637248 |
| AnnualizedReturn_Arithmetic | 0.037591 | 0.162236 | ES_Loss | 0.015321 | 0.010866 | Sharpe_Daily | 0.022608 | 0.103137 |
| AnnualizedReturn_Geometric | 0.032623 | 0.170381 | FamaBeta | 0.596511 | 0.639446 | Sharpe_ES | 0.009737 | 0.059247 |
| Appraisal | 0.267278 | 1.722501 | GeometricReturn | 0.000127 | 0.000625 | Sharpe_VaR | 0.015944 | 0.068966 |
| ArithmeticReturn | 0.000149 | 0.000644 | Hurst | 0.379338 | 0.373845 | Skewness | -0.329646 | 0.490767 |
| AverageDrawdown | 0.036650 | 0.019687 | Information_Annualized | -0.973675 | -0.363732 | Sortino | 0.032399 | 0.173382 |
| AverageDrawdownLength | 66.545455 | 14.500000 | Information_Daily | -0.054410 | -0.019053 | SpecificRisk | 0.104615 | 0.098696 |
| AverageRecoveryTime | 34.727273 | 7.375000 | JensenAlpha | 0.027961 | 0.170005 | Sterling | 0.100144 | 1.136385 |
| BernardoLedoit | 1.080062 | 1.352935 | Kappa | 0.019352 | 0.126490 | SystematicRisk | 0.003580 | 0.000246 |
| BetaCoKurtosis | -0.028307 | 0.076703 | Kelly | 3.426255 | 16.522720 | TotalRisk | 0.104676 | 0.098697 |
| BetaCoSkewness | -2.565127 | 1.493734 | Kurtosis | 12.372385 | 4.070376 | TrackingError_Annualized | 0.201367 | 0.183729 |
| Burke | 0.204657 | 3.046626 | M2Sortino | 0.034150 | 0.177795 | TrackingError_Daily | 0.012685 | 0.011574 |
| CAPMAlpha | 0.000131 | 0.000642 | MSquaredExcess | -0.141614 | 0.023635 | Treynor_Annualized | 1.600315 | 107.436660 |
| CAPMBeta | 0.020385 | 0.001586 | Martin | 0.221097 | 7.912122 | Treynor_Daily | 0.006249 | 0.393800 |
| CDD | 0.049102 | 0.037483 | MaximumDrawdown | 0.225761 | 0.049932 | UlcerIndex | 0.147551 | 0.021534 |
| Calmar | 0.144503 | 3.412236 | Modigliani | 0.000250 | 0.001007 | UpCapture | 0.051596 | 0.055064 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | -0.103792 | 0.018699 | UpNumber | 0.302752 | 0.287671 |
| CoSkewness | -0.000000 | 0.000000 | Omega | 1.080062 | 1.352935 | UpPercent | 0.178899 | 0.205479 |
| CumulativeReturn | 0.100817 | 0.081841 | OmegaExcessReturn | 0.006262 | 0.152396 | UpsidePotential | 0.437074 | 0.664641 |
| DRatio | 0.934140 | 0.701230 | PainIndex | 0.125364 | 0.017126 | UpsideRisk | 0.004723 | 0.005028 |
| DownCapture | 0.020832 | -0.120621 | PainRatio | 0.260227 | 9.948620 | VaR_Loss | 0.009356 | 0.009335 |
| DownNumber | 0.301887 | 0.283019 | Prospect | -0.473444 | -0.440691 | Volatility | 0.006598 | 0.006242 |
| DownPercent | 0.861635 | 0.849057 | Rachev | 1.075976 | 1.439696 | Volatility_Annualized | 0.104745 | 0.099091 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.146552</td><td>0.002275</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.164924</td><td>0.000280</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-cpa1t">
<summary><strong>CPA1T — Coop Pank</strong> | HOLD | target 12 shares | priority 18</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>12</td><td>+12</td><td>0.19%</td><td>EUR 2.3300</td><td>0.0531</td><td>30 / 24</td><td>56.23</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![CPA1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/CPA1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![CPA1T complete technical history](figures/technical_analysis/CPA1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![CPA1T return histogram](figures/stock_profiles/CPA1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![CPA1T stochastic dominance](figures/stock_profiles/CPA1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.272948 | -0.064245 | DownsideDeviation | 0.006595 | 0.005887 | Selectivity | -0.057154 | 0.146982 |
| AdjustedSharpe | -0.204274 | 1.095203 | DrawdownDeviation | 0.014058 | 0.010072 | Sharpe_Annualized | -0.209303 | 1.082193 |
| AnnualizedReturn_Arithmetic | -0.032938 | 0.172020 | ES_Loss | 0.021647 | 0.017593 | Sharpe_Daily | -0.013185 | 0.068172 |
| AnnualizedReturn_Geometric | -0.044259 | 0.172964 | FamaBeta | 0.896196 | 1.025760 | Sharpe_ES | -0.006038 | 0.038802 |
| Appraisal | -0.364144 | 0.933702 | GeometricReturn | -0.000180 | 0.000633 | Sharpe_VaR | -0.008197 | 0.046516 |
| ArithmeticReturn | -0.000131 | 0.000683 | Hurst | 0.327174 | 0.402710 | Skewness | 0.543429 | 1.109058 |
| AverageDrawdown | 0.106368 | 0.031531 | Information_Annualized | -1.195555 | -0.306208 | Sortino | -0.019819 | 0.115963 |
| AverageDrawdownLength | 187.000000 | 19.833333 | Information_Daily | -0.069339 | -0.016022 | SpecificRisk | 0.156953 | 0.157418 |
| AverageRecoveryTime | 45.000000 | 7.833333 | JensenAlpha | -0.057154 | 0.146982 | Sterling | -0.091215 | 0.883221 |
| BernardoLedoit | 0.961795 | 1.218730 | Kappa | -0.014072 | 0.087119 | SystematicRisk | 0.009901 | 0.016974 |
| BetaCoKurtosis | 0.012465 | 0.044152 | Kelly | -1.330014 | 6.808161 | TotalRisk | 0.157265 | 0.158330 |
| BetaCoSkewness | -2.462721 | -3.788299 | Kurtosis | 5.777861 | 6.852935 | TrackingError_Annualized | 0.228303 | 0.209809 |
| Burke | -0.164865 | 1.899189 | M2Sortino | -0.044567 | 0.173922 | TrackingError_Daily | 0.014382 | 0.013217 |
| CAPMAlpha | -0.000180 | 0.000585 | MSquaredExcess | -0.226318 | -0.055438 | Treynor_Annualized | -0.784953 | 1.579098 |
| CAPMBeta | 0.056384 | 0.109533 | Martin | -0.144765 | 3.082093 | Treynor_Daily | -0.003186 | 0.005782 |
| CDD | 0.275115 | 0.073944 | MaximumDrawdown | 0.385217 | 0.095833 | UlcerIndex | 0.305731 | 0.056119 |
| Calmar | -0.114894 | 1.804845 | Modigliani | -0.000146 | 0.000665 | UpCapture | 0.032163 | 0.256454 |
| CoKurtosis | 0.000000 | 0.000000 | NetSelectivity | -0.249209 | -0.070356 | UpNumber | 0.373853 | 0.465753 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 0.961795 | 1.218730 | UpPercent | 0.213303 | 0.260274 |
| CumulativeReturn | -0.126674 | 0.083035 | OmegaExcessReturn | -0.082018 | 0.144452 | UpsidePotential | 0.498935 | 0.646128 |
| DRatio | 1.342664 | 0.790136 | PainIndex | 0.281857 | 0.046338 | UpsideRisk | 0.007394 | 0.008080 |
| DownCapture | 0.079258 | 0.122386 | PainRatio | -0.157027 | 3.732649 | VaR_Loss | 0.015946 | 0.014675 |
| DownNumber | 0.474843 | 0.490566 | Prospect | -0.668262 | -0.546743 | Volatility | 0.009913 | 0.010013 |
| DownPercent | 0.764151 | 0.773585 | Rachev | 1.161109 | 1.324196 | Volatility_Annualized | 0.157369 | 0.158955 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.144593</td><td>0.000316</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.164935</td><td>0.000292</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-mode">
<summary><strong>MODE — Modera</strong> | HOLD | target 89 shares | priority 19</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>89</td><td>+89</td><td>3.53%</td><td>EUR 5.9000</td><td>0.0265</td><td>27 / 24</td><td>48.74</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![MODE Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/MODE_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![MODE complete technical history](figures/technical_analysis/MODE_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![MODE return histogram](figures/stock_profiles/MODE_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![MODE stochastic dominance](figures/stock_profiles/MODE_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.138053 | 0.850394 | DownsideDeviation | 0.013694 | 0.015470 | Selectivity | 0.123180 | 1.203817 |
| AdjustedSharpe | 0.424602 | 1.187044 | DrawdownDeviation | 0.014601 | 0.017083 | Sharpe_Annualized | 0.412058 | 1.719097 |
| AnnualizedReturn_Arithmetic | 0.156194 | 0.855131 | ES_Loss | 0.046146 | 0.046567 | Sharpe_Daily | 0.025957 | 0.108293 |
| AnnualizedReturn_Geometric | 0.090636 | 1.087603 | FamaBeta | 2.158692 | 3.209984 | Sharpe_ES | 0.013432 | 0.072871 |
| Appraisal | 0.325888 | 2.458536 | GeometricReturn | 0.000344 | 0.002925 | Sharpe_VaR | 0.019346 | 0.089500 |
| ArithmeticReturn | 0.000620 | 0.003393 | Hurst | 0.401635 | 0.414527 | Skewness | 2.334015 | 1.890019 |
| AverageDrawdown | 0.064277 | 0.047822 | Information_Annualized | -0.322456 | 1.565755 | Sortino | 0.045264 | 0.219346 |
| AverageDrawdownLength | 62.333333 | 13.333333 | Information_Daily | -0.017547 | 0.060793 | SpecificRisk | 0.377984 | 0.489648 |
| AverageRecoveryTime | 20.416667 | 7.666667 | JensenAlpha | 0.123180 | 1.203817 | Sterling | 0.199741 | 4.827093 |
| BernardoLedoit | 1.097997 | 1.468398 | Kappa | 0.030304 | 0.154617 | SystematicRisk | -0.024989 | -0.075920 |
| BetaCoKurtosis | 0.039436 | -0.626344 | Kelly | 1.087055 | 3.455955 | TotalRisk | 0.378809 | 0.495499 |
| BetaCoSkewness | -2.118531 | 47.705619 | Kurtosis | 21.354217 | 9.911120 | TrackingError_Annualized | 0.428131 | 0.543121 |
| Burke | 0.210034 | 5.640953 | M2Sortino | 0.086238 | 1.056044 | TrackingError_Daily | 0.026970 | 0.034213 |
| CAPMAlpha | 0.000745 | 0.003831 | MSquaredExcess | -0.151953 | 0.082128 | Treynor_Annualized | -0.636895 | -2.219960 |
| CAPMBeta | -0.142309 | -0.489920 | Martin | 0.663255 | 18.705819 | Treynor_Daily | -0.002420 | -0.005970 |
| CDD | 0.125234 | 0.124646 | MaximumDrawdown | 0.353767 | 0.125312 | UlcerIndex | 0.136653 | 0.058143 |
| Calmar | 0.256202 | 8.679144 | Modigliani | 0.000287 | 0.001057 | UpCapture | -0.149686 | -0.039922 |
| CoKurtosis | 0.000000 | -0.000000 | NetSelectivity | -0.403034 | 0.326166 | UpNumber | 0.316514 | 0.260274 |
| CoSkewness | -0.000000 | 0.000000 | Omega | 1.097997 | 1.468398 | UpPercent | 0.236239 | 0.205479 |
| CumulativeReturn | 0.296404 | 0.444854 | OmegaExcessReturn | 0.012235 | 1.012671 | UpsidePotential | 0.507155 | 0.687636 |
| DRatio | 1.098570 | 0.732091 | PainIndex | 0.110096 | 0.047637 | UpsideRisk | 0.019552 | 0.027318 |
| DownCapture | -0.372276 | -1.052975 | PainRatio | 0.823245 | 22.831276 | VaR_Loss | 0.032039 | 0.037915 |
| DownNumber | 0.405660 | 0.339623 | Prospect | -0.532100 | -0.366016 | Volatility | 0.023878 | 0.031335 |
| DownPercent | 0.723270 | 0.754717 | Rachev | 1.321910 | 1.719075 | Volatility_Annualized | 0.379059 | 0.497430 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.814159</td><td>-0.008850</td></tr><tr><td>OUT</td><td>93</td><td>92</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.149703</td><td>0.005425</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.161948</td><td>-0.002695</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tal1t">
<summary><strong>TAL1T — Tallink Grupp</strong> | HOLD | target 909 shares | priority 20</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>700</td><td>909</td><td>+209</td><td>3.76%</td><td>EUR 0.6200</td><td>0.0177</td><td>26 / 24</td><td>51.82</td><td>Bullish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![TAL1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/TAL1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![TAL1T complete technical history](figures/technical_analysis/TAL1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TAL1T return histogram](figures/stock_profiles/TAL1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![TAL1T stochastic dominance](figures/stock_profiles/TAL1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.192892 | -0.145603 | DownsideDeviation | 0.006623 | 0.005994 | Selectivity | 0.027007 | 0.080622 |
| AdjustedSharpe | 0.299051 | 0.205110 | DrawdownDeviation | 0.008608 | 0.006983 | Sharpe_Annualized | 0.306412 | 0.750312 |
| AnnualizedReturn_Arithmetic | 0.046837 | 0.095830 | ES_Loss | 0.023856 | 0.018080 | Sharpe_Daily | 0.019302 | 0.047265 |
| AnnualizedReturn_Geometric | 0.035797 | 0.091606 | FamaBeta | 0.870506 | 0.824194 | Sharpe_ES | 0.007791 | 0.021033 |
| Appraisal | 0.176972 | 0.634766 | GeometricReturn | 0.000140 | 0.000348 | Sharpe_VaR | 0.013499 | 0.051588 |
| ArithmeticReturn | 0.000186 | 0.000380 | Hurst | 0.365714 | 0.516015 | Skewness | 0.092191 | -1.605265 |
| AverageDrawdown | 0.029449 | 0.018221 | Information_Annualized | -0.847278 | -0.745925 | Sortino | 0.028063 | 0.063448 |
| AverageDrawdownLength | 41.166667 | 16.285714 | Information_Daily | -0.047277 | -0.040431 | SpecificRisk | 0.152608 | 0.127011 |
| AverageRecoveryTime | 21.277778 | 6.000000 | JensenAlpha | 0.027007 | 0.080622 | Sterling | 0.130860 | 0.554280 |
| BernardoLedoit | 1.064954 | 1.200198 | Kappa | 0.017653 | 0.033252 | SystematicRisk | 0.006749 | 0.007175 |
| BetaCoKurtosis | -0.065405 | 0.055012 | Kelly | 2.004552 | 5.874664 | TotalRisk | 0.152757 | 0.127214 |
| BetaCoSkewness | -3.680137 | -4.847655 | Kurtosis | 10.344557 | 25.419416 | TrackingError_Annualized | 0.227661 | 0.195198 |
| Burke | 0.147077 | 1.205395 | M2Sortino | 0.036221 | 0.092022 | TrackingError_Daily | 0.014341 | 0.012296 |
| CAPMAlpha | 0.000152 | 0.000339 | MSquaredExcess | -0.152656 | -0.101893 | Treynor_Annualized | 0.931339 | 1.978358 |
| CAPMBeta | 0.038436 | 0.046304 | Martin | 0.410319 | 2.554879 | Treynor_Daily | 0.003631 | 0.007513 |
| CDD | 0.071457 | 0.050439 | MaximumDrawdown | 0.173554 | 0.065270 | UlcerIndex | 0.087243 | 0.035855 |
| Calmar | 0.206261 | 1.403486 | Modigliani | 0.000214 | 0.000461 | UpCapture | 0.060333 | 0.122619 |
| CoKurtosis | -0.000000 | 0.000000 | NetSelectivity | -0.163278 | -0.103900 | UpNumber | 0.383028 | 0.369863 |
| CoSkewness | -0.000001 | -0.000000 | Omega | 1.064954 | 1.200198 | UpPercent | 0.176606 | 0.150685 |
| CumulativeReturn | 0.110972 | 0.044800 | OmegaExcessReturn | -0.002123 | 0.062576 | UpsidePotential | 0.460100 | 0.380371 |
| DRatio | 1.020660 | 0.721035 | PainIndex | 0.074668 | 0.028290 | UpsideRisk | 0.006983 | 0.005333 |
| DownCapture | 0.020975 | 0.042594 | PainRatio | 0.479418 | 3.238094 | VaR_Loss | 0.013769 | 0.007371 |
| DownNumber | 0.418239 | 0.320755 | Prospect | -0.511984 | -0.332707 | Volatility | 0.009629 | 0.008046 |
| DownPercent | 0.820755 | 0.905660 | Rachev | 1.053652 | 0.995431 | Volatility_Annualized | 0.152858 | 0.127720 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.151344</td><td>0.007067</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.165890</td><td>0.001247</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tve1t">
<summary><strong>TVE1T — Tallinna Vesi</strong> | HOLD | target 35 shares | priority 21</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>0</td><td>35</td><td>+35</td><td>2.53%</td><td>EUR 10.8500</td><td>0.0177</td><td>28 / 26</td><td>34.52</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![TVE1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/TVE1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![TVE1T complete technical history](figures/technical_analysis/TVE1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TVE1T return histogram](figures/stock_profiles/TVE1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![TVE1T stochastic dominance](figures/stock_profiles/TVE1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.308852 | -0.281897 | DownsideDeviation | 0.005206 | 0.005146 | Selectivity | -0.086229 | -0.051138 |
| AdjustedSharpe | -0.702177 | -0.447337 | DrawdownDeviation | 0.010849 | 0.006039 | Sharpe_Annualized | -0.751125 | -0.424635 |
| AnnualizedReturn_Arithmetic | -0.078108 | -0.041014 | ES_Loss | 0.017445 | 0.015053 | Sharpe_Daily | -0.047316 | -0.026750 |
| AnnualizedReturn_Geometric | -0.080163 | -0.044688 | FamaBeta | 0.592195 | 0.623278 | Sharpe_ES | -0.017767 | -0.010812 |
| Appraisal | -0.830607 | -0.532081 | GeometricReturn | -0.000332 | -0.000181 | Sharpe_VaR | -0.032181 | -0.018572 |
| ArithmeticReturn | -0.000310 | -0.000163 | Hurst | 0.366349 | 0.476392 | Skewness | -1.446544 | -3.657486 |
| AverageDrawdown | 0.077168 | 0.013045 | Information_Annualized | -1.544032 | -1.574955 | Sortino | -0.059534 | -0.031628 |
| AverageDrawdownLength | 187.000000 | 11.444444 | Information_Daily | -0.091195 | -0.091035 | SpecificRisk | 0.103814 | 0.096110 |
| AverageRecoveryTime | 102.500000 | 3.777778 | JensenAlpha | -0.086229 | -0.051138 | Sterling | -0.201495 | -0.271543 |
| BernardoLedoit | 0.853972 | 0.903435 | Kappa | -0.035953 | -0.016776 | SystematicRisk | 0.004658 | 0.004214 |
| BetaCoKurtosis | 0.024684 | 0.026251 | Kelly | -7.223233 | -4.396474 | TotalRisk | 0.103919 | 0.096202 |
| BetaCoSkewness | 0.061649 | 11.547958 | Kurtosis | 13.475446 | 30.337179 | TrackingError_Annualized | 0.200029 | 0.178987 |
| Burke | -0.412768 | -0.751080 | M2Sortino | -0.082400 | -0.045321 | TrackingError_Daily | 0.012601 | 0.011275 |
| CAPMAlpha | -0.000333 | -0.000187 | MSquaredExcess | -0.296295 | -0.249680 | Treynor_Annualized | -3.022038 | -1.643297 |
| CAPMBeta | 0.026526 | 0.027194 | Martin | -0.317624 | -1.452294 | Treynor_Daily | -0.012498 | -0.006671 |
| CDD | 0.195220 | 0.020919 | MaximumDrawdown | 0.297838 | 0.064569 | UlcerIndex | 0.252382 | 0.030770 |
| Calmar | -0.269148 | -0.692092 | Modigliani | -0.000523 | -0.000261 | UpCapture | -0.033885 | -0.022344 |
| CoKurtosis | 0.000000 | 0.000000 | NetSelectivity | -0.215591 | -0.192535 | UpNumber | 0.284404 | 0.273973 |
| CoSkewness | 0.000000 | 0.000000 | Omega | 0.853972 | 0.903435 | UpPercent | 0.121560 | 0.082192 |
| CumulativeReturn | -0.221208 | -0.022599 | OmegaExcessReturn | -0.109970 | -0.069612 | UpsidePotential | 0.348158 | 0.295903 |
| DRatio | 1.203830 | 1.006260 | PainIndex | 0.235070 | 0.022343 | UpsideRisk | 0.003981 | 0.003205 |
| DownCapture | 0.049120 | 0.019848 | PainRatio | -0.341015 | -2.000040 | VaR_Loss | 0.009632 | 0.008763 |
| DownNumber | 0.320755 | 0.283019 | Prospect | -0.569150 | -0.441041 | Volatility | 0.006551 | 0.006084 |
| DownPercent | 0.823899 | 0.811321 | Rachev | 0.767831 | 0.729913 | Volatility_Annualized | 0.103987 | 0.096585 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.814159</td><td>-0.008850</td></tr><tr><td>OUT</td><td>93</td><td>92</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.139534</td><td>-0.004743</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.166730</td><td>0.002087</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tsm1t">
<summary><strong>TSM1T — Tallinna Sadam</strong> | HOLD | target 330 shares | priority 22</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Technical decision</span></th><th><span>Observation date</span></th></tr></thead><tbody><tr><td>330</td><td>330</td><td>+0</td><td>2.69%</td><td>EUR 1.2220</td><td>-0.0177</td><td>28 / 30</td><td>30.19</td><td>Bearish</td><td>Inside bands</td><td>HOLD</td><td>2026-08-28</td></tr></tbody></table>

![TSM1T Bollinger Bands, RSI(14) and MACD — last 126 observations](figures/stock_profiles/TSM1T_technicals_6m.png)

Green/red vertical lines mark unanimous 3-of-3 buy/sell signals. Blue/purple lines mark 2-of-3 buy/sell confirmations.

<details markdown="1">
<summary>Complete technical history</summary>

![TSM1T complete technical history](figures/technical_analysis/TSM1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TSM1T return histogram](figures/stock_profiles/TSM1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![TSM1T stochastic dominance](figures/stock_profiles/TSM1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.268269 | -0.410984 | DownsideDeviation | 0.005637 | 0.007125 | Selectivity | -0.036334 | -0.167951 |
| AdjustedSharpe | -0.294847 | -0.426253 | DrawdownDeviation | 0.011779 | 0.014690 | Sharpe_Annualized | -0.287906 | -1.288953 |
| AnnualizedReturn_Arithmetic | -0.033543 | -0.180919 | ES_Loss | 0.018145 | 0.021446 | Sharpe_Daily | -0.018136 | -0.081196 |
| AnnualizedReturn_Geometric | -0.039580 | -0.173775 | FamaBeta | 0.663495 | 0.905767 | Sharpe_ES | -0.007336 | -0.033476 |
| Appraisal | -0.312136 | -1.201787 | GeometricReturn | -0.000160 | -0.000757 | Sharpe_VaR | -0.013894 | -0.057693 |
| ArithmeticReturn | -0.000133 | -0.000718 | Hurst | 0.376007 | 0.473674 | Skewness | -1.672096 | -1.925976 |
| AverageDrawdown | 0.065627 | 0.058335 | Information_Annualized | -1.260667 | -1.939685 | Sortino | -0.023611 | -0.100763 |
| AverageDrawdownLength | 106.285714 | 41.000000 | Information_Daily | -0.072945 | -0.120042 | SpecificRisk | 0.116404 | 0.139751 |
| AverageRecoveryTime | 35.857143 | 2.000000 | JensenAlpha | -0.036334 | -0.167951 | Sterling | -0.104646 | -0.656421 |
| BernardoLedoit | 0.941679 | 0.752323 | Kappa | -0.013175 | -0.057224 | SystematicRisk | -0.002492 | -0.003804 |
| BetaCoKurtosis | -0.045930 | -0.012177 | Kelly | -2.471135 | -9.183136 | TotalRisk | 0.116430 | 0.139803 |
| BetaCoSkewness | -1.257074 | -0.433006 | Kurtosis | 19.250328 | 18.645385 | TrackingError_Annualized | 0.212799 | 0.211882 |
| Burke | -0.187476 | -1.432956 | M2Sortino | -0.040305 | -0.172626 | TrackingError_Daily | 0.013405 | 0.013347 |
| CAPMAlpha | -0.000121 | -0.000696 | MSquaredExcess | -0.234675 | -0.346799 | Treynor_Annualized | 2.788504 | 7.078323 |
| CAPMBeta | -0.014194 | -0.024550 | Martin | -0.193218 | -1.669377 | Treynor_Daily | 0.011290 | 0.030843 |
| CDD | 0.204455 | 0.125019 | MaximumDrawdown | 0.278227 | 0.164731 | UlcerIndex | 0.204845 | 0.104096 |
| Calmar | -0.142257 | -1.054902 | Modigliani | -0.000201 | -0.000793 | UpCapture | -0.031784 | -0.153060 |
| CoKurtosis | -0.000000 | -0.000000 | NetSelectivity | -0.191314 | -0.388631 | UpNumber | 0.399083 | 0.383562 |
| CoSkewness | -0.000000 | -0.000000 | Omega | 0.941679 | 0.752323 | UpPercent | 0.178899 | 0.150685 |
| CumulativeReturn | -0.113818 | -0.091031 | OmegaExcessReturn | -0.071857 | -0.208285 | UpsidePotential | 0.381236 | 0.306069 |
| DRatio | 1.094005 | 1.595059 | PainIndex | 0.179389 | 0.084215 | UpsideRisk | 0.004694 | 0.005226 |
| DownCapture | -0.000623 | 0.018696 | PainRatio | -0.220636 | -2.063476 | VaR_Loss | 0.009580 | 0.012444 |
| DownNumber | 0.421384 | 0.509434 | Prospect | -0.529670 | -0.609303 | Volatility | 0.007339 | 0.008842 |
| DownPercent | 0.839623 | 0.830189 | Rachev | 0.948434 | 0.788970 | Volatility_Annualized | 0.116508 | 0.140361 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.823009</td><td>0.823009</td><td>0.000000</td></tr><tr><td>OUT</td><td>93</td><td>93</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.144277</td><td>1.150512</td><td>0.006235</td></tr><tr><td>Sortino ratio</td><td>0.164643</td><td>0.168777</td><td>0.004133</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

## Leave-one-out portfolio sensitivity

Each scenario removes one share from curent_update_baltic and proportionally rescales the remaining weights. Positive delta means that the ratio improves after removal; negative delta means that the removed share was beneficial for that criterion.

**Main result.** Removing **ROE1L** produces the largest netSD change (+0.008850); removing **TKM1T** gives the largest Rachev improvement (+0.053077); removing **TKM1T** gives the largest Sortino improvement (+0.017413). These are sensitivity results, not automatically new trade recommendations, because the three criteria can move in opposite directions.

<details markdown="1">
<summary><strong>Open complete netSD, Rachev and Sortino sensitivity table</strong></summary>

| Removed share | netSD | Δ netSD | Rachev | Δ Rachev | Sortino | Δ Sortino |
| --- | --- | --- | --- | --- | --- | --- |
| None (baseline) | 0.823009 | 0.000000 | 1.144277 | 0.000000 | 0.164643 | 0.000000 |
| AKO1L | 0.823009 | 0.000000 | 1.143852 | -0.000425 | 0.164145 | -0.000498 |
| APG1L | 0.743363 | -0.079646 | 1.159539 | 0.015261 | 0.154325 | -0.010318 |
| CPA1T | 0.823009 | 0.000000 | 1.144593 | 0.000316 | 0.164935 | 0.000292 |
| EFT1T | 0.805310 | -0.017699 | 1.145198 | 0.000921 | 0.165381 | 0.000737 |
| GRG1L | 0.814159 | -0.008850 | 1.140842 | -0.003435 | 0.161601 | -0.003043 |
| HAE1T | 0.796460 | -0.026549 | 1.128937 | -0.015340 | 0.166639 | 0.001996 |
| IGN1L | 0.823009 | 0.000000 | 1.143883 | -0.000394 | 0.164592 | -0.000052 |
| KNE1L | 0.769912 | -0.053097 | 1.155081 | 0.010804 | 0.155578 | -0.009066 |
| LHV1T | 0.823009 | 0.000000 | 1.144293 | 0.000016 | 0.164663 | 0.000019 |
| MODE | 0.814159 | -0.008850 | 1.149703 | 0.005425 | 0.161948 | -0.002695 |
| MOLNR | 0.725664 | -0.097345 | 1.084471 | -0.059806 | 0.147143 | -0.017500 |
| MRK1T | 0.734513 | -0.088496 | 1.127628 | -0.016649 | 0.150276 | -0.014368 |
| PZV1L | 0.823009 | 0.000000 | 1.145374 | 0.001097 | 0.164179 | -0.000465 |
| ROE1L | 0.831858 | 0.008850 | 1.141467 | -0.002810 | 0.165744 | 0.001101 |
| RSU1L | 0.796460 | -0.026549 | 1.158492 | 0.014215 | 0.160546 | -0.004097 |
| SAF1R | 0.796460 | -0.026549 | 1.175662 | 0.031385 | 0.172213 | 0.007569 |
| TAL1T | 0.823009 | 0.000000 | 1.151344 | 0.007067 | 0.165890 | 0.001247 |
| TEL1L | 0.823009 | 0.000000 | 1.146552 | 0.002275 | 0.164924 | 0.000280 |
| TKM1T | 0.778761 | -0.044248 | 1.197354 | 0.053077 | 0.182056 | 0.017413 |
| TSM1T | 0.823009 | 0.000000 | 1.150512 | 0.006235 | 0.168777 | 0.004133 |
| TVE1T | 0.814159 | -0.008850 | 1.139534 | -0.004743 | 0.166730 | 0.002087 |
| VIRSI | 0.823009 | 0.000000 | 1.144134 | -0.000143 | 0.164952 | 0.000309 |
| VLP1L | 0.699115 | -0.123894 | 1.131153 | -0.013124 | 0.134036 | -0.030607 |

</details>



Priority 1 denotes the largest individual-share netSD ratio. Dividend columns use only official payments dated in 2025 and 2026. Annual dividend cash equals dividend per share multiplied by the target number of shares.

curent_update_baltic keeps every currently held share, permits purchases only, and uses the EUR 15,000 ceiling. Its calculated netSD is 0.823009, with OUT=93 and IN=0; the remaining cash is EUR 76.64.

<details markdown="1">
<summary><strong>Table 4. Current and optimised portfolios</strong></summary>

| Portfolio | netSD | OUT | IN | denominator | mean | SD | Historical dividends EUR | Portfolio value EUR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0.451327 | 59 | 8 | 113 | 0.000375 | 0.005654 | 1394.136000 | 8044.380051 |
| Optimised | 0.902655 | 102 | 0 | 113 | 0.000597 | 0.004457 | 2109.244117 | 15000.000000 |

</details>


<details markdown="1">
<summary><strong>Figure 1. Recommended changes relative to current holdings: two adjacent portfolio bars for every share</strong></summary>

![Report figure 1](report/assets/figure-01.png)

</details>


Each share has two adjacent bars. The blue bar is the change required for Baltic_NetSD, where negative values are sales. The orange bar is the additional purchase required for curent_update_baltic; it cannot be negative because every current position is retained. Both use the EUR 15,000 ceiling.

<details markdown="1">
<summary><strong>Figure 2. Capital allocation and historical gross dividend contribution</strong></summary>

![Report figure 2](report/assets/figure-02.png)

</details>


## Statistical and performance analysis

<details markdown="1">
<summary><strong>Table 5. Empirical statistics of portfolio and S&P 500 daily returns</strong></summary>

| entity | observations | mean | median | SD | minimum | maximum | skewness | kurtosis | VaR_95 | ES_95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 754 | 0.000407 | 0.000379 | 0.005773 | -0.040123 | 0.046525 | -0.054536 | 18.599062 | 0.006437 | 0.013055 |
| Markowitz_training | 754 | 0.000281 | 0.000273 | 0.004476 | -0.025519 | 0.027713 | -0.397936 | 10.657233 | 0.005893 | 0.010467 |
| MAD_training | 754 | 0.000289 | 0.000321 | 0.004477 | -0.028989 | 0.026779 | -0.720441 | 12.464893 | 0.005549 | 0.010563 |
| Minimax_training | 754 | 0.000619 | 0.000276 | 0.005683 | -0.021554 | 0.029115 | 0.377474 | 6.881817 | 0.007326 | 0.012242 |
| Robust_training | 754 | 0.000354 | 0.000242 | 0.004587 | -0.026819 | 0.026893 | -0.284450 | 10.181225 | 0.005753 | 0.010453 |
| NetSD_training | 754 | 0.000680 | 0.000268 | 0.005876 | -0.027866 | 0.047554 | 0.625424 | 11.688924 | 0.007314 | 0.012062 |
| Markowitz_full | 754 | 0.000392 | 0.000323 | 0.004475 | -0.030086 | 0.026550 | -0.517818 | 10.814045 | 0.005900 | 0.010369 |
| MAD_full | 754 | 0.000398 | 0.000380 | 0.004540 | -0.034511 | 0.026269 | -0.804959 | 12.865225 | 0.005631 | 0.010606 |
| Minimax_full | 754 | 0.000480 | 0.000111 | 0.005340 | -0.021604 | 0.029071 | 0.181686 | 7.266982 | 0.007042 | 0.011974 |
| Robust_full | 754 | 0.000395 | 0.000351 | 0.004596 | -0.034840 | 0.026102 | -0.927740 | 13.552122 | 0.005530 | 0.010819 |
| NetSD_full | 754 | 0.000624 | 0.000368 | 0.005256 | -0.036431 | 0.032351 | -0.270819 | 11.048650 | 0.006622 | 0.011672 |
| Baltic_NetSD | 754 | 0.000552 | 0.000350 | 0.004489 | -0.025982 | 0.036076 | 0.232602 | 12.421674 | 0.005263 | 0.009590 |
| curent_update_baltic | 754 | 0.000457 | 0.000262 | 0.004399 | -0.021857 | 0.027976 | 0.052546 | 9.903697 | 0.004892 | 0.009816 |
| SP500 | 754 | 0.000879 | 0.001368 | 0.011062 | -0.062006 | 0.097992 | 0.100965 | 14.865600 | 0.016061 | 0.025050 |

</details>


Baltic_NetSD has mean daily return 0.000552, median 0.000350 and daily standard deviation 0.004489. Its historical 95% VaR is 0.005263 and ES (CVaR) is 0.009590. VaR is the loss threshold exceeded on approximately 5% of days; ES is the average return in that adverse tail.

<details markdown="1">
<summary><strong>Figure 3. Histograms and kernel densities; every panel uses the same return-axis limits</strong></summary>

![Report figure 3](report/assets/figure-03.png)

</details>


The recalculated Baltic_NetSD maximum daily return is 0.036076. The earlier value 0.168092 on 2025-06-25 was traced to RKB1R, whose unadjusted close moved from EUR 0.107 to EUR 0.476 between common Baltic trading dates. RKB1R belongs to the Baltic Secondary List. After excluding every Secondary List share from the investable set, this observation no longer enters the portfolio return; RKB1R is now excluded from both the investable set and every netSD reference network, so the suspect observation cannot affect the objective or its denominator.

<details markdown="1">
<summary><strong>Figure 4a. Portfolio and S&P 500 complete empirical CDF; right side truncated at return 0.05</strong></summary>

![Report figure 4](report/assets/figure-04.png)

</details>


<details markdown="1">
<summary><strong>Figure 4b. Portfolio and S&P 500 empirical CDF: enlarged left tail</strong></summary>

![Report figure 5](report/assets/figure-05.png)

</details>


<details markdown="1">
<summary><strong>Figure 4c. Portfolio and S&P 500 empirical CDF: enlarged centre</strong></summary>

![Report figure 6](report/assets/figure-06.png)

</details>


<details markdown="1">
<summary><strong>Figure 4d. Portfolio and S&P 500 empirical CDF: enlarged right tail</strong></summary>

![Report figure 7](report/assets/figure-07.png)

</details>


<details markdown="1">
<summary><strong>Figure 4e. Separate colour and line-pattern key for Figures 4 and 6</strong></summary>

![Report figure 8](report/assets/figure-08.png)

</details>


<details markdown="1">
<summary><strong>Figure 5a. Individual-share complete empirical CDF restricted to returns from -0.30 to 0.30</strong></summary>

![Report figure 9](report/assets/figure-09.png)

</details>


<details markdown="1">
<summary><strong>Figure 5b. Individual-share empirical CDF: enlarged left tail</strong></summary>

![Report figure 10](report/assets/figure-10.png)

</details>


<details markdown="1">
<summary><strong>Figure 5c. Individual-share empirical CDF: enlarged centre</strong></summary>

![Report figure 11](report/assets/figure-11.png)

</details>


<details markdown="1">
<summary><strong>Figure 5d. Individual-share empirical CDF: enlarged right tail</strong></summary>

![Report figure 12](report/assets/figure-12.png)

</details>


<details markdown="1">
<summary><strong>Figure 5e. Separate colour and line-pattern key for Figures 5 and 7</strong></summary>

![Report figure 13](report/assets/figure-13.png)

</details>


<details markdown="1">
<summary><strong>Figure 6a. Portfolio and benchmark FSD component H1(x)</strong></summary>

![Report figure 14](report/assets/figure-14.png)

</details>


<details markdown="1">
<summary><strong>Figure 6b. Portfolio and benchmark SSD component H2(x): enlarged right side with curve-end labels</strong></summary>

![Report figure 15](report/assets/figure-15.png)

</details>


<details markdown="1">
<summary><strong>Figure 6c. Portfolio and benchmark TSD component H3(x): enlarged right side with curve-end labels</strong></summary>

![Report figure 16](report/assets/figure-16.png)

</details>


<details markdown="1">
<summary><strong>Figure 7a. Individual-share FSD component H1(x)</strong></summary>

![Report figure 17](report/assets/figure-17.png)

</details>


<details markdown="1">
<summary><strong>Figure 7b. Individual-share SSD component H2(x): enlarged right side with curve-end labels</strong></summary>

![Report figure 18](report/assets/figure-18.png)

</details>


<details markdown="1">
<summary><strong>Figure 7c. Individual-share TSD component H3(x): enlarged right side with curve-end labels</strong></summary>

![Report figure 19](report/assets/figure-19.png)

</details>


For every entity, H1(x)=F(x) is the empirical CDF used for FSD. H2(x)=∫H1(u)du is the cumulative FSD component used for SSD, and H3(x)=∫H2(u)du is the cumulative SSD component used for TSD. The CSV files accompanying the report contain every displayed entity as a separate column on the same return-threshold grid.

<details markdown="1">
<summary><strong>Figure 7d. Baltic_NetSD minus every other portfolio: FSD-component differences</strong></summary>

![Report figure 20](report/assets/figure-20.png)

</details>


<details markdown="1">
<summary><strong>Figure 7e. Baltic_NetSD minus every other portfolio: SSD-component differences</strong></summary>

![Report figure 21](report/assets/figure-21.png)

</details>


<details markdown="1">
<summary><strong>Figure 7f. Baltic_NetSD minus every other portfolio: TSD-component differences</strong></summary>

![Report figure 22](report/assets/figure-22.png)

</details>


<details markdown="1">
<summary><strong>Figure 7g. Baltic_NetSD minus every individual share: FSD-component differences</strong></summary>

![Report figure 23](report/assets/figure-23.png)

</details>


<details markdown="1">
<summary><strong>Figure 7h. Baltic_NetSD minus every individual share: SSD-component differences</strong></summary>

![Report figure 24](report/assets/figure-24.png)

</details>


<details markdown="1">
<summary><strong>Figure 7i. Baltic_NetSD minus every individual share: TSD-component differences</strong></summary>

![Report figure 25](report/assets/figure-25.png)

</details>


Each difference is calculated pointwise as Hq_Baltic_NetSD(x) - Hq_comparator(x). A negative value means that the Baltic_NetSD integrated-distribution component is smaller at that threshold; dominance requires the relevant difference to remain nonpositive over the complete support, with at least one strict inequality.

### Local SSD advantages at large return thresholds

<details markdown="1">
<summary><strong>Table 7A. Local right-side SSD-component advantages over Baltic_NetSD</strong></summary>

| comparator | type | local_advantage_from_x | display_upper_x | end_difference | maximum_difference |
| --- | --- | --- | --- | --- | --- |
| NetSD_training | portfolio | 0.012527 | 0.026714 | 0.000097 | 0.000097 |
| NetSD_full | portfolio | 0.020425 | 0.026714 | 0.000009 | 0.000009 |
| VLP1L | share | 0.021776 | 0.155865 | 0.000826 | 0.000826 |
| KNR1L | share | 0.079384 | 0.155865 | 0.000609 | 0.000609 |
| MOLNR | share | 0.114148 | 0.155865 | 0.000590 | 0.000590 |
| IVL1L | share | 0.031708 | 0.155865 | 0.000525 | 0.000525 |
| INC1L | share | 0.033695 | 0.155865 | 0.000462 | 0.000462 |
| KNE1L | share | 0.035681 | 0.155865 | 0.000292 | 0.000292 |
| MRK1T | share | 0.036674 | 0.155865 | 0.000181 | 0.000181 |
| APG1L | share | 0.018796 | 0.155865 | 0.000149 | 0.000149 |

</details>


These are local, right-side comparisons and must not be interpreted as SSD over the complete return domain. A positive difference H2_Baltic_NetSD(x)-H2_comparator(x) means that the comparator has the smaller, hence locally preferable, SSD component at that threshold. Among portfolios this occurs for NetSD_training, NetSD_full. The five strongest share cases at the displayed endpoint are VLP1L, KNR1L, MOLNR, IVL1L, INC1L. Smaller positive endpoint differences also occur for KNE1L, MRK1T, APG1L. The table reports the threshold from which the advantage remains positive to the displayed upper endpoint. The listed shares are therefore candidates for further investment analysis, while the absence of full-support dominance means this chart alone is insufficient for an investment decision.

The result that may appear surprising in the difference figures is therefore real but local. NetSD_training has a smaller H2 component than Baltic_NetSD from x=0.012089 to the displayed right endpoint, and NetSD_full does so from x=0.016037. Neither portfolio SSD-dominates Baltic_NetSD over the complete support because the required inequality fails at smaller x values. The listed shares deserve separate investment analysis because their upper-threshold SSD components are favourable. RKB1R is absent from these recalculated comparisons because its suspect unadjusted prices fail the data-quality screen. A local right-side advantage is evidence about one part of the distribution and is not full-domain SSD dominance.

<details markdown="1">
<summary><strong>Table 6. Weight concentration and diversification</strong></summary>

| portfolio | HHI_weights | effective_number | maximum_weight | number_positive | diversification_ratio |
| --- | --- | --- | --- | --- | --- |
| Current | 0.184053 | 5.433206 | 0.325793 | 9 | 1.967318 |
| Markowitz_training | 0.173946 | 5.748903 | 0.325443 | 10 | 2.215022 |
| MAD_training | 0.202077 | 4.948602 | 0.379940 | 10 | 2.162493 |
| Minimax_training | 0.169523 | 5.898915 | 0.279680 | 10 | 2.044411 |
| Robust_training | 0.180150 | 5.550933 | 0.349431 | 10 | 2.223341 |
| NetSD_training | 0.188413 | 5.307499 | 0.337844 | 10 | 1.955892 |
| Markowitz_full | 0.152149 | 6.572488 | 0.295792 | 10 | 2.288552 |
| MAD_full | 0.182270 | 5.486352 | 0.338655 | 10 | 2.216582 |
| Minimax_full | 0.157248 | 6.359400 | 0.258417 | 10 | 2.077220 |
| Robust_full | 0.215235 | 4.646077 | 0.386466 | 10 | 2.157801 |
| NetSD_full | 0.132893 | 7.524846 | 0.188213 | 10 | 2.210873 |
| Baltic_NetSD | 0.070139 | 14.257415 | 0.120143 | 21 | 2.644089 |
| curent_update_baltic | 0.083115 | 12.031504 | 0.191487 | 23 | 2.808721 |

</details>


For Baltic_NetSD, HHI=0.070139; lower is better because less capital is concentrated in a few shares. Its effective number of equally weighted positions is 14.26, the largest weight is 12.01%, and the diversification ratio is 2.644; a value above 1 means portfolio volatility is below the weighted average volatility of its components.

<details markdown="1">
<summary><strong>Figure 8. HHI concentration comparison</strong></summary>

![Report figure 26](report/assets/figure-26.png)

</details>


<details markdown="1">
<summary><strong>Table 7. Canonical comparable netSD results</strong></summary>

| entity | OUT | IN | denominator | netSD | mean | SD |
| --- | --- | --- | --- | --- | --- | --- |
| Current | 59 | 8 | 113 | 0.451327 | 0.000375 | 0.005654 |
| Markowitz_training | 64 | 0 | 113 | 0.566372 | 0.000269 | 0.004359 |
| MAD_training | 64 | 0 | 113 | 0.566372 | 0.000270 | 0.004367 |
| Minimax_training | 84 | 0 | 113 | 0.743363 | 0.000568 | 0.005566 |
| Robust_training | 64 | 0 | 113 | 0.566372 | 0.000334 | 0.004491 |
| NetSD_training | 88 | 0 | 113 | 0.778761 | 0.000712 | 0.005997 |
| Markowitz_full | 64 | 0 | 113 | 0.566372 | 0.000375 | 0.004383 |
| MAD_full | 64 | 0 | 113 | 0.566372 | 0.000375 | 0.004432 |
| Minimax_full | 72 | 0 | 113 | 0.637168 | 0.000439 | 0.005205 |
| Robust_full | 66 | 0 | 113 | 0.584071 | 0.000375 | 0.004498 |
| NetSD_full | 90 | 0 | 113 | 0.796460 | 0.000602 | 0.005197 |
| Baltic_NetSD | 102 | 0 | 113 | 0.902655 | 0.000597 | 0.004457 |
| curent_update_baltic | 93 | 0 | 113 | 0.823009 | 0.000467 | 0.004316 |

</details>


Baltic_NetSD has OUT=102 and IN=0. Dividing OUT-IN by the common network fixed denominator 113 gives netSD=0.902655. A larger netSD is better within this exact fixed reference system.

For curent_update_baltic, IN=0 because Baltic_NetSD dominates it by third-order stochastic dominance over the complete empirical support. There are no incoming FSD or SSD relations. Thus IN=1 is one directed TSD relation from Baltic_NetSD, rather than one adverse observation or one share.

<details markdown="1">
<summary><strong>Table 8. Systematic risk relative to S&P 500</strong></summary>

| entity | CAPMBeta | CAPMAlpha | JensenAlpha | SpecificRisk | SystematicRisk | TotalRisk | TrackingError_Annualized | Information_Annualized |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0.061460 | 0.000353 | 0.089279 | 0.090944 | 0.010792 | 0.091582 | 0.188261 | -0.665855 |
| Markowitz_training | 0.044911 | 0.000242 | 0.060407 | 0.070568 | 0.007886 | 0.071007 | 0.181970 | -0.868339 |
| MAD_training | 0.046369 | 0.000248 | 0.062126 | 0.070563 | 0.008142 | 0.071031 | 0.181733 | -0.858181 |
| Minimax_training | 0.061845 | 0.000564 | 0.149827 | 0.089503 | 0.010860 | 0.090160 | 0.187509 | -0.345150 |
| Robust_training | 0.052772 | 0.000307 | 0.078254 | 0.072184 | 0.009267 | 0.072777 | 0.181337 | -0.763035 |
| NetSD_training | 0.061383 | 0.000626 | 0.167719 | 0.092596 | 0.010779 | 0.093221 | 0.189078 | -0.248219 |
| Markowitz_full | 0.050216 | 0.000348 | 0.089470 | 0.070443 | 0.008818 | 0.070992 | 0.181063 | -0.705471 |
| MAD_full | 0.052032 | 0.000352 | 0.090709 | 0.071438 | 0.009137 | 0.072020 | 0.181160 | -0.695964 |
| Minimax_full | 0.048315 | 0.000438 | 0.113489 | 0.084287 | 0.008484 | 0.084713 | 0.187191 | -0.556390 |
| Robust_full | 0.054150 | 0.000348 | 0.089344 | 0.072284 | 0.009509 | 0.072906 | 0.181155 | -0.700843 |
| NetSD_full | 0.062943 | 0.000569 | 0.151827 | 0.082639 | 0.011053 | 0.083375 | 0.184155 | -0.339213 |
| Baltic_NetSD | 0.032170 | 0.000524 | 0.139061 | 0.070993 | 0.005649 | 0.071217 | 0.184198 | -0.446646 |
| curent_update_baltic | 0.044353 | 0.000418 | 0.109114 | 0.069344 | 0.007788 | 0.069780 | 0.181589 | -0.602634 |
| SP500 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 0.175597 | 0.175597 | 0.000000 | nan |

</details>


CAPM beta measures sensitivity to S&P 500: beta below 1 means a smaller average response to market movements, while beta above 1 means greater sensitivity. SpecificRisk is the residual component not explained by the benchmark; SystematicRisk is the benchmark-related component; TotalRisk combines both.

<details markdown="1">
<summary><strong>Table 8A. Individual-share netSD and admissibility for the new optimisation</strong></summary>

| asset | OUT | IN | denominator | netSD | segment | positive_netSD | secondary_list | admissible |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIR | 6 | 100 | 113 | -0.831858 | First North Baltic Share List | False | False | False |
| AKO1L | 25 | 11 | 113 | 0.123894 | Baltic Main List | True | False | True |
| AMG1L | 28 | 34 | 113 | -0.053097 | Baltic Secondary List | False | True | False |
| APG1L | 38 | 0 | 113 | 0.336283 | Baltic Main List | True | False | True |
| ARC1T | 22 | 40 | 113 | -0.159292 | Baltic Main List | False | False | False |
| AUG1L | 2 | 105 | 113 | -0.911504 | Baltic Secondary List | False | True | False |
| BAL1R | 0 | 112 | 113 | -0.991150 | Baltic Secondary List | False | True | False |
| BERCM | 6 | 92 | 113 | -0.761062 | First North Baltic Share List | False | False | False |
| CPA1T | 30 | 24 | 113 | 0.053097 | Baltic Main List | True | False | True |
| CTS1L | 0 | 89 | 113 | -0.787611 | Baltic First North Foreign Shares trading list | False | False | False |
| DGR1R | 24 | 25 | 113 | -0.008850 | Baltic Main List | False | False | False |
| EFT1T | 36 | 23 | 113 | 0.115044 | Baltic Main List | True | False | True |
| EWA1L | 29 | 29 | 113 | 0.000000 | First North Baltic Share List | False | False | False |
| GRG1L | 49 | 6 | 113 | 0.380531 | Baltic Main List | True | False | True |
| HAE1T | 37 | 24 | 113 | 0.115044 | Baltic Main List | True | False | True |
| HPR1T | 17 | 64 | 113 | -0.415929 | Baltic Main List | False | False | False |
| IDX1R | 17 | 54 | 113 | -0.327434 | Baltic Main List | False | False | False |
| IGN1L | 56 | 10 | 113 | 0.407080 | Baltic Main List | True | False | True |
| INC1L | 31 | 4 | 113 | 0.238938 | Baltic Secondary List | True | True | False |
| INL1L | 11 | 61 | 113 | -0.442478 | Baltic Secondary List | False | True | False |
| INR1L | 29 | 7 | 113 | 0.194690 | Baltic Secondary List | True | True | False |
| IVL1L | 50 | 0 | 113 | 0.442478 | Baltic Secondary List | True | True | False |
| KNE1L | 42 | 0 | 113 | 0.371681 | Baltic Main List | True | False | True |
| KNR1L | 12 | 2 | 113 | 0.088496 | Baltic Secondary List | True | True | False |
| LGD1L | 45 | 4 | 113 | 0.362832 | Baltic Secondary List | True | True | False |
| LHV1T | 34 | 22 | 113 | 0.106195 | Baltic Main List | True | False | True |
| LINDA | 5 | 89 | 113 | -0.743363 | First North Baltic Share List | False | False | False |
| MAGIC | 0 | 105 | 113 | -0.929204 | First North Baltic Share List | False | False | False |
| MDARA | 18 | 55 | 113 | -0.327434 | First North Baltic Share List | False | False | False |
| MODE | 27 | 24 | 113 | 0.026549 | First North Baltic Share List | True | False | True |
| MOLNR | 4 | 0 | 113 | 0.035398 | First North Baltic Share List | True | False | True |
| MRK1T | 42 | 0 | 113 | 0.371681 | Baltic Main List | True | False | True |
| NCN1T | 23 | 50 | 113 | -0.238938 | Baltic Main List | False | False | False |
| NEOFI | 7 | 55 | 113 | -0.424779 | First North Baltic Share List | False | False | False |
| PKG1T | 15 | 32 | 113 | -0.150442 | Baltic Main List | False | False | False |
| PRF1T | 1 | 112 | 113 | -0.982301 | Baltic Secondary List | False | True | False |
| PZV1L | 35 | 14 | 113 | 0.185841 | Baltic Main List | True | False | True |
| ROE1L | 38 | 17 | 113 | 0.185841 | Baltic Main List | True | False | True |
| RSU1L | 35 | 6 | 113 | 0.256637 | Baltic Main List | True | False | True |
| SAF1R | 12 | 24 | 113 | -0.106195 | Baltic Main List | False | False | False |
| SAUNA | 3 | 95 | 113 | -0.814159 | First North Baltic Share List | False | False | False |
| SCM1R | 1 | 9 | 113 | -0.070796 | Baltic Secondary List | False | True | False |
| SFG1T | 24 | 33 | 113 | -0.079646 | Baltic Main List | False | False | False |
| SKN1T | 5 | 99 | 113 | -0.831858 | Baltic Secondary List | False | True | False |
| TAL1T | 26 | 24 | 113 | 0.017699 | Baltic Main List | True | False | True |
| TEL1L | 43 | 24 | 113 | 0.168142 | Baltic Main List | True | False | True |
| TKM1T | 29 | 22 | 113 | 0.061947 | Baltic Main List | True | False | True |
| TPD1T | 11 | 85 | 113 | -0.654867 | Baltic Secondary List | False | True | False |
| TSM1T | 28 | 30 | 113 | -0.017699 | Baltic Main List | False | False | False |
| TVE1T | 28 | 26 | 113 | 0.017699 | Baltic Main List | True | False | True |
| UTR1L | 1 | 40 | 113 | -0.345133 | Baltic Secondary List | False | True | False |
| VBL1L | 23 | 23 | 113 | 0.000000 | Baltic Secondary List | False | True | False |
| VIRSI | 40 | 0 | 113 | 0.353982 | First North Baltic Share List | True | False | True |
| VLP1L | 43 | 0 | 113 | 0.380531 | Baltic Main List | True | False | True |
| ZMP1L | 31 | 10 | 113 | 0.185841 | Baltic Secondary List | True | True | False |

</details>


A share is investment-admissible only when its individual netSD is strictly positive and it does not belong to the Baltic Secondary List. Secondary List shares remain in the dominance reference network used to calculate netSD, but their portfolio weights are fixed at zero.

<details markdown="1">
<summary><strong>Figure 9. Classical mean-SD efficient frontier and observed portfolios</strong></summary>

![Report figure 27](report/assets/figure-27.png)

</details>


The curve is the single long-only Markowitz efficient frontier calculated from all 55 quality-approved shares. Shares and previously formed portfolios are points. Baltic_NetSD is highlighted in red because it maximises the stochastic-dominance objective rather than variance, so it need not lie on the Markowitz curve.

<details markdown="1">
<summary><strong>Figure 10. Cumulative returns, daily returns and drawdowns</strong></summary>

![Report figure 28](report/assets/figure-28.png)

</details>


<details markdown="1">
<summary><strong>Table 9. Complete PerformanceAnalytics comparison</strong></summary>

| Measure | Current | Markowitz_training | MAD_training | Minimax_training | Robust_training | NetSD_training | Markowitz_full | MAD_full | Minimax_full | Robust_full | NetSD_full | Baltic_NetSD | curent_update_baltic |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000407 | 0.000281 | 0.000289 | 0.000619 | 0.000354 | 0.000680 | 0.000392 | 0.000398 | 0.000480 | 0.000395 | 0.000624 | 0.000552 | 0.000457 |
| GeometricReturn | 0.000390 | 0.000271 | 0.000279 | 0.000603 | 0.000343 | 0.000663 | 0.000382 | 0.000388 | 0.000466 | 0.000385 | 0.000610 | 0.000542 | 0.000447 |
| AnnualizedReturn_Arithmetic | 0.102550 | 0.070824 | 0.072744 | 0.155939 | 0.089138 | 0.171390 | 0.098719 | 0.100296 | 0.120984 | 0.099563 | 0.157293 | 0.139212 | 0.115124 |
| AnnualizedReturn_Geometric | 0.103335 | 0.070677 | 0.072730 | 0.163971 | 0.090323 | 0.181757 | 0.100954 | 0.102608 | 0.124538 | 0.101728 | 0.166221 | 0.146418 | 0.119257 |
| CumulativeReturn | 0.342094 | 0.226705 | 0.233756 | 0.575080 | 0.295290 | 0.648194 | 0.333449 | 0.339451 | 0.420751 | 0.336254 | 0.584211 | 0.505074 | 0.400882 |
| Volatility | 0.005773 | 0.004476 | 0.004477 | 0.005683 | 0.004587 | 0.005876 | 0.004475 | 0.004540 | 0.005340 | 0.004596 | 0.005256 | 0.004489 | 0.004399 |
| Volatility_Annualized | 0.091642 | 0.071054 | 0.071078 | 0.090219 | 0.072824 | 0.093282 | 0.071039 | 0.072067 | 0.084769 | 0.072954 | 0.083429 | 0.071264 | 0.069826 |
| MaximumDrawdown | 0.202906 | 0.170192 | 0.166449 | 0.157736 | 0.151701 | 0.114377 | 0.143065 | 0.138179 | 0.186881 | 0.132771 | 0.131017 | 0.066539 | 0.118739 |
| AverageDrawdown | 0.025469 | 0.019669 | 0.024326 | 0.014763 | 0.017239 | 0.018675 | 0.017643 | 0.018183 | 0.014914 | 0.017957 | 0.015602 | 0.010042 | 0.010944 |
| AverageDrawdownLength | 55.461538 | 51.857143 | 65.727273 | 20.911765 | 34.380952 | 26.576923 | 37.210526 | 39.000000 | 27.692308 | 44.312500 | 24.821429 | 15.409091 | 22.548387 |
| AverageRecoveryTime | 29.692308 | 28.357143 | 36.181818 | 11.558824 | 13.809524 | 15.500000 | 14.526316 | 15.111111 | 17.153846 | 21.437500 | 14.750000 | 6.431818 | 13.032258 |
| Sharpe_Daily | 0.070492 | 0.062791 | 0.064471 | 0.108883 | 0.077106 | 0.115741 | 0.087540 | 0.087670 | 0.089906 | 0.085970 | 0.118766 | 0.123056 | 0.103860 |
| Sharpe_Annualized | 1.119033 | 0.996770 | 1.023446 | 1.728460 | 1.224019 | 1.837330 | 1.389649 | 1.391712 | 1.427221 | 1.364738 | 1.885345 | 1.953461 | 1.648726 |
| Sharpe_VaR | 0.063218 | 0.047693 | 0.052024 | 0.084465 | 0.061485 | 0.092984 | 0.066397 | 0.070684 | 0.068176 | 0.071441 | 0.094257 | 0.104963 | 0.093380 |
| Sharpe_ES | 0.031171 | 0.026852 | 0.027327 | 0.050547 | 0.033840 | 0.056387 | 0.037780 | 0.037525 | 0.040094 | 0.036520 | 0.053478 | 0.057606 | 0.046540 |
| Sortino | 0.103322 | 0.089978 | 0.090696 | 0.175636 | 0.113343 | 0.188039 | 0.126822 | 0.124911 | 0.138998 | 0.121638 | 0.180686 | 0.194047 | 0.159106 |
| Calmar | 0.509274 | 0.415279 | 0.436951 | 1.039527 | 0.595400 | 1.589095 | 0.705654 | 0.742575 | 0.666402 | 0.766189 | 1.268702 | 2.200475 | 1.004363 |
| Omega | 1.253802 | 1.207409 | 1.218241 | 1.377407 | 1.260146 | 1.408378 | 1.298163 | 1.305293 | 1.300715 | 1.301546 | 1.420607 | 1.443722 | 1.354910 |
| Sterling | 0.341144 | 0.261581 | 0.272960 | 0.636196 | 0.358849 | 0.847835 | 0.415339 | 0.430803 | 0.434110 | 0.437030 | 0.719520 | 0.879180 | 0.545203 |
| Burke | 0.711394 | 0.626776 | 0.642660 | 1.265723 | 0.799609 | 1.363583 | 0.914138 | 0.926048 | 0.960507 | 0.903216 | 1.321467 | 1.386651 | 1.066623 |
| Martin | 0.985147 | 0.743619 | 0.807360 | 2.110690 | 1.121867 | 3.631643 | 1.386084 | 1.525674 | 1.222933 | 1.655375 | 2.635455 | 6.207138 | 2.089109 |
| UlcerIndex | 0.104893 | 0.095045 | 0.090084 | 0.077686 | 0.080511 | 0.050048 | 0.072834 | 0.067254 | 0.101835 | 0.061453 | 0.063071 | 0.023589 | 0.057085 |
| PainIndex | 0.080184 | 0.077883 | 0.073764 | 0.058068 | 0.061619 | 0.038792 | 0.055230 | 0.050917 | 0.075457 | 0.046825 | 0.047385 | 0.016485 | 0.042848 |
| PainRatio | 1.288719 | 0.907476 | 0.985987 | 2.823785 | 1.465833 | 4.685408 | 1.827879 | 2.015216 | 1.650440 | 2.172525 | 3.507857 | 8.881997 | 2.783287 |
| VaR_Loss | 0.006437 | 0.005893 | 0.005549 | 0.007326 | 0.005753 | 0.007314 | 0.005900 | 0.005631 | 0.007042 | 0.005530 | 0.006622 | 0.005263 | 0.004892 |
| ES_Loss | 0.013055 | 0.010467 | 0.010563 | 0.012242 | 0.010453 | 0.012062 | 0.010369 | 0.010606 | 0.011974 | 0.010819 | 0.011672 | 0.009590 | 0.009816 |
| DownsideDeviation | 0.003939 | 0.003124 | 0.003183 | 0.003523 | 0.003121 | 0.003617 | 0.003089 | 0.003186 | 0.003454 | 0.003248 | 0.003454 | 0.002847 | 0.002871 |
| DrawdownDeviation | 0.007691 | 0.006487 | 0.006360 | 0.006733 | 0.006269 | 0.005894 | 0.005906 | 0.005779 | 0.007319 | 0.005503 | 0.005868 | 0.004193 | 0.005151 |
| Rachev | 1.101132 | 1.043589 | 1.025876 | 1.271580 | 1.114071 | 1.279184 | 1.067344 | 1.049732 | 1.175661 | 1.049030 | 1.167225 | 1.254899 | 1.171576 |
| AdjustedSharpe | 0.196866 | 0.614905 | 0.474911 | 1.081194 | 0.604269 | -0.056304 | 0.349252 | 0.023852 | 0.972030 | -0.040823 | -0.522513 | -0.824987 | 0.383345 |
| Skewness | -0.054536 | -0.397936 | -0.720441 | 0.377474 | -0.284450 | 0.625424 | -0.517818 | -0.804959 | 0.181686 | -0.927740 | -0.270819 | 0.232602 | 0.052546 |
| Kurtosis | 18.599062 | 10.657233 | 12.464893 | 6.881817 | 10.181225 | 11.688924 | 10.814045 | 12.865225 | 7.266982 | 13.552122 | 11.048650 | 12.421674 | 9.903697 |
| UpsidePotential | 0.510416 | 0.523794 | 0.506272 | 0.641010 | 0.549035 | 0.648494 | 0.552168 | 0.534062 | 0.601222 | 0.525020 | 0.610269 | 0.631362 | 0.607405 |
| UpsideRisk | 0.004235 | 0.003214 | 0.003158 | 0.004497 | 0.003377 | 0.004676 | 0.003258 | 0.003254 | 0.004096 | 0.003271 | 0.004005 | 0.003511 | 0.003360 |
| BernardoLedoit | 1.253802 | 1.207409 | 1.218241 | 1.377407 | 1.260146 | 1.408378 | 1.298163 | 1.305293 | 1.300715 | 1.301546 | 1.420607 | 1.443722 | 1.354910 |
| DRatio | 0.680517 | 0.725996 | 0.678011 | 0.636395 | 0.680759 | 0.619052 | 0.622612 | 0.619211 | 0.718885 | 0.624374 | 0.603865 | 0.581154 | 0.639406 |
| Hurst | 0.408833 | 0.373706 | 0.380678 | 0.330215 | 0.371346 | 0.385210 | 0.383093 | 0.391582 | 0.339636 | 0.390138 | 0.388151 | 0.396413 | 0.366375 |
| Kappa | 0.059623 | 0.055300 | 0.053849 | 0.116238 | 0.069496 | 0.120127 | 0.076783 | 0.073136 | 0.091296 | 0.070360 | 0.108401 | 0.118488 | 0.099663 |
| Kelly | 12.210935 | 14.028417 | 14.398990 | 19.158592 | 16.807867 | 19.696548 | 19.561870 | 19.311415 | 16.836604 | 18.706853 | 22.598090 | 27.411431 | 23.611933 |
| Prospect | -0.405547 | -0.452293 | -0.428775 | -0.406083 | -0.431271 | -0.387529 | -0.404860 | -0.386527 | -0.438782 | -0.382589 | -0.356293 | -0.352598 | -0.401268 |
| Information_Daily | -0.036029 | -0.047680 | -0.047078 | -0.018192 | -0.041528 | -0.012985 | -0.038213 | -0.037671 | -0.029827 | -0.037950 | -0.017862 | -0.023718 | -0.032381 |
| Information_Annualized | -0.665855 | -0.868339 | -0.858181 | -0.345150 | -0.763035 | -0.248219 | -0.705471 | -0.695964 | -0.556390 | -0.700843 | -0.339213 | -0.446646 | -0.602634 |
| CAPMAlpha | 0.000353 | 0.000242 | 0.000248 | 0.000564 | 0.000307 | 0.000626 | 0.000348 | 0.000352 | 0.000438 | 0.000348 | 0.000569 | 0.000524 | 0.000418 |
| JensenAlpha | 0.089279 | 0.060407 | 0.062126 | 0.149827 | 0.078254 | 0.167719 | 0.089470 | 0.090709 | 0.113489 | 0.089344 | 0.151827 | 0.139061 | 0.109114 |
| Treynor_Daily | 0.006350 | 0.006035 | 0.006009 | 0.009745 | 0.006504 | 0.010800 | 0.007602 | 0.007451 | 0.009642 | 0.007101 | 0.009697 | 0.016860 | 0.010082 |
| Treynor_Annualized | 1.681322 | 1.573709 | 1.568491 | 2.651296 | 1.711562 | 2.961042 | 2.010408 | 1.972026 | 2.577618 | 1.878642 | 2.640818 | 4.551443 | 2.688800 |
| Modigliani | 0.000780 | 0.000695 | 0.000713 | 0.001204 | 0.000853 | 0.001280 | 0.000968 | 0.000970 | 0.000995 | 0.000951 | 0.001314 | 0.001361 | 0.001149 |
| TrackingError_Daily | 0.011859 | 0.011463 | 0.011448 | 0.011812 | 0.011423 | 0.011911 | 0.011406 | 0.011412 | 0.011792 | 0.011412 | 0.011601 | 0.011603 | 0.011439 |
| TrackingError_Annualized | 0.188261 | 0.181970 | 0.181733 | 0.187509 | 0.181337 | 0.189078 | 0.181063 | 0.181160 | 0.187191 | 0.181155 | 0.184155 | 0.184198 | 0.181589 |
| M2Sortino | 0.109296 | 0.077033 | 0.079051 | 0.175263 | 0.098334 | 0.193567 | 0.109982 | 0.111307 | 0.133627 | 0.110080 | 0.178035 | 0.160977 | 0.131133 |
| Appraisal | 0.981698 | 0.856007 | 0.880431 | 1.673988 | 1.084088 | 1.811307 | 1.270121 | 1.269760 | 1.346451 | 1.236027 | 1.837228 | 1.958797 | 1.573515 |
| CAPMBeta | 0.061460 | 0.044911 | 0.046369 | 0.061845 | 0.052772 | 0.061383 | 0.050216 | 0.052032 | 0.048315 | 0.054150 | 0.062943 | 0.032170 | 0.044353 |
| ActiveReturn | -0.125355 | -0.158012 | -0.155959 | -0.064719 | -0.138367 | -0.046933 | -0.127735 | -0.126081 | -0.104151 | -0.126961 | -0.062468 | -0.082271 | -0.109432 |
| OmegaExcessReturn | 0.080784 | 0.052794 | 0.054507 | 0.143799 | 0.072455 | 0.161048 | 0.083269 | 0.084365 | 0.104763 | 0.083131 | 0.146443 | 0.130118 | 0.102818 |
| BetaCoSkewness | -1.007663 | -1.030977 | -1.139233 | -0.930234 | -1.006532 | -0.908119 | -1.100709 | -1.118876 | -1.079607 | -1.123072 | -0.954915 | -2.102459 | -1.592190 |
| BetaCoKurtosis | 0.083192 | 0.049011 | 0.051037 | 0.027872 | 0.047768 | 0.040181 | 0.045809 | 0.051584 | 0.023902 | 0.056251 | 0.050910 | -0.025360 | 0.027992 |
| CDD | 0.040293 | 0.035628 | 0.046112 | 0.027983 | 0.041533 | 0.044066 | 0.038434 | 0.043415 | 0.025972 | 0.047864 | 0.035587 | 0.024500 | 0.022822 |
| CoSkewness | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 |
| CoKurtosis | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | -0.000000 | 0.000000 |
| FamaBeta | 0.521888 | 0.404641 | 0.404778 | 0.513783 | 0.414724 | 0.531228 | 0.404556 | 0.410411 | 0.482748 | 0.415463 | 0.475119 | 0.405842 | 0.397650 |
| MSquaredExcess | -0.024976 | -0.043968 | -0.039889 | 0.073619 | -0.008871 | 0.092338 | 0.016973 | 0.017355 | 0.023837 | 0.013157 | 0.098611 | 0.107502 | 0.057961 |
| NetSelectivity | -0.016016 | -0.021860 | -0.019838 | 0.046474 | -0.004520 | 0.060270 | 0.008437 | 0.008752 | 0.014139 | 0.006716 | 0.057567 | 0.053606 | 0.028319 |
| Selectivity | 0.089279 | 0.060407 | 0.062126 | 0.149827 | 0.078254 | 0.167719 | 0.089470 | 0.090709 | 0.113489 | 0.089344 | 0.151827 | 0.139061 | 0.109114 |
| SpecificRisk | 0.090944 | 0.070568 | 0.070563 | 0.089503 | 0.072184 | 0.092596 | 0.070443 | 0.071438 | 0.084287 | 0.072284 | 0.082639 | 0.070993 | 0.069344 |
| SystematicRisk | 0.010792 | 0.007886 | 0.008142 | 0.010860 | 0.009267 | 0.010779 | 0.008818 | 0.009137 | 0.008484 | 0.009509 | 0.011053 | 0.005649 | 0.007788 |
| TotalRisk | 0.091582 | 0.071007 | 0.071031 | 0.090160 | 0.072777 | 0.093221 | 0.070992 | 0.072020 | 0.084713 | 0.072906 | 0.083375 | 0.071217 | 0.069780 |
| UpCapture | 0.106155 | 0.071291 | 0.073323 | 0.136728 | 0.092194 | 0.138263 | 0.090263 | 0.091277 | 0.102491 | 0.093247 | 0.133385 | 0.091783 | 0.094525 |
| UpNumber | 0.566514 | 0.555046 | 0.573394 | 0.550459 | 0.575688 | 0.555046 | 0.575688 | 0.580275 | 0.543578 | 0.584862 | 0.564220 | 0.550459 | 0.564220 |
| UpPercent | 0.174312 | 0.146789 | 0.144495 | 0.178899 | 0.158257 | 0.204128 | 0.153670 | 0.146789 | 0.183486 | 0.149083 | 0.178899 | 0.167431 | 0.178899 |
| DownCapture | 0.013226 | 0.006585 | 0.006889 | -0.011008 | 0.011399 | -0.027237 | -0.002297 | -0.002875 | -0.013063 | 0.000470 | -0.016812 | -0.047988 | -0.016212 |
| DownNumber | 0.503145 | 0.503145 | 0.493711 | 0.496855 | 0.518868 | 0.500000 | 0.484277 | 0.490566 | 0.525157 | 0.500000 | 0.503145 | 0.465409 | 0.503145 |
| DownPercent | 0.874214 | 0.893082 | 0.893082 | 0.861635 | 0.883648 | 0.877358 | 0.893082 | 0.889937 | 0.880503 | 0.883648 | 0.877358 | 0.899371 | 0.893082 |

</details>


Table 9 contains all 72 measures calculated directly with PerformanceAnalytics: measures are rows and portfolios are columns. S&P 500 is the benchmark for CAPM, information, tracking-error, capture and systematic-risk measures. It remains in Table 5 and the figures; it is omitted from Table 9 because its information ratio relative to itself has a zero tracking-error denominator.

## Decision risks and implementability

### Liquidity and turnover

<details markdown="1">
<summary><strong>Table 10. Proposed trades and observed one-year market liquidity</strong></summary>

| asset | trade_shares | trade_value_EUR | median_daily_turnover_EUR | zero_volume_fraction | trade_to_median_turnover | liquidity_flag |
| --- | --- | --- | --- | --- | --- | --- |
| KNE1L | 3662 | 1801.7040 | 14744.2945 | 0.0119 | 0.1222 | MEDIUM |
| GRG1L | 759 | 766.5900 | 14030.0100 | 0.0119 | 0.0546 | MEDIUM |
| EFT1T | 30 | 582.0000 | 18097.9500 | 0.0119 | 0.0322 | MEDIUM |
| TVE1T | 11 | 119.3500 | 14487.2500 | 0.0119 | 0.0082 | MEDIUM |
| HAE1T | -8 | 41.1200 | 16335.3900 | 0.0119 | 0.0025 | MEDIUM |
| TKM1T | -219 | 1992.9001 | 39903.1900 | 0.0119 | 0.0499 | LOW |
| VLP1L | 62 | 961.0000 | 24886.8000 | 0.0119 | 0.0386 | LOW |
| APG1L | 154 | 612.9200 | 21467.7200 | 0.0119 | 0.0286 | LOW |
| TEL1L | 629 | 1396.3800 | 51206.1300 | 0.0119 | 0.0273 | LOW |
| AKO1L | 123 | 217.7100 | 24553.0000 | 0.0119 | 0.0089 | LOW |
| TSM1T | -330 | 403.2600 | 48681.1890 | 0.0119 | 0.0083 | LOW |
| MRK1T | 9 | 242.1000 | 61536.9500 | 0.0119 | 0.0039 | LOW |
| TAL1T | 329 | 203.9800 | 76196.4300 | 0.0119 | 0.0027 | LOW |
| IGN1L | 23 | 508.3000 | 289289.6750 | 0.0119 | 0.0018 | LOW |
| ROE1L | -217 | 194.2150 | 200231.7685 | 0.0119 | 0.0010 | LOW |
| LHV1T | 34 | 113.3900 | 263779.8850 | 0.0119 | 0.0004 | LOW |
| CPA1T | 10 | 23.3000 | 75536.4150 | 0.0119 | 0.0003 | LOW |
| MOLNR | 37 | 699.3000 | 132.0000 | 0.2659 | 5.2977 | HIGH |
| MODE | 81 | 477.9000 | 476.6200 | 0.1151 | 1.0027 | HIGH |
| RSU1L | 236 | 1076.1600 | 1371.7000 | 0.0317 | 0.7845 | HIGH |
| SAF1R | -100 | 1715.0000 | 4065.6250 | 0.0278 | 0.4218 | HIGH |
| VIRSI | 206 | 902.2800 | 2494.2600 | 0.0238 | 0.3617 | HIGH |
| PZV1L | 298 | 515.5400 | 4342.1750 | 0.0119 | 0.1187 | HIGH |

</details>


Median daily turnover and zero-volume frequency use official Nasdaq Baltic price-volume observations from the last 365 calendar days of the sample. Trade-to-turnover is the proposed absolute order value divided by median daily turnover. HIGH flags median turnover below EUR 5,000 or an order above 20% of median turnover; MEDIUM flags below EUR 20,000 or above 10%. These are transparent screening thresholds, not a guarantee of execution. HIGH trades should be split, limited or omitted after checking the live order book.

<details markdown="1">
<summary><strong>Table 11. Illustrative transaction-cost and turnover scenario</strong></summary>

| portfolio | turnover_EUR | number_of_trades | estimated_cost_EUR | high_liquidity_risk_trades | cost_percent_of_15000 |
| --- | --- | --- | --- | --- | --- |
| Baltic_NetSD | 15566.3991 | 23 | 223.9929 | 6 | 1.4933 |
| curent_update_baltic | 6878.9760 | 20 | 122.9841 | 5 | 0.8199 |

</details>


The cost scenario uses max(EUR 3, 0.25% of trade value) commission plus an assumed spread/impact of 0.25%, 0.75% or 2.00% for LOW, MEDIUM or HIGH liquidity risk. These are sensitivity assumptions rather than broker quotes. Reported historical returns and dividends are gross; subtract the displayed cost before interpreting an implementation result.

### Capital concentration

<details markdown="1">
<summary><strong>Table 12. Top-position and effective-position concentration</strong></summary>

| portfolio | positions | top5_share | top10_share | HHI | effective_positions |
| --- | --- | --- | --- | --- | --- |
| Baltic_NetSD | 21 | 0.4890 | 0.7428 | 0.0704 | 14.2108 |
| curent_update_baltic | 22 | 0.5221 | 0.7578 | 0.0834 | 11.9913 |

</details>


<details markdown="1">
<summary><strong>Table 12A. Baltic_NetSD: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 6.05 |
| country_market | TLN | 30.39 |
| country_market | VLN | 63.56 |
| segment | Baltic Main List | 86.06 |
| segment | First North Baltic Share List | 13.94 |
| Industry | Basic Materials | 5.14 |
| Industry | Consumer Discretionary | 23.98 |
| Industry | Consumer Staples | 22.94 |
| Industry | Financials | 4.82 |
| Industry | Health Care | 4.69 |
| Industry | Industrials | 20.48 |
| Industry | Technology | 3.20 |
| Industry | Telecommunications | 9.36 |
| Industry | Utilities | 4.21 |
| Industry | nan | 1.19 |
| Supersector | Banks | 0.92 |
| Supersector | Basic Resources | 5.14 |
| Supersector | Construction and Materials | 5.23 |
| Supersector | Financial Services | 3.90 |
| Supersector | Food, Beverage and Tobacco | 22.94 |
| Supersector | Health Care | 4.69 |
| Supersector | Industrial Goods and Services | 15.25 |
| Supersector | Retail | 19.70 |
| Supersector | Technology | 3.20 |
| Supersector | Telecommunications | 9.36 |
| Supersector | Travel and Leisure | 4.28 |
| Supersector | Utilities | 4.21 |
| Supersector | nan | 1.19 |

</details>


<details markdown="1">
<summary><strong>Table 12B. curent_update_baltic: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 12.78 |
| country_market | TLN | 50.98 |
| country_market | VLN | 36.24 |
| segment | Baltic Main List | 91.77 |
| segment | First North Baltic Share List | 8.23 |
| Industry | Basic Materials | 3.51 |
| Industry | Consumer Discretionary | 31.05 |
| Industry | Consumer Staples | 13.38 |
| Industry | Financials | 3.18 |
| Industry | Health Care | 3.42 |
| Industry | Industrials | 20.08 |
| Industry | Technology | 3.52 |
| Industry | Telecommunications | 12.99 |
| Industry | Utilities | 3.43 |
| Industry | nan | 5.43 |
| Supersector | Banks | 0.19 |
| Supersector | Basic Resources | 3.51 |
| Supersector | Construction and Materials | 7.57 |
| Supersector | Financial Services | 2.99 |
| Supersector | Food, Beverage and Tobacco | 13.38 |
| Supersector | Health Care | 3.42 |
| Supersector | Industrial Goods and Services | 12.51 |
| Supersector | Retail | 27.27 |
| Supersector | Technology | 3.52 |
| Supersector | Telecommunications | 12.99 |
| Supersector | Travel and Leisure | 3.78 |
| Supersector | Utilities | 3.43 |
| Supersector | nan | 5.43 |

</details>


The number of holdings is not a diversification measure. Top-five and top-ten shares show how much capital is concentrated in the largest positions; HHI and the effective number of positions measure weight concentration. Country, list, industry and supersector totals expose common economic exposures that a position count conceals. Very small positions add trading complexity while making little difference to risk.

### Validation and interpretation limits

<details markdown="1">
<summary><strong>Table 13. Existing 70/30 holdout experiment: portfolio-only netSD on unseen test data</strong></summary>

| entity | out | in | network_denominator | netSD |
| --- | --- | --- | --- | --- |
| Markowitz | 3 | 0 | 6 | 0.500000 |
| MAD | 0 | 0 | 6 | 0.000000 |
| Minimax | 3 | 0 | 6 | 0.500000 |
| Robust | 0 | 1 | 6 | -0.166667 |
| NetSD | 0 | 2 | 6 | -0.333333 |
| Current | 3 | 0 | 6 | 0.500000 |
| SP500 | 0 | 6 | 6 | -1.000000 |

</details>


The final Baltic_NetSD weights were selected on the complete 2023–2026 sample. Their 14.64% annualised geometric return and 1.95 annualised Sharpe ratio are therefore in-sample descriptions, not forecasts. The earlier 70/30 experiment is the available independent check: weights were fixed from the first 70% and assessed on the last 30%. Its NetSD portfolio has a negative test-network netSD, which is direct evidence of model-selection instability. No trade should rely on the full-sample figures without a new walk-forward or future-paper-trading test.

netSD counts outgoing minus incoming FSD, SSD and TSD relations relative to a fixed comparison network. It has no monetary unit and does not state expected profit, maximum loss or suitability for an investor. Use it as a distribution-ranking signal together with return, volatility, drawdown, VaR/ES, liquidity, concentration and cost results.

The S&P 500 series is a USD price-index benchmark. It excludes dividends and has not been converted into EUR investor returns, so it is retained only as a broad market sensitivity reference. Direct performance claims require a total-return benchmark converted to EUR over identical dates.

Dividend values are historical gross cash distributions. They are excluded from optimisation and are neither a forecast nor an assessment of dividend sustainability. Company valuation, earnings quality, debt, free cash flow and payout coverage have not been modelled; each proposed purchase therefore requires a separate fundamental review.

## Model

### Exact mathematical formulation of the netSD portfolio

Let R_tj be the return of share j on date t, w_j its final portfolio weight, and r_p,t = Σ_j w_j R_tj the candidate portfolio return. Let K denote the fixed reference set consisting of 55 quality-approved shares, the current portfolio, and ten earlier portfolios.

For entity i, define H_i^(1)(x)=F_i(x) and H_i^(q)(x)=∫_{-∞}^x H_i^(q-1)(u)du for q=2,3. Entity i dominates entity k at order q when H_i^(q)(x) ≤ H_k^(q)(x) for every observed support point x, with a strict inequality for at least one x. The third-order comparison additionally requires E[R_i] ≥ E[R_k]. Let a_ik^(q)=1 when this condition holds and 0 otherwise.

OUT(p)=Σ_{k∈K}Σ_{q=1}^3 a_pk^(q),   IN(p)=Σ_{k∈K}Σ_{q=1}^3 a_kp^(q),   D=max_i{OUT(i)+IN(i)},   netSD(p)=[OUT(p)-IN(p)]/D.

Primary optimisation problem: max_w netSD(w), subject to Σ_j w_j=1; w_j≥0; μᵀw≥μ_current; and w_j=0 for every share j whose individual netSD_j≤0 or which belongs to the Baltic Secondary List. Selling existing holdings is allowed, so current positions do not impose lower bounds. Historical dividends are reported separately and do not enter the objective.

The individual-share screening score is calculated before the new candidate enters the network: netSD_j=(OUT_j-IN_j)/D_ref in the fixed 67-entity reference system. This prevents the candidate from changing its own admissible investment universe.

The unchanged reference set contains 55 quality-approved shares, the current portfolio, and ten earlier portfolios: Markowitz, MAD, Minimax, Robust and NetSD estimated from the training sample and from the complete sample. The larger pairwise matrices are diagnostics only; their expanded-network ratios are not presented as the optimisation score.

The objective is discrete and non-convex. ISRES evaluates candidate portfolios numerically. The report therefore states the best solution found; it does not claim a mathematical certificate of global optimality.

## Data coverage

The official Nasdaq Baltic list contained 67 shares. 55 shares had Yahoo closing-price history covering the complete study window and entered the common-date return matrix. Shares with incomplete or unavailable histories are excluded from both the optimisation and Table 2. No price interpolation or zero-return replacement was used.

Sources: official Nasdaq Baltic share-list XLSX and dividend/event XLSX downloaded on 2026-10-13; Yahoo Finance unadjusted closing prices downloaded through quantmod; official Nasdaq Baltic corrections for MODE and MOLNR in 2025 and the complete VIRSI history (2023-01-01 to 2026-08-29).
</main>
<script>
document.querySelectorAll('details.stock-profile').forEach(function(profile) {
  profile.addEventListener('toggle', function() {
    if (!profile.open) return;
    document.querySelectorAll('details.stock-profile[open]').forEach(function(other) {
      if (other !== profile) other.open = false;
    });
  });
});
</script>
</body></html>
