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

The best numerical solution found has netSD 0.939130 (OUT=108, IN=0, denominator=115). It is evaluated in the same dominance network as all 56 eligible shares, the current portfolio, and the ten earlier training/full-data portfolios.

Current-portfolio netSD is 0.443478; the optimised-portfolio value is 0.939130. Historical gross dividends for the final whole-share quantities are EUR 1942.28. These historical dividends are a counterfactual, before tax and without reinvestment, rather than a forecast.

<details markdown="1">
<summary><strong>Table 1. Optimisation objective and constraint checks</strong></summary>

| Component | Restriction or objective | Obtained value | Result |
| --- | --- | --- | --- |
| Objective: netSD | maximum value found numerically | 0.93913043 | Reported |
| Budget | invested <= 15000 | 14903.49702527 | Satisfied |
| Residual cash | >= 0 | 96.50297473 | Satisfied |
| Full-investment weights | sum(w) = 1 | 1.00000000 | Satisfied |
| Long only | min(w) >= 0 | 0.00000000 | Satisfied |
| Sales | existing positions may be reduced to zero | -330.00000000 | Allowed |
| Minimum mean | >= 0.00037514 | 0.00060556 | Satisfied |
| Dividend tie-break | largest historical dividend among tied netSD candidates | 1942.28219840 | EUR historical gross cash |

</details>


<details markdown="1">
<summary><strong>Table 2. Eligible Nasdaq Baltic shares and the optimised allocation</strong></summary>

| asset | name | market | last_price | optimal_weight_percent | current_shares | target_shares | trade_shares | action | invested_EUR | historical_dividend_cash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIR | Airobot Technologies | TLN | 1.8100 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| AKO1L | Akola Group | VLN | 1.7700 | 2.7390 | 0 | 232 | 232 | BUY | 410.6400 | 0.0000 |
| AMG1L | Amber Grid | VLN | 1.2000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| APG1L | Apranga | VLN | 3.9800 | 10.7401 | 200 | 404 | 204 | BUY | 1607.9200 | 416.1200 |
| ARC1T | Arco Vara | TLN | 1.2400 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| AUG1L | AUGA group | VLN | 0.0976 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| BAL1R | Amber Latvijas balzams | RIG | 1.3000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| BERCM | Bercman Technologies | TLN | 1.0850 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| CPA1T | Coop Pank | TLN | 2.3300 | 0.5446 | 0 | 35 | 35 | BUY | 81.5500 | 9.3450 |
| CTS1L | City Service | VLN | 0.1560 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| DGR1R | DelfinGroup | RIG | 1.5300 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| EFT1T | EfTEN Real Estate Fund | TLN | 19.4000 | 0.5051 | 0 | 3 | 3 | BUY | 58.2000 | 13.3878 |
| EWA1L | East West Agro | VLN | 15.6000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| GRG1L | Grigeo Group | VLN | 1.0100 | 7.4186 | 0 | 1101 | 1101 | BUY | 1112.0100 | 187.1700 |
| HAE1T | Harju Elekter Group | TLN | 5.1400 | 3.5915 | 100 | 104 | 4 | BUY | 534.5600 | 60.3200 |
| HPR1T | Hepsor | TLN | 5.1400 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IDX1R | INDEXO | RIG | 9.3000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IGN1L | Ignitis grupė | VLN | 22.1000 | 5.1875 | 0 | 35 | 35 | BUY | 773.5000 | 137.1650 |
| INC1L | INVL Technology | VLN | 4.9200 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| INL1L | INVL Baltic Farmland | VLN | 6.9500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| INR1L | INVL Baltic Real Estate | VLN | 3.0400 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IVL1L | Invalda INVL | VLN | 27.8000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| KNE1L | KN Energies | VLN | 0.4920 | 10.3545 | 0 | 3156 | 3156 | BUY | 1552.7520 | 203.2464 |
| KNR1L | Kauno energija | VLN | 2.0800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| LGD1L | LITGRID | VLN | 1.1200 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| LHV1T | LHV Group | TLN | 3.3350 | 0.4766 | 0 | 21 | 21 | BUY | 70.0350 | 9.0300 |
| LINDA | Linda Nektar | TLN | 4.5000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MAGIC | TextMagic | TLN | 1.7100 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MDARA | MADARA Cosmetics | RIG | 9.8800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MODE | Modera | TLN | 5.9000 | 5.8469 | 0 | 148 | 148 | BUY | 873.2000 | 0.0000 |
| MOLNR | J. Molner | TLN | 18.9000 | 2.5109 | 0 | 19 | 19 | BUY | 359.1000 | 0.0000 |
| MRK1T | Merko Ehitus | TLN | 26.9000 | 8.3428 | 20 | 46 | 26 | BUY | 1237.4000 | 250.7000 |
| NCN1T | Nordecon | TLN | 0.5980 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| NEOFI | NEO Finance | VLN | 2.2000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PKG1T | Pro Kapital Grupp | TLN | 0.6500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PRF1T | PRFoods | TLN | 0.0550 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PZV1L | Pieno žvaigždės | VLN | 1.7300 | 4.4443 | 0 | 385 | 385 | BUY | 666.0500 | 161.7000 |
| RKB1R | Rīgas kuģu būvētava | RIG | 0.3580 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| ROE1L | Artea Bankas | VLN | 0.8950 | 2.4754 | 416 | 414 | -2 | SELL | 370.5300 | 56.3040 |
| RSU1L | Rokiškio sūris | VLN | 4.5600 | 5.4830 | 0 | 180 | 180 | BUY | 820.8000 | 126.0000 |
| SAF1R | SAF Tehnika | RIG | 17.1500 | 0.0000 | 100 | 0 | -100 | SELL | 0.0000 | 0.0000 |
| SAUNA | Saunum Group | TLN | 2.6500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SCM1R | Siguldas ciltslietu un mākslīgās apsēklošanas stacija | RIG | 6.7000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SFG1T | Silvano Fashion Group | TLN | 1.0700 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SKN1T | Nordic Fibreboard | TLN | 0.6200 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| TAL1T | Tallink Grupp | TLN | 0.6200 | 3.3914 | 700 | 820 | 120 | BUY | 508.4000 | 123.0000 |
| TEL1L | Telia Lietuva | VLN | 2.2200 | 1.2327 | 0 | 83 | 83 | BUY | 184.2600 | 25.7300 |
| TKM1T | TKM Grupp | TLN | 9.1000 | 0.9285 | 288 | 15 | -273 | SELL | 136.5000 | 39.7500 |
| TPD1T | Trigon Property Development | TLN | 0.5700 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| TSM1T | Tallinna Sadam | TLN | 1.2220 | 0.0000 | 330 | 0 | -330 | SELL | 0.0000 | 0.0000 |
| TVE1T | Tallinna Vesi | TLN | 10.8500 | 0.5771 | 0 | 7 | 7 | BUY | 75.9500 | 13.5800 |
| UTR1L | Utenos trikotažas | VLN | 0.3840 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| VBL1L | Vilniaus baldai | VLN | 9.7000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| VIRSI | VIRŠI-A | RIG | 4.3800 | 11.7867 | 0 | 403 | 403 | BUY | 1765.1400 | 109.7340 |
| VLP1L | Vilkyškių pieninė | VLN | 15.5000 | 11.4228 | 42 | 110 | 68 | BUY | 1705.0000 | 0.0000 |
| ZMP1L | Žemaitijos pienas | VLN | 2.5600 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |

</details>


<details markdown="1">
<summary><strong>Table 3. Buy, sell and hold decisions for nonzero current or target positions</strong></summary>

| asset | name | last_price | target_weight_percent | current_shares | target_shares | trade_shares | action | invested_EUR | total_dividend_per_share | historical_dividend_cash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| VIRSI | VIRŠI-A | 4.3800 | 11.7867 | 0 | 403 | 403 | BUY | 1765.1400 | 0.2723 | 109.7340 |
| VLP1L | Vilkyškių pieninė | 15.5000 | 11.4228 | 42 | 110 | 68 | BUY | 1705.0000 | 0.0000 | 0.0000 |
| APG1L | Apranga | 3.9800 | 10.7401 | 200 | 404 | 204 | BUY | 1607.9200 | 1.0300 | 416.1200 |
| KNE1L | KN Energies | 0.4920 | 10.3545 | 0 | 3156 | 3156 | BUY | 1552.7520 | 0.0644 | 203.2464 |
| MRK1T | Merko Ehitus | 26.9000 | 8.3428 | 20 | 46 | 26 | BUY | 1237.4000 | 5.4500 | 250.7000 |
| GRG1L | Grigeo Group | 1.0100 | 7.4186 | 0 | 1101 | 1101 | BUY | 1112.0100 | 0.1700 | 187.1700 |
| MODE | Modera | 5.9000 | 5.8469 | 0 | 148 | 148 | BUY | 873.2000 | 0.0000 | 0.0000 |
| RSU1L | Rokiškio sūris | 4.5600 | 5.4830 | 0 | 180 | 180 | BUY | 820.8000 | 0.7000 | 126.0000 |
| IGN1L | Ignitis grupė | 22.1000 | 5.1875 | 0 | 35 | 35 | BUY | 773.5000 | 3.9190 | 137.1650 |
| PZV1L | Pieno žvaigždės | 1.7300 | 4.4443 | 0 | 385 | 385 | BUY | 666.0500 | 0.4200 | 161.7000 |
| HAE1T | Harju Elekter Group | 5.1400 | 3.5915 | 100 | 104 | 4 | BUY | 534.5600 | 0.5800 | 60.3200 |
| TAL1T | Tallink Grupp | 0.6200 | 3.3914 | 700 | 820 | 120 | BUY | 508.4000 | 0.1500 | 123.0000 |
| AKO1L | Akola Group | 1.7700 | 2.7390 | 0 | 232 | 232 | BUY | 410.6400 | 0.0000 | 0.0000 |
| MOLNR | J. Molner | 18.9000 | 2.5109 | 0 | 19 | 19 | BUY | 359.1000 | 0.0000 | 0.0000 |
| ROE1L | Artea Bankas | 0.8950 | 2.4754 | 416 | 414 | -2 | SELL | 370.5300 | 0.1360 | 56.3040 |
| TEL1L | Telia Lietuva | 2.2200 | 1.2327 | 0 | 83 | 83 | BUY | 184.2600 | 0.3100 | 25.7300 |
| TKM1T | TKM Grupp | 9.1000 | 0.9285 | 288 | 15 | -273 | SELL | 136.5000 | 2.6500 | 39.7500 |
| TVE1T | Tallinna Vesi | 10.8500 | 0.5771 | 0 | 7 | 7 | BUY | 75.9500 | 1.9400 | 13.5800 |
| CPA1T | Coop Pank | 2.3300 | 0.5446 | 0 | 35 | 35 | BUY | 81.5500 | 0.2670 | 9.3450 |
| EFT1T | EfTEN Real Estate Fund | 19.4000 | 0.5051 | 0 | 3 | 3 | BUY | 58.2000 | 4.4626 | 13.3878 |
| LHV1T | LHV Group | 3.3350 | 0.4766 | 0 | 21 | 21 | BUY | 70.0350 | 0.4300 | 9.0300 |
| SAF1R | SAF Tehnika | 17.1500 | 0.0000 | 100 | 0 | -100 | SELL | 0.0000 | 0.0000 | 0.0000 |
| TSM1T | Tallinna Sadam | 1.2220 | 0.0000 | 330 | 0 | -330 | SELL | 0.0000 | 0.2920 | 0.0000 |

</details>


A positive trade_shares value means buy, a negative value means sell, and zero means hold. Target shares are obtained by flooring the continuous optimal allocation at the last observed price; unused cash therefore remains nonnegative.

## Table 3A: interactive share profiles

Select a share to display its allocation, technical indicators, all PerformanceAnalytics measures, stochastic-dominance curves and leave-one-out effect.

<details markdown="1" class="stock-profile" id="share-molnr">
<summary><strong>MOLNR — J. Molner</strong> | BUY | target 31 shares | priority 1</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 31 | +31 | 3.92% | EUR 18.9000 | 0.0354 | 4 / 0 | 44.96 | Bullish | Inside bands | BUY | 2026-08-28 |

