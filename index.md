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
.add-one-comparison table { display:table; width:100%; table-layout:fixed; overflow:visible; white-space:normal; font-size:.70rem; }
.add-one-comparison th { height:142px; padding:.25rem .12rem; vertical-align:middle; text-align:center; writing-mode:vertical-rl; text-orientation:mixed; }
.add-one-comparison td { padding:.32rem .10rem; text-align:center; overflow-wrap:anywhere; font-variant-numeric:tabular-nums; }
.add-one-comparison th:first-child,.add-one-comparison td:first-child { width:4.2%; text-align:center; }
.add-one-comparison th:nth-child(2),.add-one-comparison td:nth-child(2) { width:6.5%; text-align:center; }
.trade-decision-table { display:table; width:100%; table-layout:fixed; overflow:visible; white-space:normal; font-size:.67rem; }
.trade-decision-table th { height:145px; padding:.25rem .08rem; text-align:center; vertical-align:bottom; }
.trade-decision-table th span { display:inline-block; writing-mode:vertical-rl; transform:rotate(180deg); white-space:nowrap; }
.trade-decision-table td { padding:.3rem .08rem; text-align:center; overflow-wrap:anywhere; font-variant-numeric:tabular-nums; }
.trade-decision-table th:nth-child(3),.trade-decision-table td:nth-child(3) { width:10%; text-align:left; }
.profile-filters { position:sticky; top:0; z-index:8; display:flex; flex-wrap:wrap; align-items:center; gap:.55rem 1rem; margin:.75rem 0 1rem; padding:.7rem .9rem; border:1px solid #b9d1d8; border-radius:7px; background:#eef7f8f2; box-shadow:0 2px 7px #20304016; }
.profile-filters label { display:inline-flex; align-items:center; gap:.35rem; cursor:pointer; font-weight:650; }
.profile-filters input { width:1.05rem; height:1.05rem; accent-color:var(--accent); }
.profile-filter-count { margin-left:auto; color:var(--muted); font-size:.88rem; }
.cdf-with-key { display:grid; grid-template-columns:minmax(0,4fr) minmax(170px,1fr); gap:12px; align-items:center; }
.cdf-with-key img { width:100%; margin:.5rem 0; }
.cdf-with-key .cdf-key { max-height:520px; object-fit:contain; }
th,td { padding:.5rem .65rem; border:1px solid var(--line); text-align:right; }
th { background:#dceff1; color:#173246; }
th:first-child,td:first-child { text-align:left; }
tr:nth-child(even) td { background:#f7fafb; }
img { display:block; max-width:100%; height:auto; margin:1rem auto; border:1px solid var(--line); border-radius:6px; cursor:zoom-in; }
.dominance-explorer { margin:1rem 0; padding:12px; border:1px solid #bfd1d9; border-radius:8px; background:#fff; }
.dominance-controls { display:grid; grid-template-columns:repeat(4,minmax(150px,1fr)); gap:10px 18px; align-items:end; margin-bottom:10px; }
.dominance-controls label { display:grid; gap:3px; color:#29485a; font-size:.86rem; }
.dominance-controls select,.dominance-controls input { width:100%; }
.dominance-controls button { min-height:35px; border:1px solid #8aa6b2; border-radius:5px; color:#174d61; background:#eef7f8; cursor:pointer; }
.dominance-canvas { width:100%; height:735px; border:1px solid var(--line); border-radius:5px; cursor:crosshair; }
.dominance-status { margin:.45rem 0 0; color:#455f70; font-size:.84rem; font-variant-numeric:tabular-nums; }
@media(max-width:900px) { .dominance-controls { grid-template-columns:1fr 1fr; } .dominance-canvas { height:675px; } }
a { color:var(--accent); }
@media(max-width:700px) { main { width:100%; margin:0; padding:22px 8px; border-radius:0; } h1 { font-size:1.7rem; } .add-one-comparison table { font-size:.62rem; } .add-one-comparison th { height:128px; } }
</style>
</head>
<body><main markdown="1">
# Baltic investment plan - updated 2026-10-20 13:43 (Europe/Vilnius); return analysis through 2026-10-16; valuation prices through 2026-10-19

Private Nasdaq Baltic portfolio analysis. Tables, figures and individual-share information are collapsed; select a title to expand it.


---

# Nasdaq Baltic universe: maximum-netSD portfolio

Study period: 2023-01-01 to 2026-10-16 | Portfolio ceiling: EUR 15,000 | Existing positions may be sold

Return statistics use complete common trading dates through 2026-10-16. Valuation, whole-share quantities and EUR trade amounts use each share's latest observed close through 2026-10-19.

## Optimisation result

The best numerical solution found has netSD 0.822034 (OUT=97, IN=0, denominator=118). It is evaluated against one fixed reference network containing 55 quality-approved shares, the current portfolio, and the ten earlier training/full-data portfolios.

Current-portfolio netSD is 0.457627; the optimised-portfolio value is 0.822034. Historical gross dividends for the final whole-share quantities are EUR 2443.86. These historical dividends are a counterfactual, before tax and without reinvestment, rather than a forecast.

## Decision guide

Primary model scenario: Baltic_NetSD. Existing positions may be sold and the model reallocates up to EUR 15,000. Table 3 is the single canonical model trade list for this scenario. This is a model output rather than personalised investment advice.

Alternative scenario: curent_update_baltic. Every existing position is retained and only additional purchases are allowed. Table 3A belongs only to this alternative and must not be combined with Table 3 quantities.

The Priority field in Table 3A and the single-share-addition experiments are diagnostics, not a trade execution sequence. Technical BUY/HOLD/SELL signals are timing diagnostics and do not override the portfolio optimiser.

Suggested execution process: (1) refresh prices, cash and order-book depth; (2) select one scenario; (3) review liquidity and transaction costs; (4) place limit orders, splitting illiquid trades; (5) recalculate quantities and residual cash after fills. In-sample results and the unstable holdout test require paper trading or walk-forward validation before relying on the allocation.

Return and technical analysis uses common observations through 2026-10-16; valuation prices and trade quantities are refreshed through 2026-10-19. The 70/30 validation uses an earlier fixed split and is reported separately from the complete-period analysis.

<details markdown="1">
<summary><strong>Table 1. Optimisation objective and constraint checks</strong></summary>

| Component | Restriction or objective | Obtained value | Result |
| --- | --- | --- | --- |
| Objective: netSD | maximum value found numerically | 0.82203390 | Reported |
| Budget | invested <= 15000 | 14913.15801773 | Satisfied |
| Residual cash | >= 0 | 86.84198227 | Satisfied |
| Full-investment weights | sum(w) = 1 | 1.00000000 | Satisfied |
| Long only | min(w) >= 0 | 0.00000000 | Satisfied |
| Sales | existing positions may be reduced to zero | -377.00000000 | Allowed |
| Minimum mean | >= 0.00034375 | 0.00049805 | Satisfied |
| Historical dividends | descriptive only; excluded from objective | 2443.86441920 | EUR historical gross cash |

</details>


<details markdown="1">
<summary><strong>Table 2. Eligible Nasdaq Baltic shares and the optimised allocation</strong></summary>

| asset | name | market | last_price | optimal_weight_percent | current_shares | target_shares | trade_shares | action | invested_EUR | historical_dividend_cash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIR | Airobot Technologies | TLN | 1.8500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| AKO1L | Akola Group | VLN | 1.8350 | 3.8355 | 0 | 313 | 313 | BUY | 574.3550 | 0.0000 |
| AMG1L | Amber Grid | VLN | 1.2000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| APG1L | Apranga | VLN | 3.8100 | 7.3585 | 200 | 289 | 89 | BUY | 1101.0900 | 297.6700 |
| ARC1T | Arco Vara | TLN | 1.0500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| AUG1L | AUGA group | VLN | 0.0710 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| BAL1R | Amber Latvijas balzams | RIG | 0.9000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| BERCM | Bercman Technologies | TLN | 1.0350 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| CPA1T | Coop Pank | TLN | 2.3500 | 0.7757 | 0 | 49 | 49 | BUY | 115.1500 | 13.0830 |
| CTS1L | City Service | VLN | 0.1560 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| DGR1R | DelfinGroup | RIG | 1.7200 | 1.5401 | 0 | 134 | 134 | BUY | 230.4800 | 43.8448 |
| EFT1T | EfTEN Real Estate Fund | TLN | 19.6000 | 9.2677 | 0 | 70 | 70 | BUY | 1372.0000 | 312.3820 |
| EWA1L | East West Agro | VLN | 15.6000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| GRG1L | Grigeo Group | VLN | 1.0000 | 10.1549 | 0 | 1523 | 1523 | BUY | 1523.0000 | 258.9100 |
| HAE1T | Harju Elekter Group | TLN | 5.3600 | 5.7378 | 100 | 160 | 60 | BUY | 857.6000 | 92.8000 |
| HPR1T | Hepsor | TLN | 4.4500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IDX1R | INDEXO | RIG | 2.4550 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IGN1L | Ignitis grupė | VLN | 21.7500 | 2.9497 | 0 | 20 | 20 | BUY | 435.0000 | 78.3800 |
| INC1L | INVL Technology | VLN | 5.3000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| INL1L | INVL Baltic Farmland | VLN | 7.1000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| INR1L | INVL Baltic Real Estate | VLN | 2.8600 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| IVL1L | Invalda INVL | VLN | 25.8000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| KNE1L | KN Energies | VLN | 0.4800 | 9.5139 | 0 | 2973 | 2973 | BUY | 1427.0400 | 191.4612 |
| KNR1L | Kauno energija | VLN | 2.0800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| LGD1L | LITGRID | VLN | 1.1300 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| LHV1T | LHV Group | TLN | 3.2500 | 0.8120 | 0 | 37 | 37 | BUY | 120.2500 | 15.9100 |
| LINDA | Linda Nektar | TLN | 4.0600 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MAGIC | TextMagic | TLN | 1.8500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MDARA | MADARA Cosmetics | RIG | 9.8800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MODE | Modera | TLN | 5.0000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| MOLNR | J. Molner | TLN | 20.4000 | 1.1164 | 0 | 8 | 8 | BUY | 163.2000 | 0.0000 |
| MRK1T | Merko Ehitus | TLN | 27.1000 | 9.8837 | 20 | 54 | 34 | BUY | 1463.4000 | 294.3000 |
| NCN1T | Nordecon | TLN | 0.5340 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| NEOFI | NEO Finance | VLN | 2.2000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PKG1T | Pro Kapital Grupp | TLN | 0.6300 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PRF1T | PRFoods | TLN | 0.0510 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| PZV1L | Pieno žvaigždės | VLN | 1.7950 | 3.1307 | 0 | 261 | 261 | BUY | 468.4950 | 109.6200 |
| ROE1L | Artea Bankas | VLN | 0.8800 | 0.4087 | 416 | 69 | -347 | SELL | 60.7200 | 9.3840 |
| RSU1L | Rokiškio sūris | VLN | 4.4800 | 4.8794 | 0 | 163 | 163 | BUY | 730.2400 | 114.1000 |
| SAF1R | SAF Tehnika | RIG | 16.3500 | 0.0000 | 100 | 0 | -100 | SELL | 0.0000 | 0.0000 |
| SAUNA | Saunum Group | TLN | 2.5000 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SCM1R | Siguldas ciltslietu un mākslīgās apsēklošanas stacija | RIG | 5.3500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SFG1T | Silvano Fashion Group | TLN | 1.0650 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| SKN1T | Nordic Fibreboard | TLN | 0.4800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| TAL1T | Tallink Grupp | TLN | 0.6460 | 1.3939 | 700 | 323 | -377 | SELL | 208.6580 | 48.4500 |
| TEL1L | Telia Lietuva | VLN | 2.2900 | 2.1474 | 0 | 140 | 140 | BUY | 320.6000 | 43.4000 |
| TKM1T | TKM Grupp | TLN | 8.9000 | 9.6967 | 288 | 163 | -125 | SELL | 1450.6999 | 431.9500 |
| TPD1T | Trigon Property Development | TLN | 0.5800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| TSM1T | Tallinna Sadam | TLN | 1.2140 | 0.0000 | 330 | 0 | -330 | SELL | 0.0000 | 0.0000 |
| TVE1T | Tallinna Vesi | TLN | 10.8500 | 2.9539 | 0 | 40 | 40 | BUY | 434.0000 | 77.6000 |
| UTR1L | Utenos trikotažas | VLN | 0.3500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| VBL1L | Vilniaus baldai | VLN | 9.8500 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |
| VIRSI | VIRŠI-A | RIG | 4.4200 | 1.1552 | 0 | 39 | 39 | BUY | 172.3800 | 10.6194 |
| VLP1L | Vilkyškių pieninė | VLN | 15.6000 | 11.2884 | 42 | 108 | 66 | BUY | 1684.8000 | 0.0000 |
| ZMP1L | Žemaitijos pienas | VLN | 2.8800 | 0.0000 | 0 | 0 | 0 | HOLD | 0.0000 | 0.0000 |

</details>


<details markdown="1" class="trade-decision-section">
<summary><strong>Table 3. Canonical Baltic_NetSD model trades: selling permitted</strong></summary>

<table class="trade-decision-table"><thead><tr><th><span>Phase</span></th><th><span>Share</span></th><th><span>Company</span></th><th><span>Last price</span></th><th><span>Indicative buy ≤</span></th><th><span>Buy distance</span></th><th><span>Indicative sell ≥</span></th><th><span>Sell distance</span></th><th><span>Price zone</span></th><th><span>Target weight</span></th><th><span>Current shares</span></th><th><span>Trade shares</span></th><th><span>Trade EUR</span></th><th><span>Target shares</span></th><th><span>Final value EUR</span></th><th><span>Model action</span></th><th><span>Historical dividends EUR</span></th></tr></thead><tbody><tr><td>1</td><td>TAL1T</td><td>Tallink Grupp</td><td>0.6460</td><td>0.6373</td><td>-1.34%</td><td>0.6508</td><td>+0.74%</td><td>HOLD</td><td>1.39%</td><td>700</td><td>-377</td><td>-243.54</td><td>323</td><td>208.66</td><td>SELL</td><td>48.45</td></tr><tr><td>1</td><td>ROE1L</td><td>Artea Bankas</td><td>0.8800</td><td>0.8712</td><td>-1.00%</td><td>0.9137</td><td>+3.83%</td><td>HOLD</td><td>0.41%</td><td>416</td><td>-347</td><td>-305.36</td><td>69</td><td>60.72</td><td>SELL</td><td>9.38</td></tr><tr><td>1</td><td>TSM1T</td><td>Tallinna Sadam</td><td>1.2140</td><td>1.2035</td><td>-0.87%</td><td>1.2189</td><td>+0.41%</td><td>HOLD</td><td>0.00%</td><td>330</td><td>-330</td><td>-400.62</td><td>0</td><td>0.00</td><td>SELL</td><td>0.00</td></tr><tr><td>1</td><td>TKM1T</td><td>TKM Grupp</td><td>8.9000</td><td>8.9183</td><td>+0.21%</td><td>9.0967</td><td>+2.21%</td><td>BUY</td><td>9.70%</td><td>288</td><td>-125</td><td>-1112.50</td><td>163</td><td>1450.70</td><td>SELL</td><td>431.95</td></tr><tr><td>1</td><td>SAF1R</td><td>SAF Tehnika</td><td>16.3500</td><td>16.0810</td><td>-1.65%</td><td>17.2490</td><td>+5.50%</td><td>HOLD</td><td>0.00%</td><td>100</td><td>-100</td><td>-1635.00</td><td>0</td><td>0.00</td><td>SELL</td><td>0.00</td></tr><tr><td>2</td><td>GRG1L</td><td>Grigeo Group</td><td>1.0000</td><td>0.9995</td><td>-0.05%</td><td>1.0210</td><td>+2.10%</td><td>HOLD</td><td>10.15%</td><td>0</td><td>+1523</td><td>1523.00</td><td>1523</td><td>1523.00</td><td>BUY</td><td>258.91</td></tr><tr><td>2</td><td>KNE1L</td><td>KN Energies</td><td>0.4800</td><td>0.4790</td><td>-0.21%</td><td>0.4955</td><td>+3.23%</td><td>HOLD</td><td>9.51%</td><td>0</td><td>+2973</td><td>1427.04</td><td>2973</td><td>1427.04</td><td>BUY</td><td>191.46</td></tr><tr><td>2</td><td>EFT1T</td><td>EfTEN Real Estate Fund</td><td>19.6000</td><td>19.4049</td><td>-1.00%</td><td>19.6601</td><td>+0.31%</td><td>HOLD</td><td>9.27%</td><td>0</td><td>+70</td><td>1372.00</td><td>70</td><td>1372.00</td><td>BUY</td><td>312.38</td></tr><tr><td>2</td><td>VLP1L</td><td>Vilkyškių pieninė</td><td>15.6000</td><td>15.1951</td><td>-2.60%</td><td>15.5499</td><td>-0.32%</td><td>SELL</td><td>11.29%</td><td>42</td><td>+66</td><td>1029.60</td><td>108</td><td>1684.80</td><td>BUY</td><td>0.00</td></tr><tr><td>2</td><td>MRK1T</td><td>Merko Ehitus</td><td>27.1000</td><td>26.9915</td><td>-0.40%</td><td>27.1735</td><td>+0.27%</td><td>HOLD</td><td>9.88%</td><td>20</td><td>+34</td><td>921.40</td><td>54</td><td>1463.40</td><td>BUY</td><td>294.30</td></tr><tr><td>2</td><td>RSU1L</td><td>Rokiškio sūris</td><td>4.4800</td><td>4.4368</td><td>-0.96%</td><td>4.5352</td><td>+1.23%</td><td>HOLD</td><td>4.88%</td><td>0</td><td>+163</td><td>730.24</td><td>163</td><td>730.24</td><td>BUY</td><td>114.10</td></tr><tr><td>2</td><td>AKO1L</td><td>Akola Group</td><td>1.8350</td><td>1.7252</td><td>-5.98%</td><td>1.8503</td><td>+0.83%</td><td>HOLD</td><td>3.84%</td><td>0</td><td>+313</td><td>574.36</td><td>313</td><td>574.36</td><td>BUY</td><td>0.00</td></tr><tr><td>2</td><td>PZV1L</td><td>Pieno žvaigždės</td><td>1.7950</td><td>1.7233</td><td>-3.99%</td><td>1.8322</td><td>+2.07%</td><td>HOLD</td><td>3.13%</td><td>0</td><td>+261</td><td>468.49</td><td>261</td><td>468.49</td><td>BUY</td><td>109.62</td></tr><tr><td>2</td><td>IGN1L</td><td>Ignitis grupė</td><td>21.7500</td><td>21.4589</td><td>-1.34%</td><td>22.1261</td><td>+1.73%</td><td>HOLD</td><td>2.95%</td><td>0</td><td>+20</td><td>435.00</td><td>20</td><td>435.00</td><td>BUY</td><td>78.38</td></tr><tr><td>2</td><td>TVE1T</td><td>Tallinna Vesi</td><td>10.8500</td><td>10.7922</td><td>-0.53%</td><td>10.9278</td><td>+0.72%</td><td>HOLD</td><td>2.95%</td><td>0</td><td>+40</td><td>434.00</td><td>40</td><td>434.00</td><td>BUY</td><td>77.60</td></tr><tr><td>2</td><td>APG1L</td><td>Apranga</td><td>3.8100</td><td>3.7812</td><td>-0.76%</td><td>3.9138</td><td>+2.72%</td><td>HOLD</td><td>7.36%</td><td>200</td><td>+89</td><td>339.09</td><td>289</td><td>1101.09</td><td>BUY</td><td>297.67</td></tr><tr><td>2</td><td>HAE1T</td><td>Harju Elekter Group</td><td>5.3600</td><td>5.0526</td><td>-5.73%</td><td>5.4174</td><td>+1.07%</td><td>HOLD</td><td>5.74%</td><td>100</td><td>+60</td><td>321.60</td><td>160</td><td>857.60</td><td>BUY</td><td>92.80</td></tr><tr><td>2</td><td>TEL1L</td><td>Telia Lietuva</td><td>2.2900</td><td>2.1891</td><td>-4.41%</td><td>2.2789</td><td>-0.48%</td><td>SELL</td><td>2.15%</td><td>0</td><td>+140</td><td>320.60</td><td>140</td><td>320.60</td><td>BUY</td><td>43.40</td></tr><tr><td>2</td><td>DGR1R</td><td>DelfinGroup</td><td>1.7200</td><td>1.5420</td><td>-10.35%</td><td>1.7600</td><td>+2.32%</td><td>HOLD</td><td>1.54%</td><td>0</td><td>+134</td><td>230.48</td><td>134</td><td>230.48</td><td>BUY</td><td>43.84</td></tr><tr><td>2</td><td>VIRSI</td><td>VIRŠI-A</td><td>4.4200</td><td>4.4040</td><td>-0.36%</td><td>4.4450</td><td>+0.56%</td><td>HOLD</td><td>1.16%</td><td>0</td><td>+39</td><td>172.38</td><td>39</td><td>172.38</td><td>BUY</td><td>10.62</td></tr><tr><td>2</td><td>MOLNR</td><td>J. Molner</td><td>20.4000</td><td>15.7195</td><td>-22.94%</td><td>24.0105</td><td>+17.70%</td><td>HOLD</td><td>1.12%</td><td>0</td><td>+8</td><td>163.20</td><td>8</td><td>163.20</td><td>BUY</td><td>0.00</td></tr><tr><td>2</td><td>LHV1T</td><td>LHV Group</td><td>3.2500</td><td>3.2447</td><td>-0.16%</td><td>3.3083</td><td>+1.79%</td><td>HOLD</td><td>0.81%</td><td>0</td><td>+37</td><td>120.25</td><td>37</td><td>120.25</td><td>BUY</td><td>15.91</td></tr><tr><td>2</td><td>CPA1T</td><td>Coop Pank</td><td>2.3500</td><td>2.2940</td><td>-2.38%</td><td>2.3705</td><td>+0.87%</td><td>HOLD</td><td>0.78%</td><td>0</td><td>+49</td><td>115.15</td><td>49</td><td>115.15</td><td>BUY</td><td>13.08</td></tr></tbody></table>

Indicative buy and sell prices are the current 20-observation Bollinger lower and upper bands. Buy distance and sell distance show the percentage move from the last price to each limit. Price zone applies only these limits; Model action remains the Baltic_NetSD allocation decision. These technical limits are descriptive and will be replaced when the walk-forward acceptable-price model is validated.

</details>


Phase 1 contains model sales, phase 2 model purchases and phase 3 unchanged positions. trade_EUR is the signed transaction amount: positive means cash required for a purchase and negative means sale proceeds before costs. invested_EUR is the complete final position value, not the purchase amount. Actual execution still depends on current quotes, liquidity and costs.

<details markdown="1" class="profiles-section">
<summary><strong>Table 3A. Interactive share profiles</strong></summary>

Select a share to display its allocation, technical indicators, all PerformanceAnalytics measures and portfolio sensitivity.

<div class="profile-filters" role="group" aria-label="Filter shares by technical decision"><strong>Show:</strong><label><input type="checkbox" value="BUY" checked> BUY</label><label><input type="checkbox" value="SELL" checked> SELL</label><label><input type="checkbox" value="HOLD" checked> HOLD</label><span class="profile-filter-count" aria-live="polite"></span></div>

<details markdown="1" class="stock-profile" id="share-kne1l" data-signal="HOLD">
<summary><strong>KNE1L — KN Energies</strong> | HOLD | target 928 shares | priority 1</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>928</td><td>+928</td><td>2.97%</td><td>EUR 0.4800</td><td>0.3729</td><td>44 / 0</td><td>32.76</td><td>Bearish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>HOLD</td><td>0.000883 (1.139% of portfolio HHI)</td><td>EUR 14,251</td><td>3.1%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

![KNE1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/KNE1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 0.4800 | EUR 0.4790 | -0.21% | EUR 0.4955 | +3.23% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![KNE1L complete technical history](figures/technical_analysis/KNE1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![KNE1L return histogram](figures/stock_profiles/KNE1L_histogram.png?v=1792485732)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -26.64% (2023-12-20) | Average gain / average loss | 1.220 | Best 21-day period | 25.23% (ending 2025-12-08) |
| Average underwater drawdown | 10.89% | Upside potential ratio | 1.452 | Worst 21-day period | -9.36% (ending 2024-02-12) |
| Conditional drawdown 95% | 25.00% | Upside capture vs Baltic EW | 112.6% | Best 5-day period | 14.81% (ending 2025-12-05) |
| Ulcer index | 12.92 | Downside capture vs Baltic EW | 54.3% | Best 63-day period | 44.90% (ending 2026-01-09) |
| Longest underwater period | 728 calendar days | Positive trading days | 37.5% | Repeated calendar pattern | Jan: 100% positive across 4 years |
| Daily downside deviation | 0.746% | Best day | 8.61% (2024-01-08) |  |  |
| Daily upside deviation | 0.971% | Worst day | -7.37% (2025-05-14) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.278%); worst: Monday (-0.061%) | 0.0266 | 0.1527 | Not detected |
| Calendar month | Best: Jan (0.533% daily); worst: Mar (-0.167% daily) | 0.4250 | 0.5750 | Not detected |
| Turn of month | First/last three days: 0.242%; other days: 0.045% | 0.0621 | 0.3572 | Not detected |

![KNE1L seasonality, drawdowns and upside periods](figures/stock_profiles/KNE1L_seasonality.png?v=1792486403)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-01-27 | 2023-12-20 | 2025-01-24 | -26.64% | 728 |
| 2 | 2026-01-09 | 2026-03-27 | 2026-05-05 | -10.77% | 116 |
| 3 | 2026-05-08 | 2026-05-20 | 2026-06-02 | -10.23% | 25 |
| 4 | 2025-05-13 | 2025-06-25 | 2025-08-22 | -8.33% | 101 |
| 5 | 2025-02-28 | 2025-03-06 | 2025-04-14 | -5.56% | 45 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-11-05 | 2025-12-08 | 25.23% |
| 2 | 2024-12-17 | 2025-01-24 | 15.61% |
| 3 | 2023-12-11 | 2024-01-12 | 14.63% |
| 4 | 2025-12-10 | 2026-01-16 | 13.77% |
| 5 | 2025-04-07 | 2025-05-13 | 13.45% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (24 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 1 | 0.90% | 1.90% | 4.80% | 100% | 100% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Earnings | 19 | 0.66% | 0.24% | 1.94% | 53% | 32% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 3 | -5.59% | -4.00% | -1.15% | 0% | 33% | 0.0027 | 0.8481 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 1 | -0.15% | -1.19% | -6.87% | 0% | 100% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![KNE1L official announcements and abnormal returns](figures/stock_profiles/KNE1L_company_events.png?v=1792491535)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (24 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-20 09:00 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the six months of 2026](https://view.news.eu.nasdaq.com/view?id=b808ccb80199f6ab729568f52ef695312&lang=en&src=listed) | Open official announcement | 0.41% | 4.55% | 2.27% | 2.07% | 2.64% | Yes |
| 2026-05-21 09:00 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 3 months of 2026](https://view.news.eu.nasdaq.com/view?id=b208494d7a089a24cfb6793b39edf15d5&lang=en&src=listed) | Open official announcement | -3.93% | 0.68% | 0.68% | 8.41% | 0.92% | No |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0286 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0286  | -0.43% | -6.77% | -3.93% | 3.93% | -3.36% | No |
| 2026-04-02 18:08 | Earnings | Unclassified earnings release | [AB KN Energies audited Annual information for the year 2025](https://view.news.eu.nasdaq.com/view?id=bbcdb8bccf9c49fb1f4f874fe5aa7bb97&lang=en&src=listed) | Open official announcement | 4.39% | -0.23% | 0.93% | 8.88% | -0.76% | No |
| 2026-02-26 16:00 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the twelve months of 2025](https://view.news.eu.nasdaq.com/view?id=b79f70f0f3cc68b7ebee6bb424727d346&lang=en&src=listed) | Open official announcement | -3.59% | 3.49% | -1.40% | -4.65% | -1.14% | No |
| 2025-11-21 16:00 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 9 months of 2025](https://view.news.eu.nasdaq.com/view?id=b0d9e53e874fec057dccb705a66870dd7&lang=en&src=listed) | Open official announcement | 4.57% | -0.87% | 2.33% | 18.08% | 1.96% | No |
| 2025-08-22 08:55 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the six months of 2025](https://view.news.eu.nasdaq.com/view?id=b339c7ee327409b2d719dd49da3e7ca8d&lang=en&src=listed) | Open official announcement | 6.12% | -0.64% | 0.32% | 2.56% | 0.72% | No |
| 2025-05-26 09:00 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 3 months of 2025](https://view.news.eu.nasdaq.com/view?id=b99746177ca4090b1c2154e59bb1b5024&lang=en&src=listed) | Open official announcement | -0.33% | 0.00% | -0.33% | -3.34% | -1.05% | No |
| 2025-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0227 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0227  | 2.30% | -7.37% | -3.85% | -5.77% | -4.49% | No |
| 2025-04-07 18:00 | Earnings | Unclassified earnings release | [AB KN Energies audited Annual information for the year 2024](https://view.news.eu.nasdaq.com/view?id=be29e9c68fa04668262744c39fd39bead&lang=en&src=listed) | Open official announcement | -0.72% | 1.82% | 6.91% | 13.45% | 4.78% | Yes |
| 2025-02-28 09:00 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the twelve months of 2024](https://view.news.eu.nasdaq.com/view?id=bd09e474fe52dbe3b6b60dcae282ad341&lang=en&src=listed) | Open official announcement | 6.67% | -0.69% | -5.56% | -3.82% | -5.56% | Yes |
| 2024-11-18 08:30 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the  nine months of 2024](https://view.news.eu.nasdaq.com/view?id=b6320a20de0897bbb15bbbe2d5e1b03ab&lang=en&src=listed) | Open official announcement | -3.02% | 3.56% | 4.44% | 5.33% | 4.41% | No |
| 2024-08-14 15:27 | Earnings | Higher profit | [Correction: AB KN Energies unaudited financial information for the six months of 2024](https://view.news.eu.nasdaq.com/view?id=bd7ab827c0765692a231279636e21efc2&lang=en&src=listed) | Open official announcement | 0.43% | -0.85% | -1.28% | -4.26% | -1.00% | Yes |
| 2024-05-22 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0131 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0131  | -2.27% | 0.93% | 1.86% | 5.12% | 1.90% | Yes |
| 2024-05-21 17:03 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 3 months of 2024](https://view.news.eu.nasdaq.com/view?id=b792e290b4a29856b25d2bbc49296e698&lang=en&src=listed) | Open official announcement | -2.27% | 0.93% | 1.86% | 5.12% | 1.90% | Yes |
| 2024-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0131 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0131  | 0.88% | -3.93% | -5.24% | -1.75% | -4.16% | Yes |
| 2024-04-30 16:00 | Earnings | Unclassified earnings release | [AB KN Energies audited Annual information for the year 2023](https://view.news.eu.nasdaq.com/view?id=b6a445813d007c002336c889cbcb23969&lang=en&src=listed) | Open official announcement | 0.89% | 0.00% | 0.88% | -2.64% | 0.62% | No |
| 2024-02-29 08:55 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the twelve months of 2023](https://view.news.eu.nasdaq.com/view?id=bb7a677c7fdc94e151be2df07e65bf66e&lang=en&src=listed) | Open official announcement | 3.27% | 0.45% | 3.17% | 1.81% | 3.69% | No |
| 2023-11-21 08:55 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for the nine months of 2023](https://view.news.eu.nasdaq.com/view?id=b5f4ac8e873b24ce0db32f3b9fb0404a9&lang=en&src=listed) | Open official announcement | -1.45% | 1.47% | 0.98% | -1.47% | 1.36% | No |
| 2023-08-18 09:00 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for the six months of 2023](https://view.news.eu.nasdaq.com/view?id=b7821fa600e159afb0554fcd4e9f28180&lang=en&src=listed) | Open official announcement | 0.00% | -0.45% | -0.91% | -0.91% | -0.36% | No |
| 2023-06-14 08:00 | Guidance | — | [New long-term strategy of AB „Klaipėdos nafta“ (KN) focuses on energy transformation and climate neutrality of operations](https://view.news.eu.nasdaq.com/view?id=b04e36fce7a658b403078c68b717fca4c&lang=en&src=listed) | Open official announcement | -0.43% | 0.00% | -1.29% | -6.87% | -1.19% | Yes |
| 2023-05-22 08:57 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for the 3 months of 2023](https://view.news.eu.nasdaq.com/view?id=bc4c49c6029aa4a40b392bc0fdf8b870a&lang=en&src=listed) | Open official announcement | 0.43% | -0.85% | -4.66% | -0.85% | -4.35% | Yes |
| 2023-04-28 16:45 | Earnings | Unclassified earnings release | [Correction: AB Klaipėdos nafta audited Annual financial statements for the year 2022](https://view.news.eu.nasdaq.com/view?id=b128051ca351f7f3a9528c95750607960&lang=en&src=listed) | Open official announcement | -2.02% | 0.82% | -3.29% | -5.35% | -3.27% | No |
| 2023-02-27 08:55 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for 2022](https://view.news.eu.nasdaq.com/view?id=b453987a56cea493816a2145d3dc139d1&lang=en&src=listed) | Open official announcement | 0.37% | -0.18% | -0.92% | -6.83% | -1.01% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (5 classified of 19 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 5 | 1.17% | 6.902 | -0.64% | 40% | 1.21% | 5.190 | -0.18% |
| Higher profit | 5d | 5 | -1.13% | 8.340 | -1.28% | 40% | -0.87% | 9.222 | -1.00% |
| Higher profit | 21d | 5 | -1.62% | 13.016 | -3.82% | 40% | -0.65% | 12.614 | -1.63% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![KNE1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/KNE1L_all_frontiers.png?v=1792486195)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | 0.023117 | 0.021446 | M2Sortino | 0.252111 | 0.257359 |
| AdjustedSharpe | 0.864712 | 1.257272 | MSquaredExcess | -0.005995 | -0.026297 |
| AnnualizedReturn_Arithmetic | 0.244434 | 0.248977 | Martin | 2.047422 | 5.885860 |
| AnnualizedReturn_Geometric | 0.251806 | 0.258655 | MaximumDrawdown | 0.262350 | 0.099778 |
| Appraisal | 1.204012 | 1.091815 | Modigliani | 0.000853 | 0.000782 |
| ArithmeticReturn | 0.000970 | 0.000988 | NetSelectivity | -0.008381 | -0.041115 |
| AverageDrawdown | 0.040766 | 0.036560 | Omega | 1.290164 | 1.276219 |
| AverageDrawdownLength | 33.000000 | 16.142857 | OmegaExcessReturn | 0.209287 | 0.224827 |
| AverageRecoveryTime | 18.954545 | 4.857143 | PainIndex | 0.091665 | 0.036003 |
| BernardoLedoit | 1.290164 | 1.276219 | PainRatio | 2.747028 | 7.184345 |
| BetaCoKurtosis | -0.058605 | 0.256004 | Prospect | -0.432052 | -0.498715 |
| BetaCoSkewness | -1.303857 | -8.623774 | Rachev | 1.379867 | 1.451616 |
| Burke | 1.001545 | 2.409198 | Selectivity | 0.240138 | 0.210158 |
| CAPMAlpha | 0.000925 | 0.000806 | Sharpe_Annualized | 1.223506 | 1.271371 |
| CAPMBeta | 0.051020 | 0.204448 | Sharpe_Daily | 0.077074 | 0.080089 |
| CDD | 0.090512 | 0.082577 | Sharpe_ES | 0.039062 | 0.044421 |
| Calmar | 0.959809 | 2.592299 | Sharpe_VaR | 0.062324 | 0.068795 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | 1.082079 | 1.191092 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | 0.130612 | 0.141463 |
| CumulativeReturn | 0.958110 | 0.121898 | SpecificRisk | 0.199448 | 0.192485 |
| DRatio | 0.740349 | 0.755580 | Sterling | 0.694925 | 1.294711 |
| DownCapture | -0.085429 | 0.099146 | SystematicRisk | 0.008959 | 0.031682 |
| DownNumber | 0.355346 | 0.471698 | TotalRisk | 0.199650 | 0.195075 |
| DownPercent | 0.801887 | 0.830189 | TrackingError_Annualized | 0.260001 | 0.229228 |
| DownsideDeviation | 0.007426 | 0.006984 | TrackingError_Daily | 0.016379 | 0.014440 |
| DrawdownDeviation | 0.011794 | 0.011740 | Treynor_Annualized | 4.935416 | 1.265141 |
| ES_Loss | 0.024832 | 0.022242 | Treynor_Daily | 0.017476 | 0.004467 |
| FamaBeta | 1.137731 | 1.263739 | UlcerIndex | 0.122987 | 0.043945 |
| GeometricReturn | 0.000892 | 0.000913 | UpCapture | 0.160227 | 0.309463 |
| Hurst | 0.383627 | 0.393154 | UpNumber | 0.364679 | 0.465753 |
| Information_Annualized | 0.088911 | 0.093558 | UpPercent | 0.227064 | 0.260274 |
| Information_Daily | 0.004520 | 0.004727 | UpsidePotential | 0.580744 | 0.653606 |
| JensenAlpha | 0.240138 | 0.210158 | UpsideRisk | 0.010196 | 0.010158 |
| Kappa | 0.083316 | 0.101837 | VaR_Loss | 0.015563 | 0.014362 |
| Kelly | 6.124211 | 6.492104 | Volatility | 0.012585 | 0.012336 |
| Kurtosis | 11.239148 | 6.912086 | Volatility_Annualized | 0.199782 | 0.195833 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.771186</td><td>-0.042373</td></tr><tr><td>OUT</td><td>96</td><td>91</td><td>-5</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.151322</td><td>0.003548</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.152410</td><td>-0.009082</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>KNE1L shares</td><td>0</td><td>928</td><td>+928</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8357.739957</td><td>445.439990</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.559322</td><td>0.101695</td></tr><tr><td>OUT</td><td>62</td><td>70</td><td>+8</td></tr><tr><td>IN</td><td>8</td><td>4</td><td>-4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.075434</td><td>0.005262</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.101209</td><td>0.010053</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 KNE1L shares. The scenario adds 928 shares from Table 3A, resulting in 928 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="KNE1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![KNE1L high-resolution stochastic dominance](figures/stock_profiles/KNE1L_FSD_SSD_TSD.png?v=1792486453)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-mrk1t" data-signal="HOLD">
<summary><strong>MRK1T — Merko Ehitus</strong> | HOLD | target 44 shares | priority 2</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>20</td><td>44</td><td>+24</td><td>7.97%</td><td>EUR 27.1000</td><td>0.3729</td><td>44 / 0</td><td>50.97</td><td>Bearish</td><td>Inside bands</td><td>0.705 (Neutral)</td><td>HOLD</td><td>0.006358 (8.200% of portfolio HHI)</td><td>EUR 58,112</td><td>1.1%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![MRK1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/MRK1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 27.1000 | EUR 26.9915 | -0.40% | EUR 27.1735 | +0.27% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![MRK1T complete technical history](figures/technical_analysis/MRK1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![MRK1T return histogram](figures/stock_profiles/MRK1T_histogram.png?v=1792485734)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -19.70% (2025-09-29) | Average gain / average loss | 1.129 | Best 21-day period | 22.22% (ending 2025-05-19) |
| Average underwater drawdown | 7.73% | Upside potential ratio | 1.106 | Worst 21-day period | -13.41% (ending 2026-03-09) |
| Conditional drawdown 95% | 18.55% | Upside capture vs Baltic EW | 113.3% | Best 5-day period | 12.64% (ending 2025-02-07) |
| Ulcer index | 9.14 | Downside capture vs Baltic EW | 60.5% | Best 63-day period | 46.65% (ending 2025-02-07) |
| Longest underwater period | 493 calendar days | Positive trading days | 44.1% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.709% | Best day | 8.89% (2024-11-07) |  |  |
| Daily upside deviation | 0.833% | Worst day | -7.32% (2024-06-07) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.124%); worst: Monday (-0.034%) | 0.3718 | 0.5030 | Not detected |
| Calendar month | Best: Dec (0.406% daily); worst: Jun (-0.210% daily) | 0.0724 | 0.2493 | Not detected |
| Turn of month | First/last three days: 0.045%; other days: 0.083% | 0.6292 | 0.9400 | Not detected |

![MRK1T seasonality, drawdowns and upside periods](figures/stock_profiles/MRK1T_seasonality.png?v=1792486381)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-06-10 | 2025-09-29 | Not recovered | -19.70% | 493 |
| 2 | 2023-04-14 | 2023-06-08 | 2024-02-07 | -11.43% | 299 |
| 3 | 2024-06-03 | 2024-08-05 | 2024-11-07 | -9.57% | 157 |
| 4 | 2025-05-19 | 2025-05-30 | 2025-06-09 | -6.36% | 21 |
| 5 | 2023-02-17 | 2023-03-24 | 2023-04-12 | -5.12% | 54 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-04-11 | 2025-05-19 | 22.22% |
| 2 | 2024-12-03 | 2025-01-10 | 18.78% |
| 3 | 2025-11-26 | 2025-12-30 | 14.65% |
| 4 | 2025-01-20 | 2025-02-18 | 14.61% |
| 5 | 2023-01-18 | 2023-02-17 | 11.56% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (33 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.91% | 2.71% | 1.27% | 100% | 25% | 0.2550 | 1.0000 | No adjusted statistical evidence |
| Earnings | 21 | 0.01% | 0.77% | 0.83% | 57% | 43% | 0.7840 | 0.8481 | No adjusted statistical evidence |
| Ex-dividend | 8 | -2.80% | -4.96% | -5.75% | 25% | 50% | 0.0028 | 0.0000 | Different from ordinary periods; price drop may be mechanical |

![MRK1T official announcements and abnormal returns](figures/stock_profiles/MRK1T_company_events.png?v=1792491516)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (33 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-06 08:00 | Earnings | In line / unchanged | [2026 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b1156bf2dd62021da6b1674ab4b9f0aca&lang=en&src=listed) | Open official announcement | 0.92% | -0.54% | -1.45% | -2.54% | -1.67% | Yes |
| 2026-05-14 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.25  | -4.39% | 0.88% | -0.53% | -2.83% | 0.04% | No |
| 2026-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.25  | 0.51% | -4.54% | -5.38% | -7.56% | -4.34% | Yes |
| 2026-05-08 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 12 May 2026](https://view.news.eu.nasdaq.com/view?id=b4031ea8ac2b80694d8471a5223ff83f1&lang=en&src=listed) | Open official announcement | 0.34% | 0.34% | -4.22% | -7.25% | -3.67% | Yes |
| 2026-05-07 08:00 | Earnings | In line / unchanged | [2026 3 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bb4f7185ed055b240bf138a0aa0073a69&lang=en&src=listed) | Open official announcement | 1.03% | 0.34% | -3.38% | -6.94% | -2.31% | Yes |
| 2026-04-06 08:00 | Earnings | In line / unchanged | [Audited annual report 2025](https://view.news.eu.nasdaq.com/view?id=b648f58b76dfee1cc3e0314f54e5b2547&lang=en&src=listed) | Open official announcement | -2.00% | 0.00% | 6.11% | 9.44% | 4.42% | Yes |
| 2026-02-05 08:00 | Earnings | Unclassified earnings release | [2025 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b9981c2e1652cd15ff62a89aa3ccb418e&lang=en&src=listed) | Open official announcement | -5.12% | -1.96% | -1.47% | -6.86% | -2.05% | Yes |
| 2025-11-10 08:00 | Earnings | Unclassified earnings release | [Formation of a joint venture for the development of residential buildings in Krulli Quarter in Tallinn](https://view.news.eu.nasdaq.com/view?id=b6a3e223ace85fa30ffd4bc020bceae88&lang=en&src=listed) | Open official announcement | -3.32% | -1.44% | -1.44% | 3.97% | -1.43% | Yes |
| 2025-11-06 08:00 | Earnings | Higher profit | [2025 9 months and III quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b09e88b51d185a77fe225e925e96e7e12&lang=en&src=listed) | Open official announcement | -2.09% | -0.36% | -3.56% | 3.02% | -4.14% | No |
| 2025-08-07 08:00 | Earnings | Higher profit | [2025 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bf0e251742f611e13ec2b29632894e5e3&lang=en&src=listed) | Open official announcement | -0.33% | 0.16% | 0.33% | -3.95% | -0.06% | No |
| 2025-06-02 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.9 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.9  | -4.33% | 1.13% | 6.47% | -1.78% | 6.75% | No |
| 2025-05-29 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.9 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.9  | 0.93% | -5.21% | 0.92% | -5.06% | 1.21% | No |
| 2025-05-27 20:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 29 May 2025](https://view.news.eu.nasdaq.com/view?id=b68c7e826f8947551619fcbc27a16618f&lang=en&src=listed) | Open official announcement | 0.31% | -0.46% | 0.00% | -4.27% | 0.01% | No |
| 2025-05-16 08:00 | Earnings | Unclassified earnings release | [2025 3 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b0adc5c42fbd0a691e7407e7081aef1b1&lang=en&src=listed) | Open official announcement | 11.52% | 3.29% | 1.41% | -4.07% | 1.09% | Yes |
| 2025-04-10 08:00 | Earnings | Unclassified earnings release | [Audited annual report 2024](https://view.news.eu.nasdaq.com/view?id=b6625587e5963d74260ca61222fb64c2b&lang=en&src=listed) | Open official announcement | -0.19% | 0.75% | 4.85% | 19.22% | 4.09% | No |
| 2025-03-04 08:00 | Earnings | Unclassified earnings release | [Launch of a new residential development project Allveelaeva 2 in Noblessner seafront quarter (Tallinn, Estonia)](https://view.news.eu.nasdaq.com/view?id=b040ebcf4dfe0708e4d75b2e82e51f97d&lang=en&src=listed) | Open official announcement | -2.40% | 0.82% | 3.48% | 10.04% | 2.06% | Yes |
| 2025-02-07 08:00 | Earnings | Unclassified earnings release | [2024 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bbd3fa0db5af0326a3c9e01ebbf7c57be&lang=en&src=listed) | Open official announcement | 12.64% | -0.39% | -1.77% | -0.59% | -3.09% | No |
| 2024-11-07 08:00 | Earnings | In line / unchanged | [2024 9 months and III quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bb667f6d60a4ae9839daa00d89907b26d&lang=en&src=listed) | Open official announcement | 10.28% | -1.57% | -1.57% | 1.26% | 1.43% | No |
| 2024-08-08 08:00 | Earnings | Lower profit | [2024 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b65604783003c7a2e357550bbbd624344&lang=en&src=listed) | Open official announcement | 0.97% | 0.48% | -0.48% | -1.21% | -0.01% | No |
| 2024-06-21 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.3 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.3  | 0.37% | 1.11% | 1.61% | 3.21% | 1.41% | No |
| 2024-06-07 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.3 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.3  | -1.58% | -7.32% | -7.78% | -4.58% | -7.73% | Yes |
| 2024-05-31 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 7 June 2024](https://view.news.eu.nasdaq.com/view?id=b822b2db4e743d919780c7c11a1ac0a0e&lang=en&src=listed) | Open official announcement | 1.14% | 0.11% | -8.68% | -7.33% | -8.66% | Yes |
| 2024-05-09 08:37 | Earnings | Unclassified earnings release | [Parandusteade: 2024. aasta 3 kuu konsolideeritud auditeerimata vahearuanne](https://view.news.eu.nasdaq.com/view?id=b99662d5860b4b7d9e7a39ce3d2573cfb&lang=et&src=listed) | Open official announcement | -0.35% | 0.70% | 1.40% | -5.59% | 3.04% | No |
| 2024-04-04 08:00 | Earnings | Unclassified earnings release | [Audited annual report 2023](https://view.news.eu.nasdaq.com/view?id=b7de9f3ba6c04effe8ea11e598e51dc12&lang=en&src=listed) | Open official announcement | 0.00% | 0.85% | 4.12% | 4.12% | 3.99% | No |
| 2024-02-08 08:00 | Earnings | Unclassified earnings release | [2023 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b4ddb50fdafbf8397fb617e662ab100d9&lang=en&src=listed) | Open official announcement | 1.26% | -0.75% | -0.50% | 0.12% | -0.74% | No |
| 2023-11-02 08:00 | Earnings | Higher profit | [2023 9 months and III quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=ba6acfb56eb829b5006ac549813b8f961&lang=en&src=listed) | Open official announcement | -1.08% | 1.90% | 3.67% | 3.13% | 5.37% | Yes |
| 2023-08-03 08:00 | Earnings | In line / unchanged | [2023 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b188d998f8dac4fce9a682ba5115b0b16&lang=en&src=listed) | Open official announcement | 1.85% | -1.04% | -1.42% | -3.50% | 0.57% | Yes |
| 2023-06-16 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1  | 0.83% | 0.96% | 2.75% | 4.54% | 2.64% | Yes |
| 2023-06-02 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1  | -0.37% | -6.85% | -10.21% | -6.85% | -9.34% | No |
| 2023-05-30 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 2 June 2023](https://view.news.eu.nasdaq.com/view?id=b51885ca6f7b99c5144d28648b78ccfbf&lang=en&src=listed) | Open official announcement | -0.50% | -0.12% | -8.71% | -6.97% | -7.20% | No |
| 2023-05-05 08:00 | Earnings | Higher profit | [2023 3 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bf6987e0e8ca9af4f7a15a5ec3adb7752&lang=en&src=listed) | Open official announcement | -1.23% | 0.75% | 0.75% | -8.36% | 1.43% | No |
| 2023-04-06 08:00 | Earnings | Higher profit | [Audited annual report 2022](https://view.news.eu.nasdaq.com/view?id=b3d3b09e4a692a75f2d646b884c5fbd77&lang=en&src=listed) | Open official announcement | 1.29% | 1.02% | 2.41% | 2.41% | 2.38% | No |
| 2023-02-09 08:00 | Earnings | Unclassified earnings release | [2022 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bd2c3a7f412a5698c8fcbb6834ab559d0&lang=en&src=listed) | Open official announcement | 8.58% | -1.02% | 2.04% | -0.51% | 1.76% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (11 classified of 21 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 5 | 0.70% | 0.739 | 0.75% | 80% | 0.58% | 0.777 | 0.61% |
| Higher profit | 5d | 5 | 0.72% | 7.511 | 0.75% | 80% | 0.99% | 12.178 | 1.43% |
| Higher profit | 21d | 5 | -0.75% | 26.874 | 2.41% | 60% | 0.76% | 22.179 | 2.55% |
| Lower profit | 1d | 1 | 0.48% | — | 0.48% | 100% | 0.34% | — | 0.34% |
| Lower profit | 5d | 1 | -0.48% | — | -0.48% | 0% | -0.01% | — | -0.01% |
| Lower profit | 21d | 1 | -1.21% | — | -1.21% | 0% | -1.20% | — | -1.20% |
| In line / unchanged | 1d | 5 | -0.56% | 0.592 | -0.54% | 20% | -0.30% | 0.918 | -0.66% |
| In line / unchanged | 5d | 5 | -0.34% | 13.703 | -1.45% | 20% | 0.49% | 7.209 | 0.57% |
| In line / unchanged | 21d | 5 | -0.45% | 39.139 | -2.54% | 40% | -0.26% | 22.177 | -2.12% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 10 | 1.844 | 0.1745 | 0.5211 | No adjusted evidence |
| 5d | 2 | 10 | 0.098 | 0.7540 | 0.8294 | No adjusted evidence |
| 21d | 2 | 10 | 0.098 | 0.7540 | 0.8294 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![MRK1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/MRK1T_all_frontiers.png?v=1792486188)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.000176 | -0.574166 | M2Sortino | 0.231256 | -0.329511 |
| AdjustedSharpe | 0.276910 | 3.557501 | MSquaredExcess | 0.007987 | -0.445416 |
| AnnualizedReturn_Arithmetic | 0.219897 | -0.396606 | Martin | 2.953061 | -2.072142 |
| AnnualizedReturn_Geometric | 0.228513 | -0.336957 | MaximumDrawdown | 0.213246 | 0.213246 |
| Appraisal | 1.240587 | -2.337786 | Modigliani | 0.000911 | -0.001466 |
| ArithmeticReturn | 0.000873 | -0.001574 | NetSelectivity | 0.009402 | -0.591620 |
| AverageDrawdown | 0.030621 | 0.055630 | Omega | 1.329059 | 0.580787 |
| AverageDrawdownLength | 22.258065 | 30.750000 | OmegaExcessReturn | 0.192319 | -0.381164 |
| AverageRecoveryTime | 11.064516 | 6.750000 | PainIndex | 0.049366 | 0.148000 |
| BernardoLedoit | 1.329059 | 0.580787 | PainRatio | 4.628938 | -2.276735 |
| BetaCoKurtosis | -0.013832 | 0.214573 | Prospect | -0.386314 | -0.686616 |
| BetaCoSkewness | -0.108044 | 12.836893 | Rachev | 1.344492 | 0.616486 |
| Burke | 0.901691 | -2.371925 | Selectivity | 0.207631 | -0.381428 |
| CAPMAlpha | 0.000792 | -0.001741 | Sharpe_Annualized | 1.307029 | -2.383941 |
| CAPMBeta | 0.091312 | 0.187476 | Sharpe_Daily | 0.082335 | -0.150174 |
| CDD | 0.054320 | 0.140231 | Sharpe_ES | 0.040486 | -0.051550 |
| Calmar | 1.071592 | -1.580130 | Sharpe_VaR | 0.072461 | -0.104490 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | 1.268852 | -2.208140 |
| CoSkewness | -0.000000 | 0.000000 | Sortino | 0.138032 | -0.172439 |
| CumulativeReturn | 0.851101 | -0.185726 | SpecificRisk | 0.167365 | 0.163158 |
| DRatio | 0.694712 | 2.459716 | Sterling | 0.729500 | -1.075693 |
| DownCapture | 0.035101 | 0.407574 | SystematicRisk | 0.016034 | 0.029052 |
| DownNumber | 0.430818 | 0.490566 | TotalRisk | 0.168131 | 0.165724 |
| DownPercent | 0.808176 | 0.792453 | TrackingError_Annualized | 0.231319 | 0.206609 |
| DownsideDeviation | 0.006322 | 0.009127 | TrackingError_Daily | 0.014572 | 0.013015 |
| DrawdownDeviation | 0.010945 | 0.019004 | Treynor_Annualized | 2.502555 | -1.797332 |
| ES_Loss | 0.021553 | 0.030530 | Treynor_Daily | 0.008948 | -0.008691 |
| FamaBeta | 0.958116 | 1.073578 | UlcerIndex | 0.077382 | 0.162613 |
| GeometricReturn | 0.000817 | -0.001629 | UpCapture | 0.232974 | -0.045421 |
| Hurst | 0.405900 | 0.474740 | UpNumber | 0.470183 | 0.342466 |
| Information_Annualized | -0.000761 | -2.779003 | UpPercent | 0.243119 | 0.164384 |
| Information_Daily | -0.000039 | -0.190111 | UpsidePotential | 0.557509 | 0.238902 |
| JensenAlpha | 0.207631 | -0.381428 | UpsideRisk | 0.008542 | 0.005304 |
| Kappa | 0.082490 | -0.102340 | VaR_Loss | 0.012042 | 0.015062 |
| Kelly | 7.768742 | -14.329540 | Volatility | 0.010598 | 0.010480 |
| Kurtosis | 17.955590 | 17.229892 | Volatility_Annualized | 0.168242 | 0.166365 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.779661</td><td>-0.033898</td></tr><tr><td>OUT</td><td>96</td><td>92</td><td>-4</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.128075</td><td>-0.019698</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.150343</td><td>-0.011150</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>MRK1T shares</td><td>20</td><td>44</td><td>+24</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8562.699976</td><td>650.400009</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.593220</td><td>0.135593</td></tr><tr><td>OUT</td><td>62</td><td>72</td><td>+10</td></tr><tr><td>IN</td><td>8</td><td>2</td><td>-6</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.092428</td><td>0.022255</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.103788</td><td>0.012632</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 20 MRK1T shares. The scenario adds 24 shares from Table 3A, resulting in 44 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="MRK1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![MRK1T high-resolution stochastic dominance](figures/stock_profiles/MRK1T_FSD_SSD_TSD.png?v=1792486459)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-virsi" data-signal="HOLD">
<summary><strong>VIRSI — VIRŠI-A</strong> | HOLD | target 125 shares | priority 3</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>125</td><td>+125</td><td>3.69%</td><td>EUR 4.4200</td><td>0.3729</td><td>44 / 0</td><td>56.60</td><td>Bearish</td><td>Inside bands</td><td>0.362 (Neutral)</td><td>HOLD</td><td>0.001363 (1.757% of portfolio HHI)</td><td>EUR 2,721</td><td>20.3%</td><td>2.4%</td><td>HIGH</td></tr></tbody></table>

![VIRSI Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/VIRSI_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 4.4200 | EUR 4.4040 | -0.36% | EUR 4.4450 | +0.56% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![VIRSI complete technical history](figures/technical_analysis/VIRSI_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![VIRSI return histogram](figures/stock_profiles/VIRSI_histogram.png?v=1792485735)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -16.89% (2025-11-06) | Average gain / average loss | 1.006 | Best 21-day period | 10.50% (ending 2026-08-14) |
| Average underwater drawdown | 7.25% | Upside potential ratio | 1.386 | Worst 21-day period | -4.29% (ending 2024-07-03) |
| Conditional drawdown 95% | 15.97% | Upside capture vs Baltic EW | 19.4% | Best 5-day period | 7.41% (ending 2026-08-13) |
| Ulcer index | 8.48 | Downside capture vs Baltic EW | 19.2% | Best 63-day period | 10.75% (ending 2026-10-12) |
| Longest underwater period | 1234 calendar days | Positive trading days | 33.1% | Repeated calendar pattern | Jun: 0% positive across 4 years |
| Daily downside deviation | 0.323% | Best day | 3.88% (2026-01-05) |  |  |
| Daily upside deviation | 0.342% | Worst day | -2.56% (2025-08-19) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.071%); worst: Monday (-0.068%) | 0.0662 | 0.1902 | Not detected |
| Calendar month | Best: Dec (0.090% daily); worst: Jun (-0.094% daily) | 0.3448 | 0.5029 | Not detected |
| Turn of month | First/last three days: -0.034%; other days: 0.010% | 0.7474 | 0.9400 | Not detected |

![VIRSI seasonality, drawdowns and upside periods](figures/stock_profiles/VIRSI_seasonality.png?v=1792486394)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-05-31 | 2025-11-06 | Not recovered | -16.89% | 1234 |
| 2 | 2023-03-07 | 2023-03-24 | 2023-04-11 | -1.67% | 35 |
| 3 | 2023-01-03 | 2023-02-02 | 2023-02-28 | -1.24% | 56 |
| 4 | 2023-04-14 | 2023-05-10 | 2023-05-16 | -0.67% | 32 |
| 5 | 2023-05-17 | 2023-05-22 | 2023-05-30 | -0.44% | 13 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2026-07-16 | 2026-08-14 | 10.50% |
| 2 | 2025-12-04 | 2026-01-12 | 7.98% |
| 3 | 2024-09-19 | 2024-10-18 | 3.92% |
| 4 | 2023-11-03 | 2023-12-05 | 3.07% |
| 5 | 2025-08-19 | 2025-09-18 | 2.89% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (23 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 1 | 0.67% | 1.56% | 1.80% | 100% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 4 | -0.21% | -0.78% | -1.00% | 0% | 0% | 0.3354 | 0.7784 | No adjusted statistical evidence |
| Earnings | 9 | 0.14% | 0.70% | 1.49% | 78% | 0% | 0.7840 | 0.1724 | No adjusted statistical evidence |
| Ex-dividend | 5 | -0.20% | -0.08% | -1.15% | 80% | 20% | 1.0000 | 0.5784 | No adjusted statistical evidence; price drop may be mechanical |
| Revenue | 4 | 0.24% | -0.14% | 0.87% | 50% | 0% | 1.0000 | 0.7627 | No adjusted statistical evidence |

![VIRSI official announcements and abnormal returns](figures/stock_profiles/VIRSI_company_events.png?v=1792491529)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (23 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-07 08:00 | Earnings | Higher profit | [AS VIRŠI-A reports net profit of EUR 4.2 million in the first half of the year](https://view.news.eu.nasdaq.com/view?id=b048574882a6dccd458b5a2309f4c8dad&lang=en&src=listed) | NET PROFIT; PROFIT; EUR 4.2 million | 2.46% | 2.16% | 6.25% | 6.73% | 6.13% | No |
| 2026-06-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0592514 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0592514  | -0.49% | 0.74% | -0.74% | -1.23% | -0.00% | No |
| 2026-06-03 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0592514 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0592514  | -0.25% | 0.25% | 0.25% | -0.74% | 0.17% | No |
| 2026-04-20 20:10 | Earnings | Higher profit | [AS VIRŠI-A publishes its Annual Report for 2025 together with the independent auditor's report](https://view.news.eu.nasdaq.com/view?id=ba558c89bfdc2f69a4deff05711de1e6f&lang=en&src=listed) | Open official announcement | -0.25% | 0.25% | 0.75% | 1.24% | 0.61% | No |
| 2026-02-27 08:00 | Revenue | — | [AS VIRŠI-A achieves its highest ever turnover in 2025](https://view.news.eu.nasdaq.com/view?id=b513838be4f792a12846ffacad5122890&lang=en&src=listed) | TURNOVER | 0.75% | -0.25% | -0.25% | -1.23% | 0.64% | No |
| 2025-08-08 08:18 | Revenue | — | [AS VIRŠI-A closes the first half of the year with EUR 188.6 million turnover and EUR 7.4 million in investments](https://view.news.eu.nasdaq.com/view?id=b72604ee36bcda46757ed90c363359b0e&lang=en&src=listed) | TURNOVER; EUR 188.6 million; EUR 7.4 million | -0.25% | 0.00% | -0.51% | 0.25% | -1.44% | No |
| 2025-06-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0493432 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0493432  | -0.25% | 0.00% | -2.25% | -1.50% | -1.10% | No |
| 2025-06-03 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0493432 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0493432  | 0.50% | -0.74% | -0.50% | -1.74% | 0.11% | No |
| 2025-04-23 17:19 | Earnings | Higher profit | [AS VIRŠI-A publishes the Annual Report for 2024 together with the independent auditor's report](https://view.news.eu.nasdaq.com/view?id=bf523dd7861c8fab9ddd242808a244245&lang=en&src=listed) | Open official announcement | 0.00% | -0.25% | -0.25% | -0.50% | -0.98% | No |
| 2024-06-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0539219 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0539219  | -0.71% | -0.72% | -0.96% | -1.67% | -1.06% | No |
| 2024-06-03 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0539219 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0539219  | 0.71% | -0.71% | -1.42% | -2.84% | -1.40% | Yes |
| 2024-04-18 09:09 | Earnings | Higher profit | [CORRECTION: AS VIRŠI-A publishes the Annual Report for 2023 together with the independent auditor's report](https://view.news.eu.nasdaq.com/view?id=b466ac709f2159039d184385e4ad52fac&lang=en&src=listed) | Open official announcement | 0.00% | 0.24% | 0.24% | 0.72% | -0.18% | No |
| 2024-04-17 21:45 | Earnings | Higher profit | [AS VIRŠI-A publishes the Annual Report for 2023 together with the independent auditor's report](https://view.news.eu.nasdaq.com/view?id=ba88cb61a4d31e37e2fa17d2a29a1ec94&lang=en&src=listed) | Open official announcement | 0.48% | -0.24% | 0.00% | 0.48% | 0.24% | No |
| 2024-02-29 08:48 | Earnings | Higher profit | [Virši closes 2023 with significant investments and strong financial results](https://view.news.eu.nasdaq.com/view?id=b43bb7d049c07dece64ce4d57e39951f2&lang=en&src=listed) | Open official announcement | -0.46% | -0.23% | -0.47% | -3.49% | 0.06% | No |
| 2023-10-20 17:00 | Earnings | Unclassified earnings release | [Summary of AS VIRŠI-A operational activity and other developments for the 3rd quarter of 2023](https://view.news.eu.nasdaq.com/view?id=bc39fc4eced0375f0064fdb722e4b3586&lang=en&src=listed) | Open official announcement | -0.23% | -0.23% | -0.46% | -0.91% | 0.12% | No |
| 2023-08-09 08:56 | Revenue | — | [AS VIRŠI-A continues its strong development, closing the first half of the year with a turnover of EUR 162.4 million](https://view.news.eu.nasdaq.com/view?id=b126a477a933003098d0361448ad4d8cb&lang=en&src=listed) | TURNOVER; EUR 162.4 million | -0.23% | -0.68% | 0.23% | 0.00% | 0.36% | No |
| 2023-06-14 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.109776 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.109776  | -0.45% | -0.45% | -0.90% | 0.45% | -0.94% | No |
| 2023-06-01 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.109776 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.109776  | 0.45% | -0.67% | -0.89% | -1.33% | 0.10% | No |
| 2023-05-30 07:52 | Ex-dividend | — | [Dividend payment ex-date of AS VIRŠI-A](https://view.news.eu.nasdaq.com/view?id=b95307478ed703eb6a6594e6483ae7324&lang=en&src=listed) | Open official announcement | 0.22% | 0.00% | -0.89% | -2.00% | 0.62% | No |
| 2023-04-13 17:51 | Earnings | Higher profit | [CORRECTION: AS VIRŠI-A publishes the Annual Report for 2022 together with the independent auditor's report ](https://view.news.eu.nasdaq.com/view?id=b71e71be9aca08c9238dfe0ef5b58250b&lang=en&src=listed) | Open official announcement | 1.58% | 0.00% | -0.22% | 0.00% | 0.18% | No |
| 2023-04-11 09:46 | Earnings | Higher profit | [AS VIRŠI-A publishes the Annual Report for 2022 together with the independent auditor's report](https://view.news.eu.nasdaq.com/view?id=b31df8561e981d64f5ba8353f4ce922e5&lang=en&src=listed) | Open official announcement | 1.13% | 0.00% | 0.00% | 0.00% | 0.11% | No |
| 2023-04-04 08:53 | Dividend announcement | — | [Publishing of the audited annual report for 2022 and dividend distribution proposal of AS VIRŠI-A](https://view.news.eu.nasdaq.com/view?id=b22543b41d7f8c92cda2c9ffaacd0e72e&lang=en&src=listed) | Open official announcement | -0.23% | 0.23% | 1.58% | 0.90% | 1.56% | No |
| 2023-02-28 08:47 | Revenue | — | [AS VIRŠI-A grows its turnover by 70% in 2022](https://view.news.eu.nasdaq.com/view?id=bce503546959b4b4c47fd23734df006a1&lang=en&src=listed) | TURNOVER; 70% | 2.05% | 0.00% | 0.11% | -1.23% | -0.11% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (8 classified of 9 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 8 | 0.24% | 0.644 | 0.00% | 38% | 0.17% | 0.487 | 0.03% |
| Higher profit | 5d | 8 | 0.79% | 5.006 | 0.00% | 38% | 0.77% | 4.903 | 0.15% |
| Higher profit | 21d | 8 | 0.65% | 8.093 | 0.24% | 50% | 1.38% | 10.208 | 1.68% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![VIRSI Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/VIRSI_all_frontiers.png?v=1792486192)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.248997 | -0.200331 | M2Sortino | -0.021757 | 0.039084 |
| AdjustedSharpe | -0.228646 | 0.487406 | MSquaredExcess | -0.225190 | -0.132659 |
| AnnualizedReturn_Arithmetic | -0.017763 | 0.039249 | Martin | -0.204125 | 2.586994 |
| AnnualizedReturn_Geometric | -0.020308 | 0.036878 | MaximumDrawdown | 0.173775 | 0.031599 |
| Appraisal | -0.280065 | 0.476953 | Modigliani | -0.000167 | 0.000309 |
| ArithmeticReturn | -0.000070 | 0.000156 | NetSelectivity | -0.117062 | -0.082821 |
| AverageDrawdown | 0.031050 | 0.010552 | Omega | 0.952821 | 1.098862 |
| AverageDrawdownLength | 107.000000 | 15.125000 | OmegaExcessReturn | -0.039201 | 0.020479 |
| AverageRecoveryTime | 35.285714 | 11.000000 | PainIndex | 0.084862 | 0.010946 |
| BernardoLedoit | 0.952821 | 1.098862 | PainRatio | -0.239300 | 3.369202 |
| BetaCoKurtosis | 0.010497 | 0.034514 | Prospect | -0.587322 | -0.535624 |
| BetaCoSkewness | -1.924716 | -11.264759 | Rachev | 0.954479 | 0.977323 |
| Burke | -0.195219 | 0.901220 | Selectivity | -0.020793 | 0.037148 |
| CAPMAlpha | -0.000072 | 0.000157 | Sharpe_Annualized | -0.239101 | 0.501923 |
| CAPMBeta | 0.002121 | -0.001136 | Sharpe_Daily | -0.015062 | 0.031618 |
| CDD | 0.079544 | 0.020799 | Sharpe_ES | -0.006455 | 0.014881 |
| Calmar | -0.116861 | 1.167082 | Sharpe_VaR | -0.009790 | 0.021000 |
| CoKurtosis | 0.000000 | 0.000000 | Skewness | 0.479749 | 0.124337 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | -0.021361 | 0.046000 |
| CumulativeReturn | -0.059541 | 0.018272 | SpecificRisk | 0.074242 | 0.077886 |
| DRatio | 1.070846 | 0.755133 | Sterling | -0.074176 | 0.280234 |
| DownCapture | -0.011262 | -0.039889 | SystematicRisk | 0.000372 | -0.000176 |
| DownNumber | 0.308176 | 0.301887 | TotalRisk | 0.074243 | 0.077886 |
| DownPercent | 0.886792 | 0.924528 | TrackingError_Annualized | 0.190323 | 0.173733 |
| DownsideDeviation | 0.003300 | 0.003386 | TrackingError_Daily | 0.011989 | 0.010944 |
| DrawdownDeviation | 0.006378 | 0.003585 | Treynor_Annualized | -9.575251 | -32.456639 |
| ES_Loss | 0.010920 | 0.010467 | Treynor_Daily | -0.038387 | -0.126487 |
| FamaBeta | 0.423082 | 0.504616 | UlcerIndex | 0.099486 | 0.014255 |
| GeometricReturn | -0.000081 | 0.000144 | UpCapture | -0.025506 | 0.004847 |
| Hurst | 0.395572 | 0.439377 | UpNumber | 0.316514 | 0.356164 |
| Information_Annualized | -1.308288 | -1.153097 | UpPercent | 0.119266 | 0.136986 |
| Information_Daily | -0.074984 | -0.064081 | UpsidePotential | 0.431408 | 0.511300 |
| JensenAlpha | -0.020793 | 0.037148 | UpsideRisk | 0.003315 | 0.003554 |
| Kappa | -0.014051 | 0.031662 | VaR_Loss | 0.007200 | 0.007417 |
| Kelly | -3.218401 | 6.418696 | Volatility | 0.004680 | 0.004926 |
| Kurtosis | 13.330999 | 6.746270 | Volatility_Annualized | 0.074292 | 0.078197 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.147864</td><td>0.000091</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161557</td><td>0.000065</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>VIRSI shares</td><td>0</td><td>125</td><td>+125</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8464.799967</td><td>552.500000</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.466102</td><td>0.008475</td></tr><tr><td>OUT</td><td>62</td><td>63</td><td>+1</td></tr><tr><td>IN</td><td>8</td><td>8</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.067717</td><td>-0.002456</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.090791</td><td>-0.000364</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 VIRSI shares. The scenario adds 125 shares from Table 3A, resulting in 125 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="VIRSI"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![VIRSI high-resolution stochastic dominance](figures/stock_profiles/VIRSI_FSD_SSD_TSD.png?v=1792486479)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-vlp1l" data-signal="HOLD">
<summary><strong>VLP1L — Vilkyškių pieninė</strong> | HOLD | target 72 shares | priority 4</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>42</td><td>72</td><td>+30</td><td>7.52%</td><td>EUR 15.6000</td><td>0.3644</td><td>43 / 0</td><td>65.87</td><td>Bullish</td><td>Above upper band</td><td>1.000 (Overbought)</td><td>HOLD</td><td>0.005662 (7.302% of portfolio HHI)</td><td>EUR 21,740</td><td>2.2%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![VLP1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/VLP1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 15.6000 | EUR 15.1951 | -2.60% | EUR 15.5499 | -0.32% | SELL |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![VLP1L complete technical history](figures/technical_analysis/VLP1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![VLP1L return histogram](figures/stock_profiles/VLP1L_histogram.png?v=1792485730)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -21.29% (2025-09-05) | Average gain / average loss | 1.216 | Best 21-day period | 35.81% (ending 2025-05-13) |
| Average underwater drawdown | 7.08% | Upside potential ratio | 1.424 | Worst 21-day period | -10.89% (ending 2023-06-05) |
| Conditional drawdown 95% | 18.03% | Upside capture vs Baltic EW | 133.7% | Best 5-day period | 17.77% (ending 2025-04-28) |
| Ulcer index | 8.35 | Downside capture vs Baltic EW | 34.6% | Best 63-day period | 44.34% (ending 2026-07-02) |
| Longest underwater period | 326 calendar days | Positive trading days | 42.4% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.770% | Best day | 13.80% (2025-01-23) |  |  |
| Daily upside deviation | 1.087% | Worst day | -8.13% (2026-03-02) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Thursday (0.189%); worst: Wednesday (0.077%) | 0.9479 | 0.9479 | Not detected |
| Calendar month | Best: Dec (0.466% daily); worst: Mar (-0.170% daily) | 0.2818 | 0.4816 | Not detected |
| Turn of month | First/last three days: 0.133%; other days: 0.139% | 0.9400 | 0.9400 | Not detected |

![VLP1L seasonality, drawdowns and upside periods](figures/stock_profiles/VLP1L_seasonality.png?v=1792486384)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-05-12 | 2025-09-05 | 2026-02-19 | -21.29% | 283 |
| 2 | 2023-01-23 | 2023-08-31 | 2023-12-15 | -16.67% | 326 |
| 3 | 2026-02-19 | 2026-03-25 | 2026-06-05 | -11.24% | 106 |
| 4 | 2024-02-29 | 2024-05-21 | 2024-06-05 | -9.64% | 97 |
| 5 | 2026-07-02 | 2026-07-30 | Not recovered | -7.52% | 106 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-04-07 | 2025-05-13 | 35.81% |
| 2 | 2026-05-29 | 2026-07-02 | 35.74% |
| 3 | 2024-05-10 | 2024-06-10 | 18.68% |
| 4 | 2024-08-05 | 2024-09-05 | 18.21% |
| 5 | 2024-12-16 | 2025-01-23 | 16.05% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (21 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Earnings | 16 | -0.46% | 0.55% | 3.53% | 38% | 44% | 0.7840 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 4 | -2.25% | -2.18% | 2.49% | 25% | 50% | 0.2550 | 1.0000 | No adjusted statistical evidence; price drop may be mechanical |
| Revenue | 1 | -0.95% | 3.80% | 13.41% | 100% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![VLP1L official announcements and abnormal returns](figures/stock_profiles/VLP1L_company_events.png?v=1792491519)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (21 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-31 18:45 | Earnings | Higher profit | [VILVI Group unaudited consolidated financial results for the six months of 2026](https://view.news.eu.nasdaq.com/view?id=b3af999bf1bb819fe7a925bdaf9adfacc&lang=en&src=listed) | Open official announcement | 0.32% | -2.25% | -1.29% | -0.96% | -0.66% | Yes |
| 2026-06-05 09:51 | Revenue | — | [VILVI Group Expects Revenue Growth of Approximately 50% to EUR 430 Million in 2026](https://view.news.eu.nasdaq.com/view?id=b58538e57a5a9de23352ab2c6ae7b2ada&lang=en&src=listed) | REVENUE; 50%; EUR 430 Million | 11.49% | -1.15% | 3.44% | 13.36% | 3.80% | No |
| 2026-05-29 16:04 | Earnings | Higher profit | [VILVI Group unaudited consolidated financial results for the first three months of 2026 ](https://view.news.eu.nasdaq.com/view?id=b73e15abb9a115ef79400c112c0e2abfc&lang=en&src=listed) | Open official announcement | -0.42% | -2.13% | 11.49% | 35.74% | 11.00% | No |
| 2026-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.23 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.23  | 0.00% | 0.00% | 1.29% | 13.36% | 1.84% | No |
| 2026-02-27 16:05 | Earnings | Unclassified earnings release | [Unaudited financial results of VILVI Group for the 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b89d35c9363227f9267573d12c35b6d63&lang=en&src=listed) | Open official announcement | -1.20% | -8.13% | -5.69% | -8.13% | -4.81% | No |
| 2025-11-28 09:39 | Earnings | Unclassified earnings release | [Unaudited consolidated financial results of VILVI Group for 9 months of 2025](https://view.news.eu.nasdaq.com/view?id=bd30dd181058527539fdc4e68606f60b2&lang=en&src=listed) | Open official announcement | -2.30% | 3.30% | 4.72% | 8.49% | 4.26% | Yes |
| 2025-08-29 09:44 | Earnings | Unclassified earnings release | [VILVI Group unaudited consolidated financial results for the six months of 2025](https://view.news.eu.nasdaq.com/view?id=b173e4dfa80bfab952b1139285ae4239d&lang=en&src=listed) | Open official announcement | -1.96% | -0.20% | -2.00% | 10.50% | -2.44% | Yes |
| 2025-05-30 09:03 | Earnings | Unclassified earnings release | [Unaudited consolidated financial results of VILVI Group for 3 months of 2025](https://view.news.eu.nasdaq.com/view?id=b5987d77bf7d423cfa8d1cf0dbf060cae&lang=en&src=listed) | Open official announcement | -3.35% | 0.87% | -0.43% | -3.03% | -0.15% | No |
| 2025-05-13 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.54 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.54  | 13.70% | -1.61% | -3.61% | -8.84% | -4.03% | Yes |
| 2025-02-28 09:18 | Earnings | Higher profit | [Unaudited financial results of VILVI Group for the 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=b80043a95d6bfbaf23c3b35d2c54d0628&lang=en&src=listed) | Open official announcement | 1.31% | -1.08% | -2.58% | -0.43% | -2.58% | No |
| 2024-11-29 09:47 | Earnings | Higher profit | [Unaudited financial results of VILVI GROUP for the nine months of 2024](https://view.news.eu.nasdaq.com/view?id=b117a583cc9fb584f6332942b5f650d6e&lang=en&src=listed) | Open official announcement | 4.28% | 3.08% | 3.85% | 4.87% | 1.96% | No |
| 2024-08-30 09:52 | Earnings | Unclassified earnings release | [Unaudited financial results of VILVI GROUP for the first six months of 2024](https://view.news.eu.nasdaq.com/view?id=b28c7660c9a343961920f78323a76e842&lang=en&src=listed) | Open official announcement | 7.83% | 1.96% | -0.56% | -1.68% | -0.60% | No |
| 2024-05-31 09:15 | Earnings | Higher profit | [Unaudited financial results of VILVI GROUP for the first three months of 2024](https://view.news.eu.nasdaq.com/view?id=bdc9fad615b1b400b2d71d0fb24eea209&lang=en&src=listed) | Open official announcement | 7.00% | -0.36% | 8.73% | 9.45% | 8.75% | No |
| 2024-05-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.31 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.31  | -1.11% | -4.10% | -4.85% | 11.57% | -3.21% | No |
| 2024-02-29 09:55 | Earnings | Lower profit | [Unaudited financial results of VILVI GROUP for the 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=b470f79fae07f4b1d6e98116365578bcc&lang=en&src=listed) | Open official announcement | 3.32% | -1.43% | -6.43% | -8.21% | -5.91% | Yes |
| 2023-11-30 16:23 | Earnings | Unclassified earnings release | [Unaudited financial results of “Vilvi Group“ for the first nine months of 2023](https://view.news.eu.nasdaq.com/view?id=be1812e8d1b4bb947b47179a1eb511875&lang=en&src=listed) | Open official announcement | -0.42% | 0.00% | 1.69% | 11.02% | 2.78% | Yes |
| 2023-08-31 09:57 | Earnings | Unclassified earnings release | [Unaudited financial results of “Vilvi Group“ for the first six months of 2023](https://view.news.eu.nasdaq.com/view?id=b5fdaf6ff1bb94e6db906304d6b212e7d&lang=en&src=listed) | Open official announcement | -2.47% | 1.61% | 3.22% | 6.67% | 3.20% | Yes |
| 2023-06-01 08:45 | Earnings | Unclassified earnings release | [Correction: Unaudited financial results of “Vilvi Group“ for the first three months of 2023](https://view.news.eu.nasdaq.com/view?id=b9351d6bc063f7a26847bf61d7c67ef44&lang=en&src=listed) | Open official announcement | -1.47% | -1.28% | -2.13% | -5.53% | -1.25% | No |
| 2023-05-31 16:30 | Earnings | Unclassified earnings release | [Unaudited financial results of “Vilvi Group“ for the first three months of 2023](https://view.news.eu.nasdaq.com/view?id=b28225eaaca9efd36b0669b07794d25cd&lang=en&src=listed) | Open official announcement | 0.21% | -1.47% | -3.56% | -6.71% | -2.58% | No |
| 2023-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.265 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.265  | -1.56% | -3.95% | -4.74% | -9.49% | -3.32% | Yes |
| 2023-02-28 09:15 | Earnings | Higher profit | [Unaudited financial results of “Vilvi Group“ for the 12 months of 2022](https://view.news.eu.nasdaq.com/view?id=bceb5a3a5e69731357e66b3b34c1c56e1&lang=en&src=listed) | Open official announcement | -1.57% | -0.40% | -1.99% | 0.80% | -2.21% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (7 classified of 16 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 6 | -0.52% | 3.773 | -0.74% | 17% | -0.65% | 2.561 | -0.91% |
| Higher profit | 5d | 6 | 3.03% | 36.003 | 1.28% | 50% | 2.71% | 33.884 | 0.65% |
| Higher profit | 21d | 6 | 8.25% | 196.925 | 2.83% | 67% | 8.06% | 205.781 | 1.32% |
| Lower profit | 1d | 1 | -1.43% | — | -1.43% | 0% | -1.82% | — | -1.82% |
| Lower profit | 5d | 1 | -6.43% | — | -6.43% | 0% | -5.91% | — | -5.91% |
| Lower profit | 21d | 1 | -8.21% | — | -8.21% | 0% | -6.55% | — | -6.55% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![VLP1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/VLP1L_all_frontiers.png?v=1792486189)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | 0.103798 | 0.335868 | M2Sortino | 0.332887 | 0.563470 |
| AdjustedSharpe | -0.792235 | -2.184440 | MSquaredExcess | 0.044566 | 0.125481 |
| AnnualizedReturn_Arithmetic | 0.308070 | 0.479041 | Martin | 5.265313 | 9.792844 |
| AnnualizedReturn_Geometric | 0.332487 | 0.573077 | MaximumDrawdown | 0.157158 | 0.112450 |
| Appraisal | 1.553874 | 2.408683 | Modigliani | 0.001042 | 0.001302 |
| ArithmeticReturn | 0.001223 | 0.001901 | NetSelectivity | 0.064232 | 0.226696 |
| AverageDrawdown | 0.039828 | 0.026784 | Omega | 1.369319 | 1.540203 |
| AverageDrawdownLength | 25.392857 | 12.444444 | OmegaExcessReturn | 0.290002 | 0.527552 |
| AverageRecoveryTime | 14.107143 | 7.222222 | PainIndex | 0.047953 | 0.043557 |
| BernardoLedoit | 1.369319 | 1.540203 | PainRatio | 6.933606 | 13.156916 |
| BetaCoKurtosis | -0.007644 | 0.180060 | Prospect | -0.392858 | -0.265746 |
| BetaCoSkewness | -0.725375 | -8.594713 | Rachev | 1.428309 | 1.339621 |
| Burke | 1.256071 | 4.765844 | Selectivity | 0.319473 | 0.540466 |
| CAPMAlpha | 0.001173 | 0.001778 | Sharpe_Annualized | 1.495653 | 2.116998 |
| CAPMBeta | 0.056906 | 0.137476 | Sharpe_Daily | 0.094217 | 0.133358 |
| CDD | 0.095077 | 0.056340 | Sharpe_ES | 0.050656 | 0.065740 |
| Calmar | 2.115625 | 5.096293 | Sharpe_VaR | 0.084766 | 0.143087 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | 1.859172 | -0.912603 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | 0.164747 | 0.202250 |
| CumulativeReturn | 1.360478 | 0.254224 | SpecificRisk | 0.205598 | 0.224383 |
| DRatio | 0.658191 | 0.533325 | Sterling | 1.292930 | 2.697470 |
| DownCapture | -0.130313 | -0.061796 | SystematicRisk | 0.009993 | 0.021304 |
| DownNumber | 0.361635 | 0.396226 | TotalRisk | 0.205841 | 0.225392 |
| DownPercent | 0.798742 | 0.811321 | TrackingError_Annualized | 0.264105 | 0.261945 |
| DownsideDeviation | 0.007420 | 0.009399 | TrackingError_Daily | 0.016637 | 0.016501 |
| DrawdownDeviation | 0.010767 | 0.011334 | Treynor_Annualized | 5.842701 | 4.168566 |
| ES_Loss | 0.024133 | 0.028916 | Treynor_Daily | 0.020028 | 0.013089 |
| FamaBeta | 1.173012 | 1.460236 | UlcerIndex | 0.063147 | 0.058520 |
| GeometricReturn | 0.001140 | 0.001799 | UpCapture | 0.183974 | 0.395549 |
| Hurst | 0.426761 | 0.450503 | UpNumber | 0.426606 | 0.493151 |
| Information_Annualized | 0.393018 | 1.282207 | UpPercent | 0.275229 | 0.356164 |
| Information_Daily | 0.019363 | 0.057835 | UpsidePotential | 0.610832 | 0.576647 |
| JensenAlpha | 0.319473 | 0.540466 | UpsideRisk | 0.010704 | 0.010810 |
| Kappa | 0.100544 | 0.111932 | VaR_Loss | 0.014422 | 0.013285 |
| Kelly | 7.261257 | 9.355517 | Volatility | 0.012975 | 0.014255 |
| Kurtosis | 24.383907 | 12.156535 | Volatility_Annualized | 0.205977 | 0.226283 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.703390</td><td>-0.110169</td></tr><tr><td>OUT</td><td>96</td><td>83</td><td>-13</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.141760</td><td>-0.006013</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.132985</td><td>-0.028508</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>VLP1L shares</td><td>42</td><td>72</td><td>+30</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8380.299978</td><td>468.000011</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.576271</td><td>0.118644</td></tr><tr><td>OUT</td><td>62</td><td>72</td><td>+10</td></tr><tr><td>IN</td><td>8</td><td>4</td><td>-4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.085773</td><td>0.015600</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.109190</td><td>0.018034</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 42 VLP1L shares. The scenario adds 30 shares from Table 3A, resulting in 72 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="VLP1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![VLP1L high-resolution stochastic dominance](figures/stock_profiles/VLP1L_FSD_SSD_TSD.png?v=1792486482)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-molnr" data-signal="HOLD">
<summary><strong>MOLNR — J. Molner</strong> | HOLD | target 22 shares | priority 5</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>22</td><td>+22</td><td>3.13%</td><td>EUR 20.4000</td><td>0.0424</td><td>5 / 0</td><td>54.39</td><td>Bearish</td><td>Inside bands</td><td>0.427 (Neutral)</td><td>HOLD</td><td>0.000978 (1.262% of portfolio HHI)</td><td>EUR 98</td><td>458.0%</td><td>29.4%</td><td>HIGH</td></tr></tbody></table>

![MOLNR Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/MOLNR_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 20.4000 | EUR 15.7195 | -22.94% | EUR 24.0105 | +17.70% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![MOLNR complete technical history](figures/technical_analysis/MOLNR_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![MOLNR return histogram](figures/stock_profiles/MOLNR_histogram.png?v=1792485734)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -47.85% (2026-09-29) | Average gain / average loss | 1.478 | Best 21-day period | 73.58% (ending 2023-07-07) |
| Average underwater drawdown | 18.63% | Upside potential ratio | 1.792 | Worst 21-day period | -28.17% (ending 2023-03-30) |
| Conditional drawdown 95% | 43.87% | Upside capture vs Baltic EW | 344.1% | Best 5-day period | 60.38% (ending 2023-06-14) |
| Ulcer index | 21.34 | Downside capture vs Baltic EW | 220.4% | Best 63-day period | 117.95% (ending 2023-07-19) |
| Longest underwater period | 610 calendar days | Positive trading days | 29.9% | Repeated calendar pattern | Mar: 0% positive across 4 years |
| Daily downside deviation | 2.102% | Best day | 44.39% (2025-01-02) |  |  |
| Daily upside deviation | 3.317% | Worst day | -12.73% (2023-03-14) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.639%); worst: Monday (-0.592%) | 0.0037 | 0.0846 | Not detected |
| Calendar month | Best: Jan (0.864% daily); worst: Mar (-0.846% daily) | 0.3498 | 0.5029 | Not detected |
| Turn of month | First/last three days: 0.806%; other days: 0.034% | 0.1476 | 0.4850 | Not detected |

![MOLNR seasonality, drawdowns and upside periods](figures/stock_profiles/MOLNR_seasonality.png?v=1792486399)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-02-13 | 2026-09-29 | Not recovered | -47.85% | 610 |
| 2 | 2023-01-13 | 2023-04-05 | 2023-06-12 | -32.71% | 150 |
| 3 | 2024-01-09 | 2024-06-03 | 2024-09-20 | -27.02% | 255 |
| 4 | 2023-07-19 | 2023-08-08 | 2023-10-17 | -22.35% | 90 |
| 5 | 2023-06-14 | 2023-06-22 | 2023-07-07 | -18.12% | 23 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-06-06 | 2023-07-07 | 73.58% |
| 2 | 2024-12-06 | 2025-01-15 | 60.43% |
| 3 | 2023-12-15 | 2024-01-18 | 51.75% |
| 4 | 2024-08-28 | 2024-09-26 | 40.85% |
| 5 | 2026-09-02 | 2026-10-01 | 34.44% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (10 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Earnings | 10 | 1.85% | 0.28% | 1.96% | 70% | 20% | 0.6868 | 1.0000 | No adjusted statistical evidence |

![MOLNR official announcements and abnormal returns](figures/stock_profiles/MOLNR_company_events.png?v=1792491533)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (10 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-06-08 16:56 | Earnings | Loss | [J. Molner AS Audited Consolidated Annual Report 2025](https://view.news.eu.nasdaq.com/view?id=b8e796a4ba5f4b11ad62268dc6a200c04&lang=en&src=listed) | Open official announcement | 1.82% | -0.89% | -1.79% | -11.16% | -1.62% | No |
| 2026-03-31 14:00 | Earnings | Higher profit | [J. Molner AS 2025 12 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b63e4b036ee2fa6605e6d7772375af868&lang=en&src=listed) | Open official announcement | 0.95% | 6.60% | 1.89% | 12.26% | 0.42% | No |
| 2025-09-30 09:30 | Earnings | Higher profit | [J. Molner AS 2025 6 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b73f73be316476a63911e0249b7b33c2c&lang=en&src=listed) | Open official announcement | 6.09% | 4.92% | 5.74% | 12.30% | 4.76% | Yes |
| 2025-04-21 17:49 | Earnings | Unclassified earnings release | [J. Molner AS Audited Consolidated Annual Report 2024](https://view.news.eu.nasdaq.com/view?id=b2beb3031f4bf8fd9561decb81036f3ac&lang=en&src=listed) | Open official announcement | 4.46% | -5.13% | 4.27% | 5.98% | 2.39% | No |
| 2025-03-28 09:30 | Earnings | Unclassified earnings release | [J. Molner AS 2024 12 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b6b69f985cbcbb5e7b37a7f97594013fd&lang=en&src=listed) | Open official announcement | 0.00% | 6.96% | 3.48% | 6.96% | 4.15% | No |
| 2024-09-17 09:00 | Earnings | Unclassified earnings release | [J. Molner AS Consolidated interim report for the first 6 months of 2024 (unaudited)](https://view.news.eu.nasdaq.com/view?id=b44e2e0b7fcdad0977558903f52754559&lang=en&src=listed) | Open official announcement | 3.21% | 5.59% | 9.32% | 19.88% | 9.31% | No |
| 2024-04-24 09:30 | Earnings | Unclassified earnings release | [J. Molner AS Audited Consolidated Annual Report 2023](https://view.news.eu.nasdaq.com/view?id=b252beb1a8fcd05b8472972245839bb3b&lang=en&src=listed) | Open official announcement | -5.96% | 4.93% | 3.52% | -2.82% | 3.04% | No |
| 2024-04-01 15:30 | Earnings | Unclassified earnings release | [J. Molner AS Consolidated Unaudited Interim balance sheet for the 2 Months of 2024 and increase of The J. Molner Company OÜ voluntary reserve](https://view.news.eu.nasdaq.com/view?id=be3b8cc3468d2f6a9be9c56ffa24266ca&lang=en&src=listed) | Open official announcement | -5.66% | 0.00% | 2.67% | 0.67% | 2.39% | Yes |
| 2023-09-15 09:00 | Earnings | Unclassified earnings release | [J. Molner AS Consolidated Unaudited Interim Report for the First 6 Months of 2023 and increase of The J. Molner Company OÜ voluntary reserve](https://view.news.eu.nasdaq.com/view?id=bd3b5a1ce01123bda4af386264e796017&lang=en&src=listed) | Open official announcement | -6.28% | -2.39% | -4.50% | 1.91% | -2.63% | No |
| 2023-03-10 16:30 | Earnings | Unclassified earnings release | [J.Molner AS Audited Annual Reports 2022](https://view.news.eu.nasdaq.com/view?id=bb8cec66d1c091cf652aff52287c81fb8&lang=en&src=listed) | Open official announcement | -5.07% | -2.08% | -19.88% | -18.99% | -19.44% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (3 classified of 10 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 2 | 5.76% | 1.421 | 5.76% | 100% | 5.27% | 1.463 | 5.27% |
| Higher profit | 5d | 2 | 3.81% | 7.415 | 3.81% | 100% | 2.59% | 9.418 | 2.59% |
| Higher profit | 21d | 2 | 12.28% | 0.000 | 12.28% | 100% | 10.65% | 3.950 | 10.65% |
| Loss | 1d | 1 | -0.89% | — | -0.89% | 0% | -1.02% | — | -1.02% |
| Loss | 5d | 1 | -1.79% | — | -1.79% | 0% | -1.62% | — | -1.62% |
| Loss | 21d | 1 | -11.16% | — | -11.16% | 0% | -11.42% | — | -11.42% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![MOLNR Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/MOLNR_all_frontiers.png?v=1792486194)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.035370 | -0.632155 | M2Sortino | 0.179156 | -0.378585 |
| AdjustedSharpe | 0.523043 | -0.568889 | MSquaredExcess | -0.140797 | -0.283330 |
| AnnualizedReturn_Arithmetic | 0.350903 | -0.358634 | Martin | 1.010558 | -2.729625 |
| AnnualizedReturn_Geometric | 0.193319 | -0.394946 | MaximumDrawdown | 0.445720 | 0.263088 |
| Appraisal | 0.351338 | -0.844364 | Modigliani | 0.000401 | -0.000408 |
| ArithmeticReturn | 0.001392 | -0.001423 | NetSelectivity | -0.600491 | -1.221611 |
| AverageDrawdown | 0.120579 | 0.263088 | Omega | 1.148553 | 0.863195 |
| AverageDrawdownLength | 43.529412 | 125.000000 | OmegaExcessReturn | 0.072625 | -0.507465 |
| AverageRecoveryTime | 11.941176 | 4.000000 | PainIndex | 0.157711 | 0.126142 |
| BernardoLedoit | 1.148553 | 0.863195 | PainRatio | 1.225786 | -3.130973 |
| BetaCoKurtosis | -0.465313 | -0.257264 | Prospect | -0.489765 | -0.621023 |
| BetaCoSkewness | -8.256766 | -37.945591 | Rachev | 1.351381 | 1.000007 |
| Burke | 0.254461 | -1.212596 | Selectivity | 0.213933 | -0.453055 |
| CAPMAlpha | 0.001472 | -0.001642 | Sharpe_Annualized | 0.575704 | -0.664085 |
| CAPMBeta | -0.090138 | 0.244968 | Sharpe_Daily | 0.036266 | -0.041833 |
| CDD | 0.248431 | 0.249933 | Sharpe_ES | 0.019142 | -0.018659 |
| Calmar | 0.433724 | -1.501197 | Sharpe_VaR | 0.027639 | -0.025591 |
| CoKurtosis | -0.000000 | -0.000000 | Skewness | 3.034693 | 0.637172 |
| CoSkewness | -0.000001 | -0.000000 | Sortino | 0.066055 | -0.061262 |
| CumulativeReturn | 0.696918 | -0.222148 | SpecificRisk | 0.608909 | 0.536564 |
| DRatio | 1.067137 | 1.569562 | Sterling | 0.354247 | -1.087744 |
| DownCapture | -0.224965 | 0.869388 | SystematicRisk | -0.015828 | 0.037961 |
| DownNumber | 0.389937 | 0.377358 | TotalRisk | 0.609115 | 0.537905 |
| DownPercent | 0.688679 | 0.660377 | TrackingError_Annualized | 0.638676 | 0.551265 |
| DownsideDeviation | 0.021080 | 0.023230 | TrackingError_Daily | 0.040233 | 0.034726 |
| DrawdownDeviation | 0.024587 | 0.023438 | Treynor_Annualized | -2.144712 | -1.612235 |
| ES_Loss | 0.072744 | 0.076273 | Treynor_Daily | -0.007784 | -0.008131 |
| FamaBeta | 3.471131 | 3.484960 | UlcerIndex | 0.191300 | 0.144689 |
| GeometricReturn | 0.000702 | -0.001992 | UpCapture | 0.148826 | 0.355282 |
| Hurst | 0.407470 | 0.409377 | UpNumber | 0.295872 | 0.260274 |
| Information_Annualized | -0.055380 | -1.146735 | UpPercent | 0.252294 | 0.246575 |
| Information_Daily | -0.002883 | -0.081691 | UpsidePotential | 0.510711 | 0.386546 |
| JensenAlpha | 0.213933 | -0.453055 | UpsideRisk | 0.032091 | 0.024708 |
| Kappa | 0.044823 | -0.042704 | VaR_Loss | 0.050381 | 0.055611 |
| Kelly | 0.944522 | -1.229692 | Volatility | 0.038396 | 0.034019 |
| Kurtosis | 30.708821 | 6.963288 | Volatility_Annualized | 0.609519 | 0.540042 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.694915</td><td>-0.118644</td></tr><tr><td>OUT</td><td>96</td><td>82</td><td>-14</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.065071</td><td>-0.082703</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.140183</td><td>-0.021309</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>MOLNR shares</td><td>0</td><td>22</td><td>+22</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8361.099958</td><td>448.799992</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.618644</td><td>0.161017</td></tr><tr><td>OUT</td><td>62</td><td>76</td><td>+14</td></tr><tr><td>IN</td><td>8</td><td>3</td><td>-5</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.173471</td><td>0.103299</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.115416</td><td>0.024261</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 MOLNR shares. The scenario adds 22 shares from Table 3A, resulting in 22 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="MOLNR"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![MOLNR high-resolution stochastic dominance](figures/stock_profiles/MOLNR_FSD_SSD_TSD.png?v=1792486457)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tel1l" data-signal="SELL">
<summary><strong>TEL1L — Telia Lietuva</strong> | SELL | target 78 shares | priority 6</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>78</td><td>+78</td><td>1.20%</td><td>EUR 2.2900</td><td>0.1695</td><td>42 / 22</td><td>85.18</td><td>Bullish</td><td>Above upper band</td><td>1.000 (Overbought)</td><td>SELL</td><td>0.000143 (0.185% of portfolio HHI)</td><td>EUR 56,394</td><td>0.3%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![TEL1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TEL1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 2.2900 | EUR 2.1891 | -4.41% | EUR 2.2789 | -0.48% | SELL |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![TEL1L complete technical history](figures/technical_analysis/TEL1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TEL1L return histogram](figures/stock_profiles/TEL1L_histogram.png?v=1792485735)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -25.25% (2024-08-05) | Average gain / average loss | 1.026 | Best 21-day period | 12.09% (ending 2026-01-09) |
| Average underwater drawdown | 13.76% | Upside potential ratio | 1.320 | Worst 21-day period | -11.05% (ending 2023-08-08) |
| Conditional drawdown 95% | 23.35% | Upside capture vs Baltic EW | 46.3% | Best 5-day period | 7.94% (ending 2026-01-09) |
| Ulcer index | 15.39 | Downside capture vs Baltic EW | 34.8% | Best 63-day period | 18.26% (ending 2026-01-09) |
| Longest underwater period | 987 calendar days | Positive trading days | 30.7% | Repeated calendar pattern | May: 0% positive across 4 years |
| Daily downside deviation | 0.500% | Best day | 3.67% (2026-04-24) |  |  |
| Daily upside deviation | 0.474% | Worst day | -5.60% (2026-05-08) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Thursday (0.070%); worst: Monday (-0.081%) | 0.3130 | 0.4499 | Not detected |
| Calendar month | Best: Jan (0.207% daily); worst: May (-0.300% daily) | 0.0765 | 0.2493 | Not detected |
| Turn of month | First/last three days: 0.052%; other days: 0.010% | 0.4732 | 0.8443 | Not detected |

![TEL1L seasonality, drawdowns and upside periods](figures/stock_profiles/TEL1L_seasonality.png?v=1792486412)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-04-28 | 2024-08-05 | 2026-01-09 | -25.25% | 987 |
| 2 | 2026-05-07 | 2026-06-18 | Not recovered | -9.05% | 162 |
| 3 | 2023-03-17 | 2023-04-18 | 2023-04-28 | -3.43% | 42 |
| 4 | 2026-02-18 | 2026-03-12 | 2026-04-07 | -3.33% | 48 |
| 5 | 2026-01-29 | 2026-02-05 | 2026-02-18 | -1.90% | 20 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-12-03 | 2026-01-09 | 12.09% |
| 2 | 2026-03-25 | 2026-04-27 | 11.22% |
| 3 | 2023-10-27 | 2023-11-30 | 8.86% |
| 4 | 2026-06-18 | 2026-07-23 | 7.11% |
| 5 | 2025-06-17 | 2025-07-18 | 6.17% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (13 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 8 | 0.18% | -1.05% | -1.15% | 50% | 38% | 0.7840 | 0.7315 | No adjusted statistical evidence |
| Dividend payment | 1 | -0.42% | -0.72% | 1.06% | 0% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 4 | -3.93% | -3.82% | -4.29% | 25% | 100% | 0.0413 | 0.0681 | Different from ordinary periods; price drop may be mechanical |

![TEL1L official announcements and abnormal returns](figures/stock_profiles/TEL1L_company_events.png?v=1792491541)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (13 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-08 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.14 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.14  | 1.75% | -5.60% | -8.19% | -7.76% | -7.12% | Yes |
| 2026-04-27 16:05 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2025](https://view.news.eu.nasdaq.com/view?id=b52a35e6570c9cb1d22e5f68ba1454a59&lang=en&src=listed) | Open official announcement | 5.56% | 0.00% | 0.88% | -6.58% | 0.68% | No |
| 2026-03-27 21:30 | Dividend announcement | — | [The Board approved financial statements for the year 2025 and proposes to pay EUR 0.14 dividend per share for the year 2025](https://view.news.eu.nasdaq.com/view?id=b65cd483dd3b129e0e15e28809b5a0894&lang=en&src=listed) | EUR 0.14  | 0.49% | 0.49% | 2.91% | 10.19% | 3.00% | Yes |
| 2025-05-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.11 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.11  | -1.22% | 0.31% | 0.00% | 0.62% | -0.72% | No |
| 2025-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.11 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.11  | 1.18% | -4.66% | -4.37% | -5.54% | -4.85% | Yes |
| 2025-04-30 16:13 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2024](https://view.news.eu.nasdaq.com/view?id=bb619e87f2d63301ab59ddd77d9a9a9c3&lang=en&src=listed) | Open official announcement | 3.04% | 1.18% | -3.54% | -4.72% | -5.15% | Yes |
| 2025-04-03 16:00 | Dividend announcement | — | [The Board approved financial statements for the year 2024 and proposes to pay EUR 0.11 dividend per share for the year 2024](https://view.news.eu.nasdaq.com/view?id=bcc0e8bd676eeaf696be57489b03fa52e&lang=en&src=listed) | EUR 0.11  | 1.23% | 0.00% | -0.61% | 4.57% | 1.18% | No |
| 2024-05-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.09 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.09  | 0.29% | -4.71% | -5.00% | -5.59% | -3.35% | Yes |
| 2024-04-30 16:30 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2023](https://view.news.eu.nasdaq.com/view?id=bb3264ad87e45486fb54ced8673d4a165&lang=en&src=listed) | Open official announcement | -0.29% | 0.30% | -4.14% | -5.03% | -4.40% | No |
| 2024-04-05 18:36 | Dividend announcement | — | [Valdyba patvirtino 2023 m. finansines ataskaitas ir siūlo mokėti 0,09 euro dividendų vienai akcijai už 2023 metus](https://view.news.eu.nasdaq.com/view?id=bc84fe25559e2ce03bfc5a8739386ab2c&lang=en&src=listed) | Open official announcement | 1.49% | 1.18% | 0.29% | 0.00% | 0.48% | No |
| 2023-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | -2.45% | -2.26% | -2.01% | -2.76% | 0.03% | Yes |
| 2023-04-28 16:05 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2022](https://view.news.eu.nasdaq.com/view?id=bb5a582ef27ce29b0d9d9f6125b6ae2c3&lang=en&src=listed) | Open official announcement | 2.51% | -0.98% | -2.45% | -5.39% | -2.42% | Yes |
| 2023-04-04 16:00 | Dividend announcement | — | [The Board approved financial statements for the year 2022 and proposes to pay 0.06 euro dividend per share for the year 2022](https://view.news.eu.nasdaq.com/view?id=b6f85e51534ede96fb95a3c51ad44feb1&lang=en&src=listed) | Open official announcement | 0.00% | -0.99% | -1.73% | -1.49% | -1.76% | No |

</details>

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TEL1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TEL1L_all_frontiers.png?v=1792486197)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.196066 | -0.066828 | M2Sortino | 0.034150 | 0.177795 |
| AdjustedSharpe | 0.333757 | 1.660770 | MSquaredExcess | -0.141614 | 0.023635 |
| AnnualizedReturn_Arithmetic | 0.037591 | 0.162236 | Martin | 0.221097 | 7.912122 |
| AnnualizedReturn_Geometric | 0.032623 | 0.170381 | MaximumDrawdown | 0.225761 | 0.049932 |
| Appraisal | 0.267278 | 1.722501 | Modigliani | 0.000250 | 0.001007 |
| ArithmeticReturn | 0.000149 | 0.000644 | NetSelectivity | -0.103792 | 0.018699 |
| AverageDrawdown | 0.036650 | 0.019687 | Omega | 1.080062 | 1.352935 |
| AverageDrawdownLength | 66.545455 | 14.500000 | OmegaExcessReturn | 0.006262 | 0.152396 |
| AverageRecoveryTime | 34.727273 | 7.375000 | PainIndex | 0.125364 | 0.017126 |
| BernardoLedoit | 1.080062 | 1.352935 | PainRatio | 0.260227 | 9.948620 |
| BetaCoKurtosis | -0.028307 | 0.076703 | Prospect | -0.473444 | -0.440691 |
| BetaCoSkewness | -2.565127 | 1.493734 | Rachev | 1.075976 | 1.439696 |
| Burke | 0.204657 | 3.046626 | Selectivity | 0.027961 | 0.170005 |
| CAPMAlpha | 0.000131 | 0.000642 | Sharpe_Annualized | 0.358884 | 1.637248 |
| CAPMBeta | 0.020385 | 0.001586 | Sharpe_Daily | 0.022608 | 0.103137 |
| CDD | 0.049102 | 0.037483 | Sharpe_ES | 0.009737 | 0.059247 |
| Calmar | 0.144503 | 3.412236 | Sharpe_VaR | 0.015944 | 0.068966 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | -0.329646 | 0.490767 |
| CoSkewness | -0.000000 | 0.000000 | Sortino | 0.032399 | 0.173382 |
| CumulativeReturn | 0.100817 | 0.081841 | SpecificRisk | 0.104615 | 0.098696 |
| DRatio | 0.934140 | 0.701230 | Sterling | 0.100144 | 1.136385 |
| DownCapture | 0.020832 | -0.120621 | SystematicRisk | 0.003580 | 0.000246 |
| DownNumber | 0.301887 | 0.283019 | TotalRisk | 0.104676 | 0.098697 |
| DownPercent | 0.861635 | 0.849057 | TrackingError_Annualized | 0.201367 | 0.183729 |
| DownsideDeviation | 0.004604 | 0.003713 | TrackingError_Daily | 0.012685 | 0.011574 |
| DrawdownDeviation | 0.008616 | 0.006146 | Treynor_Annualized | 1.600315 | 107.436660 |
| ES_Loss | 0.015321 | 0.010866 | Treynor_Daily | 0.006249 | 0.393800 |
| FamaBeta | 0.596511 | 0.639446 | UlcerIndex | 0.147551 | 0.021534 |
| GeometricReturn | 0.000127 | 0.000625 | UpCapture | 0.051596 | 0.055064 |
| Hurst | 0.379338 | 0.373845 | UpNumber | 0.302752 | 0.287671 |
| Information_Annualized | -0.973675 | -0.363732 | UpPercent | 0.178899 | 0.205479 |
| Information_Daily | -0.054410 | -0.019053 | UpsidePotential | 0.437074 | 0.664641 |
| JensenAlpha | 0.027961 | 0.170005 | UpsideRisk | 0.004723 | 0.005028 |
| Kappa | 0.019352 | 0.126490 | VaR_Loss | 0.009356 | 0.009335 |
| Kelly | 3.426255 | 16.522720 | Volatility | 0.006598 | 0.006242 |
| Kurtosis | 12.372385 | 4.070376 | Volatility_Annualized | 0.104745 | 0.099091 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.147918</td><td>0.000144</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161502</td><td>0.000010</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TEL1L shares</td><td>0</td><td>78</td><td>+78</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8090.919964</td><td>178.619997</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.423729</td><td>-0.033898</td></tr><tr><td>OUT</td><td>62</td><td>60</td><td>-2</td></tr><tr><td>IN</td><td>8</td><td>10</td><td>+2</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.068946</td><td>-0.001226</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.091717</td><td>0.000562</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 TEL1L shares. The scenario adds 78 shares from Table 3A, resulting in 78 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="TEL1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TEL1L high-resolution stochastic dominance](figures/stock_profiles/TEL1L_FSD_SSD_TSD.png?v=1792486471)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tkm1t" data-signal="BUY">
<summary><strong>TKM1T — TKM Grupp</strong> | BUY | target 293 shares | priority 7</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>288</td><td>293</td><td>+5</td><td>17.41%</td><td>EUR 8.9000</td><td>0.0424</td><td>29 / 24</td><td>24.21</td><td>Bearish</td><td>Below lower band</td><td>0.000 (Oversold)</td><td>BUY</td><td>0.030318 (39.099% of portfolio HHI)</td><td>EUR 39,989</td><td>0.1%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![TKM1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TKM1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 8.9000 | EUR 8.9183 | +0.21% | EUR 9.0967 | +2.21% | BUY |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![TKM1T complete technical history](figures/technical_analysis/TKM1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TKM1T return histogram](figures/stock_profiles/TKM1T_histogram.png?v=1792485730)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -16.67% (2026-10-15) | Average gain / average loss | 0.925 | Best 21-day period | 6.93% (ending 2025-01-07) |
| Average underwater drawdown | 9.55% | Upside potential ratio | 0.788 | Worst 21-day period | -9.08% (ending 2024-04-29) |
| Conditional drawdown 95% | 15.21% | Upside capture vs Baltic EW | 17.2% | Best 5-day period | 4.88% (ending 2025-01-07) |
| Ulcer index | 10.15 | Downside capture vs Baltic EW | 22.2% | Best 63-day period | 9.50% (ending 2025-02-10) |
| Longest underwater period | 932 calendar days | Positive trading days | 39.9% | Repeated calendar pattern | Feb: 100% positive across 4 years |
| Daily downside deviation | 0.488% | Best day | 3.06% (2025-01-03) |  |  |
| Daily upside deviation | 0.341% | Worst day | -6.77% (2026-03-31) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.051%); worst: Tuesday (-0.065%) | 0.0470 | 0.1700 | Not detected |
| Calendar month | Best: Jan (0.142% daily); worst: Apr (-0.154% daily) | 0.2240 | 0.4574 | Not detected |
| Turn of month | First/last three days: -0.095%; other days: 0.016% | 0.5139 | 0.8443 | Not detected |

![TKM1T seasonality, drawdowns and upside periods](figures/stock_profiles/TKM1T_seasonality.png?v=1792486377)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2024-03-28 | 2026-10-15 | Not recovered | -16.67% | 932 |
| 2 | 2023-03-27 | 2023-09-22 | 2024-02-21 | -9.33% | 331 |
| 3 | 2023-02-09 | 2023-02-14 | 2023-03-01 | -1.36% | 20 |
| 4 | 2024-02-21 | 2024-02-29 | 2024-03-15 | -1.33% | 23 |
| 5 | 2023-03-01 | 2023-03-02 | 2023-03-03 | -1.17% | 2 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2024-11-28 | 2025-01-07 | 6.93% |
| 2 | 2023-01-02 | 2023-01-31 | 6.61% |
| 3 | 2025-12-09 | 2026-01-15 | 6.50% |
| 4 | 2024-01-22 | 2024-02-21 | 4.79% |
| 5 | 2023-09-22 | 2023-10-23 | 4.31% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (31 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.75% | 0.49% | -1.29% | 25% | 0% | 1.0000 | 0.6772 | No adjusted statistical evidence |
| Earnings | 19 | -0.48% | -0.25% | 0.56% | 47% | 16% | 0.8482 | 0.6772 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.86% | -6.03% | -7.55% | 0% | 88% | 0.0000 | 0.0000 | Different from ordinary periods; price drop may be mechanical |

![TKM1T official announcements and abnormal returns](figures/stock_profiles/TKM1T_company_events.png?v=1792491513)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (31 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2026](https://view.news.eu.nasdaq.com/view?id=bc94e61ae93435ef732b90cb75dafb9e3&lang=en&src=listed) | Open official announcement | -0.22% | -0.44% | 0.22% | -0.11% | -0.43% | No |
| 2026-04-10 16:30 | Earnings | Loss | [Unaudited consolidated interim accounts for the first quarter of 2026](https://view.news.eu.nasdaq.com/view?id=ba566a451cdc6edd9cf00d93b39abda9d&lang=en&src=listed) | Open official announcement | 0.87% | 0.00% | -0.11% | -1.08% | -0.66% | No |
| 2026-04-07 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.6 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.6  | -6.59% | 0.98% | 0.98% | 0.98% | -0.72% | No |
| 2026-03-30 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.6 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.6  | 0.41% | 0.00% | -6.06% | -6.67% | -5.98% | Yes |
| 2026-03-25 16:30 | Ex-dividend | — | [Dividend payment ex-date of TKM Grupp AS](https://view.news.eu.nasdaq.com/view?id=b69e5ffb656e8ca2593ae9b5f7d224119&lang=en&src=listed) | Open official announcement | 0.20% | 0.00% | -6.49% | -6.09% | -5.45% | Yes |
| 2026-02-19 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2025](https://view.news.eu.nasdaq.com/view?id=b6ad8814c26e0bf4cedd01f2a21c90f10&lang=en&src=listed) | Open official announcement | -0.21% | 1.77% | 1.46% | 2.61% | 2.36% | No |
| 2026-01-16 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the fourth quarter and twelve months of 2025](https://view.news.eu.nasdaq.com/view?id=bdb594d68cdc426e73ee5b759a1019358&lang=en&src=listed) | Open official announcement | -1.33% | -2.60% | -1.77% | -0.21% | -2.05% | No |
| 2025-10-09 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the third quarter and first nine months of 2025](https://view.news.eu.nasdaq.com/view?id=b7f84bf1933a01e0dbcc2c57c37261dd4&lang=en&src=listed) | Open official announcement | -0.11% | -0.11% | 0.11% | -0.22% | 0.35% | No |
| 2025-07-09 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2025](https://view.news.eu.nasdaq.com/view?id=b0e9b59515a30f24019b036c6848e2d9a&lang=en&src=listed) | Open official announcement | 0.53% | -1.06% | -1.17% | -1.17% | -1.68% | No |
| 2025-04-09 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the first quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b196cedf60b04cbc56aaa52950cddbcb3&lang=en&src=listed) | Open official announcement | -0.53% | -1.39% | -1.18% | 0.64% | -3.18% | Yes |
| 2025-04-03 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.65 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.65  | -5.05% | 0.11% | -0.53% | -0.74% | 2.92% | No |
| 2025-03-28 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.65 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.65  | -0.60% | -3.42% | -5.23% | -6.44% | -5.51% | No |
| 2025-03-25 09:00 | Ex-dividend | — | [Dividend payment ex-date of TKM Grupp AS](https://view.news.eu.nasdaq.com/view?id=bbbedb7de4849789c6e21914ac4d518e7&lang=en&src=listed) | Open official announcement | -0.20% | -0.40% | -4.52% | -6.43% | -4.92% | Yes |
| 2025-02-20 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2024](https://view.news.eu.nasdaq.com/view?id=b68e6e54cfea7c627a3ea83f736c7f7d8&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | 0.10% | 0.30% | -0.04% | No |
| 2025-01-16 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the fourth quarter and twelve months of 2024](https://view.news.eu.nasdaq.com/view?id=bf8954469635fd3d51ed94439160b8ab2&lang=en&src=listed) | Open official announcement | 0.30% | -1.62% | -1.01% | 0.20% | -2.08% | No |
| 2024-10-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the third quarter and first nine months of 2024](https://view.news.eu.nasdaq.com/view?id=bb6e49742b476dde8dc28f2c00488ea8c&lang=en&src=listed) | Open official announcement | -0.42% | -0.74% | 0.74% | -1.89% | 0.05% | No |
| 2024-07-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2024](https://view.news.eu.nasdaq.com/view?id=b661d26e2a9d8c9fbf93d926ec1570a6c&lang=en&src=listed) | Open official announcement | 2.11% | -1.34% | -0.21% | -1.44% | 0.52% | No |
| 2024-04-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the first quarter of 2024](https://view.news.eu.nasdaq.com/view?id=b3c0810db4b364f06ae7e966c4cda6d5e&lang=en&src=listed) | Open official announcement | 0.10% | -1.11% | -0.81% | -1.62% | 0.26% | No |
| 2024-04-08 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.72 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.72  | -7.68% | 0.20% | -0.41% | -1.52% | -0.22% | No |
| 2024-04-02 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.72 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.72  | 0.00% | -6.55% | -7.49% | -8.90% | -7.76% | Yes |
| 2024-03-26 09:35 | Ex-dividend | — | [Dividend payment ex-date of Tallinna Kaubamaja Grupp AS](https://view.news.eu.nasdaq.com/view?id=b9c6e1e0b4a2d4ac37f829075b1ff419f&lang=en&src=listed) | Open official announcement | 0.19% | 0.19% | -7.60% | -8.82% | -7.51% | Yes |
| 2024-02-21 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2023](https://view.news.eu.nasdaq.com/view?id=bf0619fbd95f5185f235f8d6bfe671702&lang=en&src=listed) | Open official announcement | 1.94% | -0.95% | -0.95% | 1.33% | -1.99% | No |
| 2024-01-18 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the fourth quarter and twelve months of 2023](https://view.news.eu.nasdaq.com/view?id=b3022f8ae832f1399b0dde16e33aa4209&lang=en&src=listed) | Open official announcement | 3.03% | -0.78% | -1.57% | 1.76% | -0.52% | Yes |
| 2023-10-11 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the third quarter and first nine months of 2023](https://view.news.eu.nasdaq.com/view?id=b718d45e41deba535cb9d6c27d0b2b480&lang=en&src=listed) | Open official announcement | 0.82% | -0.20% | 0.10% | 0.00% | -0.16% | No |
| 2023-07-12 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2023](https://view.news.eu.nasdaq.com/view?id=b205cc4450fb96adffd3a1ca00370fbbe&lang=en&src=listed) | Open official announcement | 1.02% | 0.60% | 0.60% | 0.60% | 0.41% | No |
| 2023-04-12 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the first quarter of 2023](https://view.news.eu.nasdaq.com/view?id=baccba5617cf059530047886bf21fb7d5&lang=en&src=listed) | Open official announcement | 0.00% | 0.20% | 0.10% | -0.30% | 0.22% | No |
| 2023-04-05 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.68 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.68  | -5.82% | 0.30% | 0.00% | -0.51% | -0.02% | No |
| 2023-03-30 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.68 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.68  | 0.19% | -5.53% | -5.53% | -6.30% | -5.26% | Yes |
| 2023-03-27 09:30 | Ex-dividend | — | [Dividend payment ex-date of Tallinna Kaubamaja Grupp AS](https://view.news.eu.nasdaq.com/view?id=b2cb85346da34ac7e9532ce6a0cd7aa87&lang=en&src=listed) | Open official announcement | 0.19% | -0.19% | -6.19% | -6.38% | -5.87% | Yes |
| 2023-02-21 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2022](https://view.news.eu.nasdaq.com/view?id=bd66c155ba40261254f10f6a8ef347428&lang=en&src=listed) | Open official announcement | -0.39% | 0.39% | 1.38% | 3.35% | 1.44% | Yes |
| 2023-01-19 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the fourth quarter and twelve months of 2022](https://view.news.eu.nasdaq.com/view?id=b6dcd5e262fb119a6ff1c63157465af7e&lang=en&src=listed) | Open official announcement | -0.10% | 0.10% | 3.38% | 4.40% | 2.52% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (15 classified of 19 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 5 | -0.36% | 0.757 | -0.20% | 40% | -0.36% | 0.963 | -0.44% |
| Higher profit | 5d | 5 | -0.35% | 0.809 | 0.10% | 60% | -0.43% | 0.983 | -0.16% |
| Higher profit | 21d | 5 | 0.45% | 0.646 | 0.20% | 60% | 0.85% | 7.284 | 1.91% |
| Lower profit | 1d | 9 | -0.96% | 0.652 | -1.06% | 11% | -0.97% | 0.727 | -0.85% |
| Lower profit | 5d | 9 | -0.08% | 2.315 | -0.21% | 44% | -0.41% | 2.835 | 0.05% |
| Lower profit | 21d | 9 | -0.18% | 3.654 | -0.22% | 22% | -0.48% | 3.440 | -0.26% |
| Loss | 1d | 1 | 0.00% | — | 0.00% | 0% | -0.26% | — | -0.26% |
| Loss | 5d | 1 | -0.11% | — | -0.11% | 0% | -0.66% | — | -0.66% |
| Loss | 21d | 1 | -1.08% | — | -1.08% | 0% | -1.32% | — | -1.32% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 14 | 1.604 | 0.2053 | 0.5211 | No adjusted evidence |
| 5d | 2 | 14 | 0.111 | 0.7389 | 0.8294 | No adjusted evidence |
| 21d | 2 | 14 | 2.778 | 0.0956 | 0.4170 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TKM1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TKM1T_all_frontiers.png?v=1792486187)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.245633 | -0.320675 | M2Sortino | -0.017314 | -0.083390 |
| AdjustedSharpe | -0.130610 | -0.343215 | MSquaredExcess | -0.210725 | -0.284093 |
| AnnualizedReturn_Arithmetic | -0.012162 | -0.080571 | Martin | -0.147483 | -1.725960 |
| AnnualizedReturn_Geometric | -0.016943 | -0.083466 | MaximumDrawdown | 0.170070 | 0.075107 |
| Appraisal | -0.255460 | -0.524923 | Modigliani | -0.000086 | -0.000438 |
| ArithmeticReturn | -0.000048 | -0.000320 | NetSelectivity | -0.145137 | -0.256724 |
| AverageDrawdown | 0.021201 | 0.018467 | Omega | 0.970092 | 0.790245 |
| AverageDrawdownLength | 74.300000 | 19.500000 | OmegaExcessReturn | -0.046166 | -0.114968 |
| AverageRecoveryTime | 40.000000 | 4.500000 | PainIndex | 0.105668 | 0.039159 |
| BernardoLedoit | 0.970092 | 0.790245 | PainRatio | -0.160345 | -2.131479 |
| BetaCoKurtosis | 0.036864 | -0.084826 | Prospect | -0.404644 | -0.342116 |
| BetaCoSkewness | -1.671872 | -4.816994 | Rachev | 0.888236 | 0.702365 |
| Burke | -0.104562 | -1.139562 | Selectivity | -0.025078 | -0.058563 |
| CAPMAlpha | -0.000080 | -0.000226 | Sharpe_Annualized | -0.123558 | -0.711850 |
| CAPMBeta | 0.035572 | -0.104983 | Sharpe_Daily | -0.007783 | -0.044842 |
| CDD | 0.021416 | 0.047726 | Sharpe_ES | -0.003093 | -0.019428 |
| Calmar | -0.099626 | -1.111300 | Sharpe_VaR | -0.006871 | -0.073416 |
| CoKurtosis | 0.000000 | -0.000000 | Skewness | -4.151940 | -6.712294 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | -0.009456 | -0.049159 |
| CumulativeReturn | -0.049845 | -0.042642 | SpecificRisk | 0.098168 | 0.111565 |
| DRatio | 1.003342 | 1.375468 | Sterling | -0.062737 | -0.476658 |
| DownCapture | 0.043554 | -0.048834 | SystematicRisk | 0.006246 | -0.016269 |
| DownNumber | 0.411950 | 0.358491 | TotalRisk | 0.098367 | 0.112745 |
| DownPercent | 0.874214 | 0.981132 | TrackingError_Annualized | 0.195779 | 0.204614 |
| DownsideDeviation | 0.005104 | 0.006504 | TrackingError_Daily | 0.012333 | 0.012889 |
| DrawdownDeviation | 0.006232 | 0.006974 | Treynor_Annualized | -0.476317 | 0.795044 |
| ES_Loss | 0.015606 | 0.016457 | Treynor_Daily | -0.001906 | 0.003294 |
| FamaBeta | 0.560557 | 0.730403 | UlcerIndex | 0.114883 | 0.048359 |
| GeometricReturn | -0.000068 | -0.000346 | UpCapture | 0.023213 | -0.113401 |
| Hurst | 0.417088 | 0.513426 | UpNumber | 0.396789 | 0.315068 |
| Information_Annualized | -1.254642 | -1.567222 | UpPercent | 0.139908 | 0.136986 |
| Information_Daily | -0.071791 | -0.092388 | UpsidePotential | 0.306695 | 0.185206 |
| JensenAlpha | -0.025078 | -0.058563 | UpsideRisk | 0.003514 | 0.002870 |
| Kappa | -0.004604 | -0.023436 | VaR_Loss | 0.007024 | 0.004355 |
| Kelly | -1.255266 | -6.289215 | Volatility | 0.006201 | 0.007130 |
| Kurtosis | 47.689790 | 65.244397 | Volatility_Annualized | 0.098432 | 0.113186 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.762712</td><td>-0.050847</td></tr><tr><td>OUT</td><td>96</td><td>90</td><td>-6</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.207303</td><td>0.059529</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.181595</td><td>0.020102</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TKM1T shares</td><td>288</td><td>293</td><td>+5</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>7956.799965</td><td>44.499998</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.406780</td><td>-0.050847</td></tr><tr><td>OUT</td><td>62</td><td>60</td><td>-2</td></tr><tr><td>IN</td><td>8</td><td>12</td><td>+4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.069018</td><td>-0.001155</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.090773</td><td>-0.000382</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 288 TKM1T shares. The scenario adds 5 shares from Table 3A, resulting in 293 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="TKM1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TKM1T high-resolution stochastic dominance](figures/stock_profiles/TKM1T_FSD_SSD_TSD.png?v=1792486473)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-apg1l" data-signal="HOLD">
<summary><strong>APG1L — Apranga</strong> | HOLD | target 302 shares | priority 8</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>200</td><td>302</td><td>+102</td><td>7.69%</td><td>EUR 3.8100</td><td>0.3051</td><td>38 / 2</td><td>33.00</td><td>Bearish</td><td>Inside bands</td><td>0.772 (Neutral)</td><td>HOLD</td><td>0.005918 (7.632% of portfolio HHI)</td><td>EUR 24,618</td><td>1.6%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![APG1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/APG1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 3.8100 | EUR 3.7812 | -0.76% | EUR 3.9138 | +2.72% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![APG1L complete technical history](figures/technical_analysis/APG1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![APG1L return histogram](figures/stock_profiles/APG1L_histogram.png?v=1792485735)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **calendar-month, turn-of-month**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -14.75% (2023-05-29) | Average gain / average loss | 1.022 | Best 21-day period | 19.43% (ending 2023-04-28) |
| Average underwater drawdown | 5.73% | Upside potential ratio | 0.999 | Worst 21-day period | -13.12% (ending 2023-06-06) |
| Conditional drawdown 95% | 12.19% | Upside capture vs Baltic EW | 72.1% | Best 5-day period | 8.87% (ending 2023-04-05) |
| Ulcer index | 6.54 | Downside capture vs Baltic EW | 24.1% | Best 63-day period | 35.32% (ending 2023-04-28) |
| Longest underwater period | 348 calendar days | Positive trading days | 40.3% | Repeated calendar pattern | May: 0% positive across 4 years |
| Daily downside deviation | 0.643% | Best day | 6.30% (2023-04-05) |  |  |
| Daily upside deviation | 0.571% | Worst day | -10.00% (2023-05-11) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.132%); worst: Monday (0.015%) | 0.1291 | 0.2699 | Not detected |
| Calendar month | Best: Apr (0.343% daily); worst: May (-0.440% daily) | 0.0010 | 0.0115 | Detected |
| Turn of month | First/last three days: 0.251%; other days: 0.023% | 0.0005 | 0.0107 | Detected |

![APG1L seasonality, drawdowns and upside periods](figures/stock_profiles/APG1L_seasonality.png?v=1792486383)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-04-28 | 2023-05-29 | 2024-02-26 | -14.75% | 304 |
| 2 | 2024-02-28 | 2024-08-06 | 2025-02-10 | -11.48% | 348 |
| 3 | 2026-05-11 | 2026-05-27 | Not recovered | -8.76% | 158 |
| 4 | 2025-02-14 | 2025-06-02 | 2025-11-03 | -8.29% | 262 |
| 5 | 2026-02-03 | 2026-03-26 | 2026-04-23 | -7.98% | 79 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-03-28 | 2023-04-28 | 19.43% |
| 2 | 2025-12-10 | 2026-01-16 | 17.67% |
| 3 | 2023-01-20 | 2023-02-21 | 15.21% |
| 4 | 2026-03-31 | 2026-05-05 | 12.75% |
| 5 | 2024-01-26 | 2024-02-27 | 10.83% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (69 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 2 | 0.13% | 1.93% | -6.09% | 50% | 50% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Earnings | 13 | 0.34% | 0.70% | -4.06% | 46% | 31% | 1.0000 | 0.0043 | Different from ordinary periods |
| Ex-dividend | 6 | -5.07% | -7.53% | -8.11% | 0% | 67% | 0.0000 | 0.0000 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 1 | -1.19% | -1.95% | -3.90% | 0% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Revenue | 47 | 0.08% | 0.24% | 1.41% | 57% | 17% | 0.9354 | 1.0000 | No adjusted statistical evidence |

![APG1L official announcements and abnormal returns](figures/stock_profiles/APG1L_company_events.png?v=1792491518)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (69 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-09-01 16:00 | Revenue | — | [Turnover of Apranga Group in August 2026](https://view.news.eu.nasdaq.com/view?id=b23543665a3767e290adacad002588ac0&lang=en&src=listed) | TURNOVER | 0.00% | -0.76% | -0.76% | -4.03% | -0.69% | No |
| 2026-08-03 16:00 | Revenue | — | [Turnover of Apranga Group in July 2026](https://view.news.eu.nasdaq.com/view?id=be0d33bf21100dd9098903722c48d5b88&lang=en&src=listed) | TURNOVER | 1.53% | 0.25% | 1.01% | -0.76% | 0.52% | No |
| 2026-07-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 6 months of 2026](https://view.news.eu.nasdaq.com/view?id=bfeec2f65e8686f516a3bed7b462f3618&lang=en&src=listed) | Open official announcement | -0.76% | 0.00% | 1.78% | 1.27% | 1.33% | Yes |
| 2026-07-01 16:00 | Revenue | — | [Turnover of Apranga Group in June 2026](https://view.news.eu.nasdaq.com/view?id=b46e7890142725c8fe46563f70cd0ff35&lang=en&src=listed) | TURNOVER | 1.05% | 0.00% | 1.04% | 2.86% | 0.16% | No |
| 2026-06-01 16:00 | Revenue | — | [Turnover of Apranga Group in May 2026](https://view.news.eu.nasdaq.com/view?id=bd5aa274f7589eb77837832cf5ba797cb&lang=en&src=listed) | TURNOVER | -0.26% | 0.00% | -0.53% | 2.39% | -0.67% | No |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.27 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.27  | 1.51% | -6.44% | -6.93% | -6.68% | -6.36% | Yes |
| 2026-05-04 16:30 | Dividend announcement | — | [Procedure for the payment of APRANGA APB dividends for the year 2025](https://view.news.eu.nasdaq.com/view?id=be681f6d91790536065e7fe74e38d5a0c&lang=en&src=listed) | Open official announcement | 2.62% | 1.79% | 5.12% | -3.07% | 4.49% | Yes |
| 2026-05-04 16:00 | Revenue | — | [Turnover of Apranga Group in April 2026](https://view.news.eu.nasdaq.com/view?id=bd93d3fabc4d9f7a1d8a8b6b3e5265f1a&lang=en&src=listed) | TURNOVER | 2.62% | 1.79% | 5.12% | -3.07% | 4.49% | Yes |
| 2026-04-30 18:00 | Earnings | Unclassified earnings release | [APRANGA APB annual report 2025](https://view.news.eu.nasdaq.com/view?id=b1c8f738e754378570b8e4c7bfc5567d8&lang=en&src=listed) | Open official announcement | 2.62% | 1.79% | 5.12% | -3.07% | 4.49% | Yes |
| 2026-04-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 3 months 2026](https://view.news.eu.nasdaq.com/view?id=b07f57952764ad03be7c4a64d5efd1cb5&lang=en&src=listed) | Open official announcement | 3.75% | 1.03% | 4.39% | -2.58% | 4.99% | Yes |
| 2026-04-01 16:00 | Revenue | — | [Turnover of Apranga Group in March 2026](https://view.news.eu.nasdaq.com/view?id=b8dc41241855b9e5323df944b69cf8435&lang=en&src=listed) | TURNOVER | 3.46% | 0.56% | 3.62% | 10.86% | 2.03% | Yes |
| 2026-03-02 16:00 | Revenue | — | [Turnover of Apranga Group in February 2026](https://view.news.eu.nasdaq.com/view?id=b03f7ad730f7454c7be6f777b0ff4905e&lang=en&src=listed) | TURNOVER | -0.54% | -0.82% | -0.54% | -2.18% | 0.18% | No |
| 2026-02-02 16:00 | Revenue | — | [Turnover of Apranga Group in January 2026](https://view.news.eu.nasdaq.com/view?id=bbc280be2b0ba0d62d95644963d33f186&lang=en&src=listed) | TURNOVER | 1.36% | 0.53% | -0.80% | -1.60% | 1.31% | No |
| 2026-01-05 16:00 | Revenue | — | [Turnover of Apranga Group in December 2025 and total year 2025](https://view.news.eu.nasdaq.com/view?id=ba5f8e84f3670dda3c093d7812c5b07cd&lang=en&src=listed) | TURNOVER | 3.26% | 0.00% | 3.74% | 8.05% | 2.27% | No |
| 2025-12-10 16:00 | Revenue | — | [The turnover and expansion plans of Apranga Group in 2026](https://view.news.eu.nasdaq.com/view?id=bbc38709867d6e999ff1d5883531cf641&lang=en&src=listed) | TURNOVER | 0.63% | 0.95% | 4.10% | 17.67% | 3.32% | No |
| 2025-12-01 16:00 | Revenue | — | [Turnover of Apranga Group in November 2025](https://view.news.eu.nasdaq.com/view?id=b05392686dfff9059414e908887266b42&lang=en&src=listed) | TURNOVER | 0.64% | 0.00% | 0.64% | 11.15% | 0.06% | No |
| 2025-11-03 16:00 | Revenue | — | [Turnover of Apranga Group in October 2025](https://view.news.eu.nasdaq.com/view?id=b1ab191c3fbf999a8684f2f1d8997ea1e&lang=en&src=listed) | TURNOVER | 2.93% | -0.63% | -0.32% | -0.32% | -0.56% | No |
| 2025-10-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 9 months of 2025](https://view.news.eu.nasdaq.com/view?id=b2b9ec8245a50161f3b46e05773e34b22&lang=en&src=listed) | Open official announcement | 0.66% | 0.00% | 2.28% | 2.28% | 2.57% | No |
| 2025-10-01 16:00 | Revenue | — | [Turnover of Apranga Group in September 2025](https://view.news.eu.nasdaq.com/view?id=bb7094120ce851eb89c262089f6acb1d6&lang=en&src=listed) | TURNOVER | -0.33% | 0.67% | 1.00% | 2.68% | 0.68% | Yes |
| 2025-09-01 16:00 | Revenue | — | [Turnover of Apranga Group in August 2025](https://view.news.eu.nasdaq.com/view?id=bcb9610cd46d2fe0d9eefc344c0cdf2ac&lang=en&src=listed) | TURNOVER | 0.34% | 1.36% | 1.36% | 1.36% | 1.20% | Yes |
| 2025-08-01 16:00 | Revenue | — | [Turnover of Apranga Group in July 2025](https://view.news.eu.nasdaq.com/view?id=bbbc7602af313e21f0509aac86b261ae6&lang=en&src=listed) | TURNOVER | 0.00% | -0.35% | 0.00% | 3.81% | -0.06% | No |
| 2025-07-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 6 months of 2025](https://view.news.eu.nasdaq.com/view?id=bdbf7808630b383be64302582df2d8714&lang=en&src=listed) | Open official announcement | 0.35% | -0.69% | -0.35% | 2.08% | -0.42% | No |
| 2025-07-01 16:00 | Revenue | — | [Turnover of Apranga Group in June 2025](https://view.news.eu.nasdaq.com/view?id=b8020eb92033600e2588061b5acb89ad0&lang=en&src=listed) | TURNOVER | -0.35% | 0.35% | 0.35% | 0.70% | 0.46% | No |
| 2025-06-02 16:00 | Revenue | — | [Turnover of Apranga Group in May 2025](https://view.news.eu.nasdaq.com/view?id=ba251b26966718949b4da8ad570b43e42&lang=en&src=listed) | TURNOVER | -0.70% | 0.35% | 1.06% | 1.77% | 1.67% | Yes |
| 2025-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.24 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.24  | 0.66% | -7.17% | -7.17% | -7.49% | -7.81% | Yes |
| 2025-05-02 16:30 | Dividend announcement | — | [Procedure for the payment of Apranga APB dividends for the year 2024](https://view.news.eu.nasdaq.com/view?id=b1642ff788b2974d57a2e38e7e30d173d&lang=en&src=listed) | Open official announcement | -0.33% | 0.66% | 0.99% | -6.60% | -0.62% | No |
| 2025-05-02 16:00 | Revenue | — | [Turnover of Apranga Group in April 2025](https://view.news.eu.nasdaq.com/view?id=bc250d807e4077b912447e69a896755c2&lang=en&src=listed) | TURNOVER | -0.33% | 0.66% | 0.99% | -6.60% | -0.62% | No |
| 2025-04-30 18:00 | Earnings | Unclassified earnings release | [Apranga APB annual report 2024](https://view.news.eu.nasdaq.com/view?id=b3aad15c4b649556e2e65b24c016ec6a4&lang=en&src=listed) | Open official announcement | -0.33% | 0.66% | 0.99% | -6.60% | -0.62% | No |
| 2025-04-29 08:00 | Earnings | Higher profit | [Apranga Group interim report for 3 months 2025](https://view.news.eu.nasdaq.com/view?id=ba5faf1e501e2edede53ab19a45ce9e65&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | 0.66% | -6.60% | -0.26% | No |
| 2025-04-01 16:00 | Revenue | — | [Turnover of Apranga Group in March 2025](https://view.news.eu.nasdaq.com/view?id=b3e8029d165f6a7a01efc7bd92a05cded&lang=en&src=listed) | TURNOVER | 1.17% | 0.99% | -0.99% | 0.66% | 1.16% | No |
| 2025-03-03 16:00 | Revenue | — | [Turnover of Apranga Group in February 2025](https://view.news.eu.nasdaq.com/view?id=b17eed2f6592143e6e22b1a4b569427e4&lang=en&src=listed) | TURNOVER | 0.83% | -2.14% | -0.99% | 0.82% | -1.50% | No |
| 2025-02-03 16:00 | Revenue | — | [Turnover of Apranga Group in January 2025](https://view.news.eu.nasdaq.com/view?id=be01db8bb588cd319282e06f9495a7732&lang=en&src=listed) | TURNOVER | 0.50% | -0.17% | 0.99% | 0.00% | -1.03% | No |
| 2025-01-03 09:00 | Revenue | — | [Turnover of Apranga Group in December 2024 and total year 2024](https://view.news.eu.nasdaq.com/view?id=b0c41d48e91d265310b335a9a9a035098&lang=en&src=listed) | TURNOVER | 1.19% | 0.17% | 0.17% | 1.68% | -1.39% | No |
| 2024-12-27 09:00 | Guidance | — | [Apranga Group revised investment forecast for the year 2024](https://view.news.eu.nasdaq.com/view?id=b97be9afa256ae6ec8790ab94b9d6789a&lang=en&src=listed) | Open official announcement | 0.00% | 0.68% | 1.37% | 2.73% | -1.95% | No |
| 2024-12-10 17:00 | Revenue | — | [The turnover and expansion plans of Apranga Group in 2025](https://view.news.eu.nasdaq.com/view?id=ba76676db7b24933653b32ad0ca7c04cb&lang=en&src=listed) | TURNOVER | 2.12% | -0.17% | 1.90% | 4.33% | 1.00% | No |
| 2024-12-02 16:00 | Revenue | — | [Turnover of Apranga Group in November 2024](https://view.news.eu.nasdaq.com/view?id=b82aadf9725de1d0b82a0e9b4c51b53cf&lang=en&src=listed) | TURNOVER | 0.00% | -0.18% | 1.23% | 5.64% | -0.06% | No |
| 2024-11-04 16:00 | Revenue | — | [Turnover of Apranga Group in October 2024](https://view.news.eu.nasdaq.com/view?id=b0ed7566104796d1ce6e99461f7f7947f&lang=en&src=listed) | TURNOVER | 0.71% | -0.35% | -0.88% | -0.35% | -0.28% | No |
| 2024-10-01 16:00 | Revenue | — | [Turnover of Apranga Group in September 2024](https://view.news.eu.nasdaq.com/view?id=b37823bbb3507c72157b215e98cfe9598&lang=en&src=listed) | TURNOVER | 1.80% | -0.35% | -0.18% | 2.30% | -1.19% | No |
| 2024-09-02 16:00 | Revenue | — | [Turnover of Apranga Group in August 2024](https://view.news.eu.nasdaq.com/view?id=bc32416b373c60b9d5c40f44cd2026a60&lang=en&src=listed) | TURNOVER | 0.91% | 0.18% | -0.18% | 2.54% | 0.48% | No |
| 2024-08-01 16:00 | Revenue | — | [Turnover of Apranga Group in July 2024](https://view.news.eu.nasdaq.com/view?id=b6baf2dc1871e21183b947f3aa3881094&lang=en&src=listed) | TURNOVER | -0.18% | -0.36% | -1.09% | 0.36% | 0.15% | Yes |
| 2024-07-26 09:00 | Earnings | Higher profit | [Apranga Group interim report for 6 months of 2024](https://view.news.eu.nasdaq.com/view?id=bf8382f38257b006432df031dbacd592b&lang=en&src=listed) | Open official announcement | 0.00% | -0.18% | -0.54% | -0.18% | -0.76% | No |
| 2024-07-01 16:00 | Revenue | — | [Turnover of Apranga Group in June 2024](https://view.news.eu.nasdaq.com/view?id=bf0ed31a41c9a1d7815a8fdd01bc1085a&lang=en&src=listed) | TURNOVER | 1.28% | 0.36% | 0.18% | -0.72% | -0.19% | No |
| 2024-06-03 16:00 | Revenue | — | [Turnover of Apranga Group in May 2024](https://view.news.eu.nasdaq.com/view?id=b39b165e07b4170c8a035868c0e91444e&lang=en&src=listed) | TURNOVER | -0.73% | 0.37% | 0.73% | 2.01% | 0.58% | No |
| 2024-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.24 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.24  | -0.99% | -7.02% | -7.86% | -7.36% | -6.78% | No |
| 2024-05-06 16:00 | Ex-dividend | — | [Ex-dividend date and procedure for the payment of Apranga APB dividends for the year 2023](https://view.news.eu.nasdaq.com/view?id=bcfdd851b2a0702488d528d46a6ce864e&lang=en&src=listed) | Open official announcement | 0.83% | -0.33% | -8.40% | -9.72% | -7.24% | Yes |
| 2024-05-02 16:00 | Revenue | — | [Turnover of Apranga Group in April 2024](https://view.news.eu.nasdaq.com/view?id=bab89e16f57cc220f59729f110cc20acc&lang=en&src=listed) | TURNOVER | 0.50% | 0.50% | -0.99% | -9.27% | -0.81% | No |
| 2024-04-30 12:57 | Earnings | Unclassified earnings release | [Apranga APB annual report 2023](https://view.news.eu.nasdaq.com/view?id=bbc083dbdaf720ff0eb20616c9910b77a&lang=en&src=listed) | Open official announcement | 0.17% | 0.00% | -0.33% | -9.60% | -0.59% | No |
| 2024-04-26 08:00 | Earnings | Higher profit | [Apranga Group interim report for 3 months 2024](https://view.news.eu.nasdaq.com/view?id=b9173b89b16aad47914fdd695f3f4d68b&lang=en&src=listed) | Open official announcement | -0.33% | 0.33% | 0.50% | -9.63% | 0.00% | No |
| 2024-04-02 16:00 | Revenue | — | [Turnover of Apranga Group in March 2024](https://view.news.eu.nasdaq.com/view?id=b97c1ba3e1e470d788eb7092ced8aaa2e&lang=en&src=listed) | TURNOVER | 1.34% | 0.33% | -0.99% | -0.33% | -1.43% | No |
| 2024-03-01 16:00 | Revenue | — | [Turnover of Apranga Group in February 2024](https://view.news.eu.nasdaq.com/view?id=bd66fa0cb77bbdac51df7a94f8163e3af&lang=en&src=listed) | TURNOVER | 1.88% | 0.67% | 0.50% | 1.34% | 1.31% | No |
| 2024-02-01 16:00 | Revenue | — | [Turnover of Apranga Group in January 2024](https://view.news.eu.nasdaq.com/view?id=b8653b759a8e16e8065c73d5d8510c183&lang=en&src=listed) | TURNOVER | 5.33% | 0.17% | 1.40% | 4.54% | 1.66% | No |
| 2024-01-03 09:00 | Revenue | — | [Turnover of Apranga Group in December 2023 and total year 2023](https://view.news.eu.nasdaq.com/view?id=bf6c789300f215392f32638ecbc8f9ad9&lang=en&src=listed) | TURNOVER | 0.75% | 0.00% | 0.00% | 6.51% | -0.27% | No |
| 2023-12-14 16:00 | Revenue | — | [The turnover and expansion plans of Apranga Group in 2024](https://view.news.eu.nasdaq.com/view?id=bca2b3e0d9bb5ec774d2754232c9e9e55&lang=en&src=listed) | TURNOVER | 0.76% | 0.94% | 0.19% | 1.69% | 0.24% | No |
| 2023-12-01 16:00 | Revenue | — | [Turnover of Apranga Group in November 2023](https://view.news.eu.nasdaq.com/view?id=b5b69ec6520aa4399dbc627b258583931&lang=en&src=listed) | TURNOVER | 1.14% | -0.94% | -0.94% | 0.75% | 0.20% | No |
| 2023-11-03 16:00 | Revenue | — | [Turnover of Apranga Group in October 2023](https://view.news.eu.nasdaq.com/view?id=be8397c3fd0d4f5752a16028d22e9c1a0&lang=en&src=listed) | TURNOVER | -1.67% | 0.19% | 0.00% | 0.00% | 1.51% | No |
| 2023-10-02 16:00 | Revenue | — | [Turnover of Apranga Group in September 2023](https://view.news.eu.nasdaq.com/view?id=b1f0a2738d537dd252d556c65c89cf646&lang=en&src=listed) | TURNOVER | 0.95% | -0.94% | -0.57% | 0.75% | 0.33% | No |
| 2023-09-01 16:00 | Revenue | — | [Turnover of Apranga Group in August 2023](https://view.news.eu.nasdaq.com/view?id=b1cc4cbb3ad529128594124933542ddad&lang=en&src=listed) | TURNOVER | 0.38% | -0.37% | -0.75% | -0.75% | -1.66% | No |
| 2023-08-01 16:00 | Revenue | — | [Turnover of Apranga Group in July 2023](https://view.news.eu.nasdaq.com/view?id=b03eabb8c07834a7021b8d4cf15ceef63&lang=en&src=listed) | TURNOVER | -1.10% | -1.11% | -2.41% | -1.48% | -2.29% | Yes |
| 2023-07-27 09:00 | Earnings | Unclassified earnings release | [Apranga Group interim report for 6 months of 2023](https://view.news.eu.nasdaq.com/view?id=bae6798f5f85859e75166f5108cc6563b&lang=en&src=listed) | Open official announcement | 1.68% | -0.18% | -1.10% | -3.49% | -1.38% | Yes |
| 2023-07-03 16:00 | Revenue | — | [Turnover of Apranga Group in June 2023](https://view.news.eu.nasdaq.com/view?id=b055cf2d6c15de293f3ac5c752c1d51f7&lang=en&src=listed) | TURNOVER | 5.06% | -1.85% | -2.22% | -0.37% | -2.00% | No |
| 2023-06-01 16:00 | Revenue | — | [Turnover of Apranga Group in May 2023](https://view.news.eu.nasdaq.com/view?id=b69d13153483feec514f07a2d2f3a64a2&lang=en&src=listed) | TURNOVER | -1.15% | 0.00% | -1.55% | 4.65% | -0.67% | No |
| 2023-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.28 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.28  | -1.69% | -10.00% | -9.31% | -12.59% | -7.27% | No |
| 2023-05-05 16:30 | Ex-dividend | — | [Ex-dividend date and procedure for the payment of Apranga APB dividends for the year 2022](https://view.news.eu.nasdaq.com/view?id=b010480f658101cb7dd946f0036861608&lang=en&src=listed) | Open official announcement | 1.56% | -1.19% | -10.39% | -13.12% | -9.71% | Yes |
| 2023-05-02 16:00 | Revenue | — | [Turnover of Apranga Group in April 2023](https://view.news.eu.nasdaq.com/view?id=b3d4600636c425ee2c34892e309b1b07d&lang=en&src=listed) | TURNOVER | 1.73% | -0.17% | -11.22% | -12.41% | -10.76% | Yes |
| 2023-04-27 12:48 | Earnings | Unclassified earnings release | [Apranga APB annual report 2022](https://view.news.eu.nasdaq.com/view?id=bd087b0973d0ec096976e7f7d90d27376&lang=en&src=listed) | Open official announcement | 6.73% | 0.51% | -0.85% | -12.10% | -0.70% | No |
| 2023-04-26 16:00 | Earnings | Unclassified earnings release | [Apranga Group interim report for three months of 2023](https://view.news.eu.nasdaq.com/view?id=bc24f305846a91a74d0bb3c46637a64c6&lang=en&src=listed) | Open official announcement | 5.66% | 1.38% | 0.17% | -11.23% | 0.48% | No |
| 2023-04-03 16:00 | Revenue | — | [Turnover of Apranga Group in March 2023](https://view.news.eu.nasdaq.com/view?id=b76df735fc4f2589a66e09912f2b3411f&lang=en&src=listed) | TURNOVER | 2.63% | 0.20% | 6.51% | 14.79% | 6.50% | No |
| 2023-03-01 16:00 | Revenue | — | [Turnover of Apranga Group in February 2023](https://view.news.eu.nasdaq.com/view?id=b4a2c81eca74ecaf395da3c71c3d36207&lang=en&src=listed) | TURNOVER | 0.40% | -0.40% | 0.00% | -0.80% | 0.38% | No |
| 2023-02-01 16:00 | Revenue | — | [Turnover of Apranga Group in January 2023](https://view.news.eu.nasdaq.com/view?id=b108ec022c305e136b5a4e1ac94275ae6&lang=en&src=listed) | TURNOVER | 2.29% | 3.14% | 7.17% | 11.66% | 5.69% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (7 classified of 13 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 7 | 0.07% | 0.276 | 0.00% | 29% | 0.33% | 0.722 | 0.13% |
| Higher profit | 5d | 7 | 1.25% | 2.983 | 0.66% | 71% | 1.07% | 4.355 | 0.00% |
| Higher profit | 21d | 7 | -1.91% | 21.448 | -0.18% | 43% | -1.62% | 24.418 | 0.40% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![APG1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/APG1L_all_frontiers.png?v=1792486189)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.000764 | -0.019905 | M2Sortino | 0.230300 | 0.222769 |
| AdjustedSharpe | -5.572545 | 1.548614 | MSquaredExcess | 0.048060 | 0.045356 |
| AnnualizedReturn_Arithmetic | 0.215236 | 0.203243 | Martin | 4.059646 | 8.452221 |
| AnnualizedReturn_Geometric | 0.227925 | 0.217304 | MaximumDrawdown | 0.122520 | 0.079787 |
| Appraisal | 1.552311 | 1.657018 | Modigliani | 0.001078 | 0.001089 |
| ArithmeticReturn | 0.000854 | 0.000807 | NetSelectivity | 0.046775 | 0.041572 |
| AverageDrawdown | 0.022993 | 0.021918 | Omega | 1.452921 | 1.381514 |
| AverageDrawdownLength | 31.090909 | 16.428571 | OmegaExcessReturn | 0.191027 | 0.195555 |
| AverageRecoveryTime | 22.136364 | 6.285714 | PainIndex | 0.042201 | 0.018731 |
| BernardoLedoit | 1.452921 | 1.381514 | PainRatio | 5.400998 | 11.601133 |
| BetaCoKurtosis | 0.019251 | 0.147694 | Prospect | -0.233234 | -0.408881 |
| BetaCoSkewness | -1.508227 | 1.233590 | Rachev | 1.219309 | 1.259273 |
| Burke | 1.133884 | 2.985924 | Selectivity | 0.215245 | 0.186548 |
| CAPMAlpha | 0.000805 | 0.000691 | Sharpe_Annualized | 1.547413 | 1.770381 |
| CAPMBeta | 0.055447 | 0.129657 | Sharpe_Daily | 0.097478 | 0.111524 |
| CDD | 0.072705 | 0.049098 | Sharpe_ES | 0.045711 | 0.053757 |
| Calmar | 1.860315 | 2.723544 | Sharpe_VaR | 0.105986 | 0.086325 |
| CoKurtosis | 0.000000 | 0.000000 | Skewness | -2.803633 | 0.154834 |
| CoSkewness | -0.000000 | 0.000000 | Sortino | 0.132530 | 0.179616 |
| CumulativeReturn | 0.848452 | 0.103315 | SpecificRisk | 0.138661 | 0.112581 |
| DRatio | 0.504583 | 0.626403 | Sterling | 1.024293 | 1.208673 |
| DownCapture | -0.092921 | 0.009326 | SystematicRisk | 0.009736 | 0.020092 |
| DownNumber | 0.330189 | 0.433962 | TotalRisk | 0.139002 | 0.114360 |
| DownPercent | 0.877358 | 0.867925 | TrackingError_Annualized | 0.216245 | 0.175972 |
| DownsideDeviation | 0.006445 | 0.004490 | TrackingError_Daily | 0.013622 | 0.011085 |
| DrawdownDeviation | 0.007213 | 0.007914 | Treynor_Annualized | 4.110665 | 1.675997 |
| ES_Loss | 0.018685 | 0.015003 | Treynor_Daily | 0.014701 | 0.006021 |
| FamaBeta | 0.792124 | 0.740832 | UlcerIndex | 0.056144 | 0.025710 |
| GeometricReturn | 0.000815 | 0.000781 | UpCapture | 0.127047 | 0.195949 |
| Hurst | 0.441221 | 0.371225 | UpNumber | 0.424312 | 0.465753 |
| Information_Annualized | -0.003533 | -0.113115 | UpPercent | 0.181193 | 0.232877 |
| Information_Daily | -0.000181 | -0.005811 | UpsidePotential | 0.425141 | 0.650414 |
| JensenAlpha | 0.215245 | 0.186548 | UpsideRisk | 0.005989 | 0.005690 |
| Kappa | 0.062549 | 0.123823 | VaR_Loss | 0.008059 | 0.009343 |
| Kelly | 11.124919 | 15.421172 | Volatility | 0.008762 | 0.007232 |
| Kurtosis | 41.870691 | 4.309029 | Volatility_Annualized | 0.139094 | 0.114802 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.745763</td><td>-0.067797</td></tr><tr><td>OUT</td><td>96</td><td>88</td><td>-8</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.171927</td><td>0.024153</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.150793</td><td>-0.010699</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>APG1L shares</td><td>200</td><td>302</td><td>+102</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8300.919961</td><td>388.619994</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.525424</td><td>0.067797</td></tr><tr><td>OUT</td><td>62</td><td>66</td><td>+4</td></tr><tr><td>IN</td><td>8</td><td>4</td><td>-4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.059608</td><td>-0.010565</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.096931</td><td>0.005776</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 200 APG1L shares. The scenario adds 102 shares from Table 3A, resulting in 302 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="APG1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![APG1L high-resolution stochastic dominance](figures/stock_profiles/APG1L_FSD_SSD_TSD.png?v=1792486439)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-grg1l" data-signal="HOLD">
<summary><strong>GRG1L — Grigeo Group</strong> | HOLD | target 543 shares | priority 9</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>543</td><td>+543</td><td>3.62%</td><td>EUR 1.0000</td><td>0.3983</td><td>53 / 6</td><td>40.19</td><td>Bearish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>HOLD</td><td>0.001312 (1.692% of portfolio HHI)</td><td>EUR 12,104</td><td>4.5%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

![GRG1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/GRG1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 1.0000 | EUR 0.9995 | -0.05% | EUR 1.0210 | +2.10% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![GRG1L complete technical history](figures/technical_analysis/GRG1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![GRG1L return histogram](figures/stock_profiles/GRG1L_histogram.png?v=1792485730)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -15.59% (2025-11-28) | Average gain / average loss | 1.081 | Best 21-day period | 16.34% (ending 2023-01-31) |
| Average underwater drawdown | 6.33% | Upside potential ratio | 1.437 | Worst 21-day period | -9.33% (ending 2026-06-01) |
| Conditional drawdown 95% | 14.55% | Upside capture vs Baltic EW | 58.6% | Best 5-day period | 11.62% (ending 2023-01-31) |
| Ulcer index | 7.42 | Downside capture vs Baltic EW | 29.1% | Best 63-day period | 23.03% (ending 2023-04-18) |
| Longest underwater period | 491 calendar days | Positive trading days | 37.0% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.638% | Best day | 8.37% (2023-12-19) |  |  |
| Daily upside deviation | 0.744% | Worst day | -4.02% (2026-02-26) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Tuesday (0.117%); worst: Thursday (0.007%) | 0.6695 | 0.7000 | Not detected |
| Calendar month | Best: Dec (0.534% daily); worst: May (-0.202% daily) | 0.2386 | 0.4574 | Not detected |
| Turn of month | First/last three days: 0.026%; other days: 0.046% | 0.8691 | 0.9400 | Not detected |

![GRG1L seasonality, drawdowns and upside periods](figures/stock_profiles/GRG1L_seasonality.png?v=1792486396)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-08-19 | 2025-11-28 | Not recovered | -15.59% | 423 |
| 2 | 2024-04-10 | 2024-08-07 | 2025-08-14 | -11.50% | 491 |
| 3 | 2023-10-23 | 2023-11-06 | 2023-12-18 | -8.80% | 56 |
| 4 | 2023-05-11 | 2023-05-24 | 2023-06-14 | -6.89% | 34 |
| 5 | 2023-12-20 | 2024-01-12 | 2024-02-13 | -5.88% | 55 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-01-02 | 2023-01-31 | 16.34% |
| 2 | 2023-11-17 | 2023-12-19 | 15.30% |
| 3 | 2025-11-27 | 2026-01-05 | 14.50% |
| 4 | 2025-07-18 | 2025-08-19 | 8.26% |
| 5 | 2023-09-21 | 2023-10-20 | 8.23% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (12 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.08% | 0.67% | 0.24% | 50% | 0% | 0.8482 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.35% | -1.47% | -3.04% | 38% | 50% | 0.3604 | 0.1210 | No adjusted statistical evidence; price drop may be mechanical |

![GRG1L official announcements and abnormal returns](figures/stock_profiles/GRG1L_company_events.png?v=1792491530)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (12 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | -1.35% | -2.74% | -5.48% | -6.39% | -4.91% | No |
| 2026-04-30 17:02 | Ex-dividend | — | [Dividend payment ex-date ](https://view.news.eu.nasdaq.com/view?id=b0041bba7ec4a184b55e0bd6d7226ec1e&lang=en&src=listed) | Open official announcement | 0.00% | -0.45% | -0.45% | -8.07% | -1.08% | No |
| 2026-04-08 18:00 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo Group AB to be held on 30th April 2026 - the Board of the Company proposes to pay EUR 0.05 dividend per share for the year 2025](https://view.news.eu.nasdaq.com/view?id=bad84030af0ed96c96d67a7424c46734c&lang=en&src=listed) | EUR 0.05  | 2.87% | -0.47% | 2.79% | 3.26% | 1.54% | No |
| 2025-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | 1.36% | -2.69% | -2.69% | -3.59% | -3.17% | No |
| 2025-04-29 18:00 | Ex-dividend | — | [Dividend payment ex-date](https://view.news.eu.nasdaq.com/view?id=b4ad39e0594d6ebcc5422f30572770df1&lang=en&src=listed) | Open official announcement | 2.33% | -0.45% | 1.36% | -4.55% | 0.45% | Yes |
| 2025-04-04 18:02 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo Group AB to be held on 28th April 2025 - the Board of the Company proposes to pay EUR 0.06 dividend per share for the year 2024](https://view.news.eu.nasdaq.com/view?id=b697113742fadc4e36f0d588121309fe6&lang=en&src=listed) | EUR 0.06  | -0.46% | -2.33% | -0.93% | 0.93% | -0.02% | No |
| 2024-05-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.07 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.07  | 1.82% | -2.68% | -4.02% | -5.80% | -2.37% | Yes |
| 2024-04-26 14:17 | Ex-dividend | — | [Dividend payment ex-date](https://view.news.eu.nasdaq.com/view?id=b9788d836a176223a528f549203832167&lang=en&src=listed) | Open official announcement | 0.93% | 0.92% | 3.21% | -0.46% | 2.72% | No |
| 2024-04-03 13:22 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo AB to be held on 26 April 2024 - the Board of the Company proposes to pay EUR 0.07 dividend per share for the year 2023](https://view.news.eu.nasdaq.com/view?id=bf81709422799b4987b2ca32a2a89bf7a&lang=en&src=listed) | EUR 0.07  | -0.44% | 0.00% | 0.44% | -0.44% | -0.66% | No |
| 2023-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | 0.90% | -3.33% | -6.00% | -0.89% | -4.58% | Yes |
| 2023-04-28 16:03 | Ex-dividend | — | [Dividend payment ex-date](https://view.news.eu.nasdaq.com/view?id=b09b3105c072c3c991662b5373f769e7f&lang=en&src=listed) | Open official announcement | 0.23% | 0.68% | 1.13% | -0.68% | 1.15% | Yes |
| 2023-04-06 17:05 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo AB to be held on 28 April 2023 - the Board of the Company proposes to pay EUR 0.05 dividend per share for the year 2022](https://view.news.eu.nasdaq.com/view?id=bed7213f418269c9cec4ab25ea1e0bbc6&lang=en&src=listed) | EUR 0.05  | 0.23% | 0.70% | 1.86% | 0.93% | 1.83% | No |

</details>

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![GRG1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/GRG1L_all_frontiers.png?v=1792486193)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.106013 | -0.415512 | M2Sortino | 0.124429 | -0.178341 |
| AdjustedSharpe | 0.718078 | -1.255464 | MSquaredExcess | -0.073755 | -0.369052 |
| AnnualizedReturn_Arithmetic | 0.127810 | -0.188392 | Martin | 2.053835 | -2.605196 |
| AnnualizedReturn_Geometric | 0.122677 | -0.178303 | MaximumDrawdown | 0.163104 | 0.101407 |
| Appraisal | 0.762303 | -1.356976 | Modigliani | 0.000571 | -0.000920 |
| ArithmeticReturn | 0.000507 | -0.000748 | NetSelectivity | -0.080521 | -0.371092 |
| AverageDrawdown | 0.025521 | 0.055090 | Omega | 1.173751 | 0.751564 |
| AverageDrawdownLength | 19.694444 | 61.500000 | OmegaExcessReturn | 0.087066 | -0.209237 |
| AverageRecoveryTime | 12.250000 | 1.000000 | PainIndex | 0.043336 | 0.061682 |
| BernardoLedoit | 1.173751 | 0.751564 | PainRatio | 2.830823 | -2.890675 |
| BetaCoKurtosis | 0.013070 | 0.024385 | Prospect | -0.505101 | -0.706014 |
| BetaCoSkewness | -1.870061 | 9.436686 | Rachev | 1.114414 | 0.738794 |
| Burke | 0.565621 | -1.979162 | Selectivity | 0.118837 | -0.170069 |
| CAPMAlpha | 0.000492 | -0.000717 | Sharpe_Annualized | 0.819174 | -1.495827 |
| CAPMBeta | 0.016790 | -0.034712 | Sharpe_Daily | 0.051603 | -0.094228 |
| CDD | 0.057321 | 0.087512 | Sharpe_ES | 0.023893 | -0.036820 |
| Calmar | 0.752135 | -1.758285 | Sharpe_VaR | 0.035105 | -0.052697 |
| CoKurtosis | 0.000000 | 0.000000 | Skewness | 1.110901 | -0.960328 |
| CoSkewness | -0.000000 | 0.000000 | Sortino | 0.081544 | -0.117055 |
| CumulativeReturn | 0.413726 | -0.093525 | SpecificRisk | 0.155892 | 0.125330 |
| DRatio | 0.806165 | 1.618247 | Sterling | 0.466265 | -0.885286 |
| DownCapture | -0.118101 | 0.001480 | SystematicRisk | 0.002948 | -0.005379 |
| DownNumber | 0.355346 | 0.283019 | TotalRisk | 0.155920 | 0.125445 |
| DownPercent | 0.823899 | 0.867925 | TrackingError_Annualized | 0.232684 | 0.203821 |
| DownsideDeviation | 0.006220 | 0.006387 | TrackingError_Daily | 0.014658 | 0.012839 |
| DrawdownDeviation | 0.008942 | 0.009068 | Treynor_Annualized | 7.306573 | 5.136691 |
| ES_Loss | 0.021228 | 0.020304 | Treynor_Daily | 0.027355 | 0.022442 |
| FamaBeta | 0.888531 | 0.812738 | UlcerIndex | 0.059730 | 0.068441 |
| GeometricReturn | 0.000459 | -0.000779 | UpCapture | 0.025515 | -0.173618 |
| Hurst | 0.382523 | 0.415342 | UpNumber | 0.348624 | 0.232877 |
| Information_Annualized | -0.455607 | -2.038616 | UpPercent | 0.206422 | 0.136986 |
| Information_Daily | -0.024444 | -0.126487 | UpsidePotential | 0.550860 | 0.354112 |
| JensenAlpha | 0.118837 | -0.170069 | UpsideRisk | 0.007619 | 0.004713 |
| Kappa | 0.056030 | -0.077901 | VaR_Loss | 0.014447 | 0.014186 |
| Kelly | 5.250336 | -11.876852 | Volatility | 0.009829 | 0.007934 |
| Kurtosis | 12.838329 | 7.291615 | Volatility_Annualized | 0.156023 | 0.125945 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.788136</td><td>-0.025424</td></tr><tr><td>OUT</td><td>96</td><td>93</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148627</td><td>0.000853</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.157428</td><td>-0.004064</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>GRG1L shares</td><td>0</td><td>543</td><td>+543</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8455.299967</td><td>543.000000</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.550847</td><td>0.093220</td></tr><tr><td>OUT</td><td>62</td><td>69</td><td>+7</td></tr><tr><td>IN</td><td>8</td><td>4</td><td>-4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.071281</td><td>0.001109</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.097179</td><td>0.006023</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 GRG1L shares. The scenario adds 543 shares from Table 3A, resulting in 543 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="GRG1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![GRG1L high-resolution stochastic dominance](figures/stock_profiles/GRG1L_FSD_SSD_TSD.png?v=1792486447)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-rsu1l" data-signal="HOLD">
<summary><strong>RSU1L — Rokiškio sūris</strong> | HOLD | target 126 shares | priority 10</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>126</td><td>+126</td><td>3.79%</td><td>EUR 4.4800</td><td>0.2373</td><td>35 / 7</td><td>47.35</td><td>Bearish</td><td>Inside bands</td><td>0.331 (Neutral)</td><td>HOLD</td><td>0.001433 (1.848% of portfolio HHI)</td><td>EUR 1,184</td><td>47.7%</td><td>5.2%</td><td>HIGH</td></tr></tbody></table>

![RSU1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/RSU1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 4.4800 | EUR 4.4368 | -0.96% | EUR 4.5352 | +1.23% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![RSU1L complete technical history](figures/technical_analysis/RSU1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![RSU1L return histogram](figures/stock_profiles/RSU1L_histogram.png?v=1792485733)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -10.23% (2025-06-05) | Average gain / average loss | 1.048 | Best 21-day period | 23.53% (ending 2025-01-20) |
| Average underwater drawdown | 4.63% | Upside potential ratio | 1.525 | Worst 21-day period | -9.05% (ending 2025-02-18) |
| Conditional drawdown 95% | 9.44% | Upside capture vs Baltic EW | 85.3% | Best 5-day period | 15.38% (ending 2025-01-20) |
| Ulcer index | 4.81 | Downside capture vs Baltic EW | 47.2% | Best 63-day period | 25.00% (ending 2025-03-25) |
| Longest underwater period | 405 calendar days | Positive trading days | 30.6% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 1.004% | Best day | 9.47% (2024-12-03) |  |  |
| Daily upside deviation | 1.113% | Worst day | -6.78% (2024-08-23) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.200%); worst: Thursday (-0.077%) | 0.0517 | 0.1700 | Not detected |
| Calendar month | Best: Dec (0.288% daily); worst: Nov (-0.087% daily) | 0.9659 | 0.9726 | Not detected |
| Turn of month | First/last three days: 0.132%; other days: 0.037% | 0.4909 | 0.8443 | Not detected |

![RSU1L seasonality, drawdowns and upside periods](figures/stock_profiles/RSU1L_seasonality.png?v=1792486392)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-03-25 | 2025-06-05 | 2025-09-12 | -10.23% | 171 |
| 2 | 2024-08-21 | 2024-08-26 | 2024-12-03 | -9.55% | 104 |
| 3 | 2026-03-23 | 2026-06-26 | Not recovered | -9.32% | 207 |
| 4 | 2024-12-04 | 2024-12-10 | 2025-01-02 | -9.19% | 29 |
| 5 | 2025-01-20 | 2025-02-13 | 2025-03-25 | -9.05% | 64 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2024-12-11 | 2025-01-20 | 23.53% |
| 2 | 2024-07-19 | 2024-08-21 | 11.25% |
| 3 | 2024-05-16 | 2024-06-14 | 11.19% |
| 4 | 2025-08-19 | 2025-09-18 | 10.40% |
| 5 | 2024-11-04 | 2024-12-04 | 9.47% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (15 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 7 | 0.39% | 0.51% | 0.47% | 57% | 29% | 0.9122 | 0.9549 | No adjusted statistical evidence |
| Earnings | 4 | -0.19% | 0.97% | -0.64% | 75% | 0% | 0.8082 | 0.7784 | No adjusted statistical evidence |
| Ex-dividend | 4 | -2.69% | -1.57% | -1.28% | 25% | 50% | 0.5056 | 0.6772 | No adjusted statistical evidence; price drop may be mechanical |

![RSU1L official announcements and abnormal returns](figures/stock_profiles/RSU1L_company_events.png?v=1792491527)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (15 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.2 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.2  | 0.44% | -3.93% | -3.93% | -3.06% | -3.36% | Yes |
| 2026-05-05 16:25 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2025](https://view.news.eu.nasdaq.com/view?id=b45a30d6dcea4064459e8dfe8f22371b7&lang=en&src=listed) | Open official announcement | 0.89% | 0.44% | 0.88% | -3.08% | 1.40% | No |
| 2026-04-30 16:37 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2025](https://view.news.eu.nasdaq.com/view?id=b72ded3397654dfbf6168a3805ccc2a20&lang=en&src=listed) | Open official announcement | 3.18% | 0.00% | 1.76% | -3.08% | 1.13% | No |
| 2025-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.2 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.2  | 0.50% | -2.97% | -3.47% | -3.96% | -4.11% | Yes |
| 2025-05-05 16:32 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2024](https://view.news.eu.nasdaq.com/view?id=bbb7b83d1cd51c16493f5cf3b70caff3a&lang=en&src=listed) | Open official announcement | 0.50% | 0.00% | 0.50% | -2.99% | -1.12% | No |
| 2025-04-30 16:54 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2024 ](https://view.news.eu.nasdaq.com/view?id=bc4e66d4472a6609fa46e07216dfd7f9e&lang=en&src=listed) | Open official announcement | 0.50% | 0.00% | 0.50% | -2.99% | -1.12% | No |
| 2024-05-23 16:18 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2023](https://view.news.eu.nasdaq.com/view?id=b82ed63bc0d6997bbd84fb8dd9b47e4e7&lang=en&src=listed) | Open official announcement | 3.50% | 0.68% | 3.38% | 7.43% | 3.71% | Yes |
| 2024-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | 3.40% | -1.32% | -1.97% | 1.97% | -0.90% | No |
| 2024-05-02 17:11 | Dividend announcement | — | [Ex-day dividend payment of AB Rokiškio sūris](https://view.news.eu.nasdaq.com/view?id=bddae4c52866be99d74cbe585e79e305a&lang=en&src=listed) | Open official announcement | 0.00% | 2.04% | 3.40% | 6.80% | 3.58% | No |
| 2024-04-30 16:45 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2023](https://view.news.eu.nasdaq.com/view?id=bfdf39c4520d5b56a5c6d303381087548&lang=en&src=listed) | Open official announcement | -0.68% | 0.68% | 3.42% | 6.16% | 3.16% | No |
| 2023-05-19 16:36 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2022](https://view.news.eu.nasdaq.com/view?id=b08778c24d801ff03fff3b762be37ee6a&lang=en&src=listed) | Open official announcement | 0.68% | 0.00% | -1.34% | -1.34% | -0.70% | No |
| 2023-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | -1.99% | -4.05% | 0.68% | -2.70% | 2.10% | No |
| 2023-05-03 16:49 | Dividend announcement | — | [Ex-day dividend payment of AB Rokiškio sūris](https://view.news.eu.nasdaq.com/view?id=bbea8925aaecc539a89c6c2c6f7a2c10e&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | -5.96% | -3.97% | -5.28% | Yes |
| 2023-04-28 17:05 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2022](https://view.news.eu.nasdaq.com/view?id=b200c00b8cbf121459bf6149298b956c2&lang=en&src=listed) | Open official announcement | 0.00% | 0.67% | 0.67% | -4.67% | 0.69% | No |
| 2023-04-07 16:19 | Dividend announcement | — | [The Board of Rokiškio sūris AB approves the 2022 audited financial statements and proposes to pay a dividend of EUR 0.15 per share ](https://view.news.eu.nasdaq.com/view?id=b59d0e045c14b6d2a6302632ab4973da4&lang=en&src=listed) | EUR 0.15  | 0.00% | 1.35% | 2.03% | -4.05% | 2.00% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (0 classified of 4 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

No explicitly classified profit outcomes are available for this share.

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![RSU1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/RSU1L_all_frontiers.png?v=1792486192)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.198909 | -0.271256 | M2Sortino | 0.028780 | -0.033802 |
| AdjustedSharpe | 0.242870 | -0.054593 | MSquaredExcess | -0.168690 | -0.211581 |
| AnnualizedReturn_Arithmetic | 0.058990 | -0.011723 | Martin | 0.461094 | -0.685036 |
| AnnualizedReturn_Geometric | 0.029780 | -0.034046 | MaximumDrawdown | 0.159089 | 0.084418 |
| Appraisal | 0.024580 | -0.171085 | Modigliani | 0.000168 | -0.000034 |
| ArithmeticReturn | 0.000234 | -0.000047 | NetSelectivity | -0.288144 | -0.362871 |
| AverageDrawdown | 0.073389 | 0.029882 | Omega | 1.052456 | 0.989803 |
| AverageDrawdownLength | 67.454545 | 14.375000 | OmegaExcessReturn | -0.029551 | -0.080453 |
| AverageRecoveryTime | 35.272727 | 7.875000 | PainIndex | 0.053798 | 0.040949 |
| BernardoLedoit | 1.052456 | 0.989803 | PainRatio | 0.553557 | -0.831432 |
| BetaCoKurtosis | 0.121557 | 0.086355 | Prospect | -0.515701 | -0.600022 |
| BetaCoSkewness | -3.452885 | 5.219791 | Rachev | 1.071028 | 0.965198 |
| Burke | 0.095021 | -0.264351 | Selectivity | 0.005979 | -0.036604 |
| CAPMAlpha | 0.000143 | -0.000056 | Sharpe_Annualized | 0.241649 | -0.054572 |
| CAPMBeta | 0.104075 | 0.010782 | Sharpe_Daily | 0.015222 | -0.003438 |
| CDD | 0.125774 | 0.059566 | Sharpe_ES | 0.006528 | -0.001506 |
| Calmar | 0.187193 | -0.403308 | Sharpe_VaR | 0.009229 | -0.001859 |
| CoKurtosis | 0.000000 | 0.000000 | Skewness | 0.436525 | -0.070458 |
| CoSkewness | -0.000000 | 0.000000 | Sortino | 0.022589 | -0.004855 |
| CumulativeReturn | 0.091774 | -0.017171 | SpecificRisk | 0.243268 | 0.213953 |
| DRatio | 0.967126 | 1.033264 | Sterling | 0.114943 | -0.184616 |
| DownCapture | 0.110948 | 0.057736 | SystematicRisk | 0.018275 | 0.001671 |
| DownNumber | 0.339623 | 0.377358 | TotalRisk | 0.243954 | 0.213959 |
| DownPercent | 0.761006 | 0.735849 | TrackingError_Annualized | 0.289842 | 0.263895 |
| DownsideDeviation | 0.010363 | 0.009581 | TrackingError_Daily | 0.018258 | 0.016624 |
| DrawdownDeviation | 0.010488 | 0.009781 | Treynor_Annualized | 0.286143 | -3.157595 |
| ES_Loss | 0.035860 | 0.030899 | Treynor_Daily | 0.001119 | -0.012748 |
| FamaBeta | 1.390202 | 1.386220 | UlcerIndex | 0.064586 | 0.049700 |
| GeometricReturn | 0.000116 | -0.000137 | UpCapture | 0.143059 | 0.034815 |
| Hurst | 0.351713 | 0.405827 | UpNumber | 0.309633 | 0.328767 |
| Information_Annualized | -0.686268 | -1.027891 | UpPercent | 0.236239 | 0.205479 |
| Information_Daily | -0.038401 | -0.059101 | UpsidePotential | 0.453221 | 0.471278 |
| JensenAlpha | 0.005979 | -0.036604 | UpsideRisk | 0.011350 | 0.009480 |
| Kappa | 0.015195 | -0.003389 | VaR_Loss | 0.025365 | 0.025021 |
| Kelly | 0.989899 | -0.254042 | Volatility | 0.015378 | 0.013532 |
| Kurtosis | 8.148953 | 5.071019 | Volatility_Annualized | 0.244115 | 0.214814 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.796610</td><td>-0.016949</td></tr><tr><td>OUT</td><td>96</td><td>94</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.162612</td><td>0.014839</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.158856</td><td>-0.002636</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>RSU1L shares</td><td>0</td><td>126</td><td>+126</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8476.779969</td><td>564.480002</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.559322</td><td>0.101695</td></tr><tr><td>OUT</td><td>62</td><td>70</td><td>+8</td></tr><tr><td>IN</td><td>8</td><td>4</td><td>-4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.069275</td><td>-0.000898</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.098533</td><td>0.007377</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 RSU1L shares. The scenario adds 126 shares from Table 3A, resulting in 126 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="RSU1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![RSU1L high-resolution stochastic dominance](figures/stock_profiles/RSU1L_FSD_SSD_TSD.png?v=1792486465)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-ako1l" data-signal="HOLD">
<summary><strong>AKO1L — Akola Group</strong> | HOLD | target 167 shares | priority 11</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>167</td><td>+167</td><td>2.04%</td><td>EUR 1.8350</td><td>0.1949</td><td>32 / 9</td><td>77.07</td><td>Bullish</td><td>Inside bands</td><td>0.869 (Overbought)</td><td>HOLD</td><td>0.000418 (0.539% of portfolio HHI)</td><td>EUR 22,415</td><td>1.4%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![AKO1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/AKO1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 1.8350 | EUR 1.7252 | -5.98% | EUR 1.8503 | +0.83% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![AKO1L complete technical history](figures/technical_analysis/AKO1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![AKO1L return histogram](figures/stock_profiles/AKO1L_histogram.png?v=1792485730)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -45.90% (2024-04-18) | Average gain / average loss | 1.086 | Best 21-day period | 20.19% (ending 2024-05-22) |
| Average underwater drawdown | 20.58% | Upside potential ratio | 1.287 | Worst 21-day period | -13.79% (ending 2023-06-09) |
| Conditional drawdown 95% | 42.74% | Upside capture vs Baltic EW | 99.9% | Best 5-day period | 11.42% (ending 2024-06-06) |
| Ulcer index | 23.64 | Downside capture vs Baltic EW | 73.0% | Best 63-day period | 26.60% (ending 2024-07-22) |
| Longest underwater period | 957 calendar days | Positive trading days | 37.9% | Repeated calendar pattern | Mar: 0% positive across 4 years |
| Daily downside deviation | 0.777% | Best day | 8.66% (2025-05-22) |  |  |
| Daily upside deviation | 0.851% | Worst day | -8.74% (2023-06-01) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Tuesday (0.128%); worst: Monday (-0.080%) | 0.1875 | 0.3316 | Not detected |
| Calendar month | Best: May (0.296% daily); worst: Mar (-0.396% daily) | 0.0398 | 0.2287 | Not detected |
| Turn of month | First/last three days: 0.042%; other days: 0.040% | 0.4703 | 0.8443 | Not detected |

![AKO1L seasonality, drawdowns and upside periods](figures/stock_profiles/AKO1L_seasonality.png?v=1792486407)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-23 | 2024-04-18 | 2025-10-07 | -45.90% | 957 |
| 2 | 2026-01-16 | 2026-03-30 | Not recovered | -16.98% | 273 |
| 3 | 2025-11-12 | 2025-11-14 | 2025-12-12 | -3.86% | 30 |
| 4 | 2023-02-03 | 2023-02-06 | 2023-02-08 | -1.58% | 5 |
| 5 | 2023-01-10 | 2023-01-11 | 2023-01-12 | -1.39% | 2 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2024-04-18 | 2024-05-22 | 20.19% |
| 2 | 2023-01-24 | 2023-02-23 | 20.14% |
| 3 | 2025-05-09 | 2025-06-10 | 19.92% |
| 4 | 2025-09-11 | 2025-10-10 | 14.42% |
| 5 | 2026-03-30 | 2026-04-30 | 10.39% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (19 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | 0.52% | -0.58% | -2.02% | 25% | 25% | 0.7840 | 0.7315 | No adjusted statistical evidence |
| Earnings | 8 | 0.32% | -0.41% | -0.88% | 62% | 38% | 1.0000 | 0.7929 | No adjusted statistical evidence |
| Ex-dividend | 3 | -1.94% | -2.33% | -1.88% | 0% | 0% | 0.0624 | 0.8481 | No adjusted statistical evidence; price drop may be mechanical |
| Guidance | 1 | -0.54% | 0.02% | 6.51% | 100% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Revenue | 3 | 1.87% | 0.63% | 0.36% | 67% | 33% | 0.9197 | 1.0000 | No adjusted statistical evidence |

![AKO1L official announcements and abnormal returns](figures/stock_profiles/AKO1L_company_events.png?v=1792491538)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (19 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-19 16:10 | Revenue | — | [AB Akola Group generated EUR 1.5 billion in revenue and EUR 96 million EBITDA in FY 2025/2026](https://view.news.eu.nasdaq.com/view?id=b4bd26234b2f067f076c2099289a4bb5f&lang=en&src=listed) | REVENUE; EBITDA; EUR 1.5 billion; EUR 96 million | 0.00% | -0.28% | -1.39% | -2.78% | -1.02% | No |
| 2026-08-04 09:45 | Earnings | Unclassified earnings release | [AB Akola Group's financial results calendar for 2026/2027](https://view.news.eu.nasdaq.com/view?id=b014cd1b72e88045a5a1ac682bf5ea72e&lang=en&src=listed) | Open official announcement | -0.56% | 0.28% | 0.28% | -1.12% | 0.23% | No |
| 2026-06-30 09:45 | Guidance | — | [AB Akola Group raises it's normalised EBITDA guidance for the financial year 2025/2026 to EUR 80-100 million](https://view.news.eu.nasdaq.com/view?id=b1c03ef68bd1ba17d4bf34aa7740a9856&lang=en&src=listed) | EBITDA; EUR 80 | 0.91% | -0.60% | 0.60% | 8.13% | 0.02% | No |
| 2026-02-18 09:00 | Earnings | Higher profit | [Six months of AB Akola Group: gross profit increased by 12% to EUR 92 million](https://view.news.eu.nasdaq.com/view?id=b16e7fa7e2c4446b4243e4349b0febcba&lang=en&src=listed) | PROFIT; 12%; EUR 92 million | -2.17% | -0.55% | -1.39% | -3.05% | 0.01% | No |
| 2025-11-19 16:15 | Revenue | — | [Three months of AB Akola Group - EUR 394 million in revenue](https://view.news.eu.nasdaq.com/view?id=b89ec2a11554984e31f9b6c2be6e0ebff&lang=en&src=listed) | REVENUE; EUR 394 million | -3.04% | 1.42% | 1.14% | 3.99% | 1.59% | Yes |
| 2025-11-13 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.09 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.09  | 0.28% | -3.03% | -3.03% | 1.10% | -2.64% | No |
| 2025-10-31 15:05 | Earnings | Higher profit | [AB Akola Group's notification on the Annual information for the Audited Financial Year 2024/2025](https://view.news.eu.nasdaq.com/view?id=b53785ae12618c86ae8b93365dc327f3f&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | 0.28% | -0.83% | 0.64% | No |
| 2025-10-31 14:35 | Dividend announcement | — | [Dividend Payment Procedure for Shareholders of AB Akola Group](https://view.news.eu.nasdaq.com/view?id=b7409ec1e5019069f9ae84353dce86502&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | 0.28% | -0.83% | 0.64% | No |
| 2025-05-21 17:00 | Earnings | Higher profit | [AB Akola group 9-month results: net profit increases by more than 100%](https://view.news.eu.nasdaq.com/view?id=bf9e1af36854c889fe06aa1aac9c1e24f&lang=en&src=listed) | NET PROFIT; PROFIT; 100% | 3.25% | 8.66% | 7.87% | 15.75% | 7.18% | No |
| 2025-04-09 17:32 | Earnings | Higher profit | [Correction: Half a year of AB Akola Group: net profit grew by more than a third](https://view.news.eu.nasdaq.com/view?id=b78847e8ee0d2cb6accf4b367909e6f51&lang=en&src=listed) | NET PROFIT; PROFIT | -2.86% | 0.42% | 1.26% | 4.20% | -0.75% | No |
| 2025-02-19 16:30 | Earnings | Higher profit | [Half a year of AB Akola Group: net profit grew by more than a third](https://view.news.eu.nasdaq.com/view?id=b4ea2d19f4971378c060870649525a900&lang=en&src=listed) | NET PROFIT; PROFIT | 4.07% | 2.34% | 1.56% | -5.08% | 2.08% | Yes |
| 2024-11-14 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -4.37% | -2.07% | -3.73% | -1.24% | -2.94% | No |
| 2024-10-31 15:27 | Dividend announcement | — | [Dividend Payment Procedure for shareholders of AB Akola Group](https://view.news.eu.nasdaq.com/view?id=b9b135b883298717b18991d37c0b7a509&lang=en&src=listed) | Open official announcement | -0.80% | -0.40% | -0.80% | -5.62% | -0.63% | No |
| 2024-08-21 16:48 | Revenue | — | [Twelve months of AB Akola Group: profits grow while revenue decline](https://view.news.eu.nasdaq.com/view?id=bfcc63df818287f45c443ef1901d81609&lang=en&src=listed) | REVENUE; PROFIT | -1.30% | 4.41% | 0.00% | 0.88% | 1.31% | No |
| 2023-11-13 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.026 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.026  | 0.41% | -1.24% | -1.65% | -5.37% | -1.40% | No |
| 2023-10-27 14:02 | Dividend announcement | — | [Dividend Payment Procedure for shareholders of AB Linas Agro Group](https://view.news.eu.nasdaq.com/view?id=b7be46b66d16fb88d8439b5418317c59a&lang=en&src=listed) | Open official announcement | -2.00% | 0.00% | -1.63% | -3.27% | -1.14% | No |
| 2023-06-15 16:52 | Dividend announcement | — | [The Board of Directors of AB Linas Agro Group approved the Dividend Policy](https://view.news.eu.nasdaq.com/view?id=b4b7d4ef343512a9b314a160739c3e3ac&lang=en&src=listed) | Open official announcement | 0.73% | 1.82% | -1.09% | -2.18% | -1.21% | Yes |
| 2023-05-31 16:30 | Earnings | Lower profit | [9 months of the 2022/2023 financial year of AB Linas Agro Group: revenue up, profit down](https://view.news.eu.nasdaq.com/view?id=bf717a60564566824c81ace77cf616295&lang=en&src=listed) | REVENUE; PROFIT | 0.00% | -8.74% | -11.97% | -11.33% | -10.99% | Yes |
| 2023-02-28 18:22 | Earnings | Higher profit | [Six months of the 2022/23 financial year of AB Linas Agro Group: sales, revenue, and profit growth](https://view.news.eu.nasdaq.com/view?id=bcc68b2c6d91e41ef566d225f3811fc67&lang=en&src=listed) | REVENUE; PROFIT; SALES | 2.39% | 0.58% | -1.46% | -7.58% | -1.67% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (7 classified of 8 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 6 | 1.91% | 11.894 | 0.50% | 67% | 1.74% | 12.923 | 0.16% |
| Higher profit | 5d | 6 | 1.36% | 11.826 | 0.77% | 67% | 1.25% | 10.071 | 0.32% |
| Higher profit | 21d | 6 | 0.57% | 71.387 | -1.94% | 33% | 0.78% | 63.455 | -0.71% |
| Lower profit | 1d | 1 | -8.74% | — | -8.74% | 0% | -8.49% | — | -8.49% |
| Lower profit | 5d | 1 | -11.97% | — | -11.97% | 0% | -10.99% | — | -10.99% |
| Lower profit | 21d | 1 | -11.33% | — | -11.33% | 0% | -11.08% | — | -11.08% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![AKO1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/AKO1L_all_frontiers.png?v=1792486196)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.190670 | -0.435112 | M2Sortino | 0.037933 | -0.195375 |
| AdjustedSharpe | 0.288067 | -1.013817 | MSquaredExcess | -0.156572 | -0.343643 |
| AnnualizedReturn_Arithmetic | 0.054158 | -0.207161 | Martin | 0.149407 | -1.937896 |
| AnnualizedReturn_Geometric | 0.038019 | -0.197903 | MaximumDrawdown | 0.406184 | 0.167568 |
| Appraisal | 0.134428 | -1.359501 | Modigliani | 0.000205 | -0.000781 |
| ArithmeticReturn | 0.000215 | -0.000822 | NetSelectivity | -0.201428 | -0.447675 |
| AverageDrawdown | 0.070383 | 0.167568 | Omega | 1.061023 | 0.777152 |
| AverageDrawdownLength | 81.888889 | 126.000000 | OmegaExcessReturn | -0.006462 | -0.236392 |
| AverageRecoveryTime | 48.222222 | 79.000000 | PainIndex | 0.211197 | 0.088969 |
| BernardoLedoit | 1.061023 | 0.777152 | PainRatio | 0.180016 | -2.224408 |
| BetaCoKurtosis | -0.085834 | 0.099825 | Prospect | -0.538978 | -0.683735 |
| BetaCoSkewness | -4.591177 | -4.726973 | Rachev | 1.112303 | 0.809991 |
| Burke | 0.127391 | -1.295181 | Selectivity | 0.024661 | -0.220076 |
| CAPMAlpha | 0.000164 | -0.000905 | Sharpe_Annualized | 0.294564 | -1.269597 |
| CAPMBeta | 0.058412 | 0.093475 | Sharpe_Daily | 0.018556 | -0.079977 |
| CDD | 0.203360 | 0.159189 | Sharpe_ES | 0.008461 | -0.030084 |
| Calmar | 0.093600 | -1.181033 | Sharpe_VaR | 0.012857 | -0.049292 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | 0.385739 | -0.509137 |
| CoSkewness | -0.000001 | -0.000000 | Sortino | 0.027662 | -0.103452 |
| CumulativeReturn | 0.118116 | -0.104401 | SpecificRisk | 0.183449 | 0.161880 |
| DRatio | 0.959257 | 1.454587 | Sterling | 0.075109 | -0.739637 |
| DownCapture | 0.059814 | 0.224273 | SystematicRisk | 0.010257 | 0.014485 |
| DownNumber | 0.415094 | 0.396226 | TotalRisk | 0.183735 | 0.162527 |
| DownPercent | 0.789308 | 0.773585 | TrackingError_Annualized | 0.247053 | 0.214823 |
| DownsideDeviation | 0.007769 | 0.007946 | TrackingError_Daily | 0.015563 | 0.013533 |
| DrawdownDeviation | 0.016029 | 0.014928 | Treynor_Annualized | 0.650874 | -2.117175 |
| ES_Loss | 0.025400 | 0.027326 | Treynor_Daily | 0.002535 | -0.009358 |
| FamaBeta | 1.047039 | 1.052960 | UlcerIndex | 0.254464 | 0.102123 |
| GeometricReturn | 0.000148 | -0.000875 | UpCapture | 0.097979 | -0.014717 |
| Hurst | 0.408968 | 0.430814 | UpNumber | 0.389908 | 0.397260 |
| Information_Annualized | -0.771779 | -2.025444 | UpPercent | 0.238532 | 0.205479 |
| Information_Daily | -0.043019 | -0.127082 | UpsidePotential | 0.480974 | 0.360774 |
| JensenAlpha | 0.024661 | -0.220076 | UpsideRisk | 0.008582 | 0.006507 |
| Kappa | 0.017077 | -0.068466 | VaR_Loss | 0.016716 | 0.016677 |
| Kelly | 1.602141 | -7.780800 | Volatility | 0.011582 | 0.010279 |
| Kurtosis | 14.339191 | 7.603804 | Volatility_Annualized | 0.183857 | 0.163170 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.154683</td><td>0.006910</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.160163</td><td>-0.001329</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>AKO1L shares</td><td>0</td><td>167</td><td>+167</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8218.744973</td><td>306.445006</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.491525</td><td>0.033898</td></tr><tr><td>OUT</td><td>62</td><td>64</td><td>+2</td></tr><tr><td>IN</td><td>8</td><td>6</td><td>-2</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.063328</td><td>-0.006844</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.094109</td><td>0.002953</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 AKO1L shares. The scenario adds 167 shares from Table 3A, resulting in 167 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="AKO1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![AKO1L high-resolution stochastic dominance](figures/stock_profiles/AKO1L_FSD_SSD_TSD.png?v=1792486436)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-ign1l" data-signal="HOLD">
<summary><strong>IGN1L — Ignitis grupė</strong> | HOLD | target 27 shares | priority 12</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>27</td><td>+27</td><td>4.05%</td><td>EUR 21.7500</td><td>0.3559</td><td>52 / 10</td><td>44.10</td><td>Bullish</td><td>Inside bands</td><td>1.000 (Overbought)</td><td>HOLD</td><td>0.001640 (2.115% of portfolio HHI)</td><td>EUR 284,653</td><td>0.2%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![IGN1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/IGN1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 21.7500 | EUR 21.4589 | -1.34% | EUR 22.1261 | +1.73% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![IGN1L complete technical history](figures/technical_analysis/IGN1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![IGN1L return histogram](figures/stock_profiles/IGN1L_histogram.png?v=1792485730)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -14.56% (2024-04-24) | Average gain / average loss | 1.050 | Best 21-day period | 9.93% (ending 2026-01-16) |
| Average underwater drawdown | 6.14% | Upside potential ratio | 1.261 | Worst 21-day period | -9.87% (ending 2025-03-19) |
| Conditional drawdown 95% | 13.20% | Upside capture vs Baltic EW | 48.5% | Best 5-day period | 5.44% (ending 2025-02-14) |
| Ulcer index | 7.02 | Downside capture vs Baltic EW | 38.1% | Best 63-day period | 16.77% (ending 2025-02-17) |
| Longest underwater period | 611 calendar days | Positive trading days | 37.9% | Repeated calendar pattern | Jan: 100% positive across 4 years |
| Daily downside deviation | 0.428% | Best day | 3.92% (2025-03-27) |  |  |
| Daily upside deviation | 0.438% | Worst day | -2.94% (2024-04-10) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.069%); worst: Tuesday (-0.025%) | 0.2766 | 0.4399 | Not detected |
| Calendar month | Best: Jan (0.193% daily); worst: Nov (-0.133% daily) | 0.0503 | 0.2313 | Not detected |
| Turn of month | First/last three days: 0.013%; other days: 0.017% | 0.9339 | 0.9400 | Not detected |

![IGN1L seasonality, drawdowns and upside periods](figures/stock_profiles/IGN1L_seasonality.png?v=1792486390)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-05-23 | 2024-04-24 | 2025-01-23 | -14.56% | 611 |
| 2 | 2025-02-17 | 2025-03-04 | 2026-01-15 | -10.29% | 332 |
| 3 | 2026-01-26 | 2026-06-08 | Not recovered | -7.49% | 263 |
| 4 | 2023-03-08 | 2023-03-13 | 2023-04-26 | -3.14% | 49 |
| 5 | 2025-01-24 | 2025-01-28 | 2025-02-06 | -2.12% | 13 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-12-10 | 2026-01-16 | 9.93% |
| 2 | 2024-12-03 | 2025-01-10 | 7.71% |
| 3 | 2025-01-14 | 2025-02-12 | 7.37% |
| 4 | 2026-06-17 | 2026-07-22 | 6.65% |
| 5 | 2025-04-11 | 2025-05-19 | 6.47% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (31 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 6 | 0.14% | 0.29% | 1.27% | 50% | 33% | 0.9354 | 0.5385 | No adjusted statistical evidence |
| Earnings | 16 | -0.11% | -0.47% | 0.26% | 31% | 31% | 0.4974 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 6 | -2.42% | -2.47% | -1.44% | 0% | 50% | 0.0025 | 0.2391 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 3 | -0.32% | 0.22% | 0.67% | 67% | 33% | 0.9354 | 1.0000 | No adjusted statistical evidence |

![IGN1L official announcements and abnormal returns](figures/stock_profiles/IGN1L_company_events.png?v=1792491525)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (31 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-12 09:00 | Earnings | Unclassified earnings release | [First six months 2026 interim report: sustained strategic progress and consistent financial performance. Full-year 2026 guidance for Adjusted EBITDA and Investments reiterated](https://view.news.eu.nasdaq.com/view?id=b23c9cb57695e371ed8640bfeef0d7640&lang=en&src=listed) | EBITDA | -0.67% | -0.22% | -1.35% | -0.67% | -1.40% | Yes |
| 2026-05-13 09:00 | Earnings | Unclassified earnings release | [First three months 2026 interim report: solid performance and debut asset rotation transaction completed. Full-year 2026 guidance for Adjusted EBITDA and Investments reiterated](https://view.news.eu.nasdaq.com/view?id=bec1aa53fcd36d7817f04b1eb522f7197&lang=en&src=listed) | EBITDA | -0.47% | -0.23% | -0.93% | -1.17% | -0.36% | No |
| 2026-02-25 09:31 | Earnings | Unclassified earnings release | [Integrated Annual Report 2025: record strategic progress with +0.7 GW of new green capacities installed, completed mass smart meter roll-out, and Adjusted EBITDA beat ](https://view.news.eu.nasdaq.com/view?id=bb041135c4b64fadf4935af5069f81d50&lang=en&src=listed) | EBITDA | -1.35% | 0.23% | -0.92% | -2.06% | -0.31% | No |
| 2025-12-15 16:00 | Earnings | Unclassified earnings release | [On the tentative award of a Polish capacity mechanism quarterly auction for 2030 to Ignitis Gamyba](https://view.news.eu.nasdaq.com/view?id=b3992b6b4d7a109cd6a4b141f247e4bf1&lang=en&src=listed) | Open official announcement | 0.49% | 0.00% | 1.21% | 8.45% | 0.61% | No |
| 2025-11-12 09:00 | Earnings | Unclassified earnings release | [First nine months 2025 interim report: strong earnings and business plan delivery with +0.7 GW installed green capacities. Full-year 2025 guidance for Adjusted EBITDA and Investments updated](https://view.news.eu.nasdaq.com/view?id=b153d72e9b1d6fd3c4522e49b2f527554&lang=en&src=listed) | EBITDA | -0.95% | 0.00% | 0.24% | -0.24% | 0.63% | No |
| 2025-10-03 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.683 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.683  | 0.73% | 0.00% | 0.97% | 1.45% | 0.69% | No |
| 2025-09-23 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.683 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.683  | 0.24% | -2.84% | -3.07% | -0.71% | -2.75% | Yes |
| 2025-08-13 09:00 | Guidance | — | [First six months 2025: solid results and continued strategy delivery, highlighted by the launch of 313.7 MW Kelmė wind farm, the largest in the Baltics. Full-year 2025 Adjusted EBITDA and Investments guidance reiterated](https://view.news.eu.nasdaq.com/view?id=b2af26ecba6eba6d468dcb4bf74520da7&lang=en&src=listed) | EBITDA | 0.97% | 0.00% | 0.96% | 0.96% | 1.09% | No |
| 2025-05-14 09:00 | Earnings | Unclassified earnings release | [First three months 2025 interim report: strong performance and strategic plan execution marked by the launch of Kelmė wind farm I. Full-year 2025 Adjusted EBITDA and Investments guidance reiterated](https://view.news.eu.nasdaq.com/view?id=be14dc8f7c8f016ce03a963cb8acef3c5&lang=en&src=listed) | EBITDA | 0.00% | 1.18% | 0.95% | -0.95% | -0.28% | No |
| 2025-04-22 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.663 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.663  | -1.47% | 0.75% | 1.74% | 4.98% | -0.14% | Yes |
| 2025-04-08 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.663 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.663  | -2.83% | -0.24% | -1.94% | 3.16% | -4.07% | Yes |
| 2025-04-01 16:15 | Earnings | Unclassified earnings release | [On the tentative award of a Polish capacity mechanism quarterly auction for 2026 to Ignitis Gamyba](https://view.news.eu.nasdaq.com/view?id=b4a790a7976beca1fac09b1c7bb1e1463&lang=en&src=listed) | Open official announcement | 4.17% | -0.24% | -3.29% | -0.47% | -1.14% | Yes |
| 2025-02-26 09:01 | Earnings | Unclassified earnings release | [Integrated Annual Report 2024: continued strategy delivery with strong underlying results. Full-year Adjusted EBITDA guidance beat](https://view.news.eu.nasdaq.com/view?id=b7b30a6a4946d68f666d39ac59e2bd9d2&lang=en&src=listed) | EBITDA | -2.27% | -2.78% | -5.34% | -1.62% | -5.57% | No |
| 2024-11-13 09:00 | Earnings | Unclassified earnings release | [First nine months 2024 interim report: strong performance and continued project delivery. Full-year Adjusted EBITDA guidance increased](https://view.news.eu.nasdaq.com/view?id=b6317df359f513018cedc64985223b92a&lang=en&src=listed) | EBITDA | -0.42% | 0.10% | -0.52% | 2.51% | 0.27% | No |
| 2024-10-04 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.663 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.663  | -1.27% | 0.75% | 0.97% | 3.11% | -0.92% | No |
| 2024-09-24 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.663 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.663  | 0.53% | -2.63% | -1.26% | 1.89% | -1.04% | No |
| 2024-08-14 09:00 | Earnings | In line / unchanged | [First six months 2024 interim report: strategy delivery with three Green Capacities projects reaching COD and 2024 guidance upgrade](https://view.news.eu.nasdaq.com/view?id=b56f238f4011c31c49133e48420b9f89b&lang=en&src=listed) | Open official announcement | -0.65% | 0.77% | 1.20% | 3.50% | 1.48% | Yes |
| 2024-05-15 09:03 | Earnings | Unclassified earnings release | [First three months 2024 interim report: continued Green Capacities Portfolio growth ](https://view.news.eu.nasdaq.com/view?id=b7169e677fdd324d8695918eed1b0ba12&lang=en&src=listed) | Open official announcement | 0.00% | -0.22% | -1.53% | 3.17% | -1.04% | No |
| 2024-04-23 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.643 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.643  | -1.10% | 0.00% | 2.23% | 0.33% | 1.80% | Yes |
| 2024-04-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.643 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.643  | 2.25% | -2.94% | -5.25% | -4.09% | -4.26% | Yes |
| 2024-02-28 09:05 | Earnings | Unclassified earnings release | [Integrated Annual Report 2023: guidance beat, all time high investments and the largest renewable energy projects in the Baltics secured](https://view.news.eu.nasdaq.com/view?id=b7cd799d8817c9769263793387869b498&lang=en&src=listed) | Open official announcement | 1.18% | -1.17% | -0.53% | -1.06% | -0.21% | No |
| 2023-11-21 09:15 | Earnings | In line / unchanged | [First nine months 2023 interim report: all time high investments, start of construction of the largest onshore wind farm in the Baltics, and final investment decision taken for the largest solar portfolio in the Baltics](https://view.news.eu.nasdaq.com/view?id=bc234fdd2382985cff6d1ae3109d382eb&lang=en&src=listed) | Open official announcement | -1.41% | -0.41% | -0.92% | -4.39% | -0.53% | No |
| 2023-10-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.643 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.643  | 0.25% | 0.00% | 0.00% | -2.29% | -0.27% | No |
| 2023-10-04 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.643 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.643  | 0.49% | -2.43% | -2.91% | -3.69% | -2.54% | No |
| 2023-08-22 09:00 | Earnings | In line / unchanged | [First six months 2023 interim report: strong performance and significant offshore wind development progress](https://view.news.eu.nasdaq.com/view?id=bc4bb6c4b781d7ddf944ca6ed15f8c368&lang=en&src=listed) | Open official announcement | 0.50% | -0.74% | -0.74% | 0.99% | -0.98% | No |
| 2023-05-23 09:05 | Guidance | — | [AB “Ignitis grupė” strategy update and Strategic plan 2023-2026 establish even more ambitious Green Generation and decarbonisation targets](https://view.news.eu.nasdaq.com/view?id=b1372b135924ed0b8ac8699cb442f9b4d&lang=en&src=listed) | Open official announcement | 1.70% | -0.72% | -1.43% | -3.34% | -1.43% | Yes |
| 2023-05-23 09:00 | Earnings | In line / unchanged | [First three months 2023 interim report: strong results despite lower power prices ](https://view.news.eu.nasdaq.com/view?id=ba02d4111e49f2529c69842eb70ee7e01&lang=en&src=listed) | Open official announcement | 1.70% | -0.72% | -1.43% | -3.34% | -1.43% | Yes |
| 2023-05-09 09:00 | Guidance | — | [Ignitis Group to present 3M 2023 results, Strategy update and Strategic plan 2023-2026 on 23 May](https://view.news.eu.nasdaq.com/view?id=b98fddaf05e574c325ce991b0e4433633&lang=en&src=listed) | Open official announcement | -0.48% | -0.24% | 0.00% | -0.49% | 1.00% | No |
| 2023-04-26 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.624 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.624  | 0.24% | 0.49% | 0.24% | 0.24% | 0.56% | No |
| 2023-04-13 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.624 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.624  | 1.72% | -2.66% | -0.24% | -0.24% | -0.12% | No |
| 2023-02-28 09:18 | Earnings | Lower profit | [Annual report 2022: strong financial and strategic performance dominated by Green Generation growth ](https://view.news.eu.nasdaq.com/view?id=bc22de83da9b04f39713f1d9f88d2edfd&lang=en&src=listed) | Open official announcement | 2.55% | 1.49% | 2.99% | 1.24% | 2.77% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (5 classified of 16 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lower profit | 1d | 1 | 1.49% | — | 1.49% | 100% | 1.10% | — | 1.10% |
| Lower profit | 5d | 1 | 2.99% | — | 2.99% | 100% | 2.77% | — | 2.77% |
| Lower profit | 21d | 1 | 1.24% | — | 1.24% | 100% | 2.99% | — | 2.99% |
| In line / unchanged | 1d | 4 | -0.27% | 0.504 | -0.56% | 25% | 0.02% | 0.940 | -0.34% |
| In line / unchanged | 5d | 4 | -0.47% | 1.333 | -0.83% | 25% | -0.37% | 1.651 | -0.76% |
| In line / unchanged | 21d | 4 | -0.81% | 13.672 | -1.18% | 50% | 0.34% | 12.247 | 0.11% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![IGN1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/IGN1L_all_frontiers.png?v=1792486191)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.206414 | -0.329730 | M2Sortino | 0.023483 | -0.097384 |
| AdjustedSharpe | 0.263485 | -1.154161 | MSquaredExcess | -0.154606 | -0.345176 |
| AnnualizedReturn_Arithmetic | 0.027126 | -0.094236 | Martin | 0.259626 | -1.700111 |
| AnnualizedReturn_Geometric | 0.022275 | -0.092520 | MaximumDrawdown | 0.165620 | 0.083436 |
| Appraisal | 0.161912 | -1.387410 | Modigliani | 0.000187 | -0.000767 |
| ArithmeticReturn | 0.000108 | -0.000374 | NetSelectivity | -0.109264 | -0.208123 |
| AverageDrawdown | 0.044485 | 0.048326 | Omega | 1.054449 | 0.805154 |
| AverageDrawdownLength | 74.400000 | 63.000000 | OmegaExcessReturn | -0.003127 | -0.109577 |
| AverageRecoveryTime | 38.900000 | 19.500000 | PainIndex | 0.070307 | 0.050002 |
| BernardoLedoit | 1.054449 | 0.805154 | PainRatio | 0.316822 | -1.850328 |
| BetaCoKurtosis | -0.082161 | 0.030921 | Prospect | -0.532723 | -0.787432 |
| BetaCoSkewness | -3.787258 | -21.478044 | Rachev | 1.039140 | 0.922872 |
| Burke | 0.127683 | -1.892262 | Selectivity | 0.016326 | -0.103858 |
| CAPMAlpha | 0.000085 | -0.000417 | Sharpe_Annualized | 0.268574 | -1.247812 |
| CAPMBeta | 0.026014 | 0.047798 | Sharpe_Daily | 0.016919 | -0.078605 |
| CDD | 0.109179 | 0.072903 | Sharpe_ES | 0.006979 | -0.035029 |
| Calmar | 0.134494 | -1.108877 | Sharpe_VaR | 0.011676 | -0.053100 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | -0.033254 | 0.049286 |
| CoSkewness | -0.000001 | -0.000000 | Sortino | 0.024262 | -0.106190 |
| CumulativeReturn | 0.068138 | -0.047383 | SpecificRisk | 0.100831 | 0.074858 |
| DRatio | 0.968757 | 1.567283 | Sterling | 0.083860 | -0.504374 |
| DownCapture | 0.019678 | 0.138513 | SystematicRisk | 0.004568 | 0.007407 |
| DownNumber | 0.399371 | 0.490566 | TotalRisk | 0.100934 | 0.075223 |
| DownPercent | 0.874214 | 0.886792 | TrackingError_Annualized | 0.198573 | 0.165594 |
| DownsideDeviation | 0.004437 | 0.003522 | TrackingError_Daily | 0.012509 | 0.010431 |
| DrawdownDeviation | 0.007873 | 0.007526 | Treynor_Annualized | 0.856261 | -1.935667 |
| ES_Loss | 0.015423 | 0.010675 | Treynor_Daily | 0.003361 | -0.008059 |
| FamaBeta | 0.575188 | 0.487345 | UlcerIndex | 0.085796 | 0.054420 |
| GeometricReturn | 0.000087 | -0.000385 | UpCapture | 0.040918 | 0.022186 |
| Hurst | 0.358896 | 0.362031 | UpNumber | 0.383028 | 0.342466 |
| Information_Annualized | -1.039489 | -1.991189 | UpPercent | 0.162844 | 0.150685 |
| Information_Daily | -0.058371 | -0.117933 | UpsidePotential | 0.469849 | 0.438804 |
| JensenAlpha | 0.016326 | -0.103858 | UpsideRisk | 0.004556 | 0.003192 |
| Kappa | 0.015679 | -0.078562 | VaR_Loss | 0.009219 | 0.007042 |
| Kelly | 2.659124 | -16.522785 | Volatility | 0.006362 | 0.004757 |
| Kurtosis | 8.810035 | 3.998859 | Volatility_Annualized | 0.101001 | 0.075521 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.146862</td><td>-0.000911</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161498</td><td>0.000006</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>IGN1L shares</td><td>0</td><td>27</td><td>+27</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8499.549967</td><td>587.250000</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.466102</td><td>0.008475</td></tr><tr><td>OUT</td><td>62</td><td>63</td><td>+1</td></tr><tr><td>IN</td><td>8</td><td>8</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.074828</td><td>0.004655</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.092991</td><td>0.001835</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 IGN1L shares. The scenario adds 27 shares from Table 3A, resulting in 27 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="IGN1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![IGN1L high-resolution stochastic dominance](figures/stock_profiles/IGN1L_FSD_SSD_TSD.png?v=1792486451)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-pzv1l" data-signal="HOLD">
<summary><strong>PZV1L — Pieno žvaigždės</strong> | HOLD | target 56 shares | priority 13</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>56</td><td>+56</td><td>0.67%</td><td>EUR 1.7950</td><td>0.2034</td><td>35 / 11</td><td>62.14</td><td>Bearish</td><td>Inside bands</td><td>0.302 (Neutral)</td><td>HOLD</td><td>0.000045 (0.058% of portfolio HHI)</td><td>EUR 4,516</td><td>2.2%</td><td>1.2%</td><td>HIGH</td></tr></tbody></table>

![PZV1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/PZV1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 1.7950 | EUR 1.7233 | -3.99% | EUR 1.8322 | +2.07% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![PZV1L complete technical history](figures/technical_analysis/PZV1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![PZV1L return histogram](figures/stock_profiles/PZV1L_histogram.png?v=1792485733)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -30.11% (2025-11-06) | Average gain / average loss | 1.042 | Best 21-day period | 19.23% (ending 2025-12-09) |
| Average underwater drawdown | 7.96% | Upside potential ratio | 1.244 | Worst 21-day period | -22.16% (ending 2025-11-06) |
| Conditional drawdown 95% | 21.37% | Upside capture vs Baltic EW | 107.1% | Best 5-day period | 13.08% (ending 2025-11-13) |
| Ulcer index | 9.17 | Downside capture vs Baltic EW | 66.4% | Best 63-day period | 24.62% (ending 2026-02-13) |
| Longest underwater period | 526 calendar days | Positive trading days | 36.1% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.932% | Best day | 10.09% (2023-08-02) |  |  |
| Daily upside deviation | 1.015% | Worst day | -10.71% (2024-05-14) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.173%); worst: Tuesday (-0.039%) | 0.4325 | 0.5149 | Not detected |
| Calendar month | Best: Dec (0.465% daily); worst: May (-0.347% daily) | 0.0867 | 0.2493 | Not detected |
| Turn of month | First/last three days: 0.110%; other days: 0.047% | 0.7893 | 0.9400 | Not detected |

![PZV1L seasonality, drawdowns and upside periods](figures/stock_profiles/PZV1L_seasonality.png?v=1792486424)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-05-08 | 2025-11-06 | Not recovered | -30.11% | 526 |
| 2 | 2024-02-12 | 2024-05-20 | 2024-12-05 | -18.39% | 297 |
| 3 | 2023-05-09 | 2023-06-28 | 2023-08-02 | -8.20% | 85 |
| 4 | 2025-02-25 | 2025-03-05 | 2025-04-28 | -8.09% | 62 |
| 5 | 2023-08-03 | 2023-08-10 | 2023-12-01 | -7.51% | 120 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-11-06 | 2025-12-09 | 19.23% |
| 2 | 2024-11-28 | 2025-01-07 | 15.86% |
| 3 | 2026-03-27 | 2026-04-29 | 12.75% |
| 4 | 2025-04-02 | 2025-05-08 | 12.05% |
| 5 | 2026-06-11 | 2026-07-16 | 11.91% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (23 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 1 | -0.66% | -2.62% | 3.07% | 0% | 100% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Earnings | 16 | 0.72% | -0.12% | -0.25% | 44% | 31% | 0.8720 | 0.8481 | No adjusted statistical evidence |
| Ex-dividend | 6 | -3.79% | -6.89% | -9.34% | 17% | 33% | 0.0028 | 0.0001 | Different from ordinary periods; price drop may be mechanical |

![PZV1L official announcements and abnormal returns](figures/stock_profiles/PZV1L_company_events.png?v=1792491543)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (23 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-29 21:00 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for the three months of 2026](https://view.news.eu.nasdaq.com/view?id=bda3c7599420f5fd67a7028dc1cdf1113&lang=en&src=listed) | Open official announcement | -1.55% | 3.15% | 1.26% | 6.94% | 0.78% | No |
| 2026-05-21 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.14 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.14  | 0.63% | -0.62% | -2.49% | 2.18% | -2.62% | Yes |
| 2026-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.14 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.14  | 0.88% | -7.27% | -7.56% | -6.40% | -6.52% | No |
| 2026-04-28 20:45 | Ex-dividend | — | [Ex-dividend date and procedure for the payment of Pieno Žvaigždės AB dividends for the year 2025](https://view.news.eu.nasdaq.com/view?id=b8f19491c5dfb05f42eb8452807f39063&lang=en&src=listed) | Open official announcement | 0.88% | 0.00% | 1.16% | -5.22% | 0.93% | Yes |
| 2026-02-27 20:45 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for 2025](https://view.news.eu.nasdaq.com/view?id=bc3c8d2a356fe1e4142de8dc6ee5df352&lang=en&src=listed) | Open official announcement | 0.31% | -1.23% | -1.54% | -4.94% | -0.66% | No |
| 2025-11-28 18:00 | Earnings | Unclassified earnings release | [Nine-month unaudited financial results of AB Pieno Zvaigzdes for 2025](https://view.news.eu.nasdaq.com/view?id=b7a1f0194f97886ffd37a82351d7b23b7&lang=en&src=listed) | Open official announcement | 1.35% | 0.33% | 2.33% | 9.00% | 1.88% | No |
| 2025-09-25 19:00 | Earnings | Unclassified earnings release | [AB "Pieno žvaigždės" Unaudited Financial Results for the First Six Months of 2025](https://view.news.eu.nasdaq.com/view?id=b0c91aca970782257d8f658719077777e&lang=en&src=listed) | Open official announcement | -2.94% | -0.61% | -1.21% | -14.55% | -1.76% | Yes |
| 2025-05-29 21:30 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for the three months of 2025](https://view.news.eu.nasdaq.com/view?id=bddf5bf49b96e39767a2bed7a4733f1c8&lang=en&src=listed) | Open official announcement | -1.47% | -2.69% | -4.78% | -2.99% | -4.49% | Yes |
| 2025-05-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.14 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.14  | 5.68% | -8.06% | -9.14% | -14.52% | -8.91% | No |
| 2025-05-05 20:00 | Ex-dividend | — | [Correction: Ex-dividend date and procedure for the payment of Pieno Žvaigždės AB dividends for the year 2024](https://view.news.eu.nasdaq.com/view?id=ba8b91f09e1d6cad3508f0a453fa96eb2&lang=en&src=listed) | Open official announcement | 2.32% | 3.12% | -3.68% | -10.76% | -5.30% | Yes |
| 2025-04-30 19:00 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for the three months of 2025](https://view.news.eu.nasdaq.com/view?id=ba89c61d9cecbd0092e27991215520f20&lang=en&src=listed) | Open official announcement | 2.32% | 3.12% | -3.68% | -10.76% | -5.30% | Yes |
| 2025-02-28 18:00 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for 2024](https://view.news.eu.nasdaq.com/view?id=b19185cf88d17f2efc2e680a70ae5958f&lang=en&src=listed) | Open official announcement | 0.58% | -5.81% | -4.65% | -4.07% | -4.65% | No |
| 2024-11-30 16:00 | Earnings | Unclassified earnings release | [Nine-month unaudited financial results of AB Pieno zvaigzdes for 2024](https://view.news.eu.nasdaq.com/view?id=bbc53a32d833c6084aed9a82f8409918b&lang=en&src=listed) | Open official announcement | 1.39% | 0.00% | 1.37% | 15.07% | -0.52% | No |
| 2024-09-19 19:00 | Earnings | Unclassified earnings release | [AB "Pieno žvaigždės" Unaudited Financial Results for the First Six Months of 2024](https://view.news.eu.nasdaq.com/view?id=b5012d284a5945cbc94f2150e29f8f2b2&lang=en&src=listed) | Open official announcement | 1.43% | -0.70% | -0.70% | -0.70% | -0.10% | No |
| 2024-05-31 17:00 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for the three months of 2024](https://view.news.eu.nasdaq.com/view?id=b9d4d15db84d9a50d17c3d90136dacadd&lang=en&src=listed) | Open official announcement | 1.61% | -0.79% | 0.79% | 2.38% | 0.82% | No |
| 2024-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.14 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.14  | -2.78% | -10.71% | -12.86% | -10.00% | -11.78% | No |
| 2024-05-09 20:00 | Ex-dividend | — | [Ex-dividend date and procedure for the payment of Pieno Žvaigždės AB dividends for the year 2023](https://view.news.eu.nasdaq.com/view?id=bb8a048a05aa6ea539459b561ea8bd5f8&lang=en&src=listed) | Open official announcement | -3.45% | 0.00% | -11.43% | -9.29% | -9.78% | No |
| 2024-02-29 18:15 | Earnings | Loss | [Unaudited financial results of AB Pieno žvaigždės for 2023](https://view.news.eu.nasdaq.com/view?id=ba2507a45c44e1cc022a59edceebfba91&lang=en&src=listed) | Open official announcement | 2.41% | -0.67% | -6.04% | -6.04% | -5.52% | Yes |
| 2023-10-18 17:00 | Earnings | Unclassified earnings release | [Nine-month unaudited financial results of AB Pieno zvaigzdes for 2023](https://view.news.eu.nasdaq.com/view?id=bfa7594f2c6869d525dd63c88a1848bb8&lang=en&src=listed) | Open official announcement | 0.00% | 5.93% | 4.24% | 5.51% | 4.83% | No |
| 2023-08-01 17:00 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for the six months of 2023](https://view.news.eu.nasdaq.com/view?id=b48e1e9a1a9289dab1423d7af85a3b7ae&lang=en&src=listed) | Open official announcement | 0.00% | 10.09% | 7.02% | 6.14% | 7.14% | Yes |
| 2023-05-05 17:00 | Earnings | Unclassified earnings release | [Unaudited financial results of AB Pieno žvaigždės for the three months of 2023](https://view.news.eu.nasdaq.com/view?id=bb069acf3c9df6121e57b055bacd5e368&lang=en&src=listed) | Open official announcement | -1.28% | 3.90% | 4.76% | -1.73% | 5.44% | No |
| 2023-03-01 16:41 | Earnings | Loss | [Correction: Unaudited financial results of AB Pieno žvaigždės for 2022](https://view.news.eu.nasdaq.com/view?id=b002277d8782b40eb6bea6eb02e706e40&lang=en&src=listed) | Open official announcement | -3.28% | -0.42% | 0.00% | -3.39% | 0.38% | No |
| 2023-02-28 18:00 | Earnings | Loss | [Unaudited financial results of AB Pieno žvaigždės for 2022](https://view.news.eu.nasdaq.com/view?id=b9ca4b3a55215abe89615c679a3e7d910&lang=en&src=listed) | Open official announcement | -1.67% | 0.00% | 0.00% | -3.81% | -0.22% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (3 classified of 16 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Loss | 1d | 3 | -0.36% | 0.115 | -0.42% | 0% | -0.53% | 0.238 | -0.40% |
| Loss | 5d | 3 | -2.01% | 12.162 | 0.00% | 0% | -1.79% | 10.532 | -0.22% |
| Loss | 21d | 3 | -4.41% | 2.027 | -3.81% | 0% | -2.60% | 2.474 | -2.06% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![PZV1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/PZV1L_all_frontiers.png?v=1792486200)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.020233 | -0.226031 | M2Sortino | 0.206232 | 0.010702 |
| AdjustedSharpe | 0.494959 | 0.156930 | MSquaredExcess | -0.052380 | -0.184990 |
| AnnualizedReturn_Arithmetic | 0.214083 | 0.032358 | Martin | 2.575798 | 0.233270 |
| AnnualizedReturn_Geometric | 0.208457 | 0.011178 | MaximumDrawdown | 0.212625 | 0.120349 |
| Appraisal | 0.893618 | 0.175202 | Modigliani | 0.000670 | 0.000096 |
| ArithmeticReturn | 0.000850 | 0.000128 | NetSelectivity | -0.081640 | -0.306835 |
| AverageDrawdown | 0.037616 | 0.038908 | Omega | 1.241052 | 1.037313 |
| AverageDrawdownLength | 18.810811 | 17.714286 | OmegaExcessReturn | 0.156533 | -0.029300 |
| AverageRecoveryTime | 9.054054 | 7.142857 | PainIndex | 0.055102 | 0.035411 |
| BernardoLedoit | 1.241052 | 1.037313 | PainRatio | 3.783116 | 0.315666 |
| BetaCoKurtosis | 0.055288 | -0.060055 | Prospect | -0.392082 | -0.499354 |
| BetaCoSkewness | -0.465367 | -8.424866 | Rachev | 1.173382 | 1.208888 |
| Burke | 0.701161 | 0.096201 | Selectivity | 0.198809 | 0.036142 |
| CAPMAlpha | 0.000812 | 0.000222 | Sharpe_Annualized | 0.961100 | 0.155753 |
| CAPMBeta | 0.042185 | -0.105240 | Sharpe_Daily | 0.060544 | 0.009812 |
| CDD | 0.096713 | 0.088394 | Sharpe_ES | 0.027378 | 0.005290 |
| Calmar | 0.980395 | 0.092880 | Sharpe_VaR | 0.050639 | 0.010280 |
| CoKurtosis | 0.000000 | -0.000000 | Skewness | 0.556555 | 1.109540 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | 0.093674 | 0.015365 |
| CumulativeReturn | 0.762141 | 0.005573 | SpecificRisk | 0.222477 | 0.206287 |
| DRatio | 0.722207 | 1.293210 | Sterling | 0.666794 | 0.050729 |
| DownCapture | -0.086529 | -0.269291 | SystematicRisk | 0.007408 | -0.016308 |
| DownNumber | 0.314465 | 0.358491 | TotalRisk | 0.222600 | 0.206930 |
| DownPercent | 0.817610 | 0.943396 | TrackingError_Annualized | 0.279015 | 0.268754 |
| DownsideDeviation | 0.009069 | 0.008357 | TrackingError_Daily | 0.017576 | 0.016930 |
| DrawdownDeviation | 0.014074 | 0.013245 | Treynor_Annualized | 4.941486 | -0.106215 |
| ES_Loss | 0.031030 | 0.024274 | Treynor_Daily | 0.017818 | -0.000419 |
| FamaBeta | 1.268520 | 1.340646 | UlcerIndex | 0.080929 | 0.047919 |
| GeometricReturn | 0.000752 | 0.000044 | UpCapture | 0.131042 | -0.183091 |
| Hurst | 0.406966 | 0.517001 | UpNumber | 0.362385 | 0.315068 |
| Information_Annualized | -0.072514 | -0.841034 | UpPercent | 0.233945 | 0.219178 |
| Information_Daily | -0.003752 | -0.047308 | UpsidePotential | 0.482278 | 0.427140 |
| JensenAlpha | 0.198809 | 0.036142 | UpsideRisk | 0.010729 | 0.010004 |
| Kappa | 0.054267 | 0.008526 | VaR_Loss | 0.016776 | 0.012491 |
| Kelly | 4.314746 | 0.749711 | Volatility | 0.014032 | 0.013087 |
| Kurtosis | 17.917831 | 24.019710 | Volatility_Annualized | 0.222748 | 0.207751 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.155041</td><td>0.007267</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.158891</td><td>-0.002601</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>PZV1L shares</td><td>0</td><td>56</td><td>+56</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8012.819964</td><td>100.519998</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.483051</td><td>0.025424</td></tr><tr><td>OUT</td><td>62</td><td>64</td><td>+2</td></tr><tr><td>IN</td><td>8</td><td>7</td><td>-1</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.072849</td><td>0.002677</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.092878</td><td>0.001723</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 PZV1L shares. The scenario adds 56 shares from Table 3A, resulting in 56 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="PZV1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![PZV1L high-resolution stochastic dominance](figures/stock_profiles/PZV1L_FSD_SSD_TSD.png?v=1792486461)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-roe1l" data-signal="HOLD">
<summary><strong>ROE1L — Artea Bankas</strong> | HOLD | target 541 shares | priority 14</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>416</td><td>541</td><td>+125</td><td>3.17%</td><td>EUR 0.8800</td><td>0.1525</td><td>37 / 19</td><td>42.30</td><td>Bearish</td><td>Inside bands</td><td>0.095 (Oversold)</td><td>HOLD</td><td>0.001007 (1.299% of portfolio HHI)</td><td>EUR 186,592</td><td>0.1%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![ROE1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/ROE1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 0.8800 | EUR 0.8712 | -1.00% | EUR 0.9137 | +3.83% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![ROE1L complete technical history](figures/technical_analysis/ROE1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![ROE1L return histogram](figures/stock_profiles/ROE1L_histogram.png?v=1792485733)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **calendar-month**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -20.90% (2025-09-17) | Average gain / average loss | 1.231 | Best 21-day period | 17.11% (ending 2023-11-30) |
| Average underwater drawdown | 9.73% | Upside potential ratio | 1.182 | Worst 21-day period | -11.16% (ending 2025-04-30) |
| Conditional drawdown 95% | 19.64% | Upside capture vs Baltic EW | 78.1% | Best 5-day period | 9.79% (ending 2026-03-13) |
| Ulcer index | 10.88 | Downside capture vs Baltic EW | 58.1% | Best 63-day period | 24.55% (ending 2025-01-08) |
| Longest underwater period | 609 calendar days | Positive trading days | 40.4% | Repeated calendar pattern | Nov: 100% positive across 3 years |
| Daily downside deviation | 0.654% | Best day | 11.07% (2026-03-13) |  |  |
| Daily upside deviation | 0.816% | Worst day | -5.89% (2025-04-11) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Tuesday (0.081%); worst: Monday (-0.061%) | 0.6438 | 0.7000 | Not detected |
| Calendar month | Best: Nov (0.532% daily); worst: Apr (-0.232% daily) | 0.0028 | 0.0217 | Detected |
| Turn of month | First/last three days: 0.069%; other days: 0.022% | 0.4825 | 0.8443 | Not detected |

![ROE1L seasonality, drawdowns and upside periods](figures/stock_profiles/ROE1L_seasonality.png?v=1792486398)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-02-14 | 2025-09-17 | Not recovered | -20.90% | 609 |
| 2 | 2023-02-09 | 2023-10-26 | 2024-10-01 | -19.07% | 600 |
| 3 | 2025-01-16 | 2025-01-27 | 2025-01-31 | -3.60% | 15 |
| 4 | 2023-01-03 | 2023-01-05 | 2023-01-12 | -1.68% | 9 |
| 5 | 2024-10-24 | 2024-10-29 | 2024-10-31 | -1.34% | 7 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-10-27 | 2023-11-30 | 17.11% |
| 2 | 2025-10-29 | 2025-12-01 | 15.62% |
| 3 | 2024-09-25 | 2024-10-24 | 14.80% |
| 4 | 2026-03-09 | 2026-04-10 | 11.37% |
| 5 | 2024-12-27 | 2025-01-30 | 10.80% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (30 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 6 | 0.89% | 0.03% | 1.07% | 17% | 33% | 0.6364 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 4 | -0.03% | -0.64% | -0.54% | 50% | 25% | 0.9122 | 1.0000 | No adjusted statistical evidence |
| Earnings | 8 | -0.30% | -0.37% | 0.44% | 38% | 12% | 0.8482 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -2.20% | -3.55% | -5.57% | 12% | 50% | 0.0028 | 0.0022 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 4 | -0.33% | -0.39% | 0.43% | 25% | 0% | 0.9354 | 1.0000 | No adjusted statistical evidence |

![ROE1L official announcements and abnormal returns](figures/stock_profiles/ROE1L_company_events.png?v=1792491532)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (30 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-27 17:30 | Earnings | Unclassified earnings release | [AB Artea Bankas Group financial statement for H1 2026, reviewed by the audit company](https://view.news.eu.nasdaq.com/view?id=be92b0762ebdca03e7dd08a981914752d&lang=en&src=listed) | Open official announcement | -0.56% | 0.11% | -1.01% | 1.45% | -0.80% | No |
| 2026-07-29 17:00 | Earnings | Higher profit | [AB Artea Bank Group's Financial Results for the Six Months of 2026](https://view.news.eu.nasdaq.com/view?id=b42761a2138e48ce9723c550389391033&lang=en&src=listed) | Open official announcement | -0.23% | -0.91% | 0.57% | 1.94% | 0.12% | No |
| 2026-04-27 16:30 | Earnings | Higher profit | [AB Artea Bank Group's Financial Results for the Three Months of 2026](https://view.news.eu.nasdaq.com/view?id=b79d89e8f25b55baa426e2b9c1873dff9&lang=en&src=listed) | Open official announcement | -0.98% | -0.33% | 0.44% | -1.65% | 0.24% | No |
| 2026-04-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR nan per share](https://nasdaqbaltic.com/statistics/en/dividends) | Open official announcement | -1.09% | 0.11% | 0.44% | -1.55% | 0.54% | No |
| 2026-04-22 09:00 | Guidance | — | [Moody's upgraded AB Artea bankas ratings and its outlook](https://view.news.eu.nasdaq.com/view?id=b284d85c700c94304be6568a04a2dd2a3&lang=en&src=listed) | Open official announcement | -0.44% | -0.33% | -0.66% | -0.98% | -0.53% | No |
| 2026-04-21 16:00 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=bf6665f11f3aa7a636576a9ac779a0e56&lang=en&src=listed) | Open official announcement | 0.33% | 0.00% | -1.09% | -0.88% | -1.53% | Yes |
| 2026-04-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.047 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.047  | 2.27% | -3.70% | -3.17% | -5.29% | -3.79% | Yes |
| 2026-04-07 09:30 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=bd78688e222de6e165ecc695a9db5a5d0&lang=en&src=listed) | Open official announcement | 2.19% | 0.64% | -2.36% | -2.36% | -4.52% | Yes |
| 2025-09-16 09:45 | Guidance | — | [Moody's affirms Artea Bank ratings and its stable outlook](https://view.news.eu.nasdaq.com/view?id=bb29bcfc891c25f6db8fb73d29491727b&lang=en&src=listed) | Open official announcement | -0.25% | -0.88% | 0.00% | 2.88% | 0.45% | No |
| 2025-08-27 16:30 | Earnings | Unclassified earnings release | [AB Artea Bankas Group financial statement for H1 2025, reviewed by the audit company](https://view.news.eu.nasdaq.com/view?id=b221b55b7c3dfd8809ae595109a4ca759&lang=en&src=listed) | Open official announcement | -1.11% | 0.25% | -0.12% | -0.62% | -0.49% | No |
| 2025-04-25 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.061 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.061  | -0.67% | 0.90% | -0.68% | -1.46% | -2.80% | No |
| 2025-04-22 16:00 | Dividend announcement | — | [Correction: Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=b55eab317ab34dfef424749ca5643e5f9&lang=en&src=listed) | Open official announcement | -5.03% | 3.06% | 0.47% | 3.18% | -1.59% | No |
| 2025-04-17 09:00 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=b8a7cea9e5e55c5c728c54f9a95cdb430&lang=en&src=listed) | Open official announcement | -8.53% | -2.30% | 1.15% | 0.92% | -0.73% | Yes |
| 2025-04-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.061 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.061  | -2.06% | -5.89% | -8.53% | -7.47% | -9.29% | No |
| 2025-04-02 16:30 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=b47be9a5496bafe8841d1729798c080d1&lang=en&src=listed) | Open official announcement | 4.68% | -1.42% | -7.52% | -10.26% | -4.07% | Yes |
| 2025-03-17 09:00 | Earnings | Unclassified earnings release | [The Independent Auditor's Report (Annex 1) to the Ordinary General Meeting of Shareholders of Šiaulių bankas to be held on 31 March 2025](https://view.news.eu.nasdaq.com/view?id=bbd8c2fa2eccd62c0008237da033ace6b&lang=en&src=listed) | Open official announcement | 1.08% | -1.06% | 0.00% | -4.89% | 0.75% | No |
| 2024-10-22 16:00 | Earnings | Unclassified earnings release | [Šiaulių Bankas will announce Q3 2024 Financial Results ](https://view.news.eu.nasdaq.com/view?id=b7e8ee5e35f56ad1b26bf66619ab3c4a7&lang=en&src=listed) | Open official announcement | 0.75% | 0.86% | 0.12% | 2.72% | -0.15% | No |
| 2024-09-30 16:00 | Dividend announcement | — | [Šiaulių Bankas AB approve new Dividend Policy ](https://view.news.eu.nasdaq.com/view?id=b281afbb056135f75e6c51a29e07f3323&lang=en&src=listed) | Open official announcement | 0.84% | 7.35% | 7.21% | 12.48% | 6.77% | No |
| 2024-08-28 09:30 | Earnings | Unclassified earnings release | [Šiaulių Bankas AB Group financial statement for H1 2024, reviewed by the audit company](https://view.news.eu.nasdaq.com/view?id=b52a9b0dad7d9061bd2504b363b3e09dd&lang=en&src=listed) | Open official announcement | -0.97% | 0.56% | -0.84% | 0.98% | -1.43% | No |
| 2024-05-22 09:30 | Guidance | — | [Moody's Ratings affirms Šiaulių Bankas' ratings and its stable outlook](https://view.news.eu.nasdaq.com/view?id=b5711b5b6d1c5ad8dd04fe421797c6674&lang=en&src=listed) | Open official announcement | -0.71% | 0.00% | -0.14% | -0.86% | -0.02% | No |
| 2024-04-26 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0485 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0485  | 0.30% | 0.30% | 1.20% | 3.74% | 0.92% | Yes |
| 2024-04-18 09:00 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=bea86fd4f28b66b0652092a877e5fc6a1&lang=en&src=listed) | Open official announcement | -4.99% | 0.15% | 0.30% | 4.20% | -0.12% | No |
| 2024-04-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0485 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0485  | -0.14% | -3.85% | -4.99% | -0.28% | -4.64% | No |
| 2024-04-04 16:00 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=b273474eb8c1d9bd398258cc32affbcf6&lang=en&src=listed) | Open official announcement | -0.28% | 0.00% | -0.14% | -0.57% | -0.28% | No |
| 2024-01-15 16:05 | Guidance | — | [Information on Šiaulių Bankas Strategy Update 2024 - 2029](https://view.news.eu.nasdaq.com/view?id=bdfa4c89d64d6faffebfebed600e458dd&lang=en&src=listed) | Open official announcement | 1.01% | -0.43% | -2.13% | -0.71% | -1.47% | No |
| 2023-08-30 09:50 | Earnings | Unclassified earnings release | [Financial statements of Šiaulių Bankas Group for H1 2023 reviewed by the auditors](https://view.news.eu.nasdaq.com/view?id=bc47fe386b4d9629edc03cab3928afda3&lang=en&src=listed) | Open official announcement | 1.56% | -0.15% | -1.38% | -3.69% | -1.19% | Yes |
| 2023-04-26 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0265 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0265  | -3.11% | -0.76% | -1.53% | -4.89% | -1.21% | No |
| 2023-04-18 16:05 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=b56e222337a1ba7295d208c15fda325c3&lang=en&src=listed) | Open official announcement | -0.59% | -0.74% | -3.11% | -7.40% | -2.64% | No |
| 2023-04-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0265 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0265  | 1.33% | -1.46% | -2.92% | -8.32% | -2.51% | Yes |
| 2023-04-03 16:00 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=bb23de851f090d628788339d81f96864c&lang=en&src=listed) | Open official announcement | -1.02% | -0.73% | 0.73% | -6.02% | 0.73% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (2 classified of 8 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 2 | -0.62% | 0.168 | -0.62% | 0% | -0.61% | 0.070 | -0.61% |
| Higher profit | 5d | 2 | 0.51% | 0.008 | 0.51% | 100% | 0.18% | 0.007 | 0.18% |
| Higher profit | 21d | 2 | 0.14% | 6.444 | 0.14% | 50% | 0.40% | 0.903 | 0.40% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![ROE1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/ROE1L_all_frontiers.png?v=1792486193)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.115722 | -0.378050 | M2Sortino | 0.114315 | -0.139778 |
| AdjustedSharpe | 0.560868 | 0.111426 | MSquaredExcess | -0.092393 | -0.277010 |
| AnnualizedReturn_Arithmetic | 0.121675 | -0.131225 | Martin | 1.405464 | -2.227181 |
| AnnualizedReturn_Geometric | 0.112967 | -0.140841 | MaximumDrawdown | 0.195697 | 0.111458 |
| Appraisal | 0.574790 | -0.623341 | Modigliani | 0.000492 | -0.000390 |
| ArithmeticReturn | 0.000483 | -0.000521 | NetSelectivity | -0.111354 | -0.457484 |
| AverageDrawdown | 0.026332 | 0.060998 | Omega | 1.170781 | 0.837003 |
| AverageDrawdownLength | 30.000000 | 60.500000 | OmegaExcessReturn | 0.076092 | -0.176454 |
| AverageRecoveryTime | 16.541667 | 47.500000 | PainIndex | 0.060631 | 0.053575 |
| BernardoLedoit | 1.170781 | 0.837003 | PainRatio | 1.863187 | -2.628856 |
| BetaCoKurtosis | -0.115281 | -0.025470 | Prospect | -0.473745 | -0.613965 |
| BetaCoSkewness | -3.665609 | -9.333290 | Rachev | 1.372678 | 1.101771 |
| Burke | 0.446368 | -1.194529 | Selectivity | 0.098738 | -0.128329 |
| CAPMAlpha | 0.000428 | -0.000474 | Sharpe_Annualized | 0.706419 | -0.634381 |
| CAPMBeta | 0.062219 | -0.052750 | Sharpe_Daily | 0.044500 | -0.039962 |
| CDD | 0.088512 | 0.096320 | Sharpe_ES | 0.022170 | -0.022920 |
| Calmar | 0.577255 | -1.263623 | Sharpe_VaR | 0.041965 | -0.056317 |
| CoKurtosis | -0.000000 | -0.000000 | Skewness | 1.895772 | 4.249864 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | 0.074968 | -0.070824 |
| CumulativeReturn | 0.377457 | -0.073092 | SpecificRisk | 0.171781 | 0.205872 |
| DRatio | 0.967636 | 1.703139 | Sterling | 0.382037 | -0.666047 |
| DownCapture | 0.019880 | 0.008580 | SystematicRisk | 0.010925 | -0.008174 |
| DownNumber | 0.487421 | 0.566038 | TotalRisk | 0.172128 | 0.206034 |
| DownPercent | 0.779874 | 0.830189 | TrackingError_Annualized | 0.238043 | 0.263318 |
| DownsideDeviation | 0.006441 | 0.007352 | TrackingError_Daily | 0.014995 | 0.016587 |
| DrawdownDeviation | 0.009503 | 0.009974 | Treynor_Annualized | 1.815646 | 2.670002 |
| ES_Loss | 0.021779 | 0.022720 | Treynor_Daily | 0.006828 | 0.011416 |
| FamaBeta | 0.980897 | 1.334866 | UlcerIndex | 0.080377 | 0.063237 |
| GeometricReturn | 0.000425 | -0.000602 | UpCapture | 0.129274 | -0.114960 |
| Hurst | 0.412721 | 0.527537 | UpNumber | 0.428899 | 0.424658 |
| Information_Annualized | -0.486139 | -1.435718 | UpPercent | 0.208716 | 0.191781 |
| Information_Daily | -0.026193 | -0.087249 | UpsidePotential | 0.513939 | 0.363688 |
| JensenAlpha | 0.098738 | -0.128329 | UpsideRisk | 0.008736 | 0.010708 |
| Kappa | 0.045908 | -0.041295 | VaR_Loss | 0.011506 | 0.009247 |
| Kelly | 4.101313 | -3.066781 | Volatility | 0.010850 | 0.013031 |
| Kurtosis | 23.643745 | 46.314315 | Volatility_Annualized | 0.172242 | 0.206856 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.152716</td><td>0.004942</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.162213</td><td>0.000721</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>ROE1L shares</td><td>416</td><td>541</td><td>+125</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8022.299966</td><td>109.999999</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.440678</td><td>-0.016949</td></tr><tr><td>OUT</td><td>62</td><td>62</td><td>+0</td></tr><tr><td>IN</td><td>8</td><td>10</td><td>+2</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.070363</td><td>0.000191</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.091677</td><td>0.000522</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 416 ROE1L shares. The scenario adds 125 shares from Table 3A, resulting in 541 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="ROE1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![ROE1L high-resolution stochastic dominance](figures/stock_profiles/ROE1L_FSD_SSD_TSD.png?v=1792486463)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tal1t" data-signal="HOLD">
<summary><strong>TAL1T — Tallink Grupp</strong> | HOLD | target 1116 shares | priority 15</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>700</td><td>1116</td><td>+416</td><td>4.81%</td><td>EUR 0.6460</td><td>0.0593</td><td>26 / 19</td><td>60.60</td><td>Bearish</td><td>Inside bands</td><td>0.276 (Neutral)</td><td>HOLD</td><td>0.002311 (2.980% of portfolio HHI)</td><td>EUR 77,090</td><td>0.3%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![TAL1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TAL1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 0.6460 | EUR 0.6373 | -1.34% | EUR 0.6508 | +0.74% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![TAL1T complete technical history](figures/technical_analysis/TAL1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TAL1T return histogram](figures/stock_profiles/TAL1T_histogram.png?v=1792485734)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -24.80% (2025-11-24) | Average gain / average loss | 1.212 | Best 21-day period | 17.29% (ending 2023-08-21) |
| Average underwater drawdown | 12.96% | Upside potential ratio | 1.134 | Worst 21-day period | -17.67% (ending 2024-07-02) |
| Conditional drawdown 95% | 23.62% | Upside capture vs Baltic EW | 66.0% | Best 5-day period | 8.16% (ending 2023-07-27) |
| Ulcer index | 14.75 | Downside capture vs Baltic EW | 48.8% | Best 63-day period | 27.08% (ending 2023-09-08) |
| Longest underwater period | 861 calendar days | Positive trading days | 39.4% | Repeated calendar pattern | Feb: 100% positive across 4 years |
| Daily downside deviation | 0.686% | Best day | 5.37% (2024-02-22) |  |  |
| Daily upside deviation | 0.692% | Worst day | -8.83% (2024-06-19) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.095%); worst: Monday (-0.082%) | 0.2869 | 0.4399 | Not detected |
| Calendar month | Best: Feb (0.211% daily); worst: Jun (-0.269% daily) | 0.6869 | 0.7899 | Not detected |
| Turn of month | First/last three days: 0.100%; other days: 0.009% | 0.3365 | 0.8443 | Not detected |

![TAL1T seasonality, drawdowns and upside periods](figures/stock_profiles/TAL1T_seasonality.png?v=1792486388)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2024-06-07 | 2025-11-24 | Not recovered | -24.80% | 861 |
| 2 | 2023-09-07 | 2023-10-17 | 2024-04-09 | -11.81% | 215 |
| 3 | 2023-03-07 | 2023-03-13 | 2023-06-20 | -4.81% | 105 |
| 4 | 2023-08-21 | 2023-08-24 | 2023-09-07 | -3.48% | 17 |
| 5 | 2024-04-11 | 2024-05-20 | 2024-05-31 | -3.37% | 50 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-07-20 | 2023-08-21 | 17.29% |
| 2 | 2024-12-27 | 2025-01-30 | 11.65% |
| 3 | 2023-10-17 | 2023-11-17 | 9.29% |
| 4 | 2024-09-23 | 2024-10-22 | 9.17% |
| 5 | 2023-02-02 | 2023-03-07 | 8.99% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (38 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.40% | 0.63% | -0.99% | 25% | 0% | 1.0000 | 0.8481 | No adjusted statistical evidence |
| Earnings | 27 | -0.01% | -0.14% | 0.85% | 41% | 33% | 0.6193 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 7 | -3.05% | -6.74% | -8.32% | 0% | 86% | 0.0000 | 0.0000 | Different from ordinary periods; price drop may be mechanical |

![TAL1T official announcements and abnormal returns](figures/stock_profiles/TAL1T_company_events.png?v=1792491523)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (38 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-23 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q2 2026](https://view.news.eu.nasdaq.com/view?id=b810aadb2a6fa5c308db2c732663f163d&lang=en&src=listed) | Open official announcement | -0.16% | -0.16% | -0.16% | 1.64% | -0.17% | No |
| 2026-07-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for June and the Second Quarter of 2026](https://view.news.eu.nasdaq.com/view?id=bd34c3946e1d448133fa85e5cc70b7720&lang=en&src=listed) | Open official announcement | 0.16% | -0.16% | -0.65% | 0.97% | -1.69% | No |
| 2026-07-01 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -0.81% | 0.33% | 0.16% | -0.65% | -0.42% | No |
| 2026-06-17 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | 0.00% | -5.50% | -6.11% | -6.56% | -5.35% | Yes |
| 2026-06-12 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallink Grupp ](https://view.news.eu.nasdaq.com/view?id=bbd5fd5003b998bb0ce4da7a2c5c5f4ec&lang=en&src=listed) | Open official announcement | 0.77% | 0.15% | -5.96% | -6.57% | -5.02% | Yes |
| 2026-04-23 09:00 | Earnings | Higher profit | [AS-i Tallink Grupp 2026. majandusaasta auditeerimata konsolideeritud I kv tulemuste vahearuanne](https://view.news.eu.nasdaq.com/view?id=bbfa8c39196898346b9433e088d58bc59&lang=en&src=listed) | Open official announcement | -0.63% | 0.48% | 3.02% | 2.38% | 3.84% | No |
| 2026-04-14 09:00 | Earnings | Lower profit | [AS Tallink Grupp Audited Annual Report for the Financial Year 2025](https://view.news.eu.nasdaq.com/view?id=b95719f5e702602be3809d7b9a43b6d1a&lang=en&src=listed) | Open official announcement | 1.96% | 0.64% | 0.48% | 4.01% | 0.31% | No |
| 2026-04-06 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for March and the First Quarter of 2026](https://view.news.eu.nasdaq.com/view?id=bdc9367ae37cb63180e904e380783b03e&lang=en&src=listed) | Open official announcement | -0.49% | 0.33% | 2.13% | 6.73% | 0.44% | Yes |
| 2026-02-19 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q4 and 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b7f20e74fd862485e23b933e9a05263fb&lang=en&src=listed) | Open official announcement | 5.82% | -0.79% | -3.14% | -4.09% | -2.24% | Yes |
| 2026-01-05 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for December and the Fourth Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=bbc67dbc633b570c22325435f47cf72f4&lang=en&src=listed) | Open official announcement | 0.34% | 0.17% | 1.88% | 2.74% | 0.42% | No |
| 2025-11-25 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -2.41% | 0.53% | 0.53% | 2.65% | -0.13% | No |
| 2025-11-13 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -0.33% | -3.17% | -5.33% | -3.00% | -4.94% | Yes |
| 2025-11-10 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallink Grupp ](https://view.news.eu.nasdaq.com/view?id=b98b50c5921af80ef8ad9e0d84cc37db2&lang=en&src=listed) | Open official announcement | -1.15% | 0.17% | -5.17% | -3.67% | -5.16% | Yes |
| 2025-10-23 16:30 | Earnings | Unclassified earnings release | [Correction: AS Tallink Grupp Unaudited Consolidated Interim Report for the Q3 2025](https://view.news.eu.nasdaq.com/view?id=b0b44d930e03f99fc4038db808bca56de&lang=en&src=listed) | Open official announcement | 0.17% | -0.17% | -1.84% | -4.84% | -1.70% | Yes |
| 2025-10-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for September and the Third Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b7e9c8045dd261bdecb9bce6461c16162&lang=en&src=listed) | Open official announcement | -0.17% | 0.00% | 0.67% | 1.17% | 0.36% | No |
| 2025-07-24 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q2 2025](https://view.news.eu.nasdaq.com/view?id=b7800d40a00468096638dfac917bf6186&lang=en&src=listed) | Open official announcement | -1.13% | 0.00% | -1.46% | -0.65% | -1.55% | No |
| 2025-07-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for June and the Second Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b5f2d839432486cba1d713b19f7f84935&lang=en&src=listed) | Open official announcement | -0.16% | 0.00% | -0.32% | -1.13% | -0.93% | No |
| 2025-07-02 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | 0.32% | 0.48% | -0.16% | -1.45% | -0.05% | No |
| 2025-06-18 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -0.76% | -4.87% | -5.48% | -5.48% | -5.53% | Yes |
| 2025-04-24 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q1 2025](https://view.news.eu.nasdaq.com/view?id=be2094245113083aff4883b80f45ef684&lang=en&src=listed) | Open official announcement | -3.92% | -0.33% | 2.12% | 6.36% | -0.00% | No |
| 2025-04-16 16:30 | Earnings | Unclassified earnings release | [AS Tallink Grupp Audited Annual Report for the Financial Year 2024](https://view.news.eu.nasdaq.com/view?id=bc2f19b7dc4b9743de1b697269b5c1b4b&lang=en&src=listed) | Open official announcement | 4.78% | -0.31% | -3.93% | 2.52% | -5.27% | Yes |
| 2025-04-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for March and the First Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b3804420d07f31491a6435605987479c3&lang=en&src=listed) | Open official announcement | 0.31% | -1.09% | -2.97% | -2.19% | -1.18% | No |
| 2025-02-20 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q4 and 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=bf2e57d6894634da8edadc4bfdd454bdc&lang=en&src=listed) | Open official announcement | 6.19% | 0.00% | -1.94% | -5.38% | -2.09% | Yes |
| 2025-01-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for December and the Fourth Quarter of 2024](https://view.news.eu.nasdaq.com/view?id=bf0ca12b705bf7ed63bcc923ff5ba3398&lang=en&src=listed) | Open official announcement | 2.60% | 1.86% | 2.36% | 7.77% | 0.80% | No |
| 2024-10-24 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report Q3 2024](https://view.news.eu.nasdaq.com/view?id=b76b7368699b4240251aa0a4e7789d7f0&lang=en&src=listed) | Open official announcement | -1.76% | -0.16% | -2.12% | -6.04% | -1.99% | Yes |
| 2024-07-25 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report Q2 2024](https://view.news.eu.nasdaq.com/view?id=b4e690d5d91c719bad60092852357f019&lang=en&src=listed) | Open official announcement | -2.65% | -0.51% | 4.08% | 0.85% | 4.16% | Yes |
| 2024-07-03 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | -5.38% | 0.98% | 3.25% | -1.79% | 3.13% | No |
| 2024-06-19 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | -6.65% | -8.83% | -7.41% | -13.96% | -6.94% | No |
| 2024-06-12 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallink Grupp ](https://view.news.eu.nasdaq.com/view?id=b57d95610e8103e9b1b006511cd7925f3&lang=en&src=listed) | Open official announcement | 0.13% | -0.13% | -14.78% | -16.64% | -14.24% | Yes |
| 2024-04-25 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q1 2024](https://view.news.eu.nasdaq.com/view?id=bd6e24c67ce2e6f0f2b4b03fa0f300cd7&lang=en&src=listed) | Open official announcement | 0.69% | -1.37% | -1.37% | 0.82% | -1.64% | Yes |
| 2024-04-04 14:00 | Earnings | Higher profit | [AS Tallink Grupp Audited Annual Report for the Financial Year 2023](https://view.news.eu.nasdaq.com/view?id=bbcf084af2e6f9d10dc1e6bd92c495c43&lang=en&src=listed) | Open official announcement | 0.00% | 2.14% | 6.00% | 3.14% | 5.87% | Yes |
| 2024-02-22 09:00 | Earnings | Higher profit | [AS Tallink Grupp unaudited consolidated Interim Report for the fourth quarter and 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=b167c1880926388070032ab7eebca7d94&lang=en&src=listed) | Open official announcement | 6.00% | 1.13% | -0.99% | -1.41% | -2.03% | No |
| 2023-10-26 09:00 | Earnings | Higher profit | [AS Tallink Grupp Unaudited Consolidated Interim Report Q3 2023](https://view.news.eu.nasdaq.com/view?id=b6f84f9b4b0043fa3f5333b70474f6037&lang=en&src=listed) | Open official announcement | 1.24% | -0.15% | 0.92% | 4.13% | 1.26% | No |
| 2023-07-27 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q2 2023](https://view.news.eu.nasdaq.com/view?id=b2ba9fddc03237b5fc83ad55a33195b4d&lang=en&src=listed) | Open official announcement | 8.16% | -0.45% | -0.15% | 5.58% | -0.43% | No |
| 2023-04-27 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q1 2023](https://view.news.eu.nasdaq.com/view?id=b4188886b41d24f27a29997d4c60ed5de&lang=en&src=listed) | Open official announcement | -0.87% | -0.35% | -0.18% | -0.35% | -0.03% | No |
| 2023-04-17 18:00 | Earnings | Loss | [Correction: AS Tallink Grupp Audited Annual Report of the 2022 Financial Year](https://view.news.eu.nasdaq.com/view?id=bebc216ee317e886485b8718a2b6b207d&lang=en&src=listed) | Open official announcement | 0.52% | -0.17% | -0.35% | -1.74% | 0.28% | No |
| 2023-04-03 09:00 | Earnings | Loss | [AS Tallink Grupp Audited Annual Report of the 2022 Financial Year](https://view.news.eu.nasdaq.com/view?id=bfc82fa1835156bd44da1382ba91479ed&lang=en&src=listed) | Open official announcement | 0.17% | 0.52% | -0.70% | -0.87% | -0.70% | No |
| 2023-02-22 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q4 2022](https://view.news.eu.nasdaq.com/view?id=b6ec8e8b2c07fe9e6a83994224d099fd6&lang=en&src=listed) | Open official announcement | 3.30% | 0.00% | 1.77% | 0.89% | 2.02% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (17 classified of 27 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 4 | 0.90% | 0.962 | 0.80% | 75% | 0.62% | 0.817 | 0.72% |
| Higher profit | 5d | 4 | 2.24% | 8.975 | 1.97% | 75% | 2.24% | 11.633 | 2.55% |
| Higher profit | 21d | 4 | 2.06% | 5.885 | 2.76% | 75% | 2.75% | 10.608 | 3.03% |
| Lower profit | 1d | 6 | -0.14% | 0.241 | -0.08% | 17% | -0.08% | 0.266 | -0.22% |
| Lower profit | 5d | 6 | -0.68% | 6.876 | -1.70% | 33% | -0.57% | 6.254 | -1.77% |
| Lower profit | 21d | 6 | -1.88% | 15.619 | -2.37% | 33% | -0.41% | 13.424 | -0.98% |
| Loss | 1d | 7 | -0.28% | 0.327 | -0.17% | 14% | -0.23% | 0.273 | -0.09% |
| Loss | 5d | 7 | -0.16% | 0.919 | -0.18% | 14% | -0.10% | 1.245 | -0.17% |
| Loss | 21d | 7 | 0.85% | 5.682 | 0.82% | 57% | 2.19% | 3.975 | 2.09% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 3 | 17 | 1.850 | 0.3966 | 0.6888 | No adjusted evidence |
| 5d | 3 | 17 | 2.522 | 0.2834 | 0.6410 | No adjusted evidence |
| 21d | 3 | 17 | 2.466 | 0.2914 | 0.6410 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TAL1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TAL1T_all_frontiers.png?v=1792486190)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.192892 | -0.145603 | M2Sortino | 0.036221 | 0.092022 |
| AdjustedSharpe | 0.299051 | 0.205110 | MSquaredExcess | -0.152656 | -0.101893 |
| AnnualizedReturn_Arithmetic | 0.046837 | 0.095830 | Martin | 0.410319 | 2.554879 |
| AnnualizedReturn_Geometric | 0.035797 | 0.091606 | MaximumDrawdown | 0.173554 | 0.065270 |
| Appraisal | 0.176972 | 0.634766 | Modigliani | 0.000214 | 0.000461 |
| ArithmeticReturn | 0.000186 | 0.000380 | NetSelectivity | -0.163278 | -0.103900 |
| AverageDrawdown | 0.029449 | 0.018221 | Omega | 1.064954 | 1.200198 |
| AverageDrawdownLength | 41.166667 | 16.285714 | OmegaExcessReturn | -0.002123 | 0.062576 |
| AverageRecoveryTime | 21.277778 | 6.000000 | PainIndex | 0.074668 | 0.028290 |
| BernardoLedoit | 1.064954 | 1.200198 | PainRatio | 0.479418 | 3.238094 |
| BetaCoKurtosis | -0.065405 | 0.055012 | Prospect | -0.511984 | -0.332707 |
| BetaCoSkewness | -3.680137 | -4.847655 | Rachev | 1.053652 | 0.995431 |
| Burke | 0.147077 | 1.205395 | Selectivity | 0.027007 | 0.080622 |
| CAPMAlpha | 0.000152 | 0.000339 | Sharpe_Annualized | 0.306412 | 0.750312 |
| CAPMBeta | 0.038436 | 0.046304 | Sharpe_Daily | 0.019302 | 0.047265 |
| CDD | 0.071457 | 0.050439 | Sharpe_ES | 0.007791 | 0.021033 |
| Calmar | 0.206261 | 1.403486 | Sharpe_VaR | 0.013499 | 0.051588 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | 0.092191 | -1.605265 |
| CoSkewness | -0.000001 | -0.000000 | Sortino | 0.028063 | 0.063448 |
| CumulativeReturn | 0.110972 | 0.044800 | SpecificRisk | 0.152608 | 0.127011 |
| DRatio | 1.020660 | 0.721035 | Sterling | 0.130860 | 0.554280 |
| DownCapture | 0.020975 | 0.042594 | SystematicRisk | 0.006749 | 0.007175 |
| DownNumber | 0.418239 | 0.320755 | TotalRisk | 0.152757 | 0.127214 |
| DownPercent | 0.820755 | 0.905660 | TrackingError_Annualized | 0.227661 | 0.195198 |
| DownsideDeviation | 0.006623 | 0.005994 | TrackingError_Daily | 0.014341 | 0.012296 |
| DrawdownDeviation | 0.008608 | 0.006983 | Treynor_Annualized | 0.931339 | 1.978358 |
| ES_Loss | 0.023856 | 0.018080 | Treynor_Daily | 0.003631 | 0.007513 |
| FamaBeta | 0.870506 | 0.824194 | UlcerIndex | 0.087243 | 0.035855 |
| GeometricReturn | 0.000140 | 0.000348 | UpCapture | 0.060333 | 0.122619 |
| Hurst | 0.365714 | 0.516015 | UpNumber | 0.383028 | 0.369863 |
| Information_Annualized | -0.847278 | -0.745925 | UpPercent | 0.176606 | 0.150685 |
| Information_Daily | -0.047277 | -0.040431 | UpsidePotential | 0.460100 | 0.380371 |
| JensenAlpha | 0.027007 | 0.080622 | UpsideRisk | 0.006983 | 0.005333 |
| Kappa | 0.017653 | 0.033252 | VaR_Loss | 0.013769 | 0.007371 |
| Kelly | 2.004552 | 5.874664 | Volatility | 0.009629 | 0.008046 |
| Kurtosis | 10.344557 | 25.419416 | Volatility_Annualized | 0.152858 | 0.127720 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.805085</td><td>-0.008475</td></tr><tr><td>OUT</td><td>96</td><td>95</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.157178</td><td>0.009405</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161875</td><td>0.000383</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TAL1T shares</td><td>700</td><td>1116</td><td>+416</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8181.035978</td><td>268.736012</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.423729</td><td>-0.033898</td></tr><tr><td>OUT</td><td>62</td><td>60</td><td>-2</td></tr><tr><td>IN</td><td>8</td><td>10</td><td>+2</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.061612</td><td>-0.008560</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.091827</td><td>0.000672</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 700 TAL1T shares. The scenario adds 416 shares from Table 3A, resulting in 1116 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="TAL1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TAL1T high-resolution stochastic dominance](figures/stock_profiles/TAL1T_FSD_SSD_TSD.png?v=1792486469)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-dgr1r" data-signal="HOLD">
<summary><strong>DGR1R — DelfinGroup</strong> | HOLD | target 36 shares | priority 16</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>36</td><td>+36</td><td>0.42%</td><td>EUR 1.7200</td><td>0.0339</td><td>26 / 22</td><td>68.46</td><td>Bullish</td><td>Inside bands</td><td>0.503 (Neutral)</td><td>HOLD</td><td>0.000018 (0.023% of portfolio HHI)</td><td>EUR 12,395</td><td>0.5%</td><td>2.4%</td><td>MEDIUM</td></tr></tbody></table>

![DGR1R Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/DGR1R_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 1.7200 | EUR 1.5420 | -10.35% | EUR 1.7600 | +2.32% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![DGR1R complete technical history](figures/technical_analysis/DGR1R_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![DGR1R return histogram](figures/stock_profiles/DGR1R_histogram.png?v=1792485736)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -35.19% (2024-09-04) | Average gain / average loss | 1.072 | Best 21-day period | 12.70% (ending 2026-10-09) |
| Average underwater drawdown | 17.06% | Upside potential ratio | 1.147 | Worst 21-day period | -16.13% (ending 2024-05-17) |
| Conditional drawdown 95% | 33.08% | Upside capture vs Baltic EW | 24.1% | Best 5-day period | 8.18% (ending 2026-10-07) |
| Ulcer index | 19.21 | Downside capture vs Baltic EW | 10.6% | Best 63-day period | 16.41% (ending 2026-06-03) |
| Longest underwater period | 1288 calendar days | Positive trading days | 36.0% | Repeated calendar pattern | Nov: 100% positive across 3 years |
| Daily downside deviation | 0.548% | Best day | 5.23% (2026-05-13) |  |  |
| Daily upside deviation | 0.553% | Worst day | -7.59% (2023-05-19) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.149%); worst: Friday (-0.051%) | 0.4303 | 0.5149 | Not detected |
| Calendar month | Best: Feb (0.119% daily); worst: May (-0.154% daily) | 0.9726 | 0.9726 | Not detected |
| Turn of month | First/last three days: 0.106%; other days: -0.001% | 0.0232 | 0.2058 | Not detected |

![DGR1R seasonality, drawdowns and upside periods](figures/stock_profiles/DGR1R_seasonality.png?v=1792486429)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-03-03 | 2024-09-04 | 2026-09-11 | -35.19% | 1288 |
| 2 | 2026-09-24 | 2026-09-28 | 2026-10-05 | -3.09% | 11 |
| 3 | 2026-10-12 | 2026-10-15 | Not recovered | -2.02% | 4 |
| 4 | 2026-10-07 | 2026-10-08 | 2026-10-09 | -1.74% | 2 |
| 5 | 2023-01-10 | 2023-01-17 | 2023-01-24 | -0.53% | 14 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2026-09-10 | 2026-10-09 | 12.70% |
| 2 | 2024-09-10 | 2024-10-09 | 9.56% |
| 3 | 2025-07-11 | 2025-08-11 | 9.27% |
| 4 | 2025-02-06 | 2025-03-10 | 8.24% |
| 5 | 2026-02-09 | 2026-03-13 | 7.67% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (68 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 1 | 0.49% | 0.27% | -0.78% | 100% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 16 | -0.06% | -0.32% | -1.56% | 31% | 19% | 0.4974 | 0.4214 | No adjusted statistical evidence |
| Earnings | 16 | 0.01% | -1.53% | -1.95% | 31% | 31% | 0.2550 | 0.2391 | No adjusted statistical evidence |
| Ex-dividend | 29 | -0.45% | -1.29% | -1.74% | 10% | 34% | 0.0000 | 0.0352 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 2 | 0.13% | -0.29% | 0.37% | 0% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Revenue | 4 | 0.11% | 0.02% | -0.05% | 50% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![DGR1R official announcements and abnormal returns](figures/stock_profiles/DGR1R_company_events.png?v=1792491546)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (68 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-12 08:40 | Earnings | Higher profit | [DelfinGroup continues to deliver stable profit growth in the first half of the year](https://view.news.eu.nasdaq.com/view?id=bf5bba56b6bb15f09eba9b60c76dc5f84&lang=en&src=listed) | PROFIT | 1.33% | 0.00% | 0.33% | 2.96% | 0.27% | No |
| 2026-06-29 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0308 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0308  | -3.25% | 2.01% | 3.02% | 0.34% | 2.50% | Yes |
| 2026-06-25 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0308 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0308  | 1.32% | -1.62% | -0.32% | -2.60% | -0.32% | No |
| 2026-05-13 08:48 | Earnings | Higher profit | [DelfinGroup continues to show stable growth in the first quarter](https://view.news.eu.nasdaq.com/view?id=b01a6d27e6828367019f1989b6e4cc640&lang=en&src=listed) | Open official announcement | 5.23% | -1.32% | -2.98% | 0.66% | -2.41% | No |
| 2026-04-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0391 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0391  | -2.04% | -0.35% | 0.00% | 2.43% | -0.41% | No |
| 2026-04-15 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0391 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0391  | 2.83% | -0.69% | -1.37% | 1.03% | -1.54% | Yes |
| 2026-04-13 08:58 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b8b2d7a24b4e172e81aacfa652a4278e2&lang=en&src=listed) | Open official announcement | 4.20% | -0.68% | -2.39% | 1.71% | -3.00% | Yes |
| 2025-12-30 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0256 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0256  | -1.08% | 0.16% | 0.62% | 2.64% | -2.15% | No |
| 2025-12-24 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0256 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0256  | 0.62% | -1.68% | -0.92% | -0.61% | -3.41% | No |
| 2025-12-22 08:49 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b215789d8758489c20b384357d6fe3c93&lang=en&src=listed) | Open official announcement | -0.31% | 0.77% | -0.31% | -0.15% | -2.93% | No |
| 2025-11-05 16:00 | Earnings | Higher profit | [DelfinGroup profit rises 23% in the third quarter](https://view.news.eu.nasdaq.com/view?id=b4cd4970680ea79bd90afeaa3a3dc92c7&lang=en&src=listed) | PROFIT; 23% | 0.78% | 0.31% | -0.31% | -0.31% | -0.50% | No |
| 2025-09-29 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0216 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0216  | -0.47% | 0.00% | 0.31% | 0.31% | -0.49% | No |
| 2025-09-25 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0216 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0216  | 0.00% | -0.31% | 0.00% | -0.16% | -0.21% | No |
| 2025-08-28 16:04 | Guidance | — | [DelfinGroup updates forecast for 2025 and sets new financial targets until 2028](https://view.news.eu.nasdaq.com/view?id=b2de16e3a1fc07b35c3767485ff12a649&lang=en&src=listed) | Open official announcement | 0.16% | 0.00% | -0.16% | -0.93% | -0.37% | No |
| 2025-08-06 16:00 | Revenue | — | [DelfinGroup increases revenue by 27% in the first half of the year](https://view.news.eu.nasdaq.com/view?id=b05ad653d98a3ee724a66d8942426f155&lang=en&src=listed) | REVENUE; 27% | 2.70% | 0.15% | -0.62% | -0.31% | -0.64% | No |
| 2025-07-11 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0092 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0092  | 2.04% | -1.00% | 0.50% | 8.18% | 0.05% | No |
| 2025-07-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0092 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0092  | 1.70% | 0.00% | 0.34% | 8.38% | -0.34% | No |
| 2025-07-07 08:57 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b49a3561e14a9d9f1f92a40b56655aca6&lang=en&src=listed) | Open official announcement | 2.38% | -1.00% | -1.00% | 5.97% | -1.45% | No |
| 2025-06-30 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0194 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0194  | -0.68% | 0.68% | 0.68% | 5.47% | 0.54% | No |
| 2025-06-26 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0194 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0194  | 0.00% | -0.85% | -0.51% | 3.56% | -0.70% | No |
| 2025-06-20 09:51 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b516318639aa8355523b142b8de14d450&lang=en&src=listed) | Open official announcement | 0.17% | -0.17% | -0.68% | 2.71% | -1.08% | No |
| 2025-05-07 16:01 | Revenue | — | [DelfinGroup reports Q1 revenue growth and lending expansion in Lithuania](https://view.news.eu.nasdaq.com/view?id=bc0e3bc31dc7acfa617da9fc83e969d6b&lang=en&src=listed) | REVENUE | 0.52% | 0.00% | -0.17% | 1.91% | 0.32% | No |
| 2025-04-28 16:19 | Earnings | Unclassified earnings release | [Audited DelfinGroup annual report for 2024](https://view.news.eu.nasdaq.com/view?id=b3b89c7715abbaeb04ab36ec712988020&lang=en&src=listed) | Open official announcement | 1.23% | 0.00% | 0.00% | 2.09% | -1.28% | No |
| 2025-04-07 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0223 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0223  | -3.23% | 0.00% | -0.18% | 1.05% | 0.74% | No |
| 2025-04-03 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0223 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0223  | -0.51% | -0.52% | -1.72% | -0.86% | 1.73% | Yes |
| 2024-12-30 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.021 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.021  | -1.10% | 0.93% | 2.60% | 1.12% | -0.71% | Yes |
| 2024-12-24 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.021 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.021  | -0.18% | -0.92% | 2.21% | 0.18% | -0.92% | Yes |
| 2024-12-19 09:12 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bfb6b606f4020a934a4e99f76b374ab99&lang=en&src=listed) | Open official announcement | -0.18% | 0.00% | 0.74% | 0.37% | -2.29% | No |
| 2024-11-06 18:44 | Earnings | Higher profit | [In the third quarter, the revenue of DelfinGroup increased by 25%](https://view.news.eu.nasdaq.com/view?id=bfddccd6a471b4236eb94b0b7bd1127ef&lang=en&src=listed) | REVENUE; 25% | 1.86% | -0.18% | -2.37% | -0.91% | -0.76% | Yes |
| 2024-10-07 16:30 | Earnings | Unclassified earnings release | [DelfinGroup increases retail volumes and opens new Banknote branches in the 3rd quarter ](https://view.news.eu.nasdaq.com/view?id=b8cc6da359b6f3eb08976adb7044ec941&lang=en&src=listed) | Open official announcement | 0.58% | 2.89% | 5.97% | 5.59% | 3.91% | Yes |
| 2024-10-01 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0202 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0202  | 0.39% | -0.19% | 0.58% | 4.26% | 0.13% | No |
| 2024-09-27 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0202 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0202  | 2.16% | -1.54% | 0.38% | 2.88% | 0.08% | No |
| 2024-09-24 16:42 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b874cc20ce7f67c6fa650de64794f245e&lang=en&src=listed) | Open official announcement | 1.97% | 0.19% | -0.39% | 2.71% | -0.69% | No |
| 2024-08-07 16:34 | Earnings | Higher profit | [DelfinGroup revenue grew by 24% in the second quarter](https://view.news.eu.nasdaq.com/view?id=b9c09e286355908a2dbfbbf243cf17a5c&lang=en&src=listed) | REVENUE; 24% | -2.05% | 0.76% | 0.00% | -4.18% | -0.30% | No |
| 2024-07-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0088 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0088  | -0.18% | -0.18% | -1.47% | -2.94% | -1.14% | Yes |
| 2024-07-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0088 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0088  | 0.37% | -0.18% | -0.92% | -3.66% | -0.34% | No |
| 2024-07-08 09:05 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b738919197674feaf6877a9add4a5d181&lang=en&src=listed) | Open official announcement | 0.18% | -0.18% | -0.91% | -4.94% | 0.02% | No |
| 2024-06-14 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0178 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0178  | -0.36% | 0.36% | -0.91% | -1.09% | -0.47% | No |
| 2024-06-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0178 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0178  | 1.64% | -1.25% | -2.68% | -2.50% | -2.79% | Yes |
| 2024-06-10 10:02 | Ex-dividend | — | [CORRECTION: Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bd61aebdbac2f33ee0943020cce55ca6d&lang=en&src=listed) | Open official announcement | -0.18% | 1.27% | -1.09% | -1.27% | -1.62% | Yes |
| 2024-05-10 16:01 | Earnings | Higher profit | [CORRECTION: DelfinGroup increases revenue by 26% in the first quarter](https://view.news.eu.nasdaq.com/view?id=bdc17d07400d53675fccca830b0e9dfad&lang=en&src=listed) | REVENUE; 26% | -2.44% | -2.84% | -13.19% | -7.85% | -12.35% | No |
| 2024-05-08 20:37 | Earnings | Higher profit | [DelfinGroup increases revenue by 26% in the first quarter](https://view.news.eu.nasdaq.com/view?id=b995899ed65d77c3ae2ac09ab57a8d101&lang=en&src=listed) | REVENUE; 26% | -1.63% | -0.83% | -9.77% | -8.44% | -8.12% | No |
| 2024-04-30 20:30 | Earnings | Unclassified earnings release | [Audited DelfinGroup annual report for 2023 ](https://view.news.eu.nasdaq.com/view?id=b95240e6c4e7551b2d8e0a30a7efb7e08&lang=en&src=listed) | Open official announcement | -0.16% | -0.33% | -2.44% | -9.93% | -2.70% | No |
| 2024-04-16 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0143 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0143  | 0.00% | -0.32% | -0.81% | -16.13% | -0.44% | No |
| 2024-04-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0143 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0143  | 1.63% | -0.32% | -0.96% | -6.89% | -0.61% | No |
| 2024-04-10 08:55 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bbca79491c39bf2ccddcd7d02a67b1bc0&lang=en&src=listed) | Open official announcement | 1.62% | -0.32% | -1.28% | -6.87% | -0.21% | Yes |
| 2024-02-28 20:25 | Revenue | — | [DelfinGroup revenue increased by 41% in 2023](https://view.news.eu.nasdaq.com/view?id=bbc3c78a0a746d5e53834e8caa64a0715&lang=en&src=listed) | REVENUE; 41% | 1.61% | 0.79% | -0.79% | -1.90% | -0.48% | No |
| 2024-01-30 09:10 | Dividend announcement | — | [DelfinGroup explains the procedure for paying out annual dividends](https://view.news.eu.nasdaq.com/view?id=b3069cdf20303f779ef35de17f22e7d03&lang=en&src=listed) | Open official announcement | -0.39% | 0.39% | 0.00% | -0.39% | 0.27% | No |
| 2023-12-28 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0214 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0214  | -2.26% | 0.00% | 0.39% | -1.93% | -1.39% | No |
| 2023-12-22 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0214 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0214  | -0.38% | -1.89% | -1.89% | -3.77% | -3.10% | No |
| 2023-12-20 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b09376f2a6c06ece383a7d954074fc0d2&lang=en&src=listed) | Open official announcement | -0.75% | 0.00% | -1.51% | -3.40% | -2.88% | Yes |
| 2023-11-08 09:00 | Revenue | — | [Revenue of DelfinGroup increased by 46% in the first nine months of the year](https://view.news.eu.nasdaq.com/view?id=b22b4074a7e30a239abf82c050a9bcb04&lang=en&src=listed) | REVENUE; 46% | 6.00% | -1.51% | 0.00% | -2.64% | 0.89% | No |
| 2023-09-29 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0195 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0195  | -1.49% | -0.38% | -0.75% | -5.66% | -0.62% | No |
| 2023-09-27 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0195 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0195  | 0.37% | -0.75% | -0.75% | -5.97% | -1.75% | No |
| 2023-09-25 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b340e52e26e4433b8bd7017734a51f8b8&lang=en&src=listed) | Open official announcement | -0.37% | 0.00% | -1.12% | -6.72% | -2.44% | No |
| 2023-08-09 08:56 | Earnings | Higher profit | [Revenue of DelfinGroup grew by 52% in the second quarter](https://view.news.eu.nasdaq.com/view?id=b619c721ac56c0cb246bdb38aac764811&lang=en&src=listed) | REVENUE; 52% | 0.37% | 0.00% | -0.37% | -0.74% | -0.23% | No |
| 2023-06-30 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0177 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0177  | -0.73% | 0.37% | 0.37% | -0.74% | -0.52% | No |
| 2023-06-28 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0177 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0177  | -0.36% | -0.73% | -0.36% | -1.46% | -0.88% | No |
| 2023-06-26 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b3404115380920c79ff2e07449b9d61b8&lang=en&src=listed) | Open official announcement | -0.72% | 0.00% | -0.36% | -1.09% | -0.90% | No |
| 2023-06-02 09:35 | Earnings | Higher profit | [DelfinGroup shareholders have approved the annual report for 2022](https://view.news.eu.nasdaq.com/view?id=bfecff8cac878e978b9c8a146aa195a27&lang=en&src=listed) | Open official announcement | 2.55% | 0.35% | -2.13% | -3.19% | -2.91% | Yes |
| 2023-05-10 23:03 | Earnings | Higher profit | [DelfinGroup increases revenues by 46% in the first quarter](https://view.news.eu.nasdaq.com/view?id=b15b104b1b48e2b0f5d7e936260804641&lang=en&src=listed) | REVENUE; 46% | 0.33% | 0.67% | 1.00% | -8.00% | 3.05% | No |
| 2023-04-30 22:59 | Earnings | Higher profit | [DelfinGroup audited annual report for 2022](https://view.news.eu.nasdaq.com/view?id=b74d27223b2eefd52328818c98a86d7bf&lang=en&src=listed) | Open official announcement | 0.00% | -0.33% | 0.33% | -5.69% | 0.36% | No |
| 2023-04-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0185 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0185  | 0.67% | -0.66% | -0.99% | -7.28% | -0.70% | No |
| 2023-04-13 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0185 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0185  | 1.00% | 0.00% | -1.32% | -0.33% | -1.20% | Yes |
| 2023-04-11 10:40 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bb7465bc2f30363175acd0feb5bff8d0f&lang=en&src=listed) | Open official announcement | 1.67% | -0.33% | -1.64% | -0.66% | -1.53% | Yes |
| 2023-04-06 09:00 | Earnings | Higher profit | [DelfinGroup increases the sales amount of goods in the first quarter by 43%](https://view.news.eu.nasdaq.com/view?id=b837c1e1d3cc40aea4e6d3a6751a4cc24&lang=en&src=listed) | SALES; 43% | 1.46% | -0.33% | -1.96% | -0.98% | -1.99% | Yes |
| 2023-02-28 18:29 | Guidance | — | [DelfinGroup renews the set financial goals until 2024 and sets forecasts for 2025](https://view.news.eu.nasdaq.com/view?id=b6b6be0196be07aea2f546c8c0dd02645&lang=en&src=listed) | Open official announcement | 0.80% | 0.66% | 0.00% | -1.05% | -0.22% | No |
| 2023-02-27 16:08 | Earnings | Higher profit | [Last year, the profit of DelfinGroup increased by 40% ](https://view.news.eu.nasdaq.com/view?id=b3d0d1e5a1d23212ea884ec6eb39d0efb&lang=en&src=listed) | PROFIT; 40% | 1.06% | 0.00% | 1.58% | -0.66% | 1.49% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (13 classified of 16 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 13 | -0.29% | 0.909 | 0.00% | 31% | -0.09% | 1.209 | 0.06% |
| Higher profit | 5d | 13 | -2.29% | 18.977 | -0.37% | 31% | -1.88% | 16.974 | -0.50% |
| Higher profit | 21d | 13 | -2.87% | 13.482 | -0.98% | 15% | -1.93% | 11.335 | -1.01% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![DGR1R Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/DGR1R_all_frontiers.png?v=1792486202)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.133680 | 0.209969 | M2Sortino | 0.098890 | 0.465339 |
| AdjustedSharpe | 0.505423 | -3.361744 | MSquaredExcess | -0.068846 | 0.223420 |
| AnnualizedReturn_Arithmetic | 0.097455 | 0.378790 | Martin | 1.136901 | 40.755773 |
| AnnualizedReturn_Geometric | 0.095009 | 0.447178 | MaximumDrawdown | 0.218446 | 0.027235 |
| Appraisal | 0.747984 | 3.199462 | Modigliani | 0.000587 | 0.001726 |
| ArithmeticReturn | 0.000387 | 0.001503 | NetSelectivity | -0.055773 | 0.240657 |
| AverageDrawdown | 0.021368 | 0.012967 | Omega | 1.203861 | 1.823660 |
| AverageDrawdownLength | 35.950000 | 9.500000 | OmegaExcessReturn | 0.068445 | 0.429557 |
| AverageRecoveryTime | 15.350000 | 3.666667 | PainIndex | 0.058687 | 0.008199 |
| BernardoLedoit | 1.203861 | 1.823660 | PainRatio | 1.618916 | 54.540371 |
| BetaCoKurtosis | -0.001280 | 0.177843 | Prospect | -0.427724 | -0.213865 |
| BetaCoSkewness | -1.489626 | 9.268103 | Rachev | 1.239206 | 2.135722 |
| Burke | 0.618415 | 8.338946 | Selectivity | 0.086400 | 0.428103 |
| CAPMAlpha | 0.000354 | 0.001431 | Sharpe_Annualized | 0.841749 | 2.807605 |
| CAPMBeta | 0.037644 | 0.080414 | Sharpe_Daily | 0.053025 | 0.176863 |
| CDD | 0.026227 | 0.025283 | Sharpe_ES | 0.025243 | 0.133253 |
| Calmar | 0.434932 | 16.419513 | Sharpe_VaR | 0.043434 | 0.219080 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | 0.563733 | 2.286271 |
| CoSkewness | -0.000000 | 0.000000 | Sortino | 0.083350 | 0.413173 |
| CumulativeReturn | 0.312019 | 0.202987 | SpecificRisk | 0.115511 | 0.133805 |
| DRatio | 0.785516 | 0.505340 | Sterling | 0.298352 | 3.514597 |
| DownCapture | 0.039651 | -0.141486 | SystematicRisk | 0.006610 | 0.012461 |
| DownNumber | 0.383648 | 0.377358 | TotalRisk | 0.115700 | 0.134384 |
| DownPercent | 0.852201 | 0.849057 | TrackingError_Annualized | 0.204736 | 0.195841 |
| DownsideDeviation | 0.004640 | 0.003638 | TrackingError_Daily | 0.012897 | 0.012337 |
| DrawdownDeviation | 0.008279 | 0.004860 | Treynor_Annualized | 2.523863 | 5.560968 |
| ES_Loss | 0.015320 | 0.011280 | Treynor_Daily | 0.009569 | 0.018253 |
| FamaBeta | 0.659330 | 0.870628 | UlcerIndex | 0.083568 | 0.010972 |
| GeometricReturn | 0.000360 | 0.001468 | UpCapture | 0.122368 | 0.239470 |
| Hurst | 0.415257 | 0.431505 | UpNumber | 0.376147 | 0.383562 |
| Information_Annualized | -0.652939 | 1.072138 | UpPercent | 0.174312 | 0.205479 |
| Information_Daily | -0.035462 | 0.050481 | UpsidePotential | 0.492210 | 0.914804 |
| JensenAlpha | 0.086400 | 0.428103 | UpsideRisk | 0.005634 | 0.007790 |
| Kappa | 0.047265 | 0.295612 | VaR_Loss | 0.008904 | 0.006861 |
| Kelly | 7.270480 | 20.810081 | Volatility | 0.007293 | 0.008499 |
| Kurtosis | 19.212807 | 12.947505 | Volatility_Annualized | 0.115776 | 0.134916 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148472</td><td>0.000698</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161309</td><td>-0.000183</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>DGR1R shares</td><td>0</td><td>36</td><td>+36</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>7974.219968</td><td>61.920001</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.423729</td><td>-0.033898</td></tr><tr><td>OUT</td><td>62</td><td>62</td><td>+0</td></tr><tr><td>IN</td><td>8</td><td>12</td><td>+4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.069494</td><td>-0.000679</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.091417</td><td>0.000262</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 DGR1R shares. The scenario adds 36 shares from Table 3A, resulting in 36 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="DGR1R"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![DGR1R high-resolution stochastic dominance](figures/stock_profiles/DGR1R_FSD_SSD_TSD.png?v=1792486443)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-eft1t" data-signal="HOLD">
<summary><strong>EFT1T — EfTEN Real Estate Fund</strong> | HOLD | target 3 shares | priority 17</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>3</td><td>+3</td><td>0.48%</td><td>EUR 19.6000</td><td>0.1186</td><td>37 / 23</td><td>53.70</td><td>Bullish</td><td>Inside bands</td><td>0.769 (Neutral)</td><td>HOLD</td><td>0.000023 (0.030% of portfolio HHI)</td><td>EUR 20,301</td><td>0.3%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![EFT1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/EFT1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 19.6000 | EUR 19.4049 | -1.00% | EUR 19.6601 | +0.31% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![EFT1T complete technical history](figures/technical_analysis/EFT1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![EFT1T return histogram](figures/stock_profiles/EFT1T_histogram.png?v=1792485735)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -19.00% (2023-08-29) | Average gain / average loss | 0.953 | Best 21-day period | 11.62% (ending 2023-02-14) |
| Average underwater drawdown | 12.29% | Upside potential ratio | 1.194 | Worst 21-day period | -9.75% (ending 2023-08-25) |
| Conditional drawdown 95% | 16.64% | Upside capture vs Baltic EW | 33.3% | Best 5-day period | 9.75% (ending 2023-09-06) |
| Ulcer index | 12.55 | Downside capture vs Baltic EW | 32.8% | Best 63-day period | 8.72% (ending 2023-04-03) |
| Longest underwater period | 1340 calendar days | Positive trading days | 32.3% | Repeated calendar pattern | Jan: 100% positive across 4 years |
| Daily downside deviation | 0.466% | Best day | 4.99% (2023-09-04) |  |  |
| Daily upside deviation | 0.421% | Worst day | -4.73% (2025-04-17) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.064%); worst: Tuesday (-0.052%) | 0.0989 | 0.2275 | Not detected |
| Calendar month | Best: Jan (0.194% daily); worst: Aug (-0.134% daily) | 0.1267 | 0.3237 | Not detected |
| Turn of month | First/last three days: 0.052%; other days: -0.009% | 0.1347 | 0.4850 | Not detected |

![EFT1T seasonality, drawdowns and upside periods](figures/stock_profiles/EFT1T_seasonality.png?v=1792486427)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-14 | 2023-08-29 | Not recovered | -19.00% | 1340 |
| 2 | 2023-01-17 | 2023-01-18 | 2023-01-26 | -0.99% | 9 |
| 3 | 2023-01-13 | 2023-01-16 | 2023-01-17 | -0.50% | 4 |
| 4 | 2023-02-08 | 2023-02-09 | 2023-02-10 | -0.47% | 2 |
| 5 | 2023-01-09 | 2023-01-10 | 2023-01-11 | -0.26% | 2 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-01-16 | 2023-02-14 | 11.62% |
| 2 | 2024-12-19 | 2025-01-28 | 5.82% |
| 3 | 2023-08-29 | 2023-09-27 | 5.59% |
| 4 | 2024-09-26 | 2024-10-25 | 4.61% |
| 5 | 2026-07-02 | 2026-08-03 | 4.47% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (37 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.66% | 0.17% | -0.13% | 50% | 0% | 0.9354 | 1.0000 | No adjusted statistical evidence |
| Earnings | 27 | -0.06% | -0.24% | -0.72% | 48% | 15% | 0.9354 | 0.9457 | No adjusted statistical evidence |
| Ex-dividend | 6 | -2.56% | -4.77% | -5.25% | 0% | 83% | 0.0000 | 0.0000 | Different from ordinary periods; price drop may be mechanical |

![EFT1T official announcements and abnormal returns](figures/stock_profiles/EFT1T_company_events.png?v=1792491544)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (37 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-30 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS unaudited results for 2nd quarter and 1st half-year 2026](https://view.news.eu.nasdaq.com/view?id=b0e6ff24064ab0253174ca381662214c6&lang=en&src=listed) | Open official announcement | 1.02% | 0.51% | 0.76% | -1.52% | 0.35% | No |
| 2026-06-09 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS - Five-Month financial results 2026 and net asset value as of 31 May 2026](https://view.news.eu.nasdaq.com/view?id=b078adf4bf8f7cee92665267be6788f41&lang=en&src=listed) | Open official announcement | 0.26% | 0.00% | 0.00% | -0.52% | 0.67% | No |
| 2026-05-12 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS - Four-Month financial results 2026 and net asset value as of 30 April 2026](https://view.news.eu.nasdaq.com/view?id=b48b1b610839e8f6b4d50266ccc8cc1f0&lang=en&src=listed) | Open official announcement | 0.52% | 0.00% | 0.00% | -0.26% | 0.76% | No |
| 2026-04-30 08:00 | Earnings | Lower profit | [EfTEN Real Estate Fund AS unaudited results for 1st quarter 2026](https://view.news.eu.nasdaq.com/view?id=b30bf80442906cf5f574af74d493614e5&lang=en&src=listed) | Open official announcement | -0.26% | -0.26% | 0.26% | 0.26% | -0.37% | No |
| 2026-04-29 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.2 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.2  | -0.26% | 0.00% | -0.26% | -0.52% | -0.49% | No |
| 2026-04-21 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.2 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.2  | 1.01% | -4.48% | -4.73% | -4.98% | -4.86% | Yes |
| 2026-04-10 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS's financial results for Q1 2026 and net asset value as of 31 March 2026](https://view.news.eu.nasdaq.com/view?id=b12e6fed2284ab1ca3155c1d72cdcb327&lang=en&src=listed) | Open official announcement | 1.27% | 0.00% | 1.01% | -3.77% | 0.45% | Yes |
| 2026-02-27 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS 2025 Audited Annual Report](https://view.news.eu.nasdaq.com/view?id=be58bd3bdf64f055c5a881fd6b2cc28cc&lang=en&src=listed) | Open official announcement | 0.25% | 0.25% | -0.50% | -0.25% | 0.38% | No |
| 2026-01-29 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS unaudited results for 4th quarter and 12 months 2025](https://view.news.eu.nasdaq.com/view?id=b86281c9d295455b1caf739ccf1d9939c&lang=en&src=listed) | Open official announcement | 0.25% | 0.25% | 0.25% | 0.51% | 1.71% | No |
| 2026-01-12 08:46 | Earnings | Unclassified earnings release | [Net Asset Value of EfTEN Real Estate Fund AS share as of December 31, 2024, and Preliminary Financial Results for 2025](https://view.news.eu.nasdaq.com/view?id=b4c653b6d229de2cde0b16ff0c6347f2f&lang=en&src=listed) | Open official announcement | 0.26% | 1.30% | 1.55% | 2.59% | 1.40% | No |
| 2025-10-30 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS Unaudited Results for the Third Quarter and Nine Months of 2025](https://view.news.eu.nasdaq.com/view?id=bb9f30eb9f2e8db5d7e6b35ef01b96ea3&lang=en&src=listed) | Open official announcement | 0.52% | 0.00% | 0.00% | 0.00% | 0.19% | No |
| 2025-07-31 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS unaudited results for 2nd quarter and 1st half-year 2025](https://view.news.eu.nasdaq.com/view?id=b627d7617c2a4333caad9badec96feef2&lang=en&src=listed) | Open official announcement | 0.79% | -0.52% | -0.78% | -0.26% | -0.49% | No |
| 2025-04-30 08:00 | Earnings | Lower profit | [EfTEN Real Estate Fund AS unaudited results for 1st quarter 2025](https://view.news.eu.nasdaq.com/view?id=b2d16353c2cf3636516a23358681ca1d6&lang=en&src=listed) | Open official announcement | -0.26% | 0.26% | -0.26% | -0.26% | -1.87% | No |
| 2025-04-30 08:00 | Dividend payment | Lower profit | [Official dividend calendar: Dividend payment date, EUR 1.11 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.11  | -1.04% | 0.79% | 0.79% | 0.53% | -0.13% | No |
| 2025-04-17 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.11 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.11  | 2.55% | -4.73% | -4.98% | -4.48% | -6.32% | Yes |
| 2025-04-15 10:19 | Ex-dividend | — | [Dividend payment ex-date of EfTEN Real Estate Fund AS](https://view.news.eu.nasdaq.com/view?id=b60e9b89ac2d69f55b0d5d7307af0832d&lang=en&src=listed) | Open official announcement | 1.01% | 0.75% | -4.76% | -3.76% | -5.63% | Yes |
| 2025-04-11 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS's financial results for Q1 2025 and net asset value as of 31 March 2025](https://view.news.eu.nasdaq.com/view?id=b9ace0985bbcc40fdc087fff4302ca633&lang=en&src=listed) | Open official announcement | 1.02% | 0.25% | -3.27% | -3.27% | -4.02% | No |
| 2025-02-28 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS 2024 Audited Annual Report](https://view.news.eu.nasdaq.com/view?id=b5e9d46f42fe3f350dffdfa6a6430a9ab&lang=en&src=listed) | Open official announcement | 0.25% | -0.75% | -1.25% | -0.50% | -1.25% | No |
| 2025-02-03 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS unaudited results for 4th quarter and 12 months 2024](https://view.news.eu.nasdaq.com/view?id=ba43adde2ceee707eafbb937dd3918007&lang=en&src=listed) | Open official announcement | 0.25% | 0.00% | 0.00% | -1.50% | -2.02% | No |
| 2025-01-15 08:00 | Earnings | Unclassified earnings release | [Net Asset Value of EfTEN Real Estate Fund AS share as of December 31, 2024, and Preliminary Financial Results for 2024](https://view.news.eu.nasdaq.com/view?id=b837932403c0491b5eec1a7ba47e1511b&lang=en&src=listed) | Open official announcement | 1.05% | 0.00% | 4.66% | 3.37% | 4.07% | No |
| 2024-10-24 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS unaudited results for 3rd quarter and nine months of 2024](https://view.news.eu.nasdaq.com/view?id=b4da8ff9b5c045883ec59e93451e79253&lang=en&src=listed) | Open official announcement | 0.52% | 0.52% | -0.78% | -0.52% | -0.65% | No |
| 2024-07-31 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund AS unaudited results for 2nd quarter ja 1st half-year 2024](https://view.news.eu.nasdaq.com/view?id=b42ff0996536ee47f04f27dec82ea4573&lang=en&src=listed) | Open official announcement | 0.53% | -0.53% | -0.27% | -0.53% | 1.16% | No |
| 2024-04-25 08:00 | Earnings | Lower profit | [EfTEN Real Estate Fund AS unaudited results for 1st quarter 2024](https://view.news.eu.nasdaq.com/view?id=bab555616907cdbe4ea8a1dfbcca41687&lang=en&src=listed) | Open official announcement | 2.40% | -1.04% | -1.04% | -1.82% | -1.32% | No |
| 2024-04-24 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1  | 0.53% | 0.80% | 1.06% | 0.27% | 0.85% | No |
| 2024-04-15 09:12 | Ex-dividend | — | [Dividend payment ex-date of EfTEN Real Estate Fund AS](https://view.news.eu.nasdaq.com/view?id=b686af1c034e817e564e6d42d778c1b81&lang=en&src=listed) | Open official announcement | 0.77% | -4.58% | -4.07% | -4.58% | -3.70% | No |
| 2024-02-29 08:30 | Earnings | Lower profit | [EfTEN Real Estate Fund AS 2023 audited annual report](https://view.news.eu.nasdaq.com/view?id=b424baf7302e3e5c8ad6507e3011b5971&lang=en&src=listed) | Open official announcement | -0.52% | 0.00% | 0.00% | -0.26% | 0.52% | No |
| 2024-02-01 08:00 | Earnings | Lower profit | [EfTEN Real Estate Fund AS unaudited results for 4th quarter and 12 months 2023](https://view.news.eu.nasdaq.com/view?id=bda607194898eb42ea52e5ed6085106e7&lang=en&src=listed) | Open official announcement | 0.00% | 0.78% | 1.04% | 0.78% | 1.31% | Yes |
| 2024-01-11 08:00 | Earnings | Lower profit | [EfTEN Real Estate Fund net asset value per share and the preliminary financial results for ](https://view.news.eu.nasdaq.com/view?id=bf3c89a84016fd9cbd325b73425baac41&lang=en&src=listed) | Open official announcement | 2.92% | 0.52% | -0.26% | 0.26% | -0.21% | No |
| 2023-10-26 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS unaudited results for 3nd quarter and 9 months 2023](https://view.news.eu.nasdaq.com/view?id=b76ee6a74fecb5914ba30b73a128ad410&lang=en&src=listed) | Open official announcement | 1.08% | 0.53% | -0.80% | 0.53% | -0.46% | No |
| 2023-07-27 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS unaudited results for 2nd quarter and 6 months 2023](https://view.news.eu.nasdaq.com/view?id=b85226497727f83162b2f52afa9b76b01&lang=en&src=listed) | Open official announcement | -1.50% | -0.25% | 0.00% | -7.89% | -0.28% | No |
| 2023-05-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.1526 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.1526  | -4.19% | 0.49% | -0.97% | -3.16% | 0.45% | No |
| 2023-05-04 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.1526 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.1526  | 2.83% | -4.13% | -5.05% | -8.26% | -4.37% | Yes |
| 2023-05-02 16:05 | Earnings | Unclassified earnings release | [Annual report 2002 of the EfTEN Real Estate Fund AS management company](https://view.news.eu.nasdaq.com/view?id=bf882e7564205597ca03b8e3351ed7235&lang=en&src=listed) | Open official announcement | 1.42% | 1.40% | -4.19% | -7.21% | -3.72% | Yes |
| 2023-05-02 08:00 | Ex-dividend | — | [Dividend payment ex-date of EfTEN Real Estate Fund AS](https://view.news.eu.nasdaq.com/view?id=b79dda31efa963dd7d248051ea63b7f11&lang=en&src=listed) | Open official announcement | 1.42% | 1.40% | -4.19% | -7.21% | -3.72% | Yes |
| 2023-04-27 08:00 | Earnings | Unclassified earnings release | [EfTEN Real Estate Fund AS unaudited results for 1st quarter 2023](https://view.news.eu.nasdaq.com/view?id=b5686ab2788d2cf6016ae32835b28090d&lang=en&src=listed) | Open official announcement | 0.47% | 0.47% | -2.35% | -6.10% | -2.20% | Yes |
| 2023-02-28 16:05 | Earnings | Higher profit | [EfTEN Real Estate Fund III AS 2022 audited annual report](https://view.news.eu.nasdaq.com/view?id=bb43368f61c9d3b9b725a6bd301e9cce3&lang=en&src=listed) | Open official announcement | 0.92% | 0.00% | -1.82% | -3.64% | -2.03% | No |
| 2023-02-01 08:00 | Earnings | Higher profit | [EfTEN Real Estate Fund III AS unaudited results for 4th quarter and 12 months 2022](https://view.news.eu.nasdaq.com/view?id=b0e6fd9f9386907e0b446a193ee633df1&lang=en&src=listed) | Open official announcement | 4.50% | 0.48% | 2.87% | 2.87% | 1.39% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (16 classified of 27 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 10 | 0.02% | 0.222 | 0.13% | 50% | -0.05% | 0.232 | -0.05% |
| Higher profit | 5d | 10 | -0.15% | 1.675 | -0.38% | 30% | 0.07% | 1.425 | 0.27% |
| Higher profit | 21d | 10 | -0.38% | 2.610 | -0.38% | 20% | 0.65% | 4.061 | 0.16% |
| Lower profit | 1d | 6 | 0.04% | 0.418 | 0.13% | 50% | -0.39% | 0.653 | -0.67% |
| Lower profit | 5d | 6 | -0.04% | 0.474 | -0.13% | 33% | -0.32% | 1.358 | -0.29% |
| Lower profit | 21d | 6 | -0.17% | 0.805 | -0.00% | 50% | -0.16% | 2.270 | 0.35% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 16 | 0.753 | 0.3855 | 0.6888 | No adjusted evidence |
| 5d | 2 | 16 | 0.294 | 0.5876 | 0.8057 | No adjusted evidence |
| 21d | 2 | 16 | 0.188 | 0.6644 | 0.8294 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![EFT1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/EFT1T_all_frontiers.png?v=1792486201)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.249120 | -0.315798 | M2Sortino | -0.021051 | -0.080231 |
| AdjustedSharpe | -0.167524 | -0.502205 | MSquaredExcess | -0.216200 | -0.303506 |
| AnnualizedReturn_Arithmetic | -0.015907 | -0.077929 | Martin | -0.126159 | -2.234009 |
| AnnualizedReturn_Geometric | -0.020430 | -0.078589 | MaximumDrawdown | 0.201964 | 0.062130 |
| Appraisal | -0.225699 | -1.038739 | Modigliani | -0.000114 | -0.000544 |
| ArithmeticReturn | -0.000063 | -0.000309 | NetSelectivity | -0.146866 | -0.213391 |
| AverageDrawdown | 0.045633 | 0.020570 | Omega | 0.965259 | 0.800466 |
| AverageDrawdownLength | 147.000000 | 24.750000 | OmegaExcessReturn | -0.047208 | -0.101840 |
| AverageRecoveryTime | 80.800000 | 12.750000 | PainIndex | 0.153465 | 0.026023 |
| BernardoLedoit | 0.965259 | 0.800466 | PainRatio | -0.133128 | -3.019974 |
| BetaCoKurtosis | -0.031388 | 0.057061 | Prospect | -0.499101 | -0.467986 |
| BetaCoSkewness | -1.120956 | 7.217372 | Rachev | 0.875056 | 0.721047 |
| Burke | -0.129214 | -1.246756 | Selectivity | -0.021895 | -0.090740 |
| CAPMAlpha | -0.000069 | -0.000355 | Sharpe_Annualized | -0.163847 | -0.884916 |
| CAPMBeta | 0.006406 | 0.051227 | Sharpe_Daily | -0.010321 | -0.055744 |
| CDD | 0.115536 | 0.044782 | Sharpe_ES | -0.004086 | -0.022066 |
| Calmar | -0.101159 | -1.264896 | Sharpe_VaR | -0.006635 | -0.040949 |
| CoKurtosis | -0.000000 | 0.000000 | Skewness | -1.382197 | -4.004161 |
| CoSkewness | -0.000000 | 0.000000 | Sortino | -0.013496 | -0.064420 |
| CumulativeReturn | -0.059894 | -0.040098 | SpecificRisk | 0.097011 | 0.087356 |
| DRatio | 0.996650 | 1.177885 | Sterling | -0.067658 | -0.484724 |
| DownCapture | 0.011748 | 0.097296 | SystematicRisk | 0.001125 | 0.007938 |
| DownNumber | 0.301887 | 0.283019 | TotalRisk | 0.097018 | 0.087716 |
| DownPercent | 0.874214 | 0.905660 | TrackingError_Annualized | 0.199660 | 0.171197 |
| DownsideDeviation | 0.004677 | 0.004800 | TrackingError_Daily | 0.012577 | 0.010784 |
| DrawdownDeviation | 0.007374 | 0.005669 | Treynor_Annualized | -3.189276 | -1.534130 |
| ES_Loss | 0.015448 | 0.014014 | Treynor_Daily | -0.012786 | -0.006339 |
| FamaBeta | 0.552871 | 0.568283 | UlcerIndex | 0.161942 | 0.035178 |
| GeometricReturn | -0.000082 | -0.000325 | UpCapture | -0.005516 | 0.004697 |
| Hurst | 0.388273 | 0.483868 | UpNumber | 0.332569 | 0.273973 |
| Information_Annualized | -1.247719 | -1.844641 | UpPercent | 0.137615 | 0.095890 |
| Information_Daily | -0.071517 | -0.108469 | UpsidePotential | 0.374987 | 0.258433 |
| JensenAlpha | -0.021895 | -0.090740 | UpsideRisk | 0.003935 | 0.002754 |
| Kappa | -0.007768 | -0.033831 | VaR_Loss | 0.009514 | 0.007552 |
| Kelly | -1.687710 | -10.048644 | Volatility | 0.006116 | 0.005547 |
| Kurtosis | 16.679067 | 34.354529 | Volatility_Annualized | 0.097082 | 0.088063 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.805085</td><td>-0.008475</td></tr><tr><td>OUT</td><td>96</td><td>95</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.149893</td><td>0.002119</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161921</td><td>0.000428</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>EFT1T shares</td><td>0</td><td>3</td><td>+3</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>7971.099968</td><td>58.800001</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.406780</td><td>-0.050847</td></tr><tr><td>OUT</td><td>62</td><td>60</td><td>-2</td></tr><tr><td>IN</td><td>8</td><td>12</td><td>+4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.070439</td><td>0.000267</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.091158</td><td>0.000002</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 EFT1T shares. The scenario adds 3 shares from Table 3A, resulting in 3 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="EFT1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![EFT1T high-resolution stochastic dominance](figures/stock_profiles/EFT1T_FSD_SSD_TSD.png?v=1792486445)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-hae1t" data-signal="HOLD">
<summary><strong>HAE1T — Harju Elekter Group</strong> | HOLD | target 173 shares | priority 18</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>100</td><td>173</td><td>+73</td><td>6.19%</td><td>EUR 5.3600</td><td>0.1102</td><td>37 / 24</td><td>58.25</td><td>Bullish</td><td>Inside bands</td><td>0.425 (Neutral)</td><td>HOLD</td><td>0.003835 (4.946% of portfolio HHI)</td><td>EUR 17,025</td><td>2.3%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

![HAE1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/HAE1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 5.3600 | EUR 5.0526 | -5.73% | EUR 5.4174 | +1.07% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![HAE1T complete technical history](figures/technical_analysis/HAE1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![HAE1T return histogram](figures/stock_profiles/HAE1T_histogram.png?v=1792485732)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -14.80% (2025-03-07) | Average gain / average loss | 1.128 | Best 21-day period | 15.63% (ending 2026-01-14) |
| Average underwater drawdown | 8.01% | Upside potential ratio | 1.214 | Worst 21-day period | -8.81% (ending 2025-03-12) |
| Conditional drawdown 95% | 14.16% | Upside capture vs Baltic EW | 52.2% | Best 5-day period | 10.20% (ending 2026-01-14) |
| Ulcer index | 8.79 | Downside capture vs Baltic EW | 45.8% | Best 63-day period | 25.21% (ending 2026-03-13) |
| Longest underwater period | 608 calendar days | Positive trading days | 38.6% | Repeated calendar pattern | Jan: 75% positive across 4 years |
| Daily downside deviation | 0.581% | Best day | 6.25% (2024-05-15) |  |  |
| Daily upside deviation | 0.641% | Worst day | -5.15% (2025-02-20) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.104%); worst: Thursday (-0.097%) | 0.0746 | 0.1906 | Not detected |
| Calendar month | Best: Jan (0.215% daily); worst: Jun (-0.102% daily) | 0.6479 | 0.7843 | Not detected |
| Turn of month | First/last three days: -0.051%; other days: 0.026% | 0.4532 | 0.8443 | Not detected |

![HAE1T seasonality, drawdowns and upside periods](figures/stock_profiles/HAE1T_seasonality.png?v=1792486386)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2024-05-15 | 2025-03-07 | 2026-01-13 | -14.80% | 608 |
| 2 | 2026-04-16 | 2026-08-14 | Not recovered | -14.72% | 183 |
| 3 | 2023-01-27 | 2024-04-10 | 2024-05-15 | -11.52% | 474 |
| 4 | 2026-03-13 | 2026-03-31 | 2026-04-08 | -4.44% | 26 |
| 5 | 2026-02-19 | 2026-03-04 | 2026-03-13 | -3.48% | 22 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-12-08 | 2026-01-14 | 15.63% |
| 2 | 2024-04-11 | 2024-05-15 | 13.21% |
| 3 | 2026-02-09 | 2026-03-13 | 10.57% |
| 4 | 2024-12-16 | 2025-01-23 | 7.35% |
| 5 | 2026-09-15 | 2026-10-14 | 6.54% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (31 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.48% | -0.64% | -0.66% | 25% | 25% | 0.6940 | 1.0000 | No adjusted statistical evidence |
| Earnings | 19 | -0.10% | -0.01% | 0.71% | 58% | 32% | 0.9354 | 0.8481 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.16% | -2.54% | -3.88% | 25% | 62% | 0.0327 | 0.0607 | Different from ordinary periods; price drop may be mechanical |

![HAE1T official announcements and abnormal returns](figures/stock_profiles/HAE1T_company_events.png?v=1792491521)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (31 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-23 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-6/2026](https://view.news.eu.nasdaq.com/view?id=bb831cad24851c6144aded6ae2f08ef94&lang=en&src=listed) | Open official announcement | -4.07% | -0.77% | -0.77% | 2.32% | -0.78% | No |
| 2026-05-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.25  | -4.48% | 1.08% | -0.72% | -1.81% | -0.84% | No |
| 2026-05-20 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.25  | -1.02% | 0.00% | -4.14% | -6.90% | -4.72% | Yes |
| 2026-05-15 07:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter Group](https://view.news.eu.nasdaq.com/view?id=bae459a0eaad19cfe634ddb1038133fa0&lang=en&src=listed) | Open official announcement | -0.68% | -0.34% | -4.76% | -7.82% | -4.32% | Yes |
| 2026-04-23 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-3/2026](https://view.news.eu.nasdaq.com/view?id=b716fc47c9b03923cb049b0354763075b&lang=en&src=listed) | Open official announcement | -5.35% | 0.35% | -0.35% | -2.12% | 0.47% | No |
| 2026-03-30 10:19 | Earnings | Unclassified earnings release | [ Harju Elekter Group's audited Annual Report 2025](https://view.news.eu.nasdaq.com/view?id=b16e68f9d00f673d1a748f0c16ad936ed&lang=en&src=listed) | Open official announcement | -1.39% | -1.41% | 3.87% | -0.70% | 2.94% | Yes |
| 2026-02-19 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-12/2025](https://view.news.eu.nasdaq.com/view?id=ba5b76fe3d4d742b568831b069e0e7219&lang=en&src=listed) | Open official announcement | 7.49% | -0.70% | -1.39% | 0.00% | -0.49% | Yes |
| 2025-10-30 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-9/2025](https://view.news.eu.nasdaq.com/view?id=bc1c7abe1bc0e479751af81366937d865&lang=en&src=listed) | Open official announcement | 1.74% | 0.43% | -0.21% | 0.43% | -0.03% | No |
| 2025-07-24 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-6/2025](https://view.news.eu.nasdaq.com/view?id=b5cda42db997f0911f76183be52252a1a&lang=en&src=listed) | Open official announcement | -0.83% | 0.00% | -0.63% | -1.26% | -0.72% | No |
| 2025-05-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | 0.42% | 0.00% | -1.26% | 1.05% | -1.25% | No |
| 2025-05-20 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | 0.82% | -3.27% | -3.47% | -4.29% | -3.40% | No |
| 2025-05-15 07:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter Group](https://view.news.eu.nasdaq.com/view?id=bdf92446b47cf58bee5ef2ab263b20805&lang=en&src=listed) | Open official announcement | 0.41% | 1.23% | -2.47% | -2.88% | -3.32% | Yes |
| 2025-04-24 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-3/2025](https://view.news.eu.nasdaq.com/view?id=bc6c53a85512ab746dde5bfb050e38c70&lang=en&src=listed) | Open official announcement | -0.43% | 0.00% | 3.00% | 2.15% | 0.88% | Yes |
| 2025-03-27 07:42 | Earnings | Unclassified earnings release | [CORRECTION: Harju Elekter Group's audited Annual Report 2024](https://view.news.eu.nasdaq.com/view?id=b11e03c6b7e0673dd5d7aa8beae40fac3&lang=en&src=listed) | Open official announcement | -0.33% | 0.65% | 2.39% | 0.87% | 2.11% | No |
| 2025-02-20 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-12/2024](https://view.news.eu.nasdaq.com/view?id=b84af3d8acaab4dd1af8ea0b3b48d7351&lang=en&src=listed) | Open official announcement | -4.67% | 0.00% | -3.83% | -2.87% | -3.97% | No |
| 2024-10-23 07:00 | Earnings | In line / unchanged | [Harju Elekter Group financial results, 1-9/2024](https://view.news.eu.nasdaq.com/view?id=bb119455ebab635b6f2e32dc644dc80c8&lang=en&src=listed) | Open official announcement | -2.64% | 0.54% | 0.00% | -0.22% | 0.14% | No |
| 2024-07-24 09:39 | Earnings | Higher profit | [Correction: Harju Elekter Group financial results, 1-6/2024](https://view.news.eu.nasdaq.com/view?id=b307d54534f45fe12d6e22747c131674d&lang=en&src=listed) | Open official announcement | 2.00% | -0.93% | -0.10% | -2.58% | 0.49% | No |
| 2024-05-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | 0.31% | 0.61% | -1.32% | -2.85% | -1.87% | No |
| 2024-05-20 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | 5.13% | -4.30% | -3.52% | -7.03% | -3.21% | Yes |
| 2024-05-15 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter Group](https://view.news.eu.nasdaq.com/view?id=b2fd0fc481cfc3c6944a0336a882a6ed9&lang=en&src=listed) | Open official announcement | 9.11% | -2.85% | -4.93% | -7.31% | -4.44% | Yes |
| 2024-04-24 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-3/2024](https://view.news.eu.nasdaq.com/view?id=bef401f55bedf01e88b6f0157cb805c90&lang=en&src=listed) | Open official announcement | 0.64% | 0.85% | 2.13% | 5.21% | 1.64% | No |
| 2024-03-27 08:00 | Earnings | Unclassified earnings release | [Harju Elekter Group's audited Annual Report 2023](https://view.news.eu.nasdaq.com/view?id=b5153c176e45f6bac6a736aa4db092119&lang=en&src=listed) | Open official announcement | -0.10% | -1.03% | -2.79% | -0.21% | -3.36% | No |
| 2024-02-21 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-12/2023](https://view.news.eu.nasdaq.com/view?id=b4991a9e6923ac426c1cbf6093fc3ff96&lang=en&src=listed) | Open official announcement | 0.92% | -0.41% | -1.02% | -2.13% | -2.05% | Yes |
| 2023-10-25 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-9/2023](https://view.news.eu.nasdaq.com/view?id=b9ddb78545746cb52528d3eddc3a542b5&lang=en&src=listed) | Open official announcement | 1.00% | -0.20% | -1.19% | -1.58% | -1.33% | Yes |
| 2023-07-26 07:30 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-6/2023](https://view.news.eu.nasdaq.com/view?id=b297fd4ab03daef223ea413c03b21db6c&lang=en&src=listed) | Open official announcement | 1.00% | 0.40% | 0.40% | 1.38% | 0.30% | No |
| 2023-05-24 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | 0.80% | -0.20% | 1.39% | -0.99% | 1.39% | Yes |
| 2023-05-16 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | -0.99% | -0.40% | 0.80% | 0.00% | 2.24% | No |
| 2023-05-11 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter](https://view.news.eu.nasdaq.com/view?id=b3df289f433e301fecf444e9bba4caa69&lang=en&src=listed) | Open official announcement | 0.60% | -0.20% | -0.60% | 0.00% | 0.82% | No |
| 2023-04-26 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-3/2023](https://view.news.eu.nasdaq.com/view?id=b6dfcac1dcf1cc683434ff289ddcc7829&lang=en&src=listed) | Open official announcement | 0.60% | 0.00% | 1.20% | 3.00% | 1.51% | Yes |
| 2023-03-29 10:43 | Earnings | Loss | [Harju Elekter Group's audited Annual Report 2022](https://view.news.eu.nasdaq.com/view?id=bb2a0fe1affe265877851169e13b0686d&lang=en&src=listed) | Open official announcement | -0.20% | 0.00% | 0.20% | 0.20% | 0.47% | No |
| 2023-02-22 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-12/2022](https://view.news.eu.nasdaq.com/view?id=bfd02efb5df051589dc2a76f464b5d956&lang=en&src=listed) | Open official announcement | -1.77% | 0.60% | 1.40% | 0.40% | 1.64% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (16 classified of 19 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 10 | 0.00% | 0.331 | 0.00% | 40% | 0.04% | 0.220 | 0.18% |
| Higher profit | 5d | 10 | 0.42% | 2.197 | 0.15% | 50% | 0.26% | 1.595 | 0.39% |
| Higher profit | 21d | 10 | 0.63% | 5.868 | 0.41% | 60% | 1.71% | 8.071 | 1.71% |
| Lower profit | 1d | 4 | -0.10% | 0.226 | 0.00% | 25% | -0.19% | 0.183 | -0.15% |
| Lower profit | 5d | 4 | -1.40% | 2.662 | -0.70% | 0% | -1.25% | 3.626 | -0.75% |
| Lower profit | 21d | 4 | -0.98% | 5.276 | -1.69% | 25% | -0.98% | 1.945 | -1.02% |
| In line / unchanged | 1d | 1 | 0.54% | — | 0.54% | 100% | 0.60% | — | 0.60% |
| In line / unchanged | 5d | 1 | 0.00% | — | 0.00% | 0% | 0.14% | — | 0.14% |
| In line / unchanged | 21d | 1 | -0.22% | — | -0.22% | 0% | 2.68% | — | 2.68% |
| Loss | 1d | 1 | 0.00% | — | 0.00% | 0% | -0.12% | — | -0.12% |
| Loss | 5d | 1 | 0.20% | — | 0.20% | 100% | 0.47% | — | 0.47% |
| Loss | 21d | 1 | 0.20% | — | 0.20% | 100% | 1.19% | — | 1.19% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 14 | 0.720 | 0.3961 | 0.6888 | No adjusted evidence |
| 5d | 2 | 14 | 2.420 | 0.1198 | 0.4170 | No adjusted evidence |
| 21d | 2 | 14 | 2.880 | 0.0897 | 0.4170 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![HAE1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/HAE1T_all_frontiers.png?v=1792486190)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.246414 | -0.309903 | M2Sortino | -0.017860 | -0.072074 |
| AdjustedSharpe | -0.057893 | -0.321064 | MSquaredExcess | -0.204243 | -0.242654 |
| AnnualizedReturn_Arithmetic | -0.008146 | -0.059614 | Martin | -0.156945 | -1.117513 |
| AnnualizedReturn_Geometric | -0.017725 | -0.072693 | MaximumDrawdown | 0.209400 | 0.135239 |
| Appraisal | -0.168881 | -0.234070 | Modigliani | -0.000041 | -0.000205 |
| ArithmeticReturn | -0.000032 | -0.000237 | NetSelectivity | -0.199798 | -0.346380 |
| AverageDrawdown | 0.058845 | 0.032257 | Omega | 0.988111 | 0.936887 |
| AverageDrawdownLength | 93.375000 | 15.125000 | OmegaExcessReturn | -0.052011 | -0.109853 |
| AverageRecoveryTime | 15.375000 | 4.000000 | PainIndex | 0.098550 | 0.047630 |
| BernardoLedoit | 0.988111 | 0.936887 | PainRatio | -0.179853 | -1.526195 |
| BetaCoKurtosis | 0.053440 | 0.011496 | Prospect | -0.572958 | -0.641539 |
| BetaCoSkewness | 0.134984 | 15.884029 | Rachev | 1.080200 | 1.141043 |
| Burke | -0.088405 | -0.738308 | Selectivity | -0.023582 | -0.041411 |
| CAPMAlpha | -0.000055 | -0.000119 | Sharpe_Annualized | -0.058271 | -0.333424 |
| CAPMBeta | 0.025615 | -0.131879 | Sharpe_Daily | -0.003671 | -0.021004 |
| CDD | 0.153779 | 0.071630 | Sharpe_ES | -0.001603 | -0.010348 |
| Calmar | -0.084644 | -0.537518 | Sharpe_VaR | -0.002878 | -0.016752 |
| CoKurtosis | 0.000000 | 0.000000 | Skewness | 0.500438 | 0.194003 |
| CoSkewness | 0.000000 | 0.000000 | Sortino | -0.005398 | -0.030835 |
| CumulativeReturn | -0.052102 | -0.037032 | SpecificRisk | 0.139638 | 0.176916 |
| DRatio | 1.154072 | 1.473980 | Sterling | -0.057287 | -0.309019 |
| DownCapture | 0.007906 | -0.130043 | SystematicRisk | 0.004498 | -0.020436 |
| DownNumber | 0.430818 | 0.358491 | TotalRisk | 0.139711 | 0.178092 |
| DownPercent | 0.823899 | 0.792453 | TrackingError_Annualized | 0.220906 | 0.249629 |
| DownsideDeviation | 0.005988 | 0.007672 | TrackingError_Daily | 0.013916 | 0.015725 |
| DrawdownDeviation | 0.009361 | 0.013210 | Treynor_Annualized | -0.691964 | 0.551214 |
| ES_Loss | 0.020168 | 0.022862 | Treynor_Daily | -0.002770 | 0.002271 |
| FamaBeta | 0.796163 | 1.153778 | UlcerIndex | 0.112935 | 0.065049 |
| GeometricReturn | -0.000071 | -0.000299 | UpCapture | -0.001326 | -0.158224 |
| Hurst | 0.386445 | 0.446875 | UpNumber | 0.373853 | 0.260274 |
| Information_Annualized | -1.115467 | -1.241453 | UpPercent | 0.176606 | 0.205479 |
| Information_Daily | -0.063852 | -0.072780 | UpsidePotential | 0.448649 | 0.457729 |
| JensenAlpha | -0.023582 | -0.041411 | UpsideRisk | 0.006450 | 0.008188 |
| Kappa | -0.003342 | -0.019715 | VaR_Loss | 0.011233 | 0.014122 |
| Kelly | -0.416803 | -1.864855 | Volatility | 0.008807 | 0.011263 |
| Kurtosis | 14.435639 | 8.675222 | Volatility_Annualized | 0.139804 | 0.178794 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.141945</td><td>-0.005829</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161638</td><td>0.000145</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>HAE1T shares</td><td>100</td><td>173</td><td>+73</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8303.579977</td><td>391.280010</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.440678</td><td>-0.016949</td></tr><tr><td>OUT</td><td>62</td><td>62</td><td>+0</td></tr><tr><td>IN</td><td>8</td><td>10</td><td>+2</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.070811</td><td>0.000639</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.090759</td><td>-0.000397</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 100 HAE1T shares. The scenario adds 73 shares from Table 3A, resulting in 173 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="HAE1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![HAE1T high-resolution stochastic dominance](figures/stock_profiles/HAE1T_FSD_SSD_TSD.png?v=1792486449)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-lhv1t" data-signal="HOLD">
<summary><strong>LHV1T — LHV Group</strong> | HOLD | target 65 shares | priority 19</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>65</td><td>+65</td><td>1.42%</td><td>EUR 3.2500</td><td>0.0678</td><td>32 / 24</td><td>35.02</td><td>Bearish</td><td>Inside bands</td><td>0.472 (Neutral)</td><td>HOLD</td><td>0.000201 (0.260% of portfolio HHI)</td><td>EUR 269,011</td><td>0.1%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![LHV1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/LHV1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 3.2500 | EUR 3.2447 | -0.16% | EUR 3.3083 | +1.79% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![LHV1T complete technical history](figures/technical_analysis/LHV1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![LHV1T return histogram](figures/stock_profiles/LHV1T_histogram.png?v=1792485733)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -18.99% (2024-12-04) | Average gain / average loss | 1.281 | Best 21-day period | 18.54% (ending 2025-02-17) |
| Average underwater drawdown | 11.37% | Upside potential ratio | 1.402 | Worst 21-day period | -9.62% (ending 2025-03-20) |
| Conditional drawdown 95% | 17.70% | Upside capture vs Baltic EW | 65.1% | Best 5-day period | 10.50% (ending 2023-01-16) |
| Ulcer index | 11.86 | Downside capture vs Baltic EW | 67.9% | Best 63-day period | 14.37% (ending 2025-02-17) |
| Longest underwater period | 1348 calendar days | Positive trading days | 36.9% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.545% | Best day | 4.62% (2025-11-27) |  |  |
| Daily upside deviation | 0.671% | Worst day | -3.86% (2023-03-13) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.088%); worst: Monday (-0.149%) | 0.0218 | 0.1527 | Not detected |
| Calendar month | Best: Jan (0.280% daily); worst: Apr (-0.132% daily) | 0.7419 | 0.8125 | Not detected |
| Turn of month | First/last three days: 0.009%; other days: -0.002% | 0.7294 | 0.9400 | Not detected |

![LHV1T seasonality, drawdowns and upside periods](figures/stock_profiles/LHV1T_seasonality.png?v=1792486409)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-06 | 2024-12-04 | Not recovered | -18.99% | 1348 |
| 2 | 2023-01-18 | 2023-01-19 | 2023-01-25 | -1.33% | 7 |
| 3 | 2023-01-16 | 2023-01-17 | 2023-01-18 | -0.80% | 2 |
| 4 | 2023-01-27 | 2023-01-30 | 2023-02-01 | -0.77% | 5 |
| 5 | 2023-02-02 | 2023-02-03 | 2023-02-06 | -0.76% | 4 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-01-17 | 2025-02-17 | 18.54% |
| 2 | 2023-01-04 | 2023-02-02 | 16.86% |
| 3 | 2025-04-23 | 2025-05-27 | 10.30% |
| 4 | 2025-11-26 | 2025-12-30 | 10.00% |
| 5 | 2023-12-04 | 2024-01-05 | 8.48% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (38 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.05% | -0.96% | -0.34% | 50% | 0% | 0.9679 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 4 | 0.53% | 0.51% | -0.29% | 75% | 25% | 0.7581 | 1.0000 | No adjusted statistical evidence |
| Earnings | 18 | 0.10% | -0.48% | -0.17% | 33% | 39% | 0.7581 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 7 | -1.01% | -2.55% | -1.90% | 0% | 43% | 0.0028 | 0.8481 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 5 | -0.32% | -1.06% | -1.98% | 40% | 40% | 0.9354 | 1.0000 | No adjusted statistical evidence |

![LHV1T official announcements and abnormal returns](figures/stock_profiles/LHV1T_company_events.png?v=1792491539)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (38 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-21 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q2 and 6 months of 2026](https://view.news.eu.nasdaq.com/view?id=b5f0850a5526b805746bd8b7edbdfe606&lang=en&src=listed) | Open official announcement | 0.15% | 0.15% | -0.15% | -0.30% | 0.26% | No |
| 2026-04-21 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q1 2026](https://view.news.eu.nasdaq.com/view?id=b0a6cc06f0c19abfeb82df9e95e9f5e47&lang=en&src=listed) | Open official announcement | -0.57% | -0.29% | -0.86% | -1.58% | -1.29% | No |
| 2026-04-15 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.17 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.17  | -2.37% | 0.14% | -0.57% | -4.72% | -0.74% | No |
| 2026-04-08 11:30 | Ex-dividend | — | [LHV Group Dividend Ex-date](https://view.news.eu.nasdaq.com/view?id=b2615213076cc5867bebf3c7f636bee5e&lang=en&src=listed) | Open official announcement | 1.12% | -3.19% | -2.91% | -6.66% | -4.16% | No |
| 2026-03-03 08:00 | Dividend announcement | — | [LHV Group 2025 Audited Annual Report and Dividend Proposal ](https://view.news.eu.nasdaq.com/view?id=b46fb951c491b1129ca89a245b7ed65cf&lang=en&src=listed) | Open official announcement | 1.41% | 0.83% | -0.97% | -1.25% | -0.87% | No |
| 2026-02-12 08:00 | Guidance | — | [LHV Group financial plan for 2026 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=b40694c02fa487537c9235734e3928bf8&lang=en&src=listed) | Open official announcement | -0.14% | 0.14% | -0.42% | -1.26% | -0.26% | No |
| 2026-02-10 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q4 and 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b0b40dcbae066e6f3b1484990c672e4a9&lang=en&src=listed) | Open official announcement | 0.84% | -0.55% | -1.25% | -1.25% | -2.07% | Yes |
| 2025-10-21 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q3 and nine months of 2025](https://view.news.eu.nasdaq.com/view?id=b3e66946e0035abf72541cd01019c8cc5&lang=en&src=listed) | Open official announcement | -1.62% | -0.75% | -0.45% | -2.25% | -0.57% | No |
| 2025-07-22 09:52 | Earnings | Higher profit | [Correction: LHV Group unaudited financial results for Q2 and 6 months of 2025](https://view.news.eu.nasdaq.com/view?id=b60ac050b3f4c327c2e31a8a2edc3a717&lang=en&src=listed) | Open official announcement | -0.55% | -0.28% | -0.97% | -0.83% | -1.13% | No |
| 2025-04-23 14:35 | Earnings | Higher profit | [Correction: LHV Group unaudited financial results for Q1 2025](https://view.news.eu.nasdaq.com/view?id=b7dc99cf1d3e90af6dd24c2052e32dcd6&lang=en&src=listed) | Open official announcement | -2.13% | 1.02% | 2.18% | 10.30% | 1.45% | Yes |
| 2025-04-22 08:00 | Earnings | Higher profit | [LHV Group unaudited financial results for Q1 2025](https://view.news.eu.nasdaq.com/view?id=b46ee475456697ea3278a9f32cfe4b011&lang=en&src=listed) | Open official announcement | -2.00% | 0.44% | 2.77% | 8.89% | 0.70% | No |
| 2025-04-10 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.09 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.09  | -7.96% | 3.08% | 2.64% | 8.94% | 0.63% | No |
| 2025-04-08 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.09 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.09  | -5.32% | 1.01% | 1.44% | 5.48% | -0.68% | Yes |
| 2025-04-04 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS LHV Group](https://view.news.eu.nasdaq.com/view?id=b5f41c38fb4bbeeac9818c08630c84a1b&lang=en&src=listed) | Open official announcement | -3.14% | -2.25% | -1.41% | 1.55% | -0.50% | No |
| 2025-03-04 08:00 | Dividend announcement | — | [LHV Group 2024 Audited Annual Report and Dividend Proposal](https://view.news.eu.nasdaq.com/view?id=b88fdcc164b794cbf946a7fdfb1ac5078&lang=en&src=listed) | Open official announcement | -2.38% | -0.54% | -2.98% | -1.36% | -4.40% | No |
| 2025-02-13 08:00 | Guidance | — | [LHV Group financial plan for 2025 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=b3020de946e7c20571035f57fe9517824&lang=en&src=listed) | Open official announcement | 8.62% | 0.00% | -3.77% | -9.36% | -3.71% | Yes |
| 2025-02-11 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q4 and 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=b86cf27b7b217aecfc80a7e97feeabd1f&lang=en&src=listed) | Open official announcement | 6.30% | 3.10% | 1.35% | -4.18% | 0.70% | Yes |
| 2024-10-22 08:00 | Earnings | Lower profit | [LHV Group's unaudited financial results for Q3 and nine months of 2024](https://view.news.eu.nasdaq.com/view?id=bfb9445de8172a293cea35905db3278f2&lang=en&src=listed) | Open official announcement | -1.86% | 1.46% | -0.73% | -3.50% | -1.00% | No |
| 2024-07-23 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q2 and 6 months of 2024](https://view.news.eu.nasdaq.com/view?id=b9dc72e51b275667d8a34e607e1f8d68a&lang=en&src=listed) | Open official announcement | 0.58% | 0.00% | 0.00% | -2.88% | 0.90% | No |
| 2024-04-23 08:00 | Earnings | Loss | [LHV Group unaudited financial results for Q1 2024](https://view.news.eu.nasdaq.com/view?id=b5fa1a20a54faf324f54dc2b35cd2fa05&lang=en&src=listed) | Open official announcement | 0.59% | 0.73% | 1.16% | 2.91% | 0.95% | No |
| 2024-04-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | -0.87% | 1.02% | 0.00% | -1.32% | 0.35% | No |
| 2024-04-04 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | -0.70% | -2.41% | -3.12% | -1.84% | -4.22% | Yes |
| 2024-04-01 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS LHV Group](https://view.news.eu.nasdaq.com/view?id=b679f5847fe396e2277d3680c9c27386e&lang=en&src=listed) | Open official announcement | -0.28% | 0.14% | -3.39% | -1.84% | -3.66% | Yes |
| 2024-02-27 08:00 | Dividend announcement | — | [LHV Group 2023 Audited Annual Report and Dividend Proposal](https://view.news.eu.nasdaq.com/view?id=bc5dc5642a30d48f4898fef4d6db5e0b4&lang=en&src=listed) | Open official announcement | -1.27% | 0.14% | 0.71% | 1.14% | 0.57% | No |
| 2024-02-13 08:00 | Guidance | — | [LHV Group financial plan for 2024 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=bc7bc788974449c1c0191a4bcb45591dd&lang=en&src=listed) | Open official announcement | -1.26% | 0.00% | 0.42% | -1.13% | 1.06% | No |
| 2024-02-06 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q4 and 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=bf44c78fdbd7664bc7a100abc09745eba&lang=en&src=listed) | Open official announcement | 1.70% | 1.12% | -1.26% | -2.23% | -1.42% | Yes |
| 2023-10-24 08:33 | Earnings | Higher profit | [Correction: LHV Group's unaudited financial results for Q3 and nine months of 2023](https://view.news.eu.nasdaq.com/view?id=bed808684cabc3b622a6cbdf8806c39f4&lang=en&src=listed) | Open official announcement | 0.28% | -0.14% | -1.26% | -3.07% | -1.03% | No |
| 2023-09-08 17:00 | Earnings | Unclassified earnings release | [Correction: LHV Group's unaudited financial results for Q2 and 6 months of 2023](https://view.news.eu.nasdaq.com/view?id=bcd8068b847afd1d0b2b9d1f073f0fdbc&lang=en&src=listed) | Open official announcement | 3.53% | -0.55% | -2.86% | -1.91% | -1.95% | Yes |
| 2023-07-18 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q2 and 6 months of 2023](https://view.news.eu.nasdaq.com/view?id=b607582df86739b1887d7099af170f24f&lang=en&src=listed) | Open official announcement | 0.83% | 1.37% | -0.55% | -1.10% | -0.41% | No |
| 2023-05-10 09:06 | Guidance | — | [Moody's raised outlook on LHV Pank's deposit ratings to positive](https://view.news.eu.nasdaq.com/view?id=b21ba41e2222ad99f80e3b92a92c1bdfe&lang=en&src=listed) | Open official announcement | 0.00% | -1.27% | -0.99% | 0.71% | 1.06% | No |
| 2023-04-18 08:00 | Earnings | Loss | [LHV Group unaudited financial results for Q1 2023](https://view.news.eu.nasdaq.com/view?id=bf46888a05c7be60a5152f4bc8d5c0469&lang=en&src=listed) | Open official announcement | 1.69% | -1.94% | -1.67% | -3.61% | -1.20% | Yes |
| 2023-04-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.04 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.04  | -2.07% | -0.99% | 1.69% | -2.26% | 1.80% | Yes |
| 2023-04-04 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.04 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.04  | -0.83% | -0.42% | -2.50% | -0.42% | -2.51% | No |
| 2023-03-31 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS LHV Group](https://view.news.eu.nasdaq.com/view?id=b4ab33a87c2406975bf6ee16bc4c16c40&lang=en&src=listed) | Open official announcement | -0.14% | -0.55% | -2.07% | -0.97% | -2.13% | No |
| 2023-03-22 16:40 | Earnings | Unclassified earnings release | [Changes in the Audit Commitee of LHV Group](https://view.news.eu.nasdaq.com/view?id=bf433722ee2a5c6e7702c251750cb8d24&lang=en&src=listed) | Open official announcement | -0.55% | 0.14% | -0.69% | -3.58% | -0.18% | No |
| 2023-02-28 08:00 | Dividend announcement | — | [LHV Group 2022 Audited Annual Report and Dividend Proposal](https://view.news.eu.nasdaq.com/view?id=be04b258ce01c78073610040e2cb1cce0&lang=en&src=listed) | Open official announcement | -0.53% | 1.61% | 1.07% | -3.22% | 0.86% | No |
| 2023-02-14 08:00 | Guidance | — | [LHV Group financial plan for 2023 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=bd3a56486ffc1e659e535c522e975b343&lang=en&src=listed) | Open official announcement | -1.03% | -1.82% | -3.91% | -5.34% | -3.43% | Yes |
| 2023-02-07 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q4 and 12 months of 2022](https://view.news.eu.nasdaq.com/view?id=b1076cc589f2e71bb856ba3b75e6e2d3b&lang=en&src=listed) | Open official announcement | -0.13% | -1.55% | -1.03% | -3.09% | -1.43% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (16 classified of 18 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 13 | 0.28% | 1.368 | 0.00% | 46% | 0.14% | 1.493 | -0.16% |
| Higher profit | 5d | 13 | -0.11% | 1.837 | -0.55% | 23% | -0.41% | 1.219 | -0.57% |
| Higher profit | 21d | 13 | -0.27% | 20.428 | -1.58% | 15% | -0.35% | 9.247 | -0.93% |
| Lower profit | 1d | 1 | 1.46% | — | 1.46% | 100% | 1.24% | — | 1.24% |
| Lower profit | 5d | 1 | -0.73% | — | -0.73% | 0% | -1.00% | — | -1.00% |
| Lower profit | 21d | 1 | -3.50% | — | -3.50% | 0% | -0.33% | — | -0.33% |
| Loss | 1d | 2 | -0.61% | 3.570 | -0.61% | 50% | -0.62% | 4.091 | -0.62% |
| Loss | 5d | 2 | -0.25% | 4.008 | -0.25% | 50% | -0.12% | 2.305 | -0.12% |
| Loss | 21d | 2 | -0.35% | 21.270 | -0.35% | 50% | 1.68% | 8.907 | 1.68% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 15 | 0.462 | 0.4969 | 0.7708 | No adjusted evidence |
| 5d | 2 | 15 | 0.260 | 0.6104 | 0.8057 | No adjusted evidence |
| 21d | 2 | 15 | 2.337 | 0.1264 | 0.4170 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![LHV1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/LHV1T_all_frontiers.png?v=1792486196)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.310261 | -0.406248 | M2Sortino | -0.083045 | -0.172547 |
| AdjustedSharpe | -0.479708 | 0.387719 | MSquaredExcess | -0.269998 | -0.397120 |
| AnnualizedReturn_Arithmetic | -0.075467 | -0.179830 | Martin | -0.370437 | -2.714696 |
| AnnualizedReturn_Geometric | -0.081572 | -0.169039 | MaximumDrawdown | 0.317810 | 0.109872 |
| Appraisal | -0.573439 | -1.576011 | Modigliani | -0.000378 | -0.001073 |
| ArithmeticReturn | -0.000299 | -0.000714 | NetSelectivity | -0.262590 | -0.326834 |
| AverageDrawdown | 0.069906 | 0.040304 | Omega | 0.901766 | 0.690329 |
| AverageDrawdownLength | 149.600000 | 30.750000 | OmegaExcessReturn | -0.114675 | -0.192733 |
| AverageRecoveryTime | 2.600000 | 3.500000 | PainIndex | 0.206536 | 0.050031 |
| BernardoLedoit | 0.901766 | 0.690329 | PainRatio | -0.394952 | -3.378700 |
| BetaCoKurtosis | -0.113239 | -0.010657 | Prospect | -0.710868 | -0.734706 |
| BetaCoSkewness | -3.835436 | 3.481287 | Rachev | 1.213892 | 0.865016 |
| Burke | -0.373845 | -2.494648 | Selectivity | -0.079647 | -0.161638 |
| CAPMAlpha | -0.000292 | -0.000686 | Sharpe_Annualized | -0.542953 | -1.744500 |
| CAPMBeta | -0.008419 | -0.031200 | Sharpe_Daily | -0.034203 | -0.109893 |
| CDD | 0.180859 | 0.084506 | Sharpe_ES | -0.016078 | -0.044190 |
| Calmar | -0.256669 | -1.538500 | Sharpe_VaR | -0.023678 | -0.069558 |
| CoKurtosis | -0.000000 | -0.000000 | Skewness | 0.734623 | 0.103992 |
| CoSkewness | -0.000001 | 0.000000 | Sortino | -0.051795 | -0.145875 |
| CumulativeReturn | -0.224773 | -0.088429 | SpecificRisk | 0.138893 | 0.102561 |
| DRatio | 1.524267 | 2.064235 | Sterling | -0.195237 | -0.805435 |
| DownCapture | -0.008574 | 0.037884 | SystematicRisk | -0.001478 | -0.004835 |
| DownNumber | 0.471698 | 0.509434 | TotalRisk | 0.138901 | 0.102675 |
| DownPercent | 0.789308 | 0.867925 | TrackingError_Annualized | 0.225105 | 0.190101 |
| DownsideDeviation | 0.005782 | 0.004892 | TrackingError_Daily | 0.014180 | 0.011975 |
| DrawdownDeviation | 0.011592 | 0.010383 | Treynor_Annualized | 9.689265 | 5.417857 |
| ES_Loss | 0.018626 | 0.016149 | Treynor_Daily | 0.040102 | 0.023543 |
| FamaBeta | 0.791547 | 0.665215 | UlcerIndex | 0.220205 | 0.062268 |
| GeometricReturn | -0.000338 | -0.000735 | UpCapture | -0.077199 | -0.136865 |
| Hurst | 0.340010 | 0.476136 | UpNumber | 0.339450 | 0.287671 |
| Information_Annualized | -1.378293 | -2.137007 | UpPercent | 0.149083 | 0.068493 |
| Information_Daily | -0.081465 | -0.131903 | UpsidePotential | 0.475464 | 0.325189 |
| JensenAlpha | -0.079647 | -0.161638 | UpsideRisk | 0.006574 | 0.004291 |
| Kappa | -0.036120 | -0.093454 | VaR_Loss | 0.012648 | 0.010259 |
| Kelly | -3.906329 | -16.923073 | Volatility | 0.008756 | 0.006494 |
| Kurtosis | 7.071013 | 12.400512 | Volatility_Annualized | 0.138993 | 0.103084 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148276</td><td>0.000503</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.162228</td><td>0.000736</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>LHV1T shares</td><td>0</td><td>65</td><td>+65</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8123.549967</td><td>211.250000</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.423729</td><td>-0.033898</td></tr><tr><td>OUT</td><td>62</td><td>60</td><td>-2</td></tr><tr><td>IN</td><td>8</td><td>10</td><td>+2</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.067756</td><td>-0.002417</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.090316</td><td>-0.000839</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 LHV1T shares. The scenario adds 65 shares from Table 3A, resulting in 65 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="LHV1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![LHV1T high-resolution stochastic dominance](figures/stock_profiles/LHV1T_FSD_SSD_TSD.png?v=1792486455)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-cpa1t" data-signal="HOLD">
<summary><strong>CPA1T — Coop Pank</strong> | HOLD | target 67 shares | priority 20</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>67</td><td>+67</td><td>1.06%</td><td>EUR 2.3500</td><td>0.0508</td><td>30 / 24</td><td>54.99</td><td>Bullish</td><td>Inside bands</td><td>0.829 (Overbought)</td><td>HOLD</td><td>0.000113 (0.145% of portfolio HHI)</td><td>EUR 78,808</td><td>0.2%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![CPA1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/CPA1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 2.3500 | EUR 2.2940 | -2.38% | EUR 2.3705 | +0.87% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![CPA1T complete technical history](figures/technical_analysis/CPA1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![CPA1T return histogram](figures/stock_profiles/CPA1T_histogram.png?v=1792485730)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -37.66% (2025-10-27) | Average gain / average loss | 1.206 | Best 21-day period | 23.44% (ending 2023-02-02) |
| Average underwater drawdown | 25.42% | Upside potential ratio | 1.339 | Worst 21-day period | -13.07% (ending 2023-05-25) |
| Conditional drawdown 95% | 37.17% | Upside capture vs Baltic EW | 79.7% | Best 5-day period | 8.80% (ending 2023-01-16) |
| Ulcer index | 26.75 | Downside capture vs Baltic EW | 83.9% | Best 63-day period | 20.46% (ending 2026-02-20) |
| Longest underwater period | 1352 calendar days | Positive trading days | 38.4% | Repeated calendar pattern | Jan: 100% positive across 4 years |
| Daily downside deviation | 0.628% | Best day | 4.84% (2026-01-22) |  |  |
| Daily upside deviation | 0.712% | Worst day | -3.82% (2023-03-13) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.145%); worst: Monday (-0.171%) | 0.0118 | 0.1354 | Not detected |
| Calendar month | Best: Jan (0.348% daily); worst: May (-0.207% daily) | 0.1570 | 0.3610 | Not detected |
| Turn of month | First/last three days: 0.010%; other days: -0.003% | 0.6546 | 0.9400 | Not detected |

![CPA1T seasonality, drawdowns and upside periods](figures/stock_profiles/CPA1T_seasonality.png?v=1792486421)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-02 | 2025-10-27 | Not recovered | -37.66% | 1352 |
| 2 | 2023-01-16 | 2023-01-24 | 2023-01-26 | -1.82% | 10 |
| 3 | 2023-01-03 | 2023-01-06 | 2023-01-09 | -1.52% | 6 |
| 4 | 2023-01-30 | 2023-01-31 | 2023-02-01 | -0.68% | 2 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-01-04 | 2023-02-02 | 23.44% |
| 2 | 2025-01-14 | 2025-02-12 | 17.48% |
| 3 | 2026-01-21 | 2026-02-20 | 12.35% |
| 4 | 2025-11-28 | 2026-01-06 | 12.21% |
| 5 | 2024-09-26 | 2024-10-25 | 11.86% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (41 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | -0.57% | -0.24% | -2.42% | 50% | 0% | 1.0000 | 0.7159 | No adjusted statistical evidence |
| Earnings | 23 | -0.05% | -0.77% | -1.10% | 30% | 48% | 0.3386 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -0.83% | -3.78% | -5.78% | 0% | 50% | 0.0000 | 0.0010 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 6 | -0.09% | 0.13% | -0.52% | 67% | 33% | 0.9354 | 1.0000 | No adjusted statistical evidence |

![CPA1T official announcements and abnormal returns](figures/stock_profiles/CPA1T_company_events.png?v=1792491542)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (41 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-09-10 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results for August 2026](https://view.news.eu.nasdaq.com/view?id=bcaab71b41648bc75d5453ed61d270d50&lang=en&src=listed) | Open official announcement | 1.50% | 0.42% | -0.42% | -0.63% | -0.97% | No |
| 2026-08-12 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results in July 2026](https://view.news.eu.nasdaq.com/view?id=b7ad600adc64dbaa93b25ce50856ce008&lang=en&src=listed) | Open official announcement | 0.87% | 0.86% | -0.22% | 2.15% | -0.27% | No |
| 2026-07-21 08:00 | Earnings | Higher profit | [Coop Pank AS unaudited financial results for Q2 2026](https://view.news.eu.nasdaq.com/view?id=bb85eab45575f1e03da45e8e198bd85d9&lang=en&src=listed) | Open official announcement | 0.22% | 0.43% | -0.65% | 0.87% | -0.24% | No |
| 2026-06-10 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results for May 2026](https://view.news.eu.nasdaq.com/view?id=b5ff7e4e0a4adbd32b2798024fda63a43&lang=en&src=listed) | Open official announcement | -0.88% | -0.22% | 0.44% | 2.66% | 1.31% | No |
| 2026-05-13 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results for April 2026](https://view.news.eu.nasdaq.com/view?id=b5c9a93ba80cca2ebe3d731aa0f86f2f3&lang=en&src=listed) | Open official announcement | 0.65% | -0.43% | -1.07% | -2.36% | -0.50% | Yes |
| 2026-05-12 22:30 | Guidance | — | [Moody's upgraded Coop Pank's long-term deposit rating to Baa1 and changed the outlook to stable](https://view.news.eu.nasdaq.com/view?id=b9a655283761156c2d85b8a4d33df76d4&lang=en&src=listed) | Open official announcement | 0.00% | 1.08% | 0.00% | -2.60% | 0.76% | No |
| 2026-04-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.065 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.065  | -2.92% | -0.65% | -0.65% | -1.08% | -0.55% | No |
| 2026-04-22 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2026](https://view.news.eu.nasdaq.com/view?id=b0563883e9925312e6610957485b88f46&lang=en&src=listed) | Open official announcement | -5.26% | -1.28% | -1.50% | -0.43% | -1.37% | No |
| 2026-04-21 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.065 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.065  | 2.33% | -1.65% | -4.55% | -4.75% | -4.68% | Yes |
| 2026-04-17 08:00 | Ex-dividend | — | [Dividend Payments ex-date of Coop Pank AS ](https://view.news.eu.nasdaq.com/view?id=b12312b13db6d5ac54ee1951367a6cc8f&lang=en&src=listed) | Open official announcement | 1.27% | 1.04% | -2.92% | -3.55% | -3.39% | Yes |
| 2026-03-11 14:00 | Earnings | Higher profit | [Coop Pank 2025 audited Annual Report](https://view.news.eu.nasdaq.com/view?id=b471d9d4a56852a40d28dd62d0b28292e&lang=en&src=listed) | Open official announcement | 0.45% | -0.67% | 1.11% | 5.35% | 0.58% | No |
| 2026-02-12 08:00 | Earnings | Lower profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b98c897d9b507b2bc2c8e12e70024935d&lang=en&src=listed) | Open official announcement | 3.51% | 0.68% | 4.98% | 2.71% | 5.14% | No |
| 2025-11-27 08:00 | Guidance | — | [Moody's affirms Coop Pank's ratings and positive outlook](https://view.news.eu.nasdaq.com/view?id=b6eef44f3f269f47f17446704c328a3df&lang=en&src=listed) | Open official announcement | 0.00% | -0.31% | 1.56% | 11.08% | 1.30% | Yes |
| 2025-10-22 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q3 2025](https://view.news.eu.nasdaq.com/view?id=b717ff075ed5449408bd2c48bce9c4d22&lang=en&src=listed) | Open official announcement | -0.31% | 0.00% | -0.21% | -0.10% | -0.12% | No |
| 2025-07-18 08:00 | Earnings | Unclassified earnings release | [Coop Pank unaudited financial results for Q2 2025](https://view.news.eu.nasdaq.com/view?id=b89fc07d4c5dcbcf33f84fb2f33d33916&lang=en&src=listed) | Open official announcement | 0.00% | -0.40% | -2.30% | -2.40% | -2.77% | Yes |
| 2025-05-06 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.07 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.07  | -1.17% | 0.94% | 1.65% | 1.42% | 0.04% | No |
| 2025-04-30 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.07 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.07  | 3.07% | -2.97% | -2.29% | -0.92% | -3.20% | No |
| 2025-04-28 16:30 | Ex-dividend | — | [Dividend Payments ex-date of Coop Pank AS](https://view.news.eu.nasdaq.com/view?id=b70262fb6d918b6ba8bab6bf261378bd6&lang=en&src=listed) | Open official announcement | 1.17% | 1.16% | -1.16% | 0.93% | -2.43% | No |
| 2025-04-23 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2025](https://view.news.eu.nasdaq.com/view?id=bbb5642fa5392e27df29e013b9455d65a&lang=en&src=listed) | Open official announcement | 0.70% | 1.40% | -1.17% | 1.63% | -1.89% | Yes |
| 2025-03-19 15:00 | Earnings | Higher profit | [Update: Coop Pank 2024 audited Annual Report ](https://view.news.eu.nasdaq.com/view?id=b3976e0e3d2e887f5f5f519e78c08043c&lang=en&src=listed) | Open official announcement | 0.49% | -0.24% | -1.94% | 3.39% | -1.89% | Yes |
| 2025-02-13 08:00 | Earnings | Lower profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=b21777ecde3493d0af1f630f86d2ac1f7&lang=en&src=listed) | Open official announcement | 5.76% | 0.00% | -6.75% | -10.02% | -6.69% | Yes |
| 2024-12-13 08:00 | Guidance | — | [Moody's affirms Coop Pank's ratings and changes outlook to positive ](https://view.news.eu.nasdaq.com/view?id=b053c986c811c4d63b4a8012d4fdd94b9&lang=en&src=listed) | Open official announcement | 1.75% | -1.23% | -2.41% | 6.14% | -1.18% | No |
| 2024-12-04 16:15 | Guidance | — | [Finantsinspektsioon confirmed the capital requirements and guidance of Coop Pank AS at the current level](https://view.news.eu.nasdaq.com/view?id=b26f835080e27f41d7cd1378ea4c75376&lang=en&src=listed) | Open official announcement | 0.81% | 0.50% | 0.30% | 0.40% | 0.33% | No |
| 2024-10-18 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q3 2024](https://view.news.eu.nasdaq.com/view?id=b7ef39da9a44d08908473da7ebb7c38c0&lang=en&src=listed) | Open official announcement | 3.83% | 0.97% | 5.34% | -4.76% | 4.60% | No |
| 2024-07-18 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q2 2024](https://view.news.eu.nasdaq.com/view?id=b07ae08886778ccbfc589a5fceb802376&lang=en&src=listed) | Open official announcement | 0.96% | -0.24% | -1.66% | -4.74% | -0.51% | Yes |
| 2024-05-07 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.087 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.087  | -3.55% | -0.22% | -1.73% | -6.71% | -0.57% | No |
| 2024-05-03 08:15 | Guidance | — | [The rating agency Moody's affirmed Coop Pank's Credit rating. Bank deposit rating remained on the level of Baa2 with stable outlook.](https://view.news.eu.nasdaq.com/view?id=b7a776e5c235ee822512ad884629ce5d2&lang=en&src=listed) | Open official announcement | -3.55% | -0.22% | -1.73% | -6.71% | -0.57% | No |
| 2024-05-02 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.087 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.087  | 1.05% | -2.28% | -3.94% | -10.37% | -4.20% | No |
| 2024-04-29 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of Coop Pank AS](https://view.news.eu.nasdaq.com/view?id=b2aa5cc2d885864014caf1b3e0aed1e3f&lang=en&src=listed) | Open official announcement | -0.62% | 0.42% | -3.75% | -9.58% | -4.28% | No |
| 2024-04-18 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2024](https://view.news.eu.nasdaq.com/view?id=b17493f0df15058c704f5cbe73ec295b3&lang=en&src=listed) | Open official announcement | 2.29% | -1.22% | -2.64% | -9.96% | -3.06% | Yes |
| 2024-03-20 12:59 | Earnings | Higher profit | [Coop Pank 2023 audited Annual Report](https://view.news.eu.nasdaq.com/view?id=bc735c49b05823bac01b7794965f8dcde&lang=en&src=listed) | Open official announcement | 0.43% | 2.54% | 0.00% | 2.33% | 1.01% | No |
| 2024-02-09 08:00 | Earnings | Higher profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=b53d1d7e14c98e9a09bdcec5c84c6d137&lang=en&src=listed) | Open official announcement | 0.82% | -0.81% | -3.64% | -4.86% | -3.14% | Yes |
| 2023-10-20 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q3 2023](https://view.news.eu.nasdaq.com/view?id=b49bb136d73e42764b382c2528433dfbc&lang=en&src=listed) | Open official announcement | -0.20% | 0.00% | 0.40% | -6.79% | 0.98% | No |
| 2023-07-20 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q2 2023](https://view.news.eu.nasdaq.com/view?id=bada171a7f982e5a472705651263e8566&lang=en&src=listed) | Open official announcement | -0.19% | -0.95% | -1.71% | -1.90% | -1.69% | Yes |
| 2023-06-08 08:00 | Guidance | — | [The rating agency Moody's affirmed Coop Pank's Credit rating. Bank deposit rating remained on the level of Baa2 with stable outlook.](https://view.news.eu.nasdaq.com/view?id=b754d7cbe907a0e32ecb382cbd34cafc8&lang=en&src=listed) | Open official announcement | -0.58% | 0.39% | 1.16% | -0.39% | 0.10% | Yes |
| 2023-05-03 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.045 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.045  | -4.10% | -0.89% | -0.36% | -6.77% | 0.11% | No |
| 2023-04-26 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.045 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.045  | -1.52% | -1.89% | -4.63% | -10.81% | -4.31% | Yes |
| 2023-04-24 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of Coop Pank AS](https://view.news.eu.nasdaq.com/view?id=b9dc8315a6a84e79fa5ad668cf591387a&lang=en&src=listed) | Open official announcement | 0.52% | -0.34% | -4.10% | -10.77% | -3.75% | Yes |
| 2023-04-20 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2023](https://view.news.eu.nasdaq.com/view?id=b6f8c9439bc0b41cb8380b497b3a9c0ba&lang=en&src=listed) | Open official announcement | 3.51% | -0.68% | -3.90% | -13.07% | -3.34% | Yes |
| 2023-03-15 14:01 | Earnings | Higher profit | [Coop Pank 2022 audited Annual Report](https://view.news.eu.nasdaq.com/view?id=b16dc8a32ddcf7341cbab6b0d062a7566&lang=en&src=listed) | Open official announcement | -3.18% | -0.14% | 0.86% | 3.78% | 0.70% | No |
| 2023-02-09 08:00 | Earnings | Higher profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2022](https://view.news.eu.nasdaq.com/view?id=bf1adb352326725d8ab53662af863536e&lang=en&src=listed) | Open official announcement | -0.13% | -1.31% | -3.28% | -6.43% | -3.56% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (22 classified of 23 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 20 | -0.08% | 0.949 | -0.23% | 30% | -0.08% | 1.071 | -0.27% |
| Higher profit | 5d | 20 | -0.79% | 4.178 | -0.86% | 25% | -0.67% | 3.856 | -0.50% |
| Higher profit | 21d | 20 | -1.69% | 23.867 | -0.53% | 40% | -0.82% | 17.099 | -0.73% |
| Lower profit | 1d | 2 | 0.34% | 0.230 | 0.34% | 50% | 0.33% | 0.580 | 0.33% |
| Lower profit | 5d | 2 | -0.89% | 68.810 | -0.89% | 50% | -0.78% | 69.972 | -0.78% |
| Lower profit | 21d | 2 | -3.65% | 81.112 | -3.65% | 50% | -3.06% | 99.220 | -3.06% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 22 | 0.639 | 0.4240 | 0.6996 | No adjusted evidence |
| 5d | 2 | 22 | 0.000 | 1.0000 | 1.0000 | No adjusted evidence |
| 21d | 2 | 22 | 0.052 | 0.8193 | 0.8449 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![CPA1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/CPA1T_all_frontiers.png?v=1792486198)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.272948 | -0.064245 | M2Sortino | -0.044567 | 0.173922 |
| AdjustedSharpe | -0.204274 | 1.095203 | MSquaredExcess | -0.226318 | -0.055438 |
| AnnualizedReturn_Arithmetic | -0.032938 | 0.172020 | Martin | -0.144765 | 3.082093 |
| AnnualizedReturn_Geometric | -0.044259 | 0.172964 | MaximumDrawdown | 0.385217 | 0.095833 |
| Appraisal | -0.364144 | 0.933702 | Modigliani | -0.000146 | 0.000665 |
| ArithmeticReturn | -0.000131 | 0.000683 | NetSelectivity | -0.249209 | -0.070356 |
| AverageDrawdown | 0.106368 | 0.031531 | Omega | 0.961795 | 1.218730 |
| AverageDrawdownLength | 187.000000 | 19.833333 | OmegaExcessReturn | -0.082018 | 0.144452 |
| AverageRecoveryTime | 45.000000 | 7.833333 | PainIndex | 0.281857 | 0.046338 |
| BernardoLedoit | 0.961795 | 1.218730 | PainRatio | -0.157027 | 3.732649 |
| BetaCoKurtosis | 0.012465 | 0.044152 | Prospect | -0.668262 | -0.546743 |
| BetaCoSkewness | -2.462721 | -3.788299 | Rachev | 1.161109 | 1.324196 |
| Burke | -0.164865 | 1.899189 | Selectivity | -0.057154 | 0.146982 |
| CAPMAlpha | -0.000180 | 0.000585 | Sharpe_Annualized | -0.209303 | 1.082193 |
| CAPMBeta | 0.056384 | 0.109533 | Sharpe_Daily | -0.013185 | 0.068172 |
| CDD | 0.275115 | 0.073944 | Sharpe_ES | -0.006038 | 0.038802 |
| Calmar | -0.114894 | 1.804845 | Sharpe_VaR | -0.008197 | 0.046516 |
| CoKurtosis | 0.000000 | 0.000000 | Skewness | 0.543429 | 1.109058 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | -0.019819 | 0.115963 |
| CumulativeReturn | -0.126674 | 0.083035 | SpecificRisk | 0.156953 | 0.157418 |
| DRatio | 1.342664 | 0.790136 | Sterling | -0.091215 | 0.883221 |
| DownCapture | 0.079258 | 0.122386 | SystematicRisk | 0.009901 | 0.016974 |
| DownNumber | 0.474843 | 0.490566 | TotalRisk | 0.157265 | 0.158330 |
| DownPercent | 0.764151 | 0.773585 | TrackingError_Annualized | 0.228303 | 0.209809 |
| DownsideDeviation | 0.006595 | 0.005887 | TrackingError_Daily | 0.014382 | 0.013217 |
| DrawdownDeviation | 0.014058 | 0.010072 | Treynor_Annualized | -0.784953 | 1.579098 |
| ES_Loss | 0.021647 | 0.017593 | Treynor_Daily | -0.003186 | 0.005782 |
| FamaBeta | 0.896196 | 1.025760 | UlcerIndex | 0.305731 | 0.056119 |
| GeometricReturn | -0.000180 | 0.000633 | UpCapture | 0.032163 | 0.256454 |
| Hurst | 0.327174 | 0.402710 | UpNumber | 0.373853 | 0.465753 |
| Information_Annualized | -1.195555 | -0.306208 | UpPercent | 0.213303 | 0.260274 |
| Information_Daily | -0.069339 | -0.016022 | UpsidePotential | 0.498935 | 0.646128 |
| JensenAlpha | -0.057154 | 0.146982 | UpsideRisk | 0.007394 | 0.008080 |
| Kappa | -0.014072 | 0.087119 | VaR_Loss | 0.015946 | 0.014675 |
| Kelly | -1.330014 | 6.808161 | Volatility | 0.009913 | 0.010013 |
| Kurtosis | 5.777861 | 6.852935 | Volatility_Annualized | 0.157369 | 0.158955 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148909</td><td>0.001135</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.162574</td><td>0.001082</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>CPA1T shares</td><td>0</td><td>67</td><td>+67</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8069.749960</td><td>157.449994</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.406780</td><td>-0.050847</td></tr><tr><td>OUT</td><td>62</td><td>60</td><td>-2</td></tr><tr><td>IN</td><td>8</td><td>12</td><td>+4</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.073798</td><td>0.003626</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.090358</td><td>-0.000798</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 CPA1T shares. The scenario adds 67 shares from Table 3A, resulting in 67 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="CPA1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![CPA1T high-resolution stochastic dominance](figures/stock_profiles/CPA1T_FSD_SSD_TSD.png?v=1792486441)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tve1t" data-signal="HOLD">
<summary><strong>TVE1T — Tallinna Vesi</strong> | HOLD | target 43 shares | priority 21</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>43</td><td>+43</td><td>3.11%</td><td>EUR 10.8500</td><td>0.0339</td><td>30 / 26</td><td>46.98</td><td>Bullish</td><td>Inside bands</td><td>0.486 (Neutral)</td><td>HOLD</td><td>0.000968 (1.248% of portfolio HHI)</td><td>EUR 14,562</td><td>3.2%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

![TVE1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TVE1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 10.8500 | EUR 10.7922 | -0.53% | EUR 10.9278 | +0.72% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![TVE1T complete technical history](figures/technical_analysis/TVE1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TVE1T return histogram](figures/stock_profiles/TVE1T_histogram.png?v=1792485730)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -24.32% (2024-09-05) | Average gain / average loss | 0.922 | Best 21-day period | 12.56% (ending 2025-05-20) |
| Average underwater drawdown | 17.55% | Upside potential ratio | 1.314 | Worst 21-day period | -8.86% (ending 2023-08-24) |
| Conditional drawdown 95% | 23.79% | Upside capture vs Baltic EW | 27.7% | Best 5-day period | 7.37% (ending 2025-05-20) |
| Ulcer index | 18.24 | Downside capture vs Baltic EW | 40.0% | Best 63-day period | 12.02% (ending 2025-06-04) |
| Longest underwater period | 1359 calendar days | Positive trading days | 29.3% | Repeated calendar pattern | Apr: 100% positive across 4 years |
| Daily downside deviation | 0.495% | Best day | 2.75% (2025-05-16) |  |  |
| Daily upside deviation | 0.417% | Worst day | -4.74% (2026-05-11) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.076%); worst: Monday (-0.103%) | 0.1686 | 0.3231 | Not detected |
| Calendar month | Best: Apr (0.138% daily); worst: Jun (-0.141% daily) | 0.5004 | 0.6394 | Not detected |
| Turn of month | First/last three days: 0.076%; other days: -0.036% | 0.0268 | 0.2058 | Not detected |

![TVE1T seasonality, drawdowns and upside periods](figures/stock_profiles/TVE1T_seasonality.png?v=1792486401)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-01-26 | 2024-09-05 | Not recovered | -24.32% | 1359 |
| 2 | 2023-01-04 | 2023-01-05 | 2023-01-06 | -0.31% | 2 |
| 3 | 2023-01-16 | 2023-01-17 | 2023-01-18 | -0.31% | 2 |
| 4 | 2023-01-20 | 2023-01-23 | 2023-01-24 | -0.30% | 4 |
| 5 | 2023-01-10 | 2023-01-11 | 2023-01-16 | -0.16% | 6 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-04-14 | 2025-05-20 | 12.56% |
| 2 | 2025-12-03 | 2026-01-09 | 6.60% |
| 3 | 2025-01-13 | 2025-02-11 | 4.90% |
| 4 | 2024-04-04 | 2024-05-07 | 4.85% |
| 5 | 2026-05-21 | 2026-06-19 | 4.57% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (33 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.21% | 0.48% | 3.86% | 50% | 25% | 1.0000 | 0.0098 | Different from ordinary periods |
| Dividend payment | 4 | 0.36% | -0.21% | 1.49% | 25% | 0% | 1.0000 | 0.3698 | No adjusted statistical evidence |
| Earnings | 17 | -0.12% | -0.40% | -0.28% | 35% | 29% | 0.6868 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.95% | -4.20% | -4.45% | 0% | 75% | 0.0000 | 0.0006 | Different from ordinary periods; price drop may be mechanical |

![TVE1T official announcements and abnormal returns](figures/stock_profiles/TVE1T_company_events.png?v=1792491534)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (33 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-31 09:00 | Earnings | Loss | [Tallinna Vesi's second-quarter sales reached €18.6 million](https://view.news.eu.nasdaq.com/view?id=bc718794d6dbe84ad45a934e5ad7bc4ba&lang=en&src=listed) | SALES; €18.6 million | -1.35% | 0.00% | 0.91% | -1.36% | 0.74% | No |
| 2026-05-20 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.57 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.57  | -0.90% | 0.00% | -0.46% | 2.74% | -1.04% | No |
| 2026-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.57 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.57  | 0.00% | -4.74% | -5.17% | -5.60% | -4.63% | Yes |
| 2026-05-08 09:00 | Earnings | Higher profit | [Tallinna Vesi´s first-quarter sales amounted to €17.99 million](https://view.news.eu.nasdaq.com/view?id=b5e239c2d9b9577ef3a1627e017541a66&lang=en&src=listed) | SALES; €17.99 million | 0.00% | -4.74% | -5.17% | -5.60% | -4.63% | Yes |
| 2026-05-07 12:15 | Ex-dividend | — | [Dividend payment ex-date of Aktsiaselts Tallinna Vesi](https://view.news.eu.nasdaq.com/view?id=b0780cf2ffcb34c7de1e7bfae7e21504d&lang=en&src=listed) | Open official announcement | 1.30% | -0.43% | -5.58% | -6.01% | -4.51% | Yes |
| 2026-03-27 13:30 | Dividend announcement | — | [Tallinna Vesi's Supervisory Council approved the annual report for 2025 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=bfc9341638b9f7cc55cc5a86a4fefb055&lang=en&src=listed) | Open official announcement | -0.44% | 0.00% | 0.45% | 3.57% | 0.53% | No |
| 2026-02-06 09:10 | Earnings | Higher profit | [Tallinna Vesi's fourth-quarter sales reached €18.9 million](https://view.news.eu.nasdaq.com/view?id=b08111d407a50a53faff55a084269d13a&lang=en&src=listed) | SALES; €18.9 million | 0.45% | -0.44% | 0.00% | 0.44% | -0.83% | No |
| 2025-10-31 09:00 | Earnings | Higher profit | [Tallinna Vesi's third-quarter sales reached €18.2 million](https://view.news.eu.nasdaq.com/view?id=be32bf71985847591ba9e707f46784889&lang=en&src=listed) | SALES; €18.2 million | 0.00% | 0.47% | 0.00% | 0.00% | 0.36% | No |
| 2025-08-01 09:00 | Earnings | Higher profit | [Tallinna Vesi's second-quarter sales reached €19.4 million](https://view.news.eu.nasdaq.com/view?id=b75ece621daf51fb38a0cb906ad258065&lang=en&src=listed) | SALES; €19.4 million | 0.00% | 0.00% | 0.47% | 0.47% | 0.41% | No |
| 2025-06-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.53 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.53  | -4.50% | 1.42% | 0.94% | 0.94% | 0.87% | No |
| 2025-06-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.53 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.53  | 0.87% | -4.72% | -8.58% | -8.58% | -8.21% | Yes |
| 2025-06-04 14:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallinna Vesi](https://view.news.eu.nasdaq.com/view?id=b7fc145c26f5c31a1fd315f8179cd3887&lang=en&src=listed) | Open official announcement | 0.87% | -0.43% | -5.58% | -8.15% | -5.11% | Yes |
| 2025-05-02 15:42 | Earnings | Unclassified earnings release | [Further information in regards to AS Tallinna Vesi annual ESEF report for 2024](https://view.news.eu.nasdaq.com/view?id=b5222747ae060ab769a2213e5d9745ae4&lang=en&src=listed) | Open official announcement | 1.41% | 0.00% | 0.46% | 7.87% | -1.15% | No |
| 2025-04-30 16:55 | Dividend announcement | — | [Correction: Tallinna Vesi's Supervisory Council approved the annual report for 2024 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=b31c835e1636984d01047694381fd282b&lang=en&src=listed) | Open official announcement | 1.41% | 0.00% | 0.46% | 7.87% | -1.15% | No |
| 2025-04-25 11:04 | Dividend announcement | — | [Tallinna Vesi's Supervisory Council approved the annual report for 2024 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=b981566d8e73d5c882f2602ab485f0548&lang=en&src=listed) | Open official announcement | 2.88% | 0.47% | 0.47% | 7.94% | -1.02% | No |
| 2025-04-25 09:00 | Earnings | Lower profit | [Tallinna Vesi's first-quarter sales were €16 million](https://view.news.eu.nasdaq.com/view?id=bd6250bf0f2e06780e1c2e808e8cdd963&lang=en&src=listed) | SALES; €16 million | 2.88% | 0.47% | 0.47% | 7.94% | -1.02% | No |
| 2025-02-07 09:00 | Earnings | Higher profit | [Tallinna Vesi's fourth-quarter sales were €17.67 million](https://view.news.eu.nasdaq.com/view?id=b92fd07da7fc71a11f595ec97f72df1b4&lang=en&src=listed) | SALES; €17.67 million | 2.94% | 1.90% | 0.95% | -1.90% | -0.36% | No |
| 2024-11-01 09:00 | Earnings | Higher profit | [Tallinna Vesi's third-quarter sales were €16.22 million](https://view.news.eu.nasdaq.com/view?id=bc7a73cb35c611a9546d9088808ab45ed&lang=en&src=listed) | SALES; €16.22 million | 1.47% | -0.97% | -1.45% | -2.42% | -1.28% | Yes |
| 2024-08-02 09:00 | Earnings | Higher profit | [Tallinna Vesi's second-quarter sales were €15.5 million](https://view.news.eu.nasdaq.com/view?id=b2f76a4a9380a8badb0fe2de833abe7dd&lang=en&src=listed) | SALES; €15.5 million | 0.00% | -0.97% | -0.97% | -1.94% | -0.02% | No |
| 2024-06-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.51 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.51  | -0.49% | 0.00% | 0.00% | 0.49% | -0.15% | No |
| 2024-06-18 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.51 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.51  | 0.00% | -4.19% | -3.72% | -4.19% | -2.99% | No |
| 2024-06-14 10:01 | Ex-dividend | — | [Dividend payment ex-date of Aktsiaselts Tallinna Vesi](https://view.news.eu.nasdaq.com/view?id=bae14d7c7cdb5a8978d02d25ee7dfd977&lang=en&src=listed) | Open official announcement | 0.47% | -0.46% | -3.70% | -5.09% | -3.46% | Yes |
| 2024-05-03 09:00 | Earnings | Lower profit | [Tallinna Vesi's first-quarter sales revenue increased to €14.94 million](https://view.news.eu.nasdaq.com/view?id=bfa405fa729045e132a6c7dc0f05d0d05&lang=en&src=listed) | REVENUE; SALES; €14.94 million | 1.90% | 0.93% | 1.87% | 0.47% | 3.03% | No |
| 2024-04-05 09:00 | Dividend announcement | — | [Tallinna Vesi´s Supervisory Council approved the financial results for 2023 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=b1935169a25aaf1c99b9110b9d20cc347&lang=en&src=listed) | Open official announcement | 0.49% | 0.00% | 3.38% | 4.35% | 3.57% | Yes |
| 2024-02-02 09:15 | Earnings | Higher profit | [Tallinna Vesi's fourth quarter sales were €15.52 million](https://view.news.eu.nasdaq.com/view?id=b730f735504dc543c9805e75bb255071b&lang=en&src=listed) | SALES; €15.52 million | 0.00% | 1.42% | 0.94% | -0.47% | 0.76% | No |
| 2023-10-27 09:00 | Earnings | Higher profit | [Tallinna Vesi's sales revenue in the third quarter increased to €15.61 million](https://view.news.eu.nasdaq.com/view?id=bdbf18b3a7d2ba1d2185743ad1d0ba86e&lang=en&src=listed) | REVENUE; SALES; €15.61 million | -0.92% | 0.00% | 1.86% | 0.00% | 2.35% | Yes |
| 2023-07-28 09:00 | Earnings | Higher profit | [Tallinna Vesi increased its sales and profit in the second quarter](https://view.news.eu.nasdaq.com/view?id=b3dd463347c1d508bc837ae93b8ca9d47&lang=en&src=listed) | PROFIT; SALES | 0.85% | 0.00% | -1.27% | -7.17% | -1.52% | Yes |
| 2023-06-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.33 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.33  | -0.84% | 0.43% | 0.00% | 0.85% | -0.51% | No |
| 2023-06-19 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.33 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.33  | -0.82% | -1.66% | -2.49% | -2.49% | -2.12% | No |
| 2023-05-09 09:00 | Ex-dividend | — | [AS Tallinna Vesi 2022 dividend proposal and ex-dividend date](https://view.news.eu.nasdaq.com/view?id=b5611582620eb90215900f79568a20b26&lang=en&src=listed) | Open official announcement | -1.16% | 0.00% | -3.53% | -5.10% | -2.53% | Yes |
| 2023-04-28 09:00 | Earnings | Higher profit | [AS Tallinna Vesi's financial results for the first quarter of 2023](https://view.news.eu.nasdaq.com/view?id=b842f4f8564d4e8f07aed813461ad5344&lang=en&src=listed) | Open official announcement | -0.39% | 0.78% | -1.16% | -6.98% | -1.14% | Yes |
| 2023-03-31 17:18 | Earnings | Lower profit | [Correction: AS Tallinna Vesi Supervisory Council confirmed financial results for 2022](https://view.news.eu.nasdaq.com/view?id=b97b5b525072f6ce9d1beaa8850980816&lang=en&src=listed) | Open official announcement | -0.16% | -0.32% | -1.50% | 3.24% | -1.56% | No |
| 2023-01-27 09:11 | Earnings | Lower profit | [AS Tallinna Vesi's financial results for the 4th quarter of 2022](https://view.news.eu.nasdaq.com/view?id=bbb29c002ab1ef75bbcdd0a8f13bd142c&lang=en&src=listed) | Open official announcement | -1.07% | -0.46% | -0.46% | -1.69% | -1.02% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (16 classified of 17 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 11 | -0.23% | 3.041 | 0.00% | 36% | -0.05% | 3.211 | 0.01% |
| Higher profit | 5d | 11 | -0.53% | 3.518 | 0.00% | 36% | -0.54% | 3.072 | -0.36% |
| Higher profit | 21d | 11 | -2.32% | 8.596 | -1.90% | 18% | -1.47% | 7.600 | -0.51% |
| Lower profit | 1d | 4 | 0.16% | 0.436 | 0.08% | 50% | 0.00% | 0.398 | -0.15% |
| Lower profit | 5d | 4 | 0.09% | 2.050 | 0.00% | 50% | -0.14% | 4.535 | -1.02% |
| Lower profit | 21d | 4 | 2.49% | 17.299 | 1.86% | 75% | 1.95% | 12.822 | 2.74% |
| Loss | 1d | 1 | 0.00% | — | 0.00% | 0% | -0.12% | — | -0.12% |
| Loss | 5d | 1 | 0.91% | — | 0.91% | 100% | 0.74% | — | 0.74% |
| Loss | 21d | 1 | -1.36% | — | -1.36% | 0% | -1.55% | — | -1.55% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 15 | 0.426 | 0.5139 | 0.7708 | No adjusted evidence |
| 5d | 2 | 15 | 0.068 | 0.7940 | 0.8449 | No adjusted evidence |
| 21d | 2 | 15 | 3.341 | 0.0676 | 0.4170 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TVE1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TVE1T_all_frontiers.png?v=1792486194)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.308852 | -0.281897 | M2Sortino | -0.082400 | -0.045321 |
| AdjustedSharpe | -0.702177 | -0.447337 | MSquaredExcess | -0.296295 | -0.249680 |
| AnnualizedReturn_Arithmetic | -0.078108 | -0.041014 | Martin | -0.317624 | -1.452294 |
| AnnualizedReturn_Geometric | -0.080163 | -0.044688 | MaximumDrawdown | 0.297838 | 0.064569 |
| Appraisal | -0.830607 | -0.532081 | Modigliani | -0.000523 | -0.000261 |
| ArithmeticReturn | -0.000310 | -0.000163 | NetSelectivity | -0.215591 | -0.192535 |
| AverageDrawdown | 0.077168 | 0.013045 | Omega | 0.853972 | 0.903435 |
| AverageDrawdownLength | 187.000000 | 11.444444 | OmegaExcessReturn | -0.109970 | -0.069612 |
| AverageRecoveryTime | 102.500000 | 3.777778 | PainIndex | 0.235070 | 0.022343 |
| BernardoLedoit | 0.853972 | 0.903435 | PainRatio | -0.341015 | -2.000040 |
| BetaCoKurtosis | 0.024684 | 0.026251 | Prospect | -0.569150 | -0.441041 |
| BetaCoSkewness | 0.061649 | 11.547958 | Rachev | 0.767831 | 0.729913 |
| Burke | -0.412768 | -0.751080 | Selectivity | -0.086229 | -0.051138 |
| CAPMAlpha | -0.000333 | -0.000187 | Sharpe_Annualized | -0.751125 | -0.424635 |
| CAPMBeta | 0.026526 | 0.027194 | Sharpe_Daily | -0.047316 | -0.026750 |
| CDD | 0.195220 | 0.020919 | Sharpe_ES | -0.017767 | -0.010812 |
| Calmar | -0.269148 | -0.692092 | Sharpe_VaR | -0.032181 | -0.018572 |
| CoKurtosis | 0.000000 | 0.000000 | Skewness | -1.446544 | -3.657486 |
| CoSkewness | 0.000000 | 0.000000 | Sortino | -0.059534 | -0.031628 |
| CumulativeReturn | -0.221208 | -0.022599 | SpecificRisk | 0.103814 | 0.096110 |
| DRatio | 1.203830 | 1.006260 | Sterling | -0.201495 | -0.271543 |
| DownCapture | 0.049120 | 0.019848 | SystematicRisk | 0.004658 | 0.004214 |
| DownNumber | 0.320755 | 0.283019 | TotalRisk | 0.103919 | 0.096202 |
| DownPercent | 0.823899 | 0.811321 | TrackingError_Annualized | 0.200029 | 0.178987 |
| DownsideDeviation | 0.005206 | 0.005146 | TrackingError_Daily | 0.012601 | 0.011275 |
| DrawdownDeviation | 0.010849 | 0.006039 | Treynor_Annualized | -3.022038 | -1.643297 |
| ES_Loss | 0.017445 | 0.015053 | Treynor_Daily | -0.012498 | -0.006671 |
| FamaBeta | 0.592195 | 0.623278 | UlcerIndex | 0.252382 | 0.030770 |
| GeometricReturn | -0.000332 | -0.000181 | UpCapture | -0.033885 | -0.022344 |
| Hurst | 0.366349 | 0.476392 | UpNumber | 0.284404 | 0.273973 |
| Information_Annualized | -1.544032 | -1.574955 | UpPercent | 0.121560 | 0.082192 |
| Information_Daily | -0.091195 | -0.091035 | UpsidePotential | 0.348158 | 0.295903 |
| JensenAlpha | -0.086229 | -0.051138 | UpsideRisk | 0.003981 | 0.003205 |
| Kappa | -0.035953 | -0.016776 | VaR_Loss | 0.009632 | 0.008763 |
| Kelly | -7.223233 | -4.396474 | Volatility | 0.006551 | 0.006084 |
| Kurtosis | 13.475446 | 30.337179 | Volatility_Annualized | 0.103987 | 0.096585 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.796610</td><td>-0.016949</td></tr><tr><td>OUT</td><td>96</td><td>94</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.140537</td><td>-0.007236</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.163699</td><td>0.002207</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TVE1T shares</td><td>0</td><td>43</td><td>+43</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>8378.849983</td><td>466.550016</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.449153</td><td>-0.008475</td></tr><tr><td>OUT</td><td>62</td><td>62</td><td>+0</td></tr><tr><td>IN</td><td>8</td><td>9</td><td>+1</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.073171</td><td>0.002998</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.088386</td><td>-0.002770</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 TVE1T shares. The scenario adds 43 shares from Table 3A, resulting in 43 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="TVE1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TVE1T high-resolution stochastic dominance](figures/stock_profiles/TVE1T_FSD_SSD_TSD.png?v=1792486477)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-saf1r" data-signal="HOLD">
<summary><strong>SAF1R — SAF Tehnika</strong> | HOLD | target 100 shares | priority 22</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>100</td><td>100</td><td>+0</td><td>10.90%</td><td>EUR 16.3500</td><td>-0.1186</td><td>12 / 26</td><td>45.55</td><td>Bearish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>HOLD</td><td>0.011881 (15.322% of portfolio HHI)</td><td>EUR 7,531</td><td>0.0%</td><td>2.4%</td><td>MEDIUM</td></tr></tbody></table>

![SAF1R Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/SAF1R_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 16.3500 | EUR 16.0810 | -1.65% | EUR 17.2490 | +5.50% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![SAF1R complete technical history](figures/technical_analysis/SAF1R_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![SAF1R return histogram](figures/stock_profiles/SAF1R_histogram.png?v=1792485732)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -68.54% (2024-09-02) | Average gain / average loss | 1.169 | Best 21-day period | 40.17% (ending 2026-08-26) |
| Average underwater drawdown | 42.81% | Upside potential ratio | 1.162 | Worst 21-day period | -33.33% (ending 2023-11-13) |
| Conditional drawdown 95% | 65.78% | Upside capture vs Baltic EW | 99.5% | Best 5-day period | 25.62% (ending 2026-02-12) |
| Ulcer index | 46.60 | Downside capture vs Baltic EW | 66.2% | Best 63-day period | 70.30% (ending 2026-02-12) |
| Longest underwater period | 1288 calendar days | Positive trading days | 37.4% | Repeated calendar pattern | Jan: 75% positive across 4 years |
| Daily downside deviation | 1.385% | Best day | 20.83% (2026-02-12) |  |  |
| Daily upside deviation | 1.578% | Worst day | -18.64% (2023-11-09) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Tuesday (0.269%); worst: Thursday (-0.184%) | 0.4478 | 0.5149 | Not detected |
| Calendar month | Best: Jan (0.459% daily); worst: Nov (-0.409% daily) | 0.2932 | 0.4816 | Not detected |
| Turn of month | First/last three days: 0.014%; other days: 0.058% | 0.8176 | 0.9400 | Not detected |

![SAF1R seasonality, drawdowns and upside periods](figures/stock_profiles/SAF1R_seasonality.png?v=1792486379)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-08 | 2024-09-02 | 2026-08-19 | -68.54% | 1288 |
| 2 | 2026-09-08 | 2026-09-28 | Not recovered | -10.36% | 38 |
| 3 | 2023-02-01 | 2023-02-02 | 2023-02-06 | -1.75% | 5 |
| 4 | 2023-01-27 | 2023-01-30 | 2023-01-31 | -1.06% | 4 |
| 5 | 2026-08-27 | 2026-08-31 | 2026-09-01 | -0.87% | 5 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2026-07-27 | 2026-08-26 | 40.17% |
| 2 | 2026-01-14 | 2026-02-12 | 37.91% |
| 3 | 2024-09-02 | 2024-10-01 | 25.39% |
| 4 | 2026-04-14 | 2026-05-18 | 23.08% |
| 5 | 2025-11-28 | 2026-01-06 | 19.43% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (19 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Earnings | 19 | -0.72% | -2.07% | -0.49% | 42% | 47% | 0.3662 | 1.0000 | No adjusted statistical evidence |

![SAF1R official announcements and abnormal returns](figures/stock_profiles/SAF1R_company_events.png?v=1792491515)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (19 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-12 19:40 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2025/26](https://view.news.eu.nasdaq.com/view?id=b6dbfb705adc56a5a2d8212074bd9a9c4&lang=en&src=listed) | Open official announcement | 2.33% | 6.44% | 11.74% | 31.06% | 11.68% | No |
| 2026-05-13 17:12 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2025/2026](https://view.news.eu.nasdaq.com/view?id=bf23fdbdcd9a33ae254b37b9dab7f3fa5&lang=en&src=listed) | Open official announcement | 8.37% | 10.40% | 3.96% | 8.91% | 4.53% | Yes |
| 2026-02-11 16:52 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2025/26](https://view.news.eu.nasdaq.com/view?id=b02ed5558ff45d9e37e3a2570ce3084c4&lang=en&src=listed) | Open official announcement | 5.26% | 20.83% | 18.57% | 18.57% | 17.77% | Yes |
| 2025-11-13 13:55 | Earnings | In line / unchanged | [CORRECTION: SAF Tehnika Consolidated Interim Report for Q1 of financial year 2025/2026](https://view.news.eu.nasdaq.com/view?id=b35a4318c79efa3a19972b4f3129552fb&lang=en&src=listed) | Open official announcement | 7.67% | 4.33% | -0.93% | 7.43% | 0.15% | No |
| 2025-11-12 16:33 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q1 of financial year 2025/2026](https://view.news.eu.nasdaq.com/view?id=b540077f1991eacad050b6e33e4250b95&lang=en&src=listed) | Open official announcement | 7.38% | 0.94% | 0.31% | 2.50% | 0.71% | No |
| 2025-10-31 16:24 | Earnings | Loss | [Audited statements and Corporate Governance report of „SAF Tehnika” for financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=b98de5f8c40da1022d780a90eb945a16c&lang=en&src=listed) | Open official announcement | 0.00% | -0.34% | 1.02% | 8.14% | 1.38% | No |
| 2025-08-13 17:24 | Earnings | Loss | [SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=bb1bdf4aecccec00ce5e71431676f8dab&lang=en&src=listed) | Open official announcement | -0.34% | -2.69% | -3.37% | -4.04% | -3.24% | No |
| 2025-05-14 16:32 | Earnings | Loss | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=bef9af568b7d0e6b2e4eab137fd651d80&lang=en&src=listed) | Open official announcement | 2.65% | -0.97% | -1.29% | -3.55% | -2.52% | Yes |
| 2025-02-12 20:31 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=b878f717c62e3ac66ead34aa7f7405e49&lang=en&src=listed) | Open official announcement | 14.38% | -11.70% | -9.36% | -4.39% | -9.29% | Yes |
| 2024-11-13 16:12 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q1 of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=b26ad79c70b2d7497662066f4c625dcd2&lang=en&src=listed) | Open official announcement | -2.60% | 9.16% | 7.63% | 1.15% | 8.42% | Yes |
| 2024-10-31 17:07 | Earnings | Lower profit | [SAF Tehnika Annual report/ annual accounts](https://view.news.eu.nasdaq.com/view?id=b44739b9bbbc6603729654ab15873e65f&lang=en&src=listed) | Open official announcement | -3.65% | -3.03% | 2.27% | 5.30% | 2.44% | Yes |
| 2024-08-15 08:17 | Earnings | Unclassified earnings release | [CORRECTION: SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2023/24](https://view.news.eu.nasdaq.com/view?id=b9ab59f7e88006865d1f036d745bdfe49&lang=en&src=listed) | Open official announcement | 4.08% | -4.12% | -5.29% | -1.96% | -5.02% | Yes |
| 2024-05-15 18:39 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2023/24](https://view.news.eu.nasdaq.com/view?id=bccb21f99dda64f7127d52fdefd06fffb&lang=en&src=listed) | Open official announcement | -5.32% | -5.26% | -4.56% | -1.75% | -4.07% | Yes |
| 2024-02-07 16:10 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2023/2024](https://view.news.eu.nasdaq.com/view?id=b933e6fc3d29593875f2b783771aec234&lang=en&src=listed) | Open official announcement | 2.98% | 0.87% | -2.31% | -4.05% | -2.84% | Yes |
| 2023-11-08 17:54 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q1 of financial year 2023/2024](https://view.news.eu.nasdaq.com/view?id=bd38500cc9d337eec761580c66addb075&lang=en&src=listed) | Open official announcement | -0.48% | -18.64% | -28.54% | -31.84% | -27.66% | No |
| 2023-10-31 17:09 | Earnings | Unclassified earnings release | [SAF Tehnika Annual report/ annual accounts](https://view.news.eu.nasdaq.com/view?id=b879ddaf736be7655aab019ff280cc43e&lang=en&src=listed) | Open official announcement | -0.48% | -0.48% | -19.03% | -32.56% | -17.34% | No |
| 2023-08-09 16:52 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2022/23](https://view.news.eu.nasdaq.com/view?id=b8f1ba98f95dd8dc572a11bbfc92e0297&lang=en&src=listed) | Open official announcement | 3.85% | -5.09% | -2.78% | 1.85% | -2.64% | No |
| 2023-05-10 17:28 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2022/23](https://view.news.eu.nasdaq.com/view?id=b051cba22c4aa74b8913b2aded5d5490a&lang=en&src=listed) | Open official announcement | 3.05% | -12.59% | -9.63% | -12.22% | -7.58% | No |
| 2023-02-08 17:58 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2022/23](https://view.news.eu.nasdaq.com/view?id=b0b3584534020b3c13c60d9807bba6185&lang=en&src=listed) | Open official announcement | 0.70% | -5.90% | -4.51% | -7.29% | -4.19% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (10 classified of 19 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lower profit | 1d | 1 | -3.03% | — | -3.03% | 0% | -2.48% | — | -2.48% |
| Lower profit | 5d | 1 | 2.27% | — | 2.27% | 100% | 2.44% | — | 2.44% |
| Lower profit | 21d | 1 | 5.30% | — | 5.30% | 100% | 7.09% | — | 7.09% |
| In line / unchanged | 1d | 6 | 8.68% | 46.946 | 7.80% | 100% | 8.63% | 45.242 | 8.27% |
| In line / unchanged | 5d | 6 | 6.88% | 54.707 | 5.80% | 83% | 7.21% | 46.489 | 6.48% |
| In line / unchanged | 21d | 6 | 11.60% | 128.810 | 8.17% | 100% | 11.24% | 148.815 | 8.18% |
| Loss | 1d | 3 | -1.33% | 1.486 | -0.97% | 0% | -1.40% | 1.549 | -1.30% |
| Loss | 5d | 3 | -1.21% | 4.809 | -1.29% | 33% | -1.46% | 6.167 | -2.52% |
| Loss | 21d | 3 | 0.18% | 47.502 | -3.55% | 33% | -0.05% | 50.413 | -3.69% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 9 | 5.400 | 0.0201 | 0.3323 | No adjusted evidence |
| 5d | 2 | 9 | 3.267 | 0.0707 | 0.4170 | No adjusted evidence |
| 21d | 2 | 9 | 2.400 | 0.1213 | 0.4170 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![SAF1R Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/SAF1R_all_frontiers.png?v=1792486188)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.094113 | 1.521448 | M2Sortino | 0.129024 | 1.731606 |
| AdjustedSharpe | 0.386716 | -16.270535 | MSquaredExcess | -0.130561 | 0.346363 |
| AnnualizedReturn_Arithmetic | 0.185846 | 1.094606 | Martin | 0.263460 | 34.505124 |
| AnnualizedReturn_Geometric | 0.134576 | 1.758657 | MaximumDrawdown | 0.613343 | 0.119021 |
| Appraisal | 0.303522 | 4.524113 | Modigliani | 0.000374 | 0.001644 |
| ArithmeticReturn | 0.000737 | 0.004344 | NetSelectivity | -0.316223 | 1.132025 |
| AverageDrawdown | 0.074566 | 0.044658 | Omega | 1.133831 | 1.913900 |
| AverageDrawdownLength | 81.666667 | 19.333333 | OmegaExcessReturn | 0.052099 | 1.707592 |
| AverageRecoveryTime | 45.666667 | 9.500000 | PainIndex | 0.424909 | 0.039515 |
| BernardoLedoit | 1.133831 | 1.913900 | PainRatio | 0.316718 | 44.505740 |
| BetaCoKurtosis | 0.368556 | -0.373590 | Prospect | -0.426971 | -0.151517 |
| BetaCoSkewness | 0.819835 | -28.623651 | Rachev | 1.157893 | 1.812138 |
| Burke | 0.254843 | 11.985399 | Selectivity | 0.104762 | 1.831979 |
| CAPMAlpha | 0.000623 | 0.004619 | Sharpe_Annualized | 0.536906 | 2.673910 |
| CAPMBeta | 0.130372 | -0.309101 | Sharpe_Daily | 0.033822 | 0.168441 |
| CDD | 0.077069 | 0.098897 | Sharpe_ES | 0.015861 | 0.121655 |
| Calmar | 0.219415 | 14.776008 | Sharpe_VaR | 0.028405 | 0.165659 |
| CoKurtosis | 0.000000 | -0.000000 | Skewness | 0.763854 | 4.044583 |
| CoSkewness | 0.000000 | -0.000000 | Sortino | 0.051195 | 0.411995 |
| CumulativeReturn | 0.459036 | 0.660921 | SpecificRisk | 0.345154 | 0.404937 |
| DRatio | 0.888069 | 0.429191 | Sterling | 0.188656 | 8.029624 |
| DownCapture | 0.065218 | -0.639514 | SystematicRisk | 0.022893 | -0.047899 |
| DownNumber | 0.408805 | 0.396226 | TotalRisk | 0.345913 | 0.407760 |
| DownPercent | 0.735849 | 0.773585 | TrackingError_Annualized | 0.377635 | 0.454355 |
| DownsideDeviation | 0.014405 | 0.010543 | TrackingError_Daily | 0.023789 | 0.028622 |
| DrawdownDeviation | 0.022354 | 0.013635 | Treynor_Annualized | 1.032252 | -5.689590 |
| ES_Loss | 0.046496 | 0.035705 | Treynor_Daily | 0.003844 | -0.013054 |
| FamaBeta | 1.971230 | 2.641687 | UlcerIndex | 0.510804 | 0.050968 |
| GeometricReturn | 0.000501 | 0.004035 | UpCapture | 0.225107 | 0.509469 |
| Hurst | 0.437121 | 0.482807 | UpNumber | 0.389908 | 0.383562 |
| Information_Annualized | -0.249216 | 3.348586 | UpPercent | 0.275229 | 0.301370 |
| Information_Daily | -0.013302 | 0.111449 | UpsidePotential | 0.433727 | 0.862806 |
| JensenAlpha | 0.104762 | 1.831979 | UpsideRisk | 0.016366 | 0.023821 |
| Kappa | 0.027611 | 0.280089 | VaR_Loss | 0.025963 | 0.026221 |
| Kelly | 1.551119 | 6.531847 | Volatility | 0.021805 | 0.025788 |
| Kurtosis | 31.980202 | 32.832668 | Volatility_Annualized | 0.346141 | 0.409365 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.796610</td><td>-0.016949</td></tr><tr><td>OUT</td><td>96</td><td>94</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.190075</td><td>0.042301</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.168744</td><td>0.007252</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>SAF1R shares</td><td>100</td><td>100</td><td>+0</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>7912.299967</td><td>0.000000</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.457627</td><td>0.000000</td></tr><tr><td>OUT</td><td>62</td><td>62</td><td>+0</td></tr><tr><td>IN</td><td>8</td><td>8</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.070173</td><td>0.000000</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.091156</td><td>0.000000</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 100 SAF1R shares. The scenario adds 0 shares from Table 3A, resulting in 100 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="SAF1R"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![SAF1R high-resolution stochastic dominance](figures/stock_profiles/SAF1R_FSD_SSD_TSD.png?v=1792486467)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tsm1t" data-signal="HOLD">
<summary><strong>TSM1T — Tallinna Sadam</strong> | HOLD | target 330 shares | priority 23</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Technical decision</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>330</td><td>330</td><td>+0</td><td>2.67%</td><td>EUR 1.2140</td><td>-0.0169</td><td>28 / 30</td><td>49.57</td><td>Bullish</td><td>Inside bands</td><td>1.000 (Overbought)</td><td>HOLD</td><td>0.000713 (0.920% of portfolio HHI)</td><td>EUR 45,487</td><td>0.0%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

![TSM1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TSM1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative buy and sell prices**

| Current price | Buy below | Distance to buy | Sell above | Distance to sell | Price signal |
| --- | --- | --- | --- | --- | --- |
| EUR 1.2140 | EUR 1.2035 | -0.87% | EUR 1.2189 | +0.41% | HOLD |

Buy below and Sell above are the current 20-observation Bollinger lower and upper bands. The price signal uses these concrete limits only; the separate technical decision above combines all four indicators. These descriptive limits will be replaced when the walk-forward acceptable-price model is validated.

<details markdown="1">
<summary>Complete technical history</summary>

![TSM1T complete technical history](figures/technical_analysis/TSM1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TSM1T return histogram](figures/stock_profiles/TSM1T_histogram.png?v=1792485734)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 919 daily returns from 2023-01-02 to 2026-10-16. Statistically supported calendar effects: **calendar-month**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -29.81% (2024-12-11) | Average gain / average loss | 0.947 | Best 21-day period | 15.44% (ending 2026-01-30) |
| Average underwater drawdown | 17.99% | Upside potential ratio | 0.929 | Worst 21-day period | -14.31% (ending 2026-05-28) |
| Conditional drawdown 95% | 29.36% | Upside capture vs Baltic EW | 46.8% | Best 5-day period | 8.50% (ending 2026-01-30) |
| Ulcer index | 19.61 | Downside capture vs Baltic EW | 59.8% | Best 63-day period | 25.39% (ending 2026-02-11) |
| Longest underwater period | 1327 calendar days | Positive trading days | 39.3% | Repeated calendar pattern | May: 0% positive across 4 years |
| Daily downside deviation | 0.561% | Best day | 2.77% (2024-04-08) |  |  |
| Daily upside deviation | 0.450% | Worst day | -6.09% (2025-05-08) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.051%); worst: Monday (-0.093%) | 0.0466 | 0.1700 | Not detected |
| Calendar month | Best: Jan (0.299% daily); worst: May (-0.388% daily) | 0.0003 | 0.0058 | Detected |
| Turn of month | First/last three days: 0.068%; other days: -0.034% | 0.1412 | 0.4850 | Not detected |

![TSM1T seasonality, drawdowns and upside periods](figures/stock_profiles/TSM1T_seasonality.png?v=1792486405)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-27 | 2024-12-11 | Not recovered | -29.81% | 1327 |
| 2 | 2023-01-16 | 2023-01-18 | 2023-01-20 | -0.56% | 4 |
| 3 | 2023-02-09 | 2023-02-10 | 2023-02-27 | -0.40% | 18 |
| 4 | 2023-01-09 | 2023-01-10 | 2023-01-13 | -0.28% | 4 |
| 5 | 2023-01-26 | 2023-01-27 | 2023-01-30 | -0.28% | 4 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-12-29 | 2026-01-30 | 15.44% |
| 2 | 2025-01-20 | 2025-02-18 | 9.82% |
| 3 | 2024-04-03 | 2024-05-03 | 7.23% |
| 4 | 2025-11-04 | 2025-12-05 | 6.22% |
| 5 | 2025-03-04 | 2025-04-03 | 6.09% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (30 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.04% | 1.22% | -0.82% | 75% | 25% | 0.6868 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 4 | -0.20% | -1.24% | -0.79% | 25% | 0% | 0.6868 | 1.0000 | No adjusted statistical evidence |
| Earnings | 15 | -0.42% | -0.29% | -1.26% | 53% | 20% | 0.9354 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 7 | -3.48% | -5.59% | -7.34% | 0% | 43% | 0.0000 | 0.0003 | Different from ordinary periods; price drop may be mechanical |

![TSM1T official announcements and abnormal returns](figures/stock_profiles/TSM1T_company_events.png?v=1792491537)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (30 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2026 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=b004460ea6a7fe0426daaa1f06fd12455&lang=en&src=listed) | Open official announcement | 0.16% | -0.32% | -0.80% | -2.09% | -0.40% | No |
| 2026-05-20 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -8.91% | 0.00% | -1.38% | -3.21% | -1.96% | No |
| 2026-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -1.37% | -5.99% | -8.91% | -12.95% | -7.87% | No |
| 2026-05-11 08:59 | Earnings | Unclassified earnings release | [Parandus pealkirjas: ASi Tallinna Sadam 2026 I kvartali majandustulemused](https://view.news.eu.nasdaq.com/view?id=b3110244296581c0066185611d5eece35&lang=et&src=listed) | Open official announcement | -1.37% | -5.99% | -8.91% | -12.95% | -7.87% | No |
| 2026-05-08 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS Tallinna Sadam](https://view.news.eu.nasdaq.com/view?id=b860e51934927975c9974924238c41731&lang=en&src=listed) | Open official announcement | 0.28% | -1.24% | -10.04% | -14.03% | -9.50% | Yes |
| 2026-04-02 08:00 | Dividend announcement | — | [Tallinna Sadam audited Annual Report 2025 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=bda899d2e5f805868f71ab7cf8e5394f8&lang=en&src=listed) | Open official announcement | 0.29% | -0.29% | -0.29% | 3.57% | -1.98% | No |
| 2026-02-26 08:00 | Earnings | Lower profit | [AS Tallinna Sadam unaudited financial results for the year 2025 and Q4](https://view.news.eu.nasdaq.com/view?id=bc0cf354374a243405cd3c38805b88f5c&lang=en&src=listed) | Open official announcement | -1.79% | 0.28% | 0.00% | -2.24% | 0.25% | No |
| 2025-11-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2025 Q3 and 9 months](https://view.news.eu.nasdaq.com/view?id=b1b08441834547d95e1197680971ae7fa&lang=en&src=listed) | Open official announcement | 3.10% | 0.17% | -0.33% | 3.68% | -0.32% | No |
| 2025-08-11 14:30 | Earnings | Higher profit | [Correction: AS Tallinna Sadam financial results for 2025 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=bba9e5faad08541202778a34eb0efae9c&lang=en&src=listed) | Open official announcement | 0.68% | 0.00% | 1.51% | 0.34% | 1.47% | Yes |
| 2025-05-16 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | 0.68% | 0.85% | 0.85% | 0.68% | -0.00% | No |
| 2025-05-12 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2025 Q1](https://view.news.eu.nasdaq.com/view?id=b15406ee82575437cf9e2952f01c01b2b&lang=en&src=listed) | Open official announcement | -3.76% | -0.17% | 1.70% | 2.21% | 1.28% | Yes |
| 2025-05-08 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | 2.30% | -6.09% | -5.45% | -4.17% | -4.95% | No |
| 2025-05-06 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of AS Tallinna Sadam](https://view.news.eu.nasdaq.com/view?id=bb5bfdae4fe3e829f5cdf7cd493af89e6&lang=en&src=listed) | Open official announcement | 2.63% | -0.16% | -5.92% | -4.32% | -5.97% | Yes |
| 2025-04-03 08:00 | Dividend announcement | — | [Tallinna Sadam audited Annual Report 2024 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=bee211eb152fa721883c88316a35335c6&lang=en&src=listed) | Open official announcement | 3.04% | -1.80% | -1.15% | -3.44% | 0.64% | No |
| 2025-02-28 08:00 | Earnings | Higher profit | [AS Tallinna Sadam unaudited financial results for Q4 and 2024](https://view.news.eu.nasdaq.com/view?id=b0887dc70da261877b0aa174b49193374&lang=en&src=listed) | Open official announcement | 0.00% | -0.67% | -1.17% | -0.83% | -1.17% | No |
| 2024-11-11 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2024 9 months and Q3](https://view.news.eu.nasdaq.com/view?id=bdb3dc8fd61fde2f29a4b559bab9a4510&lang=en&src=listed) | Open official announcement | -0.75% | -0.19% | -0.38% | -0.57% | 1.17% | No |
| 2024-08-12 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2024 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=b2301b4b68af4553da7d02ab2252a1715&lang=en&src=listed) | Open official announcement | 1.69% | -0.56% | -0.74% | -1.85% | -0.31% | No |
| 2024-05-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -3.50% | -1.04% | -3.63% | -3.28% | -3.57% | No |
| 2024-05-10 08:00 | Earnings | Lower profit | [AS Tallinna Sadam financial results for 2024 Q1](https://view.news.eu.nasdaq.com/view?id=bb6d9b7691aa7c3575dc66f38d4a6dbad&lang=en&src=listed) | Open official announcement | -6.30% | 0.18% | 1.42% | -1.24% | 2.25% | No |
| 2024-05-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -1.15% | -5.83% | -3.50% | -7.00% | -1.85% | No |
| 2024-05-06 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of AS Tallinna Sadam](https://view.news.eu.nasdaq.com/view?id=bd1db1c926ede4a2de532dc97bed18365&lang=en&src=listed) | Open official announcement | -0.16% | -0.82% | -5.43% | -9.21% | -4.27% | No |
| 2024-04-04 08:00 | Dividend announcement | — | [Tallinna Sadam audited Annual Report 2023 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=b801005dc3c67e2a6540cdb741317ffc5&lang=en&src=listed) | Open official announcement | -0.52% | 0.87% | 5.42% | 5.42% | 5.28% | Yes |
| 2024-02-28 08:00 | Earnings | Higher profit | [AS Tallinna Sadam unaudited financial results for Q4 and 2023](https://view.news.eu.nasdaq.com/view?id=bcee1274a19a3f1eaa0cf56d26464ca38&lang=en&src=listed) | Open official announcement | 3.25% | 0.35% | 1.23% | -0.18% | 1.54% | No |
| 2023-11-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2023 Q3 and 9 months](https://view.news.eu.nasdaq.com/view?id=b1e73bdebe1c05764ce0f6d44b8337258&lang=en&src=listed) | Open official announcement | 0.70% | -0.17% | -1.22% | -3.48% | -0.96% | Yes |
| 2023-08-10 09:33 | Earnings | Higher profit | [Correction: AS Tallinna Sadam financial results for 2023 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=ba0a3f266bb3fdc2c504aed32e1a1d4a9&lang=en&src=listed) | Open official announcement | -2.90% | -0.15% | -0.90% | -9.27% | -2.39% | No |
| 2023-05-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -4.67% | 0.14% | -0.86% | 0.86% | 0.56% | No |
| 2023-05-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2023 Q1](https://view.news.eu.nasdaq.com/view?id=bdd9ab4079d3988d74cd1d95324b6db9e&lang=en&src=listed) | Open official announcement | -4.00% | -0.29% | -1.15% | 0.57% | 0.90% | No |
| 2023-05-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | 1.24% | -4.63% | -5.86% | -4.77% | -4.73% | Yes |
| 2023-04-04 13:40 | Dividend announcement | — | [CORRECTION: Tallinna Sadam audited Annual Report 2022 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=be24cd8165447a892001ba6662975d0f2&lang=en&src=listed) | Open official announcement | 1.96% | 0.14% | 0.96% | -4.40% | 0.94% | No |
| 2023-02-28 08:00 | Earnings | Higher profit | [AS Tallinna Sadam unaudited financial results for 2022 and Q4](https://view.news.eu.nasdaq.com/view?id=bf7751635da699ae3465424a43a2af554&lang=en&src=listed) | Open official announcement | -0.27% | 0.27% | 0.41% | -3.65% | 0.19% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (14 classified of 15 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 12 | -0.14% | 0.094 | -0.17% | 25% | -0.07% | 0.118 | -0.04% |
| Higher profit | 5d | 12 | -0.15% | 1.180 | -0.56% | 33% | 0.08% | 1.515 | -0.06% |
| Higher profit | 21d | 12 | -1.26% | 10.909 | -0.70% | 33% | -0.57% | 13.338 | -0.65% |
| Lower profit | 1d | 2 | 0.23% | 0.005 | 0.23% | 100% | 0.11% | 0.205 | 0.11% |
| Lower profit | 5d | 2 | 0.71% | 1.002 | 0.71% | 50% | 1.25% | 1.996 | 1.25% |
| Lower profit | 21d | 2 | -1.74% | 0.505 | -1.74% | 0% | 0.10% | 0.922 | 0.10% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 14 | 0.300 | 0.5839 | 0.8057 | No adjusted evidence |
| 5d | 2 | 14 | 1.633 | 0.2012 | 0.5211 | No adjusted evidence |
| 21d | 2 | 14 | 0.133 | 0.7150 | 0.8294 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TSM1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TSM1T_all_frontiers.png?v=1792486195)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>All 72 PerformanceAnalytics measures: full period and last 126 observations</summary>

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| ActiveReturn | -0.268269 | -0.410984 | M2Sortino | -0.040305 | -0.172626 |
| AdjustedSharpe | -0.294847 | -0.426253 | MSquaredExcess | -0.234675 | -0.346799 |
| AnnualizedReturn_Arithmetic | -0.033543 | -0.180919 | Martin | -0.193218 | -1.669377 |
| AnnualizedReturn_Geometric | -0.039580 | -0.173775 | MaximumDrawdown | 0.278227 | 0.164731 |
| Appraisal | -0.312136 | -1.201787 | Modigliani | -0.000201 | -0.000793 |
| ArithmeticReturn | -0.000133 | -0.000718 | NetSelectivity | -0.191314 | -0.388631 |
| AverageDrawdown | 0.065627 | 0.058335 | Omega | 0.941679 | 0.752323 |
| AverageDrawdownLength | 106.285714 | 41.000000 | OmegaExcessReturn | -0.071857 | -0.208285 |
| AverageRecoveryTime | 35.857143 | 2.000000 | PainIndex | 0.179389 | 0.084215 |
| BernardoLedoit | 0.941679 | 0.752323 | PainRatio | -0.220636 | -2.063476 |
| BetaCoKurtosis | -0.045930 | -0.012177 | Prospect | -0.529670 | -0.609303 |
| BetaCoSkewness | -1.257074 | -0.433006 | Rachev | 0.948434 | 0.788970 |
| Burke | -0.187476 | -1.432956 | Selectivity | -0.036334 | -0.167951 |
| CAPMAlpha | -0.000121 | -0.000696 | Sharpe_Annualized | -0.287906 | -1.288953 |
| CAPMBeta | -0.014194 | -0.024550 | Sharpe_Daily | -0.018136 | -0.081196 |
| CDD | 0.204455 | 0.125019 | Sharpe_ES | -0.007336 | -0.033476 |
| Calmar | -0.142257 | -1.054902 | Sharpe_VaR | -0.013894 | -0.057693 |
| CoKurtosis | -0.000000 | -0.000000 | Skewness | -1.672096 | -1.925976 |
| CoSkewness | -0.000000 | -0.000000 | Sortino | -0.023611 | -0.100763 |
| CumulativeReturn | -0.113818 | -0.091031 | SpecificRisk | 0.116404 | 0.139751 |
| DRatio | 1.094005 | 1.595059 | Sterling | -0.104646 | -0.656421 |
| DownCapture | -0.000623 | 0.018696 | SystematicRisk | -0.002492 | -0.003804 |
| DownNumber | 0.421384 | 0.509434 | TotalRisk | 0.116430 | 0.139803 |
| DownPercent | 0.839623 | 0.830189 | TrackingError_Annualized | 0.212799 | 0.211882 |
| DownsideDeviation | 0.005637 | 0.007125 | TrackingError_Daily | 0.013405 | 0.013347 |
| DrawdownDeviation | 0.011779 | 0.014690 | Treynor_Annualized | 2.788504 | 7.078323 |
| ES_Loss | 0.018145 | 0.021446 | Treynor_Daily | 0.011290 | 0.030843 |
| FamaBeta | 0.663495 | 0.905767 | UlcerIndex | 0.204845 | 0.104096 |
| GeometricReturn | -0.000160 | -0.000757 | UpCapture | -0.031784 | -0.153060 |
| Hurst | 0.376007 | 0.473674 | UpNumber | 0.399083 | 0.383562 |
| Information_Annualized | -1.260667 | -1.939685 | UpPercent | 0.178899 | 0.150685 |
| Information_Daily | -0.072945 | -0.120042 | UpsidePotential | 0.381236 | 0.306069 |
| JensenAlpha | -0.036334 | -0.167951 | UpsideRisk | 0.004694 | 0.005226 |
| Kappa | -0.013175 | -0.057224 | VaR_Loss | 0.009580 | 0.012444 |
| Kelly | -2.471135 | -9.183136 | Volatility | 0.007339 | 0.008842 |
| Kurtosis | 19.250328 | 18.645385 | Volatility_Annualized | 0.116508 | 0.140361 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.155889</td><td>0.008116</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.165547</td><td>0.004054</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TSM1T shares</td><td>330</td><td>330</td><td>+0</td></tr><tr><td>Portfolio value, EUR</td><td>7912.299967</td><td>7912.299967</td><td>0.000000</td></tr><tr><td>netSD</td><td>0.457627</td><td>0.457627</td><td>0.000000</td></tr><tr><td>OUT</td><td>62</td><td>62</td><td>+0</td></tr><tr><td>IN</td><td>8</td><td>8</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.070173</td><td>1.070173</td><td>0.000000</td></tr><tr><td>Sortino ratio</td><td>0.091156</td><td>0.091156</td><td>0.000000</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 330 TSM1T shares. The scenario adds 0 shares from Table 3A, resulting in 330 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Choose S&P 500, Current or any model portfolio as the benchmark for the difference panels.

<div class="dominance-explorer" data-asset="TSM1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TSM1T high-resolution stochastic dominance](figures/stock_profiles/TSM1T_FSD_SSD_TSD.png?v=1792486475)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

</details>

## Single-share additions to the current portfolio

Each row starts from the same unmodified current portfolio and adds only the stated share quantity from Table 3A. Rows are ranked by the change in netSD; larger is better. OUT is the number of dominance relations won, while IN is the number lost; more OUT and fewer IN are preferable.

<details markdown="1" class="add-one-comparison">
<summary><strong>Open ranked comparison of all individual additions</strong></summary>

| Rank | Share | Added shares | Updated value EUR | Current OUT / IN | Updated OUT / IN | Delta OUT / IN | Current netSD | Updated netSD | Delta netSD | Delta Rachev | Delta Sortino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | MOLNR | 22 | 8361.099958 | 62 / 8 | 76 / 3 | +14 / -5 | 0.457627 | 0.618644 | 0.161017 | 0.103299 | 0.024261 |
| 2 | MRK1T | 24 | 8562.699976 | 62 / 8 | 72 / 2 | +10 / -6 | 0.457627 | 0.593220 | 0.135593 | 0.022255 | 0.012632 |
| 3 | VLP1L | 30 | 8380.299978 | 62 / 8 | 72 / 4 | +10 / -4 | 0.457627 | 0.576271 | 0.118644 | 0.015600 | 0.018034 |
| 4 | KNE1L | 928 | 8357.739957 | 62 / 8 | 70 / 4 | +8 / -4 | 0.457627 | 0.559322 | 0.101695 | 0.005262 | 0.010053 |
| 5 | RSU1L | 126 | 8476.779969 | 62 / 8 | 70 / 4 | +8 / -4 | 0.457627 | 0.559322 | 0.101695 | -0.000898 | 0.007377 |
| 6 | GRG1L | 543 | 8455.299967 | 62 / 8 | 69 / 4 | +7 / -4 | 0.457627 | 0.550847 | 0.093220 | 0.001109 | 0.006023 |
| 7 | APG1L | 102 | 8300.919961 | 62 / 8 | 66 / 4 | +4 / -4 | 0.457627 | 0.525424 | 0.067797 | -0.010565 | 0.005776 |
| 8 | AKO1L | 167 | 8218.744973 | 62 / 8 | 64 / 6 | +2 / -2 | 0.457627 | 0.491525 | 0.033898 | -0.006844 | 0.002953 |
| 9 | PZV1L | 56 | 8012.819964 | 62 / 8 | 64 / 7 | +2 / -1 | 0.457627 | 0.483051 | 0.025424 | 0.002677 | 0.001723 |
| 10 | IGN1L | 27 | 8499.549967 | 62 / 8 | 63 / 8 | +1 / +0 | 0.457627 | 0.466102 | 0.008475 | 0.004655 | 0.001835 |
| 11 | VIRSI | 125 | 8464.799967 | 62 / 8 | 63 / 8 | +1 / +0 | 0.457627 | 0.466102 | 0.008475 | -0.002456 | -0.000364 |
| 12 | SAF1R | 0 | 7912.299967 | 62 / 8 | 62 / 8 | +0 / +0 | 0.457627 | 0.457627 | 0.000000 | 0.000000 | 0.000000 |
| 13 | TSM1T | 0 | 7912.299967 | 62 / 8 | 62 / 8 | +0 / +0 | 0.457627 | 0.457627 | 0.000000 | 0.000000 | 0.000000 |
| 14 | TVE1T | 43 | 8378.849983 | 62 / 8 | 62 / 9 | +0 / +1 | 0.457627 | 0.449153 | -0.008475 | 0.002998 | -0.002770 |
| 15 | HAE1T | 73 | 8303.579977 | 62 / 8 | 62 / 10 | +0 / +2 | 0.457627 | 0.440678 | -0.016949 | 0.000639 | -0.000397 |
| 16 | ROE1L | 125 | 8022.299966 | 62 / 8 | 62 / 10 | +0 / +2 | 0.457627 | 0.440678 | -0.016949 | 0.000191 | 0.000522 |
| 17 | DGR1R | 36 | 7974.219968 | 62 / 8 | 62 / 12 | +0 / +4 | 0.457627 | 0.423729 | -0.033898 | -0.000679 | 0.000262 |
| 18 | TEL1L | 78 | 8090.919964 | 62 / 8 | 60 / 10 | -2 / +2 | 0.457627 | 0.423729 | -0.033898 | -0.001226 | 0.000562 |
| 19 | LHV1T | 65 | 8123.549967 | 62 / 8 | 60 / 10 | -2 / +2 | 0.457627 | 0.423729 | -0.033898 | -0.002417 | -0.000839 |
| 20 | TAL1T | 416 | 8181.035978 | 62 / 8 | 60 / 10 | -2 / +2 | 0.457627 | 0.423729 | -0.033898 | -0.008560 | 0.000672 |
| 21 | CPA1T | 67 | 8069.749960 | 62 / 8 | 60 / 12 | -2 / +4 | 0.457627 | 0.406780 | -0.050847 | 0.003626 | -0.000798 |
| 22 | EFT1T | 3 | 7971.099968 | 62 / 8 | 60 / 12 | -2 / +4 | 0.457627 | 0.406780 | -0.050847 | 0.000267 | 0.000002 |
| 23 | TKM1T | 5 | 7956.799965 | 62 / 8 | 60 / 12 | -2 / +4 | 0.457627 | 0.406780 | -0.050847 | -0.001155 | -0.000382 |

</details>

## Leave-one-out portfolio sensitivity

Each scenario removes one share from curent_update_baltic and proportionally rescales the remaining weights. Positive delta means that the ratio improves after removal; negative delta means that the removed share was beneficial for that criterion.

**Main result.** Removing **AKO1L** produces the largest netSD change (+0.000000); removing **TKM1T** gives the largest Rachev improvement (+0.059529); removing **TKM1T** gives the largest Sortino improvement (+0.020102). These are sensitivity results, not automatically new trade recommendations, because the three criteria can move in opposite directions.

<details markdown="1">
<summary><strong>Open complete netSD, Rachev and Sortino sensitivity table</strong></summary>

| Removed share | netSD | Δ netSD | Rachev | Δ Rachev | Sortino | Δ Sortino |
| --- | --- | --- | --- | --- | --- | --- |
| None (baseline) | 0.813559 | 0.000000 | 1.147773 | 0.000000 | 0.161492 | 0.000000 |
| AKO1L | 0.813559 | 0.000000 | 1.154683 | 0.006910 | 0.160163 | -0.001329 |
| APG1L | 0.745763 | -0.067797 | 1.171927 | 0.024153 | 0.150793 | -0.010699 |
| CPA1T | 0.813559 | 0.000000 | 1.148909 | 0.001135 | 0.162574 | 0.001082 |
| DGR1R | 0.813559 | 0.000000 | 1.148472 | 0.000698 | 0.161309 | -0.000183 |
| EFT1T | 0.805085 | -0.008475 | 1.149893 | 0.002119 | 0.161921 | 0.000428 |
| GRG1L | 0.788136 | -0.025424 | 1.148627 | 0.000853 | 0.157428 | -0.004064 |
| HAE1T | 0.813559 | 0.000000 | 1.141945 | -0.005829 | 0.161638 | 0.000145 |
| IGN1L | 0.813559 | 0.000000 | 1.146862 | -0.000911 | 0.161498 | 0.000006 |
| KNE1L | 0.771186 | -0.042373 | 1.151322 | 0.003548 | 0.152410 | -0.009082 |
| LHV1T | 0.813559 | 0.000000 | 1.148276 | 0.000503 | 0.162228 | 0.000736 |
| MOLNR | 0.694915 | -0.118644 | 1.065071 | -0.082703 | 0.140183 | -0.021309 |
| MRK1T | 0.779661 | -0.033898 | 1.128075 | -0.019698 | 0.150343 | -0.011150 |
| PZV1L | 0.813559 | 0.000000 | 1.155041 | 0.007267 | 0.158891 | -0.002601 |
| ROE1L | 0.813559 | 0.000000 | 1.152716 | 0.004942 | 0.162213 | 0.000721 |
| RSU1L | 0.796610 | -0.016949 | 1.162612 | 0.014839 | 0.158856 | -0.002636 |
| SAF1R | 0.796610 | -0.016949 | 1.190075 | 0.042301 | 0.168744 | 0.007252 |
| TAL1T | 0.805085 | -0.008475 | 1.157178 | 0.009405 | 0.161875 | 0.000383 |
| TEL1L | 0.813559 | 0.000000 | 1.147918 | 0.000144 | 0.161502 | 0.000010 |
| TKM1T | 0.762712 | -0.050847 | 1.207303 | 0.059529 | 0.181595 | 0.020102 |
| TSM1T | 0.813559 | 0.000000 | 1.155889 | 0.008116 | 0.165547 | 0.004054 |
| TVE1T | 0.796610 | -0.016949 | 1.140537 | -0.007236 | 0.163699 | 0.002207 |
| VIRSI | 0.813559 | 0.000000 | 1.147864 | 0.000091 | 0.161557 | 0.000065 |
| VLP1L | 0.703390 | -0.110169 | 1.141760 | -0.006013 | 0.132985 | -0.028508 |

</details>



Diagnostic priority 1 denotes the largest admissible individual-share netSD ratio after shares with IN>0 are moved to the end. It is not an execution order and does not rank the complete portfolio effect. Dividend columns use only official payments dated in 2025 and 2026. Annual dividend cash equals dividend per share multiplied by the target number of shares.

curent_update_baltic keeps every currently held share, permits purchases only, and uses the EUR 15,000 ceiling. Its calculated netSD is 0.813559, with OUT=96 and IN=0; the remaining cash is EUR 83.14.

<details markdown="1">
<summary><strong>Table 4. Current and optimised portfolios</strong></summary>

| Portfolio | netSD | OUT | IN | denominator | mean | SD | Historical dividends EUR | Portfolio value EUR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0.457627 | 62 | 8 | 118 | 0.000344 | 0.005486 | 1394.136000 | 7912.299967 |
| Optimised | 0.822034 | 97 | 0 | 118 | 0.000498 | 0.003881 | 2443.864419 | 15000.000000 |
| curent_update_baltic | 0.813559 | 96 | 0 | 118 | 0.000420 | 0.004095 | 2347.234800 | 14916.860998 |

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


## Earnings outcomes and subsequent price changes

Official announcement text allowed 213 of 340 earnings releases to be classified. Higher or lower profit refers to the issuer's explicit comparison with the earlier comparable period. In line or unchanged is used only for an explicit plan, forecast, expectation or unchanged-profit statement. Loss requires an explicit realised net or operating loss.

<details markdown="1">
<summary><strong>Table 4A. Conditional price statistics by reported profit outcome</strong></summary>

| profit_outcome | horizon | events | conditional_mean_return | conditional_variance_return | conditional_median_return | positive_return_share | conditional_mean_abnormal | conditional_variance_abnormal | conditional_median_abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 139 | 0.190 | 2.222 | 0.000 | 39.568 | 0.191 | 2.115 | 0.039 |
| Higher profit | 5d | 139 | 0.022 | 7.485 | -0.209 | 42.446 | 0.041 | 6.885 | -0.029 |
| Higher profit | 21d | 139 | -0.322 | 28.008 | -0.430 | 38.129 | 0.325 | 25.191 | -0.005 |
| In line / unchanged | 1d | 16 | 3.046 | 36.318 | 0.441 | 56.250 | 3.184 | 34.509 | 0.588 |
| In line / unchanged | 5d | 16 | 2.355 | 35.282 | -0.369 | 43.750 | 2.774 | 30.459 | 0.637 |
| In line / unchanged | 21d | 16 | 3.993 | 93.203 | 1.201 | 62.500 | 4.385 | 88.515 | 2.367 |
| Loss | 1d | 19 | -0.484 | 0.674 | -0.339 | 10.526 | -0.536 | 0.715 | -0.260 |
| Loss | 5d | 19 | -0.637 | 3.151 | -0.164 | 26.316 | -0.617 | 3.100 | -0.217 |
| Loss | 21d | 19 | -1.096 | 17.950 | -1.075 | 36.842 | -0.126 | 18.529 | 0.074 |
| Lower profit | 1d | 39 | -0.453 | 2.733 | 0.000 | 35.897 | -0.551 | 2.506 | -0.368 |
| Lower profit | 5d | 39 | -0.640 | 8.844 | -0.353 | 35.897 | -0.674 | 8.537 | -0.429 |
| Lower profit | 21d | 39 | -0.934 | 14.448 | -0.650 | 35.897 | -0.483 | 13.385 | -0.331 |

</details>


Means, medians and positive shares are percentages; variances are squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

<details markdown="1">
<summary><strong>Table 4B. Kruskal-Wallis tests across profit-outcome groups</strong></summary>

| horizon_days | groups | classified_events | kruskal_H | p_value | p_BH | conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 4 | 213 | 12.5879 | 0.0056 | 0.1854 | No adjusted evidence |
| 5 | 4 | 213 | 6.0551 | 0.1090 | 0.4170 | No adjusted evidence |
| 21 | 4 | 213 | 3.1175 | 0.3739 | 0.6888 | No adjusted evidence |

</details>


The BH adjustment covers the full family of share-level, pooled and pairwise tests. The estimates describe historical association and do not establish that an announcement caused the subsequent return.

## Statistical and performance analysis

<details markdown="1">
<summary><strong>Table 5. Empirical statistics of portfolio and S&P 500 daily returns</strong></summary>

| entity | observations | mean | median | SD | minimum | maximum | skewness | kurtosis | VaR_95 | ES_95 |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 754 | 0.000404 | 0.000384 | 0.005669 | -0.038959 | 0.045241 | -0.073388 | 18.006497 | 0.006317 | 0.012814 |
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
| Baltic_NetSD | 754 | 0.000484 | 0.000319 | 0.003947 | -0.021823 | 0.015231 | -0.320871 | 7.352343 | 0.004583 | 0.008834 |
| curent_update_baltic | 754 | 0.000417 | 0.000210 | 0.004219 | -0.021513 | 0.024368 | -0.110549 | 9.707420 | 0.004754 | 0.009433 |
| SP500 | 754 | 0.000879 | 0.001368 | 0.011062 | -0.062006 | 0.097992 | 0.100965 | 14.865600 | 0.016061 | 0.025050 |

</details>


Baltic_NetSD has mean daily return 0.000484, median 0.000319 and daily standard deviation 0.003947. Its historical 95% VaR is 0.004583 and ES (CVaR) is 0.008834. VaR is the loss threshold exceeded on approximately 5% of days; ES is the average return in that adverse tail.

<details markdown="1">
<summary><strong>Figure 3. Histograms and kernel densities; every panel uses the same return-axis limits</strong></summary>

![Report figure 3](report/assets/figure-03.png)

</details>


The recalculated Baltic_NetSD maximum daily return is 0.015231. The earlier value 0.168092 on 2025-06-25 was traced to RKB1R, whose unadjusted close moved from EUR 0.107 to EUR 0.476 between common Baltic trading dates. RKB1R belongs to the Baltic Secondary List. After excluding every Secondary List share from the investable set, this observation no longer enters the portfolio return; RKB1R is now excluded from both the investable set and every netSD reference network, so the suspect observation cannot affect the objective or its denominator.

<details markdown="1">
<summary><strong>Figure 4a. Portfolio and S&P 500 complete empirical CDF; right side truncated at return 0.05</strong></summary>

<div class="cdf-with-key"><img src="report/assets/figure-04.png" alt="CDF graph"><img class="cdf-key" src="report/assets/figure-08.png" alt="CDF legend"></div>

</details>


<details markdown="1">
<summary><strong>Figure 4b. Portfolio and S&P 500 empirical CDF: enlarged left tail</strong></summary>

<div class="cdf-with-key"><img src="report/assets/figure-05.png" alt="CDF graph"><img class="cdf-key" src="report/assets/figure-08.png" alt="CDF legend"></div>

</details>


<details markdown="1">
<summary><strong>Figure 4c. Portfolio and S&P 500 empirical CDF: enlarged centre</strong></summary>

<div class="cdf-with-key"><img src="report/assets/figure-06.png" alt="CDF graph"><img class="cdf-key" src="report/assets/figure-08.png" alt="CDF legend"></div>

</details>


<details markdown="1">
<summary><strong>Figure 4d. Portfolio and S&P 500 empirical CDF: enlarged right tail</strong></summary>

<div class="cdf-with-key"><img src="report/assets/figure-07.png" alt="CDF graph"><img class="cdf-key" src="report/assets/figure-08.png" alt="CDF legend"></div>

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
| NetSD_training | portfolio | 0.011044 | 0.026485 | 0.000153 | 0.000153 |
| NetSD_full | portfolio | 0.012415 | 0.026485 | 0.000059 | 0.000059 |
| Minimax_training | portfolio | 0.019342 | 0.026485 | 0.000031 | 0.000031 |
| VLP1L | share | 0.019789 | 0.156858 | 0.000879 | 0.000879 |
| MOLNR | share | 0.113155 | 0.156858 | 0.000702 | 0.000702 |
| KNR1L | share | 0.074418 | 0.156858 | 0.000670 | 0.000670 |
| INC1L | share | 0.030715 | 0.156858 | 0.000609 | 0.000609 |
| IVL1L | share | 0.031708 | 0.156858 | 0.000503 | 0.000503 |
| KNE1L | share | 0.033695 | 0.156858 | 0.000331 | 0.000331 |
| MRK1T | share | 0.029722 | 0.156858 | 0.000259 | 0.000259 |
| APG1L | share | 0.017803 | 0.156858 | 0.000172 | 0.000172 |
| ZMP1L | share | 0.068458 | 0.156858 | 0.000136 | 0.000136 |
| PZV1L | share | 0.065479 | 0.156858 | 0.000096 | 0.000096 |
| LGD1L | share | 0.047600 | 0.156858 | 0.000078 | 0.000078 |
| RSU1L | share | 0.062499 | 0.156858 | 0.000050 | 0.000050 |
| VBL1L | share | 0.119114 | 0.156858 | 0.000029 | 0.000029 |

</details>


These are local, right-side comparisons and must not be interpreted as SSD over the complete return domain. A positive difference H2_Baltic_NetSD(x)-H2_comparator(x) means that the comparator has the smaller, hence locally preferable, SSD component at that threshold. Among portfolios this occurs for NetSD_training, NetSD_full, Minimax_training. The five strongest share cases at the displayed endpoint are VLP1L, MOLNR, KNR1L, INC1L, IVL1L. Smaller positive endpoint differences also occur for KNE1L, MRK1T, APG1L, ZMP1L, PZV1L, LGD1L, RSU1L, VBL1L. The table reports the threshold from which the advantage remains positive to the displayed upper endpoint. The listed shares are therefore candidates for further investment analysis, while the absence of full-support dominance means this chart alone is insufficient for an investment decision.

The result that may appear surprising in the difference figures is therefore real but local. NetSD_training has a smaller H2 component than Baltic_NetSD from x=0.012089 to the displayed right endpoint, and NetSD_full does so from x=0.016037. Neither portfolio SSD-dominates Baltic_NetSD over the complete support because the required inequality fails at smaller x values. The listed shares deserve separate investment analysis because their upper-threshold SSD components are favourable. RKB1R is absent from these recalculated comparisons because its suspect unadjusted prices fail the data-quality screen. A local right-side advantage is evidence about one part of the distribution and is not full-domain SSD dominance.

<details markdown="1">
<summary><strong>Table 6. Weight concentration and diversification</strong></summary>

| portfolio | HHI_weights | effective_number | maximum_weight | number_positive | diversification_ratio |
| --- | --- | --- | --- | --- | --- |
| Current | 0.181029 | 5.523988 | 0.323951 | 9 | 1.992852 |
| Markowitz_training | 0.173946 | 5.748903 | 0.325443 | 10 | 2.219961 |
| MAD_training | 0.202077 | 4.948602 | 0.379940 | 10 | 2.167419 |
| Minimax_training | 0.169523 | 5.898915 | 0.279680 | 10 | 2.048226 |
| Robust_training | 0.180150 | 5.550933 | 0.349431 | 10 | 2.228326 |
| NetSD_training | 0.188413 | 5.307499 | 0.337844 | 10 | 1.958532 |
| Markowitz_full | 0.152149 | 6.572488 | 0.295792 | 10 | 2.293096 |
| MAD_full | 0.182270 | 5.486352 | 0.338655 | 10 | 2.220685 |
| Minimax_full | 0.157248 | 6.359400 | 0.258417 | 10 | 2.080794 |
| Robust_full | 0.215235 | 4.646077 | 0.386466 | 10 | 2.161409 |
| NetSD_full | 0.132893 | 7.524846 | 0.188213 | 10 | 2.212419 |
| Baltic_NetSD | 0.076442 | 13.081854 | 0.112884 | 21 | 2.597743 |
| curent_update_baltic | 0.077542 | 12.896259 | 0.174121 | 23 | 2.739180 |

</details>


For Baltic_NetSD, HHI=0.076442; lower is better because less capital is concentrated in a few shares. Its effective number of equally weighted positions is 13.08, the largest weight is 11.29%, and the diversification ratio is 2.598; a value above 1 means portfolio volatility is below the weighted average volatility of its components.

<details markdown="1">
<summary><strong>Figure 8. HHI concentration comparison</strong></summary>

![Report figure 26](report/assets/figure-26.png)

</details>


<details markdown="1">
<summary><strong>Table 7. Canonical comparable netSD results</strong></summary>

| entity | OUT | IN | denominator | netSD | mean | SD |
| --- | --- | --- | --- | --- | --- | --- |
| Current | 62 | 8 | 118 | 0.457627 | 0.000344 | 0.005486 |
| Markowitz_training | 63 | 0 | 118 | 0.533898 | 0.000248 | 0.004305 |
| MAD_training | 62 | 2 | 118 | 0.508475 | 0.000243 | 0.004307 |
| Minimax_training | 82 | 0 | 118 | 0.694915 | 0.000532 | 0.005481 |
| Robust_training | 67 | 0 | 118 | 0.567797 | 0.000310 | 0.004431 |
| NetSD_training | 90 | 0 | 118 | 0.762712 | 0.000679 | 0.005908 |
| Markowitz_full | 71 | 0 | 118 | 0.601695 | 0.000347 | 0.004323 |
| MAD_full | 67 | 1 | 118 | 0.559322 | 0.000343 | 0.004372 |
| Minimax_full | 76 | 0 | 118 | 0.644068 | 0.000406 | 0.005127 |
| Robust_full | 66 | 3 | 118 | 0.533898 | 0.000343 | 0.004437 |
| NetSD_full | 84 | 0 | 118 | 0.711864 | 0.000564 | 0.005125 |
| Baltic_NetSD | 97 | 0 | 118 | 0.822034 | 0.000498 | 0.003881 |
| curent_update_baltic | 96 | 0 | 118 | 0.813559 | 0.000420 | 0.004095 |

</details>


Baltic_NetSD has OUT=97 and IN=0. Dividing OUT-IN by the common network fixed denominator 118 gives netSD=0.822034. A larger netSD is better within this exact fixed reference system.

For curent_update_baltic, IN=0 because Baltic_NetSD dominates it by third-order stochastic dominance over the complete empirical support. There are no incoming FSD or SSD relations. Thus IN=1 is one directed TSD relation from Baltic_NetSD, rather than one adverse observation or one share.

<details markdown="1">
<summary><strong>Table 8. Systematic risk relative to S&P 500</strong></summary>

| entity | CAPMBeta | CAPMAlpha | JensenAlpha | SpecificRisk | SystematicRisk | TotalRisk | TrackingError_Annualized | Information_Annualized |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0.060863 | 0.000351 | 0.088778 | 0.089296 | 0.010687 | 0.089933 | 0.187562 | -0.671742 |
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
| Baltic_NetSD | 0.042986 | 0.000446 | 0.117582 | 0.062165 | 0.007548 | 0.062621 | 0.179192 | -0.565188 |
| curent_update_baltic | 0.048853 | 0.000374 | 0.097191 | 0.066377 | 0.008578 | 0.066929 | 0.179741 | -0.669444 |
| SP500 | 1.000000 | 0.000000 | 0.000000 | 0.000000 | 0.175597 | 0.175597 | 0.000000 | nan |

</details>


CAPM beta measures sensitivity to S&P 500: beta below 1 means a smaller average response to market movements, while beta above 1 means greater sensitivity. SpecificRisk is the residual component not explained by the benchmark; SystematicRisk is the benchmark-related component; TotalRisk combines both.

<details markdown="1">
<summary><strong>Table 8A. Individual-share netSD and admissibility for the new optimisation</strong></summary>

| asset | OUT | IN | denominator | netSD | segment | positive_netSD | secondary_list | admissible |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIR | 7 | 96 | 118 | -0.754237 | First North Baltic Share List | False | False | False |
| AKO1L | 32 | 9 | 118 | 0.194915 | Baltic Main List | True | False | True |
| AMG1L | 28 | 34 | 118 | -0.050847 | Baltic Secondary List | False | True | False |
| APG1L | 38 | 2 | 118 | 0.305085 | Baltic Main List | True | False | True |
| ARC1T | 17 | 40 | 118 | -0.194915 | Baltic Main List | False | False | False |
| AUG1L | 1 | 113 | 118 | -0.949153 | Baltic Secondary List | False | True | False |
| BAL1R | 0 | 118 | 118 | -1.000000 | Baltic Secondary List | False | True | False |
| BERCM | 6 | 93 | 118 | -0.737288 | First North Baltic Share List | False | False | False |
| CPA1T | 30 | 24 | 118 | 0.050847 | Baltic Main List | True | False | True |
| CTS1L | 0 | 89 | 118 | -0.754237 | Baltic First North Foreign Shares trading list | False | False | False |
| DGR1R | 26 | 22 | 118 | 0.033898 | Baltic Main List | True | False | True |
| EFT1T | 37 | 23 | 118 | 0.118644 | Baltic Main List | True | False | True |
| EWA1L | 29 | 29 | 118 | 0.000000 | First North Baltic Share List | False | False | False |
| GRG1L | 53 | 6 | 118 | 0.398305 | Baltic Main List | True | False | True |
| HAE1T | 37 | 24 | 118 | 0.110169 | Baltic Main List | True | False | True |
| HPR1T | 15 | 64 | 118 | -0.415254 | Baltic Main List | False | False | False |
| IDX1R | 19 | 52 | 118 | -0.279661 | Baltic Main List | False | False | False |
| IGN1L | 52 | 10 | 118 | 0.355932 | Baltic Main List | True | False | True |
| INC1L | 31 | 2 | 118 | 0.245763 | Baltic Secondary List | True | True | False |
| INL1L | 12 | 63 | 118 | -0.432203 | Baltic Secondary List | False | True | False |
| INR1L | 31 | 12 | 118 | 0.161017 | Baltic Secondary List | True | True | False |
| IVL1L | 47 | 0 | 118 | 0.398305 | Baltic Secondary List | True | True | False |
| KNE1L | 44 | 0 | 118 | 0.372881 | Baltic Main List | True | False | True |
| KNR1L | 13 | 2 | 118 | 0.093220 | Baltic Secondary List | True | True | False |
| LGD1L | 43 | 2 | 118 | 0.347458 | Baltic Secondary List | True | True | False |
| LHV1T | 32 | 24 | 118 | 0.067797 | Baltic Main List | True | False | True |
| LINDA | 5 | 93 | 118 | -0.745763 | First North Baltic Share List | False | False | False |
| MAGIC | 3 | 105 | 118 | -0.864407 | First North Baltic Share List | False | False | False |
| MDARA | 18 | 54 | 118 | -0.305085 | First North Baltic Share List | False | False | False |
| MODE | 22 | 40 | 118 | -0.152542 | First North Baltic Share List | False | False | False |
| MOLNR | 5 | 0 | 118 | 0.042373 | First North Baltic Share List | True | False | True |
| MRK1T | 44 | 0 | 118 | 0.372881 | Baltic Main List | True | False | True |
| NCN1T | 21 | 55 | 118 | -0.288136 | Baltic Main List | False | False | False |
| NEOFI | 9 | 54 | 118 | -0.381356 | First North Baltic Share List | False | False | False |
| PKG1T | 19 | 32 | 118 | -0.110169 | Baltic Main List | False | False | False |
| PRF1T | 1 | 112 | 118 | -0.940678 | Baltic Secondary List | False | True | False |
| PZV1L | 35 | 11 | 118 | 0.203390 | Baltic Main List | True | False | True |
| ROE1L | 37 | 19 | 118 | 0.152542 | Baltic Main List | True | False | True |
| RSU1L | 35 | 7 | 118 | 0.237288 | Baltic Main List | True | False | True |
| SAF1R | 12 | 26 | 118 | -0.118644 | Baltic Main List | False | False | False |
| SAUNA | 6 | 95 | 118 | -0.754237 | First North Baltic Share List | False | False | False |
| SCM1R | 1 | 13 | 118 | -0.101695 | Baltic Secondary List | False | True | False |
| SFG1T | 25 | 32 | 118 | -0.059322 | Baltic Main List | False | False | False |
| SKN1T | 5 | 99 | 118 | -0.796610 | Baltic Secondary List | False | True | False |
| TAL1T | 26 | 19 | 118 | 0.059322 | Baltic Main List | True | False | True |
| TEL1L | 42 | 22 | 118 | 0.169492 | Baltic Main List | True | False | True |
| TKM1T | 29 | 24 | 118 | 0.042373 | Baltic Main List | True | False | True |
| TPD1T | 13 | 80 | 118 | -0.567797 | Baltic Secondary List | False | True | False |
| TSM1T | 28 | 30 | 118 | -0.016949 | Baltic Main List | False | False | False |
| TVE1T | 30 | 26 | 118 | 0.033898 | Baltic Main List | True | False | True |
| UTR1L | 1 | 44 | 118 | -0.364407 | Baltic Secondary List | False | True | False |
| VBL1L | 23 | 24 | 118 | -0.008475 | Baltic Secondary List | False | True | False |
| VIRSI | 44 | 0 | 118 | 0.372881 | First North Baltic Share List | True | False | True |
| VLP1L | 43 | 0 | 118 | 0.364407 | Baltic Main List | True | False | True |
| ZMP1L | 35 | 4 | 118 | 0.262712 | Baltic Secondary List | True | True | False |

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
| ArithmeticReturn | 0.000404 | 0.000281 | 0.000289 | 0.000619 | 0.000354 | 0.000680 | 0.000392 | 0.000398 | 0.000480 | 0.000395 | 0.000624 | 0.000484 | 0.000417 |
| GeometricReturn | 0.000388 | 0.000271 | 0.000279 | 0.000603 | 0.000343 | 0.000663 | 0.000382 | 0.000388 | 0.000466 | 0.000385 | 0.000610 | 0.000476 | 0.000408 |
| AnnualizedReturn_Arithmetic | 0.101822 | 0.070824 | 0.072744 | 0.155939 | 0.089138 | 0.171390 | 0.098719 | 0.100296 | 0.120984 | 0.099563 | 0.157293 | 0.121915 | 0.105145 |
| AnnualizedReturn_Geometric | 0.102696 | 0.070677 | 0.072730 | 0.163971 | 0.090323 | 0.181757 | 0.100954 | 0.102608 | 0.124538 | 0.101728 | 0.166221 | 0.127412 | 0.108363 |
| CumulativeReturn | 0.339771 | 0.226705 | 0.233756 | 0.575080 | 0.295290 | 0.648194 | 0.333449 | 0.339451 | 0.420751 | 0.336254 | 0.584211 | 0.431642 | 0.360477 |
| Volatility | 0.005669 | 0.004476 | 0.004477 | 0.005683 | 0.004587 | 0.005876 | 0.004475 | 0.004540 | 0.005340 | 0.004596 | 0.005256 | 0.003947 | 0.004219 |
| Volatility_Annualized | 0.089992 | 0.071054 | 0.071078 | 0.090219 | 0.072824 | 0.093282 | 0.071039 | 0.072067 | 0.084769 | 0.072954 | 0.083429 | 0.062662 | 0.066973 |
| MaximumDrawdown | 0.198339 | 0.170192 | 0.166449 | 0.157736 | 0.151701 | 0.114377 | 0.143065 | 0.138179 | 0.186881 | 0.132771 | 0.131017 | 0.075343 | 0.116058 |
| AverageDrawdown | 0.025001 | 0.019669 | 0.024326 | 0.014763 | 0.017239 | 0.018675 | 0.017643 | 0.018183 | 0.014914 | 0.017957 | 0.015602 | 0.009260 | 0.012556 |
| AverageDrawdownLength | 55.384615 | 51.857143 | 65.727273 | 20.911765 | 34.380952 | 26.576923 | 37.210526 | 39.000000 | 27.692308 | 44.312500 | 24.821429 | 17.425000 | 27.076923 |
| AverageRecoveryTime | 29.538462 | 28.357143 | 36.181818 | 11.558824 | 13.809524 | 15.500000 | 14.526316 | 15.111111 | 17.153846 | 21.437500 | 14.750000 | 8.725000 | 10.115385 |
| Sharpe_Daily | 0.071275 | 0.062791 | 0.064471 | 0.108883 | 0.077106 | 0.115741 | 0.087540 | 0.087670 | 0.089906 | 0.085970 | 0.118766 | 0.122560 | 0.098898 |
| Sharpe_Annualized | 1.131452 | 0.996770 | 1.023446 | 1.728460 | 1.224019 | 1.837330 | 1.389649 | 1.391712 | 1.427221 | 1.364738 | 1.885345 | 1.945587 | 1.569957 |
| Sharpe_VaR | 0.063965 | 0.047693 | 0.052024 | 0.084465 | 0.061485 | 0.092984 | 0.066397 | 0.070684 | 0.068176 | 0.071441 | 0.094257 | 0.105568 | 0.087767 |
| Sharpe_ES | 0.031532 | 0.026852 | 0.027327 | 0.050547 | 0.033840 | 0.056387 | 0.037780 | 0.037525 | 0.040094 | 0.036520 | 0.053478 | 0.054764 | 0.044232 |
| Sortino | 0.104445 | 0.089978 | 0.090696 | 0.175636 | 0.113343 | 0.188039 | 0.126822 | 0.124911 | 0.138998 | 0.121638 | 0.180686 | 0.187358 | 0.149971 |
| Calmar | 0.517780 | 0.415279 | 0.436951 | 1.039527 | 0.595400 | 1.589095 | 0.705654 | 0.742575 | 0.666402 | 0.766189 | 1.268702 | 1.691086 | 0.933695 |
| Omega | 1.255296 | 1.207409 | 1.218241 | 1.377407 | 1.260146 | 1.408378 | 1.298163 | 1.305293 | 1.300715 | 1.301546 | 1.420607 | 1.422455 | 1.337581 |
| Sterling | 0.344226 | 0.261581 | 0.272960 | 0.636196 | 0.358849 | 0.847835 | 0.415339 | 0.430803 | 0.434110 | 0.437030 | 0.719520 | 0.726643 | 0.501545 |
| Burke | 0.719285 | 0.626776 | 0.642660 | 1.265723 | 0.799609 | 1.363583 | 0.914138 | 0.926048 | 0.960507 | 0.903216 | 1.321467 | 1.269866 | 0.997922 |
| Martin | 1.009283 | 0.743619 | 0.807360 | 2.110690 | 1.121867 | 3.631643 | 1.386084 | 1.525674 | 1.222933 | 1.655375 | 2.635455 | 4.752766 | 1.971670 |
| UlcerIndex | 0.101752 | 0.095045 | 0.090084 | 0.077686 | 0.080511 | 0.050048 | 0.072834 | 0.067254 | 0.101835 | 0.061453 | 0.063071 | 0.026808 | 0.054960 |
| PainIndex | 0.077279 | 0.077883 | 0.073764 | 0.058068 | 0.061619 | 0.038792 | 0.055230 | 0.050917 | 0.075457 | 0.046825 | 0.047385 | 0.018022 | 0.042080 |
| PainRatio | 1.328909 | 0.907476 | 0.985987 | 2.823785 | 1.465833 | 4.685408 | 1.827879 | 2.015216 | 1.650440 | 2.172525 | 3.507857 | 7.069835 | 2.575182 |
| VaR_Loss | 0.006317 | 0.005893 | 0.005549 | 0.007326 | 0.005753 | 0.007314 | 0.005900 | 0.005631 | 0.007042 | 0.005530 | 0.006622 | 0.004583 | 0.004754 |
| ES_Loss | 0.012814 | 0.010467 | 0.010563 | 0.012242 | 0.010453 | 0.012062 | 0.010369 | 0.010606 | 0.011974 | 0.010819 | 0.011672 | 0.008834 | 0.009433 |
| DownsideDeviation | 0.003869 | 0.003124 | 0.003183 | 0.003523 | 0.003121 | 0.003617 | 0.003089 | 0.003186 | 0.003454 | 0.003248 | 0.003454 | 0.002582 | 0.002782 |
| DrawdownDeviation | 0.007530 | 0.006487 | 0.006360 | 0.006733 | 0.006269 | 0.005894 | 0.005906 | 0.005779 | 0.007319 | 0.005503 | 0.005868 | 0.004089 | 0.005113 |
| Rachev | 1.100365 | 1.043589 | 1.025876 | 1.271580 | 1.114071 | 1.279184 | 1.067344 | 1.049732 | 1.175661 | 1.049030 | 1.167225 | 1.216316 | 1.159968 |
| AdjustedSharpe | 0.210110 | 0.614905 | 0.474911 | 1.081194 | 0.604269 | -0.056304 | 0.349252 | 0.023852 | 0.972030 | -0.040823 | -0.522513 | 0.407592 | 0.443091 |
| Skewness | -0.073388 | -0.397936 | -0.720441 | 0.377474 | -0.284450 | 0.625424 | -0.517818 | -0.804959 | 0.181686 | -0.927740 | -0.270819 | -0.320871 | -0.110549 |
| Kurtosis | 18.006497 | 10.657233 | 12.464893 | 6.881817 | 10.181225 | 11.688924 | 10.814045 | 12.865225 | 7.266982 | 13.552122 | 11.048650 | 7.352343 | 9.707420 |
| UpsidePotential | 0.513559 | 0.523794 | 0.506272 | 0.641010 | 0.549035 | 0.648494 | 0.552168 | 0.534062 | 0.601222 | 0.525020 | 0.610269 | 0.630857 | 0.594222 |
| UpsideRisk | 0.004158 | 0.003214 | 0.003158 | 0.004497 | 0.003377 | 0.004676 | 0.003258 | 0.003254 | 0.004096 | 0.003271 | 0.004005 | 0.003021 | 0.003195 |
| BernardoLedoit | 1.255296 | 1.207409 | 1.218241 | 1.377407 | 1.260146 | 1.408378 | 1.298163 | 1.305293 | 1.300715 | 1.301546 | 1.420607 | 1.422455 | 1.337581 |
| DRatio | 0.683389 | 0.725996 | 0.678011 | 0.636395 | 0.680759 | 0.619052 | 0.622612 | 0.619211 | 0.718885 | 0.624374 | 0.603865 | 0.600848 | 0.649296 |
| Hurst | 0.407249 | 0.373706 | 0.380678 | 0.330215 | 0.371346 | 0.385210 | 0.383093 | 0.391582 | 0.339636 | 0.390138 | 0.388151 | 0.337995 | 0.360201 |
| Kappa | 0.060508 | 0.055300 | 0.053849 | 0.116238 | 0.069496 | 0.120127 | 0.076783 | 0.073136 | 0.091296 | 0.070360 | 0.108401 | 0.117018 | 0.092636 |
| Kelly | 12.572804 | 14.028417 | 14.398990 | 19.158592 | 16.807867 | 19.696548 | 19.561870 | 19.311415 | 16.836604 | 18.706853 | 22.598090 | 31.048858 | 23.441691 |
| Prospect | -0.406948 | -0.452293 | -0.428775 | -0.406083 | -0.431271 | -0.387529 | -0.404860 | -0.386527 | -0.438782 | -0.382589 | -0.356293 | -0.367015 | -0.405343 |
| Information_Daily | -0.036358 | -0.047680 | -0.047078 | -0.018192 | -0.041528 | -0.012985 | -0.038213 | -0.037671 | -0.029827 | -0.037950 | -0.017862 | -0.030261 | -0.036143 |
| Information_Annualized | -0.671742 | -0.868339 | -0.858181 | -0.345150 | -0.763035 | -0.248219 | -0.705471 | -0.695964 | -0.556390 | -0.700843 | -0.339213 | -0.565188 | -0.669444 |
| CAPMAlpha | 0.000351 | 0.000242 | 0.000248 | 0.000564 | 0.000307 | 0.000626 | 0.000348 | 0.000352 | 0.000438 | 0.000348 | 0.000569 | 0.000446 | 0.000374 |
| JensenAlpha | 0.088778 | 0.060407 | 0.062126 | 0.149827 | 0.078254 | 0.167719 | 0.089470 | 0.090709 | 0.113489 | 0.089344 | 0.151827 | 0.117582 | 0.097191 |
| Treynor_Daily | 0.006375 | 0.006035 | 0.006009 | 0.009745 | 0.006504 | 0.010800 | 0.007602 | 0.007451 | 0.009642 | 0.007101 | 0.009697 | 0.011074 | 0.008359 |
| Treynor_Annualized | 1.687345 | 1.573709 | 1.568491 | 2.651296 | 1.711562 | 2.961042 | 2.010408 | 1.972026 | 2.577618 | 1.878642 | 2.640818 | 2.964063 | 2.218134 |
| Modigliani | 0.000788 | 0.000695 | 0.000713 | 0.001204 | 0.000853 | 0.001280 | 0.000968 | 0.000970 | 0.000995 | 0.000951 | 0.001314 | 0.001356 | 0.001094 |
| TrackingError_Daily | 0.011815 | 0.011463 | 0.011448 | 0.011812 | 0.011423 | 0.011911 | 0.011406 | 0.011412 | 0.011792 | 0.011412 | 0.011601 | 0.011288 | 0.011323 |
| TrackingError_Annualized | 0.187562 | 0.181970 | 0.181733 | 0.187509 | 0.181337 | 0.189078 | 0.181063 | 0.181160 | 0.187191 | 0.181155 | 0.184155 | 0.179192 | 0.179741 |
| M2Sortino | 0.108839 | 0.077033 | 0.079051 | 0.175263 | 0.098334 | 0.193567 | 0.109982 | 0.111307 | 0.133627 | 0.110080 | 0.178035 | 0.142257 | 0.119769 |
| Appraisal | 0.994195 | 0.856007 | 0.880431 | 1.673988 | 1.084088 | 1.811307 | 1.270121 | 1.269760 | 1.346451 | 1.236027 | 1.837228 | 1.891455 | 1.464217 |
| CAPMBeta | 0.060863 | 0.044911 | 0.046369 | 0.061845 | 0.052772 | 0.061383 | 0.050216 | 0.052032 | 0.048315 | 0.054150 | 0.062943 | 0.042986 | 0.048853 |
| ActiveReturn | -0.125993 | -0.158012 | -0.155959 | -0.064719 | -0.138367 | -0.046933 | -0.127735 | -0.126081 | -0.104151 | -0.126961 | -0.062468 | -0.101277 | -0.120327 |
| OmegaExcessReturn | 0.080547 | 0.052794 | 0.054507 | 0.143799 | 0.072455 | 0.161048 | 0.083269 | 0.084365 | 0.104763 | 0.083131 | 0.146443 | 0.112628 | 0.092434 |
| BetaCoSkewness | -1.019341 | -1.030977 | -1.139233 | -0.930234 | -1.006532 | -0.908119 | -1.100709 | -1.118876 | -1.079607 | -1.123072 | -0.954915 | -1.553752 | -1.637290 |
| BetaCoKurtosis | 0.080597 | 0.049011 | 0.051037 | 0.027872 | 0.047768 | 0.040181 | 0.045809 | 0.051584 | 0.023902 | 0.056251 | 0.050910 | -0.006561 | 0.024927 |
| CDD | 0.040296 | 0.035628 | 0.046112 | 0.027983 | 0.041533 | 0.044066 | 0.038434 | 0.043415 | 0.025972 | 0.047864 | 0.035587 | 0.018744 | 0.036589 |
| CoSkewness | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 | -0.000000 |
| CoKurtosis | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | 0.000000 | -0.000000 | 0.000000 |
| FamaBeta | 0.512493 | 0.404641 | 0.404778 | 0.513783 | 0.414724 | 0.531228 | 0.404556 | 0.410411 | 0.482748 | 0.415463 | 0.475119 | 0.356853 | 0.381402 |
| MSquaredExcess | -0.023036 | -0.043968 | -0.039889 | 0.073619 | -0.008871 | 0.092338 | 0.016973 | 0.017355 | 0.023837 | 0.013157 | 0.098611 | 0.104464 | 0.045111 |
| NetSelectivity | -0.014505 | -0.021860 | -0.019838 | 0.046474 | -0.004520 | 0.060270 | 0.008437 | 0.008752 | 0.014139 | 0.006716 | 0.057567 | 0.045804 | 0.021140 |
| Selectivity | 0.088778 | 0.060407 | 0.062126 | 0.149827 | 0.078254 | 0.167719 | 0.089470 | 0.090709 | 0.113489 | 0.089344 | 0.151827 | 0.117582 | 0.097191 |
| SpecificRisk | 0.089296 | 0.070568 | 0.070563 | 0.089503 | 0.072184 | 0.092596 | 0.070443 | 0.071438 | 0.084287 | 0.072284 | 0.082639 | 0.062165 | 0.066377 |
| SystematicRisk | 0.010687 | 0.007886 | 0.008142 | 0.010860 | 0.009267 | 0.010779 | 0.008818 | 0.009137 | 0.008484 | 0.009509 | 0.011053 | 0.007548 | 0.008578 |
| TotalRisk | 0.089933 | 0.071007 | 0.071031 | 0.090160 | 0.072777 | 0.093221 | 0.070992 | 0.072020 | 0.084713 | 0.072906 | 0.083375 | 0.062621 | 0.066929 |
| UpCapture | 0.105195 | 0.071291 | 0.073323 | 0.136728 | 0.092194 | 0.138263 | 0.090263 | 0.091277 | 0.102491 | 0.093247 | 0.133385 | 0.093040 | 0.095495 |
| UpNumber | 0.564220 | 0.555046 | 0.573394 | 0.550459 | 0.575688 | 0.555046 | 0.575688 | 0.580275 | 0.543578 | 0.584862 | 0.564220 | 0.548165 | 0.555046 |
| UpPercent | 0.172018 | 0.146789 | 0.144495 | 0.178899 | 0.158257 | 0.204128 | 0.153670 | 0.146789 | 0.183486 | 0.149083 | 0.178899 | 0.135321 | 0.162844 |
| DownCapture | 0.012873 | 0.006585 | 0.006889 | -0.011008 | 0.011399 | -0.027237 | -0.002297 | -0.002875 | -0.013063 | 0.000470 | -0.016812 | -0.026068 | -0.003259 |
| DownNumber | 0.503145 | 0.503145 | 0.493711 | 0.496855 | 0.518868 | 0.500000 | 0.484277 | 0.490566 | 0.525157 | 0.500000 | 0.503145 | 0.474843 | 0.493711 |
| DownPercent | 0.874214 | 0.893082 | 0.893082 | 0.861635 | 0.883648 | 0.877358 | 0.893082 | 0.889937 | 0.880503 | 0.883648 | 0.877358 | 0.902516 | 0.893082 |

</details>


Table 9 contains all 72 measures calculated directly with PerformanceAnalytics: measures are rows and portfolios are columns. S&P 500 is the benchmark for CAPM, information, tracking-error, capture and systematic-risk measures. It remains in Table 5 and the figures; it is omitted from Table 9 because its information ratio relative to itself has a zero tracking-error denominator.

## Decision risks and implementability

### Liquidity and turnover

<details markdown="1">
<summary><strong>Table 10. Proposed trades and observed one-year market liquidity</strong></summary>

| asset | trade_shares | trade_value_EUR | median_daily_turnover_EUR | zero_volume_fraction | trade_to_median_turnover | liquidity_flag |
| --- | --- | --- | --- | --- | --- | --- |
| GRG1L | 1523 | 1523.0000 | 12103.8375 | 0.0119 | 0.1258 | MEDIUM |
| KNE1L | 2973 | 1427.0400 | 14251.1950 | 0.0119 | 0.1001 | MEDIUM |
| TVE1T | 40 | 434.0000 | 14561.8250 | 0.0119 | 0.0298 | MEDIUM |
| HAE1T | 60 | 321.6000 | 17025.3300 | 0.0119 | 0.0189 | MEDIUM |
| DGR1R | 134 | 230.4800 | 12395.1510 | 0.0238 | 0.0186 | MEDIUM |
| EFT1T | 70 | 1372.0000 | 20301.0000 | 0.0119 | 0.0676 | LOW |
| VLP1L | 66 | 1029.6000 | 21740.5000 | 0.0119 | 0.0474 | LOW |
| TKM1T | -125 | 1112.5000 | 39988.8550 | 0.0119 | 0.0278 | LOW |
| AKO1L | 313 | 574.3550 | 22415.0500 | 0.0119 | 0.0256 | LOW |
| MRK1T | 34 | 921.4000 | 58112.4000 | 0.0119 | 0.0159 | LOW |
| APG1L | 89 | 339.0900 | 24617.8400 | 0.0119 | 0.0138 | LOW |
| TSM1T | -330 | 400.6200 | 45486.8640 | 0.0119 | 0.0088 | LOW |
| TEL1L | 140 | 320.6000 | 56394.4800 | 0.0119 | 0.0057 | LOW |
| TAL1T | -377 | 243.5420 | 77090.3715 | 0.0119 | 0.0032 | LOW |
| ROE1L | -347 | 305.3600 | 186591.6075 | 0.0119 | 0.0016 | LOW |
| IGN1L | 20 | 435.0000 | 284652.8000 | 0.0119 | 0.0015 | LOW |
| CPA1T | 49 | 115.1500 | 78807.5240 | 0.0119 | 0.0015 | LOW |
| LHV1T | 37 | 120.2500 | 269011.2300 | 0.0119 | 0.0004 | LOW |
| MOLNR | 8 | 163.2000 | 98.0000 | 0.2937 | 1.6653 | HIGH |
| RSU1L | 163 | 730.2400 | 1184.3000 | 0.0516 | 0.6166 | HIGH |
| SAF1R | -100 | 1635.0000 | 7531.2500 | 0.0238 | 0.2171 | HIGH |
| PZV1L | 261 | 468.4950 | 4516.2250 | 0.0119 | 0.1037 | HIGH |
| VIRSI | 39 | 172.3800 | 2721.0000 | 0.0238 | 0.0634 | HIGH |

</details>


Median daily turnover and zero-volume frequency use official Nasdaq Baltic price-volume observations from the last 365 calendar days of the sample. Trade-to-turnover is the proposed absolute order value divided by median daily turnover. HIGH flags median turnover below EUR 5,000 or an order above 20% of median turnover; MEDIUM flags below EUR 20,000 or above 10%. These are transparent screening thresholds, not a guarantee of execution. HIGH trades should be split, limited or omitted after checking the live order book.

<details markdown="1">
<summary><strong>Table 11. Illustrative transaction-cost and turnover scenario</strong></summary>

| portfolio | turnover_EUR | number_of_trades | estimated_cost_EUR | high_liquidity_risk_trades | cost_percent_of_15000 |
| --- | --- | --- | --- | --- | --- |
| Baltic_NetSD | 14394.9020 | 23 | 183.0235 | 5 | 1.2202 |
| curent_update_baltic | 7004.5610 | 21 | 119.2126 | 4 | 0.7948 |

</details>


The cost scenario uses max(EUR 3, 0.25% of trade value) commission plus an assumed spread/impact of 0.25%, 0.75% or 2.00% for LOW, MEDIUM or HIGH liquidity risk. These are sensitivity assumptions rather than broker quotes. Reported historical returns and dividends are gross; subtract the displayed cost before interpreting an implementation result.

### Capital concentration

<details markdown="1">
<summary><strong>Table 12. Top-position and effective-position concentration</strong></summary>

| portfolio | positions | top5_share | top10_share | HHI | effective_positions |
| --- | --- | --- | --- | --- | --- |
| Baltic_NetSD | 21 | 0.5062 | 0.8170 | 0.0765 | 13.0685 |
| curent_update_baltic | 23 | 0.5168 | 0.7415 | 0.0779 | 12.8315 |

</details>


<details markdown="1">
<summary><strong>Table 12A. Baltic_NetSD: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 2.70 |
| country_market | TLN | 41.47 |
| country_market | VLN | 55.83 |
| segment | Baltic Main List | 97.75 |
| segment | First North Baltic Share List | 2.25 |
| Industry | Basic Materials | 10.21 |
| Industry | Consumer Discretionary | 19.67 |
| Industry | Consumer Staples | 23.19 |
| Industry | Financials | 12.32 |
| Industry | Health Care | 1.09 |
| Industry | Industrials | 25.13 |
| Industry | Telecommunications | 2.15 |
| Industry | Utilities | 5.83 |
| Industry | nan | 0.41 |
| Supersector | Banks | 1.58 |
| Supersector | Basic Resources | 10.21 |
| Supersector | Construction and Materials | 9.81 |
| Supersector | Financial Services | 10.75 |
| Supersector | Food, Beverage and Tobacco | 23.19 |
| Supersector | Health Care | 1.09 |
| Supersector | Industrial Goods and Services | 15.32 |
| Supersector | Retail | 18.27 |
| Supersector | Telecommunications | 2.15 |
| Supersector | Travel and Leisure | 1.40 |
| Supersector | Utilities | 5.83 |
| Supersector | nan | 0.41 |

</details>


<details markdown="1">
<summary><strong>Table 12B. curent_update_baltic: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 15.08 |
| country_market | TLN | 48.21 |
| country_market | VLN | 36.71 |
| segment | Baltic Main List | 93.29 |
| segment | First North Baltic Share List | 6.71 |
| Industry | Basic Materials | 3.64 |
| Industry | Consumer Discretionary | 33.73 |
| Industry | Consumer Staples | 14.04 |
| Industry | Financials | 3.28 |
| Industry | Health Care | 3.01 |
| Industry | Industrials | 19.88 |
| Industry | Telecommunications | 12.16 |
| Industry | Utilities | 7.06 |
| Industry | nan | 3.19 |
| Supersector | Banks | 2.47 |
| Supersector | Basic Resources | 3.64 |
| Supersector | Construction and Materials | 7.99 |
| Supersector | Financial Services | 0.81 |
| Supersector | Food, Beverage and Tobacco | 14.04 |
| Supersector | Health Care | 3.01 |
| Supersector | Industrial Goods and Services | 11.89 |
| Supersector | Retail | 28.90 |
| Supersector | Telecommunications | 12.16 |
| Supersector | Travel and Leisure | 4.83 |
| Supersector | Utilities | 7.06 |
| Supersector | nan | 3.19 |

</details>


The number of holdings is not a diversification measure. Top-five and top-ten shares show how much capital is concentrated in the largest positions; HHI and the effective number of positions measure weight concentration. Country, list, industry and supersector totals expose common economic exposures that a position count conceals. Very small positions add trading complexity while making little difference to risk.

### In-sample, out-of-sample and complete-period validation

<details markdown="1">
<summary><strong>Table 13A. In-sample portfolio-return statistics for the 70% training window</strong></summary>

| period | portfolio | observations | mean | median | SD | minimum | maximum |
| --- | --- | --- | --- | --- | --- | --- | --- |
| In-sample training | Markowitz | 527 | 0.000027 | 0.000176 | 0.004759 | -0.025519 | 0.017324 |
| In-sample training | MAD | 527 | 0.000036 | 0.000107 | 0.004809 | -0.028989 | 0.017095 |
| In-sample training | Minimax | 527 | 0.000366 | 0.000275 | 0.005969 | -0.021554 | 0.030058 |
| In-sample training | Robust | 527 | 0.000156 | 0.000159 | 0.004914 | -0.026819 | 0.018079 |
| In-sample training | NetSD | 527 | 0.000634 | 0.000275 | 0.006803 | -0.030548 | 0.047554 |
| In-sample training | Current | 527 | 0.000027 | 0.000183 | 0.006017 | -0.040123 | 0.024829 |

</details>


<details markdown="1">
<summary><strong>Table 13B. Out-of-sample portfolio-return statistics for the 30% holdout window</strong></summary>

| period | portfolio | observations | mean | median | SD | minimum | maximum |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Out-of-sample test | Markowitz | 227 | 0.000967 | 0.000772 | 0.004877 | -0.022545 | 0.027713 |
| Out-of-sample test | MAD | 227 | 0.000945 | 0.000731 | 0.004771 | -0.025817 | 0.026779 |
| Out-of-sample test | Minimax | 227 | 0.001338 | 0.000600 | 0.006351 | -0.022953 | 0.029115 |
| Out-of-sample test | Robust | 227 | 0.000917 | 0.000450 | 0.005004 | -0.023252 | 0.026893 |
| Out-of-sample test | NetSD | 227 | 0.001277 | 0.000641 | 0.006417 | -0.027866 | 0.026494 |
| Out-of-sample test | Current | 227 | 0.001373 | 0.000708 | 0.006532 | -0.022371 | 0.046525 |

</details>


Tables 13A and 13B use the same fixed 70/30 split. Portfolio weights are estimated from the training window and then left unchanged in the holdout window. Table 5 remains the complete-period description; it must not be interpreted as an independent test.

<details markdown="1">
<summary><strong>Table 13C. Existing 70/30 holdout experiment: portfolio-only netSD on unseen test data</strong></summary>

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


The final Baltic_NetSD weights were selected on the complete 2023–2026 sample. Their 12.74% annualised geometric return and 1.95 annualised Sharpe ratio are therefore in-sample descriptions, not forecasts. The earlier 70/30 experiment is the available independent check: weights were fixed from the first 70% and assessed on the last 30%. Its NetSD portfolio has a negative test-network netSD, which is direct evidence of model-selection instability. No trade should rely on the full-sample figures without a new walk-forward or future-paper-trading test.

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

Sources: official Nasdaq Baltic share-list and dividend/event workbooks; Yahoo Finance unadjusted closing prices downloaded through quantmod; official Nasdaq Baltic corrections for MODE and MOLNR in 2025 and the complete VIRSI history. Return analysis ends 2026-10-16; latest valuation prices run through 2026-10-19.
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
document.querySelectorAll('details.profiles-section').forEach(function(section) {
  const filters=[...section.querySelectorAll('.profile-filters input[type="checkbox"]')];
  const profiles=[...section.querySelectorAll(':scope > details.stock-profile')];
  const counter=section.querySelector('.profile-filter-count');
  function applyProfileFilters() {
    const selected=new Set(filters.filter(box=>box.checked).map(box=>box.value));
    let visible=0;
    profiles.forEach(function(profile) {
      const show=selected.has(profile.dataset.signal);
      profile.hidden=!show;
      if (!show) profile.open=false;
      if (show) visible++;
    });
    if (counter) counter.textContent=`${visible} of ${profiles.length} shares shown`;
  }
  filters.forEach(box=>box.addEventListener('change',applyProfileFilters));
  applyProfileFilters();
});
document.querySelectorAll('details.portfolio-sensitivity').forEach(function(sensitivity) {
  sensitivity.addEventListener('toggle', function() {
    if (!sensitivity.open) return;
    const components = sensitivity.querySelector('details.dominance-components');
    if (components) components.open = true;
  });
});

const palette = ['#888','#999','#aaa','#777','#5b8','#9467bd','#8c564b','#e377c2','#7f7f7f','#bcbd22','#17becf','#4c78a8','#f58518','#54a24b'];
function initialiseDominanceExplorer(box) {
  if (box.dataset.loaded) return;
  box.dataset.loaded = 'loading';
  const asset = box.dataset.asset;
  fetch(`interactive/dominance/${asset}.json`).then(r => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); }).then(data => {
    const first=data.orders.FSD, seriesNames=Object.keys(first.series), preferred=['SP500','Current','curent_update_baltic','Baltic_NetSD'];
    const benchmarks=[...preferred.filter(x=>seriesNames.includes(x)),...seriesNames.filter(x=>x!==asset&&!preferred.includes(x))];
    box.innerHTML = `<div class="dominance-controls">
      <label>Component<select class="dom-order"><option>FSD</option><option>SSD</option><option>TSD</option></select></label>
      <label>Difference benchmark<select class="dom-benchmark">${benchmarks.map(x=>`<option>${x}</option>`).join('')}</select></label>
      <label>X position: <output class="dom-xout">50.0%</output><input class="dom-xpos" type="range" min="0" max="1000" value="500" step="1"></label>
      <label>Horizontal magnification: <output class="dom-hout">8x</output><input class="dom-hzoom" type="range" min="1" max="100" value="8" step="1"></label>
      <label>Curve vertical magnification: <output class="dom-vout">1x</output><input class="dom-vzoom" type="range" min="1" max="30" value="1" step="0.5"></label>
      <label>Difference vertical magnification: <output class="dom-dout">1x</output><input class="dom-dzoom" type="range" min="1" max="40" value="1" step="0.5"></label>
      <button class="dom-save" type="button">Save high-resolution PNG</button>
    </div><canvas class="dominance-canvas"></canvas><p class="dominance-status">Move the x-position slider, click a left-hand graph, or use the mouse wheel over it. The right-hand panels magnify the selected interval.</p>`;
    const canvas=box.querySelector('canvas'), order=box.querySelector('.dom-order'), benchmark=box.querySelector('.dom-benchmark'), xpos=box.querySelector('.dom-xpos'), hz=box.querySelector('.dom-hzoom'), vz=box.querySelector('.dom-vzoom'), dz=box.querySelector('.dom-dzoom'), status=box.querySelector('.dominance-status');
    let centre=.5, hit=[];
    function render() {
      const d=data.orders[order.value], x=d.x, names=Object.keys(d.series), n=x.length;
      const rect=canvas.getBoundingClientRect(), ratio=Math.min(Math.max(window.devicePixelRatio||1,2),3);
      canvas.width=Math.max(900,Math.round(rect.width*ratio)); canvas.height=Math.round(rect.height*ratio);
      const ctx=canvas.getContext('2d'); ctx.setTransform(ratio,0,0,ratio,0,0); const W=canvas.width/ratio,H=canvas.height/ratio;
      ctx.clearRect(0,0,W,H); ctx.font='12px system-ui';
      const L=67,R=18,T=72,rowGap=64,colGap=48,leftW=(W-L-R-colGap)*.64,rightW=(W-L-R-colGap)*.36,panelH=(H-T-rowGap-48)/2;
      const main={l:L,r:L+leftW,t:T,b:T+panelH}, zoom={l:L+leftW+colGap,r:W-R,t:T,b:T+panelH};
      const diff={l:L,r:L+leftW,t:T+panelH+rowGap,b:T+2*panelH+rowGap}, diffZoom={l:L+leftW+colGap,r:W-R,t:T+panelH+rowGap,b:T+2*panelH+rowGap}; hit=[main,diff];
      const mid=Math.round(centre*(n-1)), count=Math.max(8,Math.round(n/Number(hz.value))), lo=Math.max(0,Math.min(n-count,mid-Math.floor(count/2))), hi=Math.min(n-1,lo+count-1);
      const bench=benchmark.value, difference=d.series[asset].map((v,i)=>v-d.series[bench][i]);
      function yrange(i0,i1,keys=names) { let mn=Infinity,mx=-Infinity; keys.forEach(k=>{for(let i=i0;i<=i1;i++){const v=d.series[k][i];if(v<mn)mn=v;if(v>mx)mx=v;}}); if(mx===mn){mx+=1;mn-=1} return [mn,mx]; }
      function arrayRange(a,i0,i1){let mn=Infinity,mx=-Infinity;for(let i=i0;i<=i1;i++){if(a[i]<mn)mn=a[i];if(a[i]>mx)mx=a[i];}if(mx===mn){mx+=1;mn-=1}return[mn,mx];}
      function magnify(y,m){const c=(y[0]+y[1])/2,h=(y[1]-y[0])/2/Number(m);return[c-h,c+h];}
      function axes(p,x0,x1,y0,y1,label) { ctx.strokeStyle='#9aabb5';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.l,p.t);ctx.lineTo(p.l,p.b);ctx.lineTo(p.r,p.b);ctx.stroke();ctx.fillStyle='#263d4b';ctx.fillText(label,p.l,p.t-9); for(let j=0;j<=6;j++){const xx=p.l+(p.r-p.l)*j/6,xv=x0+(x1-x0)*j/6;ctx.fillText(xv.toFixed(5),xx-22,p.b+17);} for(let j=0;j<=5;j++){const yy=p.b-(p.b-p.t)*j/5,yv=y0+(y1-y0)*j/5;ctx.fillText(yv.toExponential(2),Math.max(1,p.l-62),yy+4);} if(y0<=0&&y1>=0){const zy=p.b-(0-y0)/(y1-y0)*(p.b-p.t);ctx.strokeStyle='#17212b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(p.l,zy);ctx.lineTo(p.r,zy);ctx.stroke();ctx.fillStyle='#17212b';ctx.font='bold 13px system-ui';ctx.fillText('0',p.l-15,zy+4);ctx.font='12px system-ui';} }
      function plot(p,i0,i1,y0,y1) { names.forEach((k,ki)=>{const special=k===asset||k==='Current'||k==='Baltic_NetSD'||k==='curent_update_baltic'||k===bench;ctx.strokeStyle=k===asset?'#c2185b':k==='Current'?'#009e73':k==='Baltic_NetSD'?'#0072b2':k==='curent_update_baltic'?'#d55e00':k===bench?'#6a3d9a':palette[ki%palette.length];ctx.globalAlpha=special?1:.30;ctx.lineWidth=k===asset?3:special?2.1:1;ctx.beginPath();for(let i=i0;i<=i1;i++){const px=p.l+(x[i]-x[i0])/(x[i1]-x[i0]||1)*(p.r-p.l),py=p.b-(d.series[k][i]-y0)/(y1-y0||1)*(p.b-p.t);if(i===i0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}ctx.stroke();});ctx.globalAlpha=1; }
      function plotDifference(p,i0,i1,y0,y1){ctx.strokeStyle='#c2185b';ctx.lineWidth=2.8;ctx.beginPath();for(let i=i0;i<=i1;i++){const px=p.l+(x[i]-x[i0])/(x[i1]-x[i0]||1)*(p.r-p.l),py=p.b-(difference[i]-y0)/(y1-y0||1)*(p.b-p.t);if(i===i0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}ctx.stroke();}
      const ym=yrange(0,n-1); axes(main,x[0],x[n-1],ym[0],ym[1],`${asset}: ${order.value} components - scroll or click to move`); plot(main,0,n-1,ym[0],ym[1]);
      const sx0=main.l+(x[lo]-x[0])/(x[n-1]-x[0])*(main.r-main.l), sx1=main.l+(x[hi]-x[0])/(x[n-1]-x[0])*(main.r-main.l);ctx.strokeStyle='#d7191c';ctx.lineWidth=2;ctx.strokeRect(sx0,main.t,Math.max(2,sx1-sx0),main.b-main.t);
      let yz=magnify(yrange(lo,hi),vz.value); axes(zoom,x[lo],x[hi],yz[0],yz[1],`Magnified components (${hz.value}x by ${vz.value}x)`); plot(zoom,lo,hi,yz[0],yz[1]);
      let yd=arrayRange(difference,0,n-1);axes(diff,x[0],x[n-1],yd[0],yd[1],`${asset} minus ${bench}`);plotDifference(diff,0,n-1,yd[0],yd[1]);ctx.strokeStyle='#d7191c';ctx.lineWidth=2;ctx.strokeRect(sx0,diff.t,Math.max(2,sx1-sx0),diff.b-diff.t);
      let ydz=magnify(arrayRange(difference,lo,hi),dz.value);axes(diffZoom,x[lo],x[hi],ydz[0],ydz[1],`Magnified difference (${hz.value}x by ${dz.value}x)`);plotDifference(diffZoom,lo,hi,ydz[0],ydz[1]);
      const legend=[asset,'Current','Baltic_NetSD','curent_update_baltic',bench].filter((k,i,a)=>d.series[k]&&a.indexOf(k)===i); legend.forEach((k,j)=>{ctx.fillStyle=k===asset?'#c2185b':k==='Current'?'#009e73':k==='Baltic_NetSD'?'#0072b2':k==='curent_update_baltic'?'#d55e00':'#6a3d9a';ctx.fillRect(L+(j%3)*190,18+Math.floor(j/3)*20,22,4);ctx.fillStyle='#263d4b';ctx.fillText(k,L+29+(j%3)*190,23+Math.floor(j/3)*20);});
      const values=[asset,'Current',bench].filter((k,i,a)=>d.series[k]&&a.indexOf(k)===i).map(k=>`${k}=${d.series[k][mid].toExponential(5)}`).join(' | '); status.textContent=`x=${x[mid].toFixed(6)}; selected interval [${x[lo].toFixed(6)}, ${x[hi].toFixed(6)}]; difference=${difference[mid].toExponential(5)} | ${values}`;
      xpos.value=Math.round(centre*1000);box.querySelector('.dom-xout').value=`${(100*centre).toFixed(1)}%`;box.querySelector('.dom-hout').value=`${hz.value}x`;box.querySelector('.dom-vout').value=`${vz.value}x`;box.querySelector('.dom-dout').value=`${dz.value}x`;
    }
    [order,benchmark,hz,vz,dz].forEach(el=>el.addEventListener('input',render));xpos.addEventListener('input',()=>{centre=Number(xpos.value)/1000;render();});
    canvas.addEventListener('click',e=>{const r=canvas.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;const p=hit.find(q=>px>=q.l&&px<=q.r&&py>=q.t&&py<=q.b);if(p){centre=Math.max(0,Math.min(1,(px-p.l)/(p.r-p.l)));render();}});
    canvas.addEventListener('wheel',e=>{const r=canvas.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;if(hit.some(q=>px>=q.l&&px<=q.r&&py>=q.t&&py<=q.b)){e.preventDefault();centre=Math.max(0,Math.min(1,centre+Math.sign(e.deltaY)*.015));render();}},{passive:false});
    box.querySelector('.dom-save').addEventListener('click',()=>{const a=document.createElement('a');a.download=`${asset}_${order.value}_interactive.png`;a.href=canvas.toDataURL('image/png');a.click();});
    window.addEventListener('resize',render); render(); box.dataset.loaded='yes';
  }).catch(err=>{box.innerHTML=`<p>Interactive graph could not be loaded: ${err.message}</p>`;box.dataset.loaded='';});
}
document.querySelectorAll('details.dominance-components').forEach(function(d) { d.addEventListener('toggle',function(){if(d.open){const box=d.querySelector('.dominance-explorer');if(box)initialiseDominanceExplorer(box);}}); });
</script>
</body></html>