![MOLNR complete technical history](figures/technical_analysis/MOLNR_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![MOLNR combined technical indicators](figures/stock_profiles/MOLNR_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.001392 | Sterling | 0.354247 | Hurst | 0.407470 | BetaCoSkewness | -8.256766 |
| GeometricReturn | 0.000702 | Burke | 0.254461 | Kappa | 0.044823 | BetaCoKurtosis | -0.465313 |
| AnnualizedReturn_Arithmetic | 0.350903 | Martin | 1.010558 | Kelly | 0.944522 | CDD | 0.248431 |
| AnnualizedReturn_Geometric | 0.193319 | UlcerIndex | 0.191300 | Prospect | -0.489765 | CoSkewness | -0.000001 |
| CumulativeReturn | 0.696918 | PainIndex | 0.157711 | Information_Daily | -0.002883 | CoKurtosis | -0.000000 |
| Volatility | 0.038396 | PainRatio | 1.225786 | Information_Annualized | -0.055380 | FamaBeta | 3.471131 |
| Volatility_Annualized | 0.609519 | VaR_Loss | 0.050381 | CAPMAlpha | 0.001472 | MSquaredExcess | -0.140797 |
| MaximumDrawdown | 0.445720 | ES_Loss | 0.072744 | JensenAlpha | 0.213933 | NetSelectivity | -0.600491 |
| AverageDrawdown | 0.120579 | DownsideDeviation | 0.021080 | Treynor_Daily | -0.007784 | Selectivity | 0.213933 |
| AverageDrawdownLength | 43.529412 | DrawdownDeviation | 0.024587 | Treynor_Annualized | -2.144712 | SpecificRisk | 0.608909 |
| AverageRecoveryTime | 11.941176 | Rachev | 1.351381 | Modigliani | 0.000401 | SystematicRisk | -0.015828 |
| Sharpe_Daily | 0.036266 | AdjustedSharpe | 0.523043 | TrackingError_Daily | 0.040233 | TotalRisk | 0.609115 |
| Sharpe_Annualized | 0.575704 | Skewness | 3.034693 | TrackingError_Annualized | 0.638676 | UpCapture | 0.148826 |
| Sharpe_VaR | 0.027639 | Kurtosis | 30.708821 | M2Sortino | 0.179156 | UpNumber | 0.295872 |
| Sharpe_ES | 0.019142 | UpsidePotential | 0.510711 | Appraisal | 0.351338 | UpPercent | 0.252294 |
| Sortino | 0.066055 | UpsideRisk | 0.032091 | CAPMBeta | -0.090138 | DownCapture | -0.224965 |
| Calmar | 0.433724 | BernardoLedoit | 1.148553 | ActiveReturn | -0.035370 | DownNumber | 0.389937 |
| Omega | 1.148553 | DRatio | 1.067137 | OmegaExcessReturn | 0.072625 | DownPercent | 0.688679 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.745763</td><td>-0.025424</td></tr><tr><td>OUT</td><td>91</td><td>88</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.115048</td><td>-0.045817</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.150937</td><td>-0.012480</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-vlp1l">
<summary><strong>VLP1L — Vilkyškių pieninė</strong> | HOLD | target 87 shares | priority 2</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 42 | 87 | +45 | 9.09% | EUR 15.5000 | 0.3805 | 43 / 0 | 57.67 | Bearish | Inside bands | HOLD | 2026-08-28 |

![VLP1L complete technical history](figures/technical_analysis/VLP1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![VLP1L combined technical indicators](figures/stock_profiles/VLP1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.001223 | Sterling | 1.292930 | Hurst | 0.426761 | BetaCoSkewness | -0.725375 |
| GeometricReturn | 0.001140 | Burke | 1.256071 | Kappa | 0.100544 | BetaCoKurtosis | -0.007644 |
| AnnualizedReturn_Arithmetic | 0.308070 | Martin | 5.265313 | Kelly | 7.261257 | CDD | 0.095077 |
| AnnualizedReturn_Geometric | 0.332487 | UlcerIndex | 0.063147 | Prospect | -0.392858 | CoSkewness | -0.000000 |
| CumulativeReturn | 1.360478 | PainIndex | 0.047953 | Information_Daily | 0.019363 | CoKurtosis | -0.000000 |
| Volatility | 0.012975 | PainRatio | 6.933606 | Information_Annualized | 0.393018 | FamaBeta | 1.173012 |
| Volatility_Annualized | 0.205977 | VaR_Loss | 0.014422 | CAPMAlpha | 0.001173 | MSquaredExcess | 0.044566 |
| MaximumDrawdown | 0.157158 | ES_Loss | 0.024133 | JensenAlpha | 0.319473 | NetSelectivity | 0.064232 |
| AverageDrawdown | 0.039828 | DownsideDeviation | 0.007420 | Treynor_Daily | 0.020028 | Selectivity | 0.319473 |
| AverageDrawdownLength | 25.392857 | DrawdownDeviation | 0.010767 | Treynor_Annualized | 5.842701 | SpecificRisk | 0.205598 |
| AverageRecoveryTime | 14.107143 | Rachev | 1.428309 | Modigliani | 0.001042 | SystematicRisk | 0.009993 |
| Sharpe_Daily | 0.094217 | AdjustedSharpe | -0.792235 | TrackingError_Daily | 0.016637 | TotalRisk | 0.205841 |
| Sharpe_Annualized | 1.495653 | Skewness | 1.859172 | TrackingError_Annualized | 0.264105 | UpCapture | 0.183974 |
| Sharpe_VaR | 0.084766 | Kurtosis | 24.383907 | M2Sortino | 0.332887 | UpNumber | 0.426606 |
| Sharpe_ES | 0.050656 | UpsidePotential | 0.610832 | Appraisal | 1.553874 | UpPercent | 0.275229 |
| Sortino | 0.164747 | UpsideRisk | 0.010704 | CAPMBeta | 0.056906 | DownCapture | -0.130313 |
| Calmar | 2.115625 | BernardoLedoit | 1.369319 | ActiveReturn | 0.103798 | DownNumber | 0.361635 |
| Omega | 1.369319 | DRatio | 0.658191 | OmegaExcessReturn | 0.290002 | DownPercent | 0.798742 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.694915</td><td>-0.076271</td></tr><tr><td>OUT</td><td>91</td><td>82</td><td>-9</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.148027</td><td>-0.012838</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.132939</td><td>-0.030477</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-kne1l">
<summary><strong>KNE1L — KN Energies</strong> | HOLD | target 1378 shares | priority 3</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 1378 | +1378 | 4.52% | EUR 0.4920 | 0.3717 | 42 / 0 | 55.64 | Bullish | Inside bands | HOLD | 2026-08-28 |

![KNE1L complete technical history](figures/technical_analysis/KNE1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![KNE1L combined technical indicators](figures/stock_profiles/KNE1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000970 | Sterling | 0.694925 | Hurst | 0.383627 | BetaCoSkewness | -1.303857 |
| GeometricReturn | 0.000892 | Burke | 1.001545 | Kappa | 0.083316 | BetaCoKurtosis | -0.058605 |
| AnnualizedReturn_Arithmetic | 0.244434 | Martin | 2.047422 | Kelly | 6.124211 | CDD | 0.090512 |
| AnnualizedReturn_Geometric | 0.251806 | UlcerIndex | 0.122987 | Prospect | -0.432052 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.958110 | PainIndex | 0.091665 | Information_Daily | 0.004520 | CoKurtosis | -0.000000 |
| Volatility | 0.012585 | PainRatio | 2.747028 | Information_Annualized | 0.088911 | FamaBeta | 1.137731 |
| Volatility_Annualized | 0.199782 | VaR_Loss | 0.015563 | CAPMAlpha | 0.000925 | MSquaredExcess | -0.005995 |
| MaximumDrawdown | 0.262350 | ES_Loss | 0.024832 | JensenAlpha | 0.240138 | NetSelectivity | -0.008381 |
| AverageDrawdown | 0.040766 | DownsideDeviation | 0.007426 | Treynor_Daily | 0.017476 | Selectivity | 0.240138 |
| AverageDrawdownLength | 33.000000 | DrawdownDeviation | 0.011794 | Treynor_Annualized | 4.935416 | SpecificRisk | 0.199448 |
| AverageRecoveryTime | 18.954545 | Rachev | 1.379867 | Modigliani | 0.000853 | SystematicRisk | 0.008959 |
| Sharpe_Daily | 0.077074 | AdjustedSharpe | 0.864712 | TrackingError_Daily | 0.016379 | TotalRisk | 0.199650 |
| Sharpe_Annualized | 1.223506 | Skewness | 1.082079 | TrackingError_Annualized | 0.260001 | UpCapture | 0.160227 |
| Sharpe_VaR | 0.062324 | Kurtosis | 11.239148 | M2Sortino | 0.252111 | UpNumber | 0.364679 |
| Sharpe_ES | 0.039062 | UpsidePotential | 0.580744 | Appraisal | 1.204012 | UpPercent | 0.227064 |
| Sortino | 0.130612 | UpsideRisk | 0.010196 | CAPMBeta | 0.051020 | DownCapture | -0.085429 |
| Calmar | 0.959809 | BernardoLedoit | 1.290164 | ActiveReturn | 0.023117 | DownNumber | 0.355346 |
| Omega | 1.290164 | DRatio | 0.740349 | OmegaExcessReturn | 0.209287 | DownPercent | 0.801887 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.737288</td><td>-0.033898</td></tr><tr><td>OUT</td><td>91</td><td>87</td><td>-4</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.166501</td><td>0.005636</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.152274</td><td>-0.011143</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-mrk1t">
<summary><strong>MRK1T — Merko Ehitus</strong> | HOLD | target 36 shares | priority 4</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 20 | 36 | +16 | 6.58% | EUR 26.9000 | 0.3717 | 42 / 0 | 40.54 | Bearish | Inside bands | HOLD | 2026-08-28 |

![MRK1T complete technical history](figures/technical_analysis/MRK1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![MRK1T combined technical indicators](figures/stock_profiles/MRK1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000873 | Sterling | 0.729500 | Hurst | 0.405900 | BetaCoSkewness | -0.108044 |
| GeometricReturn | 0.000817 | Burke | 0.901691 | Kappa | 0.082490 | BetaCoKurtosis | -0.013832 |
| AnnualizedReturn_Arithmetic | 0.219897 | Martin | 2.953061 | Kelly | 7.768742 | CDD | 0.054320 |
| AnnualizedReturn_Geometric | 0.228513 | UlcerIndex | 0.077382 | Prospect | -0.386314 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.851101 | PainIndex | 0.049366 | Information_Daily | -0.000039 | CoKurtosis | -0.000000 |
| Volatility | 0.010598 | PainRatio | 4.628938 | Information_Annualized | -0.000761 | FamaBeta | 0.958116 |
| Volatility_Annualized | 0.168242 | VaR_Loss | 0.012042 | CAPMAlpha | 0.000792 | MSquaredExcess | 0.007987 |
| MaximumDrawdown | 0.213246 | ES_Loss | 0.021553 | JensenAlpha | 0.207631 | NetSelectivity | 0.009402 |
| AverageDrawdown | 0.030621 | DownsideDeviation | 0.006322 | Treynor_Daily | 0.008948 | Selectivity | 0.207631 |
| AverageDrawdownLength | 22.258065 | DrawdownDeviation | 0.010945 | Treynor_Annualized | 2.502555 | SpecificRisk | 0.167365 |
| AverageRecoveryTime | 11.064516 | Rachev | 1.344492 | Modigliani | 0.000911 | SystematicRisk | 0.016034 |
| Sharpe_Daily | 0.082335 | AdjustedSharpe | 0.276910 | TrackingError_Daily | 0.014572 | TotalRisk | 0.168131 |
| Sharpe_Annualized | 1.307029 | Skewness | 1.268852 | TrackingError_Annualized | 0.231319 | UpCapture | 0.232974 |
| Sharpe_VaR | 0.072461 | Kurtosis | 17.955590 | M2Sortino | 0.231256 | UpNumber | 0.470183 |
| Sharpe_ES | 0.040486 | UpsidePotential | 0.557509 | Appraisal | 1.240587 | UpPercent | 0.243119 |
| Sortino | 0.138032 | UpsideRisk | 0.008542 | CAPMBeta | 0.091312 | DownCapture | 0.035101 |
| Calmar | 1.071592 | BernardoLedoit | 1.329059 | ActiveReturn | -0.000176 | DownNumber | 0.430818 |
| Omega | 1.329059 | DRatio | 0.694712 | OmegaExcessReturn | 0.192319 | DownPercent | 0.808176 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.711864</td><td>-0.059322</td></tr><tr><td>OUT</td><td>91</td><td>84</td><td>-7</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.145156</td><td>-0.015708</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.147815</td><td>-0.015602</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-virsi">
<summary><strong>VIRSI — VIRŠI-A</strong> | HOLD | target 102 shares | priority 5</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 102 | +102 | 2.99% | EUR 4.3800 | 0.3540 | 40 / 0 | 66.98 | Bearish | Inside bands | HOLD | 2026-08-28 |

![VIRSI complete technical history](figures/technical_analysis/VIRSI_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![VIRSI combined technical indicators](figures/stock_profiles/VIRSI_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000070 | Sterling | -0.074176 | Hurst | 0.395572 | BetaCoSkewness | -1.924716 |
| GeometricReturn | -0.000081 | Burke | -0.195219 | Kappa | -0.014051 | BetaCoKurtosis | 0.010497 |
| AnnualizedReturn_Arithmetic | -0.017763 | Martin | -0.204125 | Kelly | -3.218401 | CDD | 0.079544 |
| AnnualizedReturn_Geometric | -0.020308 | UlcerIndex | 0.099486 | Prospect | -0.587322 | CoSkewness | -0.000000 |
| CumulativeReturn | -0.059541 | PainIndex | 0.084862 | Information_Daily | -0.074984 | CoKurtosis | 0.000000 |
| Volatility | 0.004680 | PainRatio | -0.239300 | Information_Annualized | -1.308288 | FamaBeta | 0.423082 |
| Volatility_Annualized | 0.074292 | VaR_Loss | 0.007200 | CAPMAlpha | -0.000072 | MSquaredExcess | -0.225190 |
| MaximumDrawdown | 0.173775 | ES_Loss | 0.010920 | JensenAlpha | -0.020793 | NetSelectivity | -0.117062 |
| AverageDrawdown | 0.031050 | DownsideDeviation | 0.003300 | Treynor_Daily | -0.038387 | Selectivity | -0.020793 |
| AverageDrawdownLength | 107.000000 | DrawdownDeviation | 0.006378 | Treynor_Annualized | -9.575251 | SpecificRisk | 0.074242 |
| AverageRecoveryTime | 35.285714 | Rachev | 0.954479 | Modigliani | -0.000167 | SystematicRisk | 0.000372 |
| Sharpe_Daily | -0.015062 | AdjustedSharpe | -0.228646 | TrackingError_Daily | 0.011989 | TotalRisk | 0.074243 |
| Sharpe_Annualized | -0.239101 | Skewness | 0.479749 | TrackingError_Annualized | 0.190323 | UpCapture | -0.025506 |
| Sharpe_VaR | -0.009790 | Kurtosis | 13.330999 | M2Sortino | -0.021757 | UpNumber | 0.316514 |
| Sharpe_ES | -0.006455 | UpsidePotential | 0.431408 | Appraisal | -0.280065 | UpPercent | 0.119266 |
| Sortino | -0.021361 | UpsideRisk | 0.003315 | CAPMBeta | 0.002121 | DownCapture | -0.011262 |
| Calmar | -0.116861 | BernardoLedoit | 0.952821 | ActiveReturn | -0.248997 | DownNumber | 0.308176 |
| Omega | 0.952821 | DRatio | 1.070846 | OmegaExcessReturn | -0.039201 | DownPercent | 0.886792 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.762712</td><td>-0.008475</td></tr><tr><td>OUT</td><td>91</td><td>90</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.160955</td><td>0.000091</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.163898</td><td>0.000481</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-apg1l">
<summary><strong>APG1L — Apranga</strong> | HOLD | target 253 shares | priority 6</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 200 | 253 | +53 | 6.71% | EUR 3.9800 | 0.3363 | 38 / 0 | 55.56 | Bearish | Inside bands | HOLD | 2026-08-28 |

![APG1L complete technical history](figures/technical_analysis/APG1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![APG1L combined technical indicators](figures/stock_profiles/APG1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000854 | Sterling | 1.024293 | Hurst | 0.441221 | BetaCoSkewness | -1.508227 |
| GeometricReturn | 0.000815 | Burke | 1.133884 | Kappa | 0.062549 | BetaCoKurtosis | 0.019251 |
| AnnualizedReturn_Arithmetic | 0.215236 | Martin | 4.059646 | Kelly | 11.124919 | CDD | 0.072705 |
| AnnualizedReturn_Geometric | 0.227925 | UlcerIndex | 0.056144 | Prospect | -0.233234 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.848452 | PainIndex | 0.042201 | Information_Daily | -0.000181 | CoKurtosis | 0.000000 |
| Volatility | 0.008762 | PainRatio | 5.400998 | Information_Annualized | -0.003533 | FamaBeta | 0.792124 |
| Volatility_Annualized | 0.139094 | VaR_Loss | 0.008059 | CAPMAlpha | 0.000805 | MSquaredExcess | 0.048060 |
| MaximumDrawdown | 0.122520 | ES_Loss | 0.018685 | JensenAlpha | 0.215245 | NetSelectivity | 0.046775 |
| AverageDrawdown | 0.022993 | DownsideDeviation | 0.006445 | Treynor_Daily | 0.014701 | Selectivity | 0.215245 |
| AverageDrawdownLength | 31.090909 | DrawdownDeviation | 0.007213 | Treynor_Annualized | 4.110665 | SpecificRisk | 0.138661 |
| AverageRecoveryTime | 22.136364 | Rachev | 1.219309 | Modigliani | 0.001078 | SystematicRisk | 0.009736 |
| Sharpe_Daily | 0.097478 | AdjustedSharpe | -5.572545 | TrackingError_Daily | 0.013622 | TotalRisk | 0.139002 |
| Sharpe_Annualized | 1.547413 | Skewness | -2.803633 | TrackingError_Annualized | 0.216245 | UpCapture | 0.127047 |
| Sharpe_VaR | 0.105986 | Kurtosis | 41.870691 | M2Sortino | 0.230300 | UpNumber | 0.424312 |
| Sharpe_ES | 0.045711 | UpsidePotential | 0.425141 | Appraisal | 1.552311 | UpPercent | 0.181193 |
| Sortino | 0.132530 | UpsideRisk | 0.005989 | CAPMBeta | 0.055447 | DownCapture | -0.092921 |
| Calmar | 1.860315 | BernardoLedoit | 1.452921 | ActiveReturn | -0.000764 | DownNumber | 0.330189 |
| Omega | 1.452921 | DRatio | 0.504583 | OmegaExcessReturn | 0.191027 | DownPercent | 0.877358 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.745763</td><td>-0.025424</td></tr><tr><td>OUT</td><td>91</td><td>88</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.182541</td><td>0.021676</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.152133</td><td>-0.011284</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-hae1t">
<summary><strong>HAE1T — Harju Elekter Group</strong> | BUY | target 133 shares | priority 7</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 133 | +33 | 4.58% | EUR 5.1400 | 0.1150 | 37 / 24 | 42.59 | Bullish | Inside bands | BUY | 2026-08-28 |

![HAE1T complete technical history](figures/technical_analysis/HAE1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![HAE1T combined technical indicators](figures/stock_profiles/HAE1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000032 | Sterling | -0.057287 | Hurst | 0.386445 | BetaCoSkewness | 0.134984 |
| GeometricReturn | -0.000071 | Burke | -0.088405 | Kappa | -0.003342 | BetaCoKurtosis | 0.053440 |
| AnnualizedReturn_Arithmetic | -0.008146 | Martin | -0.156945 | Kelly | -0.416803 | CDD | 0.153779 |
| AnnualizedReturn_Geometric | -0.017725 | UlcerIndex | 0.112935 | Prospect | -0.572958 | CoSkewness | 0.000000 |
| CumulativeReturn | -0.052102 | PainIndex | 0.098550 | Information_Daily | -0.063852 | CoKurtosis | 0.000000 |
| Volatility | 0.008807 | PainRatio | -0.179853 | Information_Annualized | -1.115467 | FamaBeta | 0.796163 |
| Volatility_Annualized | 0.139804 | VaR_Loss | 0.011233 | CAPMAlpha | -0.000055 | MSquaredExcess | -0.204243 |
| MaximumDrawdown | 0.209400 | ES_Loss | 0.020168 | JensenAlpha | -0.023582 | NetSelectivity | -0.199798 |
| AverageDrawdown | 0.058845 | DownsideDeviation | 0.005988 | Treynor_Daily | -0.002770 | Selectivity | -0.023582 |
| AverageDrawdownLength | 93.375000 | DrawdownDeviation | 0.009361 | Treynor_Annualized | -0.691964 | SpecificRisk | 0.139638 |
| AverageRecoveryTime | 15.375000 | Rachev | 1.080200 | Modigliani | -0.000041 | SystematicRisk | 0.004498 |
| Sharpe_Daily | -0.003671 | AdjustedSharpe | -0.057893 | TrackingError_Daily | 0.013916 | TotalRisk | 0.139711 |
| Sharpe_Annualized | -0.058271 | Skewness | 0.500438 | TrackingError_Annualized | 0.220906 | UpCapture | -0.001326 |
| Sharpe_VaR | -0.002878 | Kurtosis | 14.435639 | M2Sortino | -0.017860 | UpNumber | 0.373853 |
| Sharpe_ES | -0.001603 | UpsidePotential | 0.448649 | Appraisal | -0.168881 | UpPercent | 0.176606 |
| Sortino | -0.005398 | UpsideRisk | 0.006450 | CAPMBeta | 0.025615 | DownCapture | 0.007906 |
| Calmar | -0.084644 | BernardoLedoit | 0.988111 | ActiveReturn | -0.246414 | DownNumber | 0.430818 |
| Omega | 0.988111 | DRatio | 1.154072 | OmegaExcessReturn | -0.052011 | DownPercent | 0.823899 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.745763</td><td>-0.025424</td></tr><tr><td>OUT</td><td>91</td><td>88</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.147725</td><td>-0.013140</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.168476</td><td>0.005059</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-saf1r">
<summary><strong>SAF1R — SAF Tehnika</strong> | SELL | target 100 shares | priority 8</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 100 | 100 | +0 | 11.43% | EUR 17.1500 | -0.1062 | 12 / 24 | 88.11 | Bullish | Inside bands | SELL | 2026-08-28 |

![SAF1R complete technical history](figures/technical_analysis/SAF1R_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![SAF1R combined technical indicators](figures/stock_profiles/SAF1R_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000737 | Sterling | 0.188656 | Hurst | 0.437121 | BetaCoSkewness | 0.819835 |
| GeometricReturn | 0.000501 | Burke | 0.254843 | Kappa | 0.027611 | BetaCoKurtosis | 0.368556 |
| AnnualizedReturn_Arithmetic | 0.185846 | Martin | 0.263460 | Kelly | 1.551119 | CDD | 0.077069 |
| AnnualizedReturn_Geometric | 0.134576 | UlcerIndex | 0.510804 | Prospect | -0.426971 | CoSkewness | 0.000000 |
| CumulativeReturn | 0.459036 | PainIndex | 0.424909 | Information_Daily | -0.013302 | CoKurtosis | 0.000000 |
| Volatility | 0.021805 | PainRatio | 0.316718 | Information_Annualized | -0.249216 | FamaBeta | 1.971230 |
| Volatility_Annualized | 0.346141 | VaR_Loss | 0.025963 | CAPMAlpha | 0.000623 | MSquaredExcess | -0.130561 |
| MaximumDrawdown | 0.613343 | ES_Loss | 0.046496 | JensenAlpha | 0.104762 | NetSelectivity | -0.316223 |
| AverageDrawdown | 0.074566 | DownsideDeviation | 0.014405 | Treynor_Daily | 0.003844 | Selectivity | 0.104762 |
| AverageDrawdownLength | 81.666667 | DrawdownDeviation | 0.022354 | Treynor_Annualized | 1.032252 | SpecificRisk | 0.345154 |
| AverageRecoveryTime | 45.666667 | Rachev | 1.157893 | Modigliani | 0.000374 | SystematicRisk | 0.022893 |
| Sharpe_Daily | 0.033822 | AdjustedSharpe | 0.386716 | TrackingError_Daily | 0.023789 | TotalRisk | 0.345913 |
| Sharpe_Annualized | 0.536906 | Skewness | 0.763854 | TrackingError_Annualized | 0.377635 | UpCapture | 0.225107 |
| Sharpe_VaR | 0.028405 | Kurtosis | 31.980202 | M2Sortino | 0.129024 | UpNumber | 0.389908 |
| Sharpe_ES | 0.015861 | UpsidePotential | 0.433727 | Appraisal | 0.303522 | UpPercent | 0.275229 |
| Sortino | 0.051195 | UpsideRisk | 0.016366 | CAPMBeta | 0.130372 | DownCapture | 0.065218 |
| Calmar | 0.219415 | BernardoLedoit | 1.133831 | ActiveReturn | -0.094113 | DownNumber | 0.408805 |
| Omega | 1.133831 | DRatio | 0.888069 | OmegaExcessReturn | 0.052099 | DownPercent | 0.735849 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.779661</td><td>0.008475</td></tr><tr><td>OUT</td><td>91</td><td>92</td><td>+1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.210305</td><td>0.049440</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.162984</td><td>-0.000433</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-grg1l">
<summary><strong>GRG1L — Grigeo Group</strong> | HOLD | target 526 shares | priority 9</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 526 | +526 | 3.54% | EUR 1.0100 | 0.3805 | 49 / 6 | 35.53 | Bearish | Inside bands | HOLD | 2026-08-28 |

![GRG1L complete technical history](figures/technical_analysis/GRG1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![GRG1L combined technical indicators](figures/stock_profiles/GRG1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000507 | Sterling | 0.466265 | Hurst | 0.382523 | BetaCoSkewness | -1.870061 |
| GeometricReturn | 0.000459 | Burke | 0.565621 | Kappa | 0.056030 | BetaCoKurtosis | 0.013070 |
| AnnualizedReturn_Arithmetic | 0.127810 | Martin | 2.053835 | Kelly | 5.250336 | CDD | 0.057321 |
| AnnualizedReturn_Geometric | 0.122677 | UlcerIndex | 0.059730 | Prospect | -0.505101 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.413726 | PainIndex | 0.043336 | Information_Daily | -0.024444 | CoKurtosis | 0.000000 |
| Volatility | 0.009829 | PainRatio | 2.830823 | Information_Annualized | -0.455607 | FamaBeta | 0.888531 |
| Volatility_Annualized | 0.156023 | VaR_Loss | 0.014447 | CAPMAlpha | 0.000492 | MSquaredExcess | -0.073755 |
| MaximumDrawdown | 0.163104 | ES_Loss | 0.021228 | JensenAlpha | 0.118837 | NetSelectivity | -0.080521 |
| AverageDrawdown | 0.025521 | DownsideDeviation | 0.006220 | Treynor_Daily | 0.027355 | Selectivity | 0.118837 |
| AverageDrawdownLength | 19.694444 | DrawdownDeviation | 0.008942 | Treynor_Annualized | 7.306573 | SpecificRisk | 0.155892 |
| AverageRecoveryTime | 12.250000 | Rachev | 1.114414 | Modigliani | 0.000571 | SystematicRisk | 0.002948 |
| Sharpe_Daily | 0.051603 | AdjustedSharpe | 0.718078 | TrackingError_Daily | 0.014658 | TotalRisk | 0.155920 |
| Sharpe_Annualized | 0.819174 | Skewness | 1.110901 | TrackingError_Annualized | 0.232684 | UpCapture | 0.025515 |
| Sharpe_VaR | 0.035105 | Kurtosis | 12.838329 | M2Sortino | 0.124429 | UpNumber | 0.348624 |
| Sharpe_ES | 0.023893 | UpsidePotential | 0.550860 | Appraisal | 0.762303 | UpPercent | 0.206422 |
| Sortino | 0.081544 | UpsideRisk | 0.007619 | CAPMBeta | 0.016790 | DownCapture | -0.118101 |
| Calmar | 0.752135 | BernardoLedoit | 1.173751 | ActiveReturn | -0.106013 | DownNumber | 0.355346 |
| Omega | 1.173751 | DRatio | 0.806165 | OmegaExcessReturn | 0.087066 | DownPercent | 0.823899 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.728814</td><td>-0.042373</td></tr><tr><td>OUT</td><td>91</td><td>86</td><td>-5</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.156594</td><td>-0.004271</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.157624</td><td>-0.005793</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-rsu1l">
<summary><strong>RSU1L — Rokiškio sūris</strong> | HOLD | target 137 shares | priority 10</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 137 | +137 | 4.19% | EUR 4.5600 | 0.2566 | 35 / 6 | 58.03 | Bullish | Inside bands | HOLD | 2026-08-28 |

![RSU1L complete technical history](figures/technical_analysis/RSU1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![RSU1L combined technical indicators](figures/stock_profiles/RSU1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000234 | Sterling | 0.114943 | Hurst | 0.351713 | BetaCoSkewness | -3.452885 |
| GeometricReturn | 0.000116 | Burke | 0.095021 | Kappa | 0.015195 | BetaCoKurtosis | 0.121557 |
| AnnualizedReturn_Arithmetic | 0.058990 | Martin | 0.461094 | Kelly | 0.989899 | CDD | 0.125774 |
| AnnualizedReturn_Geometric | 0.029780 | UlcerIndex | 0.064586 | Prospect | -0.515701 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.091774 | PainIndex | 0.053798 | Information_Daily | -0.038401 | CoKurtosis | 0.000000 |
| Volatility | 0.015378 | PainRatio | 0.553557 | Information_Annualized | -0.686268 | FamaBeta | 1.390202 |
| Volatility_Annualized | 0.244115 | VaR_Loss | 0.025365 | CAPMAlpha | 0.000143 | MSquaredExcess | -0.168690 |
| MaximumDrawdown | 0.159089 | ES_Loss | 0.035860 | JensenAlpha | 0.005979 | NetSelectivity | -0.288144 |
| AverageDrawdown | 0.073389 | DownsideDeviation | 0.010363 | Treynor_Daily | 0.001119 | Selectivity | 0.005979 |
| AverageDrawdownLength | 67.454545 | DrawdownDeviation | 0.010488 | Treynor_Annualized | 0.286143 | SpecificRisk | 0.243268 |
| AverageRecoveryTime | 35.272727 | Rachev | 1.071028 | Modigliani | 0.000168 | SystematicRisk | 0.018275 |
| Sharpe_Daily | 0.015222 | AdjustedSharpe | 0.242870 | TrackingError_Daily | 0.018258 | TotalRisk | 0.243954 |
| Sharpe_Annualized | 0.241649 | Skewness | 0.436525 | TrackingError_Annualized | 0.289842 | UpCapture | 0.143059 |
| Sharpe_VaR | 0.009229 | Kurtosis | 8.148953 | M2Sortino | 0.028780 | UpNumber | 0.309633 |
| Sharpe_ES | 0.006528 | UpsidePotential | 0.453221 | Appraisal | 0.024580 | UpPercent | 0.236239 |
| Sortino | 0.022589 | UpsideRisk | 0.011350 | CAPMBeta | 0.104075 | DownCapture | 0.110948 |
| Calmar | 0.187193 | BernardoLedoit | 1.052456 | ActiveReturn | -0.198909 | DownNumber | 0.339623 |
| Omega | 1.052456 | DRatio | 0.967126 | OmegaExcessReturn | -0.029551 | DownPercent | 0.761006 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.762712</td><td>-0.008475</td></tr><tr><td>OUT</td><td>91</td><td>90</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.186131</td><td>0.025266</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.165766</td><td>0.002349</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-ign1l">
<summary><strong>IGN1L — Ignitis grupė</strong> | HOLD | target 3 shares | priority 11</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 3 | +3 | 0.56% | EUR 22.1000 | 0.3982 | 56 / 11 | 46.17 | Bearish | Inside bands | HOLD | 2026-08-28 |

![IGN1L complete technical history](figures/technical_analysis/IGN1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![IGN1L combined technical indicators](figures/stock_profiles/IGN1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000108 | Sterling | 0.083860 | Hurst | 0.358896 | BetaCoSkewness | -3.787258 |
| GeometricReturn | 0.000087 | Burke | 0.127683 | Kappa | 0.015679 | BetaCoKurtosis | -0.082161 |
| AnnualizedReturn_Arithmetic | 0.027126 | Martin | 0.259626 | Kelly | 2.659124 | CDD | 0.109179 |
| AnnualizedReturn_Geometric | 0.022275 | UlcerIndex | 0.085796 | Prospect | -0.532723 | CoSkewness | -0.000001 |
| CumulativeReturn | 0.068138 | PainIndex | 0.070307 | Information_Daily | -0.058371 | CoKurtosis | -0.000000 |
| Volatility | 0.006362 | PainRatio | 0.316822 | Information_Annualized | -1.039489 | FamaBeta | 0.575188 |
| Volatility_Annualized | 0.101001 | VaR_Loss | 0.009219 | CAPMAlpha | 0.000085 | MSquaredExcess | -0.154606 |
| MaximumDrawdown | 0.165620 | ES_Loss | 0.015423 | JensenAlpha | 0.016326 | NetSelectivity | -0.109264 |
| AverageDrawdown | 0.044485 | DownsideDeviation | 0.004437 | Treynor_Daily | 0.003361 | Selectivity | 0.016326 |
| AverageDrawdownLength | 74.400000 | DrawdownDeviation | 0.007873 | Treynor_Annualized | 0.856261 | SpecificRisk | 0.100831 |
| AverageRecoveryTime | 38.900000 | Rachev | 1.039140 | Modigliani | 0.000187 | SystematicRisk | 0.004568 |
| Sharpe_Daily | 0.016919 | AdjustedSharpe | 0.263485 | TrackingError_Daily | 0.012509 | TotalRisk | 0.100934 |
| Sharpe_Annualized | 0.268574 | Skewness | -0.033254 | TrackingError_Annualized | 0.198573 | UpCapture | 0.040918 |
| Sharpe_VaR | 0.011676 | Kurtosis | 8.810035 | M2Sortino | 0.023483 | UpNumber | 0.383028 |
| Sharpe_ES | 0.006979 | UpsidePotential | 0.469849 | Appraisal | 0.161912 | UpPercent | 0.162844 |
| Sortino | 0.024262 | UpsideRisk | 0.004556 | CAPMBeta | 0.026014 | DownCapture | 0.019678 |
| Calmar | 0.134494 | BernardoLedoit | 1.054449 | ActiveReturn | -0.206414 | DownNumber | 0.399371 |
| Omega | 1.054449 | DRatio | 0.968757 | OmegaExcessReturn | -0.003127 | DownPercent | 0.874214 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.771186</td><td>0.000000</td></tr><tr><td>OUT</td><td>91</td><td>91</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.160126</td><td>-0.000738</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.164062</td><td>0.000645</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-ako1l">
<summary><strong>AKO1L — Akola Group</strong> | HOLD | target 123 shares | priority 12</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 123 | +123 | 1.46% | EUR 1.7700 | 0.1239 | 25 / 11 | 45.60 | Bearish | Inside bands | HOLD | 2026-08-28 |

![AKO1L complete technical history](figures/technical_analysis/AKO1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![AKO1L combined technical indicators](figures/stock_profiles/AKO1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000215 | Sterling | 0.075109 | Hurst | 0.408968 | BetaCoSkewness | -4.591177 |
| GeometricReturn | 0.000148 | Burke | 0.127391 | Kappa | 0.017077 | BetaCoKurtosis | -0.085834 |
| AnnualizedReturn_Arithmetic | 0.054158 | Martin | 0.149407 | Kelly | 1.602141 | CDD | 0.203360 |
| AnnualizedReturn_Geometric | 0.038019 | UlcerIndex | 0.254464 | Prospect | -0.538978 | CoSkewness | -0.000001 |
| CumulativeReturn | 0.118116 | PainIndex | 0.211197 | Information_Daily | -0.043019 | CoKurtosis | -0.000000 |
| Volatility | 0.011582 | PainRatio | 0.180016 | Information_Annualized | -0.771779 | FamaBeta | 1.047039 |
| Volatility_Annualized | 0.183857 | VaR_Loss | 0.016716 | CAPMAlpha | 0.000164 | MSquaredExcess | -0.156572 |
| MaximumDrawdown | 0.406184 | ES_Loss | 0.025400 | JensenAlpha | 0.024661 | NetSelectivity | -0.201428 |
| AverageDrawdown | 0.070383 | DownsideDeviation | 0.007769 | Treynor_Daily | 0.002535 | Selectivity | 0.024661 |
| AverageDrawdownLength | 81.888889 | DrawdownDeviation | 0.016029 | Treynor_Annualized | 0.650874 | SpecificRisk | 0.183449 |
| AverageRecoveryTime | 48.222222 | Rachev | 1.112303 | Modigliani | 0.000205 | SystematicRisk | 0.010257 |
| Sharpe_Daily | 0.018556 | AdjustedSharpe | 0.288067 | TrackingError_Daily | 0.015563 | TotalRisk | 0.183735 |
| Sharpe_Annualized | 0.294564 | Skewness | 0.385739 | TrackingError_Annualized | 0.247053 | UpCapture | 0.097979 |
| Sharpe_VaR | 0.012857 | Kurtosis | 14.339191 | M2Sortino | 0.037933 | UpNumber | 0.389908 |
| Sharpe_ES | 0.008461 | UpsidePotential | 0.480974 | Appraisal | 0.134428 | UpPercent | 0.238532 |
| Sortino | 0.027662 | UpsideRisk | 0.008582 | CAPMBeta | 0.058412 | DownCapture | 0.059814 |
| Calmar | 0.093600 | BernardoLedoit | 1.061023 | ActiveReturn | -0.190670 | DownNumber | 0.415094 |
| Omega | 1.061023 | DRatio | 0.959257 | OmegaExcessReturn | -0.006462 | DownPercent | 0.789308 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.762712</td><td>-0.008475</td></tr><tr><td>OUT</td><td>91</td><td>90</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.165920</td><td>0.005056</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.163847</td><td>0.000430</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-pzv1l">
<summary><strong>PZV1L — Pieno žvaigždės</strong> | HOLD | target 91 shares | priority 13</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 91 | +91 | 1.05% | EUR 1.7300 | 0.1858 | 35 / 14 | 46.60 | Bearish | Inside bands | HOLD | 2026-08-28 |

![PZV1L complete technical history](figures/technical_analysis/PZV1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![PZV1L combined technical indicators](figures/stock_profiles/PZV1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000850 | Sterling | 0.666794 | Hurst | 0.406966 | BetaCoSkewness | -0.465367 |
| GeometricReturn | 0.000752 | Burke | 0.701161 | Kappa | 0.054267 | BetaCoKurtosis | 0.055288 |
| AnnualizedReturn_Arithmetic | 0.214083 | Martin | 2.575798 | Kelly | 4.314746 | CDD | 0.096713 |
| AnnualizedReturn_Geometric | 0.208457 | UlcerIndex | 0.080929 | Prospect | -0.392082 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.762141 | PainIndex | 0.055102 | Information_Daily | -0.003752 | CoKurtosis | 0.000000 |
| Volatility | 0.014032 | PainRatio | 3.783116 | Information_Annualized | -0.072514 | FamaBeta | 1.268520 |
| Volatility_Annualized | 0.222748 | VaR_Loss | 0.016776 | CAPMAlpha | 0.000812 | MSquaredExcess | -0.052380 |
| MaximumDrawdown | 0.212625 | ES_Loss | 0.031030 | JensenAlpha | 0.198809 | NetSelectivity | -0.081640 |
| AverageDrawdown | 0.037616 | DownsideDeviation | 0.009069 | Treynor_Daily | 0.017818 | Selectivity | 0.198809 |
| AverageDrawdownLength | 18.810811 | DrawdownDeviation | 0.014074 | Treynor_Annualized | 4.941486 | SpecificRisk | 0.222477 |
| AverageRecoveryTime | 9.054054 | Rachev | 1.173382 | Modigliani | 0.000670 | SystematicRisk | 0.007408 |
| Sharpe_Daily | 0.060544 | AdjustedSharpe | 0.494959 | TrackingError_Daily | 0.017576 | TotalRisk | 0.222600 |
| Sharpe_Annualized | 0.961100 | Skewness | 0.556555 | TrackingError_Annualized | 0.279015 | UpCapture | 0.131042 |
| Sharpe_VaR | 0.050639 | Kurtosis | 17.917831 | M2Sortino | 0.206232 | UpNumber | 0.362385 |
| Sharpe_ES | 0.027378 | UpsidePotential | 0.482278 | Appraisal | 0.893618 | UpPercent | 0.233945 |
| Sortino | 0.093674 | UpsideRisk | 0.010729 | CAPMBeta | 0.042185 | DownCapture | -0.086529 |
| Calmar | 0.980395 | BernardoLedoit | 1.241052 | ActiveReturn | -0.020233 | DownNumber | 0.314465 |
| Omega | 1.241052 | DRatio | 0.722207 | OmegaExcessReturn | 0.156533 | DownPercent | 0.817610 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.754237</td><td>-0.016949</td></tr><tr><td>OUT</td><td>91</td><td>89</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.166406</td><td>0.005541</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.159923</td><td>-0.003494</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-roe1l">
<summary><strong>ROE1L — Artea Bankas</strong> | HOLD | target 492 shares | priority 14</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 416 | 492 | +76 | 2.94% | EUR 0.8950 | 0.1858 | 38 / 17 | 51.65 | Bearish | Inside bands | HOLD | 2026-08-28 |

![ROE1L complete technical history](figures/technical_analysis/ROE1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![ROE1L combined technical indicators](figures/stock_profiles/ROE1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000483 | Sterling | 0.382037 | Hurst | 0.412721 | BetaCoSkewness | -3.665609 |
| GeometricReturn | 0.000425 | Burke | 0.446368 | Kappa | 0.045908 | BetaCoKurtosis | -0.115281 |
| AnnualizedReturn_Arithmetic | 0.121675 | Martin | 1.405464 | Kelly | 4.101313 | CDD | 0.088512 |
| AnnualizedReturn_Geometric | 0.112967 | UlcerIndex | 0.080377 | Prospect | -0.473745 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.377457 | PainIndex | 0.060631 | Information_Daily | -0.026193 | CoKurtosis | -0.000000 |
| Volatility | 0.010850 | PainRatio | 1.863187 | Information_Annualized | -0.486139 | FamaBeta | 0.980897 |
| Volatility_Annualized | 0.172242 | VaR_Loss | 0.011506 | CAPMAlpha | 0.000428 | MSquaredExcess | -0.092393 |
| MaximumDrawdown | 0.195697 | ES_Loss | 0.021779 | JensenAlpha | 0.098738 | NetSelectivity | -0.111354 |
| AverageDrawdown | 0.026332 | DownsideDeviation | 0.006441 | Treynor_Daily | 0.006828 | Selectivity | 0.098738 |
| AverageDrawdownLength | 30.000000 | DrawdownDeviation | 0.009503 | Treynor_Annualized | 1.815646 | SpecificRisk | 0.171781 |
| AverageRecoveryTime | 16.541667 | Rachev | 1.372678 | Modigliani | 0.000492 | SystematicRisk | 0.010925 |
| Sharpe_Daily | 0.044500 | AdjustedSharpe | 0.560868 | TrackingError_Daily | 0.014995 | TotalRisk | 0.172128 |
| Sharpe_Annualized | 0.706419 | Skewness | 1.895772 | TrackingError_Annualized | 0.238043 | UpCapture | 0.129274 |
| Sharpe_VaR | 0.041965 | Kurtosis | 23.643745 | M2Sortino | 0.114315 | UpNumber | 0.428899 |
| Sharpe_ES | 0.022170 | UpsidePotential | 0.513939 | Appraisal | 0.574790 | UpPercent | 0.208716 |
| Sortino | 0.074968 | UpsideRisk | 0.008736 | CAPMBeta | 0.062219 | DownCapture | 0.019880 |
| Calmar | 0.577255 | BernardoLedoit | 1.170781 | ActiveReturn | -0.115722 | DownNumber | 0.487421 |
| Omega | 1.170781 | DRatio | 0.967636 | OmegaExcessReturn | 0.076092 | DownPercent | 0.779874 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.762712</td><td>-0.008475</td></tr><tr><td>OUT</td><td>91</td><td>90</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.162899</td><td>0.002034</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.162939</td><td>-0.000478</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-lhv1t">
<summary><strong>LHV1T — LHV Group</strong> | HOLD | target 97 shares | priority 15</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 97 | +97 | 2.17% | EUR 3.3350 | 0.1062 | 34 / 22 | 43.80 | Bearish | Inside bands | HOLD | 2026-08-28 |

![LHV1T complete technical history](figures/technical_analysis/LHV1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![LHV1T combined technical indicators](figures/stock_profiles/LHV1T_technicals_6m.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![LHV1T return histogram](figures/stock_profiles/LHV1T_histogram.png)

</details>

<details markdown="1">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

![LHV1T stochastic dominance](figures/stock_profiles/LHV1T_FSD_SSD_TSD.png)

The lower integrated CDF component is preferred at a given return threshold. Dominance requires the relevant curve to remain no higher over the complete domain, not merely over one interval.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000299 | Sterling | -0.195237 | Hurst | 0.340010 | BetaCoSkewness | -3.835436 |
| GeometricReturn | -0.000338 | Burke | -0.373845 | Kappa | -0.036120 | BetaCoKurtosis | -0.113239 |
| AnnualizedReturn_Arithmetic | -0.075467 | Martin | -0.370437 | Kelly | -3.906329 | CDD | 0.180859 |
| AnnualizedReturn_Geometric | -0.081572 | UlcerIndex | 0.220205 | Prospect | -0.710868 | CoSkewness | -0.000001 |
| CumulativeReturn | -0.224773 | PainIndex | 0.206536 | Information_Daily | -0.081465 | CoKurtosis | -0.000000 |
| Volatility | 0.008756 | PainRatio | -0.394952 | Information_Annualized | -1.378293 | FamaBeta | 0.791547 |
| Volatility_Annualized | 0.138993 | VaR_Loss | 0.012648 | CAPMAlpha | -0.000292 | MSquaredExcess | -0.269998 |
| MaximumDrawdown | 0.317810 | ES_Loss | 0.018626 | JensenAlpha | -0.079647 | NetSelectivity | -0.262590 |
| AverageDrawdown | 0.069906 | DownsideDeviation | 0.005782 | Treynor_Daily | 0.040102 | Selectivity | -0.079647 |
| AverageDrawdownLength | 149.600000 | DrawdownDeviation | 0.011592 | Treynor_Annualized | 9.689265 | SpecificRisk | 0.138893 |
| AverageRecoveryTime | 2.600000 | Rachev | 1.213892 | Modigliani | -0.000378 | SystematicRisk | -0.001478 |
| Sharpe_Daily | -0.034203 | AdjustedSharpe | -0.479708 | TrackingError_Daily | 0.014180 | TotalRisk | 0.138901 |
| Sharpe_Annualized | -0.542953 | Skewness | 0.734623 | TrackingError_Annualized | 0.225105 | UpCapture | -0.077199 |
| Sharpe_VaR | -0.023678 | Kurtosis | 7.071013 | M2Sortino | -0.083045 | UpNumber | 0.339450 |
| Sharpe_ES | -0.016078 | UpsidePotential | 0.475464 | Appraisal | -0.573439 | UpPercent | 0.149083 |
| Sortino | -0.051795 | UpsideRisk | 0.006574 | CAPMBeta | -0.008419 | DownCapture | -0.008574 |
| Calmar | -0.256669 | BernardoLedoit | 0.901766 | ActiveReturn | -0.310261 | DownNumber | 0.471698 |
| Omega | 0.901766 | DRatio | 1.524267 | OmegaExcessReturn | -0.114675 | DownPercent | 0.789308 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.779661</td><td>0.008475</td></tr><tr><td>OUT</td><td>91</td><td>92</td><td>+1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.163802</td><td>0.002938</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.165712</td><td>0.002296</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tkm1t">
<summary><strong>TKM1T — TKM Grupp</strong> | HOLD | target 327 shares | priority 16</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 288 | 327 | +39 | 19.89% | EUR 9.1000 | 0.0619 | 29 / 22 | 42.63 | Bearish | Inside bands | HOLD | 2026-08-28 |

![TKM1T complete technical history](figures/technical_analysis/TKM1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![TKM1T combined technical indicators](figures/stock_profiles/TKM1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000048 | Sterling | -0.062737 | Hurst | 0.417088 | BetaCoSkewness | -1.671872 |
| GeometricReturn | -0.000068 | Burke | -0.104562 | Kappa | -0.004604 | BetaCoKurtosis | 0.036864 |
| AnnualizedReturn_Arithmetic | -0.012162 | Martin | -0.147483 | Kelly | -1.255266 | CDD | 0.021416 |
| AnnualizedReturn_Geometric | -0.016943 | UlcerIndex | 0.114883 | Prospect | -0.404644 | CoSkewness | -0.000000 |
| CumulativeReturn | -0.049845 | PainIndex | 0.105668 | Information_Daily | -0.071791 | CoKurtosis | 0.000000 |
| Volatility | 0.006201 | PainRatio | -0.160345 | Information_Annualized | -1.254642 | FamaBeta | 0.560557 |
| Volatility_Annualized | 0.098432 | VaR_Loss | 0.007024 | CAPMAlpha | -0.000080 | MSquaredExcess | -0.210725 |
| MaximumDrawdown | 0.170070 | ES_Loss | 0.015606 | JensenAlpha | -0.025078 | NetSelectivity | -0.145137 |
| AverageDrawdown | 0.021201 | DownsideDeviation | 0.005104 | Treynor_Daily | -0.001906 | Selectivity | -0.025078 |
| AverageDrawdownLength | 74.300000 | DrawdownDeviation | 0.006232 | Treynor_Annualized | -0.476317 | SpecificRisk | 0.098168 |
| AverageRecoveryTime | 40.000000 | Rachev | 0.888236 | Modigliani | -0.000086 | SystematicRisk | 0.006246 |
| Sharpe_Daily | -0.007783 | AdjustedSharpe | -0.130610 | TrackingError_Daily | 0.012333 | TotalRisk | 0.098367 |
| Sharpe_Annualized | -0.123558 | Skewness | -4.151940 | TrackingError_Annualized | 0.195779 | UpCapture | 0.023213 |
| Sharpe_VaR | -0.006871 | Kurtosis | 47.689790 | M2Sortino | -0.017314 | UpNumber | 0.396789 |
| Sharpe_ES | -0.003093 | UpsidePotential | 0.306695 | Appraisal | -0.255460 | UpPercent | 0.139908 |
| Sortino | -0.009456 | UpsideRisk | 0.003514 | CAPMBeta | 0.035572 | DownCapture | 0.043554 |
| Calmar | -0.099626 | BernardoLedoit | 0.970092 | ActiveReturn | -0.245633 | DownNumber | 0.411950 |
| Omega | 0.970092 | DRatio | 1.003342 | OmegaExcessReturn | -0.046166 | DownPercent | 0.874214 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.728814</td><td>-0.042373</td></tr><tr><td>OUT</td><td>91</td><td>86</td><td>-5</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.217635</td><td>0.056770</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.180924</td><td>0.017507</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-eft1t">
<summary><strong>EFT1T — EfTEN Real Estate Fund</strong> | HOLD | target 17 shares | priority 17</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 17 | +17 | 2.30% | EUR 19.4000 | 0.1150 | 36 / 23 | 43.20 | Bearish | Inside bands | HOLD | 2026-08-28 |

![EFT1T complete technical history](figures/technical_analysis/EFT1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![EFT1T combined technical indicators](figures/stock_profiles/EFT1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000063 | Sterling | -0.067658 | Hurst | 0.388273 | BetaCoSkewness | -1.120956 |
| GeometricReturn | -0.000082 | Burke | -0.129214 | Kappa | -0.007768 | BetaCoKurtosis | -0.031388 |
| AnnualizedReturn_Arithmetic | -0.015907 | Martin | -0.126159 | Kelly | -1.687710 | CDD | 0.115536 |
| AnnualizedReturn_Geometric | -0.020430 | UlcerIndex | 0.161942 | Prospect | -0.499101 | CoSkewness | -0.000000 |
| CumulativeReturn | -0.059894 | PainIndex | 0.153465 | Information_Daily | -0.071517 | CoKurtosis | -0.000000 |
| Volatility | 0.006116 | PainRatio | -0.133128 | Information_Annualized | -1.247719 | FamaBeta | 0.552871 |
| Volatility_Annualized | 0.097082 | VaR_Loss | 0.009514 | CAPMAlpha | -0.000069 | MSquaredExcess | -0.216200 |
| MaximumDrawdown | 0.201964 | ES_Loss | 0.015448 | JensenAlpha | -0.021895 | NetSelectivity | -0.146866 |
| AverageDrawdown | 0.045633 | DownsideDeviation | 0.004677 | Treynor_Daily | -0.012786 | Selectivity | -0.021895 |
| AverageDrawdownLength | 147.000000 | DrawdownDeviation | 0.007374 | Treynor_Annualized | -3.189276 | SpecificRisk | 0.097011 |
| AverageRecoveryTime | 80.800000 | Rachev | 0.875056 | Modigliani | -0.000114 | SystematicRisk | 0.001125 |
| Sharpe_Daily | -0.010321 | AdjustedSharpe | -0.167524 | TrackingError_Daily | 0.012577 | TotalRisk | 0.097018 |
| Sharpe_Annualized | -0.163847 | Skewness | -1.382197 | TrackingError_Annualized | 0.199660 | UpCapture | -0.005516 |
| Sharpe_VaR | -0.006635 | Kurtosis | 16.679067 | M2Sortino | -0.021051 | UpNumber | 0.332569 |
| Sharpe_ES | -0.004086 | UpsidePotential | 0.374987 | Appraisal | -0.225699 | UpPercent | 0.137615 |
| Sortino | -0.013496 | UpsideRisk | 0.003935 | CAPMBeta | 0.006406 | DownCapture | 0.011748 |
| Calmar | -0.101159 | BernardoLedoit | 0.965259 | ActiveReturn | -0.249120 | DownNumber | 0.301887 |
| Omega | 0.965259 | DRatio | 0.996650 | OmegaExcessReturn | -0.047208 | DownPercent | 0.874214 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.771186</td><td>0.000000</td></tr><tr><td>OUT</td><td>91</td><td>91</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.163141</td><td>0.002276</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.164302</td><td>0.000886</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tel1l">
<summary><strong>TEL1L — Telia Lietuva</strong> | HOLD | target 32 shares | priority 18</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 32 | +32 | 0.48% | EUR 2.2200 | 0.1681 | 43 / 24 | 45.64 | Bearish | Inside bands | HOLD | 2026-08-28 |

![TEL1L complete technical history](figures/technical_analysis/TEL1L_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![TEL1L combined technical indicators](figures/stock_profiles/TEL1L_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000149 | Sterling | 0.100144 | Hurst | 0.379338 | BetaCoSkewness | -2.565127 |
| GeometricReturn | 0.000127 | Burke | 0.204657 | Kappa | 0.019352 | BetaCoKurtosis | -0.028307 |
| AnnualizedReturn_Arithmetic | 0.037591 | Martin | 0.221097 | Kelly | 3.426255 | CDD | 0.049102 |
| AnnualizedReturn_Geometric | 0.032623 | UlcerIndex | 0.147551 | Prospect | -0.473444 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.100817 | PainIndex | 0.125364 | Information_Daily | -0.054410 | CoKurtosis | -0.000000 |
| Volatility | 0.006598 | PainRatio | 0.260227 | Information_Annualized | -0.973675 | FamaBeta | 0.596511 |
| Volatility_Annualized | 0.104745 | VaR_Loss | 0.009356 | CAPMAlpha | 0.000131 | MSquaredExcess | -0.141614 |
| MaximumDrawdown | 0.225761 | ES_Loss | 0.015321 | JensenAlpha | 0.027961 | NetSelectivity | -0.103792 |
| AverageDrawdown | 0.036650 | DownsideDeviation | 0.004604 | Treynor_Daily | 0.006249 | Selectivity | 0.027961 |
| AverageDrawdownLength | 66.545455 | DrawdownDeviation | 0.008616 | Treynor_Annualized | 1.600315 | SpecificRisk | 0.104615 |
| AverageRecoveryTime | 34.727273 | Rachev | 1.075976 | Modigliani | 0.000250 | SystematicRisk | 0.003580 |
| Sharpe_Daily | 0.022608 | AdjustedSharpe | 0.333757 | TrackingError_Daily | 0.012685 | TotalRisk | 0.104676 |
| Sharpe_Annualized | 0.358884 | Skewness | -0.329646 | TrackingError_Annualized | 0.201367 | UpCapture | 0.051596 |
| Sharpe_VaR | 0.015944 | Kurtosis | 12.372385 | M2Sortino | 0.034150 | UpNumber | 0.302752 |
| Sharpe_ES | 0.009737 | UpsidePotential | 0.437074 | Appraisal | 0.267278 | UpPercent | 0.178899 |
| Sortino | 0.032399 | UpsideRisk | 0.004723 | CAPMBeta | 0.020385 | DownCapture | 0.020832 |
| Calmar | 0.144503 | BernardoLedoit | 1.080062 | ActiveReturn | -0.196066 | DownNumber | 0.301887 |
| Omega | 1.080062 | DRatio | 0.934140 | OmegaExcessReturn | 0.006262 | DownPercent | 0.861635 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.754237</td><td>-0.016949</td></tr><tr><td>OUT</td><td>91</td><td>89</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.163438</td><td>0.002573</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.163732</td><td>0.000315</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-cpa1t">
<summary><strong>CPA1T — Coop Pank</strong> | HOLD | target 80 shares | priority 19</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 80 | +80 | 1.24% | EUR 2.3300 | 0.0531 | 30 / 24 | 56.23 | Bearish | Inside bands | HOLD | 2026-08-28 |

![CPA1T complete technical history](figures/technical_analysis/CPA1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![CPA1T combined technical indicators](figures/stock_profiles/CPA1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000131 | Sterling | -0.091215 | Hurst | 0.327174 | BetaCoSkewness | -2.462721 |
| GeometricReturn | -0.000180 | Burke | -0.164865 | Kappa | -0.014072 | BetaCoKurtosis | 0.012465 |
| AnnualizedReturn_Arithmetic | -0.032938 | Martin | -0.144765 | Kelly | -1.330014 | CDD | 0.275115 |
| AnnualizedReturn_Geometric | -0.044259 | UlcerIndex | 0.305731 | Prospect | -0.668262 | CoSkewness | -0.000000 |
| CumulativeReturn | -0.126674 | PainIndex | 0.281857 | Information_Daily | -0.069339 | CoKurtosis | 0.000000 |
| Volatility | 0.009913 | PainRatio | -0.157027 | Information_Annualized | -1.195555 | FamaBeta | 0.896196 |
| Volatility_Annualized | 0.157369 | VaR_Loss | 0.015946 | CAPMAlpha | -0.000180 | MSquaredExcess | -0.226318 |
| MaximumDrawdown | 0.385217 | ES_Loss | 0.021647 | JensenAlpha | -0.057154 | NetSelectivity | -0.249209 |
| AverageDrawdown | 0.106368 | DownsideDeviation | 0.006595 | Treynor_Daily | -0.003186 | Selectivity | -0.057154 |
| AverageDrawdownLength | 187.000000 | DrawdownDeviation | 0.014058 | Treynor_Annualized | -0.784953 | SpecificRisk | 0.156953 |
| AverageRecoveryTime | 45.000000 | Rachev | 1.161109 | Modigliani | -0.000146 | SystematicRisk | 0.009901 |
| Sharpe_Daily | -0.013185 | AdjustedSharpe | -0.204274 | TrackingError_Daily | 0.014382 | TotalRisk | 0.157265 |
| Sharpe_Annualized | -0.209303 | Skewness | 0.543429 | TrackingError_Annualized | 0.228303 | UpCapture | 0.032163 |
| Sharpe_VaR | -0.008197 | Kurtosis | 5.777861 | M2Sortino | -0.044567 | UpNumber | 0.373853 |
| Sharpe_ES | -0.006038 | UpsidePotential | 0.498935 | Appraisal | -0.364144 | UpPercent | 0.213303 |
| Sortino | -0.019819 | UpsideRisk | 0.007394 | CAPMBeta | 0.056384 | DownCapture | 0.079258 |
| Calmar | -0.114894 | BernardoLedoit | 0.961795 | ActiveReturn | -0.272948 | DownNumber | 0.474843 |
| Omega | 0.961795 | DRatio | 1.342664 | OmegaExcessReturn | -0.082018 | DownPercent | 0.764151 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.771186</td><td>0.000000</td></tr><tr><td>OUT</td><td>91</td><td>91</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.162541</td><td>0.001676</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.164694</td><td>0.001278</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-mode">
<summary><strong>MODE — Modera</strong> | HOLD | target 9 shares | priority 20</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 9 | +9 | 0.38% | EUR 5.9000 | 0.0265 | 27 / 24 | 48.74 | Bearish | Inside bands | HOLD | 2026-08-28 |

![MODE complete technical history](figures/technical_analysis/MODE_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![MODE combined technical indicators](figures/stock_profiles/MODE_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000620 | Sterling | 0.199741 | Hurst | 0.401635 | BetaCoSkewness | -2.118531 |
| GeometricReturn | 0.000344 | Burke | 0.210034 | Kappa | 0.030304 | BetaCoKurtosis | 0.039436 |
| AnnualizedReturn_Arithmetic | 0.156194 | Martin | 0.663255 | Kelly | 1.087055 | CDD | 0.125234 |
| AnnualizedReturn_Geometric | 0.090636 | UlcerIndex | 0.136653 | Prospect | -0.532100 | CoSkewness | -0.000000 |
| CumulativeReturn | 0.296404 | PainIndex | 0.110096 | Information_Daily | -0.017547 | CoKurtosis | 0.000000 |
| Volatility | 0.023878 | PainRatio | 0.823245 | Information_Annualized | -0.322456 | FamaBeta | 2.158692 |
| Volatility_Annualized | 0.379059 | VaR_Loss | 0.032039 | CAPMAlpha | 0.000745 | MSquaredExcess | -0.151953 |
| MaximumDrawdown | 0.353767 | ES_Loss | 0.046146 | JensenAlpha | 0.123180 | NetSelectivity | -0.403034 |
| AverageDrawdown | 0.064277 | DownsideDeviation | 0.013694 | Treynor_Daily | -0.002420 | Selectivity | 0.123180 |
| AverageDrawdownLength | 62.333333 | DrawdownDeviation | 0.014601 | Treynor_Annualized | -0.636895 | SpecificRisk | 0.377984 |
| AverageRecoveryTime | 20.416667 | Rachev | 1.321910 | Modigliani | 0.000287 | SystematicRisk | -0.024989 |
| Sharpe_Daily | 0.025957 | AdjustedSharpe | 0.424602 | TrackingError_Daily | 0.026970 | TotalRisk | 0.378809 |
| Sharpe_Annualized | 0.412058 | Skewness | 2.334015 | TrackingError_Annualized | 0.428131 | UpCapture | -0.149686 |
| Sharpe_VaR | 0.019346 | Kurtosis | 21.354217 | M2Sortino | 0.086238 | UpNumber | 0.316514 |
| Sharpe_ES | 0.013432 | UpsidePotential | 0.507155 | Appraisal | 0.325888 | UpPercent | 0.236239 |
| Sortino | 0.045264 | UpsideRisk | 0.019552 | CAPMBeta | -0.142309 | DownCapture | -0.372276 |
| Calmar | 0.256202 | BernardoLedoit | 1.097997 | ActiveReturn | -0.138053 | DownNumber | 0.405660 |
| Omega | 1.097997 | DRatio | 1.098570 | OmegaExcessReturn | 0.012235 | DownPercent | 0.723270 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.771186</td><td>0.000000</td></tr><tr><td>OUT</td><td>91</td><td>91</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.159915</td><td>-0.000949</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.162786</td><td>-0.000631</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tal1t">
<summary><strong>TAL1T — Tallink Grupp</strong> | HOLD | target 756 shares | priority 21</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 700 | 756 | +56 | 3.13% | EUR 0.6200 | 0.0177 | 26 / 24 | 51.82 | Bullish | Inside bands | HOLD | 2026-08-28 |

![TAL1T complete technical history](figures/technical_analysis/TAL1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![TAL1T combined technical indicators](figures/stock_profiles/TAL1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000186 | Sterling | 0.130860 | Hurst | 0.365714 | BetaCoSkewness | -3.680137 |
| GeometricReturn | 0.000140 | Burke | 0.147077 | Kappa | 0.017653 | BetaCoKurtosis | -0.065405 |
| AnnualizedReturn_Arithmetic | 0.046837 | Martin | 0.410319 | Kelly | 2.004552 | CDD | 0.071457 |
| AnnualizedReturn_Geometric | 0.035797 | UlcerIndex | 0.087243 | Prospect | -0.511984 | CoSkewness | -0.000001 |
| CumulativeReturn | 0.110972 | PainIndex | 0.074668 | Information_Daily | -0.047277 | CoKurtosis | -0.000000 |
| Volatility | 0.009629 | PainRatio | 0.479418 | Information_Annualized | -0.847278 | FamaBeta | 0.870506 |
| Volatility_Annualized | 0.152858 | VaR_Loss | 0.013769 | CAPMAlpha | 0.000152 | MSquaredExcess | -0.152656 |
| MaximumDrawdown | 0.173554 | ES_Loss | 0.023856 | JensenAlpha | 0.027007 | NetSelectivity | -0.163278 |
| AverageDrawdown | 0.029449 | DownsideDeviation | 0.006623 | Treynor_Daily | 0.003631 | Selectivity | 0.027007 |
| AverageDrawdownLength | 41.166667 | DrawdownDeviation | 0.008608 | Treynor_Annualized | 0.931339 | SpecificRisk | 0.152608 |
| AverageRecoveryTime | 21.277778 | Rachev | 1.053652 | Modigliani | 0.000214 | SystematicRisk | 0.006749 |
| Sharpe_Daily | 0.019302 | AdjustedSharpe | 0.299051 | TrackingError_Daily | 0.014341 | TotalRisk | 0.152757 |
| Sharpe_Annualized | 0.306412 | Skewness | 0.092191 | TrackingError_Annualized | 0.227661 | UpCapture | 0.060333 |
| Sharpe_VaR | 0.013499 | Kurtosis | 10.344557 | M2Sortino | 0.036221 | UpNumber | 0.383028 |
| Sharpe_ES | 0.007791 | UpsidePotential | 0.460100 | Appraisal | 0.176972 | UpPercent | 0.176606 |
| Sortino | 0.028063 | UpsideRisk | 0.006983 | CAPMBeta | 0.038436 | DownCapture | 0.020975 |
| Calmar | 0.206261 | BernardoLedoit | 1.064954 | ActiveReturn | -0.192892 | DownNumber | 0.418239 |
| Omega | 1.064954 | DRatio | 1.020660 | OmegaExcessReturn | -0.002123 | DownPercent | 0.820755 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.771186</td><td>0.000000</td></tr><tr><td>OUT</td><td>91</td><td>91</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.167762</td><td>0.006897</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.165972</td><td>0.002555</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tve1t">
<summary><strong>TVE1T — Tallinna Vesi</strong> | HOLD | target 57 shares | priority 22</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0 | 57 | +57 | 4.15% | EUR 10.8500 | 0.0177 | 28 / 26 | 34.52 | Bearish | Inside bands | HOLD | 2026-08-28 |

![TVE1T complete technical history](figures/technical_analysis/TVE1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![TVE1T combined technical indicators](figures/stock_profiles/TVE1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000310 | Sterling | -0.201495 | Hurst | 0.366349 | BetaCoSkewness | 0.061649 |
| GeometricReturn | -0.000332 | Burke | -0.412768 | Kappa | -0.035953 | BetaCoKurtosis | 0.024684 |
| AnnualizedReturn_Arithmetic | -0.078108 | Martin | -0.317624 | Kelly | -7.223233 | CDD | 0.195220 |
| AnnualizedReturn_Geometric | -0.080163 | UlcerIndex | 0.252382 | Prospect | -0.569150 | CoSkewness | 0.000000 |
| CumulativeReturn | -0.221208 | PainIndex | 0.235070 | Information_Daily | -0.091195 | CoKurtosis | 0.000000 |
| Volatility | 0.006551 | PainRatio | -0.341015 | Information_Annualized | -1.544032 | FamaBeta | 0.592195 |
| Volatility_Annualized | 0.103987 | VaR_Loss | 0.009632 | CAPMAlpha | -0.000333 | MSquaredExcess | -0.296295 |
| MaximumDrawdown | 0.297838 | ES_Loss | 0.017445 | JensenAlpha | -0.086229 | NetSelectivity | -0.215591 |
| AverageDrawdown | 0.077168 | DownsideDeviation | 0.005206 | Treynor_Daily | -0.012498 | Selectivity | -0.086229 |
| AverageDrawdownLength | 187.000000 | DrawdownDeviation | 0.010849 | Treynor_Annualized | -3.022038 | SpecificRisk | 0.103814 |
| AverageRecoveryTime | 102.500000 | Rachev | 0.767831 | Modigliani | -0.000523 | SystematicRisk | 0.004658 |
| Sharpe_Daily | -0.047316 | AdjustedSharpe | -0.702177 | TrackingError_Daily | 0.012601 | TotalRisk | 0.103919 |
| Sharpe_Annualized | -0.751125 | Skewness | -1.446544 | TrackingError_Annualized | 0.200029 | UpCapture | -0.033885 |
| Sharpe_VaR | -0.032181 | Kurtosis | 13.475446 | M2Sortino | -0.082400 | UpNumber | 0.284404 |
| Sharpe_ES | -0.017767 | UpsidePotential | 0.348158 | Appraisal | -0.830607 | UpPercent | 0.121560 |
| Sortino | -0.059534 | UpsideRisk | 0.003981 | CAPMBeta | 0.026526 | DownCapture | 0.049120 |
| Calmar | -0.269148 | BernardoLedoit | 0.853972 | ActiveReturn | -0.308852 | DownNumber | 0.320755 |
| Omega | 0.853972 | DRatio | 1.203830 | OmegaExcessReturn | -0.109970 | DownPercent | 0.823899 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.771186</td><td>0.000000</td></tr><tr><td>OUT</td><td>91</td><td>91</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.160574</td><td>-0.000291</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.163677</td><td>0.000260</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tsm1t">
<summary><strong>TSM1T — Tallinna Sadam</strong> | HOLD | target 330 shares | priority 23</summary>

| Current shares | Target shares | Change | Weight | Last price | Individual netSD | OUT / IN | RSI(14) | MACD state | Bollinger state | Technical decision | Observation date |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 330 | 330 | +0 | 2.69% | EUR 1.2220 | -0.0177 | 28 / 30 | 30.19 | Bearish | Inside bands | HOLD | 2026-08-28 |

![TSM1T complete technical history](figures/technical_analysis/TSM1T_technical.png)

<details markdown="1">
<summary>Bollinger Bands, RSI(14) and MACD — last 126 observations (approximately six months)</summary>

![TSM1T combined technical indicators](figures/stock_profiles/TSM1T_technicals_6m.png)

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
<summary>All 72 PerformanceAnalytics measures</summary>

| Measure | Value | Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | -0.000133 | Sterling | -0.104646 | Hurst | 0.376007 | BetaCoSkewness | -1.257074 |
| GeometricReturn | -0.000160 | Burke | -0.187476 | Kappa | -0.013175 | BetaCoKurtosis | -0.045930 |
| AnnualizedReturn_Arithmetic | -0.033543 | Martin | -0.193218 | Kelly | -2.471135 | CDD | 0.204455 |
| AnnualizedReturn_Geometric | -0.039580 | UlcerIndex | 0.204845 | Prospect | -0.529670 | CoSkewness | -0.000000 |
| CumulativeReturn | -0.113818 | PainIndex | 0.179389 | Information_Daily | -0.072945 | CoKurtosis | -0.000000 |
| Volatility | 0.007339 | PainRatio | -0.220636 | Information_Annualized | -1.260667 | FamaBeta | 0.663495 |
| Volatility_Annualized | 0.116508 | VaR_Loss | 0.009580 | CAPMAlpha | -0.000121 | MSquaredExcess | -0.234675 |
| MaximumDrawdown | 0.278227 | ES_Loss | 0.018145 | JensenAlpha | -0.036334 | NetSelectivity | -0.191314 |
| AverageDrawdown | 0.065627 | DownsideDeviation | 0.005637 | Treynor_Daily | 0.011290 | Selectivity | -0.036334 |
| AverageDrawdownLength | 106.285714 | DrawdownDeviation | 0.011779 | Treynor_Annualized | 2.788504 | SpecificRisk | 0.116404 |
| AverageRecoveryTime | 35.857143 | Rachev | 0.948434 | Modigliani | -0.000201 | SystematicRisk | -0.002492 |
| Sharpe_Daily | -0.018136 | AdjustedSharpe | -0.294847 | TrackingError_Daily | 0.013405 | TotalRisk | 0.116430 |
| Sharpe_Annualized | -0.287906 | Skewness | -1.672096 | TrackingError_Annualized | 0.212799 | UpCapture | -0.031784 |
| Sharpe_VaR | -0.013894 | Kurtosis | 19.250328 | M2Sortino | -0.040305 | UpNumber | 0.399083 |
| Sharpe_ES | -0.007336 | UpsidePotential | 0.381236 | Appraisal | -0.312136 | UpPercent | 0.178899 |
| Sortino | -0.023611 | UpsideRisk | 0.004694 | CAPMBeta | -0.014194 | DownCapture | -0.000623 |
| Calmar | -0.142257 | BernardoLedoit | 0.941679 | ActiveReturn | -0.268269 | DownNumber | 0.421384 |
| Omega | 0.941679 | DRatio | 1.094005 | OmegaExcessReturn | -0.071857 | DownPercent | 0.839623 |

</details>

<details markdown="1">
<summary>Effect of removing this share from curent_update_baltic</summary>

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.771186</td><td>0.771186</td><td>0.000000</td></tr><tr><td>OUT</td><td>91</td><td>91</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.160865</td><td>1.165971</td><td>0.005107</td></tr><tr><td>Sortino ratio</td><td>0.163417</td><td>0.167124</td><td>0.003707</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

</details>

</details>

## Leave-one-out portfolio sensitivity

Each scenario removes one share from curent_update_baltic and proportionally rescales the remaining weights. Positive delta means that the ratio improves after removal; negative delta means that the removed share was beneficial for that criterion.

**Main result.** Removing **LHV1T** produces the largest netSD change (+0.008475); removing **TKM1T** gives the largest Rachev improvement (+0.056770); removing **TKM1T** gives the largest Sortino improvement (+0.017507). These are sensitivity results, not automatically new trade recommendations, because the three criteria can move in opposite directions.

<details markdown="1">
<summary><strong>Open complete netSD, Rachev and Sortino sensitivity table</strong></summary>

| Removed share | netSD | Δ netSD | Rachev | Δ Rachev | Sortino | Δ Sortino |
| --- | --- | --- | --- | --- | --- | --- |
| None (baseline) | 0.771186 | 0.000000 | 1.160865 | 0.000000 | 0.163417 | 0.000000 |
| AKO1L | 0.762712 | -0.008475 | 1.165920 | 0.005056 | 0.163847 | 0.000430 |
| APG1L | 0.745763 | -0.025424 | 1.182541 | 0.021676 | 0.152133 | -0.011284 |
| CPA1T | 0.771186 | 0.000000 | 1.162541 | 0.001676 | 0.164694 | 0.001278 |
| EFT1T | 0.771186 | 0.000000 | 1.163141 | 0.002276 | 0.164302 | 0.000886 |
| GRG1L | 0.728814 | -0.042373 | 1.156594 | -0.004271 | 0.157624 | -0.005793 |
| HAE1T | 0.745763 | -0.025424 | 1.147725 | -0.013140 | 0.168476 | 0.005059 |
| IGN1L | 0.771186 | 0.000000 | 1.160126 | -0.000738 | 0.164062 | 0.000645 |
| KNE1L | 0.737288 | -0.033898 | 1.166501 | 0.005636 | 0.152274 | -0.011143 |
| LHV1T | 0.779661 | 0.008475 | 1.163802 | 0.002938 | 0.165712 | 0.002296 |
| MODE | 0.771186 | 0.000000 | 1.159915 | -0.000949 | 0.162786 | -0.000631 |
| MOLNR | 0.745763 | -0.025424 | 1.115048 | -0.045817 | 0.150937 | -0.012480 |
| MRK1T | 0.711864 | -0.059322 | 1.145156 | -0.015708 | 0.147815 | -0.015602 |
| PZV1L | 0.754237 | -0.016949 | 1.166406 | 0.005541 | 0.159923 | -0.003494 |
| ROE1L | 0.762712 | -0.008475 | 1.162899 | 0.002034 | 0.162939 | -0.000478 |
| RSU1L | 0.762712 | -0.008475 | 1.186131 | 0.025266 | 0.165766 | 0.002349 |
| SAF1R | 0.779661 | 0.008475 | 1.210305 | 0.049440 | 0.162984 | -0.000433 |
| TAL1T | 0.771186 | 0.000000 | 1.167762 | 0.006897 | 0.165972 | 0.002555 |
| TEL1L | 0.754237 | -0.016949 | 1.163438 | 0.002573 | 0.163732 | 0.000315 |
| TKM1T | 0.728814 | -0.042373 | 1.217635 | 0.056770 | 0.180924 | 0.017507 |
| TSM1T | 0.771186 | 0.000000 | 1.165971 | 0.005107 | 0.167124 | 0.003707 |
| TVE1T | 0.771186 | 0.000000 | 1.160574 | -0.000291 | 0.163677 | 0.000260 |
| VIRSI | 0.762712 | -0.008475 | 1.160955 | 0.000091 | 0.163898 | 0.000481 |
| VLP1L | 0.694915 | -0.076271 | 1.148027 | -0.012838 | 0.132939 | -0.030477 |

</details>



Priority 1 denotes the largest individual-share netSD ratio. Dividend columns use only official payments dated in 2025 and 2026. Annual dividend cash equals dividend per share multiplied by the target number of shares.

curent_update_baltic keeps every currently held share, permits purchases only, and uses the EUR 15,000 ceiling. Its calculated netSD is 0.817391, with OUT=94 and IN=0; the remaining cash is EUR 99.18.

<details markdown="1">
<summary><strong>Table 4. Current and optimised portfolios</strong></summary>

| Portfolio | netSD | OUT | IN | denominator | mean | SD | Historical dividends EUR | Portfolio value EUR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0.443478 | 59 | 8 | 115 | 0.000375 | 0.005654 | 1394.136000 | 8044.380051 |
| Optimised | 0.939130 | 108 | 0 | 115 | 0.000606 | 0.004354 | 1942.282198 | 15000.000000 |

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
| Baltic_NetSD | 754 | 0.000581 | 0.000338 | 0.004400 | -0.023743 | 0.026543 | -0.176364 | 9.127867 | 0.005166 | 0.009749 |
| curent_update_baltic | 754 | 0.000433 | 0.000241 | 0.004364 | -0.021193 | 0.026737 | 0.024791 | 9.637614 | 0.005049 | 0.009772 |
| SP500 | 754 | 0.000879 | 0.001368 | 0.011062 | -0.062006 | 0.097992 | 0.100965 | 14.865600 | 0.016061 | 0.025050 |

</details>


Baltic_NetSD has mean daily return 0.000581, median 0.000338 and daily standard deviation 0.004400. Its historical 95% VaR is 0.005166 and ES (CVaR) is 0.009749. VaR is the loss threshold exceeded on approximately 5% of days; ES is the average return in that adverse tail.

<details markdown="1">
<summary><strong>Figure 3. Histograms and kernel densities; every panel uses the same return-axis limits</strong></summary>

![Report figure 3](report/assets/figure-03.png)

</details>


The recalculated Baltic_NetSD maximum daily return is 0.026543. The earlier value 0.168092 on 2025-06-25 was traced to RKB1R, whose unadjusted close moved from EUR 0.107 to EUR 0.476 between common Baltic trading dates. RKB1R belongs to the Baltic Secondary List. After excluding every Secondary List share from the investable set, this observation no longer enters the portfolio return; RKB1R remains only in the reference dominance network used to calculate netSD.

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
| NetSD_training | portfolio | 0.013478 | 0.026641 | 0.000077 | 0.000077 |
| VLP1L | share | 0.021303 | 0.163122 | 0.000818 | 0.000818 |
| RKB1R | share | 0.115849 | 0.163122 | 0.000753 | 0.000753 |
| MOLNR | share | 0.115849 | 0.163122 | 0.000634 | 0.000634 |
| KNR1L | share | 0.082082 | 0.163122 | 0.000617 | 0.000617 |
| IVL1L | share | 0.034809 | 0.163122 | 0.000516 | 0.000516 |
| INC1L | share | 0.034809 | 0.163122 | 0.000453 | 0.000453 |
| KNE1L | share | 0.038186 | 0.163122 | 0.000283 | 0.000283 |
| MRK1T | share | 0.038186 | 0.163122 | 0.000173 | 0.000173 |
| APG1L | share | 0.021303 | 0.163122 | 0.000140 | 0.000140 |

</details>


These are local, right-side comparisons and must not be interpreted as SSD over the complete return domain. A positive difference H2_Baltic_NetSD(x)-H2_comparator(x) means that the comparator has the smaller, hence locally preferable, SSD component at that threshold. Among portfolios this occurs for NetSD_training. The five strongest share cases at the displayed endpoint are VLP1L, RKB1R, MOLNR, KNR1L, IVL1L. Smaller positive endpoint differences also occur for INC1L, KNE1L, MRK1T, APG1L. The table reports the threshold from which the advantage remains positive to the displayed upper endpoint. The listed shares are therefore candidates for further investment analysis, while the absence of full-support dominance means this chart alone is insufficient for an investment decision.

The result that may appear surprising in the difference figures is therefore real but local. NetSD_training has a smaller H2 component than Baltic_NetSD from x=0.012089 to the displayed right endpoint, and NetSD_full does so from x=0.016037. Neither portfolio SSD-dominates Baltic_NetSD over the complete support because the required inequality fails at smaller x values. The five strongest share-level endpoint advantages are VLP1L, RKB1R, KNR1L, IVL1L and INC1L. They deserve separate investment analysis because their upper-threshold SSD components are favourable. RKB1R remains excluded from purchase because it belongs to the Baltic Secondary List; it is retained only as a netSD reference entity. A local right-side advantage is evidence about one part of the distribution and is not full-domain SSD dominance.

<details markdown="1">
<summary><strong>Table 6. Portfolio concentration and diversification</strong></summary>

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
| Baltic_NetSD | 0.077535 | 12.897428 | 0.117867 | 21 | 2.662111 |
| curent_update_baltic | 0.085146 | 11.744587 | 0.198896 | 23 | 2.747513 |

</details>


For Baltic_NetSD, HHI=0.077535; lower is better because less capital is concentrated in a few shares. Its effective number of equally weighted positions is 12.90, the largest weight is 11.79%, and the diversification ratio is 2.662; a value above 1 means portfolio volatility is below the weighted average volatility of its components.

<details markdown="1">
<summary><strong>Figure 8. HHI concentration comparison</strong></summary>

![Report figure 26](report/assets/figure-26.png)

</details>


<details markdown="1">
<summary><strong>Table 7. netSD (net stochastic-dominance ratio) results</strong></summary>

| entity | FSD_OUT | FSD_IN | SSD_OUT | SSD_IN | TSD_OUT | TSD_IN | OUT | IN | denominator | netSD |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0 | 0 | 29 | 5 | 30 | 7 | 59 | 12 | 117 | 0.401709 |
| Markowitz_training | 0 | 0 | 32 | 2 | 32 | 2 | 64 | 4 | 117 | 0.512821 |
| MAD_training | 0 | 0 | 32 | 2 | 32 | 2 | 64 | 4 | 117 | 0.512821 |
| Minimax_training | 0 | 0 | 41 | 0 | 43 | 0 | 84 | 0 | 117 | 0.717949 |
| Robust_training | 0 | 0 | 32 | 2 | 32 | 2 | 64 | 4 | 117 | 0.512821 |
| NetSD_training | 0 | 0 | 43 | 0 | 46 | 0 | 89 | 0 | 117 | 0.760684 |
| Markowitz_full | 0 | 0 | 32 | 2 | 32 | 2 | 64 | 4 | 117 | 0.512821 |
| MAD_full | 0 | 0 | 32 | 2 | 32 | 2 | 64 | 4 | 117 | 0.512821 |
| Minimax_full | 0 | 0 | 36 | 1 | 36 | 1 | 72 | 2 | 117 | 0.598291 |
| Robust_full | 0 | 0 | 33 | 2 | 33 | 2 | 66 | 4 | 117 | 0.529915 |
| NetSD_full | 0 | 0 | 45 | 1 | 45 | 1 | 90 | 2 | 117 | 0.752137 |
| Baltic_NetSD | 0 | 0 | 54 | 0 | 54 | 0 | 108 | 0 | 117 | 0.923077 |
| curent_update_baltic | 0 | 0 | 47 | 0 | 47 | 0 | 94 | 0 | 117 | 0.803419 |

</details>


Baltic_NetSD has OUT=108 and IN=0. Dividing OUT-IN by the common network denominator 117 gives netSD=0.923077. A larger netSD is better.

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
| Baltic_NetSD | 0.031596 | 0.000554 | 0.147709 | 0.069581 | 0.005548 | 0.069802 | 0.183751 | -0.401381 |
| curent_update_baltic | 0.047269 | 0.000391 | 0.101785 | 0.068727 | 0.008300 | 0.069227 | 0.180881 | -0.641829 |
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
| CTS1L | 0 | 90 | 113 | -0.796460 | Baltic First North Foreign Shares trading list | False | False | False |
| DGR1R | 24 | 25 | 113 | -0.008850 | Baltic Main List | False | False | False |
| EFT1T | 36 | 23 | 113 | 0.115044 | Baltic Main List | True | False | True |
| EWA1L | 29 | 29 | 113 | 0.000000 | First North Baltic Share List | False | False | False |
| GRG1L | 49 | 6 | 113 | 0.380531 | Baltic Main List | True | False | True |
| HAE1T | 37 | 24 | 113 | 0.115044 | Baltic Main List | True | False | True |
| HPR1T | 17 | 64 | 113 | -0.415929 | Baltic Main List | False | False | False |
| IDX1R | 17 | 54 | 113 | -0.327434 | Baltic Main List | False | False | False |
| IGN1L | 56 | 11 | 113 | 0.398230 | Baltic Main List | True | False | True |
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
| RKB1R | 1 | 0 | 113 | 0.008850 | Baltic Secondary List | True | True | False |
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


The curve is the single long-only Markowitz efficient frontier calculated from all 56 eligible shares. Shares and previously formed portfolios are points. Baltic_NetSD is highlighted in red because it maximises the stochastic-dominance objective rather than variance, so it need not lie on the Markowitz curve.

<details markdown="1">
<summary><strong>Figure 10. Cumulative returns, daily returns and drawdowns</strong></summary>

![Report figure 28](report/assets/figure-28.png)

</details>


<details markdown="1">
<summary><strong>Table 9. Complete PerformanceAnalytics comparison</strong></summary>

| Measure | Current | Markowitz_training | MAD_training | Minimax_training | Robust_training | NetSD_training | Markowitz_full | MAD_full | Minimax_full | Robust_full | NetSD_full | Baltic_NetSD | curent_update_baltic |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| ArithmeticReturn | 0.000407 | 0.000281 | 0.000289 | 0.000619 | 0.000354 | 0.000680 | 0.000392 | 0.000398 | 0.000480 | 0.000395 | 0.000624 | 0.000581 | 0.000433 |
| GeometricReturn | 0.000390 | 0.000271 | 0.000279 | 0.000603 | 0.000343 | 0.000663 | 0.000382 | 0.000388 | 0.000466 | 0.000385 | 0.000610 | 0.000572 | 0.000423 |
| AnnualizedReturn_Arithmetic | 0.102550 | 0.070824 | 0.072744 | 0.155939 | 0.089138 | 0.171390 | 0.098719 | 0.100296 | 0.120984 | 0.099563 | 0.157293 | 0.146521 | 0.109113 |
| AnnualizedReturn_Geometric | 0.103335 | 0.070677 | 0.072730 | 0.163971 | 0.090323 | 0.181757 | 0.100954 | 0.102608 | 0.124538 | 0.101728 | 0.166221 | 0.154935 | 0.112595 |
| CumulativeReturn | 0.342094 | 0.226705 | 0.233756 | 0.575080 | 0.295290 | 0.648194 | 0.333449 | 0.339451 | 0.420751 | 0.336254 | 0.584211 | 0.538779 | 0.376079 |
| Volatility | 0.005773 | 0.004476 | 0.004477 | 0.005683 | 0.004587 | 0.005876 | 0.004475 | 0.004540 | 0.005340 | 0.004596 | 0.005256 | 0.004400 | 0.004364 |
| Volatility_Annualized | 0.091642 | 0.071054 | 0.071078 | 0.090219 | 0.072824 | 0.093282 | 0.071039 | 0.072067 | 0.084769 | 0.072954 | 0.083429 | 0.069848 | 0.069272 |
| MaximumDrawdown | 0.202906 | 0.170192 | 0.166449 | 0.157736 | 0.151701 | 0.114377 | 0.143065 | 0.138179 | 0.186881 | 0.132771 | 0.131017 | 0.057596 | 0.118208 |
| AverageDrawdown | 0.025469 | 0.019669 | 0.024326 | 0.014763 | 0.017239 | 0.018675 | 0.017643 | 0.018183 | 0.014914 | 0.017957 | 0.015602 | 0.008371 | 0.011936 |
| AverageDrawdownLength | 55.461538 | 51.857143 | 65.727273 | 20.911765 | 34.380952 | 26.576923 | 37.210526 | 39.000000 | 27.692308 | 44.312500 | 24.821429 | 13.529412 | 24.379310 |
| AverageRecoveryTime | 29.692308 | 28.357143 | 36.181818 | 11.558824 | 13.809524 | 15.500000 | 14.526316 | 15.111111 | 17.153846 | 21.437500 | 14.750000 | 6.333333 | 14.137931 |
| Sharpe_Daily | 0.070492 | 0.062791 | 0.064471 | 0.108883 | 0.077106 | 0.115741 | 0.087540 | 0.087670 | 0.089906 | 0.085970 | 0.118766 | 0.132143 | 0.099224 |
| Sharpe_Annualized | 1.119033 | 0.996770 | 1.023446 | 1.728460 | 1.224019 | 1.837330 | 1.389649 | 1.391712 | 1.427221 | 1.364738 | 1.885345 | 2.097712 | 1.575134 |
| Sharpe_VaR | 0.063218 | 0.047693 | 0.052024 | 0.084465 | 0.061485 | 0.092984 | 0.066397 | 0.070684 | 0.068176 | 0.071441 | 0.094257 | 0.112540 | 0.085751 |
| Sharpe_ES | 0.031171 | 0.026852 | 0.027327 | 0.050547 | 0.033840 | 0.056387 | 0.037780 | 0.037525 | 0.040094 | 0.036520 | 0.053478 | 0.059640 | 0.044307 |
| Sortino | 0.103322 | 0.089978 | 0.090696 | 0.175636 | 0.113343 | 0.188039 | 0.126822 | 0.124911 | 0.138998 | 0.121638 | 0.180686 | 0.204798 | 0.151709 |
| Calmar | 0.509274 | 0.415279 | 0.436951 | 1.039527 | 0.595400 | 1.589095 | 0.705654 | 0.742575 | 0.666402 | 0.766189 | 1.268702 | 2.690011 | 0.952512 |
| Omega | 1.253802 | 1.207409 | 1.218241 | 1.377407 | 1.260146 | 1.408378 | 1.298163 | 1.305293 | 1.300715 | 1.301546 | 1.420607 | 1.474334 | 1.337922 |
| Sterling | 0.341144 | 0.261581 | 0.272960 | 0.636196 | 0.358849 | 0.847835 | 0.415339 | 0.430803 | 0.434110 | 0.437030 | 0.719520 | 0.983112 | 0.515997 |
| Burke | 0.711394 | 0.626776 | 0.642660 | 1.265723 | 0.799609 | 1.363583 | 0.914138 | 0.926048 | 0.960507 | 0.903216 | 1.321467 | 1.471660 | 1.025542 |
| Martin | 0.985147 | 0.743619 | 0.807360 | 2.110690 | 1.121867 | 3.631643 | 1.386084 | 1.525674 | 1.222933 | 1.655375 | 2.635455 | 8.134404 | 1.942496 |
| UlcerIndex | 0.104893 | 0.095045 | 0.090084 | 0.077686 | 0.080511 | 0.050048 | 0.072834 | 0.067254 | 0.101835 | 0.061453 | 0.063071 | 0.019047 | 0.057964 |
| PainIndex | 0.080184 | 0.077883 | 0.073764 | 0.058068 | 0.061619 | 0.038792 | 0.055230 | 0.050917 | 0.075457 | 0.046825 | 0.047385 | 0.013628 | 0.044353 |
| PainRatio | 1.288719 | 0.907476 | 0.985987 | 2.823785 | 1.465833 | 4.685408 | 1.827879 | 2.015216 | 1.650440 | 2.172525 | 3.507857 | 11.368706 | 2.538584 |
| VaR_Loss | 0.006437 | 0.005893 | 0.005549 | 0.007326 | 0.005753 | 0.007314 | 0.005900 | 0.005631 | 0.007042 | 0.005530 | 0.006622 | 0.005166 | 0.005049 |
| ES_Loss | 0.013055 | 0.010467 | 0.010563 | 0.012242 | 0.010453 | 0.012062 | 0.010369 | 0.010606 | 0.011974 | 0.010819 | 0.011672 | 0.009749 | 0.009772 |
| DownsideDeviation | 0.003939 | 0.003124 | 0.003183 | 0.003523 | 0.003121 | 0.003617 | 0.003089 | 0.003186 | 0.003454 | 0.003248 | 0.003454 | 0.002839 | 0.002854 |
| DrawdownDeviation | 0.007691 | 0.006487 | 0.006360 | 0.006733 | 0.006269 | 0.005894 | 0.005906 | 0.005779 | 0.007319 | 0.005503 | 0.005868 | 0.003913 | 0.005225 |
| Rachev | 1.101132 | 1.043589 | 1.025876 | 1.271580 | 1.114071 | 1.279184 | 1.067344 | 1.049732 | 1.175661 | 1.049030 | 1.167225 | 1.248014 | 1.164906 |
| AdjustedSharpe | 0.196866 | 0.614905 | 0.474911 | 1.081194 | 0.604269 | -0.056304 | 0.349252 | 0.023852 | 0.972030 | -0.040823 | -0.522513 | -0.388505 | 0.504565 |
| Skewness | -0.054536 | -0.397936 | -0.720441 | 0.377474 | -0.284450 | 0.625424 | -0.517818 | -0.804959 | 0.181686 | -0.927740 | -0.270819 | -0.176364 | 0.024791 |
| Kurtosis | 18.599062 | 10.657233 | 12.464893 | 6.881817 | 10.181225 | 11.688924 | 10.814045 | 12.865225 | 7.266982 | 13.552122 | 11.048650 | 9.127867 | 9.637614 |
| UpsidePotential | 0.510416 | 0.523794 | 0.506272 | 0.641010 | 0.549035 | 0.648494 | 0.552168 | 0.534062 | 0.601222 | 0.525020 | 0.610269 | 0.636556 | 0.600657 |
| UpsideRisk | 0.004235 | 0.003214 | 0.003158 | 0.004497 | 0.003377 | 0.004676 | 0.003258 | 0.003254 | 0.004096 | 0.003271 | 0.004005 | 0.003408 | 0.003325 |
| BernardoLedoit | 1.253802 | 1.207409 | 1.218241 | 1.377407 | 1.260146 | 1.408378 | 1.298163 | 1.305293 | 1.300715 | 1.301546 | 1.420607 | 1.474334 | 1.337922 |
| DRatio | 0.680517 | 0.725996 | 0.678011 | 0.636395 | 0.680759 | 0.619052 | 0.622612 | 0.619211 | 0.718885 | 0.624374 | 0.603865 | 0.557035 | 0.672120 |
| Hurst | 0.408833 | 0.373706 | 0.380678 | 0.330215 | 0.371346 | 0.385210 | 0.383093 | 0.391582 | 0.339636 | 0.390138 | 0.388151 | 0.367693 | 0.361700 |
| Kappa | 0.059623 | 0.055300 | 0.053849 | 0.116238 | 0.069496 | 0.120127 | 0.076783 | 0.073136 | 0.091296 | 0.070360 | 0.108401 | 0.125263 | 0.094941 |
| Kelly | 12.210935 | 14.028417 | 14.398990 | 19.158592 | 16.807867 | 19.696548 | 19.561870 | 19.311415 | 16.836604 | 18.706853 | 22.598090 | 30.032451 | 22.738398 |
| Prospect | -0.405547 | -0.452293 | -0.428775 | -0.406083 | -0.431271 | -0.387529 | -0.404860 | -0.386527 | -0.438782 | -0.382589 | -0.356293 | -0.334900 | -0.409476 |
| Information_Daily | -0.036029 | -0.047680 | -0.047078 | -0.018192 | -0.041528 | -0.012985 | -0.038213 | -0.037671 | -0.029827 | -0.037950 | -0.017862 | -0.021237 | -0.034588 |
| Information_Annualized | -0.665855 | -0.868339 | -0.858181 | -0.345150 | -0.763035 | -0.248219 | -0.705471 | -0.695964 | -0.556390 | -0.700843 | -0.339213 | -0.401381 | -0.641829 |
| CAPMAlpha | 0.000353 | 0.000242 | 0.000248 | 0.000564 | 0.000307 | 0.000626 | 0.000348 | 0.000352 | 0.000438 | 0.000348 | 0.000569 | 0.000554 | 0.000391 |
| JensenAlpha | 0.089279 | 0.060407 | 0.062126 | 0.149827 | 0.078254 | 0.167719 | 0.089470 | 0.090709 | 0.113489 | 0.089344 | 0.151827 | 0.147709 | 0.101785 |
| Treynor_Daily | 0.006350 | 0.006035 | 0.006009 | 0.009745 | 0.006504 | 0.010800 | 0.007602 | 0.007451 | 0.009642 | 0.007101 | 0.009697 | 0.018096 | 0.008959 |
| Treynor_Annualized | 1.681322 | 1.573709 | 1.568491 | 2.651296 | 1.711562 | 2.961042 | 2.010408 | 1.972026 | 2.577618 | 1.878642 | 2.640818 | 4.903598 | 2.382000 |
| Modigliani | 0.000780 | 0.000695 | 0.000713 | 0.001204 | 0.000853 | 0.001280 | 0.000968 | 0.000970 | 0.000995 | 0.000951 | 0.001314 | 0.001462 | 0.001098 |
| TrackingError_Daily | 0.011859 | 0.011463 | 0.011448 | 0.011812 | 0.011423 | 0.011911 | 0.011406 | 0.011412 | 0.011792 | 0.011412 | 0.011601 | 0.011575 | 0.011394 |
| TrackingError_Annualized | 0.188261 | 0.181970 | 0.181733 | 0.187509 | 0.181337 | 0.189078 | 0.181063 | 0.181160 | 0.187191 | 0.181155 | 0.184155 | 0.183751 | 0.180881 |
| M2Sortino | 0.109296 | 0.077033 | 0.079051 | 0.175263 | 0.098334 | 0.193567 | 0.109982 | 0.111307 | 0.133627 | 0.110080 | 0.178035 | 0.170326 | 0.123960 |
| Appraisal | 0.981698 | 0.856007 | 0.880431 | 1.673988 | 1.084088 | 1.811307 | 1.270121 | 1.269760 | 1.346451 | 1.236027 | 1.837228 | 2.122830 | 1.480997 |
| CAPMBeta | 0.061460 | 0.044911 | 0.046369 | 0.061845 | 0.052772 | 0.061383 | 0.050216 | 0.052032 | 0.048315 | 0.054150 | 0.062943 | 0.031596 | 0.047269 |
| ActiveReturn | -0.125355 | -0.158012 | -0.155959 | -0.064719 | -0.138367 | -0.046933 | -0.127735 | -0.126081 | -0.104151 | -0.126961 | -0.062468 | -0.073754 | -0.116094 |
| OmegaExcessReturn | 0.080784 | 0.052794 | 0.054507 | 0.143799 | 0.072455 | 0.161048 | 0.083269 | 0.084365 | 0.104763 | 0.083131 | 0.146443 | 0.138680 | 0.096254 |
| BetaCoSkewness | -1.007663 | -1.030977 | -1.139233 | -0.930234 | -1.006532 | -0.908119 | -1.100709 | -1.118876 | -1.079607 | -1.123072 | -0.954915 | -1.912707 | -1.565530 |
| BetaCoKurtosis | 0.083192 | 0.049011 | 0.051037 | 0.027872 | 0.047768 | 0.040181 | 0.045809 | 0.051584 | 0.023902 | 0.056251 | 0.050910 | -0.014337 | 0.026794 |
| CDD | 0.040293 | 0.035628 | 0.046112 | 0.027983 | 0.041533 | 0.044066 | 0.038434 | 0.043415 | 0.025972 | 0.047864 | 0.035587 | 0.022209 | 0.032647 |
| CoSkewness | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 |
| CoKurtosis | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | -0.000000 | 0.000000 |
| FamaBeta | 0.521888 | 0.404641 | 0.404778 | 0.513783 | 0.414724 | 0.531228 | 0.404556 | 0.410411 | 0.482748 | 0.415463 | 0.475119 | 0.397776 | 0.394495 |
| MSquaredExcess | -0.024976 | -0.043968 | -0.039889 | 0.073619 | -0.008871 | 0.092338 | 0.016973 | 0.017355 | 0.023837 | 0.013157 | 0.098611 | 0.130882 | 0.046168 |
| NetSelectivity | -0.016016 | -0.021860 | -0.019838 | 0.046474 | -0.004520 | 0.060270 | 0.008437 | 0.008752 | 0.014139 | 0.006716 | 0.057567 | 0.063968 | 0.022378 |
| Selectivity | 0.089279 | 0.060407 | 0.062126 | 0.149827 | 0.078254 | 0.167719 | 0.089470 | 0.090709 | 0.113489 | 0.089344 | 0.151827 | 0.147709 | 0.101785 |
| SpecificRisk | 0.090944 | 0.070568 | 0.070563 | 0.089503 | 0.072184 | 0.092596 | 0.070443 | 0.071438 | 0.084287 | 0.072284 | 0.082639 | 0.069581 | 0.068727 |
| SystematicRisk | 0.010792 | 0.007886 | 0.008142 | 0.010860 | 0.009267 | 0.010779 | 0.008818 | 0.009137 | 0.008484 | 0.009509 | 0.011053 | 0.005548 | 0.008300 |
| TotalRisk | 0.091582 | 0.071007 | 0.071031 | 0.090160 | 0.072777 | 0.093221 | 0.070992 | 0.072020 | 0.084713 | 0.072906 | 0.083375 | 0.069802 | 0.069227 |
| UpCapture | 0.106155 | 0.071291 | 0.073323 | 0.136728 | 0.092194 | 0.138263 | 0.090263 | 0.091277 | 0.102491 | 0.093247 | 0.133385 | 0.088667 | 0.094844 |
| UpNumber | 0.566514 | 0.555046 | 0.573394 | 0.550459 | 0.575688 | 0.555046 | 0.575688 | 0.580275 | 0.543578 | 0.584862 | 0.564220 | 0.555046 | 0.559633 |
| UpPercent | 0.174312 | 0.146789 | 0.144495 | 0.178899 | 0.158257 | 0.204128 | 0.153670 | 0.146789 | 0.183486 | 0.149083 | 0.178899 | 0.174312 | 0.165138 |
| DownCapture | 0.013226 | 0.006585 | 0.006889 | -0.011008 | 0.011399 | -0.027237 | -0.002297 | -0.002875 | -0.013063 | 0.000470 | -0.016812 | -0.060508 | -0.008744 |
| DownNumber | 0.503145 | 0.503145 | 0.493711 | 0.496855 | 0.518868 | 0.500000 | 0.484277 | 0.490566 | 0.525157 | 0.500000 | 0.503145 | 0.459119 | 0.518868 |
| DownPercent | 0.874214 | 0.893082 | 0.893082 | 0.861635 | 0.883648 | 0.877358 | 0.893082 | 0.889937 | 0.880503 | 0.883648 | 0.877358 | 0.918239 | 0.893082 |

</details>


Table 9 contains all 72 measures calculated directly with PerformanceAnalytics: measures are rows and portfolios are columns. S&P 500 is the benchmark for CAPM, information, tracking-error, capture and systematic-risk measures. It remains in Table 5 and the figures; it is omitted from Table 9 because its information ratio relative to itself has a zero tracking-error denominator.

## Model

### Exact mathematical formulation of the netSD portfolio

Let R_tj be the return of share j on date t, w_j its final portfolio weight, and r_p,t = Σ_j w_j R_tj the candidate portfolio return. Let K denote the fixed reference set consisting of the 56 shares, the current portfolio, and ten earlier portfolios.

For entity i, define H_i^(1)(x)=F_i(x) and H_i^(q)(x)=∫_{-∞}^x H_i^(q-1)(u)du for q=2,3. Entity i dominates entity k at order q when H_i^(q)(x) ≤ H_k^(q)(x) for every observed support point x, with a strict inequality for at least one x. The third-order comparison additionally requires E[R_i] ≥ E[R_k]. Let a_ik^(q)=1 when this condition holds and 0 otherwise.

OUT(p)=Σ_{k∈K}Σ_{q=1}^3 a_pk^(q),   IN(p)=Σ_{k∈K}Σ_{q=1}^3 a_kp^(q),   D=max_i{OUT(i)+IN(i)},   netSD(p)=[OUT(p)-IN(p)]/D.

Primary optimisation problem:  max_w netSD(w), subject to Σ_j w_j=1; w_j≥0; μᵀw≥μ_current; and w_j=0 for every share j whose individual netSD_j≤0 or which belongs to the Baltic Secondary List. Selling existing holdings is allowed, so current positions do not impose lower bounds. Among candidates with the same maximal netSD, the secondary lexicographic objective maximises Σ_j w_j d_j/P_j, where d_j is historical dividend per share and P_j is the last observed price.

The individual-share screening score is calculated before the new candidate enters the network: netSD_j=(OUT_j-IN_j)/D_ref in the fixed 67-entity reference system. This prevents the candidate from changing its own admissible investment universe.

The reference set contains the 56 eligible shares, the current portfolio, and ten earlier portfolios: Markowitz, MAD, Minimax, Robust and NetSD estimated from the training sample and from the complete sample.

The objective is discrete and non-convex. ISRES evaluates candidate portfolios numerically. The report therefore states the best solution found; it does not claim a mathematical certificate of global optimality.

## Data coverage

The official Nasdaq Baltic list contained 67 shares. 56 shares had Yahoo closing-price history covering the complete study window and entered the common-date return matrix. Shares with incomplete or unavailable histories are excluded from both the optimisation and Table 2. No price interpolation or zero-return replacement was used.

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
