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
<script>
window.MathJax = {tex: {inlineMath: [['$', '$'], ['\\(', '\\)']], displayMath: [['$$', '$$'], ['\\[', '\\]']]}, svg: {fontCache: 'global'}};
</script>
<script defer src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
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
.analytics-group { margin:1.6rem 0; padding:.5rem 1rem 1rem; border:2px solid #8fb9c2; background:#f4fafb; }
.analytics-group > summary { padding:.55rem .2rem; color:#173246; font-size:1.35rem; cursor:pointer; }
.analytics-group > .report-section { margin-left:.4rem; background:#fff; }
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
  .profile-filters fieldset { display:flex; flex-wrap:wrap; align-items:center; gap:.45rem .8rem; margin:0; padding:.35rem .65rem; border:1px solid #c6d8de; border-radius:6px; }
  .profile-filters legend { padding:0 .3rem; color:#29485a; font-size:.78rem; font-weight:750; }
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
.metric-help-button { display:inline-block; padding:.2rem .15rem; border:0; border-bottom:1px dotted #16889a; background:transparent; color:#174d61; font:inherit; font-weight:700; text-align:left; cursor:pointer; }
.metric-help-button:hover,.metric-help-button:focus { color:#087f91; background:#eef7f8; outline:2px solid #9bd1d8; outline-offset:2px; }
.metric-modal[hidden] { display:none; }
.metric-modal { position:fixed; inset:0; z-index:10000; display:grid; place-items:center; padding:20px; background:#10263199; }
.metric-modal-card { position:relative; width:min(520px,94vw); padding:1.2rem 1.35rem; border:1px solid #85aeb8; border-radius:10px; background:#fff; box-shadow:0 18px 55px #10263166; color:#29485a; }
.metric-modal-card h3 { margin:0 2rem .8rem 0; color:#174d61; }
.metric-modal-card p { margin:.6rem 0; line-height:1.5; }
.metric-modal-close { position:absolute; top:.55rem; right:.65rem; width:2rem; height:2rem; border:0; border-radius:50%; background:#e5f2f4; color:#174d61; font-size:1.35rem; cursor:pointer; }
img { display:block; max-width:100%; height:auto; margin:1rem auto; border:1px solid var(--line); border-radius:6px; cursor:zoom-in; }
.dominance-explorer { margin:1rem 0; padding:12px; border:1px solid #bfd1d9; border-radius:8px; background:#fff; }
.dominance-controls { display:grid; grid-template-columns:repeat(4,minmax(150px,1fr)); gap:10px 18px; align-items:end; margin-bottom:10px; }
.dominance-controls label { display:grid; gap:3px; color:#29485a; font-size:.86rem; }
.dominance-controls select,.dominance-controls input { width:100%; }
.dominance-controls button { min-height:35px; border:1px solid #8aa6b2; border-radius:5px; color:#174d61; background:#eef7f8; cursor:pointer; }
.dominance-multiselect-wrap { grid-column:span 3; }
.dominance-multiselect { width:100%; min-height:190px; padding:.35rem; border:1px solid #8aa6b2; border-radius:6px; background:white; }
.dominance-multiselect optgroup { color:#173246; font-weight:700; }
.dominance-multiselect option { color:#29485a; font-weight:400; padding:.18rem .35rem; }
.dominance-compact-select { min-height:125px; height:125px; }
.dominance-compact-wrap { min-width:0; }
.dominance-canvas { width:100%; height:735px; border:1px solid var(--line); border-radius:5px; cursor:crosshair; }
.dominance-status { margin:.45rem 0 0; color:#455f70; font-size:.84rem; font-variant-numeric:tabular-nums; }
.frontier-explorer { margin:1rem 0; padding:12px; border:1px solid #bfd1d9; border-radius:8px; background:#fff; }
.frontier-controls { display:grid; grid-template-columns:repeat(4,minmax(150px,1fr)); gap:10px 18px; align-items:end; margin-bottom:10px; }
.frontier-controls label { display:grid; gap:3px; color:#29485a; font-size:.86rem; }
.frontier-controls select,.frontier-controls input { width:100%; }
.frontier-controls button { min-height:35px; border:1px solid #8aa6b2; border-radius:5px; color:#174d61; background:#eef7f8; cursor:pointer; }
.frontier-multiselect-wrap { grid-column:span 3; display:grid; gap:.25rem; color:#29485a; font-size:.86rem; }
.frontier-multiselect { width:100%; min-height:190px; padding:.35rem; border:1px solid #8aa6b2; border-radius:6px; background:white; }
.frontier-multiselect optgroup { color:#173246; font-weight:700; }
.frontier-multiselect option { color:#29485a; font-weight:400; padding:.18rem .35rem; }
.frontier-select-help { color:#607080; font-size:.76rem; }
.frontier-canvas { width:100%; height:620px; border:1px solid var(--line); border-radius:5px; cursor:crosshair; }
.frontier-status { margin:.45rem 0 0; color:#455f70; font-size:.84rem; font-variant-numeric:tabular-nums; }
.cumulative-explorer { margin:1rem 0; padding:12px; border:1px solid #bfd1d9; border-radius:8px; background:#fff; }
.cumulative-controls { display:grid; grid-template-columns:minmax(260px,1fr) auto auto; gap:12px; align-items:end; margin-bottom:10px; }
.cumulative-multiselect-wrap { display:grid; gap:.25rem; color:#29485a; font-size:.86rem; }
.cumulative-multiselect { width:100%; min-height:190px; padding:.35rem; border:1px solid #8aa6b2; border-radius:6px; background:white; }
.cumulative-multiselect optgroup { color:#173246; font-weight:700; }
.cumulative-multiselect option { color:#29485a; font-weight:400; padding:.18rem .35rem; }
.cumulative-controls button { min-height:35px; border:1px solid #8aa6b2; border-radius:5px; color:#174d61; background:#eef7f8; cursor:pointer; }
.cumulative-canvas { width:100%; height:690px; border:1px solid var(--line); border-radius:5px; }
.cumulative-status { margin:.45rem 0 0; color:#455f70; font-size:.84rem; font-variant-numeric:tabular-nums; }
@media(max-width:900px) { .dominance-controls { grid-template-columns:1fr 1fr; } .dominance-canvas { height:675px; } }
@media(max-width:900px) { .cumulative-controls { grid-template-columns:1fr 1fr; } .cumulative-multiselect-wrap { grid-column:1/-1; } }
a { color:var(--accent); }
@media(max-width:700px) { main { width:100%; margin:0; padding:22px 8px; border-radius:0; } h1 { font-size:1.7rem; } .add-one-comparison table { font-size:.62rem; } .add-one-comparison th { height:128px; } }
</style>
</head>
<body><main markdown="1">
# Baltic investment plan - updated 2026-10-28 15:04 (Europe/Vilnius); return analysis through 2026-10-27; valuation prices through 2026-10-27

Private Nasdaq Baltic portfolio analysis. Tables, figures and individual-share information are collapsed; select a title to expand it.


---

# Nasdaq Baltic universe: maximum-netSD portfolio

Study period: 2023-01-01 to 2026-10-27 | Portfolio ceiling: EUR 15,000 | Existing positions may be sold

Return statistics use complete common trading dates through 2026-10-27. Valuation, whole-share quantities and EUR trade amounts use each share's latest observed close through 2026-10-27.

<details markdown="1" class="analytics-group" id="analytics-1" open>
<summary><strong>1. Share analytics</strong></summary>

<details markdown="1" class="report-section" id="analytics-1-1">
<summary><strong>1.1. Table 1.a. Interactive share profiles</strong></summary>

**Decision scenario used in every profile: Update2 penalty, no sales.** Target shares and allocation changes therefore come from the latest direct penalised-netSD portfolio that retains every current position. Other allocation tables are alternative models or diagnostic experiments and must not be combined with these quantities.

Select a share to display its allocation, technical indicators, performance and liquidity measures, and portfolio sensitivity. Click any measure name to open its meaning, calculation and interpretation. Average annual dividend is the mean of the official annual dividend per share totals for 2022–2026; a year without a distribution contributes zero, and future ex-dividend dates after the report update date are excluded.

<div class="profile-filters"><fieldset class="signal-filters"><legend>Current execution decision</legend><label><input type="checkbox" value="BUY" checked> BUY</label><label><input type="checkbox" value="WAIT" checked> WAIT</label><label><input type="checkbox" value="SELL" checked> SELL</label><label><input type="checkbox" value="HOLD" checked> HOLD</label><label><input type="checkbox" value="SKIP" checked> SKIP</label></fieldset><fieldset class="netsd-filters"><legend>netSD after adding this share</legend><label><input type="checkbox" value="INCREASE" checked> Increases</label><label><input type="checkbox" value="DECREASE" checked> Decreases</label><label><input type="checkbox" value="UNCHANGED" checked> Unchanged</label></fieldset><fieldset class="dividend-filters"><legend>Dividends paid at least once in 2022–2026</legend><label><input type="checkbox" value="PAID" checked> Paid dividends</label><label><input type="checkbox" value="NONE" checked> No dividends paid</label></fieldset><span class="profile-filter-count" aria-live="polite"></span></div>

<details markdown="1" class="stock-profile" id="share-kne1l" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>KNE1L — KN Energies</strong> | current action: WAIT | allocation target 1442 shares | netSD diagnostic rank 1</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>928</td><td>1442</td><td>+514</td><td>4.58%</td><td>EUR 0.4760</td><td>0.3950</td><td>47 / 0</td><td>31.28</td><td>Bearish</td><td>Inside bands</td><td>0.102 (Oversold)</td><td>EUR 0.0129 / share</td><td>HOLD</td><td>BUY</td><td>0.002094 (2.613% of portfolio HHI)</td><td>EUR 13,936</td><td>3.0%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![KNE1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/KNE1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 0.4760 | ≤ EUR 0.4755 | ≥ EUR 0.4893 | HOLD |
| RSI(14) | RSI = 31.28 | ≤ EUR 0.4751 | ≥ EUR 0.5006 | HOLD |
| Stochastic RSI %K | %K = 0.102 | ≤ EUR 0.4770 | ≥ EUR 0.4806 | BUY |
| MACD crossover | MACD = -0.0031<br>Signal = -0.0026<br>Gap = -0.0005<br>Bullish crossover close ≈ EUR 0.4840 | — | — | SELL |
| Consensus | BUY 1/4; SELL 1/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![KNE1L complete technical history](figures/technical_analysis/KNE1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![KNE1L return histogram](figures/stock_profiles/KNE1L_histogram.png?v=1793184542)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -26.64% (2023-12-20) | Average gain / average loss | 1.211 | Best 21-day period | 24.84% (ending 2025-12-08) |
| Average underwater drawdown | 10.86% | Upside potential ratio | 1.466 | Worst 21-day period | -9.36% (ending 2024-02-12) |
| Conditional drawdown 95% | 24.99% | Upside capture vs Baltic EW | 100.1% | Best 5-day period | 14.81% (ending 2025-12-05) |
| Ulcer index | 12.88 | Downside capture vs Baltic EW | 43.3% | Best 63-day period | 41.74% (ending 2026-01-09) |
| Longest underwater period | 728 calendar days | Positive trading days | 37.0% | Repeated calendar pattern | Jan: 100% positive across 4 years |
| Daily downside deviation | 0.726% | Best day | 8.61% (2024-01-08) |  |  |
| Daily upside deviation | 0.930% | Worst day | -7.37% (2025-05-14) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.267%); worst: Tuesday (-0.035%) | 0.0315 | 0.1207 | Not detected |
| Calendar month | Best: Jan (0.515% daily); worst: Mar (-0.161% daily) | 0.3813 | 0.5263 | Not detected |
| Turn of month | First/last three days: 0.266%; other days: 0.035% | 0.0269 | 0.1549 | Not detected |

![KNE1L seasonality, drawdowns and upside periods](figures/stock_profiles/KNE1L_seasonality.png?v=1792941246)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-01-27 | 2023-12-20 | 2025-01-24 | -26.64% | 728 |
| 2 | 2026-01-09 | 2026-03-27 | 2026-05-05 | -10.77% | 116 |
| 3 | 2026-05-08 | 2026-05-20 | 2026-06-02 | -10.23% | 25 |
| 4 | 2025-05-13 | 2025-06-25 | 2025-08-22 | -8.33% | 101 |
| 5 | 2026-08-21 | 2026-10-22 | Not recovered | -5.73% | 63 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-11-07 | 2025-12-08 | 24.84% |
| 2 | 2024-12-19 | 2025-01-24 | 16.10% |
| 3 | 2025-12-10 | 2026-01-15 | 15.32% |
| 4 | 2023-12-11 | 2024-01-12 | 14.63% |
| 5 | 2023-01-02 | 2023-01-31 | 13.33% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (24 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 1 | 0.90% | 1.90% | 4.80% | 100% | 100% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Earnings | 19 | 0.33% | -0.17% | 1.20% | 47% | 21% | 0.9959 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 3 | -5.62% | -4.03% | -1.16% | 0% | 33% | 0.0024 | 0.8810 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 1 | -0.15% | -1.19% | -7.10% | 0% | 100% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![KNE1L official announcements and abnormal returns](figures/stock_profiles/KNE1L_company_events.png?v=1793169020)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (24 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-20 09:00 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the six months of 2026](https://view.news.eu.nasdaq.com/view?id=b808ccb80199f6ab729568f52ef695312&lang=en&src=listed) | Open official announcement | 2.06% | 2.22% | 0.00% | -0.20% | 0.52% | No |
| 2026-05-21 09:00 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 3 months of 2026](https://view.news.eu.nasdaq.com/view?id=b208494d7a089a24cfb6793b39edf15d5&lang=en&src=listed) | Open official announcement | -3.93% | 0.68% | 0.68% | 8.41% | 1.06% | No |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0286 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0286  | -0.43% | -6.77% | -3.93% | 3.93% | -3.36% | No |
| 2026-04-02 18:08 | Earnings | Unclassified earnings release | [AB KN Energies audited Annual information for the year 2025](https://view.news.eu.nasdaq.com/view?id=bbcdb8bccf9c49fb1f4f874fe5aa7bb97&lang=en&src=listed) | Open official announcement | 4.39% | -0.23% | 0.93% | 7.48% | -0.71% | No |
| 2026-02-26 16:00 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the twelve months of 2025](https://view.news.eu.nasdaq.com/view?id=b79f70f0f3cc68b7ebee6bb424727d346&lang=en&src=listed) | Open official announcement | -4.44% | 3.49% | -1.40% | -5.58% | -1.19% | No |
| 2025-11-21 16:00 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 9 months of 2025](https://view.news.eu.nasdaq.com/view?id=b0d9e53e874fec057dccb705a66870dd7&lang=en&src=listed) | Open official announcement | 3.94% | -0.87% | 2.33% | 18.08% | 2.00% | No |
| 2025-08-22 08:55 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the six months of 2025](https://view.news.eu.nasdaq.com/view?id=b339c7ee327409b2d719dd49da3e7ca8d&lang=en&src=listed) | Open official announcement | 6.12% | -0.64% | 0.32% | 2.56% | 0.68% | No |
| 2025-05-26 09:00 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 3 months of 2025](https://view.news.eu.nasdaq.com/view?id=b99746177ca4090b1c2154e59bb1b5024&lang=en&src=listed) | Open official announcement | -0.33% | 0.00% | -0.33% | -4.35% | -1.05% | No |
| 2025-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0227 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0227  | 2.30% | -7.37% | -3.85% | -5.77% | -4.56% | No |
| 2025-04-07 18:00 | Earnings | Unclassified earnings release | [AB KN Energies audited Annual information for the year 2024](https://view.news.eu.nasdaq.com/view?id=be29e9c68fa04668262744c39fd39bead&lang=en&src=listed) | Open official announcement | -0.72% | 1.82% | 6.91% | 12.00% | 4.75% | Yes |
| 2025-02-28 09:00 | Earnings | Higher profit | [AB KN Energies unaudited financial information for the twelve months of 2024](https://view.news.eu.nasdaq.com/view?id=bd09e474fe52dbe3b6b60dcae282ad341&lang=en&src=listed) | Open official announcement | 6.67% | -0.69% | -5.56% | -3.82% | -5.57% | Yes |
| 2024-11-18 08:30 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the  nine months of 2024](https://view.news.eu.nasdaq.com/view?id=b6320a20de0897bbb15bbbe2d5e1b03ab&lang=en&src=listed) | Open official announcement | 1.73% | -0.85% | 0.00% | 0.85% | 0.12% | No |
| 2024-08-14 15:27 | Earnings | Higher profit | [Correction: AB KN Energies unaudited financial information for the six months of 2024](https://view.news.eu.nasdaq.com/view?id=bd7ab827c0765692a231279636e21efc2&lang=en&src=listed) | Open official announcement | 0.43% | 0.00% | -0.85% | -3.83% | -0.89% | No |
| 2024-05-22 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0131 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0131  | -2.27% | 0.93% | 1.86% | 5.12% | 1.90% | Yes |
| 2024-05-21 17:03 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the 3 months of 2024](https://view.news.eu.nasdaq.com/view?id=b792e290b4a29856b25d2bbc49296e698&lang=en&src=listed) | Open official announcement | -2.27% | 0.93% | 1.86% | 5.12% | 1.90% | Yes |
| 2024-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0131 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0131  | 0.44% | -3.93% | -5.24% | -1.75% | -4.16% | Yes |
| 2024-04-30 16:00 | Earnings | Unclassified earnings release | [AB KN Energies audited Annual information for the year 2023](https://view.news.eu.nasdaq.com/view?id=b6a445813d007c002336c889cbcb23969&lang=en&src=listed) | Open official announcement | 0.89% | 0.00% | 0.00% | -3.08% | -0.64% | No |
| 2024-02-29 08:55 | Earnings | Unclassified earnings release | [AB KN Energies unaudited financial information for the twelve months of 2023](https://view.news.eu.nasdaq.com/view?id=bb7a677c7fdc94e151be2df07e65bf66e&lang=en&src=listed) | Open official announcement | 3.27% | 0.45% | 3.17% | 0.45% | 3.69% | No |
| 2023-11-21 08:55 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for the nine months of 2023](https://view.news.eu.nasdaq.com/view?id=b5f4ac8e873b24ce0db32f3b9fb0404a9&lang=en&src=listed) | Open official announcement | -1.45% | 1.47% | 0.98% | -1.47% | 1.36% | No |
| 2023-08-18 09:00 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for the six months of 2023](https://view.news.eu.nasdaq.com/view?id=b7821fa600e159afb0554fcd4e9f28180&lang=en&src=listed) | Open official announcement | 0.92% | -0.45% | -0.91% | -0.91% | -0.36% | No |
| 2023-06-14 08:00 | Guidance | — | [New long-term strategy of AB „Klaipėdos nafta“ (KN) focuses on energy transformation and climate neutrality of operations](https://view.news.eu.nasdaq.com/view?id=b04e36fce7a658b403078c68b717fca4c&lang=en&src=listed) | Open official announcement | -0.43% | 0.00% | -1.29% | -7.30% | -1.19% | Yes |
| 2023-05-22 08:57 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for the 3 months of 2023](https://view.news.eu.nasdaq.com/view?id=bc4c49c6029aa4a40b392bc0fdf8b870a&lang=en&src=listed) | Open official announcement | 0.43% | -0.85% | -4.66% | -0.85% | -4.35% | Yes |
| 2023-04-28 16:45 | Earnings | Unclassified earnings release | [Correction: AB Klaipėdos nafta audited Annual financial statements for the year 2022](https://view.news.eu.nasdaq.com/view?id=b128051ca351f7f3a9528c95750607960&lang=en&src=listed) | Open official announcement | -2.02% | 0.82% | -3.70% | -5.76% | -3.56% | No |
| 2023-02-27 08:55 | Earnings | Unclassified earnings release | [AB Klaipėdos nafta unaudited financial information for 2022](https://view.news.eu.nasdaq.com/view?id=b453987a56cea493816a2145d3dc139d1&lang=en&src=listed) | Open official announcement | 0.37% | -0.18% | -0.92% | -6.83% | -1.01% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (5 classified of 19 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 5 | 0.88% | 3.543 | 0.00% | 40% | 0.84% | 2.727 | 0.06% |
| Higher profit | 5d | 5 | -1.50% | 5.611 | -0.85% | 20% | -1.26% | 6.487 | -0.89% |
| Higher profit | 21d | 5 | -2.17% | 10.849 | -3.82% | 20% | -1.28% | 10.803 | -2.88% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![KNE1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/KNE1L_all_frontiers.png?v=1793191963)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![KNE1L mean return and historical dividend yield with all portfolios](figures/stock_profiles/KNE1L_return_dividend.png?v=1793191930)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | 0.000188 | 0.027252 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 2.345800 | 6.852320 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.221272 | 0.087640 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.839065 | 1.254826 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 11887.271639 | 20971.556992 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 2.639317 | 0.561451 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 37185.148541 | 46545.269841 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.224639 | 0.252929 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 5814.728000 | 13935.905000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.228878 | 0.264461 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 21682.500000 | 31212.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 1.124440 | 1.123663 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000811 | 0.000809 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000891 | 0.001004 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.022504 | -0.029973 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.039182 | 0.031606 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.271113 | 1.284758 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 27.000000 | 12.555556 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.187219 | 0.230724 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 12.962963 | 4.000000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.074507 | 0.031391 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.271113 | 1.284758 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 3.071879 | 8.424761 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.057374 | 0.294297 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.442350 | -0.488452 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -1.083880 | -3.438438 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.354964 | 1.386871 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.935037 | 2.591715 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.216639 | 0.211803 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000844 | 0.000806 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 1.163808 | 1.314961 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.053517 | 0.221990 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.073313 | 0.082835 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.089651 | 0.072855 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.037023 | 0.045126 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 1.034372 | 3.017568 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.059372 | 0.069887 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 0.987947 | 1.142528 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.122513 | 0.144099 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.852744 | 0.124483 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.192664 | 0.188493 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.754046 | 0.723735 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.712411 | 1.409403 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | -0.088163 | 0.094241 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.009397 | 0.034400 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.355346 | 0.471698 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.192893 | 0.191607 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.805031 | 0.830189 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.254540 | 0.224387 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.007276 | 0.006965 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.016035 | 0.014135 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.011540 | 0.011245 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 4.276716 | 1.191321 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.024077 | 0.022242 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.015288 | 0.004196 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 1.099226 | 1.241241 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.509328 | 0.934058 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000818 | 0.000932 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.097569 | 0.038594 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.388823 | 0.396868 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.139592 | 0.309247 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | 0.000740 | 0.121451 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.362385 | 0.479452 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | 0.000038 | 0.006122 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.222477 | 0.260274 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.216639 | 0.211803 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.574404 | 0.650141 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.077893 | 0.103500 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.009772 | 0.009907 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 6.029454 | 6.836399 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.015014 | 0.014362 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 11.339894 | 7.110220 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.012159 | 0.012117 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.229455 | 0.263184 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.193020 | 0.192347 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.016662 | -0.019518 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.771186</td><td>-0.042373</td></tr><tr><td>OUT</td><td>96</td><td>91</td><td>-5</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.151322</td><td>0.003548</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.152410</td><td>-0.009082</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>KNE1L shares</td><td>928</td><td>1442</td><td>+514</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9322.478817</td><td>244.664006</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.630252</td><td>0.016807</td></tr><tr><td>OUT</td><td>73</td><td>75</td><td>+2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.062794</td><td>0.002140</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.110156</td><td>0.004330</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 928 KNE1L shares. The scenario adds 514 shares from Table 1.a, resulting in 1442 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="KNE1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![KNE1L high-resolution stochastic dominance](figures/stock_profiles/KNE1L_FSD_SSD_TSD.png?v=1793190077)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-vlp1l" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>VLP1L — Vilkyškių pieninė</strong> | current action: WAIT | allocation target 72 shares | netSD diagnostic rank 2</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>42</td><td>72</td><td>+30</td><td>7.62%</td><td>EUR 15.7500</td><td>0.3950</td><td>47 / 0</td><td>61.33</td><td>Bullish</td><td>Inside bands</td><td>0.488 (Neutral)</td><td>EUR 0.3090 / share</td><td>HOLD</td><td>BUY</td><td>0.005801 (7.237% of portfolio HHI)</td><td>EUR 21,569</td><td>3.1%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![VLP1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/VLP1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 15.7500 | ≤ EUR 15.1073 | ≥ EUR 15.9277 | HOLD |
| RSI(14) | RSI = 61.33 | ≤ EUR 14.6788 | ≥ EUR 16.0462 | HOLD |
| Stochastic RSI %K | %K = 0.488 | ≤ EUR 15.5839 | ≥ EUR 16.0717 | HOLD |
| MACD crossover | MACD = 0.1174<br>Signal = 0.0868<br>Gap = +0.0306<br>Bullish crossover close ≈ EUR 15.2699 | — | — | BUY |
| Consensus | BUY 1/4; SELL 0/4; neutral 3/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![VLP1L complete technical history](figures/technical_analysis/VLP1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![VLP1L return histogram](figures/stock_profiles/VLP1L_histogram.png?v=1793184543)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -21.29% (2025-09-05) | Average gain / average loss | 1.222 | Best 21-day period | 37.83% (ending 2026-07-01) |
| Average underwater drawdown | 7.01% | Upside potential ratio | 1.434 | Worst 21-day period | -11.06% (ending 2025-07-21) |
| Conditional drawdown 95% | 18.03% | Upside capture vs Baltic EW | 134.6% | Best 5-day period | 17.77% (ending 2025-04-28) |
| Ulcer index | 8.31 | Downside capture vs Baltic EW | 37.4% | Best 63-day period | 41.44% (ending 2026-06-30) |
| Longest underwater period | 326 calendar days | Positive trading days | 41.8% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.765% | Best day | 13.80% (2025-01-23) |  |  |
| Daily upside deviation | 1.073% | Worst day | -8.13% (2026-03-02) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.188%); worst: Wednesday (0.064%) | 0.8316 | 0.8316 | Not detected |
| Calendar month | Best: Dec (0.454% daily); worst: Mar (-0.164% daily) | 0.2737 | 0.5097 | Not detected |
| Turn of month | First/last three days: 0.140%; other days: 0.131% | 0.8460 | 0.9251 | Not detected |

![VLP1L seasonality, drawdowns and upside periods](figures/stock_profiles/VLP1L_seasonality.png?v=1792941235)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-05-12 | 2025-09-05 | 2026-02-19 | -21.29% | 283 |
| 2 | 2023-01-23 | 2023-08-31 | 2023-12-15 | -16.67% | 326 |
| 3 | 2026-02-19 | 2026-03-25 | 2026-06-05 | -11.24% | 106 |
| 4 | 2024-02-29 | 2024-05-21 | 2024-06-05 | -9.64% | 97 |
| 5 | 2026-07-02 | 2026-07-30 | 2026-10-21 | -7.52% | 111 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2026-06-01 | 2026-07-01 | 37.83% |
| 2 | 2025-04-08 | 2025-05-12 | 36.81% |
| 3 | 2024-08-05 | 2024-09-03 | 19.21% |
| 4 | 2024-05-10 | 2024-06-10 | 18.68% |
| 5 | 2024-12-18 | 2025-01-23 | 16.05% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (21 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Earnings | 16 | -0.45% | 0.56% | 3.71% | 38% | 44% | 0.8359 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 4 | -2.25% | -2.19% | 2.54% | 25% | 25% | 0.2205 | 1.0000 | No adjusted statistical evidence; price drop may be mechanical |
| Revenue | 1 | -0.97% | 3.66% | 17.40% | 100% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![VLP1L official announcements and abnormal returns](figures/stock_profiles/VLP1L_company_events.png?v=1793169063)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (21 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-31 18:45 | Earnings | Higher profit | [VILVI Group unaudited consolidated financial results for the six months of 2026](https://view.news.eu.nasdaq.com/view?id=b3af999bf1bb819fe7a925bdaf9adfacc&lang=en&src=listed) | Open official announcement | 0.32% | -2.25% | -1.29% | -0.96% | -0.33% | Yes |
| 2026-06-05 09:51 | Revenue | — | [VILVI Group Expects Revenue Growth of Approximately 50% to EUR 430 Million in 2026](https://view.news.eu.nasdaq.com/view?id=b58538e57a5a9de23352ab2c6ae7b2ada&lang=en&src=listed) | REVENUE; 50%; EUR 430 Million | 11.49% | -1.15% | 3.44% | 16.79% | 3.66% | No |
| 2026-05-29 16:04 | Earnings | Higher profit | [VILVI Group unaudited consolidated financial results for the first three months of 2026 ](https://view.news.eu.nasdaq.com/view?id=b73e15abb9a115ef79400c112c0e2abfc&lang=en&src=listed) | Open official announcement | -0.42% | -2.13% | 11.49% | 33.62% | 11.00% | No |
| 2026-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.23 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.23  | 0.43% | 0.00% | 1.29% | 13.36% | 1.87% | No |
| 2026-02-27 16:05 | Earnings | Unclassified earnings release | [Unaudited financial results of VILVI Group for the 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b89d35c9363227f9267573d12c35b6d63&lang=en&src=listed) | Open official announcement | -0.81% | -8.13% | -5.69% | -8.13% | -4.80% | No |
| 2025-11-28 09:39 | Earnings | Unclassified earnings release | [Unaudited consolidated financial results of VILVI Group for 9 months of 2025](https://view.news.eu.nasdaq.com/view?id=bd30dd181058527539fdc4e68606f60b2&lang=en&src=listed) | Open official announcement | -2.30% | 3.30% | 4.72% | 9.43% | 4.25% | Yes |
| 2025-08-29 09:44 | Earnings | Unclassified earnings release | [VILVI Group unaudited consolidated financial results for the six months of 2025](https://view.news.eu.nasdaq.com/view?id=b173e4dfa80bfab952b1139285ae4239d&lang=en&src=listed) | Open official announcement | -1.96% | -0.20% | -2.00% | 10.50% | -2.47% | Yes |
| 2025-05-30 09:03 | Earnings | Unclassified earnings release | [Unaudited consolidated financial results of VILVI Group for 3 months of 2025](https://view.news.eu.nasdaq.com/view?id=b5987d77bf7d423cfa8d1cf0dbf060cae&lang=en&src=listed) | Open official announcement | -3.35% | 0.87% | -0.43% | -1.73% | -0.23% | No |
| 2025-05-13 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.54 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.54  | 12.16% | -1.61% | -3.61% | -8.84% | -4.09% | Yes |
| 2025-02-28 09:18 | Earnings | Higher profit | [Unaudited financial results of VILVI Group for the 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=b80043a95d6bfbaf23c3b35d2c54d0628&lang=en&src=listed) | Open official announcement | 1.75% | -1.08% | -2.58% | -0.22% | -2.59% | No |
| 2024-11-29 09:47 | Earnings | Higher profit | [Unaudited financial results of VILVI GROUP for the nine months of 2024](https://view.news.eu.nasdaq.com/view?id=b117a583cc9fb584f6332942b5f650d6e&lang=en&src=listed) | Open official announcement | 4.28% | 3.08% | 3.85% | 6.15% | 1.96% | No |
| 2024-08-30 09:52 | Earnings | Unclassified earnings release | [Unaudited financial results of VILVI GROUP for the first six months of 2024](https://view.news.eu.nasdaq.com/view?id=b28c7660c9a343961920f78323a76e842&lang=en&src=listed) | Open official announcement | 7.83% | 1.96% | -0.56% | -1.68% | -0.60% | No |
| 2024-05-31 09:15 | Earnings | Higher profit | [Unaudited financial results of VILVI GROUP for the first three months of 2024](https://view.news.eu.nasdaq.com/view?id=bdc9fad615b1b400b2d71d0fb24eea209&lang=en&src=listed) | Open official announcement | 7.00% | -0.36% | 8.73% | 9.45% | 8.75% | No |
| 2024-05-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.31 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.31  | -0.74% | -4.10% | -4.85% | 11.57% | -3.21% | No |
| 2024-02-29 09:55 | Earnings | Lower profit | [Unaudited financial results of VILVI GROUP for the 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=b470f79fae07f4b1d6e98116365578bcc&lang=en&src=listed) | Open official announcement | 3.32% | -1.43% | -6.43% | -8.21% | -5.91% | Yes |
| 2023-11-30 16:23 | Earnings | Unclassified earnings release | [Unaudited financial results of “Vilvi Group“ for the first nine months of 2023](https://view.news.eu.nasdaq.com/view?id=be1812e8d1b4bb947b47179a1eb511875&lang=en&src=listed) | Open official announcement | -0.42% | 0.00% | 1.69% | 11.02% | 2.78% | Yes |
| 2023-08-31 09:57 | Earnings | Unclassified earnings release | [Unaudited financial results of “Vilvi Group“ for the first six months of 2023](https://view.news.eu.nasdaq.com/view?id=b5fdaf6ff1bb94e6db906304d6b212e7d&lang=en&src=listed) | Open official announcement | -2.47% | 1.61% | 3.22% | 6.67% | 3.20% | Yes |
| 2023-06-01 08:45 | Earnings | Unclassified earnings release | [Correction: Unaudited financial results of “Vilvi Group“ for the first three months of 2023](https://view.news.eu.nasdaq.com/view?id=b9351d6bc063f7a26847bf61d7c67ef44&lang=en&src=listed) | Open official announcement | -1.47% | -1.28% | -2.13% | -5.32% | -1.25% | No |
| 2023-05-31 16:30 | Earnings | Unclassified earnings release | [Unaudited financial results of “Vilvi Group“ for the first three months of 2023](https://view.news.eu.nasdaq.com/view?id=b28225eaaca9efd36b0669b07794d25cd&lang=en&src=listed) | Open official announcement | 0.21% | -1.47% | -3.56% | -6.71% | -2.58% | No |
| 2023-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.265 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.265  | 0.00% | -3.95% | -4.74% | -9.49% | -3.32% | No |
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
| Higher profit | 21d | 6 | 8.14% | 172.275 | 3.48% | 67% | 8.00% | 180.626 | 2.03% |
| Lower profit | 1d | 1 | -1.43% | — | -1.43% | 0% | -1.82% | — | -1.82% |
| Lower profit | 5d | 1 | -6.43% | — | -6.43% | 0% | -5.91% | — | -5.91% |
| Lower profit | 21d | 1 | -8.21% | — | -8.21% | 0% | -6.96% | — | -6.96% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![VLP1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/VLP1L_all_frontiers.png?v=1793191965)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![VLP1L mean return and historical dividend yield with all portfolios](figures/stock_profiles/VLP1L_return_dividend.png?v=1793191923)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | 0.057063 | 0.290239 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 4.604790 | 9.153185 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 0.998674 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.146202 | 0.108812 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -0.224828 | -1.604270 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 23273.671459 | 41228.011905 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 3.070052 | 0.433037 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 2545.193634 | 3331.817460 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.272267 | 0.449511 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 11204.800000 | 23789.600000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.285752 | 0.527448 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 1442.000000 | 2002.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 1.323941 | 2.196795 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000923 | 0.001223 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.001080 | 0.001784 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | 0.017927 | 0.181360 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.039437 | 0.024755 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.320219 | 1.500056 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 24.724138 | 11.500000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.242665 | 0.481815 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 13.689655 | 6.700000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.048879 | 0.043124 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.320219 | 1.500056 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 5.846153 | 12.231096 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.007065 | 0.192804 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.416852 | -0.283947 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -0.563948 | -7.620053 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.374761 | 1.337680 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 1.049489 | 4.398274 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.271710 | 0.492118 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.001026 | 0.001651 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 1.323954 | 1.988177 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.061403 | 0.148939 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.083401 | 0.125243 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.092215 | 0.048963 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.043514 | 0.061687 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 1.954508 | 4.847322 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.071445 | 0.134266 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 1.848814 | -0.896485 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.143565 | 0.189333 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 1.121317 | 0.235900 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.205228 | 0.224017 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.699185 | 0.559503 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 1.160643 | 2.525944 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | -0.107972 | -0.038031 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.010782 | 0.023080 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.367925 | 0.415094 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.205511 | 0.225202 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.795597 | 0.811321 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.263322 | 0.260726 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.007526 | 0.009421 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.016588 | 0.016424 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.010736 | 0.011085 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 4.653707 | 3.541373 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.024829 | 0.028916 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.016252 | 0.011296 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 1.171134 | 1.459001 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.641911 | 1.249794 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000998 | 0.001682 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.062055 | 0.057625 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.427003 | 0.450678 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.168304 | 0.386957 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | 0.216705 | 1.113194 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.424312 | 0.493151 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | 0.010870 | 0.050981 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.270642 | 0.342466 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.271710 | 0.492118 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.591898 | 0.567957 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.088160 | 0.105000 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.010589 | 0.010754 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 6.437983 | 8.793664 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.015122 | 0.013285 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 24.602801 | 12.167127 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.012955 | 0.014242 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.285861 | 0.518388 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.205647 | 0.226092 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | 0.012458 | 0.100471 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.001326 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.703390</td><td>-0.110169</td></tr><tr><td>OUT</td><td>96</td><td>83</td><td>-13</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.141760</td><td>-0.006013</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.132985</td><td>-0.028508</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>VLP1L shares</td><td>42</td><td>72</td><td>+30</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9550.314812</td><td>472.500000</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.647059</td><td>0.033613</td></tr><tr><td>OUT</td><td>73</td><td>77</td><td>+4</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.081918</td><td>0.021264</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.122096</td><td>0.016271</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 42 VLP1L shares. The scenario adds 30 shares from Table 1.a, resulting in 72 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="VLP1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![VLP1L high-resolution stochastic dominance](figures/stock_profiles/VLP1L_FSD_SSD_TSD.png?v=1793190108)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-mrk1t" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>MRK1T — Merko Ehitus</strong> | current action: WAIT | allocation target 38 shares | netSD diagnostic rank 3</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>20</td><td>38</td><td>+18</td><td>6.95%</td><td>EUR 26.9500</td><td>0.3866</td><td>46 / 0</td><td>41.35</td><td>Bearish</td><td>Below lower band</td><td>0.000 (Oversold)</td><td>EUR 1.2900 / share</td><td>HOLD</td><td>BUY</td><td>0.004826 (6.020% of portfolio HHI)</td><td>EUR 58,829</td><td>1.2%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![MRK1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/MRK1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 26.9500 | ≤ EUR 26.9505 | ≥ EUR 27.1795 | BUY |
| RSI(14) | RSI = 41.35 | ≤ EUR 26.7032 | ≥ EUR 27.5063 | HOLD |
| Stochastic RSI %K | %K = 0.000 | ≤ EUR 27.0141 | ≥ EUR 27.0606 | BUY |
| MACD crossover | MACD = -0.0254<br>Signal = -0.0124<br>Gap = -0.0130<br>Bullish crossover close ≈ EUR 27.1540 | — | — | SELL |
| Consensus | BUY 2/4; SELL 1/4; neutral 1/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![MRK1T complete technical history](figures/technical_analysis/MRK1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![MRK1T return histogram](figures/stock_profiles/MRK1T_histogram.png?v=1793184571)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -19.70% (2025-09-29) | Average gain / average loss | 1.127 | Best 21-day period | 20.44% (ending 2025-05-19) |
| Average underwater drawdown | 7.77% | Upside potential ratio | 1.104 | Worst 21-day period | -12.35% (ending 2026-03-05) |
| Conditional drawdown 95% | 18.64% | Upside capture vs Baltic EW | 112.5% | Best 5-day period | 12.64% (ending 2025-02-07) |
| Ulcer index | 9.21 | Downside capture vs Baltic EW | 61.4% | Best 63-day period | 45.64% (ending 2025-02-07) |
| Longest underwater period | 500 calendar days | Positive trading days | 43.6% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.698% | Best day | 8.89% (2024-11-07) |  |  |
| Daily upside deviation | 0.823% | Worst day | -7.32% (2024-06-07) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.117%); worst: Monday (-0.023%) | 0.3147 | 0.4258 | Not detected |
| Calendar month | Best: Dec (0.384% daily); worst: Jun (-0.200% daily) | 0.0783 | 0.2888 | Not detected |
| Turn of month | First/last three days: 0.064%; other days: 0.074% | 0.3973 | 0.8214 | Not detected |

![MRK1T seasonality, drawdowns and upside periods](figures/stock_profiles/MRK1T_seasonality.png?v=1792941238)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-06-10 | 2025-09-29 | Not recovered | -19.70% | 500 |
| 2 | 2023-04-14 | 2023-06-08 | 2024-02-07 | -11.43% | 299 |
| 3 | 2024-06-03 | 2024-08-05 | 2024-11-07 | -9.57% | 157 |
| 4 | 2025-05-19 | 2025-05-30 | 2025-06-09 | -6.36% | 21 |
| 5 | 2023-02-17 | 2023-03-24 | 2023-04-12 | -5.12% | 54 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-04-15 | 2025-05-19 | 20.44% |
| 2 | 2024-12-05 | 2025-01-10 | 18.41% |
| 3 | 2025-11-27 | 2026-01-02 | 15.34% |
| 4 | 2025-01-20 | 2025-02-18 | 14.61% |
| 5 | 2023-01-23 | 2023-02-21 | 11.61% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (33 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.87% | 2.69% | 1.87% | 100% | 25% | 0.2205 | 1.0000 | No adjusted statistical evidence |
| Earnings | 21 | -0.13% | 0.59% | 0.46% | 57% | 48% | 0.9592 | 0.8647 | No adjusted statistical evidence |
| Ex-dividend | 8 | -2.77% | -4.96% | -5.52% | 25% | 50% | 0.0027 | 0.0000 | Different from ordinary periods; price drop may be mechanical |

![MRK1T official announcements and abnormal returns](figures/stock_profiles/MRK1T_company_events.png?v=1793169031)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (33 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-06 08:00 | Earnings | In line / unchanged | [2026 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b1156bf2dd62021da6b1674ab4b9f0aca&lang=en&src=listed) | Open official announcement | 0.92% | -0.54% | -1.45% | -2.54% | -1.60% | Yes |
| 2026-05-14 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.25  | -4.39% | 0.88% | -0.53% | -2.83% | 0.04% | No |
| 2026-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.25  | 0.17% | -4.54% | -5.38% | -7.56% | -4.31% | Yes |
| 2026-05-08 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 12 May 2026](https://view.news.eu.nasdaq.com/view?id=b4031ea8ac2b80694d8471a5223ff83f1&lang=en&src=listed) | Open official announcement | 0.17% | 0.34% | -4.22% | -7.25% | -3.64% | Yes |
| 2026-05-07 08:00 | Earnings | In line / unchanged | [2026 3 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bb4f7185ed055b240bf138a0aa0073a69&lang=en&src=listed) | Open official announcement | 0.00% | 0.34% | -3.38% | -6.94% | -2.32% | Yes |
| 2026-04-06 08:00 | Earnings | In line / unchanged | [Audited annual report 2025](https://view.news.eu.nasdaq.com/view?id=b648f58b76dfee1cc3e0314f54e5b2547&lang=en&src=listed) | Open official announcement | -2.00% | 0.00% | 6.11% | 9.63% | 4.47% | Yes |
| 2026-02-05 08:00 | Earnings | Unclassified earnings release | [2025 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b9981c2e1652cd15ff62a89aa3ccb418e&lang=en&src=listed) | Open official announcement | -5.12% | -1.96% | -1.47% | -6.05% | -2.05% | Yes |
| 2025-11-10 08:00 | Earnings | Unclassified earnings release | [Formation of a joint venture for the development of residential buildings in Krulli Quarter in Tallinn](https://view.news.eu.nasdaq.com/view?id=b6a3e223ace85fa30ffd4bc020bceae88&lang=en&src=listed) | Open official announcement | -3.32% | -1.44% | -2.53% | 4.51% | -2.54% | Yes |
| 2025-11-06 08:00 | Earnings | Higher profit | [2025 9 months and III quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b09e88b51d185a77fe225e925e96e7e12&lang=en&src=listed) | Open official announcement | -2.09% | -0.36% | -3.56% | 5.34% | -4.13% | No |
| 2025-08-07 08:00 | Earnings | Higher profit | [2025 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bf0e251742f611e13ec2b29632894e5e3&lang=en&src=listed) | Open official announcement | -0.33% | 0.16% | 0.33% | -4.28% | -0.06% | No |
| 2025-06-02 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.9 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.9  | -4.33% | 1.13% | 6.47% | 0.16% | 6.68% | No |
| 2025-05-29 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.9 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.9  | 0.93% | -5.21% | 0.92% | -3.83% | 1.20% | No |
| 2025-05-27 20:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 29 May 2025](https://view.news.eu.nasdaq.com/view?id=b68c7e826f8947551619fcbc27a16618f&lang=en&src=listed) | Open official announcement | 0.31% | -0.46% | 0.00% | -4.73% | 0.01% | No |
| 2025-05-16 08:00 | Earnings | Unclassified earnings release | [2025 3 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b0adc5c42fbd0a691e7407e7081aef1b1&lang=en&src=listed) | Open official announcement | 11.52% | 3.29% | 1.41% | -4.07% | 1.08% | Yes |
| 2025-04-10 08:00 | Earnings | Unclassified earnings release | [Audited annual report 2024](https://view.news.eu.nasdaq.com/view?id=b6625587e5963d74260ca61222fb64c2b&lang=en&src=listed) | Open official announcement | -0.19% | 0.75% | 4.85% | 11.01% | 4.09% | No |
| 2025-03-04 08:00 | Earnings | Unclassified earnings release | [Launch of a new residential development project Allveelaeva 2 in Noblessner seafront quarter (Tallinn, Estonia)](https://view.news.eu.nasdaq.com/view?id=b040ebcf4dfe0708e4d75b2e82e51f97d&lang=en&src=listed) | Open official announcement | -2.40% | 0.82% | 4.10% | 10.04% | 2.56% | Yes |
| 2025-02-07 08:00 | Earnings | Unclassified earnings release | [2024 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bbd3fa0db5af0326a3c9e01ebbf7c57be&lang=en&src=listed) | Open official announcement | 12.64% | -0.39% | -1.77% | 0.20% | -3.09% | No |
| 2024-11-07 08:00 | Earnings | In line / unchanged | [2024 9 months and III quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bb667f6d60a4ae9839daa00d89907b26d&lang=en&src=listed) | Open official announcement | 10.02% | -1.57% | -1.57% | 1.26% | 1.43% | No |
| 2024-08-08 08:00 | Earnings | Lower profit | [2024 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b65604783003c7a2e357550bbbd624344&lang=en&src=listed) | Open official announcement | 0.97% | 0.48% | 0.12% | -0.97% | -0.02% | No |
| 2024-06-21 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1.3 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.3  | 0.37% | 1.11% | 1.61% | 3.21% | 1.41% | No |
| 2024-06-07 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1.3 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1.3  | -1.58% | -7.32% | -7.78% | -4.58% | -7.73% | Yes |
| 2024-05-31 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 7 June 2024](https://view.news.eu.nasdaq.com/view?id=b822b2db4e743d919780c7c11a1ac0a0e&lang=en&src=listed) | Open official announcement | 1.14% | 0.11% | -8.68% | -7.33% | -8.66% | Yes |
| 2024-05-09 08:37 | Earnings | Unclassified earnings release | [Parandusteade: 2024. aasta 3 kuu konsolideeritud auditeerimata vahearuanne](https://view.news.eu.nasdaq.com/view?id=b99662d5860b4b7d9e7a39ce3d2573cfb&lang=et&src=listed) | Open official announcement | -0.69% | 0.70% | 1.40% | -5.59% | 3.04% | Yes |
| 2024-04-04 08:00 | Earnings | Unclassified earnings release | [Audited annual report 2023](https://view.news.eu.nasdaq.com/view?id=b7de9f3ba6c04effe8ea11e598e51dc12&lang=en&src=listed) | Open official announcement | 0.00% | 0.85% | 4.12% | 4.12% | 3.99% | No |
| 2024-02-08 08:00 | Earnings | Unclassified earnings release | [2023 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b4ddb50fdafbf8397fb617e662ab100d9&lang=en&src=listed) | Open official announcement | 1.26% | -0.75% | -0.50% | 0.12% | -0.74% | No |
| 2023-11-02 08:00 | Earnings | Higher profit | [2023 9 months and III quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=ba6acfb56eb829b5006ac549813b8f961&lang=en&src=listed) | Open official announcement | 1.77% | 0.13% | 1.87% | 1.07% | 3.31% | Yes |
| 2023-08-03 08:00 | Earnings | In line / unchanged | [2023 6 months and II quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b188d998f8dac4fce9a682ba5115b0b16&lang=en&src=listed) | Open official announcement | 1.85% | -1.04% | -1.42% | -4.27% | 0.57% | Yes |
| 2023-06-16 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 1 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1  | 0.83% | 0.96% | 2.75% | 4.54% | 2.64% | Yes |
| 2023-06-02 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 1 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 1  | -0.37% | -6.85% | -10.21% | -6.85% | -9.34% | No |
| 2023-05-30 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Merko Ehitus is 2 June 2023](https://view.news.eu.nasdaq.com/view?id=b51885ca6f7b99c5144d28648b78ccfbf&lang=en&src=listed) | Open official announcement | -0.50% | -0.12% | -8.71% | -7.09% | -7.20% | No |
| 2023-05-05 08:00 | Earnings | Higher profit | [2023 3 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bf6987e0e8ca9af4f7a15a5ec3adb7752&lang=en&src=listed) | Open official announcement | 0.12% | -0.12% | -0.12% | -9.16% | 0.47% | No |
| 2023-04-06 08:00 | Earnings | Higher profit | [Audited annual report 2022](https://view.news.eu.nasdaq.com/view?id=b3d3b09e4a692a75f2d646b884c5fbd77&lang=en&src=listed) | Open official announcement | 1.29% | 1.02% | 2.41% | 2.41% | 2.38% | No |
| 2023-02-09 08:00 | Earnings | Unclassified earnings release | [2022 12 months and IV quarter consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=bd2c3a7f412a5698c8fcbb6834ab559d0&lang=en&src=listed) | Open official announcement | 8.58% | -1.02% | 1.66% | 0.89% | 1.51% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (11 classified of 21 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 5 | 0.17% | 0.270 | 0.13% | 60% | -0.01% | 0.371 | -0.23% |
| Higher profit | 5d | 5 | 0.19% | 5.483 | 0.33% | 60% | 0.40% | 8.360 | 0.47% |
| Higher profit | 21d | 5 | -0.92% | 33.339 | 1.07% | 60% | 0.16% | 22.504 | 2.97% |
| Lower profit | 1d | 1 | 0.48% | — | 0.48% | 100% | 0.34% | — | 0.34% |
| Lower profit | 5d | 1 | 0.12% | — | 0.12% | 100% | -0.02% | — | -0.02% |
| Lower profit | 21d | 1 | -0.97% | — | -0.97% | 0% | -1.05% | — | -1.05% |
| In line / unchanged | 1d | 5 | -0.56% | 0.592 | -0.54% | 20% | -0.30% | 0.918 | -0.66% |
| In line / unchanged | 5d | 5 | -0.34% | 13.703 | -1.45% | 20% | 0.49% | 7.209 | 0.57% |
| In line / unchanged | 21d | 5 | -0.57% | 41.380 | -2.54% | 40% | -0.29% | 24.367 | -2.40% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 10 | 0.535 | 0.4647 | 0.7778 | No adjusted evidence |
| 5d | 2 | 10 | 0.011 | 0.9168 | 0.9707 | No adjusted evidence |
| 21d | 2 | 10 | 0.098 | 0.7540 | 0.9048 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![MRK1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/MRK1T_all_frontiers.png?v=1793191963)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![MRK1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/MRK1T_return_dividend.png?v=1793191924)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.051741 | -0.595547 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 2.183717 | -2.103166 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.226035 | 0.226035 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.518054 | 5.402377 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 71776.838966 | 91554.753571 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.102171 | 0.072400 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 3255.217507 | 3171.404762 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.176671 | -0.429447 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 47745.950000 | 65190.050000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.176948 | -0.358338 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 2437.000000 | 2253.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.954408 | -2.487907 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000740 | -0.001594 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000701 | -0.001704 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.039659 | -0.611905 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.031701 | 0.058827 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.262093 | 0.549509 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 24.137931 | 30.750000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.140501 | -0.402558 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 10.965517 | 6.750000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.052578 | 0.154154 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.262093 | 0.549509 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 3.365464 | -2.324543 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.019441 | 0.217340 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.415110 | -0.704598 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -0.210231 | 13.036081 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.283391 | 0.616486 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.688254 | -2.500362 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.158025 | -0.403825 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000628 | -0.001875 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 1.062234 | -2.592498 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.082745 | 0.191757 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.066914 | -0.163312 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.061640 | 0.148543 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.032128 | -0.055819 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.782834 | -1.585318 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.056981 | -0.113143 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 1.280757 | -2.204992 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.110129 | -0.186661 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.628211 | -0.198962 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.165574 | 0.162315 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.748180 | 2.820699 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.542727 | -1.099077 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.041301 | 0.428374 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.014530 | 0.029715 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.433962 | 0.509434 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.166211 | 0.165013 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.811321 | 0.792453 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.231071 | 0.205534 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.006366 | 0.009130 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.014556 | 0.012947 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.011169 | 0.020143 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 2.138478 | -1.868708 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.021821 | 0.030530 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.007816 | -0.009174 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.947171 | 1.068961 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.131273 | 1.275958 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000647 | -0.001759 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.081031 | 0.170380 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.407634 | 0.475631 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.197572 | -0.059431 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.223918 | -2.897567 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.465596 | 0.328767 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.011737 | -0.201135 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.240826 | 0.164384 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.158025 | -0.403825 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.530321 | 0.227689 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.066039 | -0.110814 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.008342 | 0.005251 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 6.386687 | -15.650454 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.012304 | 0.015062 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 18.719529 | 17.414150 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.010477 | 0.010435 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.179059 | -0.350270 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.166320 | 0.165650 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.034078 | -0.462678 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.779661</td><td>-0.033898</td></tr><tr><td>OUT</td><td>96</td><td>92</td><td>-4</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.128075</td><td>-0.019698</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.150343</td><td>-0.011150</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>MRK1T shares</td><td>20</td><td>38</td><td>+18</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9562.914826</td><td>485.100014</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.638655</td><td>0.025210</td></tr><tr><td>OUT</td><td>73</td><td>76</td><td>+3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.080461</td><td>0.019807</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.114212</td><td>0.008386</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 20 MRK1T shares. The scenario adds 18 shares from Table 1.a, resulting in 38 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="MRK1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![MRK1T high-resolution stochastic dominance](figures/stock_profiles/MRK1T_FSD_SSD_TSD.png?v=1793190083)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-molnr" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="NONE">
<summary><strong>MOLNR — J. Molner</strong> | current action: WAIT | allocation target 21 shares | netSD diagnostic rank 4</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>21</td><td>+21</td><td>2.97%</td><td>EUR 20.6000</td><td>0.0420</td><td>5 / 0</td><td>53.51</td><td>Bearish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>EUR 0.0000 / share</td><td>HOLD</td><td>BUY</td><td>0.000883 (1.101% of portfolio HHI)</td><td>EUR 94</td><td>614.3%</td><td>29.4%</td><td>HIGH</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![MOLNR Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/MOLNR_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 20.6000 | ≤ EUR 19.2741 | ≥ EUR 22.9859 | HOLD |
| RSI(14) | RSI = 53.51 | ≤ EUR 16.4574 | ≥ EUR 23.5063 | HOLD |
| Stochastic RSI %K | %K = 0.000 | ≤ EUR 20.7354 | ≥ EUR 21.1866 | BUY |
| MACD crossover | MACD = 0.4491<br>Signal = 0.5667<br>Gap = -0.1176<br>Bullish crossover close ≈ EUR 22.4420 | — | — | SELL |
| Consensus | BUY 1/4; SELL 1/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![MOLNR complete technical history](figures/technical_analysis/MOLNR_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![MOLNR return histogram](figures/stock_profiles/MOLNR_histogram.png?v=1793184516)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -47.85% (2026-09-29) | Average gain / average loss | 1.460 | Best 21-day period | 67.61% (ending 2023-07-19) |
| Average underwater drawdown | 18.70% | Upside potential ratio | 1.811 | Worst 21-day period | -28.57% (ending 2025-03-26) |
| Conditional drawdown 95% | 43.49% | Upside capture vs Baltic EW | 331.0% | Best 5-day period | 60.38% (ending 2023-06-14) |
| Ulcer index | 21.40 | Downside capture vs Baltic EW | 208.5% | Best 63-day period | 124.53% (ending 2023-07-19) |
| Longest underwater period | 617 calendar days | Positive trading days | 29.5% | Repeated calendar pattern | Mar: 0% positive across 4 years |
| Daily downside deviation | 2.080% | Best day | 44.39% (2025-01-02) |  |  |
| Daily upside deviation | 3.266% | Worst day | -12.73% (2023-03-14) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.653%); worst: Monday (-0.394%) | 0.0219 | 0.1207 | Not detected |
| Calendar month | Best: Jan (0.854% daily); worst: Mar (-0.809% daily) | 0.3890 | 0.5263 | Not detected |
| Turn of month | First/last three days: 0.754%; other days: 0.041% | 0.1488 | 0.4890 | Not detected |

![MOLNR seasonality, drawdowns and upside periods](figures/stock_profiles/MOLNR_seasonality.png?v=1792941258)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-02-13 | 2026-09-29 | Not recovered | -47.85% | 617 |
| 2 | 2023-01-13 | 2023-04-05 | 2023-06-12 | -32.71% | 150 |
| 3 | 2024-01-09 | 2024-06-03 | 2024-09-20 | -27.02% | 255 |
| 4 | 2023-07-19 | 2023-08-08 | 2023-10-17 | -22.35% | 90 |
| 5 | 2023-06-14 | 2023-06-22 | 2023-07-06 | -18.12% | 22 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-06-20 | 2023-07-19 | 67.61% |
| 2 | 2024-12-17 | 2025-01-22 | 60.43% |
| 3 | 2023-12-15 | 2024-01-18 | 51.75% |
| 4 | 2023-05-15 | 2023-06-14 | 49.65% |
| 5 | 2024-08-28 | 2024-09-26 | 40.85% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (10 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Earnings | 10 | 1.85% | 0.27% | 0.76% | 70% | 20% | 0.6563 | 1.0000 | No adjusted statistical evidence |

![MOLNR official announcements and abnormal returns](figures/stock_profiles/MOLNR_company_events.png?v=1793169027)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (10 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-06-08 16:56 | Earnings | Loss | [J. Molner AS Audited Consolidated Annual Report 2025](https://view.news.eu.nasdaq.com/view?id=b8e796a4ba5f4b11ad62268dc6a200c04&lang=en&src=listed) | Open official announcement | 1.82% | -0.89% | -1.79% | -11.16% | -1.75% | No |
| 2026-03-31 14:00 | Earnings | Higher profit | [J. Molner AS 2025 12 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b63e4b036ee2fa6605e6d7772375af868&lang=en&src=listed) | Open official announcement | 0.95% | 6.60% | 1.89% | 0.94% | 0.45% | No |
| 2025-09-30 09:30 | Earnings | Higher profit | [J. Molner AS 2025 6 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b73f73be316476a63911e0249b7b33c2c&lang=en&src=listed) | Open official announcement | 6.09% | 4.92% | 5.74% | 12.30% | 4.72% | Yes |
| 2025-04-21 17:49 | Earnings | Unclassified earnings release | [J. Molner AS Audited Consolidated Annual Report 2024](https://view.news.eu.nasdaq.com/view?id=b2beb3031f4bf8fd9561decb81036f3ac&lang=en&src=listed) | Open official announcement | 4.46% | -5.13% | 4.27% | 6.84% | 2.40% | No |
| 2025-03-28 09:30 | Earnings | Unclassified earnings release | [J. Molner AS 2024 12 months consolidated unaudited interim report](https://view.news.eu.nasdaq.com/view?id=b6b69f985cbcbb5e7b37a7f97594013fd&lang=en&src=listed) | Open official announcement | 0.00% | 6.96% | 3.48% | 6.96% | 4.15% | No |
| 2024-09-17 09:00 | Earnings | Unclassified earnings release | [J. Molner AS Consolidated interim report for the first 6 months of 2024 (unaudited)](https://view.news.eu.nasdaq.com/view?id=b44e2e0b7fcdad0977558903f52754559&lang=en&src=listed) | Open official announcement | 3.21% | 5.59% | 9.32% | 19.88% | 9.31% | No |
| 2024-04-24 09:30 | Earnings | Unclassified earnings release | [J. Molner AS Audited Consolidated Annual Report 2023](https://view.news.eu.nasdaq.com/view?id=b252beb1a8fcd05b8472972245839bb3b&lang=en&src=listed) | Open official announcement | -5.96% | 4.93% | 3.52% | -5.63% | 3.04% | No |
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
| Higher profit | 21d | 2 | 6.62% | 64.430 | 6.62% | 100% | 5.13% | 96.006 | 5.13% |
| Loss | 1d | 1 | -0.89% | — | -0.89% | 0% | -1.02% | — | -1.02% |
| Loss | 5d | 1 | -1.79% | — | -1.79% | 0% | -1.62% | — | -1.62% |
| Loss | 21d | 1 | -11.16% | — | -11.16% | 0% | -10.71% | — | -10.71% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![MOLNR Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/MOLNR_all_frontiers.png?v=1793191963)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![MOLNR mean return and historical dividend yield with all portfolios](figures/stock_profiles/MOLNR_return_dividend.png?v=1793191937)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | 0.006627 | -0.741916 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 1.454892 | -2.835827 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 0.842175 | 0.769841 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.459495 | 0.333270 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.545352 | -0.731998 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 1026.189814 | 400.831746 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 125.055653 | 194.111611 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 74.949602 | 17.896825 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.386660 | -0.558132 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 265.600000 | 135.100000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.235316 | -0.504707 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 15.000000 | 7.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.422361 | -1.034810 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000441 | -0.000635 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.001534 | -0.002215 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.561040 | -1.331763 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.106795 | 0.333270 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.163702 | 0.795276 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 38.789474 | 125.000000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.114724 | -0.619473 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 12.157895 | 4.000000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.129269 | 0.149838 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.163702 | 0.795276 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 1.820358 | -3.368341 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.452562 | -0.258205 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.483405 | -0.664203 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -7.673611 | -31.391702 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.368039 | 0.962162 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.310805 | -1.529932 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.257987 | -0.555818 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.001621 | -0.002407 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.632342 | -1.033009 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | -0.099133 | 0.215469 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.039834 | -0.065073 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.232180 | 0.316606 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.021125 | -0.029038 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.512118 | -1.514409 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.030455 | -0.039827 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 3.010241 | 0.655720 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000001 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.072848 | -0.093474 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.881940 | -0.296229 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.610821 | 0.537121 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.041035 | 1.802310 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.420586 | -1.164879 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | -0.311689 | 0.869388 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | -0.017407 | 0.033390 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.374214 | 0.377358 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.611069 | 0.538157 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.701258 | 0.660377 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.640974 | 0.552799 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.021063 | 0.023694 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.040378 | 0.034823 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.024421 | 0.029690 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | -2.373735 | -2.342367 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.072633 | 0.076273 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | -0.008463 | -0.012922 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 3.482262 | 3.486611 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 2.445243 | 1.639357 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000839 | -0.002784 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.161741 | 0.177975 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.406987 | 0.409279 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.113369 | 0.170188 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | 0.010339 | -1.342108 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.293578 | 0.246575 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | 0.000529 | -0.104220 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.250000 | 0.232877 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.257987 | -0.555818 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.517850 | 0.363110 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.049443 | -0.065790 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.032256 | 0.024345 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 1.034127 | -1.911926 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.050381 | 0.055611 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 30.298933 | 7.014549 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.038519 | 0.034036 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.219717 | -0.479054 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.611474 | 0.540298 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.131126 | -0.308731 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.157825 | 0.230159 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.694915</td><td>-0.118644</td></tr><tr><td>OUT</td><td>96</td><td>82</td><td>-14</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.065071</td><td>-0.082703</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.140183</td><td>-0.021309</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>MOLNR shares</td><td>0</td><td>21</td><td>+21</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9510.414820</td><td>432.600008</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.655462</td><td>0.042017</td></tr><tr><td>OUT</td><td>73</td><td>78</td><td>+5</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.128749</td><td>0.068095</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.126779</td><td>0.020954</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 MOLNR shares. The scenario adds 21 shares from Table 1.a, resulting in 21 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="MOLNR"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![MOLNR high-resolution stochastic dominance](figures/stock_profiles/MOLNR_FSD_SSD_TSD.png?v=1793190081)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-rsu1l" data-signal="BUY" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>RSU1L — Rokiškio sūris</strong> | current action: BUY | allocation target 167 shares | netSD diagnostic rank 5</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>50</td><td>167</td><td>+117</td><td>4.86%</td><td>EUR 4.3600</td><td>0.2437</td><td>37 / 8</td><td>28.45</td><td>Bearish</td><td>Below lower band</td><td>0.000 (Oversold)</td><td>EUR 0.1600 / share</td><td>BUY</td><td>BUY</td><td>0.002360 (2.945% of portfolio HHI)</td><td>EUR 1,134</td><td>40.0%</td><td>4.8%</td><td>HIGH</td></tr></tbody></table>

**Execution rationale:** Allocation increase and technical BUY agree; trade is economically material.

![RSU1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/RSU1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 4.3600 | ≤ EUR 4.3747 | ≥ EUR 4.5573 | BUY |
| RSI(14) | RSI = 28.45 | ≤ EUR 4.3727 | ≥ EUR 4.6725 | BUY |
| Stochastic RSI %K | %K = 0.000 | ≤ EUR 4.3913 | ≥ EUR 4.4334 | BUY |
| MACD crossover | MACD = -0.0266<br>Signal = -0.0149<br>Gap = -0.0117<br>Bullish crossover close ≈ EUR 4.5436 | — | — | SELL |
| Consensus | BUY 3/4; SELL 1/4; neutral 0/4 | At least 3 BUY votes | At least 3 SELL votes | BUY |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![RSU1L complete technical history](figures/technical_analysis/RSU1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![RSU1L return histogram](figures/stock_profiles/RSU1L_histogram.png?v=1793184518)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -10.23% (2025-06-05) | Average gain / average loss | 1.067 | Best 21-day period | 22.09% (ending 2025-01-20) |
| Average underwater drawdown | 4.62% | Upside potential ratio | 1.528 | Worst 21-day period | -9.05% (ending 2025-02-18) |
| Conditional drawdown 95% | 9.45% | Upside capture vs Baltic EW | 83.1% | Best 5-day period | 15.38% (ending 2025-01-20) |
| Ulcer index | 4.83 | Downside capture vs Baltic EW | 46.2% | Best 63-day period | 28.05% (ending 2025-01-20) |
| Longest underwater period | 405 calendar days | Positive trading days | 29.5% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 1.032% | Best day | 14.10% (2024-08-21) |  |  |
| Daily upside deviation | 1.192% | Worst day | -7.14% (2024-08-20) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.235%); worst: Thursday (-0.075%) | 0.0574 | 0.1651 | Not detected |
| Calendar month | Best: Dec (0.278% daily); worst: Nov (-0.077% daily) | 0.9482 | 0.9697 | Not detected |
| Turn of month | First/last three days: 0.124%; other days: 0.035% | 0.4408 | 0.8214 | Not detected |

![RSU1L seasonality, drawdowns and upside periods](figures/stock_profiles/RSU1L_seasonality.png?v=1792941248)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-03-25 | 2025-06-05 | 2025-09-12 | -10.23% | 171 |
| 2 | 2024-08-21 | 2024-08-26 | 2024-12-03 | -9.55% | 104 |
| 3 | 2026-03-23 | 2026-06-26 | Not recovered | -9.32% | 214 |
| 4 | 2024-12-04 | 2024-12-10 | 2025-01-02 | -9.19% | 29 |
| 5 | 2025-01-20 | 2025-02-13 | 2025-03-25 | -9.05% | 64 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2024-12-13 | 2025-01-20 | 22.09% |
| 2 | 2024-05-06 | 2024-06-05 | 12.14% |
| 3 | 2024-11-05 | 2024-12-04 | 12.12% |
| 4 | 2024-07-23 | 2024-08-21 | 11.95% |
| 5 | 2025-08-20 | 2025-09-18 | 10.95% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (15 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 7 | 0.57% | 1.27% | 1.00% | 57% | 14% | 0.4932 | 1.0000 | No adjusted statistical evidence |
| Earnings | 4 | 0.02% | 0.84% | -1.08% | 75% | 25% | 0.8359 | 0.6526 | No adjusted statistical evidence |
| Ex-dividend | 4 | -2.71% | -1.59% | -1.29% | 25% | 50% | 0.4932 | 0.6236 | No adjusted statistical evidence; price drop may be mechanical |

![RSU1L official announcements and abnormal returns](figures/stock_profiles/RSU1L_company_events.png?v=1793169042)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (15 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.2 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.2  | 0.44% | -3.93% | -3.93% | -3.06% | -3.36% | Yes |
| 2026-05-05 16:25 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2025](https://view.news.eu.nasdaq.com/view?id=b45a30d6dcea4064459e8dfe8f22371b7&lang=en&src=listed) | Open official announcement | 0.00% | 0.44% | 0.88% | -3.08% | 1.50% | No |
| 2026-04-30 16:37 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2025](https://view.news.eu.nasdaq.com/view?id=b72ded3397654dfbf6168a3805ccc2a20&lang=en&src=listed) | Open official announcement | 3.18% | -0.44% | 1.76% | -4.41% | 1.25% | No |
| 2025-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.2 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.2  | 0.50% | -2.97% | -3.47% | -3.96% | -4.18% | Yes |
| 2025-05-05 16:32 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2024](https://view.news.eu.nasdaq.com/view?id=bbb7b83d1cd51c16493f5cf3b70caff3a&lang=en&src=listed) | Open official announcement | -0.50% | 0.00% | 0.50% | -2.99% | -0.00% | No |
| 2025-04-30 16:54 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2024 ](https://view.news.eu.nasdaq.com/view?id=bc4e66d4472a6609fa46e07216dfd7f9e&lang=en&src=listed) | Open official announcement | 0.50% | 0.00% | 0.00% | -2.99% | -1.50% | No |
| 2024-05-23 16:18 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2023](https://view.news.eu.nasdaq.com/view?id=b82ed63bc0d6997bbd84fb8dd9b47e4e7&lang=en&src=listed) | Open official announcement | 3.50% | 0.68% | 3.38% | 7.43% | 3.71% | Yes |
| 2024-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | 1.33% | -1.32% | -1.97% | 1.97% | -0.90% | No |
| 2024-05-02 17:11 | Dividend announcement | — | [Ex-day dividend payment of AB Rokiškio sūris](https://view.news.eu.nasdaq.com/view?id=bddae4c52866be99d74cbe585e79e305a&lang=en&src=listed) | Open official announcement | 0.00% | 2.04% | 2.72% | 5.44% | 2.64% | No |
| 2024-04-30 16:45 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2023](https://view.news.eu.nasdaq.com/view?id=bfdf39c4520d5b56a5c6d303381087548&lang=en&src=listed) | Open official announcement | -0.68% | 0.68% | 3.42% | 6.16% | 2.79% | Yes |
| 2023-05-19 16:36 | Dividend announcement | — | [AB "Rokiškio sūris" dividend payment procedure for the year 2022](https://view.news.eu.nasdaq.com/view?id=b08778c24d801ff03fff3b762be37ee6a&lang=en&src=listed) | Open official announcement | 0.68% | 0.00% | -1.34% | -1.34% | -0.70% | No |
| 2023-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | -1.99% | -4.05% | 0.68% | -2.70% | 2.10% | No |
| 2023-05-03 16:49 | Dividend announcement | — | [Ex-day dividend payment of AB Rokiškio sūris](https://view.news.eu.nasdaq.com/view?id=bbea8925aaecc539a89c6c2c6f7a2c10e&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | 0.00% | -5.30% | -0.27% | No |
| 2023-04-28 17:05 | Earnings | Unclassified earnings release | [The audited annual information of Rokiskio suris AB for the year 2022](https://view.news.eu.nasdaq.com/view?id=b200c00b8cbf121459bf6149298b956c2&lang=en&src=listed) | Open official announcement | 0.00% | 0.67% | 0.67% | -4.00% | 0.81% | No |
| 2023-04-07 16:19 | Dividend announcement | — | [The Board of Rokiškio sūris AB approves the 2022 audited financial statements and proposes to pay a dividend of EUR 0.15 per share ](https://view.news.eu.nasdaq.com/view?id=b59d0e045c14b6d2a6302632ab4973da4&lang=en&src=listed) | EUR 0.15  | 0.00% | 1.35% | 2.03% | 2.03% | 2.00% | No |

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

![RSU1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/RSU1L_all_frontiers.png?v=1793191964)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![RSU1L mean return and historical dividend yield with all portfolios](figures/stock_profiles/RSU1L_return_dividend.png?v=1793191933)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.155951 | -0.289326 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 1.117808 | -1.005326 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 0.936340 | 0.968254 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.159089 | 0.088272 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.403089 | -0.143796 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 1897.132175 | 2517.542857 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 118.993728 | 45.020212 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 484.555703 | 563.547619 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.103130 | -0.030780 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 455.850000 | 771.940000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.072738 | -0.052116 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 120.500000 | 172.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.178721 | -0.274697 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000278 | -0.000088 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000409 | -0.000122 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.263707 | -0.379669 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.061893 | 0.030364 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.092271 | 0.973225 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 52.785714 | 14.375000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.013562 | -0.098523 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 36.285714 | 4.000000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.053265 | 0.042717 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.092271 | 0.973225 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 1.365584 | -1.220044 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.125902 | 0.092931 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.496799 | -0.607915 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -3.262241 | 4.621026 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.132401 | 0.965198 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.232917 | -0.404653 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.045993 | -0.058535 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000306 | -0.000146 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.399208 | -0.143844 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.116947 | 0.027060 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.025148 | -0.009061 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.118516 | 0.060529 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.011412 | -0.003953 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.457215 | -0.590407 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.016134 | -0.004882 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 1.280361 | -0.063089 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.039595 | -0.012748 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.233783 | -0.026407 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.257347 | 0.213091 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.940379 | 1.050864 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.280745 | -0.276814 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.086324 | 0.090454 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.020535 | 0.004193 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.333333 | 0.377358 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.258165 | 0.213132 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.764151 | 0.735849 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.300598 | 0.261730 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.010336 | 0.009581 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.018936 | 0.016487 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.010636 | 0.010047 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 0.621973 | -1.925933 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.035860 | 0.030899 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.002383 | -0.007848 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 1.471186 | 1.380858 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 2.300257 | 1.779505 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000279 | -0.000212 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.065072 | 0.051840 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.381975 | 0.406628 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.164696 | 0.043026 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.518803 | -1.105435 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.309633 | 0.342466 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.028460 | -0.064134 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.236239 | 0.205479 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.045993 | -0.058535 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.468710 | 0.463385 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.026593 | -0.008899 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.012563 | 0.009406 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 1.545309 | -0.672223 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.025365 | 0.025021 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 14.364795 | 5.139345 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.016274 | 0.013480 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.071002 | -0.051474 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.258335 | 0.213983 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.145885 | -0.222235 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.063660 | 0.031746 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.796610</td><td>-0.016949</td></tr><tr><td>OUT</td><td>96</td><td>94</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.162612</td><td>0.014839</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.158856</td><td>-0.002636</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>RSU1L shares</td><td>50</td><td>167</td><td>+117</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9587.934827</td><td>510.120016</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.621849</td><td>0.008403</td></tr><tr><td>OUT</td><td>73</td><td>74</td><td>+1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.058355</td><td>-0.002299</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.109831</td><td>0.004006</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 50 RSU1L shares. The scenario adds 117 shares from Table 1.a, resulting in 167 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="RSU1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![RSU1L high-resolution stochastic dominance](figures/stock_profiles/RSU1L_FSD_SSD_TSD.png?v=1793190089)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-apg1l" data-signal="WAIT" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>APG1L — Apranga</strong> | current action: WAIT | allocation target 302 shares | netSD diagnostic rank 6</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>200</td><td>302</td><td>+102</td><td>7.65%</td><td>EUR 3.7900</td><td>0.3193</td><td>40 / 2</td><td>32.52</td><td>Bullish</td><td>Inside bands</td><td>0.290 (Neutral)</td><td>EUR 0.3060 / share</td><td>HOLD</td><td>BUY</td><td>0.005853 (7.301% of portfolio HHI)</td><td>EUR 24,618</td><td>1.0%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![APG1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/APG1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 3.7900 | ≤ EUR 3.7827 | ≥ EUR 3.8553 | HOLD |
| RSI(14) | RSI = 32.52 | ≤ EUR 3.7775 | ≥ EUR 3.9756 | HOLD |
| Stochastic RSI %K | %K = 0.290 | ≤ EUR 3.7855 | ≥ EUR 3.8029 | HOLD |
| MACD crossover | MACD = -0.0256<br>Signal = -0.0272<br>Gap = +0.0017<br>Bullish crossover close ≈ EUR 3.7638 | — | — | BUY |
| Consensus | BUY 1/4; SELL 0/4; neutral 3/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![APG1L complete technical history](figures/technical_analysis/APG1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![APG1L return histogram](figures/stock_profiles/APG1L_histogram.png?v=1793184486)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **calendar-month, turn-of-month**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -14.75% (2023-05-29) | Average gain / average loss | 1.014 | Best 21-day period | 19.43% (ending 2023-04-28) |
| Average underwater drawdown | 5.72% | Upside potential ratio | 1.003 | Worst 21-day period | -13.29% (ending 2023-05-30) |
| Conditional drawdown 95% | 12.19% | Upside capture vs Baltic EW | 69.6% | Best 5-day period | 8.87% (ending 2023-04-05) |
| Ulcer index | 6.53 | Downside capture vs Baltic EW | 22.7% | Best 63-day period | 34.02% (ending 2023-04-27) |
| Longest underwater period | 348 calendar days | Positive trading days | 39.6% | Repeated calendar pattern | May: 0% positive across 4 years |
| Daily downside deviation | 0.629% | Best day | 6.30% (2023-04-05) |  |  |
| Daily upside deviation | 0.558% | Worst day | -10.00% (2023-05-11) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.125%); worst: Monday (0.014%) | 0.1366 | 0.2467 | Not detected |
| Calendar month | Best: Apr (0.343% daily); worst: May (-0.408% daily) | 0.0008 | 0.0097 | Detected |
| Turn of month | First/last three days: 0.244%; other days: 0.022% | 0.0006 | 0.0127 | Detected |

![APG1L seasonality, drawdowns and upside periods](figures/stock_profiles/APG1L_seasonality.png?v=1792941232)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-04-28 | 2023-05-29 | 2024-02-26 | -14.75% | 304 |
| 2 | 2024-02-28 | 2024-08-06 | 2025-02-10 | -11.48% | 348 |
| 3 | 2026-05-11 | 2026-05-27 | Not recovered | -8.76% | 165 |
| 4 | 2025-02-14 | 2025-06-02 | 2025-11-03 | -8.29% | 262 |
| 5 | 2026-02-03 | 2026-03-26 | 2026-04-23 | -7.98% | 79 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-03-28 | 2023-04-28 | 19.43% |
| 2 | 2025-12-11 | 2026-01-16 | 16.56% |
| 3 | 2023-01-20 | 2023-02-20 | 15.21% |
| 4 | 2026-03-31 | 2026-05-04 | 12.75% |
| 5 | 2024-01-29 | 2024-02-27 | 9.22% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (69 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 2 | -0.17% | 1.85% | -6.07% | 100% | 50% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Earnings | 13 | 0.33% | 0.56% | -4.46% | 46% | 31% | 1.0000 | 0.0009 | Different from ordinary periods |
| Ex-dividend | 6 | -4.99% | -7.46% | -8.04% | 0% | 83% | 0.0000 | 0.0000 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 1 | -0.57% | -2.46% | -4.11% | 0% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Revenue | 47 | 0.07% | 0.47% | 1.24% | 60% | 17% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![APG1L official announcements and abnormal returns](figures/stock_profiles/APG1L_company_events.png?v=1793169001)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (69 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-09-01 16:00 | Revenue | — | [Turnover of Apranga Group in August 2026](https://view.news.eu.nasdaq.com/view?id=b23543665a3767e290adacad002588ac0&lang=en&src=listed) | TURNOVER | 0.00% | -0.76% | -0.76% | -4.03% | -0.55% | No |
| 2026-08-03 16:00 | Revenue | — | [Turnover of Apranga Group in July 2026](https://view.news.eu.nasdaq.com/view?id=be0d33bf21100dd9098903722c48d5b88&lang=en&src=listed) | TURNOVER | 1.53% | 0.25% | 1.01% | 0.00% | 0.56% | No |
| 2026-07-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 6 months of 2026](https://view.news.eu.nasdaq.com/view?id=bfeec2f65e8686f516a3bed7b462f3618&lang=en&src=listed) | Open official announcement | -0.76% | 0.00% | 1.78% | 0.51% | 1.22% | Yes |
| 2026-07-01 16:00 | Revenue | — | [Turnover of Apranga Group in June 2026](https://view.news.eu.nasdaq.com/view?id=b46e7890142725c8fe46563f70cd0ff35&lang=en&src=listed) | TURNOVER | 1.32% | 0.00% | 1.82% | 2.08% | 1.10% | No |
| 2026-06-01 16:00 | Revenue | — | [Turnover of Apranga Group in May 2026](https://view.news.eu.nasdaq.com/view?id=bd5aa274f7589eb77837832cf5ba797cb&lang=en&src=listed) | TURNOVER | -0.26% | 0.00% | -0.53% | 2.12% | -0.67% | No |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.27 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.27  | 1.51% | -6.44% | -6.93% | -6.68% | -6.36% | Yes |
| 2026-05-04 16:30 | Dividend announcement | — | [Procedure for the payment of APRANGA APB dividends for the year 2025](https://view.news.eu.nasdaq.com/view?id=be681f6d91790536065e7fe74e38d5a0c&lang=en&src=listed) | Open official announcement | 3.92% | 0.00% | 3.27% | -4.77% | 3.23% | Yes |
| 2026-05-04 16:00 | Revenue | — | [Turnover of Apranga Group in April 2026](https://view.news.eu.nasdaq.com/view?id=bd93d3fabc4d9f7a1d8a8b6b3e5265f1a&lang=en&src=listed) | TURNOVER | 3.92% | 0.00% | 3.27% | -4.77% | 3.23% | Yes |
| 2026-04-30 18:00 | Earnings | Unclassified earnings release | [APRANGA APB annual report 2025](https://view.news.eu.nasdaq.com/view?id=b1c8f738e754378570b8e4c7bfc5567d8&lang=en&src=listed) | Open official announcement | 2.62% | 1.79% | 3.32% | -3.58% | 2.81% | Yes |
| 2026-04-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 3 months 2026](https://view.news.eu.nasdaq.com/view?id=b07f57952764ad03be7c4a64d5efd1cb5&lang=en&src=listed) | Open official announcement | 3.75% | 1.03% | 4.13% | -2.58% | 4.02% | No |
| 2026-04-01 16:00 | Revenue | — | [Turnover of Apranga Group in March 2026](https://view.news.eu.nasdaq.com/view?id=b8dc41241855b9e5323df944b69cf8435&lang=en&src=listed) | TURNOVER | 3.46% | 0.56% | 3.62% | 10.86% | 2.08% | Yes |
| 2026-03-02 16:00 | Revenue | — | [Turnover of Apranga Group in February 2026](https://view.news.eu.nasdaq.com/view?id=b03f7ad730f7454c7be6f777b0ff4905e&lang=en&src=listed) | TURNOVER | 0.00% | -0.82% | -0.54% | -3.81% | 0.22% | No |
| 2026-02-02 16:00 | Revenue | — | [Turnover of Apranga Group in January 2026](https://view.news.eu.nasdaq.com/view?id=bbc280be2b0ba0d62d95644963d33f186&lang=en&src=listed) | TURNOVER | 1.36% | 0.53% | -0.80% | -2.67% | 1.28% | No |
| 2026-01-05 16:00 | Revenue | — | [Turnover of Apranga Group in December 2025 and total year 2025](https://view.news.eu.nasdaq.com/view?id=ba5f8e84f3670dda3c093d7812c5b07cd&lang=en&src=listed) | TURNOVER | 2.35% | 0.00% | 3.74% | 8.05% | 2.28% | No |
| 2025-12-10 16:00 | Revenue | — | [The turnover and expansion plans of Apranga Group in 2026](https://view.news.eu.nasdaq.com/view?id=bbc38709867d6e999ff1d5883531cf641&lang=en&src=listed) | TURNOVER | 0.63% | 0.95% | 4.10% | 16.40% | 3.30% | No |
| 2025-12-01 16:00 | Revenue | — | [Turnover of Apranga Group in November 2025](https://view.news.eu.nasdaq.com/view?id=b05392686dfff9059414e908887266b42&lang=en&src=listed) | TURNOVER | 0.64% | 0.00% | 0.64% | 10.83% | 0.06% | No |
| 2025-11-03 16:00 | Revenue | — | [Turnover of Apranga Group in October 2025](https://view.news.eu.nasdaq.com/view?id=b1ab191c3fbf999a8684f2f1d8997ea1e&lang=en&src=listed) | TURNOVER | 2.93% | -0.63% | -0.32% | -0.63% | -0.61% | No |
| 2025-10-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 9 months of 2025](https://view.news.eu.nasdaq.com/view?id=b2b9ec8245a50161f3b46e05773e34b22&lang=en&src=listed) | Open official announcement | 0.66% | 0.00% | 2.28% | 1.95% | 2.55% | No |
| 2025-10-01 16:00 | Revenue | — | [Turnover of Apranga Group in September 2025](https://view.news.eu.nasdaq.com/view?id=bb7094120ce851eb89c262089f6acb1d6&lang=en&src=listed) | TURNOVER | -0.33% | 0.67% | 1.00% | 2.68% | 0.64% | Yes |
| 2025-09-01 16:00 | Revenue | — | [Turnover of Apranga Group in August 2025](https://view.news.eu.nasdaq.com/view?id=bcb9610cd46d2fe0d9eefc344c0cdf2ac&lang=en&src=listed) | TURNOVER | 0.34% | 1.36% | 1.36% | 1.36% | 1.20% | Yes |
| 2025-08-01 16:00 | Revenue | — | [Turnover of Apranga Group in July 2025](https://view.news.eu.nasdaq.com/view?id=bbbc7602af313e21f0509aac86b261ae6&lang=en&src=listed) | TURNOVER | 0.00% | -0.35% | 0.00% | 2.08% | -0.06% | No |
| 2025-07-29 16:00 | Earnings | Higher profit | [Apranga Group interim report for 6 months of 2025](https://view.news.eu.nasdaq.com/view?id=bdbf7808630b383be64302582df2d8714&lang=en&src=listed) | Open official announcement | 0.35% | -0.69% | -0.35% | 1.38% | -0.42% | No |
| 2025-07-01 16:00 | Revenue | — | [Turnover of Apranga Group in June 2025](https://view.news.eu.nasdaq.com/view?id=b8020eb92033600e2588061b5acb89ad0&lang=en&src=listed) | TURNOVER | 0.00% | 0.35% | 0.35% | 0.70% | 0.50% | No |
| 2025-06-02 16:00 | Revenue | — | [Turnover of Apranga Group in May 2025](https://view.news.eu.nasdaq.com/view?id=ba251b26966718949b4da8ad570b43e42&lang=en&src=listed) | TURNOVER | -0.70% | 0.35% | 1.06% | 1.42% | 1.65% | Yes |
| 2025-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.24 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.24  | 0.66% | -7.17% | -7.17% | -7.49% | -7.88% | Yes |
| 2025-05-02 16:30 | Dividend announcement | — | [Procedure for the payment of Apranga APB dividends for the year 2024](https://view.news.eu.nasdaq.com/view?id=b1642ff788b2974d57a2e38e7e30d173d&lang=en&src=listed) | Open official announcement | -0.99% | 0.66% | 1.33% | -5.98% | 0.47% | No |
| 2025-05-02 16:00 | Revenue | — | [Turnover of Apranga Group in April 2025](https://view.news.eu.nasdaq.com/view?id=bc250d807e4077b912447e69a896755c2&lang=en&src=listed) | TURNOVER | -0.99% | 0.66% | 1.33% | -5.98% | 0.47% | No |
| 2025-04-30 18:00 | Earnings | Unclassified earnings release | [Apranga APB annual report 2024](https://view.news.eu.nasdaq.com/view?id=b3aad15c4b649556e2e65b24c016ec6a4&lang=en&src=listed) | Open official announcement | -0.33% | -0.66% | 0.33% | -6.93% | -1.17% | No |
| 2025-04-29 08:00 | Earnings | Higher profit | [Apranga Group interim report for 3 months 2025](https://view.news.eu.nasdaq.com/view?id=ba5faf1e501e2edede53ab19a45ce9e65&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | 0.66% | -6.60% | -0.41% | No |
| 2025-04-01 16:00 | Revenue | — | [Turnover of Apranga Group in March 2025](https://view.news.eu.nasdaq.com/view?id=b3e8029d165f6a7a01efc7bd92a05cded&lang=en&src=listed) | TURNOVER | 1.17% | 0.99% | -0.99% | 0.00% | 1.16% | No |
| 2025-03-03 16:00 | Revenue | — | [Turnover of Apranga Group in February 2025](https://view.news.eu.nasdaq.com/view?id=b17eed2f6592143e6e22b1a4b569427e4&lang=en&src=listed) | TURNOVER | 0.50% | -2.14% | -0.99% | -0.16% | -1.51% | No |
| 2025-02-03 16:00 | Revenue | — | [Turnover of Apranga Group in January 2025](https://view.news.eu.nasdaq.com/view?id=be01db8bb588cd319282e06f9495a7732&lang=en&src=listed) | TURNOVER | 0.50% | -0.17% | 0.99% | -1.66% | -1.03% | No |
| 2025-01-03 09:00 | Revenue | — | [Turnover of Apranga Group in December 2024 and total year 2024](https://view.news.eu.nasdaq.com/view?id=b0c41d48e91d265310b335a9a9a035098&lang=en&src=listed) | TURNOVER | 2.06% | 0.17% | 0.17% | 1.68% | -1.39% | No |
| 2024-12-27 09:00 | Guidance | — | [Apranga Group revised investment forecast for the year 2024](https://view.news.eu.nasdaq.com/view?id=b97be9afa256ae6ec8790ab94b9d6789a&lang=en&src=listed) | Open official announcement | -0.51% | -0.17% | 0.85% | 2.39% | -2.46% | No |
| 2024-12-10 17:00 | Revenue | — | [The turnover and expansion plans of Apranga Group in 2025](https://view.news.eu.nasdaq.com/view?id=ba76676db7b24933653b32ad0ca7c04cb&lang=en&src=listed) | TURNOVER | 2.12% | -0.17% | 1.90% | 4.33% | 1.00% | No |
| 2024-12-02 16:00 | Revenue | — | [Turnover of Apranga Group in November 2024](https://view.news.eu.nasdaq.com/view?id=b82aadf9725de1d0b82a0e9b4c51b53cf&lang=en&src=listed) | TURNOVER | 0.00% | -0.18% | 1.23% | 4.23% | -0.06% | No |
| 2024-11-04 16:00 | Revenue | — | [Turnover of Apranga Group in October 2024](https://view.news.eu.nasdaq.com/view?id=b0ed7566104796d1ce6e99461f7f7947f&lang=en&src=listed) | TURNOVER | 0.00% | -0.35% | -0.88% | -0.53% | -0.28% | No |
| 2024-10-01 16:00 | Revenue | — | [Turnover of Apranga Group in September 2024](https://view.news.eu.nasdaq.com/view?id=b37823bbb3507c72157b215e98cfe9598&lang=en&src=listed) | TURNOVER | 1.80% | -0.35% | -0.18% | 2.30% | -1.19% | No |
| 2024-09-02 16:00 | Revenue | — | [Turnover of Apranga Group in August 2024](https://view.news.eu.nasdaq.com/view?id=bc32416b373c60b9d5c40f44cd2026a60&lang=en&src=listed) | TURNOVER | 0.91% | 0.18% | -0.18% | 2.54% | 0.48% | No |
| 2024-08-01 16:00 | Revenue | — | [Turnover of Apranga Group in July 2024](https://view.news.eu.nasdaq.com/view?id=b6baf2dc1871e21183b947f3aa3881094&lang=en&src=listed) | TURNOVER | -0.18% | -0.36% | -1.09% | 0.00% | 0.15% | Yes |
| 2024-07-26 09:00 | Earnings | Higher profit | [Apranga Group interim report for 6 months of 2024](https://view.news.eu.nasdaq.com/view?id=bf8382f38257b006432df031dbacd592b&lang=en&src=listed) | Open official announcement | 0.00% | -0.18% | -0.54% | -0.91% | -0.76% | No |
| 2024-07-01 16:00 | Revenue | — | [Turnover of Apranga Group in June 2024](https://view.news.eu.nasdaq.com/view?id=bf0ed31a41c9a1d7815a8fdd01bc1085a&lang=en&src=listed) | TURNOVER | 1.28% | 0.36% | 0.18% | -0.72% | -0.19% | No |
| 2024-06-03 16:00 | Revenue | — | [Turnover of Apranga Group in May 2024](https://view.news.eu.nasdaq.com/view?id=b39b165e07b4170c8a035868c0e91444e&lang=en&src=listed) | TURNOVER | -0.73% | 0.37% | 0.73% | 2.01% | 0.58% | No |
| 2024-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.24 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.24  | -1.48% | -7.02% | -7.86% | -7.36% | -6.78% | No |
| 2024-05-06 16:00 | Ex-dividend | — | [Ex-dividend date and procedure for the payment of Apranga APB dividends for the year 2023](https://view.news.eu.nasdaq.com/view?id=bcfdd851b2a0702488d528d46a6ce864e&lang=en&src=listed) | Open official announcement | 0.17% | 0.33% | -7.79% | -9.12% | -6.83% | Yes |
| 2024-05-02 16:00 | Revenue | — | [Turnover of Apranga Group in April 2024](https://view.news.eu.nasdaq.com/view?id=bab89e16f57cc220f59729f110cc20acc&lang=en&src=listed) | TURNOVER | 0.50% | 0.50% | -0.33% | -9.60% | -0.41% | No |
| 2024-04-30 12:57 | Earnings | Unclassified earnings release | [Apranga APB annual report 2023](https://view.news.eu.nasdaq.com/view?id=bbc083dbdaf720ff0eb20616c9910b77a&lang=en&src=listed) | Open official announcement | 0.17% | 0.00% | -0.17% | -9.44% | -0.80% | No |
| 2024-04-26 08:00 | Earnings | Higher profit | [Apranga Group interim report for 3 months 2024](https://view.news.eu.nasdaq.com/view?id=b9173b89b16aad47914fdd695f3f4d68b&lang=en&src=listed) | Open official announcement | -0.33% | 0.33% | 0.17% | -9.14% | -0.02% | No |
| 2024-04-02 16:00 | Revenue | — | [Turnover of Apranga Group in March 2024](https://view.news.eu.nasdaq.com/view?id=b97c1ba3e1e470d788eb7092ced8aaa2e&lang=en&src=listed) | TURNOVER | 1.34% | 0.33% | -0.99% | -0.33% | -1.43% | No |
| 2024-03-01 16:00 | Revenue | — | [Turnover of Apranga Group in February 2024](https://view.news.eu.nasdaq.com/view?id=bd66fa0cb77bbdac51df7a94f8163e3af&lang=en&src=listed) | TURNOVER | 1.88% | 0.67% | 0.50% | 2.18% | 1.31% | No |
| 2024-02-01 16:00 | Revenue | — | [Turnover of Apranga Group in January 2024](https://view.news.eu.nasdaq.com/view?id=b8653b759a8e16e8065c73d5d8510c183&lang=en&src=listed) | TURNOVER | 5.33% | 0.17% | 1.40% | 3.84% | 1.66% | No |
| 2024-01-03 09:00 | Revenue | — | [Turnover of Apranga Group in December 2023 and total year 2023](https://view.news.eu.nasdaq.com/view?id=bf6c789300f215392f32638ecbc8f9ad9&lang=en&src=listed) | TURNOVER | 0.75% | 0.00% | 0.00% | 6.51% | -0.27% | No |
| 2023-12-14 16:00 | Revenue | — | [The turnover and expansion plans of Apranga Group in 2024](https://view.news.eu.nasdaq.com/view?id=bca2b3e0d9bb5ec774d2754232c9e9e55&lang=en&src=listed) | TURNOVER | 0.76% | 0.94% | 0.19% | 1.69% | 0.24% | No |
| 2023-12-01 16:00 | Revenue | — | [Turnover of Apranga Group in November 2023](https://view.news.eu.nasdaq.com/view?id=b5b69ec6520aa4399dbc627b258583931&lang=en&src=listed) | TURNOVER | 1.14% | -0.94% | -0.94% | 0.75% | 0.20% | No |
| 2023-11-03 16:00 | Revenue | — | [Turnover of Apranga Group in October 2023](https://view.news.eu.nasdaq.com/view?id=be8397c3fd0d4f5752a16028d22e9c1a0&lang=en&src=listed) | TURNOVER | -0.94% | 0.19% | 0.00% | 0.00% | 1.48% | No |
| 2023-10-02 16:00 | Revenue | — | [Turnover of Apranga Group in September 2023](https://view.news.eu.nasdaq.com/view?id=b1f0a2738d537dd252d556c65c89cf646&lang=en&src=listed) | TURNOVER | 0.95% | -0.94% | -0.57% | 0.75% | 0.33% | No |
| 2023-09-01 16:00 | Revenue | — | [Turnover of Apranga Group in August 2023](https://view.news.eu.nasdaq.com/view?id=b1cc4cbb3ad529128594124933542ddad&lang=en&src=listed) | TURNOVER | 0.38% | -0.37% | -0.75% | -0.75% | -1.66% | No |
| 2023-08-01 16:00 | Revenue | — | [Turnover of Apranga Group in July 2023](https://view.news.eu.nasdaq.com/view?id=b03eabb8c07834a7021b8d4cf15ceef63&lang=en&src=listed) | TURNOVER | -1.10% | -1.11% | -2.41% | -1.48% | -2.29% | Yes |
| 2023-07-27 09:00 | Earnings | Unclassified earnings release | [Apranga Group interim report for 6 months of 2023](https://view.news.eu.nasdaq.com/view?id=bae6798f5f85859e75166f5108cc6563b&lang=en&src=listed) | Open official announcement | 1.68% | -0.18% | -1.10% | -2.21% | -1.38% | Yes |
| 2023-07-03 16:00 | Revenue | — | [Turnover of Apranga Group in June 2023](https://view.news.eu.nasdaq.com/view?id=b055cf2d6c15de293f3ac5c752c1d51f7&lang=en&src=listed) | TURNOVER | 5.06% | -1.85% | -2.22% | 0.00% | -2.13% | No |
| 2023-06-01 16:00 | Revenue | — | [Turnover of Apranga Group in May 2023](https://view.news.eu.nasdaq.com/view?id=b69d13153483feec514f07a2d2f3a64a2&lang=en&src=listed) | TURNOVER | -1.15% | 0.00% | -1.55% | 1.94% | -0.67% | No |
| 2023-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.28 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.28  | -1.19% | -10.00% | -9.31% | -12.59% | -7.27% | Yes |
| 2023-05-05 16:30 | Ex-dividend | — | [Ex-dividend date and procedure for the payment of Apranga APB dividends for the year 2022](https://view.news.eu.nasdaq.com/view?id=b010480f658101cb7dd946f0036861608&lang=en&src=listed) | Open official announcement | -0.17% | -1.02% | -10.24% | -12.97% | -9.65% | Yes |
| 2023-05-02 16:00 | Revenue | — | [Turnover of Apranga Group in April 2023](https://view.news.eu.nasdaq.com/view?id=b3d4600636c425ee2c34892e309b1b07d&lang=en&src=listed) | TURNOVER | 1.73% | -0.17% | -1.02% | -12.24% | -1.09% | Yes |
| 2023-04-27 12:48 | Earnings | Unclassified earnings release | [Apranga APB annual report 2022](https://view.news.eu.nasdaq.com/view?id=bd087b0973d0ec096976e7f7d90d27376&lang=en&src=listed) | Open official announcement | 6.73% | 0.51% | -0.17% | -13.29% | 0.12% | No |
| 2023-04-26 16:00 | Earnings | Unclassified earnings release | [Apranga Group interim report for three months of 2023](https://view.news.eu.nasdaq.com/view?id=bc24f305846a91a74d0bb3c46637a64c6&lang=en&src=listed) | Open official announcement | 5.66% | 1.38% | 1.04% | -13.13% | 1.50% | Yes |
| 2023-04-03 16:00 | Revenue | — | [Turnover of Apranga Group in March 2023](https://view.news.eu.nasdaq.com/view?id=b76df735fc4f2589a66e09912f2b3411f&lang=en&src=listed) | TURNOVER | 2.63% | 0.20% | 6.51% | 15.58% | 6.50% | No |
| 2023-03-01 16:00 | Revenue | — | [Turnover of Apranga Group in February 2023](https://view.news.eu.nasdaq.com/view?id=b4a2c81eca74ecaf395da3c71c3d36207&lang=en&src=listed) | TURNOVER | 0.80% | -0.40% | 0.00% | -0.80% | 0.38% | No |
| 2023-02-01 16:00 | Revenue | — | [Turnover of Apranga Group in January 2023](https://view.news.eu.nasdaq.com/view?id=b108ec022c305e136b5a4e1ac94275ae6&lang=en&src=listed) | TURNOVER | 2.29% | 3.14% | 7.17% | 12.11% | 5.69% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (7 classified of 13 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 7 | 0.07% | 0.276 | 0.00% | 29% | 0.33% | 0.722 | 0.13% |
| Higher profit | 5d | 7 | 1.16% | 2.816 | 0.66% | 71% | 0.90% | 3.213 | -0.02% |
| Higher profit | 21d | 7 | -2.20% | 17.790 | -0.91% | 43% | -1.96% | 20.768 | 0.01% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![APG1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/APG1L_all_frontiers.png?v=1793191961)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![APG1L mean return and historical dividend yield with all portfolios](figures/stock_profiles/APG1L_return_dividend.png?v=1793191925)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.003993 | -0.056157 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 4.170968 | 7.057916 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.120484 | 0.079787 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -5.574525 | 1.358355 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 32474.888488 | 38746.434683 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.225299 | 0.167047 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 10999.347480 | 10271.952381 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.212503 | 0.172687 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 19981.300000 | 27202.165000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.224697 | 0.181052 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 6991.000000 | 7193.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 1.539185 | 1.392730 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.001070 | 0.000947 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000843 | 0.000685 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | 0.044471 | 0.009463 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.022660 | 0.021918 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.452554 | 1.327382 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 30.454545 | 16.428571 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.187878 | 0.159333 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 21.500000 | 6.285714 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.040529 | 0.018627 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.452554 | 1.327382 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 5.544051 | 9.719824 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.019567 | 0.144713 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.231063 | -0.430671 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -1.459633 | 1.925688 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.210928 | 1.213568 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 1.127925 | 2.489419 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.212358 | 0.153477 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000796 | 0.000582 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 1.535604 | 1.540534 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.053952 | 0.116250 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.096734 | 0.097045 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.072705 | 0.049098 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.044648 | 0.045675 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 1.864947 | 2.269191 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.104987 | 0.073347 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | -2.852394 | 0.104957 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.131129 | 0.152819 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.833948 | 0.086762 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.137968 | 0.110199 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.496473 | 0.649960 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 1.019105 | 1.007037 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | -0.096854 | 0.003172 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.009474 | 0.018014 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.323899 | 0.415094 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.138293 | 0.111661 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.880503 | 0.867925 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.216003 | 0.176057 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.006431 | 0.004484 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.013607 | 0.011091 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.007049 | 0.007914 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 4.164761 | 1.557442 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.018887 | 0.015003 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.014914 | 0.005682 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.788080 | 0.723367 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.084383 | 0.963361 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000805 | 0.000661 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.053872 | 0.025652 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.441994 | 0.376158 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.121376 | 0.162728 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.018484 | -0.318970 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.424312 | 0.452055 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.000950 | -0.016633 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.176606 | 0.219178 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.212358 | 0.153477 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.420884 | 0.619612 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.061770 | 0.105225 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.005937 | 0.005462 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 11.096661 | 13.743049 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.008032 | 0.009343 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 42.694967 | 4.468425 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.008717 | 0.007061 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.227075 | 0.185717 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.138384 | 0.112096 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | 0.045927 | 0.010574 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.745763</td><td>-0.067797</td></tr><tr><td>OUT</td><td>96</td><td>88</td><td>-8</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.171927</td><td>0.024153</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.150793</td><td>-0.010699</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>APG1L shares</td><td>200</td><td>302</td><td>+102</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9464.394808</td><td>386.579996</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.051102</td><td>-0.009552</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.110515</td><td>0.004689</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 200 APG1L shares. The scenario adds 102 shares from Table 1.a, resulting in 302 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="APG1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![APG1L high-resolution stochastic dominance](figures/stock_profiles/APG1L_FSD_SSD_TSD.png?v=1793190059)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-grg1l" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>GRG1L — Grigeo Group</strong> | current action: WAIT | allocation target 1030 shares | netSD diagnostic rank 7</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>543</td><td>1030</td><td>+487</td><td>6.90%</td><td>EUR 1.0050</td><td>0.4034</td><td>54 / 6</td><td>46.14</td><td>Bullish</td><td>Inside bands</td><td>0.498 (Neutral)</td><td>EUR 0.0560 / share</td><td>HOLD</td><td>BUY</td><td>0.004766 (5.945% of portfolio HHI)</td><td>EUR 11,740</td><td>0.8%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![GRG1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/GRG1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 1.0050 | ≤ EUR 0.9956 | ≥ EUR 1.0223 | HOLD |
| RSI(14) | RSI = 46.14 | ≤ EUR 0.9754 | ≥ EUR 1.0487 | HOLD |
| Stochastic RSI %K | %K = 0.498 | ≤ EUR 0.9982 | ≥ EUR 1.0108 | HOLD |
| MACD crossover | MACD = -0.0022<br>Signal = -0.0025<br>Gap = +0.0003<br>Bullish crossover close ≈ EUR 1.0006 | — | — | BUY |
| Consensus | BUY 1/4; SELL 0/4; neutral 3/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![GRG1L complete technical history](figures/technical_analysis/GRG1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![GRG1L return histogram](figures/stock_profiles/GRG1L_histogram.png?v=1793184544)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -15.59% (2025-11-28) | Average gain / average loss | 1.071 | Best 21-day period | 16.34% (ending 2023-01-31) |
| Average underwater drawdown | 6.36% | Upside potential ratio | 1.445 | Worst 21-day period | -8.89% (ending 2025-10-20) |
| Conditional drawdown 95% | 14.58% | Upside capture vs Baltic EW | 61.1% | Best 5-day period | 11.62% (ending 2023-01-31) |
| Ulcer index | 7.46 | Downside capture vs Baltic EW | 31.7% | Best 63-day period | 23.31% (ending 2023-04-14) |
| Longest underwater period | 491 calendar days | Positive trading days | 36.4% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.628% | Best day | 8.37% (2023-12-19) |  |  |
| Daily upside deviation | 0.730% | Worst day | -4.02% (2026-02-26) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Tuesday (0.100%); worst: Monday (0.007%) | 0.6325 | 0.6924 | Not detected |
| Calendar month | Best: Dec (0.507% daily); worst: May (-0.187% daily) | 0.2976 | 0.5097 | Not detected |
| Turn of month | First/last three days: 0.037%; other days: 0.042% | 0.8098 | 0.9251 | Not detected |

![GRG1L seasonality, drawdowns and upside periods](figures/stock_profiles/GRG1L_seasonality.png?v=1792941240)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-08-19 | 2025-11-28 | Not recovered | -15.59% | 430 |
| 2 | 2024-04-10 | 2024-08-07 | 2025-08-14 | -11.50% | 491 |
| 3 | 2023-10-23 | 2023-11-06 | 2023-12-18 | -8.80% | 56 |
| 4 | 2023-05-11 | 2023-05-24 | 2023-06-14 | -6.89% | 34 |
| 5 | 2023-12-20 | 2024-01-12 | 2024-02-13 | -5.88% | 55 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-01-02 | 2023-01-31 | 16.34% |
| 2 | 2025-11-27 | 2026-01-02 | 16.00% |
| 3 | 2023-11-27 | 2023-12-28 | 14.06% |
| 4 | 2025-07-22 | 2025-08-20 | 8.29% |
| 5 | 2023-09-21 | 2023-10-20 | 8.23% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (12 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.06% | 0.75% | 1.47% | 50% | 0% | 0.8359 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.34% | -1.64% | -3.19% | 25% | 25% | 0.2080 | 0.0824 | No adjusted statistical evidence; price drop may be mechanical |

![GRG1L official announcements and abnormal returns](figures/stock_profiles/GRG1L_company_events.png?v=1793169012)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (12 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | -1.35% | -2.74% | -5.48% | -6.39% | -4.91% | No |
| 2026-04-30 17:02 | Ex-dividend | — | [Dividend payment ex-date ](https://view.news.eu.nasdaq.com/view?id=b0041bba7ec4a184b55e0bd6d7226ec1e&lang=en&src=listed) | Open official announcement | 0.00% | -0.45% | -0.45% | -8.07% | -0.96% | No |
| 2026-04-08 18:00 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo Group AB to be held on 30th April 2026 - the Board of the Company proposes to pay EUR 0.05 dividend per share for the year 2025](https://view.news.eu.nasdaq.com/view?id=bad84030af0ed96c96d67a7424c46734c&lang=en&src=listed) | EUR 0.05  | 2.87% | -0.47% | 2.79% | 3.26% | 1.88% | No |
| 2025-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | 1.83% | -2.69% | -2.69% | -3.59% | -3.29% | No |
| 2025-04-29 18:00 | Ex-dividend | — | [Dividend payment ex-date](https://view.news.eu.nasdaq.com/view?id=b4ad39e0594d6ebcc5422f30572770df1&lang=en&src=listed) | Open official announcement | 2.33% | -0.45% | 0.91% | -4.55% | -0.16% | No |
| 2025-04-04 18:02 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo Group AB to be held on 28th April 2025 - the Board of the Company proposes to pay EUR 0.06 dividend per share for the year 2024](https://view.news.eu.nasdaq.com/view?id=b697113742fadc4e36f0d588121309fe6&lang=en&src=listed) | EUR 0.06  | -0.46% | -2.33% | -0.93% | 3.26% | -0.02% | No |
| 2024-05-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.07 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.07  | 0.45% | -2.68% | -4.02% | -5.80% | -2.37% | Yes |
| 2024-04-26 14:17 | Ex-dividend | — | [Dividend payment ex-date](https://view.news.eu.nasdaq.com/view?id=b9788d836a176223a528f549203832167&lang=en&src=listed) | Open official announcement | 0.93% | 0.92% | 2.75% | 0.92% | 2.57% | No |
| 2024-04-03 13:22 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo AB to be held on 26 April 2024 - the Board of the Company proposes to pay EUR 0.07 dividend per share for the year 2023](https://view.news.eu.nasdaq.com/view?id=bf81709422799b4987b2ca32a2a89bf7a&lang=en&src=listed) | EUR 0.07  | -0.44% | 0.00% | 0.44% | -0.44% | -0.66% | No |
| 2023-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | 0.45% | -3.33% | -6.00% | -0.89% | -4.58% | Yes |
| 2023-04-28 16:03 | Ex-dividend | — | [Dividend payment ex-date](https://view.news.eu.nasdaq.com/view?id=b09b3105c072c3c991662b5373f769e7f&lang=en&src=listed) | Open official announcement | 0.23% | 0.68% | 0.45% | -2.26% | 0.59% | No |
| 2023-04-06 17:05 | Dividend announcement | — | [Information and documents for the Annual General Meeting of Shareholders of Grigeo AB to be held on 28 April 2023 - the Board of the Company proposes to pay EUR 0.05 dividend per share for the year 2022](https://view.news.eu.nasdaq.com/view?id=bed7213f418269c9cec4ab25ea1e0bbc6&lang=en&src=listed) | EUR 0.05  | 0.23% | 0.70% | 1.86% | 3.94% | 1.83% | No |

</details>

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![GRG1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/GRG1L_all_frontiers.png?v=1793191962)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![GRG1L mean return and historical dividend yield with all portfolios](figures/stock_profiles/GRG1L_return_dividend.png?v=1793191934)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.128173 | -0.416202 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 1.541351 | -2.646044 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.159743 | 0.101784 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.643419 | -1.250252 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 17409.951424 | 15059.658056 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 1.084447 | 0.533456 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 16962.129973 | 14099.460317 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.107677 | -0.189323 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 8168.620000 | 11154.210000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.100516 | -0.178992 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 8117.000000 | 10834.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.628080 | -1.384553 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000485 | -0.000930 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000427 | -0.000751 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.101090 | -0.370628 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.029442 | 0.055278 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.146445 | 0.747347 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 24.689655 | 61.500000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.064887 | -0.209866 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 16.206897 | 1.000000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.047765 | 0.060922 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.146445 | 0.747347 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 2.104391 | -2.938047 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.012890 | 0.027016 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.517417 | -0.701000 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -1.815960 | 9.125327 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.083686 | 0.734388 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.460209 | -1.989280 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.097149 | -0.172547 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000414 | -0.000727 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.695584 | -1.512272 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.014721 | -0.027171 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.043818 | -0.095264 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.062936 | 0.087833 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.020129 | -0.037002 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.629234 | -1.758545 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.029575 | -0.052958 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 1.130741 | -0.992045 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.068663 | -0.117865 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.331861 | -0.093905 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.154677 | 0.124623 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.825027 | 1.591214 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.386982 | -0.887048 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | -0.110180 | 0.013087 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.002585 | -0.004210 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.349057 | 0.283019 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.154698 | 0.124694 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.827044 | 0.867925 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.232142 | 0.202464 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.006223 | 0.006374 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.014624 | 0.012754 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.008820 | 0.009101 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 6.828026 | 6.587734 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.021228 | 0.020304 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.025823 | 0.028793 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.881571 | 0.807877 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 2.393493 | 0.989367 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000380 | -0.000782 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.065213 | 0.067645 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.383710 | 0.416582 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.013019 | -0.165297 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.552134 | -2.055686 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.341743 | 0.232877 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.029913 | -0.127596 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.199541 | 0.136986 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.097149 | -0.172547 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.537526 | 0.348643 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.047202 | -0.078308 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.007512 | 0.004651 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 4.493408 | -12.079679 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.014447 | 0.014186 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 13.222393 | 7.442245 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.009752 | 0.007886 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.101988 | -0.179054 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.154801 | 0.125191 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.093327 | -0.370809 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.788136</td><td>-0.025424</td></tr><tr><td>OUT</td><td>96</td><td>93</td><td>-3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148627</td><td>0.000853</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.157428</td><td>-0.004064</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>GRG1L shares</td><td>543</td><td>1030</td><td>+487</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9567.249810</td><td>489.434998</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.638655</td><td>0.025210</td></tr><tr><td>OUT</td><td>73</td><td>76</td><td>+3</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.064523</td><td>0.003869</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.109584</td><td>0.003758</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 543 GRG1L shares. The scenario adds 487 shares from Table 1.a, resulting in 1030 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="GRG1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![GRG1L high-resolution stochastic dominance](figures/stock_profiles/GRG1L_FSD_SSD_TSD.png?v=1793190070)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-roe1l" data-signal="WAIT" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>ROE1L — Artea Bankas</strong> | current action: WAIT | allocation target 765 shares | netSD diagnostic rank 8</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>416</td><td>765</td><td>+349</td><td>4.48%</td><td>EUR 0.8770</td><td>0.1933</td><td>42 / 19</td><td>39.63</td><td>Bearish</td><td>Inside bands</td><td>0.016 (Oversold)</td><td>EUR 0.0434 / share</td><td>HOLD</td><td>BUY</td><td>0.002004 (2.499% of portfolio HHI)</td><td>EUR 180,274</td><td>0.2%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![ROE1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/ROE1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 0.8770 | ≤ EUR 0.8702 | ≥ EUR 0.9006 | HOLD |
| RSI(14) | RSI = 39.63 | ≤ EUR 0.8644 | ≥ EUR 0.9127 | HOLD |
| Stochastic RSI %K | %K = 0.016 | ≤ EUR 0.8784 | ≥ EUR 0.8820 | BUY |
| MACD crossover | MACD = -0.0025<br>Signal = -0.0018<br>Gap = -0.0007<br>Bullish crossover close ≈ EUR 0.8878 | — | — | SELL |
| Consensus | BUY 1/4; SELL 1/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![ROE1L complete technical history](figures/technical_analysis/ROE1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![ROE1L return histogram](figures/stock_profiles/ROE1L_histogram.png?v=1793184486)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **calendar-month**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -20.90% (2025-09-17) | Average gain / average loss | 1.226 | Best 21-day period | 17.11% (ending 2023-11-30) |
| Average underwater drawdown | 9.75% | Upside potential ratio | 1.186 | Worst 21-day period | -11.16% (ending 2025-04-30) |
| Conditional drawdown 95% | 19.60% | Upside capture vs Baltic EW | 75.2% | Best 5-day period | 10.69% (ending 2026-03-13) |
| Ulcer index | 10.90 | Downside capture vs Baltic EW | 55.4% | Best 63-day period | 21.80% (ending 2025-02-14) |
| Longest underwater period | 616 calendar days | Positive trading days | 39.8% | Repeated calendar pattern | Nov: 100% positive across 3 years |
| Daily downside deviation | 0.642% | Best day | 11.07% (2026-03-13) |  |  |
| Daily upside deviation | 0.795% | Worst day | -5.89% (2025-04-11) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.073%); worst: Monday (-0.033%) | 0.6623 | 0.6924 | Not detected |
| Calendar month | Best: Nov (0.472% daily); worst: Apr (-0.232% daily) | 0.0040 | 0.0308 | Detected |
| Turn of month | First/last three days: 0.111%; other days: 0.010% | 0.3324 | 0.8214 | Not detected |

![ROE1L seasonality, drawdowns and upside periods](figures/stock_profiles/ROE1L_seasonality.png?v=1792941263)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2025-02-14 | 2025-09-17 | Not recovered | -20.90% | 616 |
| 2 | 2023-02-09 | 2023-10-26 | 2024-10-01 | -19.07% | 600 |
| 3 | 2025-01-16 | 2025-01-27 | 2025-01-31 | -3.60% | 15 |
| 4 | 2023-01-03 | 2023-01-05 | 2023-01-12 | -1.68% | 9 |
| 5 | 2024-10-24 | 2024-10-29 | 2024-10-31 | -1.34% | 7 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-11-01 | 2023-11-30 | 17.11% |
| 2 | 2025-10-31 | 2025-12-01 | 15.62% |
| 3 | 2024-09-25 | 2024-10-24 | 14.80% |
| 4 | 2024-12-30 | 2025-01-30 | 10.80% |
| 5 | 2026-03-09 | 2026-04-09 | 10.79% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (30 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 6 | 0.87% | 0.00% | 0.63% | 17% | 33% | 0.5914 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 4 | -0.05% | -0.42% | -0.17% | 50% | 25% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Earnings | 8 | -0.32% | -0.33% | 0.49% | 38% | 12% | 0.9592 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -2.20% | -3.51% | -5.59% | 12% | 50% | 0.0027 | 0.0009 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 4 | -0.32% | -0.38% | 0.59% | 25% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![ROE1L official announcements and abnormal returns](figures/stock_profiles/ROE1L_company_events.png?v=1793169040)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (30 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-27 17:30 | Earnings | Unclassified earnings release | [AB Artea Bankas Group financial statement for H1 2026, reviewed by the audit company](https://view.news.eu.nasdaq.com/view?id=be92b0762ebdca03e7dd08a981914752d&lang=en&src=listed) | Open official announcement | -0.56% | 0.11% | -1.01% | 1.45% | -0.58% | No |
| 2026-07-29 17:00 | Earnings | Higher profit | [AB Artea Bank Group's Financial Results for the Six Months of 2026](https://view.news.eu.nasdaq.com/view?id=b42761a2138e48ce9723c550389391033&lang=en&src=listed) | Open official announcement | -0.23% | -0.91% | 0.57% | 1.82% | 0.01% | No |
| 2026-04-27 16:30 | Earnings | Higher profit | [AB Artea Bank Group's Financial Results for the Three Months of 2026](https://view.news.eu.nasdaq.com/view?id=b79d89e8f25b55baa426e2b9c1873dff9&lang=en&src=listed) | Open official announcement | -0.98% | -0.33% | 0.33% | -1.65% | 0.43% | No |
| 2026-04-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR nan per share](https://nasdaqbaltic.com/statistics/en/dividends) | Open official announcement | -1.09% | 0.11% | 0.33% | -1.10% | 0.58% | No |
| 2026-04-22 09:00 | Guidance | — | [Moody's upgraded AB Artea bankas ratings and its outlook](https://view.news.eu.nasdaq.com/view?id=b284d85c700c94304be6568a04a2dd2a3&lang=en&src=listed) | Open official announcement | -0.44% | -0.33% | -0.66% | -0.88% | -0.50% | No |
| 2026-04-21 16:00 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=bf6665f11f3aa7a636576a9ac779a0e56&lang=en&src=listed) | Open official announcement | 0.33% | 0.00% | -1.09% | -2.63% | -1.67% | Yes |
| 2026-04-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.047 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.047  | 2.27% | -3.70% | -3.17% | -4.23% | -3.54% | Yes |
| 2026-04-07 09:30 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=bd78688e222de6e165ecc695a9db5a5d0&lang=en&src=listed) | Open official announcement | 2.19% | 0.64% | -2.36% | -2.36% | -4.46% | Yes |
| 2025-09-16 09:45 | Guidance | — | [Moody's affirms Artea Bank ratings and its stable outlook](https://view.news.eu.nasdaq.com/view?id=bb29bcfc891c25f6db8fb73d29491727b&lang=en&src=listed) | Open official announcement | -0.25% | -0.88% | 0.00% | 2.88% | 0.47% | No |
| 2025-08-27 16:30 | Earnings | Unclassified earnings release | [AB Artea Bankas Group financial statement for H1 2025, reviewed by the audit company](https://view.news.eu.nasdaq.com/view?id=b221b55b7c3dfd8809ae595109a4ca759&lang=en&src=listed) | Open official announcement | -0.74% | 0.25% | -0.12% | -0.62% | -0.46% | No |
| 2025-04-25 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.061 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.061  | -0.67% | 0.90% | -0.90% | -1.35% | -2.00% | No |
| 2025-04-22 16:00 | Dividend announcement | — | [Correction: Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=b55eab317ab34dfef424749ca5643e5f9&lang=en&src=listed) | Open official announcement | -5.03% | 3.06% | 0.47% | 3.53% | -1.59% | No |
| 2025-04-17 09:00 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=b8a7cea9e5e55c5c728c54f9a95cdb430&lang=en&src=listed) | Open official announcement | -8.53% | -2.30% | 1.15% | 1.15% | -0.72% | Yes |
| 2025-04-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.061 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.061  | -2.06% | -5.89% | -8.53% | -7.79% | -9.29% | No |
| 2025-04-02 16:30 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=b47be9a5496bafe8841d1729798c080d1&lang=en&src=listed) | Open official announcement | 4.68% | -1.42% | -7.52% | -10.37% | -4.08% | Yes |
| 2025-03-17 09:00 | Earnings | Unclassified earnings release | [The Independent Auditor's Report (Annex 1) to the Ordinary General Meeting of Shareholders of Šiaulių bankas to be held on 31 March 2025](https://view.news.eu.nasdaq.com/view?id=bbd8c2fa2eccd62c0008237da033ace6b&lang=en&src=listed) | Open official announcement | -1.57% | -1.06% | 0.00% | -4.89% | 0.73% | No |
| 2024-10-22 16:00 | Earnings | Unclassified earnings release | [Šiaulių Bankas will announce Q3 2024 Financial Results ](https://view.news.eu.nasdaq.com/view?id=b7e8ee5e35f56ad1b26bf66619ab3c4a7&lang=en&src=listed) | Open official announcement | 0.75% | 0.86% | 0.12% | 2.47% | -0.15% | No |
| 2024-09-30 16:00 | Dividend announcement | — | [Šiaulių Bankas AB approve new Dividend Policy ](https://view.news.eu.nasdaq.com/view?id=b281afbb056135f75e6c51a29e07f3323&lang=en&src=listed) | Open official announcement | 0.84% | 7.35% | 7.21% | 12.48% | 6.77% | No |
| 2024-08-28 09:30 | Earnings | Unclassified earnings release | [Šiaulių Bankas AB Group financial statement for H1 2024, reviewed by the audit company](https://view.news.eu.nasdaq.com/view?id=b52a9b0dad7d9061bd2504b363b3e09dd&lang=en&src=listed) | Open official announcement | -0.97% | 0.56% | -0.84% | 0.98% | -1.43% | No |
| 2024-05-22 09:30 | Guidance | — | [Moody's Ratings affirms Šiaulių Bankas' ratings and its stable outlook](https://view.news.eu.nasdaq.com/view?id=b5711b5b6d1c5ad8dd04fe421797c6674&lang=en&src=listed) | Open official announcement | -0.71% | 0.00% | -0.14% | -0.86% | -0.02% | No |
| 2024-04-26 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0485 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0485  | 0.30% | 0.30% | 1.20% | 4.04% | 0.92% | Yes |
| 2024-04-18 09:00 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=bea86fd4f28b66b0652092a877e5fc6a1&lang=en&src=listed) | Open official announcement | -4.99% | 0.15% | 0.30% | 3.30% | -0.12% | No |
| 2024-04-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0485 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0485  | -0.14% | -3.85% | -4.99% | -0.28% | -4.64% | No |
| 2024-04-04 16:00 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=b273474eb8c1d9bd398258cc32affbcf6&lang=en&src=listed) | Open official announcement | -0.28% | 0.00% | -0.14% | -2.56% | -0.28% | No |
| 2024-01-15 16:05 | Guidance | — | [Information on Šiaulių Bankas Strategy Update 2024 - 2029](https://view.news.eu.nasdaq.com/view?id=bdfa4c89d64d6faffebfebed600e458dd&lang=en&src=listed) | Open official announcement | 1.01% | -0.43% | -2.13% | -0.71% | -1.47% | No |
| 2023-08-30 09:50 | Earnings | Unclassified earnings release | [Financial statements of Šiaulių Bankas Group for H1 2023 reviewed by the auditors](https://view.news.eu.nasdaq.com/view?id=bc47fe386b4d9629edc03cab3928afda3&lang=en&src=listed) | Open official announcement | 1.56% | -0.15% | -1.38% | -3.69% | -1.19% | Yes |
| 2023-04-26 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0265 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0265  | -3.11% | -0.76% | -1.53% | -4.89% | -1.21% | No |
| 2023-04-18 16:05 | Dividend announcement | — | [Dividend Payment Procedure ](https://view.news.eu.nasdaq.com/view?id=b56e222337a1ba7295d208c15fda325c3&lang=en&src=listed) | Open official announcement | -0.59% | -0.74% | -3.11% | -7.25% | -2.64% | No |
| 2023-04-14 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0265 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0265  | 1.33% | -1.46% | -2.92% | -8.47% | -2.51% | Yes |
| 2023-04-03 16:00 | Ex-dividend | — | [Ex-dividend Date](https://view.news.eu.nasdaq.com/view?id=bb23de851f090d628788339d81f96864c&lang=en&src=listed) | Open official announcement | -1.02% | -0.73% | 0.73% | -5.29% | 0.73% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (2 classified of 8 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 2 | -0.62% | 0.168 | -0.62% | 0% | -0.61% | 0.070 | -0.61% |
| Higher profit | 5d | 2 | 0.45% | 0.028 | 0.45% | 100% | 0.26% | 0.040 | 0.26% |
| Higher profit | 21d | 2 | 0.08% | 6.042 | 0.08% | 50% | 0.61% | 1.020 | 0.61% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![ROE1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/ROE1L_all_frontiers.png?v=1793191963)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![ROE1L mean return and historical dividend yield with all portfolios](figures/stock_profiles/ROE1L_return_dividend.png?v=1793191932)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.167583 | -0.366847 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 0.590817 | -2.126887 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.196877 | 0.108626 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.418355 | -0.002888 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 255197.017440 | 233193.304437 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.026449 | 0.024993 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 322237.232095 | 256875.198413 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.073217 | -0.118290 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 184413.582500 | 174951.745500 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.061106 | -0.129638 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 236468.000000 | 192490.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.283124 | -0.577464 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000304 | -0.000352 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000291 | -0.000469 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.157493 | -0.446176 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.028734 | 0.059581 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.101864 | 0.851084 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 40.500000 | 60.500000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.024119 | -0.165193 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 25.222222 | 47.500000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.086871 | 0.051731 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.101864 | 0.851084 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 0.703413 | -2.505984 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.115548 | -0.017961 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.506911 | -0.600695 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -3.594338 | -8.659950 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.301252 | 1.101771 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.239647 | -1.121094 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.047397 | -0.118869 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000238 | -0.000429 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.436206 | -0.572036 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.059947 | -0.045399 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.027478 | -0.036035 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.078080 | 0.093912 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.013341 | -0.020660 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.310378 | -1.193436 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.025252 | -0.050765 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 1.864360 | 4.242428 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.044974 | -0.063945 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.194187 | -0.067068 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.167408 | 0.205846 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.044600 | 1.615586 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.205831 | -0.621389 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.037283 | 0.008580 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.010527 | -0.007035 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.493711 | 0.566038 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.167738 | 0.205966 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.779874 | 0.830189 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.235182 | 0.262593 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.006460 | 0.007341 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.014815 | 0.016542 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.009841 | 0.009723 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 1.019340 | 2.855507 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.021779 | 0.022720 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.003927 | 0.012133 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.955879 | 1.334425 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 0.960341 | 1.009219 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000235 | -0.000551 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.103427 | 0.060952 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.416621 | 0.527606 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.097880 | -0.102958 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.712566 | -1.397017 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.428899 | 0.438356 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.039297 | -0.084383 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.201835 | 0.191781 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.047397 | -0.118869 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.486482 | 0.365456 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.027605 | -0.037228 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.008367 | 0.010709 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 2.598796 | -2.766302 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.011506 | 0.009247 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 25.257783 | 46.308278 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.010574 | 0.013026 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.061901 | -0.128690 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.167849 | 0.206787 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.134096 | -0.270252 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.152716</td><td>0.004942</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.162213</td><td>0.000721</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>ROE1L shares</td><td>416</td><td>765</td><td>+349</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9383.887803</td><td>306.072991</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.059330</td><td>-0.001324</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.106450</td><td>0.000624</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 416 ROE1L shares. The scenario adds 349 shares from Table 1.a, resulting in 765 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="ROE1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![ROE1L high-resolution stochastic dominance](figures/stock_profiles/ROE1L_FSD_SSD_TSD.png?v=1793190087)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tal1t" data-signal="WAIT" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>TAL1T — Tallink Grupp</strong> | current action: WAIT | allocation target 1035 shares | netSD diagnostic rank 9</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>700</td><td>1035</td><td>+335</td><td>4.45%</td><td>EUR 0.6450</td><td>0.1092</td><td>32 / 19</td><td>53.70</td><td>Bearish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>EUR 0.0300 / share</td><td>HOLD</td><td>BUY</td><td>0.001981 (2.472% of portfolio HHI)</td><td>EUR 77,229</td><td>0.6%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![TAL1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TAL1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 0.6450 | ≤ EUR 0.6419 | ≥ EUR 0.6502 | HOLD |
| RSI(14) | RSI = 53.70 | ≤ EUR 0.6249 | ≥ EUR 0.6535 | HOLD |
| Stochastic RSI %K | %K = 0.000 | ≤ EUR 0.6474 | ≥ EUR 0.6537 | BUY |
| MACD crossover | MACD = 0.0028<br>Signal = 0.0034<br>Gap = -0.0006<br>Bullish crossover close ≈ EUR 0.6546 | — | — | SELL |
| Consensus | BUY 1/4; SELL 1/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![TAL1T complete technical history](figures/technical_analysis/TAL1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TAL1T return histogram](figures/stock_profiles/TAL1T_histogram.png?v=1793184515)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -24.80% (2025-11-24) | Average gain / average loss | 1.214 | Best 21-day period | 16.31% (ending 2023-08-18) |
| Average underwater drawdown | 13.02% | Upside potential ratio | 1.137 | Worst 21-day period | -17.67% (ending 2024-07-02) |
| Conditional drawdown 95% | 23.76% | Upside capture vs Baltic EW | 68.3% | Best 5-day period | 8.16% (ending 2023-07-27) |
| Ulcer index | 14.78 | Downside capture vs Baltic EW | 51.1% | Best 63-day period | 27.30% (ending 2023-08-22) |
| Longest underwater period | 868 calendar days | Positive trading days | 39.0% | Repeated calendar pattern | Feb: 100% positive across 4 years |
| Daily downside deviation | 0.674% | Best day | 5.37% (2024-02-22) |  |  |
| Daily upside deviation | 0.677% | Worst day | -8.83% (2024-06-19) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.101%); worst: Monday (-0.098%) | 0.1714 | 0.2467 | Not detected |
| Calendar month | Best: Feb (0.195% daily); worst: Jun (-0.256% daily) | 0.6688 | 0.7692 | Not detected |
| Turn of month | First/last three days: 0.107%; other days: 0.007% | 0.3026 | 0.8214 | Not detected |

![TAL1T seasonality, drawdowns and upside periods](figures/stock_profiles/TAL1T_seasonality.png?v=1792941244)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2024-06-07 | 2025-11-24 | Not recovered | -24.80% | 868 |
| 2 | 2023-09-07 | 2023-10-17 | 2024-04-09 | -11.81% | 215 |
| 3 | 2023-03-07 | 2023-03-13 | 2023-06-20 | -4.81% | 105 |
| 4 | 2023-08-21 | 2023-08-24 | 2023-09-07 | -3.48% | 17 |
| 5 | 2024-04-11 | 2024-05-20 | 2024-05-31 | -3.37% | 50 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-07-20 | 2023-08-18 | 16.31% |
| 2 | 2024-12-27 | 2025-01-29 | 11.65% |
| 3 | 2024-09-23 | 2024-10-22 | 9.17% |
| 4 | 2023-02-06 | 2023-03-07 | 8.18% |
| 5 | 2026-01-21 | 2026-02-19 | 7.61% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (38 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.40% | 0.60% | -1.05% | 25% | 0% | 1.0000 | 0.7981 | No adjusted statistical evidence |
| Earnings | 27 | -0.00% | -0.23% | 1.02% | 41% | 33% | 0.3905 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 7 | -3.04% | -6.86% | -8.24% | 0% | 86% | 0.0000 | 0.0000 | Different from ordinary periods; price drop may be mechanical |

![TAL1T official announcements and abnormal returns](figures/stock_profiles/TAL1T_company_events.png?v=1793169047)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (38 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-23 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q2 2026](https://view.news.eu.nasdaq.com/view?id=b810aadb2a6fa5c308db2c732663f163d&lang=en&src=listed) | Open official announcement | -0.16% | -0.16% | -0.16% | 1.47% | -0.26% | No |
| 2026-07-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for June and the Second Quarter of 2026](https://view.news.eu.nasdaq.com/view?id=bd34c3946e1d448133fa85e5cc70b7720&lang=en&src=listed) | Open official announcement | 0.16% | 0.00% | -0.32% | -0.32% | -1.26% | No |
| 2026-07-01 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | 0.33% | 0.33% | 0.16% | -0.49% | -0.61% | No |
| 2026-06-17 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | 0.00% | -5.50% | -6.56% | -6.56% | -5.80% | Yes |
| 2026-06-12 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallink Grupp ](https://view.news.eu.nasdaq.com/view?id=bbd5fd5003b998bb0ce4da7a2c5c5f4ec&lang=en&src=listed) | Open official announcement | 0.77% | 0.15% | -5.96% | -6.42% | -4.91% | Yes |
| 2026-04-23 09:00 | Earnings | Higher profit | [AS-i Tallink Grupp 2026. majandusaasta auditeerimata konsolideeritud I kv tulemuste vahearuanne](https://view.news.eu.nasdaq.com/view?id=bbfa8c39196898346b9433e088d58bc59&lang=en&src=listed) | Open official announcement | -0.63% | 0.48% | 3.02% | 2.54% | 3.86% | No |
| 2026-04-14 09:00 | Earnings | Lower profit | [AS Tallink Grupp Audited Annual Report for the Financial Year 2025](https://view.news.eu.nasdaq.com/view?id=b95719f5e702602be3809d7b9a43b6d1a&lang=en&src=listed) | Open official announcement | 1.96% | 0.64% | 0.48% | 4.33% | 0.57% | No |
| 2026-04-06 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for March and the First Quarter of 2026](https://view.news.eu.nasdaq.com/view?id=bdc9367ae37cb63180e904e380783b03e&lang=en&src=listed) | Open official announcement | -0.49% | 0.33% | 2.13% | 6.57% | 0.49% | Yes |
| 2026-02-19 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q4 and 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b7f20e74fd862485e23b933e9a05263fb&lang=en&src=listed) | Open official announcement | 5.65% | -0.79% | -3.93% | -2.36% | -2.55% | Yes |
| 2026-01-05 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for December and the Fourth Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=bbc67dbc633b570c22325435f47cf72f4&lang=en&src=listed) | Open official announcement | 0.86% | 0.17% | 1.88% | 2.74% | 0.43% | No |
| 2025-11-25 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -0.70% | 0.53% | 0.53% | 2.65% | -0.09% | No |
| 2025-11-13 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -0.33% | -3.17% | -5.17% | -3.67% | -5.44% | Yes |
| 2025-11-10 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallink Grupp ](https://view.news.eu.nasdaq.com/view?id=b98b50c5921af80ef8ad9e0d84cc37db2&lang=en&src=listed) | Open official announcement | -1.15% | 0.17% | -4.83% | -4.17% | -4.84% | Yes |
| 2025-10-23 16:30 | Earnings | Unclassified earnings release | [Correction: AS Tallink Grupp Unaudited Consolidated Interim Report for the Q3 2025](https://view.news.eu.nasdaq.com/view?id=b0b44d930e03f99fc4038db808bca56de&lang=en&src=listed) | Open official announcement | 0.17% | -0.17% | -1.84% | -5.18% | -1.66% | Yes |
| 2025-10-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for September and the Third Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b7e9c8045dd261bdecb9bce6461c16162&lang=en&src=listed) | Open official announcement | -0.17% | 0.00% | 0.67% | 1.17% | 0.28% | No |
| 2025-07-24 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q2 2025](https://view.news.eu.nasdaq.com/view?id=b7800d40a00468096638dfac917bf6186&lang=en&src=listed) | Open official announcement | -1.13% | 0.00% | -1.46% | 0.00% | -1.56% | No |
| 2025-07-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for June and the Second Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b5f2d839432486cba1d713b19f7f84935&lang=en&src=listed) | Open official announcement | -0.16% | 0.00% | -0.32% | -1.13% | -0.88% | No |
| 2025-07-02 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | 0.32% | 0.48% | -0.16% | -1.45% | -0.02% | No |
| 2025-06-18 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.03 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.03  | -0.76% | -4.87% | -5.63% | -5.33% | -5.87% | Yes |
| 2025-04-24 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q1 2025](https://view.news.eu.nasdaq.com/view?id=be2094245113083aff4883b80f45ef684&lang=en&src=listed) | Open official announcement | -3.92% | -0.33% | 0.49% | 6.53% | -0.61% | No |
| 2025-04-16 16:30 | Earnings | Unclassified earnings release | [AS Tallink Grupp Audited Annual Report for the Financial Year 2024](https://view.news.eu.nasdaq.com/view?id=bc2f19b7dc4b9743de1b697269b5c1b4b&lang=en&src=listed) | Open official announcement | 4.78% | -0.31% | -3.93% | 1.57% | -5.27% | Yes |
| 2025-04-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for March and the First Quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b3804420d07f31491a6435605987479c3&lang=en&src=listed) | Open official announcement | 0.31% | -1.09% | -2.97% | -2.03% | -1.19% | No |
| 2025-02-20 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report for the Q4 and 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=bf2e57d6894634da8edadc4bfdd454bdc&lang=en&src=listed) | Open official announcement | 6.19% | 0.00% | -2.39% | -4.78% | -2.07% | Yes |
| 2025-01-03 09:00 | Earnings | Unclassified earnings release | [AS Tallink Grupp Statistics for December and the Fourth Quarter of 2024](https://view.news.eu.nasdaq.com/view?id=bf0ca12b705bf7ed63bcc923ff5ba3398&lang=en&src=listed) | Open official announcement | 2.78% | 1.86% | 2.36% | 7.77% | 0.80% | No |
| 2024-10-24 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report Q3 2024](https://view.news.eu.nasdaq.com/view?id=b76b7368699b4240251aa0a4e7789d7f0&lang=en&src=listed) | Open official announcement | -1.76% | -0.16% | -2.12% | -5.22% | -1.99% | Yes |
| 2024-07-25 09:00 | Earnings | Lower profit | [AS Tallink Grupp Unaudited Consolidated Interim Report Q2 2024](https://view.news.eu.nasdaq.com/view?id=b4e690d5d91c719bad60092852357f019&lang=en&src=listed) | Open official announcement | -2.65% | -0.51% | 4.08% | 3.06% | 4.16% | Yes |
| 2024-07-03 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | -5.38% | 0.98% | 3.25% | -1.79% | 3.13% | No |
| 2024-06-19 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | -6.65% | -8.83% | -7.41% | -13.96% | -6.94% | No |
| 2024-06-12 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallink Grupp ](https://view.news.eu.nasdaq.com/view?id=b57d95610e8103e9b1b006511cd7925f3&lang=en&src=listed) | Open official announcement | 0.13% | -0.13% | -14.78% | -16.64% | -14.24% | Yes |
| 2024-04-25 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q1 2024](https://view.news.eu.nasdaq.com/view?id=bd6e24c67ce2e6f0f2b4b03fa0f300cd7&lang=en&src=listed) | Open official announcement | 0.69% | -1.37% | -1.37% | 1.23% | -1.64% | Yes |
| 2024-04-04 14:00 | Earnings | Higher profit | [AS Tallink Grupp Audited Annual Report for the Financial Year 2023](https://view.news.eu.nasdaq.com/view?id=bbcf084af2e6f9d10dc1e6bd92c495c43&lang=en&src=listed) | Open official announcement | 0.00% | 2.14% | 6.00% | 3.29% | 5.87% | Yes |
| 2024-02-22 09:00 | Earnings | Higher profit | [AS Tallink Grupp unaudited consolidated Interim Report for the fourth quarter and 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=b167c1880926388070032ab7eebca7d94&lang=en&src=listed) | Open official announcement | 6.16% | 1.13% | -0.99% | -1.13% | -2.03% | No |
| 2023-10-26 09:00 | Earnings | Higher profit | [AS Tallink Grupp Unaudited Consolidated Interim Report Q3 2023](https://view.news.eu.nasdaq.com/view?id=b6f84f9b4b0043fa3f5333b70474f6037&lang=en&src=listed) | Open official announcement | 1.24% | -0.15% | 1.07% | 4.75% | 0.98% | No |
| 2023-07-27 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q2 2023](https://view.news.eu.nasdaq.com/view?id=b2ba9fddc03237b5fc83ad55a33195b4d&lang=en&src=listed) | Open official announcement | 8.16% | -0.45% | -0.15% | 5.43% | -0.43% | No |
| 2023-04-27 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q1 2023](https://view.news.eu.nasdaq.com/view?id=b4188886b41d24f27a29997d4c60ed5de&lang=en&src=listed) | Open official announcement | -0.87% | -0.35% | -0.53% | -0.35% | -0.24% | No |
| 2023-04-17 18:00 | Earnings | Loss | [Correction: AS Tallink Grupp Audited Annual Report of the 2022 Financial Year](https://view.news.eu.nasdaq.com/view?id=bebc216ee317e886485b8718a2b6b207d&lang=en&src=listed) | Open official announcement | 0.52% | -0.17% | -0.35% | -1.04% | 0.28% | No |
| 2023-04-03 09:00 | Earnings | Loss | [AS Tallink Grupp Audited Annual Report of the 2022 Financial Year](https://view.news.eu.nasdaq.com/view?id=bfc82fa1835156bd44da1382ba91479ed&lang=en&src=listed) | Open official announcement | 0.17% | 0.52% | -0.70% | -1.22% | -0.70% | No |
| 2023-02-22 09:00 | Earnings | Loss | [AS Tallink Grupp Unaudited Consolidated Interim Report Q4 2022](https://view.news.eu.nasdaq.com/view?id=b6ec8e8b2c07fe9e6a83994224d099fd6&lang=en&src=listed) | Open official announcement | 3.49% | 0.00% | 0.53% | 0.89% | 0.46% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (17 classified of 27 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 4 | 0.90% | 0.962 | 0.80% | 75% | 0.62% | 0.817 | 0.72% |
| Higher profit | 5d | 4 | 2.28% | 8.847 | 2.05% | 75% | 2.16% | 11.860 | 2.40% |
| Higher profit | 21d | 4 | 2.36% | 6.260 | 2.91% | 75% | 2.86% | 10.302 | 3.10% |
| Lower profit | 1d | 6 | -0.14% | 0.241 | -0.08% | 17% | -0.08% | 0.266 | -0.22% |
| Lower profit | 5d | 6 | -0.89% | 7.989 | -1.79% | 33% | -0.61% | 6.465 | -1.77% |
| Lower profit | 21d | 6 | -0.83% | 15.947 | -1.18% | 33% | 0.38% | 12.008 | -0.40% |
| Loss | 1d | 7 | -0.28% | 0.327 | -0.17% | 14% | -0.23% | 0.273 | -0.09% |
| Loss | 5d | 7 | -0.39% | 0.338 | -0.35% | 14% | -0.35% | 0.483 | -0.24% |
| Loss | 21d | 7 | 0.92% | 5.130 | 0.89% | 57% | 2.20% | 4.335 | 2.27% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 3 | 17 | 1.850 | 0.3966 | 0.7778 | No adjusted evidence |
| 5d | 3 | 17 | 2.761 | 0.2514 | 0.7542 | No adjusted evidence |
| 21d | 3 | 17 | 1.786 | 0.4095 | 0.7778 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TAL1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TAL1T_all_frontiers.png?v=1793191964)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![TAL1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/TAL1T_return_dividend.png?v=1793191926)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.197670 | -0.183548 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 0.329382 | 1.495957 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.175944 | 0.063721 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.271995 | 0.314804 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 136701.807594 | 116421.825222 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.055377 | 0.044539 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 216559.261273 | 186953.928571 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.041977 | 0.060392 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 87912.687500 | 78894.166500 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.031019 | 0.053661 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 139083.500000 | 128783.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.160896 | 0.337234 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000193 | 0.000292 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000167 | 0.000240 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.166044 | -0.141273 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.025928 | 0.022571 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.058900 | 1.123630 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 33.590909 | 19.500000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | -0.006498 | 0.024587 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 17.090909 | 10.666667 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.079540 | 0.029274 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.058900 | 1.123630 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 0.389979 | 1.833065 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.069578 | 0.055675 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.514081 | -0.363752 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -3.852091 | -4.067840 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.055850 | 0.986435 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.129772 | 0.703625 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.024315 | 0.042707 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000141 | 0.000198 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.277422 | 0.474239 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.029312 | 0.046178 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.017476 | 0.029874 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.046842 | 0.057087 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.007079 | 0.013255 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.176299 | 0.842128 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.012543 | 0.032511 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 0.107627 | -1.573812 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000001 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.025421 | 0.039925 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.095707 | 0.026480 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.151125 | 0.126639 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.039768 | 0.853647 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.112409 | 0.327759 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.007492 | 0.053809 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.005147 | 0.007156 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.415094 | 0.339623 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.151212 | 0.126841 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.827044 | 0.905660 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.227864 | 0.194969 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.006553 | 0.006002 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.014354 | 0.012282 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.008712 | 0.007365 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 1.058222 | 1.162041 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.023531 | 0.018080 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.004136 | 0.004492 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.861705 | 0.821779 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.435868 | 1.128013 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000121 | 0.000207 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.094173 | 0.035871 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.367248 | 0.516622 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.045102 | 0.098616 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.867493 | -0.941423 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.376147 | 0.342466 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.048513 | -0.051913 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.174312 | 0.136986 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.024315 | 0.042707 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.457023 | 0.362867 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.015929 | 0.020954 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.006916 | 0.005279 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 1.833434 | 3.724025 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.013280 | 0.007371 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 10.651832 | 25.601587 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.009532 | 0.008022 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.031431 | 0.053917 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.151313 | 0.127346 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.156828 | -0.138950 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.805085</td><td>-0.008475</td></tr><tr><td>OUT</td><td>96</td><td>95</td><td>-1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.157178</td><td>0.009405</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161875</td><td>0.000383</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TAL1T shares</td><td>700</td><td>1035</td><td>+335</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9293.889805</td><td>216.074994</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.056389</td><td>-0.004265</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.106080</td><td>0.000254</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 700 TAL1T shares. The scenario adds 335 shares from Table 1.a, resulting in 1035 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="TAL1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TAL1T high-resolution stochastic dominance](figures/stock_profiles/TAL1T_FSD_SSD_TSD.png?v=1793190093)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-dgr1r" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>DGR1R — DelfinGroup</strong> | current action: WAIT | allocation target 250 shares | netSD diagnostic rank 10</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>250</td><td>+250</td><td>2.88%</td><td>EUR 1.7250</td><td>0.0840</td><td>32 / 22</td><td>65.10</td><td>Bearish</td><td>Inside bands</td><td>0.327 (Neutral)</td><td>EUR 0.0957 / share</td><td>HOLD</td><td>BUY</td><td>0.000832 (1.037% of portfolio HHI)</td><td>EUR 12,310</td><td>1.0%</td><td>2.4%</td><td>MEDIUM</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![DGR1R Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/DGR1R_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 1.7250 | ≤ EUR 1.6061 | ≥ EUR 1.7774 | HOLD |
| RSI(14) | RSI = 65.10 | ≤ EUR 1.5112 | ≥ EUR 1.7558 | HOLD |
| Stochastic RSI %K | %K = 0.327 | ≤ EUR 1.7171 | ≥ EUR 1.7742 | HOLD |
| MACD crossover | MACD = 0.0321<br>Signal = 0.0353<br>Gap = -0.0033<br>Bullish crossover close ≈ EUR 1.7763 | — | — | SELL |
| Consensus | BUY 0/4; SELL 1/4; neutral 3/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![DGR1R complete technical history](figures/technical_analysis/DGR1R_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![DGR1R return histogram](figures/stock_profiles/DGR1R_histogram.png?v=1793184543)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -35.19% (2024-09-04) | Average gain / average loss | 1.074 | Best 21-day period | 12.70% (ending 2026-10-09) |
| Average underwater drawdown | 16.94% | Upside potential ratio | 1.160 | Worst 21-day period | -15.86% (ending 2024-05-17) |
| Conditional drawdown 95% | 33.02% | Upside capture vs Baltic EW | 26.4% | Best 5-day period | 8.18% (ending 2026-10-07) |
| Ulcer index | 19.14 | Downside capture vs Baltic EW | 14.3% | Best 63-day period | 15.44% (ending 2026-05-13) |
| Longest underwater period | 1288 calendar days | Positive trading days | 35.3% | Repeated calendar pattern | Nov: 100% positive across 3 years |
| Daily downside deviation | 0.539% | Best day | 5.23% (2026-05-13) |  |  |
| Daily upside deviation | 0.545% | Worst day | -7.59% (2023-05-19) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.146%); worst: Friday (-0.053%) | 0.4993 | 0.6044 | Not detected |
| Calendar month | Best: Feb (0.110% daily); worst: May (-0.143% daily) | 0.9697 | 0.9697 | Not detected |
| Turn of month | First/last three days: 0.098%; other days: -0.002% | 0.0268 | 0.1549 | Not detected |

![DGR1R seasonality, drawdowns and upside periods](figures/stock_profiles/DGR1R_seasonality.png?v=1792941273)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-03-03 | 2024-09-04 | 2026-09-11 | -35.19% | 1288 |
| 2 | 2026-09-24 | 2026-09-28 | 2026-10-05 | -3.09% | 11 |
| 3 | 2026-10-12 | 2026-10-15 | 2026-10-19 | -2.02% | 7 |
| 4 | 2026-10-07 | 2026-10-08 | 2026-10-09 | -1.74% | 2 |
| 5 | 2026-10-19 | 2026-10-23 | Not recovered | -1.73% | 4 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2026-09-10 | 2026-10-09 | 12.70% |
| 2 | 2024-09-10 | 2024-10-09 | 9.56% |
| 3 | 2025-07-11 | 2025-08-11 | 9.27% |
| 4 | 2026-02-10 | 2026-03-11 | 7.80% |
| 5 | 2025-02-05 | 2025-03-06 | 7.55% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (68 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 1 | 0.49% | 0.27% | -1.46% | 100% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 16 | -0.02% | -0.27% | -0.98% | 31% | 19% | 0.5781 | 0.6643 | No adjusted statistical evidence |
| Earnings | 16 | 0.01% | -1.54% | -2.44% | 25% | 31% | 0.2012 | 0.0824 | No adjusted statistical evidence |
| Ex-dividend | 29 | -0.42% | -1.29% | -1.63% | 10% | 31% | 0.0000 | 0.0388 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 2 | 0.14% | -0.29% | 0.37% | 0% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Revenue | 4 | 0.11% | 0.04% | -0.07% | 50% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |

![DGR1R official announcements and abnormal returns](figures/stock_profiles/DGR1R_company_events.png?v=1793169008)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (68 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-12 08:40 | Earnings | Higher profit | [DelfinGroup continues to deliver stable profit growth in the first half of the year](https://view.news.eu.nasdaq.com/view?id=bf5bba56b6bb15f09eba9b60c76dc5f84&lang=en&src=listed) | PROFIT | 1.33% | 0.00% | 0.33% | 0.99% | 0.24% | No |
| 2026-06-29 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0308 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0308  | -2.61% | 2.01% | 3.02% | 0.67% | 2.53% | Yes |
| 2026-06-25 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0308 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0308  | 0.00% | -1.62% | -0.32% | -1.62% | -0.23% | No |
| 2026-05-13 08:48 | Earnings | Higher profit | [DelfinGroup continues to show stable growth in the first quarter](https://view.news.eu.nasdaq.com/view?id=b01a6d27e6828367019f1989b6e4cc640&lang=en&src=listed) | Open official announcement | 5.23% | -1.32% | -2.98% | 0.66% | -2.41% | No |
| 2026-04-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0391 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0391  | -2.04% | -0.35% | 0.00% | 2.43% | -0.55% | No |
| 2026-04-15 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0391 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0391  | 2.83% | -0.69% | -1.37% | 2.41% | -1.29% | Yes |
| 2026-04-13 08:58 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b8b2d7a24b4e172e81aacfa652a4278e2&lang=en&src=listed) | Open official announcement | 4.20% | -0.68% | -2.39% | 3.07% | -2.75% | Yes |
| 2025-12-30 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0256 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0256  | -1.08% | 0.16% | 0.78% | 1.09% | -1.72% | No |
| 2025-12-24 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0256 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0256  | 0.62% | -1.68% | -1.07% | -0.92% | -3.51% | No |
| 2025-12-22 08:49 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b215789d8758489c20b384357d6fe3c93&lang=en&src=listed) | Open official announcement | -0.31% | 0.77% | -0.62% | 0.15% | -3.01% | No |
| 2025-11-05 16:00 | Earnings | Higher profit | [DelfinGroup profit rises 23% in the third quarter](https://view.news.eu.nasdaq.com/view?id=b4cd4970680ea79bd90afeaa3a3dc92c7&lang=en&src=listed) | PROFIT; 23% | 0.78% | 0.31% | -0.31% | 0.15% | -0.50% | No |
| 2025-09-29 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0216 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0216  | -0.47% | 0.00% | 0.31% | 0.31% | -0.48% | No |
| 2025-09-25 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0216 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0216  | 0.00% | -0.31% | 0.00% | -0.16% | -0.23% | No |
| 2025-08-28 16:04 | Guidance | — | [DelfinGroup updates forecast for 2025 and sets new financial targets until 2028](https://view.news.eu.nasdaq.com/view?id=b2de16e3a1fc07b35c3767485ff12a649&lang=en&src=listed) | Open official announcement | 0.16% | 0.00% | -0.16% | -0.93% | -0.36% | No |
| 2025-08-06 16:00 | Revenue | — | [DelfinGroup increases revenue by 27% in the first half of the year](https://view.news.eu.nasdaq.com/view?id=b05ad653d98a3ee724a66d8942426f155&lang=en&src=listed) | REVENUE; 27% | 2.70% | 0.15% | -0.62% | -0.46% | -0.64% | No |
| 2025-07-11 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0092 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0092  | 2.04% | -1.00% | 0.50% | 8.18% | 0.01% | No |
| 2025-07-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0092 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0092  | 1.70% | 0.00% | 0.34% | 8.38% | -0.33% | No |
| 2025-07-07 08:57 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b49a3561e14a9d9f1f92a40b56655aca6&lang=en&src=listed) | Open official announcement | 2.38% | -1.00% | -1.00% | 5.97% | -1.47% | No |
| 2025-06-30 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0194 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0194  | -0.85% | 0.68% | 0.68% | 5.47% | 0.48% | No |
| 2025-06-26 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0194 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0194  | 0.17% | -0.85% | -0.51% | 3.56% | -0.70% | No |
| 2025-06-20 09:51 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b516318639aa8355523b142b8de14d450&lang=en&src=listed) | Open official announcement | 0.17% | 0.00% | -0.34% | 2.20% | -0.87% | No |
| 2025-05-07 16:01 | Revenue | — | [DelfinGroup reports Q1 revenue growth and lending expansion in Lithuania](https://view.news.eu.nasdaq.com/view?id=bc0e3bc31dc7acfa617da9fc83e969d6b&lang=en&src=listed) | REVENUE | 0.00% | 0.00% | -0.17% | 1.91% | 0.39% | No |
| 2025-04-28 16:19 | Earnings | Unclassified earnings release | [Audited DelfinGroup annual report for 2024](https://view.news.eu.nasdaq.com/view?id=b3b89c7715abbaeb04ab36ec712988020&lang=en&src=listed) | Open official announcement | 1.23% | 0.00% | 0.00% | 2.26% | -1.23% | No |
| 2025-04-07 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0223 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0223  | -3.23% | 0.00% | -0.18% | 0.88% | 0.74% | No |
| 2025-04-03 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0223 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0223  | -0.51% | -0.52% | -1.72% | -0.86% | 1.72% | Yes |
| 2024-12-30 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.021 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.021  | -0.92% | 0.00% | 3.16% | 1.12% | -0.15% | Yes |
| 2024-12-24 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.021 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.021  | -0.18% | -0.92% | 0.74% | 0.37% | -2.24% | No |
| 2024-12-19 09:12 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bfb6b606f4020a934a4e99f76b374ab99&lang=en&src=listed) | Open official announcement | -0.18% | 0.00% | 0.00% | 0.92% | -1.74% | No |
| 2024-11-06 18:44 | Earnings | Higher profit | [In the third quarter, the revenue of DelfinGroup increased by 25%](https://view.news.eu.nasdaq.com/view?id=bfddccd6a471b4236eb94b0b7bd1127ef&lang=en&src=listed) | REVENUE; 25% | 1.48% | -0.18% | -2.37% | -0.73% | -0.76% | Yes |
| 2024-10-07 16:30 | Earnings | Unclassified earnings release | [DelfinGroup increases retail volumes and opens new Banknote branches in the 3rd quarter ](https://view.news.eu.nasdaq.com/view?id=b8cc6da359b6f3eb08976adb7044ec941&lang=en&src=listed) | Open official announcement | 0.58% | 2.89% | 5.97% | 4.82% | 3.91% | Yes |
| 2024-10-01 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0202 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0202  | 0.39% | -0.19% | 0.58% | 4.26% | 0.13% | No |
| 2024-09-27 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0202 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0202  | 2.16% | -1.54% | 0.38% | 2.88% | 0.08% | No |
| 2024-09-24 16:42 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b874cc20ce7f67c6fa650de64794f245e&lang=en&src=listed) | Open official announcement | 1.97% | 0.19% | -0.39% | 2.71% | -0.69% | No |
| 2024-08-07 16:34 | Earnings | Higher profit | [DelfinGroup revenue grew by 24% in the second quarter](https://view.news.eu.nasdaq.com/view?id=b9c09e286355908a2dbfbbf243cf17a5c&lang=en&src=listed) | REVENUE; 24% | -2.05% | 0.76% | 0.00% | -4.56% | -0.30% | No |
| 2024-07-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0088 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0088  | -0.18% | -0.18% | -1.47% | -2.94% | -1.14% | Yes |
| 2024-07-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0088 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0088  | 0.37% | -0.18% | -0.92% | -3.66% | -0.34% | No |
| 2024-07-08 09:05 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b738919197674feaf6877a9add4a5d181&lang=en&src=listed) | Open official announcement | 0.18% | -0.18% | -0.91% | -4.94% | 0.02% | No |
| 2024-06-14 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0178 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0178  | -0.36% | 0.36% | -0.91% | -1.09% | -0.47% | No |
| 2024-06-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0178 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0178  | 1.64% | -1.25% | -2.68% | -2.50% | -2.79% | Yes |
| 2024-06-10 10:02 | Ex-dividend | — | [CORRECTION: Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bd61aebdbac2f33ee0943020cce55ca6d&lang=en&src=listed) | Open official announcement | -0.18% | 1.27% | -1.09% | -1.27% | -1.62% | Yes |
| 2024-05-10 16:01 | Earnings | Higher profit | [CORRECTION: DelfinGroup increases revenue by 26% in the first quarter](https://view.news.eu.nasdaq.com/view?id=bdc17d07400d53675fccca830b0e9dfad&lang=en&src=listed) | REVENUE; 26% | -2.12% | -2.84% | -13.19% | -7.85% | -12.35% | No |
| 2024-05-08 20:37 | Earnings | Higher profit | [DelfinGroup increases revenue by 26% in the first quarter](https://view.news.eu.nasdaq.com/view?id=b995899ed65d77c3ae2ac09ab57a8d101&lang=en&src=listed) | REVENUE; 26% | -1.63% | -0.83% | -9.77% | -8.44% | -8.12% | No |
| 2024-04-30 20:30 | Earnings | Unclassified earnings release | [Audited DelfinGroup annual report for 2023 ](https://view.news.eu.nasdaq.com/view?id=b95240e6c4e7551b2d8e0a30a7efb7e08&lang=en&src=listed) | Open official announcement | -0.16% | -0.33% | -1.63% | -10.59% | -2.27% | No |
| 2024-04-16 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0143 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0143  | 0.00% | -0.32% | -0.81% | -12.10% | -0.44% | No |
| 2024-04-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0143 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0143  | 1.63% | -0.32% | -0.96% | -6.57% | -0.61% | No |
| 2024-04-10 08:55 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bbca79491c39bf2ccddcd7d02a67b1bc0&lang=en&src=listed) | Open official announcement | 1.62% | -0.32% | -1.28% | -7.03% | -0.21% | Yes |
| 2024-02-28 20:25 | Revenue | — | [DelfinGroup revenue increased by 41% in 2023](https://view.news.eu.nasdaq.com/view?id=bbc3c78a0a746d5e53834e8caa64a0715&lang=en&src=listed) | REVENUE; 41% | 1.61% | 0.79% | -0.79% | -1.98% | -0.48% | No |
| 2024-01-30 09:10 | Dividend announcement | — | [DelfinGroup explains the procedure for paying out annual dividends](https://view.news.eu.nasdaq.com/view?id=b3069cdf20303f779ef35de17f22e7d03&lang=en&src=listed) | Open official announcement | -0.39% | 0.39% | 0.00% | -1.18% | 0.27% | No |
| 2023-12-28 07:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0214 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0214  | -2.26% | 0.00% | 0.39% | -1.93% | -1.39% | No |
| 2023-12-22 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0214 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0214  | -0.38% | -1.89% | -1.89% | -3.77% | -3.10% | No |
| 2023-12-20 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b09376f2a6c06ece383a7d954074fc0d2&lang=en&src=listed) | Open official announcement | -0.75% | 0.00% | -1.51% | -3.40% | -2.88% | Yes |
| 2023-11-08 09:00 | Revenue | — | [Revenue of DelfinGroup increased by 46% in the first nine months of the year](https://view.news.eu.nasdaq.com/view?id=b22b4074a7e30a239abf82c050a9bcb04&lang=en&src=listed) | REVENUE; 46% | 7.29% | -1.51% | 0.00% | -2.64% | 0.89% | No |
| 2023-09-29 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0195 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0195  | -1.49% | -0.38% | -0.75% | -5.66% | -0.62% | No |
| 2023-09-27 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0195 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0195  | 0.37% | -0.75% | -0.75% | -5.97% | -1.75% | No |
| 2023-09-25 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b340e52e26e4433b8bd7017734a51f8b8&lang=en&src=listed) | Open official announcement | -0.37% | 0.00% | -1.12% | -6.72% | -2.44% | No |
| 2023-08-09 08:56 | Earnings | Higher profit | [Revenue of DelfinGroup grew by 52% in the second quarter](https://view.news.eu.nasdaq.com/view?id=b619c721ac56c0cb246bdb38aac764811&lang=en&src=listed) | REVENUE; 52% | 0.37% | 0.00% | -0.37% | -0.37% | -0.25% | No |
| 2023-06-30 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0177 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0177  | -0.73% | 0.37% | 0.00% | -0.74% | -0.56% | No |
| 2023-06-28 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0177 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0177  | 0.00% | -0.73% | -0.36% | -1.09% | -0.88% | No |
| 2023-06-26 09:00 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=b3404115380920c79ff2e07449b9d61b8&lang=en&src=listed) | Open official announcement | -0.36% | 0.00% | -0.36% | -0.73% | -0.90% | No |
| 2023-06-02 09:35 | Earnings | Higher profit | [DelfinGroup shareholders have approved the annual report for 2022](https://view.news.eu.nasdaq.com/view?id=bfecff8cac878e978b9c8a146aa195a27&lang=en&src=listed) | Open official announcement | 2.55% | 0.35% | -2.13% | -3.19% | -2.91% | Yes |
| 2023-05-10 23:03 | Earnings | Higher profit | [DelfinGroup increases revenues by 46% in the first quarter](https://view.news.eu.nasdaq.com/view?id=b15b104b1b48e2b0f5d7e936260804641&lang=en&src=listed) | REVENUE; 46% | 1.01% | 0.67% | 1.00% | -8.00% | 3.05% | No |
| 2023-04-30 22:59 | Earnings | Higher profit | [DelfinGroup audited annual report for 2022](https://view.news.eu.nasdaq.com/view?id=b74d27223b2eefd52328818c98a86d7bf&lang=en&src=listed) | Open official announcement | 0.00% | -0.33% | -0.33% | -7.69% | -0.19% | No |
| 2023-04-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.0185 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0185  | 0.67% | -0.66% | -0.99% | 0.33% | -0.70% | No |
| 2023-04-13 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.0185 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.0185  | 1.00% | 0.00% | -1.32% | -0.33% | -1.20% | Yes |
| 2023-04-11 10:40 | Ex-dividend | — | [Dividend payment ex-date of AS DelfinGroup](https://view.news.eu.nasdaq.com/view?id=bb7465bc2f30363175acd0feb5bff8d0f&lang=en&src=listed) | Open official announcement | 1.67% | -0.33% | -1.64% | -0.98% | -1.53% | Yes |
| 2023-04-06 09:00 | Earnings | Higher profit | [DelfinGroup increases the sales amount of goods in the first quarter by 43%](https://view.news.eu.nasdaq.com/view?id=b837c1e1d3cc40aea4e6d3a6751a4cc24&lang=en&src=listed) | SALES; 43% | 1.46% | -0.33% | -1.96% | -1.96% | -1.99% | Yes |
| 2023-02-28 18:29 | Guidance | — | [DelfinGroup renews the set financial goals until 2024 and sets forecasts for 2025](https://view.news.eu.nasdaq.com/view?id=b6b6be0196be07aea2f546c8c0dd02645&lang=en&src=listed) | Open official announcement | 0.93% | 0.66% | 0.00% | -1.05% | -0.22% | No |
| 2023-02-27 16:08 | Earnings | Higher profit | [Last year, the profit of DelfinGroup increased by 40% ](https://view.news.eu.nasdaq.com/view?id=b3d0d1e5a1d23212ea884ec6eb39d0efb&lang=en&src=listed) | PROFIT; 40% | 0.80% | 0.00% | 1.58% | -0.66% | 1.49% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (13 classified of 16 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 13 | -0.29% | 0.909 | 0.00% | 31% | -0.09% | 1.209 | 0.06% |
| Higher profit | 5d | 13 | -2.35% | 18.718 | -0.37% | 23% | -1.92% | 16.785 | -0.50% |
| Higher profit | 21d | 13 | -3.20% | 13.332 | -1.96% | 23% | -2.41% | 10.186 | -1.28% |

**Kruskal–Wallis test across the available outcome groups**

At least two outcome groups with two observations each are required; this share does not have enough observations for the omnibus test.

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![DGR1R Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/DGR1R_all_frontiers.png?v=1793191962)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![DGR1R mean return and historical dividend yield with all portfolios](figures/stock_profiles/DGR1R_return_dividend.png?v=1793191946)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.147502 | 0.145229 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 0.969570 | 33.295968 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.219417 | 0.029771 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.513775 | -2.063050 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 22467.139199 | 13009.671508 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.325758 | 0.487791 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 17980.977454 | 9041.492063 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.084699 | 0.332701 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 13531.845000 | 8963.002500 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.081187 | 0.382438 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 10765.000000 | 6281.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.612374 | 2.717355 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000512 | 0.001539 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000336 | 0.001320 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.069047 | 0.178937 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.025228 | 0.016158 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.175833 | 1.710604 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 42.647059 | 12.888889 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.054567 | 0.364660 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 18.117647 | 4.666667 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.059109 | 0.008884 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.175833 | 1.710604 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 1.373504 | 43.047524 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.001967 | 0.193033 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.441620 | -0.273030 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -1.378546 | 9.767383 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.217830 | 2.065739 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.526896 | 7.106236 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.070412 | 0.356994 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000295 | 0.001225 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.734241 | 2.502576 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.047115 | 0.107267 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.046253 | 0.157648 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.028419 | 0.027742 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.021934 | 0.117039 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.370012 | 12.846112 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.036948 | 0.192423 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 0.567524 | 2.378674 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.072290 | 0.359692 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.263087 | 0.175771 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.114983 | 0.131375 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.816319 | 0.549514 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.254172 | 2.947030 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.058388 | -0.083878 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.008273 | 0.016622 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.396226 | 0.396226 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.115280 | 0.132423 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.852201 | 0.849057 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.203066 | 0.191144 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.004649 | 0.003670 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.012792 | 0.012041 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.008340 | 0.004974 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 1.723183 | 3.565308 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.015324 | 0.011280 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.006576 | 0.011988 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.656937 | 0.857900 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.395309 | 0.987843 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000310 | 0.001286 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.083735 | 0.011486 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.415806 | 0.434550 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.125337 | 0.242298 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.726377 | 0.759791 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.376147 | 0.383562 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.039695 | 0.036618 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.174312 | 0.205479 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.070412 | 0.356994 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.483417 | 0.865870 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.041062 | 0.258714 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.005588 | 0.007606 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 6.365002 | 18.824405 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.009097 | 0.006861 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 19.458838 | 13.793126 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.007267 | 0.008375 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.084542 | 0.398063 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.115356 | 0.132943 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.085543 | 0.168585 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148472</td><td>0.000698</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161309</td><td>-0.000183</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>DGR1R shares</td><td>0</td><td>250</td><td>+250</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9509.064818</td><td>431.250006</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.621849</td><td>0.008403</td></tr><tr><td>OUT</td><td>73</td><td>74</td><td>+1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.051956</td><td>-0.008698</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.106964</td><td>0.001138</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 DGR1R shares. The scenario adds 250 shares from Table 1.a, resulting in 250 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="DGR1R"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![DGR1R high-resolution stochastic dominance](figures/stock_profiles/DGR1R_FSD_SSD_TSD.png?v=1793190064)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tkm1t" data-signal="WAIT" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>TKM1T — TKM Grupp</strong> | current action: WAIT | allocation target 338 shares | netSD diagnostic rank 11</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>288</td><td>338</td><td>+50</td><td>20.10%</td><td>EUR 8.9000</td><td>0.0756</td><td>31 / 22</td><td>31.90</td><td>Bearish</td><td>Inside bands</td><td>0.486 (Neutral)</td><td>EUR 0.6660 / share</td><td>HOLD</td><td>BUY</td><td>0.040414 (50.418% of portfolio HHI)</td><td>EUR 40,663</td><td>0.0%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![TKM1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TKM1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 8.9000 | ≤ EUR 8.8530 | ≥ EUR 9.0660 | HOLD |
| RSI(14) | RSI = 31.90 | ≤ EUR 8.8868 | ≥ EUR 9.1374 | HOLD |
| Stochastic RSI %K | %K = 0.486 | ≤ EUR 8.8653 | ≥ EUR 8.9249 | HOLD |
| MACD crossover | MACD = -0.0406<br>Signal = -0.0386<br>Gap = -0.0020<br>Bullish crossover close ≈ EUR 8.9307 | — | — | SELL |
| Consensus | BUY 0/4; SELL 1/4; neutral 3/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![TKM1T complete technical history](figures/technical_analysis/TKM1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TKM1T return histogram](figures/stock_profiles/TKM1T_histogram.png?v=1793184486)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -16.67% (2026-10-15) | Average gain / average loss | 0.937 | Best 21-day period | 6.68% (ending 2025-01-16) |
| Average underwater drawdown | 9.57% | Upside potential ratio | 0.799 | Worst 21-day period | -9.08% (ending 2024-04-29) |
| Conditional drawdown 95% | 15.40% | Upside capture vs Baltic EW | 17.7% | Best 5-day period | 4.55% (ending 2025-01-07) |
| Ulcer index | 10.20 | Downside capture vs Baltic EW | 22.6% | Best 63-day period | 11.52% (ending 2025-02-10) |
| Longest underwater period | 939 calendar days | Positive trading days | 39.2% | Repeated calendar pattern | Feb: 100% positive across 4 years |
| Daily downside deviation | 0.477% | Best day | 3.06% (2025-01-03) |  |  |
| Daily upside deviation | 0.335% | Worst day | -6.77% (2026-03-31) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.046%); worst: Tuesday (-0.059%) | 0.0438 | 0.1440 | Not detected |
| Calendar month | Best: Jan (0.138% daily); worst: Apr (-0.154% daily) | 0.2077 | 0.4343 | Not detected |
| Turn of month | First/last three days: -0.082%; other days: 0.012% | 0.6703 | 0.8214 | Not detected |

![TKM1T seasonality, drawdowns and upside periods](figures/stock_profiles/TKM1T_seasonality.png?v=1792941228)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2024-03-28 | 2026-10-15 | Not recovered | -16.67% | 939 |
| 2 | 2023-03-27 | 2023-09-22 | 2024-02-21 | -9.33% | 331 |
| 3 | 2023-02-09 | 2023-02-14 | 2023-03-01 | -1.36% | 20 |
| 4 | 2024-02-21 | 2024-02-29 | 2024-03-15 | -1.33% | 23 |
| 5 | 2023-03-01 | 2023-03-02 | 2023-03-03 | -1.17% | 2 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2024-12-11 | 2025-01-16 | 6.68% |
| 2 | 2023-01-02 | 2023-01-31 | 6.61% |
| 3 | 2025-12-09 | 2026-01-14 | 6.39% |
| 4 | 2024-01-09 | 2024-02-07 | 4.65% |
| 5 | 2023-09-22 | 2023-10-23 | 4.31% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (31 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.75% | 0.50% | -1.29% | 25% | 0% | 1.0000 | 0.6236 | No adjusted statistical evidence |
| Earnings | 19 | -0.49% | -0.24% | 0.34% | 53% | 11% | 0.9592 | 0.7493 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.86% | -6.04% | -7.49% | 0% | 88% | 0.0000 | 0.0000 | Different from ordinary periods; price drop may be mechanical |

![TKM1T official announcements and abnormal returns](figures/stock_profiles/TKM1T_company_events.png?v=1793169053)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (31 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2026](https://view.news.eu.nasdaq.com/view?id=bc94e61ae93435ef732b90cb75dafb9e3&lang=en&src=listed) | Open official announcement | -0.22% | -0.44% | 0.22% | -0.11% | -0.63% | No |
| 2026-04-10 16:30 | Earnings | Loss | [Unaudited consolidated interim accounts for the first quarter of 2026](https://view.news.eu.nasdaq.com/view?id=ba566a451cdc6edd9cf00d93b39abda9d&lang=en&src=listed) | Open official announcement | 0.87% | 0.00% | -0.11% | -0.86% | -0.30% | No |
| 2026-04-07 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.6 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.6  | -6.59% | 0.98% | 0.98% | 0.11% | -0.67% | No |
| 2026-03-30 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.6 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.6  | 0.41% | 0.00% | -6.06% | -6.67% | -5.99% | Yes |
| 2026-03-25 16:30 | Ex-dividend | — | [Dividend payment ex-date of TKM Grupp AS](https://view.news.eu.nasdaq.com/view?id=b69e5ffb656e8ca2593ae9b5f7d224119&lang=en&src=listed) | Open official announcement | 0.20% | 0.00% | -6.49% | -6.09% | -5.46% | Yes |
| 2026-02-19 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2025](https://view.news.eu.nasdaq.com/view?id=b6ad8814c26e0bf4cedd01f2a21c90f10&lang=en&src=listed) | Open official announcement | -0.31% | 1.77% | 1.36% | 2.82% | 2.74% | No |
| 2026-01-16 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the fourth quarter and twelve months of 2025](https://view.news.eu.nasdaq.com/view?id=bdb594d68cdc426e73ee5b759a1019358&lang=en&src=listed) | Open official announcement | -1.33% | -2.60% | -1.77% | -0.31% | -2.04% | No |
| 2025-10-09 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the third quarter and first nine months of 2025](https://view.news.eu.nasdaq.com/view?id=b7f84bf1933a01e0dbcc2c57c37261dd4&lang=en&src=listed) | Open official announcement | -0.11% | -0.11% | 0.11% | -0.22% | 0.34% | No |
| 2025-07-09 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2025](https://view.news.eu.nasdaq.com/view?id=b0e9b59515a30f24019b036c6848e2d9a&lang=en&src=listed) | Open official announcement | 0.53% | -1.06% | -1.17% | -1.17% | -1.85% | No |
| 2025-04-09 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the first quarter of 2025](https://view.news.eu.nasdaq.com/view?id=b196cedf60b04cbc56aaa52950cddbcb3&lang=en&src=listed) | Open official announcement | -0.53% | -1.39% | -1.18% | 0.21% | -3.16% | Yes |
| 2025-04-03 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.65 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.65  | -5.05% | 0.11% | -0.53% | -0.74% | 2.91% | No |
| 2025-03-28 07:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.65 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.65  | -0.60% | -3.42% | -5.23% | -6.44% | -5.51% | No |
| 2025-03-25 09:00 | Ex-dividend | — | [Dividend payment ex-date of TKM Grupp AS](https://view.news.eu.nasdaq.com/view?id=bbbedb7de4849789c6e21914ac4d518e7&lang=en&src=listed) | Open official announcement | -0.20% | -0.40% | -4.52% | -6.43% | -4.92% | Yes |
| 2025-02-20 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2024](https://view.news.eu.nasdaq.com/view?id=b68e6e54cfea7c627a3ea83f736c7f7d8&lang=en&src=listed) | Open official announcement | 0.00% | 0.00% | 0.10% | 0.81% | 0.42% | No |
| 2025-01-16 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the fourth quarter and twelve months of 2024](https://view.news.eu.nasdaq.com/view?id=bf8954469635fd3d51ed94439160b8ab2&lang=en&src=listed) | Open official announcement | 0.30% | -1.62% | -1.01% | 0.20% | -2.08% | No |
| 2024-10-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the third quarter and first nine months of 2024](https://view.news.eu.nasdaq.com/view?id=bb6e49742b476dde8dc28f2c00488ea8c&lang=en&src=listed) | Open official announcement | -0.42% | -0.74% | 0.74% | -2.63% | 0.05% | No |
| 2024-07-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2024](https://view.news.eu.nasdaq.com/view?id=b661d26e2a9d8c9fbf93d926ec1570a6c&lang=en&src=listed) | Open official announcement | 2.11% | -1.34% | -0.21% | -1.44% | 0.52% | No |
| 2024-04-10 16:30 | Earnings | Lower profit | [Unaudited consolidated interim accounts for the first quarter of 2024](https://view.news.eu.nasdaq.com/view?id=b3c0810db4b364f06ae7e966c4cda6d5e&lang=en&src=listed) | Open official announcement | 0.10% | -1.11% | -0.81% | -1.82% | 0.26% | No |
| 2024-04-08 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.72 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.72  | -7.68% | 0.20% | -0.41% | -1.52% | -0.22% | No |
| 2024-04-02 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.72 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.72  | 0.00% | -6.55% | -7.49% | -8.90% | -7.76% | Yes |
| 2024-03-26 09:35 | Ex-dividend | — | [Dividend payment ex-date of Tallinna Kaubamaja Grupp AS](https://view.news.eu.nasdaq.com/view?id=b9c6e1e0b4a2d4ac37f829075b1ff419f&lang=en&src=listed) | Open official announcement | 0.19% | 0.19% | -7.60% | -8.82% | -7.51% | Yes |
| 2024-02-21 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2023](https://view.news.eu.nasdaq.com/view?id=bf0619fbd95f5185f235f8d6bfe671702&lang=en&src=listed) | Open official announcement | 2.74% | -0.95% | -0.95% | 1.71% | -1.99% | No |
| 2024-01-18 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the fourth quarter and twelve months of 2023](https://view.news.eu.nasdaq.com/view?id=b3022f8ae832f1399b0dde16e33aa4209&lang=en&src=listed) | Open official announcement | 3.03% | -0.78% | -1.57% | 1.37% | -0.52% | Yes |
| 2023-10-11 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the third quarter and first nine months of 2023](https://view.news.eu.nasdaq.com/view?id=b718d45e41deba535cb9d6c27d0b2b480&lang=en&src=listed) | Open official announcement | 0.82% | -0.20% | 0.10% | 0.20% | -0.16% | No |
| 2023-07-12 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the second quarter and first six months of 2023](https://view.news.eu.nasdaq.com/view?id=b205cc4450fb96adffd3a1ca00370fbbe&lang=en&src=listed) | Open official announcement | 0.81% | 0.60% | 0.60% | 0.60% | 0.41% | No |
| 2023-04-12 16:30 | Earnings | Higher profit | [Unaudited consolidated interim accounts for the first quarter of 2023](https://view.news.eu.nasdaq.com/view?id=baccba5617cf059530047886bf21fb7d5&lang=en&src=listed) | Open official announcement | 0.00% | 0.20% | 0.10% | -0.10% | 0.22% | No |
| 2023-04-05 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.68 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.68  | -5.82% | 0.30% | 0.00% | -0.30% | -0.02% | No |
| 2023-03-30 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.68 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.68  | 0.19% | -5.53% | -5.53% | -6.30% | -5.26% | Yes |
| 2023-03-27 09:30 | Ex-dividend | — | [Dividend payment ex-date of Tallinna Kaubamaja Grupp AS](https://view.news.eu.nasdaq.com/view?id=b2cb85346da34ac7e9532ce6a0cd7aa87&lang=en&src=listed) | Open official announcement | 0.19% | -0.19% | -6.19% | -6.38% | -5.87% | Yes |
| 2023-02-21 16:30 | Earnings | Unclassified earnings release | [Audited annual report 2022](https://view.news.eu.nasdaq.com/view?id=bd66c155ba40261254f10f6a8ef347428&lang=en&src=listed) | Open official announcement | 0.00% | 0.39% | 0.20% | 2.95% | 0.65% | No |
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
| Higher profit | 21d | 5 | 0.46% | 0.325 | 0.20% | 80% | 0.71% | 6.991 | 1.57% |
| Lower profit | 1d | 9 | -0.96% | 0.652 | -1.06% | 11% | -0.97% | 0.727 | -0.85% |
| Lower profit | 5d | 9 | -0.08% | 2.315 | -0.21% | 44% | -0.41% | 2.835 | 0.05% |
| Lower profit | 21d | 9 | -0.34% | 4.022 | -0.31% | 22% | -0.85% | 4.628 | -0.82% |
| Loss | 1d | 1 | 0.00% | — | 0.00% | 0% | -0.26% | — | -0.26% |
| Loss | 5d | 1 | -0.11% | — | -0.11% | 0% | -0.66% | — | -0.66% |
| Loss | 21d | 1 | -0.86% | — | -0.86% | 0% | -1.28% | — | -1.28% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 14 | 1.604 | 0.2053 | 0.6718 | No adjusted evidence |
| 5d | 2 | 14 | 0.111 | 0.7389 | 0.9048 | No adjusted evidence |
| 21d | 2 | 14 | 2.351 | 0.1252 | 0.5008 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TKM1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TKM1T_all_frontiers.png?v=1793191964)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![TKM1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/TKM1T_return_dividend.png?v=1793191920)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.245834 | -0.310996 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | -0.155489 | -1.561295 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.166757 | 0.073093 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -0.134226 | -0.432526 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 80742.190464 | 59177.917540 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.049333 | 0.046175 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 8256.637931 | 6309.087302 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | -0.012415 | -0.070065 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 54604.550000 | 46866.300000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | -0.017144 | -0.073786 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 5724.000000 | 4861.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | -0.262838 | -0.433794 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | -0.000088 | -0.000381 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | -0.000049 | -0.000278 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.144689 | -0.247095 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.023401 | 0.013726 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 0.969178 | 0.815509 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 82.555556 | 14.250000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | -0.046307 | -0.105275 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 44.555556 | 3.750000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.101675 | 0.038140 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 0.969178 | 0.815509 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | -0.168618 | -1.934643 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.039924 | -0.085886 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.401935 | -0.332539 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -1.540809 | -4.864661 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 0.880477 | 0.702365 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | -0.105762 | -1.008522 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | -0.025666 | -0.048390 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | -0.000082 | -0.000183 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | -0.126771 | -0.618848 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.037264 | -0.107062 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | -0.007986 | -0.038984 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.039836 | 0.036170 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | -0.003171 | -0.016895 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | -0.102810 | -1.009492 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | -0.007722 | -0.063843 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | -4.229134 | -6.723593 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | -0.009672 | -0.042768 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | -0.050426 | -0.037600 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.097650 | 0.111551 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.990667 | 1.251775 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | -0.064269 | -0.426283 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.041769 | -0.056174 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.006543 | -0.016591 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.405660 | 0.339623 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.097869 | 0.112778 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.874214 | 0.981132 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.195262 | 0.204876 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.005094 | 0.006501 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.012300 | 0.012906 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.006125 | 0.006796 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | -0.460079 | 0.689191 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.015537 | 0.016457 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | -0.001841 | 0.002841 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.557720 | 0.730614 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.026238 | 0.724751 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | -0.000069 | -0.000304 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.110261 | 0.047260 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.417854 | 0.513366 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.021561 | -0.109462 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -1.258994 | -1.517972 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.396789 | 0.328767 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.072047 | -0.089041 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.135321 | 0.136986 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | -0.025666 | -0.048390 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.304138 | 0.189048 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | -0.004701 | -0.020380 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.003474 | 0.002877 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | -1.294455 | -5.465959 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.006380 | 0.004355 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 48.615014 | 65.326639 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.006169 | 0.007132 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | -0.017525 | -0.073722 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.097934 | 0.113219 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.211143 | -0.273358 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.762712</td><td>-0.050847</td></tr><tr><td>OUT</td><td>96</td><td>90</td><td>-6</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.207303</td><td>0.059529</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.181595</td><td>0.020102</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TKM1T shares</td><td>288</td><td>338</td><td>+50</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9522.814793</td><td>444.999981</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.052277</td><td>-0.008377</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.101774</td><td>-0.004051</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 288 TKM1T shares. The scenario adds 50 shares from Table 1.a, resulting in 338 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="TKM1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TKM1T high-resolution stochastic dominance](figures/stock_profiles/TKM1T_FSD_SSD_TSD.png?v=1793190099)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-hae1t" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>HAE1T — Harju Elekter Group</strong> | current action: WAIT | allocation target 169 shares | netSD diagnostic rank 12</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>100</td><td>169</td><td>+69</td><td>5.93%</td><td>EUR 5.2400</td><td>0.1176</td><td>38 / 24</td><td>48.42</td><td>Bearish</td><td>Inside bands</td><td>0.083 (Oversold)</td><td>EUR 0.1440 / share</td><td>HOLD</td><td>BUY</td><td>0.003519 (4.390% of portfolio HHI)</td><td>EUR 17,505</td><td>0.6%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![HAE1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/HAE1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 5.2400 | ≤ EUR 5.0748 | ≥ EUR 5.4732 | HOLD |
| RSI(14) | RSI = 48.42 | ≤ EUR 4.6176 | ≥ EUR 5.9161 | HOLD |
| Stochastic RSI %K | %K = 0.083 | ≤ EUR 5.3085 | ≥ EUR 5.8757 | BUY |
| MACD crossover | MACD = 0.0286<br>Signal = 0.0352<br>Gap = -0.0066<br>Bullish crossover close ≈ EUR 5.3441 | — | — | SELL |
| Consensus | BUY 1/4; SELL 1/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![HAE1T complete technical history](figures/technical_analysis/HAE1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![HAE1T return histogram](figures/stock_profiles/HAE1T_histogram.png?v=1793184486)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -14.80% (2025-03-07) | Average gain / average loss | 1.115 | Best 21-day period | 15.88% (ending 2026-01-14) |
| Average underwater drawdown | 8.03% | Upside potential ratio | 1.200 | Worst 21-day period | -8.63% (ending 2025-03-12) |
| Conditional drawdown 95% | 14.17% | Upside capture vs Baltic EW | 51.6% | Best 5-day period | 10.20% (ending 2026-01-14) |
| Ulcer index | 8.80 | Downside capture vs Baltic EW | 45.2% | Best 63-day period | 25.75% (ending 2026-03-13) |
| Longest underwater period | 608 calendar days | Positive trading days | 38.5% | Repeated calendar pattern | Jan: 75% positive across 4 years |
| Daily downside deviation | 0.584% | Best day | 6.25% (2024-05-15) |  |  |
| Daily upside deviation | 0.633% | Worst day | -5.15% (2025-02-20) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.130%); worst: Thursday (-0.121%) | 0.0182 | 0.1207 | Not detected |
| Calendar month | Best: Jan (0.206% daily); worst: Jun (-0.097% daily) | 0.5407 | 0.6545 | Not detected |
| Turn of month | First/last three days: -0.038%; other days: 0.022% | 0.6164 | 0.8214 | Not detected |

![HAE1T seasonality, drawdowns and upside periods](figures/stock_profiles/HAE1T_seasonality.png?v=1792941242)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2024-05-15 | 2025-03-07 | 2026-01-13 | -14.80% | 608 |
| 2 | 2026-04-16 | 2026-08-14 | Not recovered | -14.72% | 190 |
| 3 | 2023-01-27 | 2024-04-10 | 2024-05-15 | -11.52% | 474 |
| 4 | 2026-03-13 | 2026-03-31 | 2026-04-08 | -4.44% | 26 |
| 5 | 2026-02-19 | 2026-03-04 | 2026-03-13 | -3.48% | 22 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-12-09 | 2026-01-14 | 15.88% |
| 2 | 2024-04-12 | 2024-05-15 | 12.01% |
| 3 | 2026-01-21 | 2026-02-19 | 9.13% |
| 4 | 2024-12-18 | 2025-01-23 | 7.58% |
| 5 | 2026-03-11 | 2026-04-13 | 7.55% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (31 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | 0.49% | -0.65% | -0.59% | 25% | 25% | 0.6563 | 1.0000 | No adjusted statistical evidence |
| Earnings | 19 | -0.10% | -0.16% | 0.54% | 53% | 26% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.17% | -2.51% | -3.85% | 25% | 62% | 0.0340 | 0.0589 | Different from ordinary periods; price drop may be mechanical |

![HAE1T official announcements and abnormal returns](figures/stock_profiles/HAE1T_company_events.png?v=1793169016)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (31 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-23 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-6/2026](https://view.news.eu.nasdaq.com/view?id=bb831cad24851c6144aded6ae2f08ef94&lang=en&src=listed) | Open official announcement | -4.07% | -0.77% | -0.77% | -0.77% | -0.87% | No |
| 2026-05-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.25  | -4.48% | 1.08% | -0.72% | -2.17% | -0.86% | No |
| 2026-05-20 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.25 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.25  | -1.02% | 0.00% | -4.14% | -6.90% | -4.49% | Yes |
| 2026-05-15 07:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter Group](https://view.news.eu.nasdaq.com/view?id=bae459a0eaad19cfe634ddb1038133fa0&lang=en&src=listed) | Open official announcement | -0.68% | -0.34% | -4.76% | -7.82% | -4.24% | Yes |
| 2026-04-23 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-3/2026](https://view.news.eu.nasdaq.com/view?id=b716fc47c9b03923cb049b0354763075b&lang=en&src=listed) | Open official announcement | -5.35% | 0.35% | -0.35% | -1.77% | 0.49% | No |
| 2026-03-30 10:19 | Earnings | Unclassified earnings release | [ Harju Elekter Group's audited Annual Report 2025](https://view.news.eu.nasdaq.com/view?id=b16e68f9d00f673d1a748f0c16ad936ed&lang=en&src=listed) | Open official announcement | -1.39% | -1.41% | 3.87% | -0.70% | 2.94% | Yes |
| 2026-02-19 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-12/2025](https://view.news.eu.nasdaq.com/view?id=ba5b76fe3d4d742b568831b069e0e7219&lang=en&src=listed) | Open official announcement | 5.51% | -0.70% | -2.44% | 1.74% | -1.06% | Yes |
| 2025-10-30 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-9/2025](https://view.news.eu.nasdaq.com/view?id=bc1c7abe1bc0e479751af81366937d865&lang=en&src=listed) | Open official announcement | 1.74% | 0.43% | -0.21% | -0.64% | -0.05% | No |
| 2025-07-24 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-6/2025](https://view.news.eu.nasdaq.com/view?id=b5cda42db997f0911f76183be52252a1a&lang=en&src=listed) | Open official announcement | -0.83% | 0.00% | -0.63% | -1.47% | -0.73% | No |
| 2025-05-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | 0.42% | 0.00% | -1.26% | 0.84% | -1.25% | No |
| 2025-05-20 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.15 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.15  | 0.82% | -3.27% | -3.47% | -4.29% | -3.41% | No |
| 2025-05-15 07:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter Group](https://view.news.eu.nasdaq.com/view?id=bdf92446b47cf58bee5ef2ab263b20805&lang=en&src=listed) | Open official announcement | 0.41% | 1.23% | -2.47% | -2.88% | -3.38% | Yes |
| 2025-04-24 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-3/2025](https://view.news.eu.nasdaq.com/view?id=bc6c53a85512ab746dde5bfb050e38c70&lang=en&src=listed) | Open official announcement | -0.43% | 0.00% | 0.21% | 1.50% | -0.88% | No |
| 2025-03-27 07:42 | Earnings | Unclassified earnings release | [CORRECTION: Harju Elekter Group's audited Annual Report 2024](https://view.news.eu.nasdaq.com/view?id=b11e03c6b7e0673dd5d7aa8beae40fac3&lang=en&src=listed) | Open official announcement | -0.33% | 0.65% | 2.39% | 0.87% | 2.11% | No |
| 2025-02-20 07:00 | Earnings | Lower profit | [Harju Elekter Group financial results, 1-12/2024](https://view.news.eu.nasdaq.com/view?id=b84af3d8acaab4dd1af8ea0b3b48d7351&lang=en&src=listed) | Open official announcement | -4.67% | 0.00% | -3.40% | -1.91% | -3.08% | No |
| 2024-10-23 07:00 | Earnings | In line / unchanged | [Harju Elekter Group financial results, 1-9/2024](https://view.news.eu.nasdaq.com/view?id=bb119455ebab635b6f2e32dc644dc80c8&lang=en&src=listed) | Open official announcement | -2.64% | 0.54% | 0.00% | -0.54% | 0.14% | No |
| 2024-07-24 09:39 | Earnings | Higher profit | [Correction: Harju Elekter Group financial results, 1-6/2024](https://view.news.eu.nasdaq.com/view?id=b307d54534f45fe12d6e22747c131674d&lang=en&src=listed) | Open official announcement | 2.00% | -0.93% | -0.10% | -1.75% | 0.49% | No |
| 2024-05-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | 0.31% | 0.61% | -1.32% | -2.85% | -1.87% | No |
| 2024-05-20 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | 5.13% | -4.30% | -3.52% | -7.03% | -3.21% | Yes |
| 2024-05-15 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter Group](https://view.news.eu.nasdaq.com/view?id=b2fd0fc481cfc3c6944a0336a882a6ed9&lang=en&src=listed) | Open official announcement | 9.11% | -2.85% | -4.93% | -7.31% | -4.44% | Yes |
| 2024-04-24 07:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-3/2024](https://view.news.eu.nasdaq.com/view?id=bef401f55bedf01e88b6f0157cb805c90&lang=en&src=listed) | Open official announcement | 0.64% | 0.85% | 2.13% | 4.57% | 1.64% | No |
| 2024-03-27 08:00 | Earnings | Unclassified earnings release | [Harju Elekter Group's audited Annual Report 2023](https://view.news.eu.nasdaq.com/view?id=b5153c176e45f6bac6a736aa4db092119&lang=en&src=listed) | Open official announcement | -0.10% | -1.03% | -2.79% | -0.21% | -3.36% | No |
| 2024-02-21 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-12/2023](https://view.news.eu.nasdaq.com/view?id=b4991a9e6923ac426c1cbf6093fc3ff96&lang=en&src=listed) | Open official announcement | 0.92% | -0.41% | -1.02% | -1.93% | -2.05% | Yes |
| 2023-10-25 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-9/2023](https://view.news.eu.nasdaq.com/view?id=b9ddb78545746cb52528d3eddc3a542b5&lang=en&src=listed) | Open official announcement | 1.00% | -0.20% | -1.19% | -1.58% | -0.90% | Yes |
| 2023-07-26 07:30 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-6/2023](https://view.news.eu.nasdaq.com/view?id=b297fd4ab03daef223ea413c03b21db6c&lang=en&src=listed) | Open official announcement | 1.00% | 0.40% | 0.40% | 1.19% | 0.30% | No |
| 2023-05-24 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | 0.80% | -0.20% | 1.39% | -0.99% | 1.39% | Yes |
| 2023-05-16 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.05 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.05  | -0.99% | -0.40% | 0.80% | 0.00% | 2.24% | No |
| 2023-05-11 08:00 | Ex-dividend | — | [Dividend payment ex-date of AS Harju Elekter](https://view.news.eu.nasdaq.com/view?id=b3df289f433e301fecf444e9bba4caa69&lang=en&src=listed) | Open official announcement | 1.00% | -0.20% | -0.60% | 0.00% | 0.82% | No |
| 2023-04-26 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-3/2023](https://view.news.eu.nasdaq.com/view?id=b6dfcac1dcf1cc683434ff289ddcc7829&lang=en&src=listed) | Open official announcement | 0.60% | 0.00% | -0.40% | 2.40% | 0.07% | No |
| 2023-03-29 10:43 | Earnings | Loss | [Harju Elekter Group's audited Annual Report 2022](https://view.news.eu.nasdaq.com/view?id=bb2a0fe1affe265877851169e13b0686d&lang=en&src=listed) | Open official announcement | -0.20% | 0.00% | 0.20% | 0.20% | 0.47% | No |
| 2023-02-22 08:00 | Earnings | Higher profit | [Harju Elekter Group financial results, 1-12/2022](https://view.news.eu.nasdaq.com/view?id=bfd02efb5df051589dc2a76f464b5d956&lang=en&src=listed) | Open official announcement | -1.38% | 0.60% | 1.40% | 0.20% | 1.33% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (16 classified of 19 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 10 | 0.00% | 0.331 | 0.00% | 40% | 0.04% | 0.220 | 0.18% |
| Higher profit | 5d | 10 | -0.12% | 1.683 | -0.16% | 40% | -0.11% | 1.292 | 0.02% |
| Higher profit | 21d | 10 | 0.57% | 4.433 | 0.69% | 60% | 1.52% | 7.010 | 1.51% |
| Lower profit | 1d | 4 | -0.10% | 0.226 | 0.00% | 25% | -0.19% | 0.183 | -0.15% |
| Lower profit | 5d | 4 | -1.29% | 2.017 | -0.70% | 0% | -1.03% | 2.210 | -0.75% |
| Lower profit | 21d | 4 | -1.48% | 0.257 | -1.62% | 0% | -1.46% | 0.171 | -1.36% |
| In line / unchanged | 1d | 1 | 0.54% | — | 0.54% | 100% | 0.60% | — | 0.60% |
| In line / unchanged | 5d | 1 | 0.00% | — | 0.00% | 0% | 0.14% | — | 0.14% |
| In line / unchanged | 21d | 1 | -0.54% | — | -0.54% | 0% | 2.70% | — | 2.70% |
| Loss | 1d | 1 | 0.00% | — | 0.00% | 0% | -0.12% | — | -0.12% |
| Loss | 5d | 1 | 0.20% | — | 0.20% | 100% | 0.47% | — | 0.47% |
| Loss | 21d | 1 | 0.20% | — | 0.20% | 100% | 1.19% | — | 1.19% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 14 | 0.720 | 0.3961 | 0.7778 | No adjusted evidence |
| 5d | 2 | 14 | 0.500 | 0.4795 | 0.7778 | No adjusted evidence |
| 21d | 2 | 14 | 3.920 | 0.0477 | 0.4294 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![HAE1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/HAE1T_all_frontiers.png?v=1793191962)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![HAE1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/HAE1T_return_dividend.png?v=1793191936)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.271981 | -0.368207 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | -0.325956 | -1.552950 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.239053 | 0.165867 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -0.237818 | -0.595147 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 20534.529675 | 30141.812857 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.401353 | 0.349955 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 4087.149867 | 5421.849206 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | -0.034705 | -0.124603 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 13147.445000 | 18588.860000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | -0.043292 | -0.130998 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 2640.500000 | 3444.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | -0.355160 | -0.564139 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | -0.000175 | -0.000430 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | -0.000138 | -0.000494 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.223577 | -0.404035 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.091972 | 0.036085 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 0.949601 | 0.871080 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 250.333333 | 15.125000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | -0.077670 | -0.168524 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 68.000000 | 4.000000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.116189 | 0.061007 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 0.949601 | 0.871080 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | -0.372602 | -2.147247 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.055132 | 0.014910 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.591806 | -0.682609 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | 0.228568 | 16.302226 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.046118 | 1.099754 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | -0.214775 | -1.304418 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | -0.049106 | -0.099558 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | -0.000160 | -0.000376 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | -0.250707 | -0.698565 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.025425 | -0.132539 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | -0.015793 | -0.044005 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.184568 | 0.080818 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | -0.006789 | -0.021558 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | -0.181098 | -0.789778 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | -0.012103 | -0.034890 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 0.486899 | 0.251997 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | -0.022937 | -0.063819 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | -0.124027 | -0.067797 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.138266 | 0.176478 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.229840 | 1.693300 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | -0.127685 | -0.492720 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.018664 | -0.103920 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.004464 | -0.020539 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.433962 | 0.377358 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.138338 | 0.177669 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.827044 | 0.792453 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.220066 | 0.249389 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.006004 | 0.007748 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.013863 | 0.015710 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.008758 | 0.015739 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | -1.702774 | 0.988372 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.020284 | 0.022936 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | -0.006907 | 0.004203 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.788339 | 1.151040 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.491549 | 1.442815 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | -0.000176 | -0.000557 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.132816 | 0.084354 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.387936 | 0.447366 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | -0.017564 | -0.197846 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -1.235908 | -1.476437 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.369266 | 0.246575 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.071644 | -0.089246 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.174312 | 0.191781 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | -0.049106 | -0.099558 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.432159 | 0.431213 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | -0.014219 | -0.041069 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.006317 | 0.008091 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | -1.811075 | -3.916398 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.011379 | 0.014172 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 14.861502 | 8.837958 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.008720 | 0.011236 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | -0.043863 | -0.129639 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.138430 | 0.178369 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.230819 | -0.283717 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.141945</td><td>-0.005829</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161638</td><td>0.000145</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>HAE1T shares</td><td>100</td><td>169</td><td>+69</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9439.374796</td><td>361.559984</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.621849</td><td>0.008403</td></tr><tr><td>OUT</td><td>73</td><td>74</td><td>+1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.065688</td><td>0.005034</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.104961</td><td>-0.000865</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 100 HAE1T shares. The scenario adds 69 shares from Table 1.a, resulting in 169 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="HAE1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![HAE1T high-resolution stochastic dominance](figures/stock_profiles/HAE1T_FSD_SSD_TSD.png?v=1793190072)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-lhv1t" data-signal="WAIT" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>LHV1T — LHV Group</strong> | current action: WAIT | allocation target 112 shares | netSD diagnostic rank 13</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>112</td><td>+112</td><td>2.46%</td><td>EUR 3.2700</td><td>0.0840</td><td>34 / 24</td><td>46.13</td><td>Bullish</td><td>Inside bands</td><td>0.573 (Neutral)</td><td>EUR 0.1660 / share</td><td>HOLD</td><td>BUY</td><td>0.000603 (0.753% of portfolio HHI)</td><td>EUR 263,780</td><td>0.0%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![LHV1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/LHV1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 3.2700 | ≤ EUR 3.2468 | ≥ EUR 3.2947 | HOLD |
| RSI(14) | RSI = 46.13 | ≤ EUR 3.2032 | ≥ EUR 3.3886 | HOLD |
| Stochastic RSI %K | %K = 0.573 | ≤ EUR 3.2428 | ≥ EUR 3.2859 | HOLD |
| MACD crossover | MACD = -0.0073<br>Signal = -0.0095<br>Gap = +0.0022<br>Bullish crossover close ≈ EUR 3.2353 | — | — | BUY |
| Consensus | BUY 1/4; SELL 0/4; neutral 3/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![LHV1T complete technical history](figures/technical_analysis/LHV1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![LHV1T return histogram](figures/stock_profiles/LHV1T_histogram.png?v=1793184516)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -18.99% (2024-12-04) | Average gain / average loss | 1.296 | Best 21-day period | 18.54% (ending 2025-02-17) |
| Average underwater drawdown | 11.39% | Upside potential ratio | 1.418 | Worst 21-day period | -10.64% (ending 2025-03-18) |
| Conditional drawdown 95% | 17.75% | Upside capture vs Baltic EW | 65.1% | Best 5-day period | 10.50% (ending 2023-01-16) |
| Ulcer index | 11.89 | Downside capture vs Baltic EW | 67.0% | Best 63-day period | 16.42% (ending 2025-02-17) |
| Longest underwater period | 1355 calendar days | Positive trading days | 36.4% | Repeated calendar pattern | Dec: 100% positive across 3 years |
| Daily downside deviation | 0.537% | Best day | 4.62% (2025-11-27) |  |  |
| Daily upside deviation | 0.665% | Worst day | -3.86% (2023-03-13) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.110%); worst: Monday (-0.156%) | 0.0079 | 0.0903 | Not detected |
| Calendar month | Best: Jan (0.278% daily); worst: Apr (-0.132% daily) | 0.8585 | 0.9402 | Not detected |
| Turn of month | First/last three days: 0.028%; other days: -0.005% | 0.5727 | 0.8214 | Not detected |

![LHV1T seasonality, drawdowns and upside periods](figures/stock_profiles/LHV1T_seasonality.png?v=1792941279)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-06 | 2024-12-04 | Not recovered | -18.99% | 1355 |
| 2 | 2023-01-18 | 2023-01-19 | 2023-01-25 | -1.33% | 7 |
| 3 | 2023-01-16 | 2023-01-17 | 2023-01-18 | -0.80% | 2 |
| 4 | 2023-01-27 | 2023-01-30 | 2023-02-01 | -0.77% | 5 |
| 5 | 2023-02-02 | 2023-02-03 | 2023-02-06 | -0.76% | 4 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-01-17 | 2025-02-17 | 18.54% |
| 2 | 2023-01-04 | 2023-02-02 | 16.86% |
| 3 | 2025-11-26 | 2025-12-30 | 10.00% |
| 4 | 2025-04-28 | 2025-05-28 | 8.84% |
| 5 | 2023-12-04 | 2024-01-05 | 8.48% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (38 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.05% | -0.71% | -0.05% | 50% | 25% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Dividend payment | 4 | 0.60% | 0.58% | -0.06% | 75% | 25% | 0.6563 | 1.0000 | No adjusted statistical evidence |
| Earnings | 18 | 0.08% | -0.49% | -0.53% | 33% | 39% | 0.6563 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 7 | -1.00% | -2.51% | -1.66% | 0% | 43% | 0.0027 | 0.8647 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 5 | -0.32% | -0.99% | -1.26% | 40% | 20% | 0.9959 | 1.0000 | No adjusted statistical evidence |

![LHV1T official announcements and abnormal returns](figures/stock_profiles/LHV1T_company_events.png?v=1793169024)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (38 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-21 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q2 and 6 months of 2026](https://view.news.eu.nasdaq.com/view?id=b5f0850a5526b805746bd8b7edbdfe606&lang=en&src=listed) | Open official announcement | 0.15% | 0.15% | -0.15% | -0.30% | 0.20% | No |
| 2026-04-21 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q1 2026](https://view.news.eu.nasdaq.com/view?id=b0a6cc06f0c19abfeb82df9e95e9f5e47&lang=en&src=listed) | Open official announcement | -0.57% | -0.29% | -0.86% | -4.03% | -1.44% | No |
| 2026-04-15 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.17 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.17  | -2.37% | 0.14% | -0.57% | -4.29% | -0.49% | No |
| 2026-04-08 11:30 | Ex-dividend | — | [LHV Group Dividend Ex-date](https://view.news.eu.nasdaq.com/view?id=b2615213076cc5867bebf3c7f636bee5e&lang=en&src=listed) | Open official announcement | 1.12% | -3.19% | -2.91% | -6.10% | -3.83% | No |
| 2026-03-03 08:00 | Dividend announcement | — | [LHV Group 2025 Audited Annual Report and Dividend Proposal ](https://view.news.eu.nasdaq.com/view?id=b46fb951c491b1129ca89a245b7ed65cf&lang=en&src=listed) | Open official announcement | 1.41% | 0.83% | -0.97% | -1.25% | -0.83% | No |
| 2026-02-12 08:00 | Guidance | — | [LHV Group financial plan for 2026 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=b40694c02fa487537c9235734e3928bf8&lang=en&src=listed) | Open official announcement | -0.14% | 0.14% | -0.14% | 0.56% | -0.23% | No |
| 2026-02-10 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q4 and 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b0b40dcbae066e6f3b1484990c672e4a9&lang=en&src=listed) | Open official announcement | 0.84% | -0.55% | -1.39% | -0.42% | -1.97% | Yes |
| 2025-10-21 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q3 and nine months of 2025](https://view.news.eu.nasdaq.com/view?id=b3e66946e0035abf72541cd01019c8cc5&lang=en&src=listed) | Open official announcement | -1.62% | -0.75% | -0.45% | -2.25% | -0.56% | No |
| 2025-07-22 09:52 | Earnings | Higher profit | [Correction: LHV Group unaudited financial results for Q2 and 6 months of 2025](https://view.news.eu.nasdaq.com/view?id=b60ac050b3f4c327c2e31a8a2edc3a717&lang=en&src=listed) | Open official announcement | -0.55% | -0.28% | -0.97% | -1.11% | -1.13% | No |
| 2025-04-23 14:35 | Earnings | Higher profit | [Correction: LHV Group unaudited financial results for Q1 2025](https://view.news.eu.nasdaq.com/view?id=b7dc99cf1d3e90af6dd24c2052e32dcd6&lang=en&src=listed) | Open official announcement | -2.13% | 1.02% | 2.18% | 7.40% | 1.46% | Yes |
| 2025-04-22 08:00 | Earnings | Higher profit | [LHV Group unaudited financial results for Q1 2025](https://view.news.eu.nasdaq.com/view?id=b46ee475456697ea3278a9f32cfe4b011&lang=en&src=listed) | Open official announcement | -2.00% | 0.44% | 2.77% | 7.73% | 0.70% | No |
| 2025-04-10 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.09 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.09  | -7.96% | 3.08% | 2.64% | 7.33% | 0.65% | No |
| 2025-04-08 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.09 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.09  | -5.32% | 1.01% | 1.44% | 4.61% | -0.72% | Yes |
| 2025-04-04 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS LHV Group](https://view.news.eu.nasdaq.com/view?id=b5f41c38fb4bbeeac9818c08630c84a1b&lang=en&src=listed) | Open official announcement | -3.14% | -2.25% | -1.41% | 1.55% | -0.50% | No |
| 2025-03-04 08:00 | Dividend announcement | — | [LHV Group 2024 Audited Annual Report and Dividend Proposal](https://view.news.eu.nasdaq.com/view?id=b88fdcc164b794cbf946a7fdfb1ac5078&lang=en&src=listed) | Open official announcement | -2.38% | -0.54% | -1.90% | 0.41% | -3.43% | Yes |
| 2025-02-13 08:00 | Guidance | — | [LHV Group financial plan for 2025 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=b3020de946e7c20571035f57fe9517824&lang=en&src=listed) | Open official announcement | 8.62% | 0.00% | -3.77% | -7.54% | -3.71% | Yes |
| 2025-02-11 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q4 and 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=b86cf27b7b217aecfc80a7e97feeabd1f&lang=en&src=listed) | Open official announcement | 6.30% | 3.10% | 1.35% | -3.50% | 0.70% | Yes |
| 2024-10-22 08:00 | Earnings | Lower profit | [LHV Group's unaudited financial results for Q3 and nine months of 2024](https://view.news.eu.nasdaq.com/view?id=bfb9445de8172a293cea35905db3278f2&lang=en&src=listed) | Open official announcement | -1.86% | 1.46% | -0.73% | -3.94% | -1.00% | No |
| 2024-07-23 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q2 and 6 months of 2024](https://view.news.eu.nasdaq.com/view?id=b9dc72e51b275667d8a34e607e1f8d68a&lang=en&src=listed) | Open official announcement | 0.58% | 0.00% | 0.00% | -2.74% | 0.90% | No |
| 2024-04-23 08:00 | Earnings | Loss | [LHV Group unaudited financial results for Q1 2024](https://view.news.eu.nasdaq.com/view?id=b5fa1a20a54faf324f54dc2b35cd2fa05&lang=en&src=listed) | Open official announcement | 0.59% | 0.73% | 1.16% | 2.77% | 0.95% | No |
| 2024-04-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | -0.87% | 1.02% | 0.00% | 0.15% | 0.35% | No |
| 2024-04-04 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.13 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.13  | -0.70% | -2.41% | -3.12% | -1.84% | -4.22% | Yes |
| 2024-04-01 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS LHV Group](https://view.news.eu.nasdaq.com/view?id=b679f5847fe396e2277d3680c9c27386e&lang=en&src=listed) | Open official announcement | -0.28% | 0.14% | -3.39% | -1.84% | -3.66% | Yes |
| 2024-02-27 08:00 | Dividend announcement | — | [LHV Group 2023 Audited Annual Report and Dividend Proposal](https://view.news.eu.nasdaq.com/view?id=bc5dc5642a30d48f4898fef4d6db5e0b4&lang=en&src=listed) | Open official announcement | -1.27% | 0.14% | 0.71% | 0.86% | 0.57% | No |
| 2024-02-13 08:00 | Guidance | — | [LHV Group financial plan for 2024 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=bc7bc788974449c1c0191a4bcb45591dd&lang=en&src=listed) | Open official announcement | -1.26% | 0.00% | 0.28% | -1.41% | 0.94% | No |
| 2024-02-06 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q4 and 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=bf44c78fdbd7664bc7a100abc09745eba&lang=en&src=listed) | Open official announcement | 1.70% | 1.12% | -1.26% | -2.09% | -1.42% | Yes |
| 2023-10-24 08:33 | Earnings | Higher profit | [Correction: LHV Group's unaudited financial results for Q3 and nine months of 2023](https://view.news.eu.nasdaq.com/view?id=bed808684cabc3b622a6cbdf8806c39f4&lang=en&src=listed) | Open official announcement | 0.28% | -0.14% | -1.26% | -2.79% | -1.00% | No |
| 2023-09-08 17:00 | Earnings | Unclassified earnings release | [Correction: LHV Group's unaudited financial results for Q2 and 6 months of 2023](https://view.news.eu.nasdaq.com/view?id=bcd8068b847afd1d0b2b9d1f073f0fdbc&lang=en&src=listed) | Open official announcement | 3.53% | -0.55% | -2.86% | -1.91% | -1.95% | Yes |
| 2023-07-18 08:00 | Earnings | Higher profit | [LHV Group's unaudited financial results for Q2 and 6 months of 2023](https://view.news.eu.nasdaq.com/view?id=b607582df86739b1887d7099af170f24f&lang=en&src=listed) | Open official announcement | 0.83% | 1.37% | -0.55% | -0.69% | -0.41% | No |
| 2023-05-10 09:06 | Guidance | — | [Moody's raised outlook on LHV Pank's deposit ratings to positive](https://view.news.eu.nasdaq.com/view?id=b21ba41e2222ad99f80e3b92a92c1bdfe&lang=en&src=listed) | Open official announcement | -0.56% | -1.27% | -0.99% | 0.71% | 1.06% | No |
| 2023-04-18 08:00 | Earnings | Loss | [LHV Group unaudited financial results for Q1 2023](https://view.news.eu.nasdaq.com/view?id=bf46888a05c7be60a5152f4bc8d5c0469&lang=en&src=listed) | Open official announcement | 1.69% | -1.94% | -1.67% | -3.19% | -1.20% | Yes |
| 2023-04-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.04 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.04  | -2.07% | -0.99% | 1.69% | -1.13% | 1.80% | Yes |
| 2023-04-04 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.04 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.04  | -0.83% | -0.42% | -2.50% | 0.00% | -2.51% | No |
| 2023-03-31 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS LHV Group](https://view.news.eu.nasdaq.com/view?id=b4ab33a87c2406975bf6ee16bc4c16c40&lang=en&src=listed) | Open official announcement | -0.14% | -0.55% | -2.07% | -0.41% | -2.13% | No |
| 2023-03-22 16:40 | Earnings | Unclassified earnings release | [Changes in the Audit Commitee of LHV Group](https://view.news.eu.nasdaq.com/view?id=bf433722ee2a5c6e7702c251750cb8d24&lang=en&src=listed) | Open official announcement | -0.55% | 0.14% | -0.69% | -3.58% | -0.18% | No |
| 2023-02-28 08:00 | Dividend announcement | — | [LHV Group 2022 Audited Annual Report and Dividend Proposal](https://view.news.eu.nasdaq.com/view?id=be04b258ce01c78073610040e2cb1cce0&lang=en&src=listed) | Open official announcement | 0.54% | 1.61% | 1.07% | -3.22% | 0.86% | No |
| 2023-02-14 08:00 | Guidance | — | [LHV Group financial plan for 2023 and the five-year financial forecast](https://view.news.eu.nasdaq.com/view?id=bd3a56486ffc1e659e535c522e975b343&lang=en&src=listed) | Open official announcement | -1.03% | -1.82% | -3.39% | -4.82% | -3.03% | No |
| 2023-02-07 08:00 | Earnings | Higher profit | [Unaudited financial results of LHV Group for Q4 and 12 months of 2022](https://view.news.eu.nasdaq.com/view?id=b1076cc589f2e71bb856ba3b75e6e2d3b&lang=en&src=listed) | Open official announcement | -0.13% | -1.55% | -1.03% | -2.71% | -1.43% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (16 classified of 18 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 13 | 0.28% | 1.368 | 0.00% | 46% | 0.14% | 1.493 | -0.16% |
| Higher profit | 5d | 13 | -0.12% | 1.865 | -0.55% | 23% | -0.40% | 1.193 | -0.57% |
| Higher profit | 21d | 13 | -0.58% | 14.391 | -2.09% | 15% | -0.74% | 6.285 | -1.21% |
| Lower profit | 1d | 1 | 1.46% | — | 1.46% | 100% | 1.24% | — | 1.24% |
| Lower profit | 5d | 1 | -0.73% | — | -0.73% | 0% | -1.00% | — | -1.00% |
| Lower profit | 21d | 1 | -3.94% | — | -3.94% | 0% | -1.06% | — | -1.06% |
| Loss | 1d | 2 | -0.61% | 3.570 | -0.61% | 50% | -0.62% | 4.091 | -0.62% |
| Loss | 5d | 2 | -0.25% | 4.008 | -0.25% | 50% | -0.12% | 2.305 | -0.12% |
| Loss | 21d | 2 | -0.21% | 17.761 | -0.21% | 50% | 1.44% | 7.902 | 1.44% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 15 | 0.462 | 0.4969 | 0.7778 | No adjusted evidence |
| 5d | 2 | 15 | 0.260 | 0.6104 | 0.8451 | No adjusted evidence |
| 21d | 2 | 15 | 1.038 | 0.3082 | 0.7778 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![LHV1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/LHV1T_all_frontiers.png?v=1793191963)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![LHV1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/LHV1T_return_dividend.png?v=1793191945)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.324881 | -0.422263 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | -0.405908 | -2.686088 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.349789 | 0.117257 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -0.555508 | 1.086084 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 284663.738163 | 339178.936111 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.023915 | 0.011774 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 80890.184350 | 97858.277778 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | -0.091539 | -0.199327 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 210132.165000 | 284108.695000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | -0.096192 | -0.185054 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 61267.500000 | 81664.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | -0.680939 | -1.761386 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | -0.000460 | -0.001195 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | -0.000363 | -0.000791 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.276915 | -0.342094 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.076302 | 0.042487 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 0.881651 | 0.661568 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 149.600000 | 30.750000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | -0.129344 | -0.208732 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 2.600000 | 3.500000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.220790 | 0.056524 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 0.881651 | 0.661568 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | -0.435671 | -3.273918 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.112085 | -0.007197 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.725335 | -0.759419 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -3.809032 | 3.389318 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.213450 | 0.865973 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | -0.440237 | -2.732228 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | -0.094424 | -0.179886 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | -0.000356 | -0.000772 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | -0.659661 | -1.942942 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | -0.007729 | -0.021788 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | -0.041555 | -0.122394 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.198448 | 0.089777 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | -0.019432 | -0.049611 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | -0.275000 | -1.578188 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | -0.028721 | -0.078132 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 0.750477 | 0.145101 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000001 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | -0.062734 | -0.161802 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | -0.261114 | -0.097256 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.138668 | 0.102127 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.625303 | 2.247960 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | -0.213860 | -0.851773 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | -0.001701 | 0.060840 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | -0.001357 | -0.003376 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.487421 | 0.528302 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.138674 | 0.102183 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.792453 | 0.867925 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.224871 | 0.188640 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.005790 | 0.004889 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.014166 | 0.011883 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.012755 | 0.011042 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 12.444834 | 8.493247 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.018694 | 0.015944 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.051913 | 0.037254 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.790256 | 0.662030 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 0.987769 | 0.697969 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | -0.000401 | -0.000812 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.236980 | 0.068893 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.340257 | 0.477128 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | -0.086739 | -0.136787 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -1.444745 | -2.238463 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.334862 | 0.287671 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.086043 | -0.139419 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.146789 | 0.068493 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | -0.094424 | -0.179886 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.467346 | 0.316292 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | -0.043720 | -0.103826 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.006551 | 0.004262 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | -4.753757 | -18.938808 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.012648 | 0.010124 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 7.157400 | 12.612668 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.008741 | 0.006463 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | -0.097968 | -0.188954 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.138766 | 0.102591 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.285192 | -0.417661 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148276</td><td>0.000503</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.162228</td><td>0.000736</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>LHV1T shares</td><td>0</td><td>112</td><td>+112</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9444.054810</td><td>366.239998</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.056279</td><td>-0.004375</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.104200</td><td>-0.001626</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 LHV1T shares. The scenario adds 112 shares from Table 1.a, resulting in 112 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="LHV1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![LHV1T high-resolution stochastic dominance](figures/stock_profiles/LHV1T_FSD_SSD_TSD.png?v=1793190078)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tve1t" data-signal="WAIT" data-netsd-effect="INCREASE" data-dividend-status="PAID">
<summary><strong>TVE1T — Tallinna Vesi</strong> | current action: WAIT | allocation target 34 shares | netSD diagnostic rank 14</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>34</td><td>+34</td><td>2.50%</td><td>EUR 10.8500</td><td>0.0756</td><td>33 / 24</td><td>46.86</td><td>Bullish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>EUR 0.5180 / share</td><td>HOLD</td><td>BUY</td><td>0.000625 (0.780% of portfolio HHI)</td><td>EUR 14,525</td><td>0.8%</td><td>1.2%</td><td>MEDIUM</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![TVE1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TVE1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 10.8500 | ≤ EUR 10.8103 | ≥ EUR 10.9247 | HOLD |
| RSI(14) | RSI = 46.86 | ≤ EUR 10.5933 | ≥ EUR 11.1356 | HOLD |
| Stochastic RSI %K | %K = 0.000 | ≤ EUR 10.8624 | ≥ EUR 10.8924 | BUY |
| MACD crossover | MACD = -0.0012<br>Signal = -0.0038<br>Gap = +0.0026<br>Bullish crossover close ≈ EUR 10.8094 | — | — | BUY |
| Consensus | BUY 2/4; SELL 0/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![TVE1T complete technical history](figures/technical_analysis/TVE1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TVE1T return histogram](figures/stock_profiles/TVE1T_histogram.png?v=1793184486)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -24.32% (2024-09-05) | Average gain / average loss | 0.911 | Best 21-day period | 12.02% (ending 2025-05-20) |
| Average underwater drawdown | 17.51% | Upside potential ratio | 1.308 | Worst 21-day period | -8.97% (ending 2025-07-03) |
| Conditional drawdown 95% | 23.78% | Upside capture vs Baltic EW | 25.4% | Best 5-day period | 7.37% (ending 2025-05-20) |
| Ulcer index | 18.21 | Downside capture vs Baltic EW | 36.8% | Best 63-day period | 13.11% (ending 2025-06-06) |
| Longest underwater period | 1366 calendar days | Positive trading days | 29.3% | Repeated calendar pattern | Apr: 100% positive across 4 years |
| Daily downside deviation | 0.491% | Best day | 2.75% (2025-05-16) |  |  |
| Daily upside deviation | 0.411% | Worst day | -4.74% (2026-05-11) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.079%); worst: Monday (-0.114%) | 0.0908 | 0.1900 | Not detected |
| Calendar month | Best: Apr (0.138% daily); worst: Jun (-0.135% daily) | 0.5047 | 0.6449 | Not detected |
| Turn of month | First/last three days: 0.079%; other days: -0.035% | 0.0239 | 0.1549 | Not detected |

![TVE1T seasonality, drawdowns and upside periods](figures/stock_profiles/TVE1T_seasonality.png?v=1792941276)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-01-26 | 2024-09-05 | Not recovered | -24.32% | 1366 |
| 2 | 2023-01-04 | 2023-01-05 | 2023-01-06 | -0.31% | 2 |
| 3 | 2023-01-16 | 2023-01-17 | 2023-01-18 | -0.31% | 2 |
| 4 | 2023-01-20 | 2023-01-23 | 2023-01-24 | -0.30% | 4 |
| 5 | 2023-01-10 | 2023-01-11 | 2023-01-16 | -0.16% | 6 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-04-17 | 2025-05-21 | 12.02% |
| 2 | 2025-12-04 | 2026-01-09 | 6.60% |
| 3 | 2026-05-25 | 2026-06-23 | 5.53% |
| 4 | 2025-01-13 | 2025-02-11 | 4.90% |
| 5 | 2024-04-10 | 2024-05-13 | 4.81% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (33 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.08% | 0.69% | 3.89% | 50% | 25% | 0.9959 | 0.0080 | Different from ordinary periods |
| Dividend payment | 4 | 0.36% | 0.04% | 1.37% | 25% | 0% | 1.0000 | 0.5183 | No adjusted statistical evidence |
| Earnings | 17 | -0.17% | -0.33% | -0.43% | 47% | 29% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -1.95% | -4.08% | -4.29% | 0% | 75% | 0.0000 | 0.0005 | Different from ordinary periods; price drop may be mechanical |

![TVE1T official announcements and abnormal returns](figures/stock_profiles/TVE1T_company_events.png?v=1793169059)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (33 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-07-31 09:00 | Earnings | Loss | [Tallinna Vesi's second-quarter sales reached €18.6 million](https://view.news.eu.nasdaq.com/view?id=bc718794d6dbe84ad45a934e5ad7bc4ba&lang=en&src=listed) | SALES; €18.6 million | -1.35% | 0.00% | 0.91% | -1.82% | 0.74% | No |
| 2026-05-20 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.57 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.57  | -0.90% | 0.00% | -0.46% | 2.74% | -0.80% | No |
| 2026-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.57 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.57  | -0.43% | -4.74% | -5.17% | -5.60% | -4.59% | Yes |
| 2026-05-08 09:00 | Earnings | Higher profit | [Tallinna Vesi´s first-quarter sales amounted to €17.99 million](https://view.news.eu.nasdaq.com/view?id=b5e239c2d9b9577ef3a1627e017541a66&lang=en&src=listed) | SALES; €17.99 million | -0.43% | -4.74% | -5.17% | -5.60% | -4.59% | Yes |
| 2026-05-07 12:15 | Ex-dividend | — | [Dividend payment ex-date of Aktsiaselts Tallinna Vesi](https://view.news.eu.nasdaq.com/view?id=b0780cf2ffcb34c7de1e7bfae7e21504d&lang=en&src=listed) | Open official announcement | 0.43% | -0.43% | -5.58% | -6.01% | -4.52% | Yes |
| 2026-03-27 13:30 | Dividend announcement | — | [Tallinna Vesi's Supervisory Council approved the annual report for 2025 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=bfc9341638b9f7cc55cc5a86a4fefb055&lang=en&src=listed) | Open official announcement | -0.44% | 0.00% | 0.45% | 3.57% | 0.52% | No |
| 2026-02-06 09:10 | Earnings | Higher profit | [Tallinna Vesi's fourth-quarter sales reached €18.9 million](https://view.news.eu.nasdaq.com/view?id=b08111d407a50a53faff55a084269d13a&lang=en&src=listed) | SALES; €18.9 million | 0.45% | -0.44% | 0.00% | 0.00% | -0.86% | No |
| 2025-10-31 09:00 | Earnings | Higher profit | [Tallinna Vesi's third-quarter sales reached €18.2 million](https://view.news.eu.nasdaq.com/view?id=be32bf71985847591ba9e707f46784889&lang=en&src=listed) | SALES; €18.2 million | 0.00% | 0.47% | 0.00% | 0.00% | 0.33% | No |
| 2025-08-01 09:00 | Earnings | Higher profit | [Tallinna Vesi's second-quarter sales reached €19.4 million](https://view.news.eu.nasdaq.com/view?id=b75ece621daf51fb38a0cb906ad258065&lang=en&src=listed) | SALES; €19.4 million | 0.00% | 0.00% | 0.47% | 0.47% | 0.41% | No |
| 2025-06-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.53 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.53  | -4.50% | 1.42% | 1.42% | 0.94% | 1.61% | No |
| 2025-06-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.53 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.53  | 0.87% | -4.72% | -8.58% | -8.15% | -8.18% | Yes |
| 2025-06-04 14:00 | Ex-dividend | — | [Dividend payment ex-date of AS Tallinna Vesi](https://view.news.eu.nasdaq.com/view?id=b7fc145c26f5c31a1fd315f8179cd3887&lang=en&src=listed) | Open official announcement | 0.87% | -0.43% | -5.58% | -8.15% | -5.11% | Yes |
| 2025-05-02 15:42 | Earnings | Unclassified earnings release | [Further information in regards to AS Tallinna Vesi annual ESEF report for 2024](https://view.news.eu.nasdaq.com/view?id=b5222747ae060ab769a2213e5d9745ae4&lang=en&src=listed) | Open official announcement | 0.94% | 0.47% | 1.40% | 8.84% | 0.54% | No |
| 2025-04-30 16:55 | Dividend announcement | — | [Correction: Tallinna Vesi's Supervisory Council approved the annual report for 2024 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=b31c835e1636984d01047694381fd282b&lang=en&src=listed) | Open official announcement | 1.41% | -0.46% | 0.46% | 7.87% | -1.03% | No |
| 2025-04-25 11:04 | Dividend announcement | — | [Tallinna Vesi's Supervisory Council approved the annual report for 2024 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=b981566d8e73d5c882f2602ab485f0548&lang=en&src=listed) | Open official announcement | 2.88% | 0.47% | 0.93% | 7.94% | -0.28% | No |
| 2025-04-25 09:00 | Earnings | Lower profit | [Tallinna Vesi's first-quarter sales were €16 million](https://view.news.eu.nasdaq.com/view?id=bd6250bf0f2e06780e1c2e808e8cdd963&lang=en&src=listed) | SALES; €16 million | 2.88% | 0.47% | 0.93% | 7.94% | -0.28% | No |
| 2025-02-07 09:00 | Earnings | Higher profit | [Tallinna Vesi's fourth-quarter sales were €17.67 million](https://view.news.eu.nasdaq.com/view?id=b92fd07da7fc71a11f595ec97f72df1b4&lang=en&src=listed) | SALES; €17.67 million | 2.94% | 1.90% | 0.95% | -1.90% | -0.36% | No |
| 2024-11-01 09:00 | Earnings | Higher profit | [Tallinna Vesi's third-quarter sales were €16.22 million](https://view.news.eu.nasdaq.com/view?id=bc7a73cb35c611a9546d9088808ab45ed&lang=en&src=listed) | SALES; €16.22 million | 2.94% | -2.38% | -2.86% | -4.29% | -3.09% | Yes |
| 2024-08-02 09:00 | Earnings | Higher profit | [Tallinna Vesi's second-quarter sales were €15.5 million](https://view.news.eu.nasdaq.com/view?id=b2f76a4a9380a8badb0fe2de833abe7dd&lang=en&src=listed) | SALES; €15.5 million | 0.00% | -0.97% | -0.97% | -1.46% | -0.02% | No |
| 2024-06-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.51 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.51  | -0.49% | 0.00% | 0.00% | 0.49% | -0.15% | No |
| 2024-06-18 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.51 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.51  | 0.00% | -4.19% | -3.72% | -4.19% | -2.99% | No |
| 2024-06-14 10:01 | Ex-dividend | — | [Dividend payment ex-date of Aktsiaselts Tallinna Vesi](https://view.news.eu.nasdaq.com/view?id=bae14d7c7cdb5a8978d02d25ee7dfd977&lang=en&src=listed) | Open official announcement | 0.47% | -0.46% | -3.70% | -5.09% | -3.46% | Yes |
| 2024-05-03 09:00 | Earnings | Lower profit | [Tallinna Vesi's first-quarter sales revenue increased to €14.94 million](https://view.news.eu.nasdaq.com/view?id=bfa405fa729045e132a6c7dc0f05d0d05&lang=en&src=listed) | REVENUE; SALES; €14.94 million | 1.90% | 0.47% | 1.87% | 0.93% | 2.24% | No |
| 2024-04-05 09:00 | Dividend announcement | — | [Tallinna Vesi´s Supervisory Council approved the financial results for 2023 and the dividend proposal](https://view.news.eu.nasdaq.com/view?id=b1935169a25aaf1c99b9110b9d20cc347&lang=en&src=listed) | Open official announcement | 0.49% | 0.00% | 3.38% | 4.35% | 3.57% | Yes |
| 2024-02-02 09:15 | Earnings | Higher profit | [Tallinna Vesi's fourth quarter sales were €15.52 million](https://view.news.eu.nasdaq.com/view?id=b730f735504dc543c9805e75bb255071b&lang=en&src=listed) | SALES; €15.52 million | 0.00% | 1.42% | 0.94% | -0.94% | 0.76% | No |
| 2023-10-27 09:00 | Earnings | Higher profit | [Tallinna Vesi's sales revenue in the third quarter increased to €15.61 million](https://view.news.eu.nasdaq.com/view?id=bdbf18b3a7d2ba1d2185743ad1d0ba86e&lang=en&src=listed) | REVENUE; SALES; €15.61 million | -0.92% | 0.00% | 1.40% | 0.00% | 1.31% | Yes |
| 2023-07-28 09:00 | Earnings | Higher profit | [Tallinna Vesi increased its sales and profit in the second quarter](https://view.news.eu.nasdaq.com/view?id=b3dd463347c1d508bc837ae93b8ca9d47&lang=en&src=listed) | PROFIT; SALES | 0.85% | 0.00% | -1.27% | -7.17% | -1.52% | Yes |
| 2023-06-28 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.33 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.33  | -0.84% | 0.43% | 0.00% | 0.43% | -0.51% | No |
| 2023-06-19 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.33 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.33  | -0.82% | -1.66% | -1.24% | -2.90% | -1.24% | No |
| 2023-05-09 09:00 | Ex-dividend | — | [AS Tallinna Vesi 2022 dividend proposal and ex-dividend date](https://view.news.eu.nasdaq.com/view?id=b5611582620eb90215900f79568a20b26&lang=en&src=listed) | Open official announcement | -1.92% | 0.00% | -3.53% | -5.10% | -2.53% | Yes |
| 2023-04-28 09:00 | Earnings | Higher profit | [AS Tallinna Vesi's financial results for the first quarter of 2023](https://view.news.eu.nasdaq.com/view?id=b842f4f8564d4e8f07aed813461ad5344&lang=en&src=listed) | Open official announcement | -0.39% | 0.78% | 1.16% | -7.36% | 1.30% | Yes |
| 2023-03-31 17:18 | Earnings | Lower profit | [Correction: AS Tallinna Vesi Supervisory Council confirmed financial results for 2022](https://view.news.eu.nasdaq.com/view?id=b97b5b525072f6ce9d1beaa8850980816&lang=en&src=listed) | Open official announcement | -0.16% | -0.32% | -1.50% | 4.43% | -1.56% | No |
| 2023-01-27 09:11 | Earnings | Lower profit | [AS Tallinna Vesi's financial results for the 4th quarter of 2022](https://view.news.eu.nasdaq.com/view?id=bbb29c002ab1ef75bbcdd0a8f13bd142c&lang=en&src=listed) | Open official announcement | -1.07% | -0.46% | -0.46% | -2.00% | -1.02% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (16 classified of 17 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 11 | -0.36% | 3.431 | 0.00% | 36% | -0.21% | 3.644 | 0.01% |
| Higher profit | 5d | 11 | -0.49% | 4.019 | 0.00% | 45% | -0.58% | 3.463 | -0.02% |
| Higher profit | 21d | 11 | -2.57% | 8.971 | -1.46% | 9% | -1.87% | 8.475 | -1.05% |
| Lower profit | 1d | 4 | 0.04% | 0.248 | 0.08% | 50% | -0.04% | 0.320 | -0.15% |
| Lower profit | 5d | 4 | 0.21% | 2.221 | 0.24% | 50% | -0.15% | 2.821 | -0.64% |
| Lower profit | 21d | 4 | 2.83% | 18.545 | 2.68% | 75% | 2.30% | 14.606 | 3.39% |
| Loss | 1d | 1 | 0.00% | — | 0.00% | 0% | -0.12% | — | -0.12% |
| Loss | 5d | 1 | 0.91% | — | 0.91% | 100% | 0.74% | — | 0.74% |
| Loss | 21d | 1 | -1.82% | — | -1.82% | 0% | -2.34% | — | -2.34% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 15 | 0.153 | 0.6953 | 0.9048 | No adjusted evidence |
| 5d | 2 | 15 | 0.017 | 0.8961 | 0.9707 | No adjusted evidence |
| 21d | 2 | 15 | 3.341 | 0.0676 | 0.4866 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TVE1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TVE1T_all_frontiers.png?v=1793191965)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![TVE1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/TVE1T_return_dividend.png?v=1793191948)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.308047 | -0.273310 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | -0.314921 | -1.222436 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.302691 | 0.060374 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -0.699358 | -0.360980 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 20255.717029 | 22737.507540 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.278815 | 0.236182 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 1836.667109 | 2034.587302 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | -0.077203 | -0.032125 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 14368.800000 | 14525.275000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | -0.079358 | -0.036101 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 1311.000000 | 1294.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | -0.813669 | -0.460604 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | -0.000516 | -0.000206 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | -0.000306 | -0.000127 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.215156 | -0.183007 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.078381 | 0.014154 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 0.855476 | 0.922740 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 187.000000 | 12.875000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | -0.109377 | -0.060950 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 90.500000 | 3.625000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.234546 | 0.022027 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 0.855476 | 0.922740 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | -0.338347 | -1.638933 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.022684 | 0.027804 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.563810 | -0.426856 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -0.004337 | 10.860796 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 0.753796 | 0.682020 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | -0.411499 | -0.615415 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | -0.084720 | -0.043966 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | -0.000327 | -0.000157 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | -0.740403 | -0.334733 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.023446 | 0.033158 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | -0.046641 | -0.021086 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.198374 | 0.028295 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | -0.017279 | -0.008469 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | -0.262175 | -0.597948 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | -0.032060 | -0.014547 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | -1.494451 | -3.763012 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | -0.058431 | -0.024847 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | -0.219168 | -0.018216 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.104121 | 0.095452 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.179763 | 0.924357 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | -0.197069 | -0.225102 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.053627 | 0.030363 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.004117 | 0.005138 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.320755 | 0.283019 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.104202 | 0.095591 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.823899 | 0.811321 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.200651 | 0.177853 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.005243 | 0.005130 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.012640 | 0.011204 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.011026 | 0.005765 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | -3.384735 | -1.088756 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.017730 | 0.015053 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | -0.013992 | -0.004400 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.593810 | 0.619314 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.168089 | 1.820953 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | -0.000328 | -0.000146 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.251993 | 0.029532 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.365937 | 0.477712 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | -0.029464 | -0.005777 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -1.535239 | -1.536717 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.288991 | 0.287671 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.090638 | -0.088447 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.126147 | 0.095890 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | -0.084720 | -0.043966 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.345872 | 0.296760 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | -0.035286 | -0.013143 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.003961 | 0.003155 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | -7.100757 | -3.487848 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.009556 | 0.008763 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 13.500701 | 31.171590 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.006568 | 0.006046 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | -0.081519 | -0.036604 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.104271 | 0.095971 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.294893 | -0.238844 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.796610</td><td>-0.016949</td></tr><tr><td>OUT</td><td>96</td><td>94</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.140537</td><td>-0.007236</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.163699</td><td>0.002207</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TVE1T shares</td><td>0</td><td>34</td><td>+34</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9446.714825</td><td>368.900013</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.621849</td><td>0.008403</td></tr><tr><td>OUT</td><td>73</td><td>74</td><td>+1</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.065655</td><td>0.005001</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.103752</td><td>-0.002073</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 TVE1T shares. The scenario adds 34 shares from Table 1.a, resulting in 34 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="TVE1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TVE1T high-resolution stochastic dominance](figures/stock_profiles/TVE1T_FSD_SSD_TSD.png?v=1793190103)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-cpa1t" data-signal="WAIT" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>CPA1T — Coop Pank</strong> | current action: WAIT | allocation target 116 shares | netSD diagnostic rank 15</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>116</td><td>+116</td><td>1.82%</td><td>EUR 2.3500</td><td>0.0672</td><td>32 / 24</td><td>50.15</td><td>Bullish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>EUR 0.0594 / share</td><td>HOLD</td><td>BUY</td><td>0.000332 (0.414% of portfolio HHI)</td><td>EUR 81,735</td><td>0.1%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Allocation target is higher, but technical timing does not support buying now.

![CPA1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/CPA1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 2.3500 | ≤ EUR 2.3081 | ≥ EUR 2.3899 | HOLD |
| RSI(14) | RSI = 50.15 | ≤ EUR 2.2370 | ≥ EUR 2.4613 | HOLD |
| Stochastic RSI %K | %K = 0.000 | ≤ EUR 2.3631 | ≥ EUR 2.4185 | BUY |
| MACD crossover | MACD = 0.0083<br>Signal = 0.0075<br>Gap = +0.0008<br>Bullish crossover close ≈ EUR 2.3381 | — | — | BUY |
| Consensus | BUY 2/4; SELL 0/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![CPA1T complete technical history](figures/technical_analysis/CPA1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![CPA1T return histogram](figures/stock_profiles/CPA1T_histogram.png?v=1793184518)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -37.66% (2025-10-27) | Average gain / average loss | 1.205 | Best 21-day period | 23.44% (ending 2023-02-02) |
| Average underwater drawdown | 25.39% | Upside potential ratio | 1.354 | Worst 21-day period | -12.48% (ending 2023-05-25) |
| Conditional drawdown 95% | 37.17% | Upside capture vs Baltic EW | 79.8% | Best 5-day period | 8.80% (ending 2023-01-16) |
| Ulcer index | 26.73 | Downside capture vs Baltic EW | 82.5% | Best 63-day period | 21.09% (ending 2026-02-20) |
| Longest underwater period | 1359 calendar days | Positive trading days | 38.0% | Repeated calendar pattern | Jan: 100% positive across 4 years |
| Daily downside deviation | 0.617% | Best day | 4.84% (2026-01-22) |  |  |
| Daily upside deviation | 0.705% | Worst day | -3.82% (2023-03-13) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.169%); worst: Monday (-0.177%) | 0.0032 | 0.0728 | Not detected |
| Calendar month | Best: Jan (0.349% daily); worst: May (-0.192% daily) | 0.1371 | 0.3503 | Not detected |
| Turn of month | First/last three days: 0.026%; other days: -0.005% | 0.5610 | 0.8214 | Not detected |

![CPA1T seasonality, drawdowns and upside periods](figures/stock_profiles/CPA1T_seasonality.png?v=1792941286)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-02 | 2025-10-27 | Not recovered | -37.66% | 1359 |
| 2 | 2023-01-16 | 2023-01-24 | 2023-01-26 | -1.82% | 10 |
| 3 | 2023-01-03 | 2023-01-06 | 2023-01-09 | -1.52% | 6 |
| 4 | 2023-01-30 | 2023-01-31 | 2023-02-01 | -0.68% | 2 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2023-01-04 | 2023-02-02 | 23.44% |
| 2 | 2025-01-14 | 2025-02-12 | 17.48% |
| 3 | 2025-11-27 | 2026-01-02 | 12.12% |
| 4 | 2024-09-26 | 2024-10-25 | 11.86% |
| 5 | 2026-01-21 | 2026-02-19 | 9.93% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (41 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend payment | 4 | -0.62% | -0.37% | -2.77% | 0% | 0% | 1.0000 | 0.5177 | No adjusted statistical evidence |
| Earnings | 23 | -0.03% | -0.81% | -1.10% | 30% | 48% | 0.3324 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 8 | -0.84% | -3.91% | -5.88% | 0% | 50% | 0.0000 | 0.0005 | Different from ordinary periods; price drop may be mechanical |
| Guidance | 6 | -0.07% | 0.01% | -1.05% | 67% | 50% | 1.0000 | 0.7631 | No adjusted statistical evidence |

![CPA1T official announcements and abnormal returns](figures/stock_profiles/CPA1T_company_events.png?v=1793169004)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (41 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-09-10 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results for August 2026](https://view.news.eu.nasdaq.com/view?id=bcaab71b41648bc75d5453ed61d270d50&lang=en&src=listed) | Open official announcement | 1.50% | 0.42% | -0.42% | -0.63% | -0.81% | No |
| 2026-08-12 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results in July 2026](https://view.news.eu.nasdaq.com/view?id=b7ad600adc64dbaa93b25ce50856ce008&lang=en&src=listed) | Open official announcement | 0.87% | 0.86% | -0.22% | 1.72% | -0.30% | No |
| 2026-07-21 08:00 | Earnings | Higher profit | [Coop Pank AS unaudited financial results for Q2 2026](https://view.news.eu.nasdaq.com/view?id=bb85eab45575f1e03da45e8e198bd85d9&lang=en&src=listed) | Open official announcement | 0.22% | 0.43% | -0.65% | 0.87% | -0.30% | No |
| 2026-06-10 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results for May 2026](https://view.news.eu.nasdaq.com/view?id=b5ff7e4e0a4adbd32b2798024fda63a43&lang=en&src=listed) | Open official announcement | -0.88% | -0.22% | 0.44% | 2.44% | 1.31% | No |
| 2026-05-13 08:00 | Earnings | Higher profit | [Coop Pank AS consolidated results for April 2026](https://view.news.eu.nasdaq.com/view?id=b5c9a93ba80cca2ebe3d731aa0f86f2f3&lang=en&src=listed) | Open official announcement | 0.65% | -0.43% | -1.07% | -2.36% | -0.50% | Yes |
| 2026-05-12 22:30 | Guidance | — | [Moody's upgraded Coop Pank's long-term deposit rating to Baa1 and changed the outlook to stable](https://view.news.eu.nasdaq.com/view?id=b9a655283761156c2d85b8a4d33df76d4&lang=en&src=listed) | Open official announcement | 0.00% | 1.08% | 0.00% | -2.60% | 0.67% | No |
| 2026-04-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.065 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.065  | -2.92% | -0.65% | -0.86% | -1.08% | -0.61% | No |
| 2026-04-22 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2026](https://view.news.eu.nasdaq.com/view?id=b0563883e9925312e6610957485b88f46&lang=en&src=listed) | Open official announcement | -5.26% | -1.28% | -1.50% | -0.85% | -1.34% | Yes |
| 2026-04-21 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.065 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.065  | 2.33% | -1.65% | -4.55% | -4.55% | -4.77% | Yes |
| 2026-04-17 08:00 | Ex-dividend | — | [Dividend Payments ex-date of Coop Pank AS ](https://view.news.eu.nasdaq.com/view?id=b12312b13db6d5ac54ee1951367a6cc8f&lang=en&src=listed) | Open official announcement | 1.27% | 1.04% | -2.92% | -3.55% | -3.50% | Yes |
| 2026-03-11 14:00 | Earnings | Higher profit | [Coop Pank 2025 audited Annual Report](https://view.news.eu.nasdaq.com/view?id=b471d9d4a56852a40d28dd62d0b28292e&lang=en&src=listed) | Open official announcement | 0.22% | -0.22% | 1.57% | 5.82% | 1.44% | No |
| 2026-02-12 08:00 | Earnings | Lower profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2025](https://view.news.eu.nasdaq.com/view?id=b98c897d9b507b2bc2c8e12e70024935d&lang=en&src=listed) | Open official announcement | 3.51% | 0.68% | 2.71% | 1.81% | 2.62% | No |
| 2025-11-27 08:00 | Guidance | — | [Moody's affirms Coop Pank's ratings and positive outlook](https://view.news.eu.nasdaq.com/view?id=b6eef44f3f269f47f17446704c328a3df&lang=en&src=listed) | Open official announcement | 0.00% | -0.31% | 1.56% | 12.12% | 1.30% | Yes |
| 2025-10-22 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q3 2025](https://view.news.eu.nasdaq.com/view?id=b717ff075ed5449408bd2c48bce9c4d22&lang=en&src=listed) | Open official announcement | -0.31% | 0.00% | -0.21% | 0.31% | -0.09% | No |
| 2025-07-18 08:00 | Earnings | Unclassified earnings release | [Coop Pank unaudited financial results for Q2 2025](https://view.news.eu.nasdaq.com/view?id=b89fc07d4c5dcbcf33f84fb2f33d33916&lang=en&src=listed) | Open official announcement | 0.00% | -0.40% | -2.30% | -3.10% | -2.76% | Yes |
| 2025-05-06 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.07 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.07  | -2.49% | -0.47% | 0.23% | 0.00% | -0.27% | No |
| 2025-04-30 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.07 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.07  | 3.07% | -2.97% | -2.52% | -1.37% | -3.58% | No |
| 2025-04-28 16:30 | Ex-dividend | — | [Dividend Payments ex-date of Coop Pank AS](https://view.news.eu.nasdaq.com/view?id=b70262fb6d918b6ba8bab6bf261378bd6&lang=en&src=listed) | Open official announcement | 1.17% | 1.16% | -0.93% | 0.69% | -2.16% | No |
| 2025-04-23 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2025](https://view.news.eu.nasdaq.com/view?id=bbb5642fa5392e27df29e013b9455d65a&lang=en&src=listed) | Open official announcement | 0.70% | 1.40% | -1.17% | 2.33% | -1.88% | Yes |
| 2025-03-19 15:00 | Earnings | Higher profit | [Update: Coop Pank 2024 audited Annual Report ](https://view.news.eu.nasdaq.com/view?id=b3976e0e3d2e887f5f5f519e78c08043c&lang=en&src=listed) | Open official announcement | 0.49% | -0.24% | -1.94% | 3.39% | -1.89% | No |
| 2025-02-13 08:00 | Earnings | Lower profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2024](https://view.news.eu.nasdaq.com/view?id=b21777ecde3493d0af1f630f86d2ac1f7&lang=en&src=listed) | Open official announcement | 5.76% | 0.00% | -6.75% | -9.15% | -6.69% | Yes |
| 2024-12-13 08:00 | Guidance | — | [Moody's affirms Coop Pank's ratings and changes outlook to positive ](https://view.news.eu.nasdaq.com/view?id=b053c986c811c4d63b4a8012d4fdd94b9&lang=en&src=listed) | Open official announcement | 1.75% | -1.23% | -2.41% | 0.74% | -1.18% | Yes |
| 2024-12-04 16:15 | Guidance | — | [Finantsinspektsioon confirmed the capital requirements and guidance of Coop Pank AS at the current level](https://view.news.eu.nasdaq.com/view?id=b26f835080e27f41d7cd1378ea4c75376&lang=en&src=listed) | Open official announcement | 0.81% | 0.50% | 0.30% | 1.26% | 0.33% | No |
| 2024-10-18 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q3 2024](https://view.news.eu.nasdaq.com/view?id=b7ef39da9a44d08908473da7ebb7c38c0&lang=en&src=listed) | Open official announcement | 3.83% | 0.97% | 5.34% | -4.66% | 4.60% | No |
| 2024-07-18 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q2 2024](https://view.news.eu.nasdaq.com/view?id=b07ae08886778ccbfc589a5fceb802376&lang=en&src=listed) | Open official announcement | 0.96% | -0.24% | -1.66% | -5.31% | -0.51% | Yes |
| 2024-05-07 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.087 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.087  | -3.97% | 0.22% | -1.30% | -6.30% | -0.34% | No |
| 2024-05-03 08:15 | Guidance | — | [The rating agency Moody's affirmed Coop Pank's Credit rating. Bank deposit rating remained on the level of Baa2 with stable outlook.](https://view.news.eu.nasdaq.com/view?id=b7a776e5c235ee822512ad884629ce5d2&lang=en&src=listed) | Open official announcement | -3.55% | -0.43% | -1.52% | -6.28% | -1.14% | No |
| 2024-05-02 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.087 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.087  | 1.05% | -2.28% | -4.15% | -9.96% | -4.79% | No |
| 2024-04-29 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of Coop Pank AS](https://view.news.eu.nasdaq.com/view?id=b2aa5cc2d885864014caf1b3e0aed1e3f&lang=en&src=listed) | Open official announcement | -0.62% | 0.42% | -3.96% | -9.79% | -4.38% | No |
| 2024-04-18 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2024](https://view.news.eu.nasdaq.com/view?id=b17493f0df15058c704f5cbe73ec295b3&lang=en&src=listed) | Open official announcement | 2.29% | -1.22% | -2.64% | -11.38% | -3.06% | Yes |
| 2024-03-20 12:59 | Earnings | Higher profit | [Coop Pank 2023 audited Annual Report](https://view.news.eu.nasdaq.com/view?id=bc735c49b05823bac01b7794965f8dcde&lang=en&src=listed) | Open official announcement | 0.43% | 2.54% | 0.00% | 2.33% | 1.01% | No |
| 2024-02-09 08:00 | Earnings | Higher profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2023](https://view.news.eu.nasdaq.com/view?id=b53d1d7e14c98e9a09bdcec5c84c6d137&lang=en&src=listed) | Open official announcement | 0.82% | -0.81% | -3.04% | -4.25% | -3.09% | Yes |
| 2023-10-20 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q3 2023](https://view.news.eu.nasdaq.com/view?id=b49bb136d73e42764b382c2528433dfbc&lang=en&src=listed) | Open official announcement | -0.20% | 0.00% | 0.40% | -5.39% | 0.98% | No |
| 2023-07-20 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q2 2023](https://view.news.eu.nasdaq.com/view?id=bada171a7f982e5a472705651263e8566&lang=en&src=listed) | Open official announcement | -0.19% | -0.95% | -1.71% | -2.09% | -1.69% | Yes |
| 2023-06-08 08:00 | Guidance | — | [The rating agency Moody's affirmed Coop Pank's Credit rating. Bank deposit rating remained on the level of Baa2 with stable outlook.](https://view.news.eu.nasdaq.com/view?id=b754d7cbe907a0e32ecb382cbd34cafc8&lang=en&src=listed) | Open official announcement | -0.58% | 0.39% | 1.16% | -0.39% | 0.10% | Yes |
| 2023-05-03 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.045 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.045  | -4.10% | -0.89% | -0.18% | -7.31% | -0.25% | No |
| 2023-04-26 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.045 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.045  | -1.52% | -1.89% | -4.63% | -10.81% | -4.31% | Yes |
| 2023-04-24 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of Coop Pank AS](https://view.news.eu.nasdaq.com/view?id=b9dc8315a6a84e79fa5ad668cf591387a&lang=en&src=listed) | Open official announcement | 0.52% | -0.34% | -4.10% | -12.48% | -3.75% | Yes |
| 2023-04-20 08:00 | Earnings | Higher profit | [Coop Pank unaudited financial results for Q1 2023](https://view.news.eu.nasdaq.com/view?id=b6f8c9439bc0b41cb8380b497b3a9c0ba&lang=en&src=listed) | Open official announcement | 3.51% | -0.68% | -3.90% | -11.71% | -3.34% | Yes |
| 2023-03-15 14:01 | Earnings | Higher profit | [Coop Pank 2022 audited Annual Report](https://view.news.eu.nasdaq.com/view?id=b16dc8a32ddcf7341cbab6b0d062a7566&lang=en&src=listed) | Open official announcement | -3.18% | -0.14% | 0.86% | 3.78% | 0.70% | No |
| 2023-02-09 08:00 | Earnings | Higher profit | [Unaudited financial results of Coop Pank for Q4 and 12 months of 2022](https://view.news.eu.nasdaq.com/view?id=bf1adb352326725d8ab53662af863536e&lang=en&src=listed) | Open official announcement | -0.13% | -1.31% | -2.82% | -5.57% | -2.97% | Yes |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (22 classified of 23 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 20 | -0.06% | 0.931 | -0.22% | 30% | -0.04% | 1.016 | -0.18% |
| Higher profit | 5d | 20 | -0.72% | 4.002 | -0.86% | 25% | -0.59% | 3.830 | -0.50% |
| Higher profit | 21d | 20 | -1.56% | 23.021 | -0.74% | 45% | -0.74% | 17.607 | -0.25% |
| Lower profit | 1d | 2 | 0.34% | 0.230 | 0.34% | 50% | 0.33% | 0.580 | 0.33% |
| Lower profit | 5d | 2 | -2.02% | 44.829 | -2.02% | 50% | -2.05% | 43.205 | -2.05% |
| Lower profit | 21d | 2 | -3.67% | 60.064 | -3.67% | 50% | -3.41% | 71.938 | -3.41% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 22 | 0.639 | 0.4240 | 0.7778 | No adjusted evidence |
| 5d | 2 | 22 | 0.013 | 0.9091 | 0.9707 | No adjusted evidence |
| 21d | 2 | 22 | 0.117 | 0.7319 | 0.9048 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![CPA1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/CPA1T_all_frontiers.png?v=1793191962)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![CPA1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/CPA1T_return_dividend.png?v=1793191949)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.288166 | -0.119601 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | -0.189923 | 1.770961 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.389630 | 0.113459 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -0.300632 | 0.821195 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 90457.071451 | 114195.773135 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.082307 | 0.065960 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 39527.541114 | 50215.484127 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | -0.049115 | 0.123391 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 68222.855000 | 86902.475000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | -0.059477 | 0.117609 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 29429.000000 | 38822.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | -0.461612 | 0.597234 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | -0.000219 | 0.000482 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | -0.000195 | 0.000490 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.263359 | -0.123171 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.107471 | 0.034469 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 0.942949 | 1.156920 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 187.000000 | 19.833333 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | -0.097098 | 0.089163 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 45.000000 | 7.833333 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.290499 | 0.053282 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 0.942949 | 1.156920 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | -0.204741 | 2.207298 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.015481 | 0.044412 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.679547 | -0.580785 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -2.297709 | -2.758574 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.165550 | 1.304471 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | -0.216143 | 1.282584 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | -0.072079 | 0.093082 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | -0.000243 | 0.000397 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | -0.313735 | 0.784451 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.055104 | 0.103395 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | -0.019763 | 0.049416 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.278204 | 0.081876 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | -0.009027 | 0.027832 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | -0.152650 | 1.036570 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | -0.012328 | 0.033366 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 0.572125 | 1.184063 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | -0.029662 | 0.083376 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | -0.167624 | 0.057170 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.156146 | 0.155856 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.389491 | 0.880987 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | -0.121474 | 0.550965 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.080023 | 0.127425 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.009676 | 0.016022 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.471698 | 0.509434 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.156445 | 0.156677 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.764151 | 0.773585 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.227911 | 0.209260 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.006571 | 0.005873 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.014357 | 0.013182 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.014218 | 0.011433 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | -1.079372 | 1.137465 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.021591 | 0.017593 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | -0.004415 | 0.004268 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.891525 | 1.015051 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 0.864263 | 0.946989 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | -0.000243 | 0.000441 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.313164 | 0.066409 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.327963 | 0.404880 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.017680 | 0.215324 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -1.264379 | -0.571540 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.364679 | 0.452055 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.073893 | -0.030625 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.204128 | 0.232877 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | -0.072079 | 0.093082 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.490247 | 0.614704 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | -0.021052 | 0.062561 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.007347 | 0.007947 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | -2.004069 | 4.987104 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.015810 | 0.014675 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 5.888978 | 7.210802 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.009862 | 0.009909 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | -0.059949 | 0.118315 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.156549 | 0.157296 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.240421 | -0.098079 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.148909</td><td>0.001135</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.162574</td><td>0.001082</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>CPA1T shares</td><td>0</td><td>116</td><td>+116</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9350.414801</td><td>272.599989</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.061894</td><td>0.001240</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.104132</td><td>-0.001694</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 CPA1T shares. The scenario adds 116 shares from Table 1.a, resulting in 116 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="CPA1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![CPA1T high-resolution stochastic dominance](figures/stock_profiles/CPA1T_FSD_SSD_TSD.png?v=1793190062)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-saf1r" data-signal="HOLD" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>SAF1R — SAF Tehnika</strong> | current action: HOLD | allocation target 100 shares | netSD diagnostic rank 16</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>100</td><td>100</td><td>+0</td><td>10.77%</td><td>EUR 16.1500</td><td>-0.1345</td><td>10 / 26</td><td>40.74</td><td>Bearish</td><td>Inside bands</td><td>0.000 (Oversold)</td><td>EUR 0.1360 / share</td><td>HOLD</td><td>HOLD</td><td>0.011592 (14.462% of portfolio HHI)</td><td>EUR 8,146</td><td>0.0%</td><td>2.4%</td><td>MEDIUM</td></tr></tbody></table>

**Execution rationale:** The optimiser does not require a position change.

![SAF1R Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/SAF1R_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 16.1500 | ≤ EUR 16.0019 | ≥ EUR 17.0731 | HOLD |
| RSI(14) | RSI = 40.74 | ≤ EUR 15.5275 | ≥ EUR 17.7798 | HOLD |
| Stochastic RSI %K | %K = 0.000 | ≤ EUR 16.2683 | ≥ EUR 16.5110 | BUY |
| MACD crossover | MACD = -0.0918<br>Signal = -0.0254<br>Gap = -0.0663<br>Bullish crossover close ≈ EUR 17.1895 | — | — | SELL |
| Consensus | BUY 1/4; SELL 1/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![SAF1R complete technical history](figures/technical_analysis/SAF1R_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![SAF1R return histogram](figures/stock_profiles/SAF1R_histogram.png?v=1793184517)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -68.54% (2024-09-02) | Average gain / average loss | 1.166 | Best 21-day period | 37.91% (ending 2026-02-12) |
| Average underwater drawdown | 42.53% | Upside potential ratio | 1.172 | Worst 21-day period | -33.33% (ending 2023-11-13) |
| Conditional drawdown 95% | 65.81% | Upside capture vs Baltic EW | 93.5% | Best 5-day period | 25.62% (ending 2026-02-12) |
| Ulcer index | 46.43 | Downside capture vs Baltic EW | 61.2% | Best 63-day period | 64.24% (ending 2026-02-12) |
| Longest underwater period | 1288 calendar days | Positive trading days | 36.8% | Repeated calendar pattern | Jan: 75% positive across 4 years |
| Daily downside deviation | 1.370% | Best day | 20.83% (2026-02-12) |  |  |
| Daily upside deviation | 1.561% | Worst day | -18.64% (2023-11-09) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.174%); worst: Thursday (-0.173%) | 0.6453 | 0.6924 | Not detected |
| Calendar month | Best: Jan (0.453% daily); worst: Nov (-0.364% daily) | 0.3172 | 0.5097 | Not detected |
| Turn of month | First/last three days: -0.003%; other days: 0.058% | 0.9054 | 0.9251 | Not detected |

![SAF1R seasonality, drawdowns and upside periods](figures/stock_profiles/SAF1R_seasonality.png?v=1792941230)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-08 | 2024-09-02 | 2026-08-19 | -68.54% | 1288 |
| 2 | 2026-09-08 | 2026-09-28 | Not recovered | -10.36% | 45 |
| 3 | 2026-08-20 | 2026-08-24 | 2026-08-25 | -2.23% | 5 |
| 4 | 2023-02-01 | 2023-02-02 | 2023-02-06 | -1.75% | 5 |
| 5 | 2023-01-27 | 2023-01-30 | 2023-01-31 | -1.06% | 4 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2026-01-14 | 2026-02-12 | 37.91% |
| 2 | 2026-08-04 | 2026-09-02 | 36.47% |
| 3 | 2024-09-02 | 2024-10-01 | 25.39% |
| 4 | 2026-04-15 | 2026-05-18 | 24.44% |
| 5 | 2025-12-01 | 2026-01-06 | 20.97% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (20 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Earnings | 20 | -0.67% | -1.01% | -0.57% | 35% | 50% | 0.6563 | 1.0000 | No adjusted statistical evidence |

![SAF1R official announcements and abnormal returns](figures/stock_profiles/SAF1R_company_events.png?v=1793169045)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (20 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-12 19:40 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2025/26](https://view.news.eu.nasdaq.com/view?id=b6dbfb705adc56a5a2d8212074bd9a9c4&lang=en&src=listed) | Open official announcement | 2.33% | 6.44% | 11.74% | 32.95% | 11.66% | No |
| 2026-05-13 17:12 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2025/2026](https://view.news.eu.nasdaq.com/view?id=bf23fdbdcd9a33ae254b37b9dab7f3fa5&lang=en&src=listed) | Open official announcement | 8.37% | 10.40% | 3.96% | 8.91% | 4.53% | Yes |
| 2026-02-11 16:52 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2025/26](https://view.news.eu.nasdaq.com/view?id=b02ed5558ff45d9e37e3a2570ce3084c4&lang=en&src=listed) | Open official announcement | 5.26% | 20.83% | 18.33% | 18.81% | 17.54% | Yes |
| 2025-11-13 13:55 | Earnings | In line / unchanged | [CORRECTION: SAF Tehnika Consolidated Interim Report for Q1 of financial year 2025/2026](https://view.news.eu.nasdaq.com/view?id=b35a4318c79efa3a19972b4f3129552fb&lang=en&src=listed) | Open official announcement | 7.67% | 4.33% | -0.62% | 2.17% | -0.31% | No |
| 2025-11-12 16:33 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q1 of financial year 2025/2026](https://view.news.eu.nasdaq.com/view?id=b540077f1991eacad050b6e33e4250b95&lang=en&src=listed) | Open official announcement | 7.38% | 0.94% | 3.12% | 3.12% | 2.85% | Yes |
| 2025-10-31 16:24 | Earnings | Loss | [Audited statements and Corporate Governance report of „SAF Tehnika” for financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=b98de5f8c40da1022d780a90eb945a16c&lang=en&src=listed) | Open official announcement | 0.00% | -0.34% | 1.02% | 5.08% | 1.34% | No |
| 2025-08-13 17:24 | Earnings | Loss | [SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=bb1bdf4aecccec00ce5e71431676f8dab&lang=en&src=listed) | Open official announcement | -0.34% | -2.69% | -3.03% | -4.04% | -3.23% | No |
| 2025-05-14 16:32 | Earnings | Loss | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=bef9af568b7d0e6b2e4eab137fd651d80&lang=en&src=listed) | Open official announcement | 2.65% | -0.97% | -1.29% | -3.55% | -2.59% | Yes |
| 2025-02-12 20:31 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=b878f717c62e3ac66ead34aa7f7405e49&lang=en&src=listed) | Open official announcement | 14.38% | -11.70% | -9.36% | -4.68% | -9.29% | Yes |
| 2024-11-13 16:12 | Earnings | In line / unchanged | [SAF Tehnika Consolidated Interim Report for Q1 of financial year 2024/2025](https://view.news.eu.nasdaq.com/view?id=b26ad79c70b2d7497662066f4c625dcd2&lang=en&src=listed) | Open official announcement | -2.60% | 9.16% | 8.40% | 3.05% | 9.02% | Yes |
| 2024-10-31 17:07 | Earnings | Lower profit | [SAF Tehnika Annual report/ annual accounts](https://view.news.eu.nasdaq.com/view?id=b44739b9bbbc6603729654ab15873e65f&lang=en&src=listed) | Open official announcement | -3.65% | -2.65% | 2.27% | 6.06% | 2.21% | Yes |
| 2024-08-15 08:17 | Earnings | Unclassified earnings release | [CORRECTION: SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2023/24](https://view.news.eu.nasdaq.com/view?id=b9ab59f7e88006865d1f036d745bdfe49&lang=en&src=listed) | Open official announcement | -2.83% | 1.87% | -0.42% | 1.67% | -0.43% | No |
| 2024-08-14 18:13 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2023/24](https://view.news.eu.nasdaq.com/view?id=b832fb26e029dffebb49fcae36dcfef8d&lang=en&src=listed) | Open official announcement | 4.08% | -5.88% | -4.90% | -3.92% | -4.94% | Yes |
| 2024-05-15 18:39 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2023/24](https://view.news.eu.nasdaq.com/view?id=bccb21f99dda64f7127d52fdefd06fffb&lang=en&src=listed) | Open official announcement | -5.32% | -5.26% | -4.56% | -1.75% | -4.07% | Yes |
| 2024-02-07 16:10 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2023/2024](https://view.news.eu.nasdaq.com/view?id=b933e6fc3d29593875f2b783771aec234&lang=en&src=listed) | Open official announcement | 2.98% | 0.87% | -2.31% | -4.62% | -2.84% | Yes |
| 2023-11-08 17:54 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q1 of financial year 2023/2024](https://view.news.eu.nasdaq.com/view?id=bd38500cc9d337eec761580c66addb075&lang=en&src=listed) | Open official announcement | 0.49% | -18.64% | -28.54% | -32.04% | -27.66% | No |
| 2023-10-31 17:09 | Earnings | Unclassified earnings release | [SAF Tehnika Annual report/ annual accounts](https://view.news.eu.nasdaq.com/view?id=b879ddaf736be7655aab019ff280cc43e&lang=en&src=listed) | Open official announcement | -0.48% | -0.97% | -0.48% | -31.98% | -0.05% | No |
| 2023-08-09 16:52 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q4 and 12 months of financial year 2022/23](https://view.news.eu.nasdaq.com/view?id=b8f1ba98f95dd8dc572a11bbfc92e0297&lang=en&src=listed) | Open official announcement | 3.85% | -5.09% | -2.31% | 1.85% | -2.20% | No |
| 2023-05-10 17:28 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q3 and 9 months of financial year 2022/23](https://view.news.eu.nasdaq.com/view?id=b051cba22c4aa74b8913b2aded5d5490a&lang=en&src=listed) | Open official announcement | 1.12% | -12.59% | -9.63% | -12.22% | -7.58% | No |
| 2023-02-08 17:58 | Earnings | Unclassified earnings release | [SAF Tehnika Consolidated Interim Report for Q2 and 6 months of financial year 2022/23](https://view.news.eu.nasdaq.com/view?id=b0b3584534020b3c13c60d9807bba6185&lang=en&src=listed) | Open official announcement | 0.70% | -5.90% | -4.51% | -6.25% | -4.19% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (10 classified of 20 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Lower profit | 1d | 1 | -2.65% | — | -2.65% | 0% | -2.22% | — | -2.22% |
| Lower profit | 5d | 1 | 2.27% | — | 2.27% | 100% | 2.21% | — | 2.21% |
| Lower profit | 21d | 1 | 6.06% | — | 6.06% | 100% | 8.91% | — | 8.91% |
| In line / unchanged | 1d | 6 | 8.68% | 46.946 | 7.80% | 100% | 8.63% | 45.242 | 8.27% |
| In line / unchanged | 5d | 6 | 7.49% | 46.751 | 6.18% | 83% | 7.55% | 42.335 | 6.78% |
| In line / unchanged | 21d | 6 | 11.50% | 149.803 | 6.02% | 100% | 11.30% | 169.355 | 6.06% |
| Loss | 1d | 3 | -1.33% | 1.486 | -0.97% | 0% | -1.40% | 1.549 | -1.30% |
| Loss | 5d | 3 | -1.10% | 4.122 | -1.29% | 33% | -1.46% | 6.146 | -2.52% |
| Loss | 21d | 3 | -0.83% | 26.340 | -3.55% | 33% | -0.95% | 29.543 | -3.55% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 9 | 5.400 | 0.0201 | 0.3681 | No adjusted evidence |
| 5d | 2 | 9 | 4.267 | 0.0389 | 0.4294 | No adjusted evidence |
| 21d | 2 | 9 | 2.400 | 0.1213 | 0.5008 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![SAF1R Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/SAF1R_all_frontiers.png?v=1793191964)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![SAF1R mean return and historical dividend yield with all portfolios](figures/stock_profiles/SAF1R_return_dividend.png?v=1793191922)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.082425 | 1.446929 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 0.287115 | 34.088637 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 0.998674 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.627796 | 0.115414 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.386054 | -15.001570 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 6380.887891 | 15475.860238 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 14.968886 | 2.488999 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 702.639257 | 1349.492063 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.195831 | 1.066940 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 2413.080000 | 8098.000000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.146264 | 1.684138 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 316.000000 | 743.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.341643 | 4.321455 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000395 | 0.001604 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000777 | 0.004234 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.303530 | 1.058141 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.076798 | 0.044057 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.142415 | 1.890778 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 73.400000 | 19.333333 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.064136 | 1.632952 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 42.700000 | 9.500000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.419813 | 0.038057 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.142415 | 1.890778 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 0.348404 | 44.252719 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | 0.371595 | -0.330253 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.421323 | -0.161563 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | 0.994947 | -22.410485 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.168506 | 1.812138 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.278086 | 11.360339 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.117677 | 1.750357 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000667 | 0.004483 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.567017 | 2.608973 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.125006 | -0.279156 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.035719 | 0.164350 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.082432 | 0.097274 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.016820 | 0.118580 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.232981 | 14.592157 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.030238 | 0.161472 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | 0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | 0.769450 | 4.067258 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | 0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.054174 | 0.400634 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.504471 | 0.638334 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.344443 | 0.405039 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.878368 | 0.424995 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.200969 | 7.818149 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.033519 | -0.625101 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.021951 | -0.043259 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.408805 | 0.396226 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.345142 | 0.407342 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.738994 | 0.773585 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.377367 | 0.452395 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.014345 | 0.010568 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.023772 | 0.028498 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.023076 | 0.013387 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 1.170055 | -6.032975 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.046202 | 0.035705 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.004335 | -0.014063 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 1.966838 | 2.639009 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 2.044323 | 1.591359 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000542 | 0.003926 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.509428 | 0.049405 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.437458 | 0.483017 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.209270 | 0.495207 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -0.218421 | 3.198378 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.389908 | 0.383562 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.011599 | 0.108103 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.270642 | 0.287671 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.117677 | 1.750357 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.434572 | 0.850392 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.029124 | 0.272776 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.016357 | 0.023762 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 1.641766 | 6.379684 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.025700 | 0.026221 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 32.251943 | 33.035712 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.021756 | 0.025761 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.140441 | 1.657674 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.345370 | 0.408950 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.125601 | 0.324086 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.001326 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.796610</td><td>-0.016949</td></tr><tr><td>OUT</td><td>96</td><td>94</td><td>-2</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.190075</td><td>0.042301</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.168744</td><td>0.007252</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>SAF1R shares</td><td>100</td><td>100</td><td>+0</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9077.814812</td><td>0.000000</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.060654</td><td>0.000000</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.105826</td><td>0.000000</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 100 SAF1R shares. The scenario adds 0 shares from Table 1.a, resulting in 100 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="SAF1R"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![SAF1R high-resolution stochastic dominance](figures/stock_profiles/SAF1R_FSD_SSD_TSD.png?v=1793190091)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tsm1t" data-signal="HOLD" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>TSM1T — Tallinna Sadam</strong> | current action: HOLD | allocation target 330 shares | netSD diagnostic rank 17</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>330</td><td>330</td><td>+0</td><td>2.64%</td><td>EUR 1.1980</td><td>-0.0084</td><td>30 / 31</td><td>39.33</td><td>Bearish</td><td>Inside bands</td><td>0.393 (Neutral)</td><td>EUR 0.0778 / share</td><td>HOLD</td><td>HOLD</td><td>0.000695 (0.867% of portfolio HHI)</td><td>EUR 45,487</td><td>0.0%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** The optimiser does not require a position change.

![TSM1T Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TSM1T_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 1.1980 | ≤ EUR 1.1968 | ≥ EUR 1.2170 | HOLD |
| RSI(14) | RSI = 39.33 | ≤ EUR 1.1804 | ≥ EUR 1.2531 | HOLD |
| Stochastic RSI %K | %K = 0.393 | ≤ EUR 1.1929 | ≥ EUR 1.2056 | HOLD |
| MACD crossover | MACD = -0.0047<br>Signal = -0.0043<br>Gap = -0.0004<br>Bullish crossover close ≈ EUR 1.2039 | — | — | SELL |
| Consensus | BUY 0/4; SELL 1/4; neutral 3/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![TSM1T complete technical history](figures/technical_analysis/TSM1T_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TSM1T return histogram](figures/stock_profiles/TSM1T_histogram.png?v=1793184518)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **calendar-month**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -29.81% (2024-12-11) | Average gain / average loss | 0.947 | Best 21-day period | 14.20% (ending 2026-01-30) |
| Average underwater drawdown | 17.92% | Upside potential ratio | 0.937 | Worst 21-day period | -14.29% (ending 2026-05-29) |
| Conditional drawdown 95% | 29.36% | Upside capture vs Baltic EW | 45.8% | Best 5-day period | 8.50% (ending 2026-01-30) |
| Ulcer index | 19.57 | Downside capture vs Baltic EW | 59.2% | Best 63-day period | 24.37% (ending 2026-01-30) |
| Longest underwater period | 1334 calendar days | Positive trading days | 39.2% | Repeated calendar pattern | May: 0% positive across 4 years |
| Daily downside deviation | 0.555% | Best day | 2.77% (2024-04-08) |  |  |
| Daily upside deviation | 0.449% | Worst day | -6.09% (2025-05-08) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Wednesday (0.047%); worst: Monday (-0.096%) | 0.0298 | 0.1207 | Not detected |
| Calendar month | Best: Jan (0.293% daily); worst: May (-0.359% daily) | 0.0003 | 0.0059 | Detected |
| Turn of month | First/last three days: 0.072%; other days: -0.035% | 0.1121 | 0.4297 | Not detected |

![TSM1T seasonality, drawdowns and upside periods](figures/stock_profiles/TSM1T_seasonality.png?v=1792941266)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-02-27 | 2024-12-11 | Not recovered | -29.81% | 1334 |
| 2 | 2023-01-16 | 2023-01-18 | 2023-01-20 | -0.56% | 4 |
| 3 | 2023-02-09 | 2023-02-10 | 2023-02-27 | -0.40% | 18 |
| 4 | 2023-01-09 | 2023-01-10 | 2023-01-13 | -0.28% | 4 |
| 5 | 2023-01-26 | 2023-01-27 | 2023-01-30 | -0.28% | 4 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-12-30 | 2026-01-30 | 14.20% |
| 2 | 2025-01-20 | 2025-02-18 | 9.82% |
| 3 | 2024-04-03 | 2024-05-03 | 7.23% |
| 4 | 2025-11-25 | 2025-12-29 | 6.83% |
| 5 | 2025-03-04 | 2025-04-02 | 6.09% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (30 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 4 | -0.04% | 1.23% | 2.32% | 75% | 25% | 0.6563 | 0.2958 | No adjusted statistical evidence |
| Dividend payment | 4 | -0.21% | -1.20% | -0.74% | 25% | 0% | 0.6563 | 1.0000 | No adjusted statistical evidence |
| Earnings | 15 | -0.42% | -0.40% | -1.22% | 53% | 33% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 7 | -3.44% | -5.55% | -7.25% | 0% | 43% | 0.0000 | 0.0002 | Different from ordinary periods; price drop may be mechanical |

![TSM1T official announcements and abnormal returns](figures/stock_profiles/TSM1T_company_events.png?v=1793169056)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (30 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-08-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2026 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=b004460ea6a7fe0426daaa1f06fd12455&lang=en&src=listed) | Open official announcement | 0.16% | -0.32% | -0.80% | -1.77% | -0.40% | No |
| 2026-05-20 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -8.91% | 0.00% | -1.38% | -3.21% | -1.72% | No |
| 2026-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -1.37% | -5.99% | -8.91% | -12.95% | -7.85% | No |
| 2026-05-11 08:59 | Earnings | Unclassified earnings release | [Parandus pealkirjas: ASi Tallinna Sadam 2026 I kvartali majandustulemused](https://view.news.eu.nasdaq.com/view?id=b3110244296581c0066185611d5eece35&lang=et&src=listed) | Open official announcement | -1.37% | -5.99% | -8.91% | -12.95% | -7.85% | No |
| 2026-05-08 08:00 | Ex-dividend | — | [Dividend Payment Ex-date of AS Tallinna Sadam](https://view.news.eu.nasdaq.com/view?id=b860e51934927975c9974924238c41731&lang=en&src=listed) | Open official announcement | -0.14% | -1.24% | -10.04% | -14.03% | -9.46% | Yes |
| 2026-04-02 08:00 | Dividend announcement | — | [Tallinna Sadam audited Annual Report 2025 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=bda899d2e5f805868f71ab7cf8e5394f8&lang=en&src=listed) | Open official announcement | 0.29% | -0.29% | -0.29% | 3.99% | -1.93% | No |
| 2026-02-26 08:00 | Earnings | Lower profit | [AS Tallinna Sadam unaudited financial results for the year 2025 and Q4](https://view.news.eu.nasdaq.com/view?id=bc0cf354374a243405cd3c38805b88f5c&lang=en&src=listed) | Open official announcement | -2.33% | 0.28% | 0.00% | -2.24% | 0.21% | No |
| 2025-11-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2025 Q3 and 9 months](https://view.news.eu.nasdaq.com/view?id=b1b08441834547d95e1197680971ae7fa&lang=en&src=listed) | Open official announcement | 3.10% | 0.17% | -1.17% | 3.51% | -1.18% | Yes |
| 2025-08-11 14:30 | Earnings | Higher profit | [Correction: AS Tallinna Sadam financial results for 2025 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=bba9e5faad08541202778a34eb0efae9c&lang=en&src=listed) | Open official announcement | 0.68% | 0.00% | 1.34% | 0.50% | 0.28% | No |
| 2025-05-16 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | 0.68% | 0.85% | 0.85% | 0.68% | -0.06% | No |
| 2025-05-12 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2025 Q1](https://view.news.eu.nasdaq.com/view?id=b15406ee82575437cf9e2952f01c01b2b&lang=en&src=listed) | Open official announcement | -4.07% | -0.17% | 1.70% | 2.21% | 1.22% | Yes |
| 2025-05-08 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | 2.30% | -6.09% | -5.45% | -4.17% | -4.89% | No |
| 2025-05-06 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of AS Tallinna Sadam](https://view.news.eu.nasdaq.com/view?id=bb5bfdae4fe3e829f5cdf7cd493af89e6&lang=en&src=listed) | Open official announcement | 2.46% | -0.16% | -5.92% | -4.32% | -5.90% | Yes |
| 2025-04-03 08:00 | Dividend announcement | — | [Tallinna Sadam audited Annual Report 2024 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=bee211eb152fa721883c88316a35335c6&lang=en&src=listed) | Open official announcement | 3.04% | -1.80% | -1.15% | 2.30% | 0.63% | No |
| 2025-02-28 08:00 | Earnings | Higher profit | [AS Tallinna Sadam unaudited financial results for Q4 and 2024](https://view.news.eu.nasdaq.com/view?id=b0887dc70da261877b0aa174b49193374&lang=en&src=listed) | Open official announcement | 0.00% | -0.67% | -1.17% | -1.34% | -1.18% | Yes |
| 2024-11-11 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2024 9 months and Q3](https://view.news.eu.nasdaq.com/view?id=bdb3dc8fd61fde2f29a4b559bab9a4510&lang=en&src=listed) | Open official announcement | -0.75% | -0.19% | 0.19% | -0.19% | 1.64% | No |
| 2024-08-12 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2024 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=b2301b4b68af4553da7d02ab2252a1715&lang=en&src=listed) | Open official announcement | 1.69% | -0.56% | -1.48% | -2.04% | -0.79% | Yes |
| 2024-05-17 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -3.50% | -1.04% | -3.63% | -3.28% | -3.57% | No |
| 2024-05-10 08:00 | Earnings | Lower profit | [AS Tallinna Sadam financial results for 2024 Q1](https://view.news.eu.nasdaq.com/view?id=bb6d9b7691aa7c3575dc66f38d4a6dbad&lang=en&src=listed) | Open official announcement | -6.61% | 0.18% | 1.42% | -1.24% | 2.25% | No |
| 2024-05-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -0.50% | -5.83% | -3.50% | -7.00% | -1.85% | No |
| 2024-05-06 08:00 | Ex-dividend | — | [Dividend Payments Ex-date of AS Tallinna Sadam](https://view.news.eu.nasdaq.com/view?id=bd1db1c926ede4a2de532dc97bed18365&lang=en&src=listed) | Open official announcement | -0.49% | -0.50% | -5.12% | -8.91% | -4.15% | No |
| 2024-04-04 08:00 | Dividend announcement | — | [Tallinna Sadam audited Annual Report 2023 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=b801005dc3c67e2a6540cdb741317ffc5&lang=en&src=listed) | Open official announcement | -0.52% | 0.87% | 5.42% | 5.94% | 5.28% | Yes |
| 2024-02-28 08:00 | Earnings | Higher profit | [AS Tallinna Sadam unaudited financial results for Q4 and 2023](https://view.news.eu.nasdaq.com/view?id=bcee1274a19a3f1eaa0cf56d26464ca38&lang=en&src=listed) | Open official announcement | 3.25% | 0.35% | 1.23% | 0.35% | 1.54% | No |
| 2023-11-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2023 Q3 and 9 months](https://view.news.eu.nasdaq.com/view?id=b1e73bdebe1c05764ce0f6d44b8337258&lang=en&src=listed) | Open official announcement | 0.70% | -0.17% | -1.22% | -3.83% | -0.96% | Yes |
| 2023-08-10 09:33 | Earnings | Higher profit | [Correction: AS Tallinna Sadam financial results for 2023 Q2 and 6 months](https://view.news.eu.nasdaq.com/view?id=ba0a3f266bb3fdc2c504aed32e1a1d4a9&lang=en&src=listed) | Open official announcement | -2.90% | -0.15% | -0.45% | -9.12% | -1.87% | No |
| 2023-05-12 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | -5.32% | 0.14% | -0.86% | 0.86% | 0.56% | No |
| 2023-05-10 08:00 | Earnings | Higher profit | [AS Tallinna Sadam financial results for 2023 Q1](https://view.news.eu.nasdaq.com/view?id=bdd9ab4079d3988d74cd1d95324b6db9e&lang=en&src=listed) | Open official announcement | -4.92% | -0.29% | -1.15% | 0.57% | 0.90% | No |
| 2023-05-09 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.073 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.073  | 1.24% | -4.63% | -5.86% | -4.77% | -4.73% | Yes |
| 2023-04-04 13:40 | Dividend announcement | — | [CORRECTION: Tallinna Sadam audited Annual Report 2022 and dividend proposal ](https://view.news.eu.nasdaq.com/view?id=be24cd8165447a892001ba6662975d0f2&lang=en&src=listed) | Open official announcement | 1.96% | 0.14% | 0.96% | 0.82% | 0.94% | No |
| 2023-02-28 08:00 | Earnings | Higher profit | [AS Tallinna Sadam unaudited financial results for 2022 and Q4](https://view.news.eu.nasdaq.com/view?id=bf7751635da699ae3465424a43a2af554&lang=en&src=listed) | Open official announcement | -0.40% | 0.27% | 0.41% | -3.65% | 0.19% | No |

</details>

</details>

<details markdown="1" class="earnings-outcomes">
<summary>Profit outcome and subsequent price analysis (14 classified of 15 earnings releases)</summary>

Higher/lower profit refers to the issuer's explicit comparison with the earlier comparable period. ‘In line / unchanged’ is used only when the issuer explicitly says that profit met a plan, forecast or expectation, or was unchanged. ‘Loss’ requires an explicit realised net or operating loss. Releases without such wording remain unclassified and are excluded from the conditional estimates.

Variance is reported in squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

| Profit outcome | Horizon | N | Conditional mean | Variance | Median | Positive share | Mean abnormal | Abnormal variance | Median abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 12 | -0.14% | 0.094 | -0.17% | 25% | -0.07% | 0.118 | -0.04% |
| Higher profit | 5d | 12 | -0.21% | 1.311 | -0.63% | 42% | -0.04% | 1.418 | -0.10% |
| Higher profit | 21d | 12 | -1.23% | 10.906 | -0.76% | 42% | -0.53% | 13.666 | -0.47% |
| Lower profit | 1d | 2 | 0.23% | 0.005 | 0.23% | 100% | 0.11% | 0.205 | 0.11% |
| Lower profit | 5d | 2 | 0.71% | 1.002 | 0.71% | 50% | 1.25% | 1.996 | 1.25% |
| Lower profit | 21d | 2 | -1.74% | 0.505 | -1.74% | 0% | -0.06% | 0.541 | -0.06% |

**Kruskal–Wallis test across the available outcome groups**

| Horizon | Groups | N | H | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1d | 2 | 14 | 0.300 | 0.5839 | 0.8451 | No adjusted evidence |
| 5d | 2 | 14 | 1.633 | 0.2012 | 0.6718 | No adjusted evidence |
| 21d | 2 | 14 | 0.033 | 0.8551 | 0.9707 | No adjusted evidence |

**Pairwise result:** No pairwise difference survives BH adjustment.

The test describes historical association. Small groups, overlapping horizons and repeated releases from the same company limit causal interpretation.

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TSM1T Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TSM1T_all_frontiers.png?v=1793191965)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![TSM1T mean return and historical dividend yield with all portfolios](figures/stock_profiles/TSM1T_return_dividend.png?v=1793191942)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.277334 | -0.411708 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | -0.225586 | -1.695576 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.291939 | 0.165097 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | -0.373373 | -0.408178 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 66643.816950 | 69656.671000 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.092956 | 0.088756 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 53455.770557 | 50982.015873 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | -0.043019 | -0.181818 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 47333.184000 | 47949.051000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | -0.048644 | -0.174499 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 39160.000000 | 35937.000000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | -0.372776 | -1.203434 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | -0.000257 | -0.000798 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | -0.000171 | -0.000721 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.200433 | -0.389102 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.051619 | 0.058457 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 0.926054 | 0.751272 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 124.000000 | 41.000000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | -0.081057 | -0.208950 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 60.166667 | 2.000000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.189048 | 0.082395 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 0.926054 | 0.751272 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | -0.257313 | -2.117834 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.050505 | -0.013112 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.539890 | -0.611214 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -1.417573 | -0.248047 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 0.936715 | 0.788970 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | -0.230283 | -1.441332 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | -0.043392 | -0.167967 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | -0.000151 | -0.000697 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | -0.369110 | -1.296887 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | -0.022969 | -0.027535 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | -0.023252 | -0.081696 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.134432 | 0.125293 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | -0.009351 | -0.033643 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | -0.166626 | -1.056948 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | -0.017565 | -0.057980 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | -1.678367 | -1.928936 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | -0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | -0.030154 | -0.101437 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | -0.138609 | -0.091429 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.116402 | 0.139573 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 1.138419 | 1.626871 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | -0.124113 | -0.658246 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | -0.005342 | 0.014807 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | -0.004033 | -0.004267 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.427673 | 0.528302 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.116472 | 0.139639 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.836478 | 0.830189 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.214089 | 0.212111 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.005661 | 0.007113 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.013486 | 0.013362 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.010637 | 0.014723 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 2.117847 | 6.337296 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.018256 | 0.021446 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.008615 | 0.027626 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.663731 | 0.904701 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.072153 | 1.042807 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | -0.000198 | -0.000761 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.215636 | 0.102914 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.375954 | 0.473918 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | -0.044368 | -0.156972 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -1.295411 | -1.941006 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.394495 | 0.383562 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.075295 | -0.120173 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.176606 | 0.150685 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | -0.043392 | -0.167967 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.377634 | 0.306385 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | -0.016878 | -0.057530 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.004670 | 0.005225 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | -3.166994 | -9.250553 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.009719 | 0.012444 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 19.153590 | 18.727756 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.007342 | 0.008831 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | -0.049560 | -0.173362 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.116549 | 0.140196 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.245773 | -0.347629 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.155889</td><td>0.008116</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.165547</td><td>0.004054</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Increasing this existing position in the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TSM1T shares</td><td>330</td><td>330</td><td>+0</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9077.814812</td><td>0.000000</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.060654</td><td>0.000000</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.105826</td><td>0.000000</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 330 TSM1T shares. The scenario adds 0 shares from Table 1.a, resulting in 330 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="TSM1T"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TSM1T high-resolution stochastic dominance](figures/stock_profiles/TSM1T_FSD_SSD_TSD.png?v=1793190101)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

<details markdown="1" class="stock-profile" id="share-tel1l" data-signal="SKIP" data-netsd-effect="UNCHANGED" data-dividend-status="PAID">
<summary><strong>TEL1L — Telia Lietuva</strong> | current action: SKIP | allocation target 30 shares | netSD diagnostic rank 18</summary>

<table class="stock-summary-table"><thead><tr><th><span>Current shares</span></th><th><span>Target shares</span></th><th><span>Change</span></th><th><span>Weight</span></th><th><span>Last price</span></th><th><span>Individual netSD</span></th><th><span>OUT / IN</span></th><th><span>RSI(14)</span></th><th><span>MACD state</span></th><th><span>Bollinger state</span></th><th><span>Stochastic RSI</span></th><th><span>Average annual dividend (2022–2026)</span></th><th><span>Technical timing signal</span></th><th><span>Portfolio allocation change</span></th><th><span>HHI contribution</span></th><th><span>Median daily turnover</span></th><th><span>Trade / median turnover</span></th><th><span>Zero-volume days</span></th><th><span>Liquidity risk</span></th></tr></thead><tbody><tr><td>0</td><td>30</td><td>+30</td><td>0.45%</td><td>EUR 2.2500</td><td>0.1681</td><td>42 / 22</td><td>51.78</td><td>Bearish</td><td>Inside bands</td><td>0.180 (Oversold)</td><td>EUR 0.1000 / share</td><td>HOLD</td><td>BUY</td><td>0.000020 (0.025% of portfolio HHI)</td><td>EUR 56,394</td><td>0.1%</td><td>1.2%</td><td>LOW</td></tr></tbody></table>

**Execution rationale:** Do not execute: proposed purchase is below EUR 100 or below 1% target weight.

![TEL1L Bollinger Bands, MACD, RSI and Stochastic RSI — last 126 observations](figures/stock_profiles/TEL1L_technicals_6m.png)

Signals combine four indicators: Bollinger bands, RSI, MACD and Stochastic RSI. Vertical lines distinguish 4-of-4, 3-of-4 and 2-of-4 buy/sell agreement.

**Current indicative prices and four-indicator signals**

| Indicator | Current indicator value | BUY price | SELL price | Signal now |
| --- | --- | --- | --- | --- |
| Bollinger price | Close = EUR 2.2500 | ≤ EUR 2.2048 | ≥ EUR 2.3022 | HOLD |
| RSI(14) | RSI = 51.78 | ≤ EUR 2.1521 | ≥ EUR 2.3318 | HOLD |
| Stochastic RSI %K | %K = 0.180 | ≤ EUR 2.2525 | ≥ EUR 2.4154 | BUY |
| MACD crossover | MACD = 0.0115<br>Signal = 0.0151<br>Gap = -0.0036<br>Bullish crossover close ≈ EUR 2.3061 | — | — | SELL |
| Consensus | BUY 1/4; SELL 1/4; neutral 2/4 | At least 3 BUY votes | At least 3 SELL votes | HOLD |

MACD does not define an acceptable purchase or sale price. Its bullish crossover close is only the hypothetical latest close at which MACD would cross above its signal line if all earlier closes stayed unchanged. A crossover above the current price means that upward momentum still needs confirmation; it does not mean that the investor should wait and buy at that higher price. RSI and Stochastic RSI price thresholds are also indicative because only the latest close is varied. The four-indicator consensus is BUY or SELL only when at least three indicators agree; otherwise it is HOLD.

<details markdown="1">
<summary>Complete technical history</summary>

![TEL1L complete technical history](figures/technical_analysis/TEL1L_technical.png)

</details>

<details markdown="1">
<summary>Return histogram</summary>

![TEL1L return histogram](figures/stock_profiles/TEL1L_histogram.png?v=1793184544)

</details>

<details markdown="1" class="seasonality-section">
<summary>Seasonality, drawdowns and upside periods</summary>

The analysis covers 962 daily returns from 2023-01-02 to 2026-10-23. Statistically supported calendar effects: **none after multiple-testing correction**. Adjusted p-values control the false-discovery rate across all analysed shares.

| Measure | Value | Measure | Value | Measure | Value |
| --- | --- | --- | --- | --- | --- |
| Maximum drawdown | -25.25% (2024-08-05) | Average gain / average loss | 1.004 | Best 21-day period | 12.09% (ending 2026-01-09) |
| Average underwater drawdown | 13.65% | Upside potential ratio | 1.307 | Worst 21-day period | -11.05% (ending 2023-08-08) |
| Conditional drawdown 95% | 23.33% | Upside capture vs Baltic EW | 44.0% | Best 5-day period | 6.81% (ending 2026-01-09) |
| Ulcer index | 15.33 | Downside capture vs Baltic EW | 34.8% | Best 63-day period | 18.60% (ending 2026-01-09) |
| Longest underwater period | 987 calendar days | Positive trading days | 30.2% | Repeated calendar pattern | May: 0% positive across 4 years |
| Daily downside deviation | 0.495% | Best day | 3.67% (2026-04-24) |  |  |
| Daily upside deviation | 0.460% | Worst day | -5.60% (2026-05-08) |  |  |

**Calendar-effect tests and observed averages**

| Effect | Observed result | Raw p | BH-adjusted p | Conclusion |
| --- | --- | --- | --- | --- |
| Weekday | Best: Friday (0.050%); worst: Monday (-0.072%) | 0.4442 | 0.5676 | Not detected |
| Calendar month | Best: Jan (0.201% daily); worst: May (-0.278% daily) | 0.0879 | 0.2888 | Not detected |
| Turn of month | First/last three days: 0.056%; other days: 0.004% | 0.6073 | 0.8214 | Not detected |

![TEL1L seasonality, drawdowns and upside periods](figures/stock_profiles/TEL1L_seasonality.png?v=1792941298)

**Five deepest drawdown episodes**

| Rank | Peak | Trough | Recovery | Loss | Underwater days |
| --- | --- | --- | --- | --- | --- |
| 1 | 2023-04-28 | 2024-08-05 | 2026-01-09 | -25.25% | 987 |
| 2 | 2026-05-07 | 2026-06-18 | Not recovered | -9.05% | 169 |
| 3 | 2023-03-17 | 2023-04-18 | 2023-04-28 | -3.43% | 42 |
| 4 | 2026-02-18 | 2026-03-12 | 2026-04-07 | -3.33% | 48 |
| 5 | 2026-01-29 | 2026-02-05 | 2026-02-18 | -1.90% | 20 |

**Five strongest non-overlapping 21-trading-day rises**

| Rank | Start | End | 21-day return |
| --- | --- | --- | --- |
| 1 | 2025-12-04 | 2026-01-09 | 12.09% |
| 2 | 2026-03-26 | 2026-04-28 | 11.22% |
| 3 | 2023-11-01 | 2023-11-30 | 8.86% |
| 4 | 2026-06-18 | 2026-07-20 | 7.58% |
| 5 | 2025-06-18 | 2025-07-18 | 6.17% |

The dated extremes identify where company announcements, dividends, corporate actions or data anomalies should be checked. A repeated calendar average is descriptive until it survives the adjusted test and a later out-of-sample period; it is not by itself a buy or sell signal.

<details markdown="1" class="company-events">
<summary>Official company-news calendar and price-direction analysis (13 events)</summary>

Announcement times and links come from the official Nasdaq news service. The effective date is the first trading close strictly after publication. Abnormal return means the share return minus the equal-weight Baltic-market return over the same window.

| Event type | N | Abnormal 1d | Abnormal 5d | Abnormal 21d | Positive 5d | Direction reversal | BH p(5d) | BH p(21d) | Interpretation |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Dividend announcement | 8 | 0.15% | 0.13% | -1.24% | 50% | 38% | 1.0000 | 0.6088 | No adjusted statistical evidence |
| Dividend payment | 1 | -0.40% | -0.72% | 1.15% | 0% | 0% | 1.0000 | 1.0000 | No adjusted statistical evidence |
| Ex-dividend | 4 | -3.96% | -3.85% | -4.28% | 25% | 75% | 0.0434 | 0.0668 | Different from ordinary periods; price drop may be mechanical |

![TEL1L official announcements and abnormal returns](figures/stock_profiles/TEL1L_company_events.png?v=1793169050)

A direction reversal requires opposite fitted price slopes during the ten trading days before and after the event and at least a 1% five-day move. This identifies temporal association, not proof that the announcement caused the change.

<details markdown="1">
<summary>Complete official event calendar (13 announcements)</summary>

| Published | Type | Profit outcome | Official announcement | Headline fundamental cue | Pre 5d | Post 1d | Post 5d | Post 21d | Abnormal 5d | Reversal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 2026-05-08 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.14 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.14  | 2.20% | -5.60% | -8.19% | -7.76% | -7.13% | Yes |
| 2026-04-27 16:05 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2025](https://view.news.eu.nasdaq.com/view?id=b52a35e6570c9cb1d22e5f68ba1454a59&lang=en&src=listed) | Open official announcement | 5.56% | 0.00% | 0.44% | -6.58% | 0.54% | No |
| 2026-03-27 21:30 | Dividend announcement | — | [The Board approved financial statements for the year 2025 and proposes to pay EUR 0.14 dividend per share for the year 2025](https://view.news.eu.nasdaq.com/view?id=b65cd483dd3b129e0e15e28809b5a0894&lang=en&src=listed) | EUR 0.14  | 0.49% | 0.49% | 2.91% | 10.19% | 2.98% | Yes |
| 2025-05-27 08:00 | Dividend payment | — | [Official dividend calendar: Dividend payment date, EUR 0.11 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.11  | -1.22% | 0.31% | 0.00% | 0.62% | -0.72% | No |
| 2025-05-12 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.11 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.11  | 1.18% | -4.66% | -4.37% | -5.54% | -4.97% | Yes |
| 2025-04-30 16:13 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2024](https://view.news.eu.nasdaq.com/view?id=bb619e87f2d63301ab59ddd77d9a9a9c3&lang=en&src=listed) | Open official announcement | 3.04% | 0.00% | 1.47% | -4.42% | -0.02% | Yes |
| 2025-04-03 16:00 | Dividend announcement | — | [The Board approved financial statements for the year 2024 and proposes to pay EUR 0.11 dividend per share for the year 2024](https://view.news.eu.nasdaq.com/view?id=bcc0e8bd676eeaf696be57489b03fa52e&lang=en&src=listed) | EUR 0.11  | 1.23% | 0.00% | -0.61% | 4.27% | 1.16% | No |
| 2024-05-10 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.09 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.09  | 0.59% | -4.71% | -5.00% | -5.59% | -3.35% | Yes |
| 2024-04-30 16:30 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2023](https://view.news.eu.nasdaq.com/view?id=bb3264ad87e45486fb54ced8673d4a165&lang=en&src=listed) | Open official announcement | -0.29% | 0.30% | 0.59% | -5.03% | -0.05% | No |
| 2024-04-05 18:36 | Dividend announcement | — | [Valdyba patvirtino 2023 m. finansines ataskaitas ir siūlo mokėti 0,09 euro dividendų vienai akcijai už 2023 metus](https://view.news.eu.nasdaq.com/view?id=bc84fe25559e2ce03bfc5a8739386ab2c&lang=en&src=listed) | Open official announcement | 1.49% | 1.18% | 0.29% | 0.29% | 0.48% | No |
| 2023-05-11 08:00 | Ex-dividend | — | [Official dividend calendar: Dividend ex-date, EUR 0.06 per share](https://nasdaqbaltic.com/statistics/en/dividends) | EUR 0.06  | -1.00% | -2.26% | -2.01% | -2.76% | 0.03% | No |
| 2023-04-28 16:05 | Dividend announcement | — | [Procedure for the payment of Telia Lietuva dividends for the year 2022](https://view.news.eu.nasdaq.com/view?id=bb5a582ef27ce29b0d9d9f6125b6ae2c3&lang=en&src=listed) | Open official announcement | 2.51% | -0.98% | -2.45% | -5.88% | -2.31% | Yes |
| 2023-04-04 16:00 | Dividend announcement | — | [The Board approved financial statements for the year 2022 and proposes to pay 0.06 euro dividend per share for the year 2022](https://view.news.eu.nasdaq.com/view?id=b6f85e51534ede96fb95a3c51ad44feb1&lang=en&src=listed) | Open official announcement | 0.00% | -0.99% | -1.73% | -1.49% | -1.76% | No |

</details>

</details>

</details>

<details markdown="1">
<summary>All five model frontiers with this share highlighted</summary>

![TEL1L Markowitz, MAD, Minimax, CVaR and netSD frontiers](figures/stock_profiles/TEL1L_all_frontiers.png?v=1793191964)

The highlighted circle is the selected share and pale circles are the remaining shares. Every curve and point now uses the same 55-share Baltic universe, the same complete return sample and the same displayed risk definition. Markowitz, MAD, Minimax and empirical 95% CVaR curves are solved under long-only full-investment constraints. Consequently, a feasible portfolio point cannot lie above the corresponding curve at the same risk. The netSD criterion is discrete and non-convex, so its dashed line is explicitly an observed nondominated candidate envelope rather than a claimed smooth global frontier. Its horizontal axis is 1 - netSD, where lower is better.

</details>

<details markdown="1">
<summary>Mean return and five-year average dividend yield versus all portfolios</summary>

![TEL1L mean return and historical dividend yield with all portfolios](figures/stock_profiles/TEL1L_return_dividend.png?v=1793191950)

The selected share is highlighted, while every other eligible Baltic share is shown as an unlabelled transparent background point. The horizontal coordinate is the realised mean one-period return. The vertical coordinate is the five-year average annual historical dividend yield: each ex-dividend amount is divided by the latest available share price on or before that ex-dividend date, annual event yields are summed, and the five calendar years 2022–2026 are averaged including zero-payment years. Portfolio values are weight-averaged constituent yields. This is descriptive and is not a dividend forecast.

</details>

<details markdown="1">
<summary>All 80 performance and liquidity measures: full period and last 126 observations</summary>

Click a measure name to see what it means, how it is calculated, and whether a higher or lower value is preferable.

| Measure | Full period | Last 126 | Measure | Full period | Last 126 |
| --- | --- | --- | --- | --- | --- |
| <button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button> | -0.200994 | -0.119362 | <button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button> | 0.204696 | 4.506283 |
| <button type="button" class="metric-help-button" data-metric="ActiveTradingDayFraction" data-meaning="Share of observations with positive trading volume." data-calculation="Count(volume&gt;0)/n." data-interpretation="Higher is better.">ActiveTradingDayFraction</button> | 1.000000 | 1.000000 | <button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button> | 0.215460 | 0.058649 |
| <button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button> | 0.296451 | 1.233466 | <button type="button" class="metric-help-button" data-metric="MeanDailyTurnoverEUR" data-meaning="Average daily traded value." data-calculation="Mean(price × volume) in EUR." data-interpretation="Higher is better, but is sensitive to exceptional days.">MeanDailyTurnoverEUR</button> | 50452.330033 | 97638.742698 |
| <button type="button" class="metric-help-button" data-metric="AmihudIlliquidityPerEUR1m" data-meaning="Absolute return generated per EUR 1 million of turnover." data-calculation="10⁶ × mean(\|Rₜ\| / turnoverₜ) on traded days." data-interpretation="Lower is better; high values indicate stronger price impact and poorer liquidity.">AmihudIlliquidityPerEUR1m</button> | 0.135572 | 0.060519 | <button type="button" class="metric-help-button" data-metric="MeanDailyVolume" data-meaning="Average number of shares traded per day." data-calculation="Mean daily official volume." data-interpretation="Higher is better, but can be inflated by a few large trades.">MeanDailyVolume</button> | 27671.415119 | 45785.611111 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button> | 0.032651 | 0.115982 | <button type="button" class="metric-help-button" data-metric="MedianDailyTurnoverEUR" data-meaning="Typical daily traded value." data-calculation="Median(price × volume) in EUR." data-interpretation="Higher is better for execution liquidity.">MedianDailyTurnoverEUR</button> | 29302.080000 | 69258.570000 |
| <button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button> | 0.027695 | 0.117847 | <button type="button" class="metric-help-button" data-metric="MedianDailyVolume" data-meaning="Typical number of shares traded per day." data-calculation="Median daily official volume." data-interpretation="Higher is better for execution liquidity.">MedianDailyVolume</button> | 16806.000000 | 33038.500000 |
| <button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button> | 0.219937 | 1.191330 | <button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button> | 0.000220 | 0.000744 |
| <button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button> | 0.000130 | 0.000460 | <button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button> | -0.106745 | -0.028958 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button> | 0.033172 | 0.019112 | <button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button> | 1.070272 | 1.247627 |
| <button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button> | 61.166667 | 14.875000 | <button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button> | 0.001439 | 0.099764 |
| <button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button> | 32.250000 | 8.250000 | <button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button> | 0.115232 | 0.021621 |
| <button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button> | 1.070272 | 1.247627 | <button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button> | 0.240341 | 5.450565 |
| <button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button> | -0.028018 | 0.084501 | <button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button> | -0.474321 | -0.499032 |
| <button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button> | -2.560661 | 1.037624 | <button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button> | 1.038190 | 1.358755 |
| <button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button> | 0.175320 | 2.100909 | <button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button> | 0.022673 | 0.113755 |
| <button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button> | 0.000110 | 0.000445 | <button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button> | 0.316299 | 1.209353 |
| <button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button> | 0.021960 | 0.017250 | <button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button> | 0.019925 | 0.076182 |
| <button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button> | 0.054851 | 0.039662 | <button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button> | 0.008466 | 0.042355 |
| <button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / \|maximum drawdown\|." data-interpretation="Higher is better.">Calmar</button> | 0.128539 | 2.009372 | <button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button> | 0.013892 | 0.049303 |
| <button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button> | -0.411428 | 0.411069 |
| <button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button> | -0.000000 | 0.000000 | <button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button> | 0.028253 | 0.123281 |
| <button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button> | 0.085172 | 0.057283 | <button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button> | 0.103088 | 0.095486 |
| <button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button> | 0.930190 | 0.801522 | <button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button> | 0.087792 | 0.742816 |
| <button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button> | 0.022361 | -0.076588 | <button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button> | 0.003856 | 0.002673 |
| <button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button> | 0.295597 | 0.283019 | <button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button> | 0.103160 | 0.095523 |
| <button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button> | 0.861635 | 0.849057 | <button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button> | 0.200340 | 0.179952 |
| <button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button> | 0.004586 | 0.003733 | <button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button> | 0.012620 | 0.011336 |
| <button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button> | 0.008319 | 0.006554 | <button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button> | 1.261138 | 6.831690 |
| <button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button> | 0.015305 | 0.010866 | <button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button> | 0.004937 | 0.025634 |
| <button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button> | 0.587873 | 0.618882 | <button type="button" class="metric-help-button" data-metric="TurnoverCoefficientVariation" data-meaning="Instability of daily traded value." data-calculation="SD(turnover) / mean(turnover)." data-interpretation="Lower is more stable; high values mean liquidity is episodic.">TurnoverCoefficientVariation</button> | 1.344649 | 0.971053 |
| <button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button> | 0.000108 | 0.000442 | <button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button> | 0.135298 | 0.026152 |
| <button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button> | 0.381539 | 0.380604 | <button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button> | 0.048200 | 0.046997 |
| <button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button> | -1.003266 | -0.663301 | <button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button> | 0.300459 | 0.287671 |
| <button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button> | -0.056194 | -0.035538 | <button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button> | 0.178899 | 0.205479 |
| <button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button> | 0.022673 | 0.113755 | <button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button> | 0.430313 | 0.621132 |
| <button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button> | 0.016828 | 0.090278 | <button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button> | 0.004606 | 0.004742 |
| <button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button> | 3.064067 | 12.610028 | <button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button> | 0.009327 | 0.009335 |
| <button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button> | 12.850960 | 4.032445 | <button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button> | 0.006503 | 0.006041 |
| <button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button> | 0.029035 | 0.123079 | <button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button> | 0.103229 | 0.095904 |
| <button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button> | -0.147782 | -0.037819 | <button type="button" class="metric-help-button" data-metric="ZeroVolumeFraction" data-meaning="Share of observations with no recorded trading volume." data-calculation="Count(volume=0)/n." data-interpretation="Lower is better.">ZeroVolumeFraction</button> | 0.000000 | 0.000000 |

</details>

<details markdown="1" class="portfolio-sensitivity">
<summary>Portfolio sensitivity</summary>

**Removing this share from curent_update_baltic**

<table class="effect-table"><thead><tr><th>Measure</th><th>Full portfolio</th><th>Portfolio without share</th><th>Change</th></tr></thead><tbody><tr><td>netSD</td><td>0.813559</td><td>0.813559</td><td>0.000000</td></tr><tr><td>OUT</td><td>96</td><td>96</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.147773</td><td>1.147918</td><td>0.000144</td></tr><tr><td>Sortino ratio</td><td>0.161492</td><td>0.161502</td><td>0.000010</td></tr></tbody></table>

The removed weight is distributed proportionally across all remaining holdings, so their weights still sum to 1.

**Adding this new share to the current portfolio**

<table class="effect-table"><thead><tr><th>Measure</th><th>Current portfolio</th><th>After adding share</th><th>Change</th></tr></thead><tbody><tr><td>TEL1L shares</td><td>0</td><td>30</td><td>+30</td></tr><tr><td>Portfolio value, EUR</td><td>9077.814812</td><td>9145.314812</td><td>67.500000</td></tr><tr><td>netSD</td><td>0.613445</td><td>0.613445</td><td>0.000000</td></tr><tr><td>OUT</td><td>73</td><td>73</td><td>+0</td></tr><tr><td>IN</td><td>0</td><td>0</td><td>+0</td></tr><tr><td>Rachev ratio</td><td>1.060654</td><td>1.060427</td><td>-0.000227</td></tr><tr><td>Sortino ratio</td><td>0.105826</td><td>0.105947</td><td>0.000121</td></tr></tbody></table>

The starting point is the unmodified current portfolio, which already contains 0 TEL1L shares. The scenario adds 30 shares from Table 1.a, resulting in 30 shares; every other holding remains unchanged.

<details markdown="1" class="dominance-components">
<summary>FSD, SSD and TSD components versus Baltic portfolios</summary>

The interactive calculation starts from one common empirical FSD grid. SSD is its cumulative integral and TSD is the cumulative integral of that SSD; neither higher-order component is loaded independently. Use the x-position slider or the mouse wheel to move the selected interval. Select one or more portfolios and, separately, any other Baltic shares. Every difference curve is the concrete analysed share component minus the selected portfolio or share component. Current and both update variants are selected by default.

<div class="dominance-explorer" data-asset="TEL1L"><p>Open this section to load the interactive curve explorer.</p></div>

<details markdown="1" class="static-dominance">
<summary>High-resolution static FSD, SSD and TSD figure</summary>

![TEL1L high-resolution stochastic dominance](figures/stock_profiles/TEL1L_FSD_SSD_TSD.png?v=1793190095)

The static figure is collapsed because the interactive plots above provide the detailed comparison. Open it to view or save a high-resolution version.

</details>

</details>

</details>

</details>

</details>

<details markdown="1" class="report-section" id="analytics-1-2">
<summary><strong>1.2. Earnings outcomes and subsequent price changes</strong></summary>

Official announcement text allowed 217 of 349 earnings releases to be classified. Higher or lower profit refers to the issuer's explicit comparison with the earlier comparable period. In line or unchanged is used only for an explicit plan, forecast, expectation or unchanged-profit statement. Loss requires an explicit realised net or operating loss.

<details markdown="1">
<summary><strong>Table 1.b. Conditional price statistics by reported profit outcome</strong></summary>

| profit_outcome | horizon | events | conditional_mean_return | conditional_variance_return | conditional_median_return | positive_return_share | conditional_mean_abnormal | conditional_variance_abnormal | conditional_median_abnormal |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Higher profit | 1d | 141 | 0.151 | 2.087 | 0.000 | 38.298 | 0.151 | 2.006 | 0.013 |
| Higher profit | 5d | 141 | -0.051 | 7.214 | -0.149 | 41.135 | -0.034 | 6.514 | -0.061 |
| Higher profit | 21d | 141 | -0.466 | 25.273 | -0.416 | 40.426 | 0.121 | 23.599 | -0.024 |
| In line / unchanged | 1d | 16 | 2.998 | 36.588 | 0.169 | 50.000 | 3.098 | 34.948 | 0.394 |
| In line / unchanged | 5d | 16 | 2.590 | 34.904 | -0.310 | 43.750 | 2.889 | 30.352 | 0.924 |
| In line / unchanged | 21d | 16 | 3.864 | 100.780 | 1.712 | 62.500 | 4.357 | 96.460 | 2.513 |
| Loss | 1d | 19 | -0.484 | 0.674 | -0.339 | 10.526 | -0.536 | 0.715 | -0.260 |
| Loss | 5d | 19 | -0.703 | 2.793 | -0.164 | 26.316 | -0.709 | 2.756 | -0.238 |
| Loss | 21d | 19 | -1.373 | 16.902 | -1.042 | 36.842 | -0.453 | 17.505 | -0.135 |
| Lower profit | 1d | 41 | -0.395 | 2.607 | 0.000 | 36.585 | -0.461 | 2.418 | -0.317 |
| Lower profit | 5d | 41 | -0.660 | 8.150 | -0.258 | 39.024 | -0.694 | 7.366 | -0.429 |
| Lower profit | 21d | 41 | -0.823 | 13.917 | -0.772 | 34.146 | -0.496 | 13.659 | -0.618 |

</details>


Means, medians and positive shares are percentages; variances are squared percentage points. Abnormal return is the share return minus the equal-weight Baltic-market return over the same horizon.

<details markdown="1">
<summary><strong>Table 1.c. Kruskal-Wallis tests across profit-outcome groups</strong></summary>

| horizon_days | groups | classified_events | kruskal_H | p_value | p_BH | conclusion |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 4 | 217 | 9.7887 | 0.0205 | 0.3681 | No adjusted evidence |
| 5 | 4 | 217 | 6.2338 | 0.1008 | 0.5008 | No adjusted evidence |
| 21 | 4 | 217 | 3.8982 | 0.2727 | 0.7551 | No adjusted evidence |

</details>


The BH adjustment covers the full family of share-level, pooled and pairwise tests. The estimates describe historical association and do not establish that an announcement caused the subsequent return.

</details>

</details>

<details markdown="1" class="analytics-group" id="analytics-2" open>
<summary><strong>2. Portfolio analytics</strong></summary>

<details markdown="1" class="report-section" id="analytics-2-1">
<summary><strong>2.1. Optimisation result</strong></summary>

The report uses five portfolio objectives. The formulas below distinguish the theoretical continuous-weight model used for each frontier from the executable Baltic allocation, where whole shares and the EUR 15,000 budget are imposed.

### Common notation

- $n$ - number of shares; $T$ - number of return observations.
- $w_j$ - portfolio weight of share $j$; $\mathbf{w}=(w_1,\ldots,w_n)^\top$.
- $r_{tj}$ - return of share $j$ at time $t$; $r_{p,t}=\sum_{j=1}^{n}w_jr_{tj}$ - portfolio return.
- $\boldsymbol{\mu}$ - vector of sample mean returns; $\boldsymbol{\Sigma}$ - sample covariance matrix.
- $\mu_0$ - required minimum mean return; $\alpha=0.95$ - tail confidence level.
- $p_j$ - latest share price; $q_j$ - final whole-share quantity; $q_j^{(0)}$ - current quantity; $B=15{,}000$ EUR.

All five continuous-weight models use the same basic feasible set:

$$\mathcal W(\mu_0)=\left\{\mathbf w:\sum_{j=1}^{n}w_j=1,\;w_j\ge0,\;\boldsymbol{\mu}^{\top}\mathbf w\ge\mu_0\right\}.$

Thus the portfolio is fully invested, short selling is forbidden, and expected return must reach the selected frontier level.

### Markowitz minimum-variance portfolio

$$\boxed{\min_{\mathbf w\in\mathcal W(\mu_0)}\;\mathbf w^{\top}\boldsymbol{\Sigma}\mathbf w}$$

The objective is portfolio variance. Repeating the optimisation for increasing $\mu_0$ produces the Markowitz efficient frontier. Standard deviation shown in the figures is $\sqrt{\mathbf w^{\top}\boldsymbol{\Sigma}\mathbf w}$.

### Mean absolute deviation (MAD) portfolio

Introduce $u_t\ge0$ for the absolute deviation on date $t$:

$$\boxed{\min_{\mathbf w,\mathbf u}\;\frac1T\sum_{t=1}^{T}u_t}$$

subject to

$$u_t\ge r_{p,t}-\bar r_p,\qquad u_t\ge-(r_{p,t}-\bar r_p),\qquad t=1,\ldots,T,$$

$$\bar r_p=\boldsymbol{\mu}^{\top}\mathbf w,\qquad \mathbf w\in\mathcal W(\mu_0).$$

At the optimum, $u_t=|r_{p,t}-\bar r_p|$, so the objective is the mean absolute deviation of portfolio returns.

### Minimax portfolio

Introduce $L$ as the largest loss observed in any historical scenario:

$$\boxed{\min_{\mathbf w,L}\;L}$$

subject to

$$L\ge-r_{p,t}=-\sum_{j=1}^{n}w_jr_{tj},\qquad t=1,\ldots,T,$$

$$L\ge0,\qquad \mathbf w\in\mathcal W(\mu_0).$$

The solution minimises the worst one-period loss present in the estimation sample.

### Robust mean-CVaR portfolio

For each market regime $k=1,\ldots,K$, let $\mathcal T_k$ contain its observations. With regime-specific VaR variable $z_k$ and excess-loss variables $\xi_{tk}$, solve

$$\boxed{\min_{\mathbf w,\eta,\mathbf z,\boldsymbol\xi}\;\eta}$$

subject to

$$z_k+\frac{1}{(1-\alpha)|\mathcal T_k|}\sum_{t\in\mathcal T_k}\xi_{tk}\le\eta,\qquad k=1,\ldots,K,$$

$$\xi_{tk}\ge-r_{p,t}-z_k,\qquad \xi_{tk}\ge0,$$

$$\min_{k=1,\ldots,K}\left(\boldsymbol\mu_k^{\top}\mathbf w\right)\ge\mu_0,\qquad \mathbf w\in\mathcal W(-\infty).$$

Here $\eta$ is the worst regime's empirical CVaR. The model therefore protects against the regime with the largest expected tail loss while requiring the mean-return floor in every regime.

### netSD portfolio

For dominance order $s\in\{1,2,3\}$, let $d_{pk}^{(s)}=1$ when candidate portfolio $p$ dominates reference entity $k$, and $0$ otherwise. Define

$$\operatorname{OUT}(p)=\sum_{k}\sum_{s=1}^{3}d_{pk}^{(s)},\qquad\operatorname{IN}(p)=\sum_{k}\sum_{s=1}^{3}d_{kp}^{(s)},$$

$$\operatorname{netSD}(p)=\frac{\operatorname{OUT}(p)-\operatorname{IN}(p)}{D},$$

where $D$ is the fixed normalising denominator used for every candidate. The optimisation problem is

$$\boxed{\max_{\mathbf w}\;\operatorname{netSD}(\mathbf w)}$$

subject to

$$\sum_{j=1}^{n}w_j=1,\qquad w_j\ge0,\qquad\boldsymbol\mu^{\top}\mathbf w\ge\mu_{\mathrm{Current}},$$

$$w_j=0\quad\text{if share }j\text{ has individual }\operatorname{netSD}_j\le0\text{ or is outside the eligible primary-list universe}.$$

OUT counts dominance relations won; IN counts dominance relations lost. A larger netSD is better. This objective is discrete and non-convex, so ISRES searches numerically and the report states the best solution found rather than a proof of the global optimum.

### Executable whole-share allocations

The continuous solution is converted to quantities using

$$q_j\in\mathbb Z_{\ge0},\qquad\sum_{j=1}^{n}p_jq_j\le B,\qquad w_j=\frac{p_jq_j}{\sum_{i=1}^{n}p_iq_i}.$$

For **sales allowed**, no current-position lower bound is imposed. For **no sales**, the additional restriction is

$$q_j\ge q_j^{(0)},\qquad j=1,\ldots,n.$$

Both **Update2 penalty** portfolios use a genuinely different objective. Let $N(\mathbf q)=\sum_j\mathbb{1}(q_j>0)$ be the number of active positions, $N_{\mathrm{eff}}(\mathbf w)=1/\sum_jw_j^2$ the effective number of positions, and $a_j$ the five-year average annual dividend per share. Define the dividend-shortfall penalty

$$P_D(\mathbf q)=\sum_{j:q_j>0}\frac{\max(10-a_jq_j,0)}{10}.$$

The new objective is

$$\boxed{\max_{\mathbf q}\;J(\mathbf q)=\operatorname{netSD}(\mathbf q)-0.00015N(\mathbf q)^2-0.001N_{\mathrm{eff}}(\mathbf w)-0.006P_D(\mathbf q)}$$

subject to the matching sales-allowed or no-sales constraints, the EUR 15,000 budget, long-only holdings, the minimum mean return and the eligibility screen. Consequently, a simpler portfolio may be selected even when its raw netSD is slightly lower. A zero-dividend active position contributes the full 0.006 dividend penalty; a position expected to generate EUR 5 contributes 0.003; a position producing at least EUR 10 contributes zero.

### Current numerical result

The best numerical solution found has netSD 0.830508 (OUT=98, IN=0, denominator=118). It is evaluated against one fixed reference network containing 55 quality-approved shares, the current portfolio, and the ten earlier training/full-data portfolios.

Current-portfolio netSD is 0.618644; the optimised-portfolio value is 0.830508. Historical gross dividends for the final whole-share quantities are EUR 2276.88. These historical dividends are a counterfactual, before tax and without reinvestment, rather than a forecast.

</details>

<details markdown="1" class="report-section" id="analytics-2-2">
<summary><strong>2.2. Decision guide</strong></summary>

**Execution scenario when no current holding is sold: Update2 penalty, no sales. Use Table 1.a or Table 2.d only. For KNE1L the current recommendation is to buy 514 shares, increasing the holding from 928 to 1,442 shares.** This is a model output rather than personalised investment advice.

The unpenalised Baltic_NetSD sales-allowed allocation and the legacy curent_update_baltic allocation are comparison scenarios. Their quantities must not be mixed with the preferred Update2 penalty no-sales plan.

The update2_penalty_sell and update2_penalty_no_sell alternatives directly maximise netSD minus penalties for the squared number of active positions, the effective position count 1/sum(w^2), and active positions whose five-year-average annual dividend cash is below EUR 10. Rachev and Sortino are reported but are not optimisation terms.

The Priority field in Table 1.a and the single-share-addition experiments are diagnostics, not a trade execution sequence. Technical BUY/HOLD/SELL signals are timing diagnostics and do not override the portfolio optimiser.

Suggested execution process: (1) refresh prices, cash and order-book depth; (2) select one scenario; (3) review liquidity and transaction costs; (4) place limit orders, splitting illiquid trades; (5) recalculate quantities and residual cash after fills. In-sample results and the unstable holdout test require paper trading or walk-forward validation before relying on the allocation.

Return and technical analysis uses common observations through 2026-10-27; valuation prices and trade quantities are refreshed through 2026-10-27. The 70/30 validation uses an earlier fixed split and is reported separately from the complete-period analysis.

<details markdown="1">
<summary><strong>Table 2.a. Optimisation objective and constraint checks</strong></summary>

| Component | Restriction or objective | Obtained value | Result |
| --- | --- | --- | --- |
| Objective: netSD | maximum value found numerically | 0.84033613 | Reported |
| Budget | invested <= 15000 | 14928.98300609 | Satisfied |
| Residual cash | >= 0 | 71.01699391 | Satisfied |
| Full-investment weights | sum(w) = 1 | 1.00000000 | Satisfied |
| Long only | min(w) >= 0 | 0.00000000 | Satisfied |
| Sales | existing positions may be reduced to zero | -330.00000000 | Allowed |
| Minimum mean | >= 0.00035624 | 0.00051498 | Satisfied |
| Historical dividends | descriptive only; excluded from objective | 2232.89938560 | EUR historical gross cash |

</details>


<details markdown="1">
<summary><strong>Table 2.b. Alternative unpenalised Baltic_NetSD allocation — sales allowed</strong></summary>

| Share | Company | Market | Last price | Target weight | Current shares | Target shares | Change | Direction | Invested EUR | 5y avg dividend/share EUR | 5y avg dividend yield at ex-date price | Current quantity: avg annual dividends EUR | Update quantity: avg annual dividends EUR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| AIR | Airobot Technologies | TLN | 1.8500 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| AKO1L | Akola Group | VLN | 1.8550 | 1.41% | 0 | 113 | +113 | BUY | 209.62 | 0.0355 | 1.97% | 0.00 | 4.01 |
| AMG1L | Amber Grid | VLN | 1.2000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0704 | 5.04% | 0.00 | 0.00 |
| APG1L | Apranga | VLN | 3.7900 | 7.06% | 200 | 279 | +79 | BUY | 1057.41 | 0.3060 | 6.89% | 61.20 | 85.37 |
| ARC1T | Arco Vara | TLN | 1.0250 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0420 | 1.88% | 0.00 | 0.00 |
| AUG1L | AUGA group | VLN | 0.0684 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| BAL1R | Amber Latvijas balzams | RIG | 0.8280 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.3600 | 2.68% | 0.00 | 0.00 |
| BERCM | Bercman Technologies | TLN | 1.0450 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| CPA1T | Coop Pank | TLN | 2.3500 | 1.81% | 0 | 115 | +115 | BUY | 270.25 | 0.0594 | 2.26% | 0.00 | 6.83 |
| CTS1L | City Service | VLN | 0.1560 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| DGR1R | DelfinGroup | RIG | 1.7250 | 4.51% | 0 | 392 | +392 | BUY | 676.20 | 0.0957 | 5.17% | 0.00 | 37.52 |
| EFT1T | EfTEN Real Estate Fund | TLN | 19.4000 | 8.44% | 0 | 65 | +65 | BUY | 1261.00 | 1.0525 | 4.58% | 0.00 | 68.41 |
| EWA1L | East West Agro | VLN | 11.5000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.7800 | 3.84% | 0.00 | 0.00 |
| GRG1L | Grigeo Group | VLN | 1.0050 | 7.66% | 543 | 1143 | +600 | BUY | 1148.71 | 0.0560 | 4.45% | 30.41 | 64.01 |
| HAE1T | Harju Elekter Group | TLN | 5.2400 | 3.78% | 100 | 108 | +8 | BUY | 565.92 | 0.1440 | 2.23% | 14.40 | 15.55 |
| HPR1T | Hepsor | TLN | 4.3200 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.1060 | 1.75% | 0.00 | 0.00 |
| IDX1R | INDEXO | RIG | 2.7100 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| IGN1L | Ignitis grupė | VLN | 21.6000 | 10.45% | 0 | 72 | +72 | BUY | 1555.20 | 1.1694 | 3.98% | 0.00 | 84.20 |
| INC1L | INVL Technology | VLN | 5.4000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| INL1L | INVL Baltic Farmland | VLN | 7.1000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.1500 | 1.52% | 0.00 | 0.00 |
| INR1L | INVL Baltic Real Estate | VLN | 2.7000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0960 | 2.91% | 0.00 | 0.00 |
| IVL1L | Invalda INVL | VLN | 26.0000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.6000 | 2.16% | 0.00 | 0.00 |
| KNE1L | KN Energies | VLN | 0.4760 | 5.36% | 928 | 1688 | +760 | BUY | 803.49 | 0.0129 | 4.01% | 11.95 | 21.74 |
| KNR1L | Kauno energija | VLN | 2.1000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0189 | 1.75% | 0.00 | 0.00 |
| LGD1L | LITGRID | VLN | 1.1300 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0342 | 4.02% | 0.00 | 0.00 |
| LHV1T | LHV Group | TLN | 3.2700 | 0.29% | 0 | 13 | +13 | BUY | 42.51 | 0.1660 | 2.47% | 0.00 | 2.16 |
| LINDA | Linda Nektar | TLN | 4.0600 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0680 | 0.70% | 0.00 | 0.00 |
| MAGIC | TextMagic | TLN | 1.7850 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0980 | 3.02% | 0.00 | 0.00 |
| MDARA | MADARA Cosmetics | RIG | 10.5000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.5500 | 3.98% | 0.00 | 0.00 |
| MODE | Modera | TLN | 5.0000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| MOLNR | J. Molner | TLN | 20.6000 | 7.11% | 0 | 51 | +51 | BUY | 1050.60 | 0.0000 | 0.00% | 0.00 | 0.00 |
| MRK1T | Merko Ehitus | TLN | 26.9500 | 8.48% | 20 | 47 | +27 | BUY | 1266.65 | 1.2900 | 4.99% | 25.80 | 60.63 |
| NCN1T | Nordecon | TLN | 0.5380 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| NEOFI | NEO Finance | VLN | 2.2000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0120 | 0.55% | 0.00 | 0.00 |
| PKG1T | Pro Kapital Grupp | TLN | 0.5300 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| PRF1T | PRFoods | TLN | 0.0500 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| PZV1L | Pieno žvaigždės | VLN | 1.7950 | 4.84% | 0 | 404 | +404 | BUY | 725.18 | 0.0840 | 5.63% | 0.00 | 33.94 |
| ROE1L | Artea Bankas | VLN | 0.8770 | 0.61% | 416 | 105 | -311 | SELL | 92.08 | 0.0434 | 4.62% | 18.05 | 4.56 |
| RSU1L | Rokiškio sūris | VLN | 4.3600 | 0.77% | 50 | 26 | -24 | SELL | 113.36 | 0.1600 | 3.95% | 8.00 | 4.16 |
| SAF1R | SAF Tehnika | RIG | 16.1500 | 0.00% | 100 | 0 | -100 | SELL | 0.00 | 0.1360 | 0.00% | 13.60 | 0.00 |
| SAUNA | Saunum Group | TLN | 2.4700 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| SCM1R | Siguldas ciltslietu un mākslīgās apsēklošanas stacija | RIG | 7.0000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0420 | 0.41% | 0.00 | 0.00 |
| SFG1T | Silvano Fashion Group | TLN | 1.0600 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| SKN1T | Nordic Fibreboard | TLN | 0.4600 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| TAL1T | Tallink Grupp | TLN | 0.6450 | 3.95% | 700 | 918 | +218 | BUY | 592.11 | 0.0300 | 4.84% | 21.00 | 27.54 |
| TEL1L | Telia Lietuva | VLN | 2.2500 | 0.51% | 0 | 33 | +33 | BUY | 74.25 | 0.1000 | 4.35% | 0.00 | 3.30 |
| TKM1T | TKM Grupp | TLN | 8.9000 | 1.93% | 288 | 32 | -256 | SELL | 284.80 | 0.6660 | 5.38% | 191.81 | 21.31 |
| TPD1T | Trigon Property Development | TLN | 0.5200 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0320 | 0.00% | 0.00 | 0.00 |
| TSM1T | Tallinna Sadam | TLN | 1.1980 | 0.00% | 330 | 0 | -330 | SELL | 0.00 | 0.0778 | 4.59% | 25.67 | 0.00 |
| TVE1T | Tallinna Vesi | TLN | 10.8500 | 3.15% | 0 | 43 | +43 | BUY | 466.55 | 0.5180 | 3.53% | 0.00 | 22.27 |
| UTR1L | Utenos trikotažas | VLN | 0.3300 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0000 | 0.00% | 0.00 | 0.00 |
| VBL1L | Vilniaus baldai | VLN | 9.8000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.3120 | 2.90% | 0.00 | 0.00 |
| VIRSI | VIRŠI-A | RIG | 4.4200 | 7.44% | 0 | 252 | +252 | BUY | 1113.84 | 0.0685 | 1.29% | 0.00 | 17.26 |
| VLP1L | Vilkyškių pieninė | VLN | 15.7500 | 10.44% | 42 | 99 | +57 | BUY | 1559.25 | 0.3090 | 3.57% | 12.98 | 30.59 |
| ZMP1L | Žemaitijos pienas | VLN | 2.9000 | 0.00% | 0 | 0 | +0 | HOLD | 0.00 | 0.0240 | 1.14% | 0.00 | 0.00 |
| TOTAL |  |  |  | 100.00% | 3717 | 5998 | +2281 |  | 14928.98 |  | 3.89% | 434.88 | 615.36 |

</details>


The five-year average yield uses ex-dividend amounts divided by the latest available price on or before each ex-date. Current- and update-quantity dividend amounts use the five-year average annual dividend per share; they are historical gross scenarios, not forecasts.

allocation_change_direction describes the optimiser's target relative to current holdings. It is not the current execution recommendation; use current_execution_decision in the canonical trade table and interactive share profiles for that purpose.

<details markdown="1" class="trade-decision-section">
<summary><strong>Table 2.c. Alternative unpenalised Baltic_NetSD allocation — sales allowed</strong></summary>

<table class="trade-decision-table"><thead><tr><th><span>Phase</span></th><th><span>Share</span></th><th><span>Company</span></th><th><span>Last price</span></th><th><span>Indicative buy ≤</span></th><th><span>Indicative sell ≥</span></th><th><span>Bollinger zone</span></th><th><span>Technical timing</span></th><th><span>Target weight</span></th><th><span>Current shares</span></th><th><span>Allocation change</span></th><th><span>Trade EUR</span></th><th><span>Target shares</span></th><th><span>Final value EUR</span></th><th><span>5y avg dividend/share EUR</span></th><th><span>5y avg dividend yield at ex-date price</span></th><th><span>Current quantity: avg annual dividends EUR</span></th><th><span>Update quantity: avg annual dividends EUR</span></th><th><span>Current execution decision</span></th><th><span>Historical dividends EUR</span></th></tr></thead><tbody><tr><td>1</td><td>RSU1L</td><td>Rokiškio sūris</td><td>4.3600</td><td>4.3747 (+0.34%)</td><td>4.5573 (+4.53%)</td><td>BUY</td><td>BUY</td><td>0.77%</td><td>50</td><td>-24</td><td>-104.64</td><td>26</td><td>113.36</td><td>0.1600</td><td>3.95%</td><td>8.00</td><td>4.16</td><td>SELL</td><td>18.20</td></tr><tr><td>1</td><td>ROE1L</td><td>Artea Bankas</td><td>0.8770</td><td>0.8702 (-0.77%)</td><td>0.9006 (+2.69%)</td><td>HOLD</td><td>HOLD</td><td>0.61%</td><td>416</td><td>-311</td><td>-272.75</td><td>105</td><td>92.08</td><td>0.0434</td><td>4.62%</td><td>18.05</td><td>4.56</td><td>SELL</td><td>14.28</td></tr><tr><td>1</td><td>TSM1T</td><td>Tallinna Sadam</td><td>1.1980</td><td>1.1968 (-0.10%)</td><td>1.2170 (+1.58%)</td><td>HOLD</td><td>HOLD</td><td>0.00%</td><td>330</td><td>-330</td><td>-395.34</td><td>0</td><td>0.00</td><td>0.0778</td><td>4.59%</td><td>25.67</td><td>0.00</td><td>SELL</td><td>0.00</td></tr><tr><td>1</td><td>SAF1R</td><td>SAF Tehnika</td><td>16.1500</td><td>16.0019 (-0.92%)</td><td>17.0731 (+5.72%)</td><td>HOLD</td><td>HOLD</td><td>0.00%</td><td>100</td><td>-100</td><td>-1615.00</td><td>0</td><td>0.00</td><td>0.1360</td><td>0.00%</td><td>13.60</td><td>0.00</td><td>SELL</td><td>0.00</td></tr><tr><td>1</td><td>TKM1T</td><td>TKM Grupp</td><td>8.9000</td><td>8.8530 (-0.53%)</td><td>9.0660 (+1.87%)</td><td>HOLD</td><td>HOLD</td><td>1.93%</td><td>288</td><td>-256</td><td>-2278.40</td><td>32</td><td>284.80</td><td>0.6660</td><td>5.38%</td><td>191.81</td><td>21.31</td><td>SELL</td><td>84.80</td></tr><tr><td>2</td><td>IGN1L</td><td>Ignitis grupė</td><td>21.6000</td><td>21.5903 (-0.04%)</td><td>21.8547 (+1.18%)</td><td>HOLD</td><td>HOLD</td><td>10.45%</td><td>0</td><td>+72</td><td>1555.20</td><td>72</td><td>1555.20</td><td>1.1694</td><td>3.98%</td><td>0.00</td><td>84.20</td><td>WAIT</td><td>282.17</td></tr><tr><td>2</td><td>EFT1T</td><td>EfTEN Real Estate Fund</td><td>19.4000</td><td>19.3209 (-0.41%)</td><td>19.6591 (+1.34%)</td><td>HOLD</td><td>HOLD</td><td>8.44%</td><td>0</td><td>+65</td><td>1261.00</td><td>65</td><td>1261.00</td><td>1.0525</td><td>4.58%</td><td>0.00</td><td>68.41</td><td>WAIT</td><td>290.07</td></tr><tr><td>2</td><td>VIRSI</td><td>VIRŠI-A</td><td>4.4200</td><td>nan (+nan%)</td><td>nan (+nan%)</td><td>HOLD</td><td>nan</td><td>7.44%</td><td>0</td><td>+252</td><td>1113.84</td><td>252</td><td>1113.84</td><td>0.0685</td><td>1.29%</td><td>0.00</td><td>17.26</td><td>WAIT</td><td>68.62</td></tr><tr><td>2</td><td>MOLNR</td><td>J. Molner</td><td>20.6000</td><td>19.2741 (-6.44%)</td><td>22.9859 (+11.58%)</td><td>HOLD</td><td>HOLD</td><td>7.11%</td><td>0</td><td>+51</td><td>1050.60</td><td>51</td><td>1050.60</td><td>0.0000</td><td>0.00%</td><td>0.00</td><td>0.00</td><td>WAIT</td><td>0.00</td></tr><tr><td>2</td><td>VLP1L</td><td>Vilkyškių pieninė</td><td>15.7500</td><td>15.1073 (-4.08%)</td><td>15.9277 (+1.13%)</td><td>HOLD</td><td>HOLD</td><td>10.44%</td><td>42</td><td>+57</td><td>897.75</td><td>99</td><td>1559.25</td><td>0.3090</td><td>3.57%</td><td>12.98</td><td>30.59</td><td>WAIT</td><td>0.00</td></tr><tr><td>2</td><td>MRK1T</td><td>Merko Ehitus</td><td>26.9500</td><td>26.9505 (+0.00%)</td><td>27.1795 (+0.85%)</td><td>BUY</td><td>HOLD</td><td>8.48%</td><td>20</td><td>+27</td><td>727.65</td><td>47</td><td>1266.65</td><td>1.2900</td><td>4.99%</td><td>25.80</td><td>60.63</td><td>WAIT</td><td>256.15</td></tr><tr><td>2</td><td>PZV1L</td><td>Pieno žvaigždės</td><td>1.7950</td><td>1.7587 (-2.02%)</td><td>1.8193 (+1.35%)</td><td>HOLD</td><td>HOLD</td><td>4.84%</td><td>0</td><td>+404</td><td>725.18</td><td>404</td><td>725.18</td><td>0.0840</td><td>5.63%</td><td>0.00</td><td>33.94</td><td>WAIT</td><td>169.68</td></tr><tr><td>2</td><td>DGR1R</td><td>DelfinGroup</td><td>1.7250</td><td>1.6061 (-6.89%)</td><td>1.7774 (+3.04%)</td><td>HOLD</td><td>HOLD</td><td>4.51%</td><td>0</td><td>+392</td><td>676.20</td><td>392</td><td>676.20</td><td>0.0957</td><td>5.17%</td><td>0.00</td><td>37.52</td><td>WAIT</td><td>128.26</td></tr><tr><td>2</td><td>GRG1L</td><td>Grigeo Group</td><td>1.0050</td><td>0.9956 (-0.94%)</td><td>1.0223 (+1.72%)</td><td>HOLD</td><td>HOLD</td><td>7.66%</td><td>543</td><td>+600</td><td>603.00</td><td>1143</td><td>1148.71</td><td>0.0560</td><td>4.45%</td><td>30.41</td><td>64.01</td><td>WAIT</td><td>194.31</td></tr><tr><td>2</td><td>TVE1T</td><td>Tallinna Vesi</td><td>10.8500</td><td>10.8103 (-0.37%)</td><td>10.9247 (+0.69%)</td><td>HOLD</td><td>HOLD</td><td>3.15%</td><td>0</td><td>+43</td><td>466.55</td><td>43</td><td>466.55</td><td>0.5180</td><td>3.53%</td><td>0.00</td><td>22.27</td><td>WAIT</td><td>83.42</td></tr><tr><td>2</td><td>KNE1L</td><td>KN Energies</td><td>0.4760</td><td>0.4755 (-0.11%)</td><td>0.4893 (+2.80%)</td><td>HOLD</td><td>HOLD</td><td>5.36%</td><td>928</td><td>+760</td><td>361.76</td><td>1688</td><td>803.49</td><td>0.0129</td><td>4.01%</td><td>11.95</td><td>21.74</td><td>WAIT</td><td>108.71</td></tr><tr><td>2</td><td>APG1L</td><td>Apranga</td><td>3.7900</td><td>3.7827 (-0.19%)</td><td>3.8553 (+1.72%)</td><td>HOLD</td><td>HOLD</td><td>7.06%</td><td>200</td><td>+79</td><td>299.41</td><td>279</td><td>1057.41</td><td>0.3060</td><td>6.89%</td><td>61.20</td><td>85.37</td><td>WAIT</td><td>287.37</td></tr><tr><td>2</td><td>CPA1T</td><td>Coop Pank</td><td>2.3500</td><td>2.3081 (-1.78%)</td><td>2.3899 (+1.70%)</td><td>HOLD</td><td>HOLD</td><td>1.81%</td><td>0</td><td>+115</td><td>270.25</td><td>115</td><td>270.25</td><td>0.0594</td><td>2.26%</td><td>0.00</td><td>6.83</td><td>WAIT</td><td>30.70</td></tr><tr><td>2</td><td>AKO1L</td><td>Akola Group</td><td>1.8550</td><td>1.7623 (-5.00%)</td><td>1.8762 (+1.14%)</td><td>HOLD</td><td>HOLD</td><td>1.41%</td><td>0</td><td>+113</td><td>209.62</td><td>113</td><td>209.62</td><td>0.0355</td><td>1.97%</td><td>0.00</td><td>4.01</td><td>WAIT</td><td>0.00</td></tr><tr><td>2</td><td>TAL1T</td><td>Tallink Grupp</td><td>0.6450</td><td>0.6419 (-0.48%)</td><td>0.6502 (+0.81%)</td><td>HOLD</td><td>HOLD</td><td>3.95%</td><td>700</td><td>+218</td><td>140.61</td><td>918</td><td>592.11</td><td>0.0300</td><td>4.84%</td><td>21.00</td><td>27.54</td><td>WAIT</td><td>137.70</td></tr><tr><td>2</td><td>TEL1L</td><td>Telia Lietuva</td><td>2.2500</td><td>2.2048 (-2.01%)</td><td>2.3022 (+2.32%)</td><td>HOLD</td><td>HOLD</td><td>0.51%</td><td>0</td><td>+33</td><td>74.25</td><td>33</td><td>74.25</td><td>0.1000</td><td>4.35%</td><td>0.00</td><td>3.30</td><td>SKIP</td><td>10.23</td></tr><tr><td>2</td><td>LHV1T</td><td>LHV Group</td><td>3.2700</td><td>3.2468 (-0.71%)</td><td>3.2947 (+0.75%)</td><td>HOLD</td><td>HOLD</td><td>0.29%</td><td>0</td><td>+13</td><td>42.51</td><td>13</td><td>42.51</td><td>0.1660</td><td>2.47%</td><td>0.00</td><td>2.16</td><td>SKIP</td><td>5.59</td></tr><tr><td>2</td><td>HAE1T</td><td>Harju Elekter Group</td><td>5.2400</td><td>5.0748 (-3.15%)</td><td>5.4732 (+4.45%)</td><td>HOLD</td><td>HOLD</td><td>3.78%</td><td>100</td><td>+8</td><td>41.92</td><td>108</td><td>565.92</td><td>0.1440</td><td>2.23%</td><td>14.40</td><td>15.55</td><td>SKIP</td><td>62.64</td></tr><tr><td></td><td>TOTAL</td><td></td><td></td><td></td><td></td><td></td><td></td><td>100.00%</td><td>3717</td><td>+2281</td><td>5851.17</td><td>5998</td><td>14928.98</td><td></td><td>3.89%</td><td>434.88</td><td>615.36</td><td></td><td>2232.90</td></tr></tbody></table>

Allocation change is the optimiser's target quantity, not an instruction to trade immediately. Current execution decision is the only action recommendation: BUY requires a material allocation increase and BUY technical timing; WAIT means timing does not support the planned increase; SKIP means the purchase is below EUR 100 or below 1% target weight; SELL follows a negative allocation change; zero change is HOLD. The Bollinger zone is diagnostic only.

</details>

<details markdown="1" class="trade-decision-section">
<summary><strong>Table 2.d. Preferred execution plan — Update2 penalty, no sales</strong></summary>

<table class="trade-decision-table retained-improvement-table"><thead><tr><th><span>Share</span></th><th><span>Company</span></th><th><span>Last price</span></th><th><span>Current shares</span></th><th><span>Add shares</span></th><th><span>Target shares</span></th><th><span>Additional investment EUR</span></th><th><span>Final value EUR</span></th><th><span>Target weight</span></th><th><span>2025 dividend/share</span></th><th><span>Theoretical 2025 dividends EUR</span></th><th><span>2026 dividend/share</span></th><th><span>Theoretical 2026 dividends EUR</span></th><th><span>Historical theoretical dividends EUR</span></th><th><span>Technical timing</span></th><th><span>Current execution decision</span></th><th><span>5y avg dividend/share EUR</span></th><th><span>5y avg dividend yield at ex-date price</span></th><th><span>Current quantity: avg annual dividends EUR</span></th><th><span>Update quantity: avg annual dividends EUR</span></th></tr></thead><tbody><tr><td>RSU1L</td><td>Rokiškio sūris</td><td>4.3600</td><td>50</td><td>+117</td><td>167</td><td>510.12</td><td>728.12</td><td>4.86%</td><td>0.2000</td><td>33.40</td><td>0.2000</td><td>33.40</td><td>116.90</td><td>BUY</td><td>BUY</td><td>0.1600</td><td>3.95%</td><td>8.00</td><td>26.72</td></tr><tr><td>GRG1L</td><td>Grigeo Group</td><td>1.0050</td><td>543</td><td>+487</td><td>1030</td><td>489.43</td><td>1035.15</td><td>6.90%</td><td>0.0000</td><td>0.00</td><td>0.0500</td><td>51.50</td><td>175.10</td><td>HOLD</td><td>WAIT</td><td>0.0560</td><td>4.45%</td><td>30.41</td><td>57.68</td></tr><tr><td>MRK1T</td><td>Merko Ehitus</td><td>26.9500</td><td>20</td><td>+18</td><td>38</td><td>485.10</td><td>1024.10</td><td>6.95%</td><td>1.9000</td><td>72.20</td><td>1.2500</td><td>47.50</td><td>207.10</td><td>HOLD</td><td>WAIT</td><td>1.2900</td><td>4.99%</td><td>25.80</td><td>49.02</td></tr><tr><td>VLP1L</td><td>Vilkyškių pieninė</td><td>15.7500</td><td>42</td><td>+30</td><td>72</td><td>472.50</td><td>1134.00</td><td>7.62%</td><td>0.0000</td><td>0.00</td><td>0.0000</td><td>0.00</td><td>0.00</td><td>HOLD</td><td>WAIT</td><td>0.3090</td><td>3.57%</td><td>12.98</td><td>22.25</td></tr><tr><td>TKM1T</td><td>TKM Grupp</td><td>8.9000</td><td>288</td><td>+50</td><td>338</td><td>445.00</td><td>3008.20</td><td>20.10%</td><td>0.6500</td><td>219.70</td><td>0.6000</td><td>202.80</td><td>895.70</td><td>HOLD</td><td>WAIT</td><td>0.6660</td><td>5.38%</td><td>191.81</td><td>225.11</td></tr><tr><td>MOLNR</td><td>J. Molner</td><td>20.6000</td><td>0</td><td>+21</td><td>21</td><td>432.60</td><td>432.60</td><td>2.97%</td><td>0.0000</td><td>0.00</td><td>0.0000</td><td>0.00</td><td>0.00</td><td>HOLD</td><td>WAIT</td><td>0.0000</td><td>0.00%</td><td>0.00</td><td>0.00</td></tr><tr><td>DGR1R</td><td>DelfinGroup</td><td>1.7250</td><td>0</td><td>+250</td><td>250</td><td>431.25</td><td>431.25</td><td>2.88%</td><td>0.0981</td><td>24.53</td><td>0.0699</td><td>17.48</td><td>81.80</td><td>HOLD</td><td>WAIT</td><td>0.0957</td><td>5.17%</td><td>0.00</td><td>23.93</td></tr><tr><td>APG1L</td><td>Apranga</td><td>3.7900</td><td>200</td><td>+102</td><td>302</td><td>386.58</td><td>1144.58</td><td>7.65%</td><td>0.2400</td><td>72.48</td><td>0.2700</td><td>81.54</td><td>311.06</td><td>HOLD</td><td>WAIT</td><td>0.3060</td><td>6.89%</td><td>61.20</td><td>92.41</td></tr><tr><td>TVE1T</td><td>Tallinna Vesi</td><td>10.8500</td><td>0</td><td>+34</td><td>34</td><td>368.90</td><td>368.90</td><td>2.50%</td><td>0.5300</td><td>18.02</td><td>0.5700</td><td>19.38</td><td>65.96</td><td>HOLD</td><td>WAIT</td><td>0.5180</td><td>3.53%</td><td>0.00</td><td>17.61</td></tr><tr><td>LHV1T</td><td>LHV Group</td><td>3.2700</td><td>0</td><td>+112</td><td>112</td><td>366.24</td><td>366.24</td><td>2.46%</td><td>0.0900</td><td>10.08</td><td>0.1700</td><td>19.04</td><td>48.16</td><td>HOLD</td><td>WAIT</td><td>0.1660</td><td>2.47%</td><td>0.00</td><td>18.59</td></tr><tr><td>HAE1T</td><td>Harju Elekter Group</td><td>5.2400</td><td>100</td><td>+69</td><td>169</td><td>361.56</td><td>885.56</td><td>5.93%</td><td>0.1500</td><td>25.35</td><td>0.2500</td><td>42.25</td><td>98.02</td><td>HOLD</td><td>WAIT</td><td>0.1440</td><td>2.23%</td><td>14.40</td><td>24.34</td></tr><tr><td>ROE1L</td><td>Artea Bankas</td><td>0.8770</td><td>416</td><td>+349</td><td>765</td><td>306.07</td><td>670.90</td><td>4.48%</td><td>0.0610</td><td>46.66</td><td>0.0000</td><td>0.00</td><td>104.04</td><td>HOLD</td><td>WAIT</td><td>0.0434</td><td>4.62%</td><td>18.05</td><td>33.20</td></tr><tr><td>CPA1T</td><td>Coop Pank</td><td>2.3500</td><td>0</td><td>+116</td><td>116</td><td>272.60</td><td>272.60</td><td>1.82%</td><td>0.0700</td><td>8.12</td><td>0.0650</td><td>7.54</td><td>30.97</td><td>HOLD</td><td>WAIT</td><td>0.0594</td><td>2.26%</td><td>0.00</td><td>6.89</td></tr><tr><td>KNE1L</td><td>KN Energies</td><td>0.4760</td><td>928</td><td>+514</td><td>1442</td><td>244.66</td><td>686.39</td><td>4.58%</td><td>0.0227</td><td>32.73</td><td>0.0286</td><td>41.24</td><td>92.86</td><td>HOLD</td><td>WAIT</td><td>0.0129</td><td>4.01%</td><td>11.95</td><td>18.57</td></tr><tr><td>TAL1T</td><td>Tallink Grupp</td><td>0.6450</td><td>700</td><td>+335</td><td>1035</td><td>216.07</td><td>667.57</td><td>4.45%</td><td>0.0600</td><td>62.10</td><td>0.0300</td><td>31.05</td><td>155.25</td><td>HOLD</td><td>WAIT</td><td>0.0300</td><td>4.84%</td><td>21.00</td><td>31.05</td></tr><tr><td>TEL1L</td><td>Telia Lietuva</td><td>2.2500</td><td>0</td><td>+30</td><td>30</td><td>67.50</td><td>67.50</td><td>0.45%</td><td>0.1100</td><td>3.30</td><td>0.1400</td><td>4.20</td><td>9.30</td><td>HOLD</td><td>SKIP</td><td>0.1000</td><td>4.35%</td><td>0.00</td><td>3.00</td></tr><tr><td>SAF1R</td><td>SAF Tehnika</td><td>16.1500</td><td>100</td><td>+0</td><td>100</td><td>0.00</td><td>1615.00</td><td>10.77%</td><td>0.0000</td><td>0.00</td><td>0.0000</td><td>0.00</td><td>0.00</td><td>HOLD</td><td>HOLD</td><td>0.1360</td><td>0.00%</td><td>13.60</td><td>13.60</td></tr><tr><td>TSM1T</td><td>Tallinna Sadam</td><td>1.1980</td><td>330</td><td>+0</td><td>330</td><td>0.00</td><td>395.34</td><td>2.64%</td><td>0.0730</td><td>24.09</td><td>0.0730</td><td>24.09</td><td>96.36</td><td>HOLD</td><td>HOLD</td><td>0.0778</td><td>4.59%</td><td>25.67</td><td>25.67</td></tr><tr><td>TOTAL</td><td></td><td></td><td>3717</td><td>+2634</td><td>6351</td><td>5856.20</td><td>14934.01</td><td>100.00%</td><td></td><td>652.76</td><td></td><td>623.01</td><td>2488.59</td><td></td><td></td><td></td><td>3.95%</td><td>434.88</td><td>689.65</td></tr></tbody></table>

This scenario retains every current holding and uses purchases only. Additional investment is the cost of the added whole shares at the latest valuation price; the final portfolio value is EUR 14934.01 and EUR 65.99 remains below the EUR 15000 ceiling. The 2025 and 2026 dividend amounts are theoretical gross cash: the recorded dividend per share for that year multiplied by the final target quantity. They are historical scenarios, before tax and without reinvestment, rather than dividend forecasts. Current execution decision remains the timing instruction.

</details>

<details markdown="1" class="trade-decision-section">
<summary><strong>Update2 penalty allocation: sales allowed</strong></summary>

<table class="trade-decision-table"><thead><tr><th><span>Share</span></th><th><span>Company</span></th><th><span>Current shares</span></th><th><span>Change</span></th><th><span>Target shares</span></th><th><span>Weight</span></th><th><span>Final value EUR</span></th><th><span>5y avg dividend/share EUR</span></th><th><span>5y avg dividend yield at ex-date price</span></th><th><span>Current quantity: avg annual dividends EUR</span></th><th><span>Update quantity: avg annual dividends EUR</span></th></tr></thead><tbody><tr><td>PZV1L</td><td>Pieno žvaigždės</td><td>0</td><td>+1030</td><td>1030</td><td>12.33%</td><td>1848.85</td><td>0.0840</td><td>5.63%</td><td>0.00</td><td>86.52</td></tr><tr><td>VLP1L</td><td>Vilkyškių pieninė</td><td>42</td><td>+66</td><td>108</td><td>11.42%</td><td>1701.00</td><td>0.3090</td><td>3.57%</td><td>12.98</td><td>33.37</td></tr><tr><td>KNE1L</td><td>KN Energies</td><td>928</td><td>+2052</td><td>2980</td><td>9.46%</td><td>1418.48</td><td>0.0129</td><td>4.01%</td><td>11.95</td><td>38.38</td></tr><tr><td>MRK1T</td><td>Merko Ehitus</td><td>20</td><td>+26</td><td>46</td><td>8.44%</td><td>1239.70</td><td>1.2900</td><td>4.99%</td><td>25.80</td><td>59.34</td></tr><tr><td>APG1L</td><td>Apranga</td><td>200</td><td>+79</td><td>279</td><td>7.06%</td><td>1057.41</td><td>0.3060</td><td>6.89%</td><td>61.20</td><td>85.37</td></tr><tr><td>EFT1T</td><td>EfTEN Real Estate Fund</td><td>0</td><td>+52</td><td>52</td><td>6.76%</td><td>1008.80</td><td>1.0525</td><td>4.58%</td><td>0.00</td><td>54.73</td></tr><tr><td>VIRSI</td><td>VIRŠI-A</td><td>0</td><td>+202</td><td>202</td><td>5.98%</td><td>892.84</td><td>0.0685</td><td>1.29%</td><td>0.00</td><td>13.83</td></tr><tr><td>GRG1L</td><td>Grigeo Group</td><td>543</td><td>+344</td><td>887</td><td>5.95%</td><td>891.43</td><td>0.0560</td><td>4.45%</td><td>30.41</td><td>49.67</td></tr><tr><td>MOLNR</td><td>J. Molner</td><td>0</td><td>+40</td><td>40</td><td>5.60%</td><td>824.00</td><td>0.0000</td><td>0.00%</td><td>0.00</td><td>0.00</td></tr><tr><td>DGR1R</td><td>DelfinGroup</td><td>0</td><td>+409</td><td>409</td><td>4.71%</td><td>705.53</td><td>0.0957</td><td>5.17%</td><td>0.00</td><td>39.15</td></tr><tr><td>HAE1T</td><td>Harju Elekter Group</td><td>100</td><td>+28</td><td>128</td><td>4.50%</td><td>670.72</td><td>0.1440</td><td>2.23%</td><td>14.40</td><td>18.43</td></tr><tr><td>AKO1L</td><td>Akola Group</td><td>0</td><td>+252</td><td>252</td><td>3.12%</td><td>467.46</td><td>0.0355</td><td>1.97%</td><td>0.00</td><td>8.94</td></tr><tr><td>TAL1T</td><td>Tallink Grupp</td><td>700</td><td>+23</td><td>723</td><td>3.11%</td><td>466.33</td><td>0.0300</td><td>4.84%</td><td>21.00</td><td>21.69</td></tr><tr><td>TEL1L</td><td>Telia Lietuva</td><td>0</td><td>+144</td><td>144</td><td>2.17%</td><td>324.00</td><td>0.1000</td><td>4.35%</td><td>0.00</td><td>14.40</td></tr><tr><td>RSU1L</td><td>Rokiškio sūris</td><td>50</td><td>+20</td><td>70</td><td>2.05%</td><td>305.20</td><td>0.1600</td><td>3.95%</td><td>8.00</td><td>11.20</td></tr><tr><td>LHV1T</td><td>LHV Group</td><td>0</td><td>+81</td><td>81</td><td>1.77%</td><td>264.87</td><td>0.1660</td><td>2.47%</td><td>0.00</td><td>13.45</td></tr><tr><td>TVE1T</td><td>Tallinna Vesi</td><td>0</td><td>+24</td><td>24</td><td>1.76%</td><td>260.40</td><td>0.5180</td><td>3.53%</td><td>0.00</td><td>12.43</td></tr><tr><td>CPA1T</td><td>Coop Pank</td><td>0</td><td>+88</td><td>88</td><td>1.39%</td><td>206.80</td><td>0.0594</td><td>2.26%</td><td>0.00</td><td>5.23</td></tr><tr><td>TKM1T</td><td>TKM Grupp</td><td>288</td><td>-266</td><td>22</td><td>1.34%</td><td>195.80</td><td>0.6660</td><td>5.38%</td><td>191.81</td><td>14.65</td></tr><tr><td>ROE1L</td><td>Artea Bankas</td><td>416</td><td>-231</td><td>185</td><td>1.09%</td><td>162.24</td><td>0.0434</td><td>4.62%</td><td>18.05</td><td>8.03</td></tr><tr><td>SAF1R</td><td>SAF Tehnika</td><td>100</td><td>-100</td><td>0</td><td>0.00%</td><td>0.00</td><td>0.1360</td><td>0.00%</td><td>13.60</td><td>0.00</td></tr><tr><td>TSM1T</td><td>Tallinna Sadam</td><td>330</td><td>-330</td><td>0</td><td>0.00%</td><td>0.00</td><td>0.0778</td><td>4.59%</td><td>25.67</td><td>0.00</td></tr><tr><td>TOTAL</td><td></td><td>3717</td><td>+4033</td><td>7750</td><td>100.00%</td><td>14911.87</td><td></td><td>4.03%</td><td>434.88</td><td>588.82</td></tr></tbody></table>

This direct penalised-netSD portfolio has netSD 0.890756, OUT=106, IN=0, 20 active positions and 10 new positions. Its penalties are 0.0600 for position count, 0.0138 for effective position count and 0.0272 for sub-EUR-10 annual dividend positions.

</details>

<details markdown="1" class="trade-decision-section">
<summary><strong>Update2 penalty allocation: no sales</strong></summary>

<table class="trade-decision-table"><thead><tr><th><span>Share</span></th><th><span>Company</span></th><th><span>Current shares</span></th><th><span>Change</span></th><th><span>Target shares</span></th><th><span>Weight</span></th><th><span>Final value EUR</span></th><th><span>5y avg dividend/share EUR</span></th><th><span>5y avg dividend yield at ex-date price</span></th><th><span>Current quantity: avg annual dividends EUR</span></th><th><span>Update quantity: avg annual dividends EUR</span></th></tr></thead><tbody><tr><td>TKM1T</td><td>TKM Grupp</td><td>288</td><td>+50</td><td>338</td><td>20.10%</td><td>3008.20</td><td>0.6660</td><td>5.38%</td><td>191.81</td><td>225.11</td></tr><tr><td>SAF1R</td><td>SAF Tehnika</td><td>100</td><td>+0</td><td>100</td><td>10.77%</td><td>1615.00</td><td>0.1360</td><td>0.00%</td><td>13.60</td><td>13.60</td></tr><tr><td>APG1L</td><td>Apranga</td><td>200</td><td>+102</td><td>302</td><td>7.65%</td><td>1144.58</td><td>0.3060</td><td>6.89%</td><td>61.20</td><td>92.41</td></tr><tr><td>VLP1L</td><td>Vilkyškių pieninė</td><td>42</td><td>+30</td><td>72</td><td>7.62%</td><td>1134.00</td><td>0.3090</td><td>3.57%</td><td>12.98</td><td>22.25</td></tr><tr><td>GRG1L</td><td>Grigeo Group</td><td>543</td><td>+487</td><td>1030</td><td>6.90%</td><td>1035.15</td><td>0.0560</td><td>4.45%</td><td>30.41</td><td>57.68</td></tr><tr><td>MRK1T</td><td>Merko Ehitus</td><td>20</td><td>+18</td><td>38</td><td>6.95%</td><td>1024.10</td><td>1.2900</td><td>4.99%</td><td>25.80</td><td>49.02</td></tr><tr><td>HAE1T</td><td>Harju Elekter Group</td><td>100</td><td>+69</td><td>169</td><td>5.93%</td><td>885.56</td><td>0.1440</td><td>2.23%</td><td>14.40</td><td>24.34</td></tr><tr><td>RSU1L</td><td>Rokiškio sūris</td><td>50</td><td>+117</td><td>167</td><td>4.86%</td><td>728.12</td><td>0.1600</td><td>3.95%</td><td>8.00</td><td>26.72</td></tr><tr><td>KNE1L</td><td>KN Energies</td><td>928</td><td>+514</td><td>1442</td><td>4.58%</td><td>686.39</td><td>0.0129</td><td>4.01%</td><td>11.95</td><td>18.57</td></tr><tr><td>ROE1L</td><td>Artea Bankas</td><td>416</td><td>+349</td><td>765</td><td>4.48%</td><td>670.90</td><td>0.0434</td><td>4.62%</td><td>18.05</td><td>33.20</td></tr><tr><td>TAL1T</td><td>Tallink Grupp</td><td>700</td><td>+335</td><td>1035</td><td>4.45%</td><td>667.57</td><td>0.0300</td><td>4.84%</td><td>21.00</td><td>31.05</td></tr><tr><td>MOLNR</td><td>J. Molner</td><td>0</td><td>+21</td><td>21</td><td>2.97%</td><td>432.60</td><td>0.0000</td><td>0.00%</td><td>0.00</td><td>0.00</td></tr><tr><td>DGR1R</td><td>DelfinGroup</td><td>0</td><td>+250</td><td>250</td><td>2.88%</td><td>431.25</td><td>0.0957</td><td>5.17%</td><td>0.00</td><td>23.93</td></tr><tr><td>TSM1T</td><td>Tallinna Sadam</td><td>330</td><td>+0</td><td>330</td><td>2.64%</td><td>395.34</td><td>0.0778</td><td>4.59%</td><td>25.67</td><td>25.67</td></tr><tr><td>TVE1T</td><td>Tallinna Vesi</td><td>0</td><td>+34</td><td>34</td><td>2.50%</td><td>368.90</td><td>0.5180</td><td>3.53%</td><td>0.00</td><td>17.61</td></tr><tr><td>LHV1T</td><td>LHV Group</td><td>0</td><td>+112</td><td>112</td><td>2.46%</td><td>366.24</td><td>0.1660</td><td>2.47%</td><td>0.00</td><td>18.59</td></tr><tr><td>CPA1T</td><td>Coop Pank</td><td>0</td><td>+116</td><td>116</td><td>1.82%</td><td>272.60</td><td>0.0594</td><td>2.26%</td><td>0.00</td><td>6.89</td></tr><tr><td>TEL1L</td><td>Telia Lietuva</td><td>0</td><td>+30</td><td>30</td><td>0.45%</td><td>67.50</td><td>0.1000</td><td>4.35%</td><td>0.00</td><td>3.00</td></tr><tr><td>TOTAL</td><td></td><td>3717</td><td>+2634</td><td>6351</td><td>100.00%</td><td>14934.01</td><td></td><td>3.95%</td><td>434.88</td><td>689.65</td></tr></tbody></table>

This direct penalised-netSD portfolio has netSD 0.806723, OUT=96, IN=0, 18 active positions and 6 new positions. Its penalties are 0.0486 for position count, 0.0112 for effective position count and 0.0254 for sub-EUR-10 annual dividend positions.

</details>


trade_shares is the optimiser's allocation change, not an instruction to trade immediately. current_execution_decision is the only action recommendation: BUY requires a material allocation increase and BUY technical timing; WAIT means timing does not support the planned increase; SKIP means the purchase is below EUR 100 or below 1% target weight; SELL follows a negative allocation change; zero change is HOLD. trade_EUR is the signed transaction amount before costs.

</details>

<details markdown="1" class="report-section" id="analytics-2-3">
<summary><strong>2.3. Portfolio sensitivity: adding or removing shares</strong></summary>

The first experiment starts from the same unmodified current portfolio and adds only the stated share quantity from Table 1.a. Rows are ranked by the change in netSD; larger is better. OUT is the number of dominance relations won, while IN is the number lost; more OUT and fewer IN are preferable.

<details markdown="1" class="add-one-comparison">
<summary><strong>Table 2.e. Ranked comparison of all individual additions</strong></summary>

| Rank | Share | Added shares | Updated value EUR | Current OUT / IN | Updated OUT / IN | Delta OUT / IN | Current netSD | Updated netSD | Delta netSD | Delta Rachev | Delta Sortino |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 1 | MOLNR | 21 | 9510.414820 | 73 / 0 | 78 / 0 | +5 / +0 | 0.613445 | 0.655462 | 0.042017 | 0.068095 | 0.020954 |
| 2 | VLP1L | 30 | 9550.314812 | 73 / 0 | 77 / 0 | +4 / +0 | 0.613445 | 0.647059 | 0.033613 | 0.021264 | 0.016271 |
| 3 | MRK1T | 18 | 9562.914826 | 73 / 0 | 76 / 0 | +3 / +0 | 0.613445 | 0.638655 | 0.025210 | 0.019807 | 0.008386 |
| 4 | GRG1L | 487 | 9567.249810 | 73 / 0 | 76 / 0 | +3 / +0 | 0.613445 | 0.638655 | 0.025210 | 0.003869 | 0.003758 |
| 5 | KNE1L | 514 | 9322.478817 | 73 / 0 | 75 / 0 | +2 / +0 | 0.613445 | 0.630252 | 0.016807 | 0.002140 | 0.004330 |
| 6 | HAE1T | 69 | 9439.374796 | 73 / 0 | 74 / 0 | +1 / +0 | 0.613445 | 0.621849 | 0.008403 | 0.005034 | -0.000865 |
| 7 | TVE1T | 34 | 9446.714825 | 73 / 0 | 74 / 0 | +1 / +0 | 0.613445 | 0.621849 | 0.008403 | 0.005001 | -0.002073 |
| 8 | RSU1L | 117 | 9587.934827 | 73 / 0 | 74 / 0 | +1 / +0 | 0.613445 | 0.621849 | 0.008403 | -0.002299 | 0.004006 |
| 9 | DGR1R | 250 | 9509.064818 | 73 / 0 | 74 / 0 | +1 / +0 | 0.613445 | 0.621849 | 0.008403 | -0.008698 | 0.001138 |
| 10 | CPA1T | 116 | 9350.414801 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | 0.001240 | -0.001694 |
| 11 | SAF1R | 0 | 9077.814812 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | 0.000000 | 0.000000 |
| 12 | TSM1T | 0 | 9077.814812 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | 0.000000 | 0.000000 |
| 13 | TEL1L | 30 | 9145.314812 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | -0.000227 | 0.000121 |
| 14 | ROE1L | 349 | 9383.887803 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | -0.001324 | 0.000624 |
| 15 | TAL1T | 335 | 9293.889805 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | -0.004265 | 0.000254 |
| 16 | LHV1T | 112 | 9444.054810 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | -0.004375 | -0.001626 |
| 17 | TKM1T | 50 | 9522.814793 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | -0.008377 | -0.004051 |
| 18 | APG1L | 102 | 9464.394808 | 73 / 0 | 73 / 0 | +0 / +0 | 0.613445 | 0.613445 | 0.000000 | -0.009552 | 0.004689 |

</details>

### Removing one share from the no-sales update

Each scenario removes one share from curent_update_baltic and proportionally rescales the remaining weights. Positive delta means that the ratio improves after removal; negative delta means that the removed share was beneficial for that criterion.

**Main result.** Removing **AKO1L** produces the largest netSD change (+0.000000); removing **TKM1T** gives the largest Rachev improvement (+0.059529); removing **TKM1T** gives the largest Sortino improvement (+0.020102). These are sensitivity results, not automatically new trade recommendations, because the three criteria can move in opposite directions.

<details markdown="1">
<summary><strong>Table 2.f. Complete netSD, Rachev and Sortino sensitivity</strong></summary>

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

</details>

<details markdown="1" class="report-section" id="analytics-2-4">
<summary><strong>2.4. Portfolio allocation comparison</strong></summary>

<details markdown="1" open>
<summary><strong>Box-and-whisker comparison of portfolio returns</strong></summary>

The three panels compare Current, both final update portfolios and the S&P 500 over the complete period, the first 70% and the held-out final 30%. The box is the interquartile range, the central line is the median, the diamond is the mean, whiskers extend to 1.5 interquartile ranges and separate points are tail observations. All panels use the same vertical scale. Post-hoc letters use paired Wilcoxon signed-rank tests with Holm correction within each panel (α = 0.05): portfolios sharing at least one letter are not significantly different; portfolios without a common letter are significantly different.

![Portfolio return box-and-whisker comparison](figures/scenario_portfolio_boxplots.png)

</details>



current_execution_decision is the only action recommendation. BUY requires a material allocation increase and BUY technical timing; WAIT means timing does not support the planned increase; SKIP means the proposed purchase is below EUR 100 or below 1% target weight; HOLD means no allocation change; SELL means a negative allocation change. Diagnostic priority is not an execution order. Dividend columns use official 2025 and 2026 payments.

curent_update_baltic keeps every currently held share, permits purchases only, and uses the EUR 15,000 ceiling. Its calculated netSD is 0.815126, with OUT=97 and IN=0; the remaining cash is EUR 74.28.

<details markdown="1">
<summary><strong>Table 2.g. update2_penalty_sell: direct penalised-netSD allocation (sales allowed)</strong></summary>

| asset | name | last_price | target_weight_percent | current_shares | trade_shares | target_shares | invested_EUR | average_annual_dividend_per_share_2022_2026 | average_dividend_yield_percent | current_avg_annual_dividend_EUR | update_avg_annual_dividend_EUR | historical_dividend_cash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| PZV1L | Pieno žvaigždės | 1.7950 | 12.3278 | 0 | 1030 | 1030 | 1848.8500 | 0.0840 | 5.6329 | 0.0000 | 86.5200 | 432.6000 |
| VLP1L | Vilkyškių pieninė | 15.7500 | 11.4183 | 42 | 66 | 108 | 1701.0000 | 0.3090 | 3.5749 | 12.9780 | 33.3720 | 0.0000 |
| KNE1L | KN Energies | 0.4760 | 9.4578 | 928 | 2052 | 2980 | 1418.4800 | 0.0129 | 4.0108 | 11.9526 | 38.3824 | 191.9120 |
| MRK1T | Merko Ehitus | 26.9500 | 8.4370 | 20 | 26 | 46 | 1239.7000 | 1.2900 | 4.9878 | 25.8000 | 59.3400 | 250.7000 |
| APG1L | Apranga | 3.7900 | 7.0567 | 200 | 79 | 279 | 1057.4100 | 0.3060 | 6.8931 | 61.2000 | 85.3740 | 287.3700 |
| EFT1T | EfTEN Real Estate Fund | 19.4000 | 6.7622 | 0 | 52 | 52 | 1008.8000 | 1.0525 | 4.5789 | 0.0000 | 54.7310 | 232.0552 |
| VIRSI | VIRŠI-A | 4.4200 | 5.9755 | 0 | 202 | 202 | 892.8400 | 0.0685 | 1.2851 | 0.0000 | 13.8344 | 55.0031 |
| GRG1L | Grigeo Group | 1.0050 | 5.9485 | 543 | 344 | 887 | 891.4350 | 0.0560 | 4.4531 | 30.4080 | 49.6720 | 150.7900 |
| MOLNR | J. Molner | 20.6000 | 5.5989 | 0 | 40 | 40 | 824.0000 | 0.0000 | 0.0000 | 0.0000 | 0.0000 | 0.0000 |
| DGR1R | DelfinGroup | 1.7250 | 4.7093 | 0 | 409 | 409 | 705.5250 | 0.0957 | 5.1702 | 0.0000 | 39.1495 | 133.8248 |
| HAE1T | Harju Elekter Group | 5.2400 | 4.5028 | 100 | 28 | 128 | 670.7200 | 0.1440 | 2.2260 | 14.4000 | 18.4320 | 74.2400 |
| AKO1L | Akola Group | 1.8550 | 3.1229 | 0 | 252 | 252 | 467.4600 | 0.0355 | 1.9663 | 0.0000 | 8.9359 | 0.0000 |
| TAL1T | Tallink Grupp | 0.6450 | 3.1103 | 700 | 23 | 723 | 466.3350 | 0.0300 | 4.8370 | 21.0000 | 21.6900 | 108.4500 |
| TEL1L | Telia Lietuva | 2.2500 | 2.1722 | 0 | 144 | 144 | 324.0000 | 0.1000 | 4.3522 | 0.0000 | 14.4000 | 44.6400 |
| RSU1L | Rokiškio sūris | 4.3600 | 2.0488 | 50 | 20 | 70 | 305.2000 | 0.1600 | 3.9501 | 8.0000 | 11.2000 | 49.0000 |
| LHV1T | LHV Group | 3.2700 | 1.7700 | 0 | 81 | 81 | 264.8700 | 0.1660 | 2.4659 | 0.0000 | 13.4460 | 34.8300 |
| TVE1T | Tallinna Vesi | 10.8500 | 1.7635 | 0 | 24 | 24 | 260.4000 | 0.5180 | 3.5339 | 0.0000 | 12.4320 | 46.5600 |
| CPA1T | Coop Pank | 2.3500 | 1.3898 | 0 | 88 | 88 | 206.8000 | 0.0594 | 2.2601 | 0.0000 | 5.2272 | 23.4960 |
| TKM1T | TKM Grupp | 8.9000 | 1.3425 | 288 | -266 | 22 | 195.8000 | 0.6660 | 5.3829 | 191.8080 | 14.6520 | 58.3000 |
| ROE1L | Artea Bankas | 0.8770 | 1.0853 | 416 | -231 | 185 | 162.2450 | 0.0434 | 4.6187 | 18.0544 | 8.0290 | 25.1600 |
| SAF1R | SAF Tehnika | 16.1500 | 0.0000 | 100 | -100 | 0 | 0.0000 | 0.1360 | 0.0000 | 13.6000 | 0.0000 | 0.0000 |
| TSM1T | Tallinna Sadam | 1.1980 | 0.0000 | 330 | -330 | 0 | 0.0000 | 0.0778 | 4.5867 | 25.6740 | 0.0000 | 0.0000 |
| TOTAL |  |  | 100.0000 | 3717 | 4033 | 7750 | 14911.8700 |  | 4.0349 | 434.8750 | 588.8194 | 2198.9311 |

</details>


netSD=0.890756, OUT=106, IN=0, active positions=20, new positions=10. Penalties: position count=0.0600, effective position count=0.0138, dividend shortfall=0.0272.

<details markdown="1">
<summary><strong>Table 2.g. update2_penalty_no_sell: direct penalised-netSD allocation (no sales)</strong></summary>

| asset | name | last_price | target_weight_percent | current_shares | trade_shares | target_shares | invested_EUR | average_annual_dividend_per_share_2022_2026 | average_dividend_yield_percent | current_avg_annual_dividend_EUR | update_avg_annual_dividend_EUR | historical_dividend_cash |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| TKM1T | TKM Grupp | 8.9000 | 20.1032 | 288 | 50 | 338 | 3008.1999 | 0.6660 | 5.3829 | 191.8080 | 225.1080 | 895.7000 |
| SAF1R | SAF Tehnika | 16.1500 | 10.7667 | 100 | 0 | 100 | 1615.0000 | 0.1360 | 0.0000 | 13.6000 | 13.6000 | 0.0000 |
| APG1L | Apranga | 3.7900 | 7.6503 | 200 | 102 | 302 | 1144.5800 | 0.3060 | 6.8931 | 61.2000 | 92.4120 | 311.0600 |
| VLP1L | Vilkyškių pieninė | 15.7500 | 7.6163 | 42 | 30 | 72 | 1134.0000 | 0.3090 | 3.5749 | 12.9780 | 22.2480 | 0.0000 |
| MRK1T | Merko Ehitus | 26.9500 | 6.9467 | 20 | 18 | 38 | 1024.1000 | 1.2900 | 4.9878 | 25.8000 | 49.0200 | 207.1000 |
| GRG1L | Grigeo Group | 1.0050 | 6.9033 | 543 | 487 | 1030 | 1035.1500 | 0.0560 | 4.4531 | 30.4080 | 57.6800 | 175.1000 |
| HAE1T | Harju Elekter Group | 5.2400 | 5.9322 | 100 | 69 | 169 | 885.5600 | 0.1440 | 2.2260 | 14.4000 | 24.3360 | 98.0200 |
| RSU1L | Rokiškio sūris | 4.3600 | 4.8583 | 50 | 117 | 167 | 728.1200 | 0.1600 | 3.9501 | 8.0000 | 26.7200 | 116.9000 |
| KNE1L | KN Energies | 0.4760 | 4.5764 | 928 | 514 | 1442 | 686.3920 | 0.0129 | 4.0108 | 11.9526 | 18.5730 | 92.8648 |
| ROE1L | Artea Bankas | 0.8770 | 4.4761 | 416 | 349 | 765 | 670.9050 | 0.0434 | 4.6187 | 18.0544 | 33.2010 | 104.0400 |
| TAL1T | Tallink Grupp | 0.6450 | 4.4511 | 700 | 335 | 1035 | 667.5750 | 0.0300 | 4.8370 | 21.0000 | 31.0500 | 155.2500 |
| MOLNR | J. Molner | 20.6000 | 2.9708 | 0 | 21 | 21 | 432.6000 | 0.0000 | 0.0000 | 0.0000 | 0.0000 | 0.0000 |
| DGR1R | DelfinGroup | 1.7250 | 2.8836 | 0 | 250 | 250 | 431.2500 | 0.0957 | 5.1702 | 0.0000 | 23.9300 | 81.8000 |
| TSM1T | Tallinna Sadam | 1.1980 | 2.6356 | 330 | 0 | 330 | 395.3400 | 0.0778 | 4.5867 | 25.6740 | 25.6740 | 96.3600 |
| TVE1T | Tallinna Vesi | 10.8500 | 2.5001 | 0 | 34 | 34 | 368.9000 | 0.5180 | 3.5339 | 0.0000 | 17.6120 | 65.9600 |
| LHV1T | LHV Group | 3.2700 | 2.4566 | 0 | 112 | 112 | 366.2400 | 0.1660 | 2.4659 | 0.0000 | 18.5920 | 48.1600 |
| CPA1T | Coop Pank | 2.3500 | 1.8207 | 0 | 116 | 116 | 272.6000 | 0.0594 | 2.2601 | 0.0000 | 6.8904 | 30.9720 |
| TEL1L | Telia Lietuva | 2.2500 | 0.4519 | 0 | 30 | 30 | 67.5000 | 0.1000 | 4.3522 | 0.0000 | 3.0000 | 9.3000 |
| TOTAL |  |  | 100.0000 | 3717 | 2634 | 6351 | 14934.0118 |  | 3.9468 | 434.8750 | 689.6464 | 2488.5868 |

</details>


netSD=0.806723, OUT=96, IN=0, active positions=18, new positions=6. Penalties: position count=0.0486, effective position count=0.0112, dividend shortfall=0.0254.

<details markdown="1">
<summary><strong>Table 2.h. Current and optimised portfolios</strong></summary>

| Portfolio | netSD | OUT | IN | denominator | mean | SD | 5y weighted avg dividend yield at ex-date price | Quantity-based avg annual dividends EUR | Historical dividends EUR | Portfolio value EUR |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0.613445 | 73 | 0 | 119 | 0.000356 | 0.004884 | 3.96% | 434.88 | 1581.209200 | 9077.814812 |
| Optimised | 0.840336 | 100 | 0 | 119 | 0.000515 | 0.004377 | 3.89% | 615.36 | 2232.899386 | 15000.000000 |
| curent_update_baltic | 0.815126 | 97 | 0 | 119 | 0.000464 | 0.004257 | 3.89% | 653.34 | 2373.926000 | 14925.724832 |
| update2_penalty_sell | 0.890756 | 106 | 0 | 119 | 0.000571 | 0.004511 | 4.03% | 588.82 | 2198.931146 | 14911.869971 |
| update2_penalty_no_sell | 0.806723 | 96 | 0 | 119 | 0.000407 | 0.004126 | 3.95% | 689.65 | 2488.586800 | 14934.011804 |

</details>


<details markdown="1">
<summary><strong>Figure 2.a. Optimiser target changes relative to current holdings: two adjacent portfolio bars for every share</strong></summary>

![Report figure 1](report/assets/figure-01.png)

</details>


Each share has four adjacent bars for both original and both direct penalised-netSD portfolios. Negative values are sales; both no-sales portfolios retain every current position. All scenarios use the EUR 15,000 ceiling.

<details markdown="1">
<summary><strong>Figure 2.b. Capital allocation and historical gross dividend contribution</strong></summary>

![Report figure 2](report/assets/figure-02.png)

</details>

</details>

<details markdown="1" class="report-section" id="analytics-2-5">
<summary><strong>2.5. Current portfolio and four update scenarios: diagnostics and validation</strong></summary>

Every result compares **Current**, both original updates and both direct penalised-netSD updates. The penalty versions trade some netSD against excessive position count, excessive effective diversification and positions producing less than EUR 10 of five-year-average annual dividends. The S&P 500 appears only as a market reference where needed.

The first 70% and last 30% rows are chronological sample slices. OUT, IN and netSD are recalculated separately in each slice against the same type of network: the selected shares plus Current and both updates. Because both final update weights were selected using the complete period, the last 30% is a held-out time segment for comparison, but not a fully independent out-of-sample validation of those final weights. A genuine out-of-sample claim requires weights estimated only from the first 70% or a walk-forward procedure.

<details markdown="1" open>
<summary><strong>Table 2.i. Full-period, in-sample and held-out statistics for Current and both updates</strong></summary>

<table class="scenario-period-table"><thead><tr><th><span>Sample</span></th><th><span>Portfolio</span></th><th><span>Observations</span></th><th><span>Mean</span></th><th><span>Median</span></th><th><span>SD</span></th><th><span>Minimum</span></th><th><span>Maximum</span></th><th><span>VaR 95% loss</span></th><th><span>ES 95% loss</span></th><th><span>OUT</span></th><th><span>IN</span></th><th><span>netSD</span></th></tr></thead><tbody><tr><td>Full period</td><td>Current</td><td>754</td><td>0.000399</td><td>0.000392</td><td>0.005085</td><td>-0.033705</td><td>0.038486</td><td>0.006023</td><td>0.011677</td><td>25</td><td>8</td><td>0.515152</td></tr><tr><td>Full period</td><td>Update: sales allowed</td><td>754</td><td>0.000473</td><td>0.000224</td><td>0.004426</td><td>-0.024707</td><td>0.037987</td><td>0.005229</td><td>0.009244</td><td>32</td><td>0</td><td>0.969697</td></tr><tr><td>Full period</td><td>Update: no sales</td><td>754</td><td>0.000456</td><td>0.000237</td><td>0.004392</td><td>-0.021702</td><td>0.026325</td><td>0.005276</td><td>0.010038</td><td>33</td><td>0</td><td>1.000000</td></tr><tr><td>Full period</td><td>Update2 penalty: sales allowed</td><td>754</td><td>0.000543</td><td>0.000209</td><td>0.004590</td><td>-0.024556</td><td>0.032898</td><td>0.005574</td><td>0.009881</td><td>32</td><td>0</td><td>0.969697</td></tr><tr><td>Full period</td><td>Update2 penalty: no sales</td><td>754</td><td>0.000403</td><td>0.000215</td><td>0.004267</td><td>-0.021094</td><td>0.023896</td><td>0.005007</td><td>0.009972</td><td>31</td><td>0</td><td>0.939394</td></tr><tr><td>In-sample: first 70%</td><td>Current</td><td>527</td><td>0.000124</td><td>0.000346</td><td>0.004986</td><td>-0.033705</td><td>0.015747</td><td>0.006833</td><td>0.012834</td><td>21</td><td>8</td><td>0.250000</td></tr><tr><td>In-sample: first 70%</td><td>Update: sales allowed</td><td>527</td><td>0.000556</td><td>0.000380</td><td>0.004660</td><td>-0.024707</td><td>0.037987</td><td>0.005260</td><td>0.009396</td><td>34</td><td>0</td><td>0.653846</td></tr><tr><td>In-sample: first 70%</td><td>Update: no sales</td><td>527</td><td>0.000353</td><td>0.000191</td><td>0.004521</td><td>-0.021702</td><td>0.026325</td><td>0.005359</td><td>0.010808</td><td>28</td><td>0</td><td>0.538462</td></tr><tr><td>In-sample: first 70%</td><td>Update2 penalty: sales allowed</td><td>527</td><td>0.000607</td><td>0.000331</td><td>0.004722</td><td>-0.024556</td><td>0.032898</td><td>0.005492</td><td>0.009929</td><td>36</td><td>0</td><td>0.692308</td></tr><tr><td>In-sample: first 70%</td><td>Update2 penalty: no sales</td><td>527</td><td>0.000276</td><td>0.000197</td><td>0.004366</td><td>-0.021094</td><td>0.021673</td><td>0.005007</td><td>0.010808</td><td>28</td><td>0</td><td>0.538462</td></tr><tr><td>Held-out segment: last 30%</td><td>Current</td><td>227</td><td>0.001035</td><td>0.000607</td><td>0.005264</td><td>-0.018615</td><td>0.038486</td><td>0.005837</td><td>0.008504</td><td>32</td><td>0</td><td>0.592593</td></tr><tr><td>Held-out segment: last 30%</td><td>Update: sales allowed</td><td>227</td><td>0.000279</td><td>0.000039</td><td>0.003832</td><td>-0.012572</td><td>0.011897</td><td>0.004940</td><td>0.008529</td><td>26</td><td>2</td><td>0.444444</td></tr><tr><td>Held-out segment: last 30%</td><td>Update: no sales</td><td>227</td><td>0.000697</td><td>0.000280</td><td>0.004077</td><td>-0.011093</td><td>0.023631</td><td>0.004959</td><td>0.007862</td><td>38</td><td>0</td><td>0.703704</td></tr><tr><td>Held-out segment: last 30%</td><td>Update2 penalty: sales allowed</td><td>227</td><td>0.000393</td><td>0.000100</td><td>0.004273</td><td>-0.017466</td><td>0.013711</td><td>0.005864</td><td>0.009402</td><td>28</td><td>4</td><td>0.444444</td></tr><tr><td>Held-out segment: last 30%</td><td>Update2 penalty: no sales</td><td>227</td><td>0.000697</td><td>0.000326</td><td>0.004023</td><td>-0.013534</td><td>0.023896</td><td>0.004444</td><td>0.007631</td><td>36</td><td>0</td><td>0.666667</td></tr></tbody></table>

</details>

<details markdown="1" open>
<summary><strong>Figure 2.c. Pearson correlations for selected portfolio shares and the three portfolios</strong></summary>

Only shares with a positive position in Current or at least one final update are included. Ward hierarchical clustering groups similar dependence patterns. The top and left dendrograms show the complete sequence of cluster mergers; shorter joining branches indicate more similar correlation profiles. Blue is negative, white is near zero and red is positive correlation.

![Selected-share Pearson correlations](figures/scenario_correlation_pearson_ward.png)

</details>

<details markdown="1">
<summary><strong>Figure 2.d. Spearman correlations for selected portfolio shares and the three portfolios</strong></summary>

The top and left dendrograms show Ward hierarchical clustering of the Spearman dependence profiles.

![Selected-share Spearman correlations](figures/scenario_correlation_spearman_ward.png)

</details>

<details markdown="1">
<summary><strong>Figure 2.e. Return histograms for Current, both updates and S&P 500</strong></summary>

![Scenario return histograms](figures/scenario_histograms.png)

</details>

### Interactive distribution dominance and efficient frontiers

This section compares Current, both original updates and the two direct penalised-netSD portfolios. Training and full-data portfolios remain available for comparison.

<details markdown="1" class="dominance-components portfolio-dominance" open>
<summary><strong>Figure 2.f. Interactive portfolio FSD, SSD and TSD analysis</strong></summary>

Select FSD, SSD or TSD, choose any combination of portfolios and individual shares in the grouped multi-select list, and choose the comparison base. The upper panels show the selected component curves; the lower panels show the comparison base minus every other selected curve. The x-position and horizontal-magnification sliders select the interval, whose vertical scale is fitted automatically.

<div class="dominance-explorer" data-asset="Portfolio" data-target="Current"><p>Loading the interactive portfolio dominance analysis...</p></div>

</details>

<details markdown="1" class="frontier-components" open>
<summary><strong>Figure 2.g. Interactive Markowitz, MAD, Minimax, robust mean–CVaR and netSD frontiers</strong></summary>

Choose the model to change the risk measure. Current is always highlighted, and every share already held in Current is selected and labelled automatically. Use the grouped multiple-selection list to add or remove any portfolio or share, zoom with the horizontal controls or mouse wheel, and save the current view as PNG.

<div class="frontier-explorer"><p>Loading the interactive frontier comparison...</p></div>

</details>

<details markdown="1">
<summary><strong>Table 2.j. Concentration and diversification of Current and both updates</strong></summary>

| Portfolio | HHI weights | Effective positions | Largest weight | Positive positions | Diversification ratio |
| --- | --- | --- | --- | --- | --- |
| Current | 0.143061 | 6.990040 | 0.282359 | 12 | 2.222507 |
| Update: sales allowed | 0.069844 | 14.317673 | 0.104506 | 21 | 2.539761 |
| Update: no sales | 0.080158 | 12.475321 | 0.172263 | 22 | 2.770704 |
| Update2 penalty: sales allowed | 0.072290 | 13.833228 | 0.123278 | 20 | 2.595045 |
| Update2 penalty: no sales | 0.089199 | 11.210939 | 0.201032 | 18 | 2.734804 |

</details>

<details markdown="1">
<summary><strong>Table 2.k. Systematic risk relative to S&P 500</strong></summary>

| Portfolio | CAPMBeta | CAPMAlpha | JensenAlpha | SpecificRisk | SystematicRisk | TotalRisk | TrackingError_Annualized | Information_Annualized |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Current | 0.057286 | 0.000348 | 0.088945 | 0.080036 | 0.010059 | 0.080666 | 0.183894 | -0.688676 |
| Baltic_NetSD | 0.029183 | 0.000447 | 0.117070 | 0.070033 | 0.005124 | 0.070221 | 0.184315 | -0.569379 |
| curent_update_baltic | 0.049817 | 0.000413 | 0.107711 | 0.069124 | 0.008748 | 0.069676 | 0.180619 | -0.606725 |
| update2_penalty_sell | 0.035307 | 0.000512 | 0.135387 | 0.072553 | 0.006200 | 0.072817 | 0.184299 | -0.462441 |
| update2_penalty_no_sell | 0.049453 | 0.000359 | 0.093004 | 0.067138 | 0.008684 | 0.067698 | 0.179926 | -0.691258 |

</details>

<details markdown="1" open>
<summary><strong>Figure 2.h. Directional return-spillover network</strong></summary>

A VAR(1) and a 10-observation generalized forecast-error variance decomposition are used, following the connectedness logic in [Kabašinskas (2024)](https://doi.org/10.1186/s13362-024-00144-x). An arrow from A to B is the percentage of B's forecast-error variance explained by shocks from A; only links of at least 2% are drawn. The result measures predictive connectedness, not a causal effect.

![Directional spillover network](figures/scenario_spillover_network.png)

The full-period **Total Spillover Index is 59.51%**. Thus, on average, 59.51% of the four series' 10-step forecast-error variance comes from shocks originating in another series. **Update: no sales** is the largest net transmitter (TO − FROM = 15.23 percentage points). Because both updates are constructed from overlapping Baltic shares, some strong links are mechanical and should not be interpreted as independent contagion.

</details>

<details markdown="1">
<summary><strong>Table 2.l. Generalized FEVD spillover matrix</strong></summary>

Rows are affected series; columns are shock sources. Diagonal cells are own shocks. Each row sums to 100%.

| Affected series / shock source | Current | Update: sales allowed | Update: no sales | Update2 penalty: sales allowed | Update2 penalty: no sales | S&P 500 |
| --- | --- | --- | --- | --- | --- | --- |
| Current | 33.83 | 5.23 | 26.23 | 5.86 | 28.28 | 0.57 |
| Update: sales allowed | 4.91 | 32.16 | 18.06 | 28.60 | 15.26 | 0.99 |
| Update: no sales | 19.94 | 14.49 | 25.74 | 14.06 | 24.99 | 0.77 |
| Update2 penalty: sales allowed | 5.54 | 28.76 | 17.60 | 32.33 | 14.89 | 0.88 |
| Update2 penalty: no sales | 22.13 | 12.64 | 25.73 | 12.27 | 26.49 | 0.73 |
| S&P 500 | 1.65 | 1.00 | 1.87 | 1.18 | 1.89 | 92.41 |

</details>

<details markdown="1">
<summary><strong>Table 2.m. Directional FROM, TO and NET spillovers</strong></summary>

FROM is the share received from all other series. TO is the share transmitted to all other series. Positive NET = TO − FROM identifies a net transmitter; negative NET identifies a net receiver.

| Entity | FROM others (%) | TO others (%) | NET: TO − FROM (pp) |
| --- | --- | --- | --- |
| Current | 66.17 | 54.18 | -11.99 |
| Update: sales allowed | 67.84 | 62.12 | -5.72 |
| Update: no sales | 74.26 | 89.49 | 15.23 |
| Update2 penalty: sales allowed | 67.67 | 61.98 | -5.70 |
| Update2 penalty: no sales | 73.51 | 85.33 | 11.82 |
| S&P 500 | 7.59 | 3.95 | -3.64 |

</details>

<details markdown="1">
<summary><strong>Figure 2.i. Rolling 120-observation Total Spillover Index</strong></summary>

The rolling index shows when cross-series connectedness rises or falls. Peaks indicate periods when forecast errors are explained more by shocks elsewhere in the system.

![Rolling Total Spillover Index](figures/scenario_total_spillover_rolling.png)

</details>

<details markdown="1" class="cumulative-components" open>
<summary><strong>Figure 2.j. Interactive cumulative value and drawdowns</strong></summary>

Select any combination of portfolios, S&P 500 and individual shares. The upper panel shows the value of one monetary unit invested at the common starting date; the lower panel shows drawdown from each series' previous peak. Current and both update scenarios are selected initially.

<div class="cumulative-explorer"><p>Loading the interactive cumulative-value and drawdown comparison...</p></div>

</details>

<details markdown="1">
<summary><strong>Table 2.l. Complete PerformanceAnalytics measures for Current and both updates</strong></summary>

<table class="performance-scenario-table"><thead><tr><th>Measure</th><th>Current</th><th>Update: sales allowed</th><th>Update: no sales</th><th>Update2 penalty: sales allowed</th><th>Update2 penalty: no sales</th></tr></thead><tbody><tr><td><button type="button" class="metric-help-button" data-metric="ActiveReturn" data-meaning="Return above the benchmark." data-calculation="Rₚ − Rᵦ." data-interpretation="Higher is better.">ActiveReturn</button></td><td>-0.126643</td><td>-0.104945</td><td>-0.109586</td><td>-0.085228</td><td>-0.124376</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="AdjustedSharpe" data-meaning="Sharpe ratio adjusted for skewness and kurtosis." data-calculation="Sharpe corrected with the third and fourth moments." data-interpretation="Higher is better; negative is poor.">AdjustedSharpe</button></td><td>0.165830</td><td>-0.422847</td><td>0.411254</td><td>-0.249380</td><td>0.545920</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Arithmetic" data-meaning="Annual return obtained from the average daily return." data-calculation="252 × mean(R)." data-interpretation="Higher is better, but ignores compounding.">AnnualizedReturn_Arithmetic</button></td><td>0.100442</td><td>0.119153</td><td>0.114980</td><td>0.136745</td><td>0.101536</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="AnnualizedReturn_Geometric" data-meaning="Compounded annual return." data-calculation="[∏(1+Rₜ)]^(252/n) − 1." data-interpretation="Higher is better.">AnnualizedReturn_Geometric</button></td><td>0.102046</td><td>0.123744</td><td>0.119103</td><td>0.143462</td><td>0.104314</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Appraisal" data-meaning="Alpha per unit of asset-specific risk." data-calculation="CAPM alpha / specific risk." data-interpretation="Higher is better.">Appraisal</button></td><td>1.111312</td><td>1.671637</td><td>1.558215</td><td>1.866049</td><td>1.385266</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="ArithmeticReturn" data-meaning="Average one-period return." data-calculation="mean(Rₜ)." data-interpretation="Higher is better.">ArithmeticReturn</button></td><td>0.000399</td><td>0.000473</td><td>0.000456</td><td>0.000543</td><td>0.000403</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="AverageDrawdown" data-meaning="Average loss across drawdown episodes." data-calculation="Mean peak-to-trough drawdown." data-interpretation="Closer to zero is better.">AverageDrawdown</button></td><td>0.021560</td><td>0.009922</td><td>0.011071</td><td>0.010252</td><td>0.013335</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="AverageDrawdownLength" data-meaning="Average duration of drawdown episodes." data-calculation="Mean number of periods from peak to recovery/end." data-interpretation="Lower is better.">AverageDrawdownLength</button></td><td>47.400000</td><td>16.571429</td><td>24.241379</td><td>16.357143</td><td>30.652174</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="AverageRecoveryTime" data-meaning="Average time needed to recover from a trough." data-calculation="Mean periods from trough back to the prior peak." data-interpretation="Lower is better.">AverageRecoveryTime</button></td><td>23.333333</td><td>9.095238</td><td>14.931034</td><td>8.476190</td><td>11.608696</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="BernardoLedoit" data-meaning="Gain-loss ratio based on positive and negative returns." data-calculation="E[max(R,0)] / E[max(−R,0)]." data-interpretation="Higher is better; above 1 means gains dominate losses.">BernardoLedoit</button></td><td>1.276133</td><td>1.383384</td><td>1.352346</td><td>1.423395</td><td>1.317234</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="BetaCoKurtosis" data-meaning="Sensitivity to joint extreme movements with the benchmark." data-calculation="Fourth-order co-moment scaled by benchmark co-kurtosis." data-interpretation="Lower absolute exposure is usually safer.">BetaCoKurtosis</button></td><td>0.071232</td><td>-0.043043</td><td>0.017356</td><td>-0.027940</td><td>0.030275</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="BetaCoSkewness" data-meaning="Sensitivity to asymmetric joint movements with the benchmark." data-calculation="Third-order co-moment scaled by benchmark co-skewness." data-interpretation="Positive is generally preferable.">BetaCoSkewness</button></td><td>-1.058347</td><td>-1.977261</td><td>-1.638768</td><td>-1.654572</td><td>-1.476260</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Burke" data-meaning="Return relative to several largest drawdowns." data-calculation="Excess return / root-sum-square of drawdowns." data-interpretation="Higher is better.">Burke</button></td><td>0.815057</td><td>1.187557</td><td>1.091475</td><td>1.260659</td><td>0.973746</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="CAPMAlpha" data-meaning="Return unexplained by market exposure." data-calculation="mean(Rₚ−R𝒻) − β mean(Rᵦ−R𝒻)." data-interpretation="Higher is better.">CAPMAlpha</button></td><td>0.000348</td><td>0.000447</td><td>0.000413</td><td>0.000512</td><td>0.000359</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="CAPMBeta" data-meaning="Sensitivity to benchmark movements." data-calculation="Cov(Rₚ,Rᵦ) / Var(Rᵦ)." data-interpretation="Above 1 means greater market sensitivity; below 1 means lower.">CAPMBeta</button></td><td>0.057286</td><td>0.029183</td><td>0.049817</td><td>0.035307</td><td>0.049453</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="CDD" data-meaning="Conditional drawdown at risk." data-calculation="Mean of drawdowns beyond the selected drawdown quantile." data-interpretation="Closer to zero is better.">CDD</button></td><td>0.043765</td><td>0.035795</td><td>0.027505</td><td>0.025185</td><td>0.033613</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Calmar" data-meaning="Annual return per unit of maximum drawdown." data-calculation="Annualised return / |maximum drawdown|." data-interpretation="Higher is better.">Calmar</button></td><td>0.601966</td><td>2.293399</td><td>1.159239</td><td>2.532881</td><td>1.026756</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="CoKurtosis" data-meaning="Joint fourth-order tail dependence with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)³]." data-interpretation="Large absolute values mean stronger joint tail exposure.">CoKurtosis</button></td><td>0.000000</td><td>-0.000000</td><td>0.000000</td><td>-0.000000</td><td>0.000000</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="CoSkewness" data-meaning="Joint third-order asymmetry with the benchmark." data-calculation="E[(Rₚ−μₚ)(Rᵦ−μᵦ)²]." data-interpretation="More positive is generally preferable.">CoSkewness</button></td><td>-0.000000</td><td>-0.000000</td><td>-0.000000</td><td>-0.000000</td><td>-0.000000</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="CumulativeReturn" data-meaning="Total compounded return over the displayed period." data-calculation="∏(1+Rₜ) − 1." data-interpretation="Higher is better.">CumulativeReturn</button></td><td>0.337409</td><td>0.417752</td><td>0.400306</td><td>0.493491</td><td>0.345660</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="DRatio" data-meaning="Balance between cumulative losses and gains." data-calculation="Downside return contribution / upside return contribution." data-interpretation="Lower is better.">DRatio</button></td><td>0.636808</td><td>0.624455</td><td>0.638287</td><td>0.594064</td><td>0.669516</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="DownCapture" data-meaning="Performance when the benchmark declines." data-calculation="Portfolio compound return / benchmark compound return on down-market days." data-interpretation="Lower is normally better when both returns are negative.">DownCapture</button></td><td>-0.001871</td><td>-0.042302</td><td>-0.013631</td><td>-0.046692</td><td>-0.009955</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="DownNumber" data-meaning="Number of negative-return observations." data-calculation="Count(Rₜ &lt; 0)." data-interpretation="Lower is better, conditional on similar return.">DownNumber</button></td><td>0.481132</td><td>0.490566</td><td>0.496855</td><td>0.512579</td><td>0.496855</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="DownPercent" data-meaning="Fraction of observations with negative return." data-calculation="Count(Rₜ&lt;0)/n." data-interpretation="Lower is better.">DownPercent</button></td><td>0.896226</td><td>0.893082</td><td>0.889937</td><td>0.899371</td><td>0.889937</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="DownsideDeviation" data-meaning="Volatility below the minimum acceptable return." data-calculation="Root mean squared shortfall below MAR." data-interpretation="Lower is better.">DownsideDeviation</button></td><td>0.003490</td><td>0.002763</td><td>0.002911</td><td>0.002943</td><td>0.002875</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="DrawdownDeviation" data-meaning="Variability of drawdowns." data-calculation="Standard deviation of the drawdown series." data-interpretation="Lower is better.">DrawdownDeviation</button></td><td>0.006638</td><td>0.004195</td><td>0.004644</td><td>0.004150</td><td>0.004546</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="ES_Loss" data-meaning="Average loss in the worst 5% of observations." data-calculation="Mean loss conditional on loss ≥ 95% VaR." data-interpretation="Lower is better.">ES_Loss</button></td><td>0.011677</td><td>0.009244</td><td>0.010038</td><td>0.009881</td><td>0.009972</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="FamaBeta" data-meaning="Beta estimated using Fama decomposition." data-calculation="Systematic risk divided by benchmark risk under the decomposition." data-interpretation="Lower means less systematic exposure.">FamaBeta</button></td><td>0.459682</td><td>0.400161</td><td>0.397054</td><td>0.414958</td><td>0.385780</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="GeometricReturn" data-meaning="Average compounded one-period return." data-calculation="[∏(1+Rₜ)]^(1/n) − 1." data-interpretation="Higher is better.">GeometricReturn</button></td><td>0.000386</td><td>0.000463</td><td>0.000447</td><td>0.000532</td><td>0.000394</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Hurst" data-meaning="Persistence of the return process." data-calculation="Hurst exponent estimated from rescaled behaviour." data-interpretation="Near 0.5 suggests no persistence; above 0.5 persistence; below 0.5 mean reversion.">Hurst</button></td><td>0.400438</td><td>0.400078</td><td>0.361030</td><td>0.381426</td><td>0.355518</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Information_Annualized" data-meaning="Annualised active return per unit of tracking error." data-calculation="Annualised active return / annualised tracking error." data-interpretation="Higher is better.">Information_Annualized</button></td><td>-0.688676</td><td>-0.569379</td><td>-0.606725</td><td>-0.462441</td><td>-0.691258</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Information_Daily" data-meaning="Daily active return per unit of tracking error." data-calculation="mean(Rₚ−Rᵦ) / sd(Rₚ−Rᵦ)." data-interpretation="Higher is better.">Information_Daily</button></td><td>-0.037286</td><td>-0.030534</td><td>-0.032603</td><td>-0.024588</td><td>-0.037388</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="JensenAlpha" data-meaning="CAPM risk-adjusted excess return." data-calculation="Rₚ − [R𝒻 + β(Rᵦ−R𝒻)]." data-interpretation="Higher is better.">JensenAlpha</button></td><td>0.088945</td><td>0.117070</td><td>0.107711</td><td>0.135387</td><td>0.093004</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Kappa" data-meaning="Return above MAR per unit of lower partial moment risk." data-calculation="[mean(R)−MAR] / LPMₙ^(1/n)." data-interpretation="Higher is better.">Kappa</button></td><td>0.067166</td><td>0.105018</td><td>0.097986</td><td>0.113150</td><td>0.087241</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Kelly" data-meaning="Approximate growth-optimal risky allocation." data-calculation="Expected excess return / variance under the quadratic approximation." data-interpretation="Higher implies a larger theoretical allocation; unstable extreme values require caution.">Kelly</button></td><td>15.415893</td><td>24.132553</td><td>23.653360</td><td>25.755524</td><td>22.126255</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Kurtosis" data-meaning="Tail thickness relative to a normal distribution." data-calculation="Standardised fourth central moment." data-interpretation="Higher means more extreme-tail risk.">Kurtosis</button></td><td>15.721640</td><td>14.909178</td><td>9.278059</td><td>10.912801</td><td>9.027053</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="M2Sortino" data-meaning="Sortino ratio translated into return units." data-calculation="Risk-free return plus Sortino × benchmark downside deviation." data-interpretation="Higher is better.">M2Sortino</button></td><td>0.109449</td><td>0.136813</td><td>0.130706</td><td>0.157014</td><td>0.114766</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="MSquaredExcess" data-meaning="M² return advantage over the benchmark." data-calculation="Modigliani measure − benchmark return." data-interpretation="Higher is better.">MSquaredExcess</button></td><td>-0.005450</td><td>0.065555</td><td>0.058012</td><td>0.095253</td><td>0.033945</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Martin" data-meaning="Return per unit of ulcer-index risk." data-calculation="Excess return / Ulcer Index." data-interpretation="Higher is better.">Martin</button></td><td>1.203512</td><td>5.911479</td><td>2.686858</td><td>6.571261</td><td>2.218878</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="MaximumDrawdown" data-meaning="Largest historical peak-to-trough loss." data-calculation="min(wealth/running maximum − 1)." data-interpretation="Closer to zero is better.">MaximumDrawdown</button></td><td>0.169521</td><td>0.053957</td><td>0.102743</td><td>0.056640</td><td>0.101595</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Modigliani" data-meaning="Sharpe performance translated to benchmark volatility." data-calculation="R𝒻 + Sharpeₚ × volatilityᵦ." data-interpretation="Higher is better.">Modigliani</button></td><td>0.000867</td><td>0.001182</td><td>0.001149</td><td>0.001308</td><td>0.001044</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="NetSelectivity" data-meaning="Selection return after diversification adjustment." data-calculation="Selectivity minus diversification contribution." data-interpretation="Higher is better.">NetSelectivity</button></td><td>-0.003078</td><td>0.032232</td><td>0.028302</td><td>0.048565</td><td>0.016090</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Omega" data-meaning="Probability-weighted gains relative to losses at a threshold." data-calculation="Integral above threshold / integral below threshold." data-interpretation="Higher is better; above 1 is favourable.">Omega</button></td><td>1.276133</td><td>1.383384</td><td>1.352346</td><td>1.423395</td><td>1.317234</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="OmegaExcessReturn" data-meaning="Excess return adjusted by Omega downside structure." data-calculation="Excess return expressed through the Omega function." data-interpretation="Higher is better.">OmegaExcessReturn</button></td><td>0.082064</td><td>0.107926</td><td>0.102439</td><td>0.126611</td><td>0.087853</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="PainIndex" data-meaning="Average depth of all drawdowns." data-calculation="Mean absolute percentage drawdown." data-interpretation="Lower is better.">PainIndex</button></td><td>0.063120</td><td>0.016078</td><td>0.034100</td><td>0.016298</td><td>0.036364</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="PainRatio" data-meaning="Return earned per unit of average drawdown pain." data-calculation="Excess return / Pain Index." data-interpretation="Higher is better.">PainRatio</button></td><td>1.616693</td><td>7.696274</td><td>3.492737</td><td>8.802421</td><td>2.868572</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Prospect" data-meaning="Behavioural value of gains and losses." data-calculation="Probability-weighted prospect utility with losses penalised more strongly." data-interpretation="Higher is better.">Prospect</button></td><td>-0.402780</td><td>-0.386846</td><td>-0.399373</td><td>-0.359967</td><td>-0.412073</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Rachev" data-meaning="Extreme gains relative to extreme losses." data-calculation="Upper-tail expected return / lower-tail expected loss." data-interpretation="Higher is better; above 1 means the selected upper tail exceeds the lower tail.">Rachev</button></td><td>1.078982</td><td>1.271462</td><td>1.126462</td><td>1.216439</td><td>1.111177</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Selectivity" data-meaning="Return attributed to security selection." data-calculation="Portfolio return minus return implied by systematic risk." data-interpretation="Higher is better.">Selectivity</button></td><td>0.088945</td><td>0.117070</td><td>0.107711</td><td>0.135387</td><td>0.093004</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Sharpe_Annualized" data-meaning="Annual excess return per unit of annual volatility." data-calculation="Annualised excess return / annualised SD." data-interpretation="Higher is better.">Sharpe_Annualized</button></td><td>1.244350</td><td>1.695721</td><td>1.649143</td><td>1.876684</td><td>1.498871</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Sharpe_Daily" data-meaning="Daily excess return per unit of daily volatility." data-calculation="mean(R−R𝒻) / sd(R−R𝒻)." data-interpretation="Higher is better.">Sharpe_Daily</button></td><td>0.078387</td><td>0.106820</td><td>0.103886</td><td>0.118220</td><td>0.094420</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Sharpe_ES" data-meaning="Excess return per unit of expected shortfall." data-calculation="Mean excess return / ES loss." data-interpretation="Higher is better.">Sharpe_ES</button></td><td>0.034134</td><td>0.051150</td><td>0.045452</td><td>0.054917</td><td>0.040406</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Sharpe_VaR" data-meaning="Excess return per unit of value at risk." data-calculation="Mean excess return / VaR loss." data-interpretation="Higher is better.">Sharpe_VaR</button></td><td>0.066241</td><td>0.090438</td><td>0.087356</td><td>0.098117</td><td>0.081365</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Skewness" data-meaning="Asymmetry of returns." data-calculation="Standardised third central moment." data-interpretation="More positive is generally preferable.">Skewness</button></td><td>-0.221667</td><td>0.628025</td><td>-0.142612</td><td>0.090482</td><td>-0.286589</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Sortino" data-meaning="Excess return per unit of downside risk." data-calculation="Mean(R−MAR) / downside deviation." data-interpretation="Higher is better.">Sortino</button></td><td>0.114205</td><td>0.171138</td><td>0.156761</td><td>0.184378</td><td>0.140146</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="SpecificRisk" data-meaning="Risk not explained by the benchmark." data-calculation="Residual volatility from the market regression." data-interpretation="Lower is safer, although it may reflect diversifiable opportunity.">SpecificRisk</button></td><td>0.080036</td><td>0.070033</td><td>0.069124</td><td>0.072553</td><td>0.067138</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Sterling" data-meaning="Return relative to drawdown risk." data-calculation="Annualised excess return / average or adjusted maximum drawdown." data-interpretation="Higher is better.">Sterling</button></td><td>0.378619</td><td>0.803760</td><td>0.587461</td><td>0.915870</td><td>0.517441</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="SystematicRisk" data-meaning="Risk explained by benchmark exposure." data-calculation="β² Var(Rᵦ), or its square-root form under the implementation." data-interpretation="Lower is safer; higher means more market-driven risk.">SystematicRisk</button></td><td>0.010059</td><td>0.005124</td><td>0.008748</td><td>0.006200</td><td>0.008684</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="TotalRisk" data-meaning="Total return variability." data-calculation="Standard deviation or variance-based total risk used by the decomposition." data-interpretation="Lower is safer.">TotalRisk</button></td><td>0.080666</td><td>0.070221</td><td>0.069676</td><td>0.072817</td><td>0.067698</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="TrackingError_Annualized" data-meaning="Annualised volatility of returns relative to the benchmark." data-calculation="sd(Rₚ−Rᵦ) × √252." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Annualized</button></td><td>0.183894</td><td>0.184315</td><td>0.180619</td><td>0.184299</td><td>0.179926</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="TrackingError_Daily" data-meaning="Daily volatility of active returns." data-calculation="sd(Rₚ−Rᵦ)." data-interpretation="Lower means closer benchmark tracking.">TrackingError_Daily</button></td><td>0.011584</td><td>0.011611</td><td>0.011378</td><td>0.011610</td><td>0.011334</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Treynor_Annualized" data-meaning="Annual excess return per unit of beta." data-calculation="Annualised excess return / β." data-interpretation="Higher is better when beta is meaningful.">Treynor_Annualized</button></td><td>1.781352</td><td>4.240314</td><td>2.390811</td><td>4.063247</td><td>2.109359</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Treynor_Daily" data-meaning="Daily excess return per unit of beta." data-calculation="Mean daily excess return / β." data-interpretation="Higher is better.">Treynor_Daily</button></td><td>0.006732</td><td>0.015868</td><td>0.008966</td><td>0.015071</td><td>0.007964</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="UlcerIndex" data-meaning="Depth and duration of drawdowns." data-calculation="Root mean square percentage drawdown." data-interpretation="Lower is better.">UlcerIndex</button></td><td>0.084790</td><td>0.020933</td><td>0.044328</td><td>0.021832</td><td>0.047012</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="UpCapture" data-meaning="Performance when the benchmark rises." data-calculation="Portfolio compound return / benchmark compound return on up-market days." data-interpretation="Higher is better.">UpCapture</button></td><td>0.092210</td><td>0.077583</td><td>0.096440</td><td>0.090509</td><td>0.086815</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="UpNumber" data-meaning="Number of positive-return observations." data-calculation="Count(Rₜ &gt; 0)." data-interpretation="Higher is generally better.">UpNumber</button></td><td>0.571101</td><td>0.555046</td><td>0.559633</td><td>0.580275</td><td>0.550459</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="UpPercent" data-meaning="Fraction of observations with positive return." data-calculation="Count(Rₜ&gt;0)/n." data-interpretation="Higher is generally better.">UpPercent</button></td><td>0.174312</td><td>0.137615</td><td>0.165138</td><td>0.149083</td><td>0.158257</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="UpsidePotential" data-meaning="Average return above the minimum acceptable return." data-calculation="Mean[max(R−MAR,0)]." data-interpretation="Higher is better.">UpsidePotential</button></td><td>0.527794</td><td>0.617525</td><td>0.601668</td><td>0.619854</td><td>0.581922</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="UpsideRisk" data-meaning="Magnitude of returns above the target." data-calculation="Root upper partial moment relative to MAR." data-interpretation="Higher means more upside dispersion, not conventional risk.">UpsideRisk</button></td><td>0.003715</td><td>0.003487</td><td>0.003317</td><td>0.003560</td><td>0.003175</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="VaR_Loss" data-meaning="Loss threshold exceeded by the worst 5% of observations." data-calculation="95th percentile of loss −R." data-interpretation="Lower is better.">VaR_Loss</button></td><td>0.006017</td><td>0.005228</td><td>0.005223</td><td>0.005531</td><td>0.004952</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Volatility" data-meaning="Daily standard deviation of returns." data-calculation="sd(Rₜ)." data-interpretation="Lower means more stable returns.">Volatility</button></td><td>0.005085</td><td>0.004426</td><td>0.004392</td><td>0.004590</td><td>0.004267</td></tr><tr><td><button type="button" class="metric-help-button" data-metric="Volatility_Annualized" data-meaning="Annualised standard deviation." data-calculation="sd(Rₜ) × √252." data-interpretation="Lower means more stable returns.">Volatility_Annualized</button></td><td>0.080719</td><td>0.070267</td><td>0.069721</td><td>0.072865</td><td>0.067742</td></tr></tbody></table>

</details>

</details>

<details markdown="1" class="report-section" id="analytics-2-6">
<summary><strong>2.6. Decision risks and implementability</strong></summary>

### Liquidity and turnover

<details markdown="1">
<summary><strong>Table 2.n. Proposed trades and observed one-year market liquidity</strong></summary>

| asset | trade_shares | trade_value_EUR | median_daily_turnover_EUR | zero_volume_fraction | trade_to_median_turnover | liquidity_flag |
| --- | --- | --- | --- | --- | --- | --- |
| SAF1R | -100 | 1615.0000 | 8145.6750 | 0.0238 | 0.1983 | MEDIUM |
| DGR1R | 392 | 676.2000 | 12309.7360 | 0.0238 | 0.0549 | MEDIUM |
| GRG1L | 600 | 603.0000 | 11740.2000 | 0.0119 | 0.0514 | MEDIUM |
| TVE1T | 43 | 466.5500 | 14525.2750 | 0.0119 | 0.0321 | MEDIUM |
| KNE1L | 760 | 361.7600 | 13935.9050 | 0.0119 | 0.0260 | MEDIUM |
| HAE1T | 8 | 41.9200 | 17504.7300 | 0.0119 | 0.0024 | MEDIUM |
| EFT1T | 65 | 1261.0000 | 20637.6000 | 0.0119 | 0.0611 | LOW |
| TKM1T | -256 | 2278.3999 | 40663.4600 | 0.0119 | 0.0560 | LOW |
| VLP1L | 57 | 897.7500 | 21569.0000 | 0.0119 | 0.0416 | LOW |
| MRK1T | 27 | 727.6500 | 58829.0000 | 0.0119 | 0.0124 | LOW |
| APG1L | 79 | 299.4100 | 24617.8400 | 0.0119 | 0.0122 | LOW |
| AKO1L | 113 | 209.6150 | 22139.2150 | 0.0119 | 0.0095 | LOW |
| TSM1T | -330 | 395.3400 | 45486.8640 | 0.0119 | 0.0087 | LOW |
| IGN1L | 72 | 1555.2000 | 289232.8000 | 0.0119 | 0.0054 | LOW |
| CPA1T | 115 | 270.2500 | 81735.1725 | 0.0119 | 0.0033 | LOW |
| TAL1T | 218 | 140.6100 | 77229.4990 | 0.0119 | 0.0018 | LOW |
| ROE1L | -311 | 272.7470 | 180273.6225 | 0.0119 | 0.0015 | LOW |
| TEL1L | 33 | 74.2500 | 56394.4800 | 0.0119 | 0.0013 | LOW |
| LHV1T | 13 | 42.5100 | 263779.8850 | 0.0119 | 0.0002 | LOW |
| MOLNR | 51 | 1050.6000 | 93.9000 | 0.2937 | 11.1885 | HIGH |
| VIRSI | 252 | 1113.8400 | 2801.8800 | 0.0238 | 0.3975 | HIGH |
| PZV1L | 404 | 725.1800 | 4288.5950 | 0.0119 | 0.1691 | HIGH |
| RSU1L | -24 | 104.6400 | 1134.5000 | 0.0476 | 0.0922 | HIGH |

</details>


Median daily turnover and zero-volume frequency use official Nasdaq Baltic price-volume observations from the last 365 calendar days of the sample. Trade-to-turnover is the proposed absolute order value divided by median daily turnover. HIGH flags median turnover below EUR 5,000 or an order above 20% of median turnover; MEDIUM flags below EUR 20,000 or above 10%. These are transparent screening thresholds, not a guarantee of execution. HIGH trades should be split, limited or omitted after checking the live order book.

<details markdown="1">
<summary><strong>Table 2.o. Illustrative transaction-cost and turnover scenario</strong></summary>

| portfolio | turnover_EUR | number_of_trades | estimated_cost_EUR | high_liquidity_risk_trades | cost_percent_of_15000 |
| --- | --- | --- | --- | --- | --- |
| Baltic_NetSD | 15183.4219 | 23 | 182.9543 | 4 | 1.2197 |
| curent_update_baltic | 5847.9100 | 20 | 99.6041 | 3 | 0.6640 |
| update2_penalty_no_sell | 5856.1970 | 16 | 88.6171 | 2 | 0.5908 |
| update2_penalty_sell | 14994.7088 | 22 | 193.2411 | 4 | 1.2883 |

</details>


The cost scenario uses max(EUR 3, 0.25% of trade value) commission plus an assumed spread/impact of 0.25%, 0.75% or 2.00% for LOW, MEDIUM or HIGH liquidity risk. These are sensitivity assumptions rather than broker quotes. Reported historical returns and dividends are gross; subtract the displayed cost before interpreting an implementation result.

### Capital concentration

<details markdown="1">
<summary><strong>Table 2.p. Top-position and effective-position concentration</strong></summary>

| portfolio | positions | top5_share | top10_share | HHI | effective_positions |
| --- | --- | --- | --- | --- | --- |
| Baltic_NetSD | 21 | 0.4549 | 0.7731 | 0.0699 | 14.3139 |
| curent_update_baltic | 22 | 0.5194 | 0.7745 | 0.0805 | 12.4292 |
| update2_penalty_sell | 20 | 0.4872 | 0.7771 | 0.0724 | 13.8163 |
| update2_penalty_no_sell | 18 | 0.5315 | 0.7990 | 0.0894 | 11.1884 |

</details>


<details markdown="1">
<summary><strong>Table 2.q. Baltic_NetSD: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 11.99 |
| country_market | TLN | 38.85 |
| country_market | VLN | 49.16 |
| segment | Baltic Main List | 85.50 |
| segment | First North Baltic Share List | 14.50 |
| Industry | Basic Materials | 7.69 |
| Industry | Consumer Discretionary | 20.42 |
| Industry | Consumer Staples | 17.47 |
| Industry | Financials | 15.07 |
| Industry | Health Care | 7.04 |
| Industry | Industrials | 17.66 |
| Industry | Telecommunications | 0.50 |
| Industry | Utilities | 13.54 |
| Industry | nan | 0.62 |
| Supersector | Banks | 2.09 |
| Supersector | Basic Resources | 7.69 |
| Supersector | Construction and Materials | 8.48 |
| Supersector | Financial Services | 12.98 |
| Supersector | Food, Beverage and Tobacco | 17.47 |
| Supersector | Health Care | 7.04 |
| Supersector | Industrial Goods and Services | 9.17 |
| Supersector | Retail | 16.45 |
| Supersector | Telecommunications | 0.50 |
| Supersector | Travel and Leisure | 3.97 |
| Supersector | Utilities | 13.54 |
| Supersector | nan | 0.62 |

</details>


<details markdown="1">
<summary><strong>Table 2.r. curent_update_baltic: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 11.66 |
| country_market | TLN | 47.66 |
| country_market | VLN | 40.67 |
| segment | Baltic Main List | 96.14 |
| segment | First North Baltic Share List | 3.86 |
| Industry | Basic Materials | 4.32 |
| Industry | Consumer Discretionary | 30.19 |
| Industry | Consumer Staples | 17.32 |
| Industry | Financials | 5.18 |
| Industry | Health Care | 3.86 |
| Industry | Industrials | 20.86 |
| Industry | Telecommunications | 11.15 |
| Industry | Utilities | 2.39 |
| Industry | nan | 4.73 |
| Supersector | Banks | 1.22 |
| Supersector | Basic Resources | 4.32 |
| Supersector | Construction and Materials | 8.31 |
| Supersector | Financial Services | 3.96 |
| Supersector | Food, Beverage and Tobacco | 17.32 |
| Supersector | Health Care | 3.86 |
| Supersector | Industrial Goods and Services | 12.55 |
| Supersector | Retail | 23.95 |
| Supersector | Telecommunications | 11.15 |
| Supersector | Travel and Leisure | 6.24 |
| Supersector | Utilities | 2.39 |
| Supersector | nan | 4.73 |

</details>


<details markdown="1">
<summary><strong>Table 2.s. update2_penalty_sell: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 10.72 |
| country_market | TLN | 34.45 |
| country_market | VLN | 54.83 |
| segment | Baltic Main List | 88.49 |
| segment | First North Baltic Share List | 11.51 |
| Industry | Basic Materials | 5.98 |
| Industry | Consumer Discretionary | 17.52 |
| Industry | Consumer Staples | 28.99 |
| Industry | Financials | 14.66 |
| Industry | Health Care | 5.53 |
| Industry | Industrials | 22.32 |
| Industry | Telecommunications | 2.17 |
| Industry | Utilities | 1.75 |
| Industry | nan | 1.09 |
| Supersector | Banks | 3.16 |
| Supersector | Basic Resources | 5.98 |
| Supersector | Construction and Materials | 8.31 |
| Supersector | Financial Services | 11.50 |
| Supersector | Food, Beverage and Tobacco | 28.99 |
| Supersector | Health Care | 5.53 |
| Supersector | Industrial Goods and Services | 14.01 |
| Supersector | Retail | 14.39 |
| Supersector | Telecommunications | 2.17 |
| Supersector | Travel and Leisure | 3.13 |
| Supersector | Utilities | 1.75 |
| Supersector | nan | 1.09 |

</details>


<details markdown="1">
<summary><strong>Table 2.t. update2_penalty_no_sell: country, list and industry concentration</strong></summary>

| dimension | category | capital_percent |
| --- | --- | --- |
| country_market | RIG | 13.70 |
| country_market | TLN | 49.69 |
| country_market | VLN | 36.61 |
| segment | Baltic Main List | 97.10 |
| segment | First North Baltic Share List | 2.90 |
| Industry | Basic Materials | 6.93 |
| Industry | Consumer Discretionary | 32.28 |
| Industry | Consumer Staples | 12.47 |
| Industry | Financials | 7.17 |
| Industry | Health Care | 2.90 |
| Industry | Industrials | 20.03 |
| Industry | Telecommunications | 11.27 |
| Industry | Utilities | 2.47 |
| Industry | nan | 4.49 |
| Supersector | Banks | 4.28 |
| Supersector | Basic Resources | 6.93 |
| Supersector | Construction and Materials | 6.86 |
| Supersector | Financial Services | 2.89 |
| Supersector | Food, Beverage and Tobacco | 12.47 |
| Supersector | Health Care | 2.90 |
| Supersector | Industrial Goods and Services | 13.17 |
| Supersector | Retail | 27.81 |
| Supersector | Telecommunications | 11.27 |
| Supersector | Travel and Leisure | 4.47 |
| Supersector | Utilities | 2.47 |
| Supersector | nan | 4.49 |

</details>


The number of holdings is not a diversification measure. Top-five and top-ten shares show how much capital is concentrated in the largest positions; HHI and the effective number of positions measure weight concentration. Country, list, industry and supersector totals expose common economic exposures that a position count conceals. Very small positions add trading complexity while making little difference to risk.

### In-sample, out-of-sample and complete-period validation









netSD counts outgoing minus incoming FSD, SSD and TSD relations relative to a fixed comparison network. It has no monetary unit and does not state expected profit, maximum loss or suitability for an investor. Use it as a distribution-ranking signal together with return, volatility, drawdown, VaR/ES, liquidity, concentration and cost results.

The S&P 500 series is a USD price-index benchmark. It excludes dividends and has not been converted into EUR investor returns, so it is retained only as a broad market sensitivity reference. Direct performance claims require a total-return benchmark converted to EUR over identical dates.

Dividend values are historical gross cash distributions. They are excluded from optimisation and are neither a forecast nor an assessment of dividend sustainability. Company valuation, earnings quality, debt, free cash flow and payout coverage have not been modelled; each proposed purchase therefore requires a separate fundamental review.

</details>

<details markdown="1" class="report-section" id="analytics-2-7">
<summary><strong>2.7. Model</strong></summary>

### Exact mathematical formulation of the netSD portfolio

Direct penalty formulation: maximise J(q)=netSD(q)-0.00015*N(q)^2-0.001/[sum_j w_j^2]-0.006*P_D(q), where N(q) is the number of active positions and P_D(q)=sum_{j:q_j>0} max(10-a_j*q_j,0)/10. Here a_j is the five-year average annual dividend per share. The sales and no-sales versions use the same objective with their respective holding constraints. This objective may accept a slightly lower raw netSD when the portfolio becomes materially simpler or removes economically negligible positions.

Let R_tj be the return of share j on date t, w_j its final portfolio weight, and r_p,t = Σ_j w_j R_tj the candidate portfolio return. Let K denote the fixed reference set consisting of 55 quality-approved shares, the current portfolio, and ten earlier portfolios.

For entity i, define H_i^(1)(x)=F_i(x) and H_i^(q)(x)=∫_{-∞}^x H_i^(q-1)(u)du for q=2,3. Entity i dominates entity k at order q when H_i^(q)(x) ≤ H_k^(q)(x) for every observed support point x, with a strict inequality for at least one x. The third-order comparison additionally requires E[R_i] ≥ E[R_k]. Let a_ik^(q)=1 when this condition holds and 0 otherwise.

OUT(p)=Σ_{k∈K}Σ_{q=1}^3 a_pk^(q),   IN(p)=Σ_{k∈K}Σ_{q=1}^3 a_kp^(q),   D=max_i{OUT(i)+IN(i)},   netSD(p)=[OUT(p)-IN(p)]/D.

Primary optimisation problem: max_w netSD(w), subject to Σ_j w_j=1; w_j≥0; μᵀw≥μ_current; and w_j=0 for every share j whose individual netSD_j≤0 or which belongs to the Baltic Secondary List. Selling existing holdings is allowed, so current positions do not impose lower bounds. Historical dividends are reported separately and do not enter the objective.

The individual-share screening score is calculated before the new candidate enters the network: netSD_j=(OUT_j-IN_j)/D_ref in the fixed 67-entity reference system. This prevents the candidate from changing its own admissible investment universe.

The unchanged reference set contains 55 quality-approved shares, the current portfolio, and ten earlier portfolios: Markowitz, MAD, Minimax, Robust and NetSD estimated from the training sample and from the complete sample. The larger pairwise matrices are diagnostics only; their expanded-network ratios are not presented as the optimisation score.

The objective is discrete and non-convex. ISRES evaluates candidate portfolios numerically. The report therefore states the best solution found; it does not claim a mathematical certificate of global optimality.

</details>

<details markdown="1" class="report-section" id="analytics-2-8">
<summary><strong>2.8. Data coverage</strong></summary>

The official Nasdaq Baltic list contained 67 shares. 55 shares had Yahoo closing-price history covering the complete study window and entered the common-date return matrix. Shares with incomplete or unavailable histories are excluded from both the optimisation and Table 2.b. No price interpolation or zero-return replacement was used.

Sources: official Nasdaq Baltic share-list and dividend/event workbooks; Yahoo Finance unadjusted closing prices downloaded through quantmod; official Nasdaq Baltic corrections for MODE and MOLNR in 2025 and the complete VIRSI history. Return analysis ends 2026-10-27; latest valuation prices run through 2026-10-27.

</details>

</details>

</main>
<script>
const metricModal=document.createElement('div');
metricModal.className='metric-modal';metricModal.hidden=true;
metricModal.innerHTML='<div class="metric-modal-card" role="dialog" aria-modal="true" aria-labelledby="metric-modal-title"><button type="button" class="metric-modal-close" aria-label="Close">&times;</button><h3 id="metric-modal-title"></h3><p><strong>Meaning:</strong> <span class="metric-modal-meaning"></span></p><p><strong>Calculation:</strong> <span class="metric-modal-calculation"></span></p><p><strong>Interpretation:</strong> <span class="metric-modal-interpretation"></span></p></div>';
document.body.appendChild(metricModal);
function closeMetricModal(){metricModal.hidden=true;}
document.addEventListener('click',function(event){
  const button=event.target.closest('.metric-help-button');
  if(button){metricModal.querySelector('h3').textContent=button.dataset.metric;metricModal.querySelector('.metric-modal-meaning').textContent=button.dataset.meaning;metricModal.querySelector('.metric-modal-calculation').textContent=button.dataset.calculation;metricModal.querySelector('.metric-modal-interpretation').textContent=button.dataset.interpretation;metricModal.hidden=false;metricModal.querySelector('.metric-modal-close').focus();return;}
  if(event.target===metricModal||event.target.closest('.metric-modal-close'))closeMetricModal();
});
document.addEventListener('keydown',function(event){if(event.key==='Escape')closeMetricModal();});
document.querySelectorAll('details.stock-profile').forEach(function(profile) {
  profile.addEventListener('toggle', function() {
    if (!profile.open) return;
    document.querySelectorAll('details.stock-profile[open]').forEach(function(other) {
      if (other !== profile) other.open = false;
    });
  });
});
document.querySelectorAll('.profile-filters').forEach(function(filterBlock) {
  const section=filterBlock.closest('details.report-section');
  if (!section) return;
    const signalFilters=[...filterBlock.querySelectorAll('.signal-filters input[type="checkbox"]')];
    const netsdFilters=[...filterBlock.querySelectorAll('.netsd-filters input[type="checkbox"]')];
    const dividendFilters=[...filterBlock.querySelectorAll('.dividend-filters input[type="checkbox"]')];
    const filters=[...signalFilters,...netsdFilters,...dividendFilters];
  const profiles=[...section.querySelectorAll('details.stock-profile')];
  const counter=filterBlock.querySelector('.profile-filter-count');
  function applyProfileFilters() {
      const selectedSignals=new Set(signalFilters.filter(box=>box.checked).map(box=>box.value));
      const selectedNetsdEffects=new Set(netsdFilters.filter(box=>box.checked).map(box=>box.value));
      const selectedDividendStatuses=new Set(dividendFilters.filter(box=>box.checked).map(box=>box.value));
    let visible=0;
    profiles.forEach(function(profile) {
        const show=selectedSignals.has(profile.dataset.signal) && selectedNetsdEffects.has(profile.dataset.netsdEffect) && selectedDividendStatuses.has(profile.dataset.dividendStatus);
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

const palette = ['#1b1b1b','#e41a1c','#377eb8','#4daf4a','#984ea3','#ff7f00','#a65628','#f781bf','#008080','#6a3d9a','#b2182b','#2166ac','#1b9e77','#d95f02'];
const linePatterns = [[],[10,5],[2,4],[10,4,2,4],[14,5],[6,3],[2,3,8,3],[12,3,3,3]];
function initialiseDominanceExplorer(box) {
  if (box.dataset.loaded) return;
  box.dataset.loaded = 'loading';
  const profile = box.dataset.asset, target = box.dataset.target || profile;
  const loadJson=url=>fetch(url).then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();});
  Promise.all([loadJson(`interactive/dominance/${profile}.json`),profile==='Portfolio'?Promise.resolve(null):loadJson('interactive/dominance/Portfolio.json')]).then(([data,universe]) => {
    // Individual files stay compact.  Other-share curves are interpolated from
    // the one shared universe file only when a stock profile is opened.
    if(universe){
      data.series_types=universe.series_types||{};
      const interpolate=(xs,ys,x)=>{if(x<=xs[0])return ys[0];if(x>=xs[xs.length-1])return ys[ys.length-1];let lo=0,hi=xs.length-1;while(hi-lo>1){const mid=(lo+hi)>>1;if(xs[mid]<=x)lo=mid;else hi=mid;}const w=(x-xs[lo])/(xs[hi]-xs[lo]||1);return ys[lo]+w*(ys[hi]-ys[lo]);};
      Object.keys(data.orders).forEach(component=>{const destination=data.orders[component],source=universe.orders[component];Object.entries(source.series).forEach(([name,values])=>{if(!destination.series[name])destination.series[name]=destination.x.map(x=>interpolate(source.x,values,x));});});
    }
    const displayName=name=>name==='Baltic_NetSD'?'Update: sales allowed':name==='curent_update_baltic'?'Update: no sales':name==='update2_penalty_sell'?'Update2 penalty: sales allowed':name==='update2_penalty_no_sell'?'Update2 penalty: no sales':name;
    const first=data.orders.FSD, seriesNames=Object.keys(first.series), preferred=profile==='Portfolio'?['Current','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','SP500']:['Current','SP500','curent_update_baltic','Baltic_NetSD','update2_penalty_sell','update2_penalty_no_sell'];
    const portfolioNames=seriesNames.filter(x=>(data.series_types||{})[x]==='portfolio');
    const shareNames=seriesNames.filter(x=>(data.series_types||{})[x]==='share');
    const benchmarkPool=profile==='Portfolio'?seriesNames:portfolioNames;
    const benchmarks=[...preferred.filter(x=>benchmarkPool.includes(x)),...benchmarkPool.filter(x=>!preferred.includes(x))];
    const otherShares=shareNames.filter(x=>x!==target);
    const defaultSelected=new Set(preferred.filter(x=>seriesNames.includes(x)).slice(0,3));
    const defaultComparators=new Set(['Current','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell'].filter(x=>benchmarks.includes(x)));
    box.innerHTML = `<div class="dominance-controls">
      <label>Component<select class="dom-order"><option>FSD</option><option>SSD</option><option>TSD</option></select></label>
      ${profile==='Portfolio'?`<label>Comparison base<select class="dom-benchmark">${benchmarks.map(x=>`<option value="${x}"${x===target?' selected':''}>${displayName(x)}</option>`).join('')}</select></label>`:
      `<label class="dominance-compact-wrap">Comparison portfolios
        <select class="dom-comparators dominance-multiselect dominance-compact-select" multiple size="5">${benchmarks.map(x=>`<option value="${x}"${defaultComparators.has(x)?' selected':''}>${displayName(x)}</option>`).join('')}</select>
        <small>Ctrl/Cmd selects several.</small></label>
       <label class="dominance-compact-wrap">Other shares
        <select class="dom-share-comparators dominance-multiselect dominance-compact-select" multiple size="5">${otherShares.map(x=>`<option value="${x}">${x}</option>`).join('')}</select>
        <small>Optional share comparisons.</small></label>`}
      ${profile==='Portfolio'?`<label class="dominance-multiselect-wrap">Displayed portfolios and shares
        <select class="dominance-multiselect" multiple size="10">
          <optgroup label="Portfolios">${portfolioNames.map(x=>`<option value="${x}"${defaultSelected.has(x)?' selected':''}>${displayName(x)}</option>`).join('')}</optgroup>
          <optgroup label="Shares">${shareNames.map(x=>`<option value="${x}">${x}</option>`).join('')}</optgroup>
        </select><small>Use Ctrl (Windows) or Cmd (Mac) to select several entries.</small></label>`:''}
      <label>X position: <output class="dom-xout">50.0%</output><input class="dom-xpos" type="range" min="0" max="1000" value="500" step="1"></label>
      <label>Horizontal magnification: <output class="dom-hout">8x</output><input class="dom-hzoom" type="range" min="1" max="100" value="8" step="1"></label>
      <button class="dom-save" type="button">Save high-resolution PNG</button>
    </div><canvas class="dominance-canvas"></canvas><p class="dominance-status">Move the x-position slider, click a left-hand graph, or use the mouse wheel over it. The right-hand panels magnify the selected interval.</p>`;
    const canvas=box.querySelector('canvas'), order=box.querySelector('.dom-order'), benchmark=box.querySelector('.dom-benchmark'), comparators=box.querySelector('.dom-comparators'), shareComparators=box.querySelector('.dom-share-comparators'), multi=profile==='Portfolio'?box.querySelector('.dominance-multiselect'):null, xpos=box.querySelector('.dom-xpos'), hz=box.querySelector('.dom-hzoom'), status=box.querySelector('.dominance-status');
    let centre=.5, hit=[];
    function render() {
      const d=data.orders[order.value], x=d.x, allNames=Object.keys(d.series), selected=multi?[...multi.selectedOptions].map(o=>o.value):[];
      const selectedComparators=[...(comparators?[...comparators.selectedOptions].map(o=>o.value):[]),...(shareComparators?[...shareComparators.selectedOptions].map(o=>o.value):[])];
      const bench=profile==='Portfolio'?benchmark.value:(selectedComparators[0]||'');
      // A share profile always compares that concrete share with the selected
      // portfolio.  The portfolio explorer instead uses the selected benchmark
      // as its base and may compare it with several selected entities.
      const baseName=profile==='Portfolio'?bench:target;
      const names=(profile==='Portfolio'?[baseName,...selected]:[target,...selectedComparators]).filter((k,i,a)=>d.series[k]&&a.indexOf(k)===i), n=x.length;
      const rect=canvas.getBoundingClientRect(), ratio=Math.min(Math.max(window.devicePixelRatio||1,2),3);
      canvas.width=Math.max(900,Math.round(rect.width*ratio)); canvas.height=Math.round(rect.height*ratio);
      const ctx=canvas.getContext('2d'); ctx.setTransform(ratio,0,0,ratio,0,0); const W=canvas.width/ratio,H=canvas.height/ratio;
      ctx.clearRect(0,0,W,H); ctx.font='12px system-ui';
      const L=67,R=18,T=128,rowGap=64,colGap=48,leftW=(W-L-R-colGap)*.64,rightW=(W-L-R-colGap)*.36,panelH=(H-T-rowGap-48)/2;
      const main={l:L,r:L+leftW,t:T,b:T+panelH}, zoom={l:L+leftW+colGap,r:W-R,t:T,b:T+panelH};
      const diff={l:L,r:L+leftW,t:T+panelH+rowGap,b:T+2*panelH+rowGap}, diffZoom={l:L+leftW+colGap,r:W-R,t:T+panelH+rowGap,b:T+2*panelH+rowGap}; hit=[main,diff];
      const mid=Math.round(centre*(n-1)), count=Math.max(8,Math.round(n/Number(hz.value))), lo=Math.max(0,Math.min(n-count,mid-Math.floor(count/2))), hi=Math.min(n-1,lo+count-1);
      const comparisonNames=profile==='Portfolio'?names.filter(k=>k!==baseName):selectedComparators.filter(k=>d.series[k]);
      if(!comparisonNames.length){status.textContent='Select at least one portfolio or share in addition to the comparison base.';return;}
      const differences=Object.fromEntries(comparisonNames.map(k=>[k,d.series[baseName].map((v,i)=>v-d.series[k][i])]));
      const focus=profile==='Portfolio'?comparisonNames[0]:bench, difference=differences[focus];
      function yrange(i0,i1,keys=names) { let mn=Infinity,mx=-Infinity; keys.forEach(k=>{for(let i=i0;i<=i1;i++){const v=d.series[k][i];if(v<mn)mn=v;if(v>mx)mx=v;}}); if(mx===mn){mx+=1;mn-=1} return [mn,mx]; }
      function arrayRange(a,i0,i1){let mn=Infinity,mx=-Infinity;for(let i=i0;i<=i1;i++){if(a[i]<mn)mn=a[i];if(a[i]>mx)mx=a[i];}if(mx===mn){mx+=1;mn-=1}return[mn,mx];}
      function differenceRange(i0,i1){let mn=Infinity,mx=-Infinity;comparisonNames.forEach(k=>{const r=arrayRange(differences[k],i0,i1);mn=Math.min(mn,r[0]);mx=Math.max(mx,r[1]);});if(mx===mn){mx+=1;mn-=1}return[mn,mx];}
      function axes(p,x0,x1,y0,y1,label) { ctx.strokeStyle='#9aabb5';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.l,p.t);ctx.lineTo(p.l,p.b);ctx.lineTo(p.r,p.b);ctx.stroke();ctx.fillStyle='#263d4b';ctx.fillText(label,p.l,p.t-9); for(let j=0;j<=6;j++){const xx=p.l+(p.r-p.l)*j/6,xv=x0+(x1-x0)*j/6;ctx.fillText(xv.toFixed(5),xx-22,p.b+17);} for(let j=0;j<=5;j++){const yy=p.b-(p.b-p.t)*j/5,yv=y0+(y1-y0)*j/5;ctx.fillText(yv.toExponential(2),Math.max(1,p.l-62),yy+4);} if(x0<=0&&x1>=0){const zx=p.l+(0-x0)/(x1-x0)*(p.r-p.l);ctx.strokeStyle='#17212b';ctx.lineWidth=2;ctx.setLineDash([6,4]);ctx.beginPath();ctx.moveTo(zx,p.t);ctx.lineTo(zx,p.b);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#17212b';ctx.font='bold 13px system-ui';ctx.fillText('x = 0',zx+5,p.t+14);ctx.font='12px system-ui';} if(y0<=0&&y1>=0){const zy=p.b-(0-y0)/(y1-y0)*(p.b-p.t);ctx.strokeStyle='#17212b';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(p.l,zy);ctx.lineTo(p.r,zy);ctx.stroke();ctx.fillStyle='#17212b';ctx.font='bold 13px system-ui';ctx.fillText('0',p.l-15,zy+4);ctx.font='12px system-ui';} }
      function seriesStyle(k,ki){
        if(k===baseName)return{colour:profile==='Portfolio'?'#111111':'#c2185b',dash:[],width:3.6,alpha:1};
        if(k==='Current')return{colour:'#009e73',dash:[12,5],width:3.0,alpha:1};
        if(k==='Baltic_NetSD')return{colour:'#0072b2',dash:[2,4],width:3.0,alpha:1};
        if(k==='curent_update_baltic')return{colour:'#d55e00',dash:[10,4,2,4],width:3.0,alpha:1};
        if(k===bench)return{colour:'#6a3d9a',dash:[14,5],width:3.0,alpha:1};
        return{colour:palette[ki%palette.length],dash:linePatterns[ki%linePatterns.length],width:1.6,alpha:.62};
      }
      function plot(p,i0,i1,y0,y1) { names.forEach((k,ki)=>{const style=seriesStyle(k,ki);ctx.strokeStyle=style.colour;ctx.setLineDash(style.dash);ctx.globalAlpha=style.alpha;ctx.lineWidth=style.width;ctx.beginPath();for(let i=i0;i<=i1;i++){const px=p.l+(x[i]-x[i0])/(x[i1]-x[i0]||1)*(p.r-p.l),py=p.b-(d.series[k][i]-y0)/(y1-y0||1)*(p.b-p.t);if(i===i0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}ctx.stroke();});ctx.globalAlpha=1;ctx.setLineDash([]); }
      function plotDifference(p,i0,i1,y0,y1){comparisonNames.forEach(k=>{const a=differences[k],style=seriesStyle(k,names.indexOf(k));ctx.strokeStyle=style.colour;ctx.setLineDash(style.dash);ctx.lineWidth=k===bench?3.4:(profile==='Portfolio'?1.7:2.8);ctx.globalAlpha=k===bench?1:(profile==='Portfolio'?.68:1);ctx.beginPath();for(let i=i0;i<=i1;i++){const px=p.l+(x[i]-x[i0])/(x[i1]-x[i0]||1)*(p.r-p.l),py=p.b-(a[i]-y0)/(y1-y0||1)*(p.b-p.t);if(i===i0)ctx.moveTo(px,py);else ctx.lineTo(px,py);}ctx.stroke();});ctx.globalAlpha=1;ctx.setLineDash([]);}
      const ym=yrange(0,n-1); axes(main,x[0],x[n-1],ym[0],ym[1],`${displayName(baseName)}: ${order.value} components - scroll or click to move`); plot(main,0,n-1,ym[0],ym[1]);
      const sx0=main.l+(x[lo]-x[0])/(x[n-1]-x[0])*(main.r-main.l), sx1=main.l+(x[hi]-x[0])/(x[n-1]-x[0])*(main.r-main.l);ctx.strokeStyle='#d7191c';ctx.lineWidth=2;ctx.strokeRect(sx0,main.t,Math.max(2,sx1-sx0),main.b-main.t);
      let yz=yrange(lo,hi); axes(zoom,x[lo],x[hi],yz[0],yz[1],`Selected component interval (${hz.value}x horizontal)`); plot(zoom,lo,hi,yz[0],yz[1]);
      let yd=differenceRange(0,n-1);axes(diff,x[0],x[n-1],yd[0],yd[1],profile==='Portfolio'?`${displayName(baseName)} minus selected portfolios and shares`:`${target} minus selected portfolios and shares`);plotDifference(diff,0,n-1,yd[0],yd[1]);ctx.strokeStyle='#d7191c';ctx.lineWidth=2;ctx.strokeRect(sx0,diff.t,Math.max(2,sx1-sx0),diff.b-diff.t);
      let ydz=differenceRange(lo,hi);axes(diffZoom,x[lo],x[hi],ydz[0],ydz[1],`Selected difference interval (${hz.value}x horizontal)`);plotDifference(diffZoom,lo,hi,ydz[0],ydz[1]);
      const legend=names; legend.forEach((k,j)=>{const style=seriesStyle(k,names.indexOf(k)),lx=L+(j%3)*Math.max(190,(W-L-R)/3),ly=20+Math.floor(j/3)*20;ctx.strokeStyle=style.colour;ctx.setLineDash(style.dash);ctx.lineWidth=style.width;ctx.beginPath();ctx.moveTo(lx,ly);ctx.lineTo(lx+24,ly);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#263d4b';ctx.fillText(displayName(k),lx+31,ly+4);});
      const values=names.map(k=>`${displayName(k)}=${d.series[k][mid].toExponential(5)}`).join(' | '); status.textContent=`x=${x[mid].toFixed(6)}; selected interval [${x[lo].toFixed(6)}, ${x[hi].toFixed(6)}]; ${displayName(baseName)}-${displayName(focus)}=${difference[mid].toExponential(5)} | ${values}`;
      xpos.value=Math.round(centre*1000);box.querySelector('.dom-xout').value=`${(100*centre).toFixed(1)}%`;box.querySelector('.dom-hout').value=`${hz.value}x`;
    }
    [order,benchmark,comparators,shareComparators,hz,multi].filter(Boolean).forEach(el=>el.addEventListener('input',render));xpos.addEventListener('input',()=>{centre=Number(xpos.value)/1000;render();});
    canvas.addEventListener('click',e=>{const r=canvas.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;const p=hit.find(q=>px>=q.l&&px<=q.r&&py>=q.t&&py<=q.b);if(p){centre=Math.max(0,Math.min(1,(px-p.l)/(p.r-p.l)));render();}});
    canvas.addEventListener('wheel',e=>{const r=canvas.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top;if(hit.some(q=>px>=q.l&&px<=q.r&&py>=q.t&&py<=q.b)){e.preventDefault();centre=Math.max(0,Math.min(1,centre+Math.sign(e.deltaY)*.015));render();}},{passive:false});
    box.querySelector('.dom-save').addEventListener('click',()=>{const a=document.createElement('a');a.download=`${profile==='Portfolio'?benchmark.value:target}_${order.value}_interactive.png`;a.href=canvas.toDataURL('image/png');a.click();});
    window.addEventListener('resize',render); render(); box.dataset.loaded='yes';
  }).catch(err=>{box.innerHTML=`<p>Interactive graph could not be loaded: ${err.message}</p>`;box.dataset.loaded='';});
}
document.querySelectorAll('details.dominance-components').forEach(function(d) { d.addEventListener('toggle',function(){if(d.open){const box=d.querySelector('.dominance-explorer');if(box)initialiseDominanceExplorer(box);}}); });

function initialiseFrontierExplorer(box) {
  if (box.dataset.loaded) return;
  box.dataset.loaded='loading';
  fetch('interactive/frontiers.json').then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}).then(data=>{
    const models=Object.keys(data.models), first=data.models[models[0]], names=first.portfolios.map(p=>p.name);
    const portfolioNames=first.portfolios.filter(p=>p.type==='portfolio'&&p.name!=='Current').map(p=>p.name), sharePoints=first.portfolios.filter(p=>p.type==='share'), shareNames=sharePoints.map(p=>p.name), heldShares=new Set(sharePoints.filter(p=>p.held).map(p=>p.name));
    const preferred=['Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','NetSD_full','NetSD_training'];
    box.innerHTML=`<div class="frontier-controls">
      <label>Frontier model<select class="front-model">${models.map(x=>`<option>${x}</option>`).join('')}</select></label>
      <label class="frontier-multiselect-wrap">Compare Current with portfolios and shares
        <select class="frontier-multiselect" multiple size="10">
          <optgroup label="Portfolios">${[...preferred.filter(x=>portfolioNames.includes(x)),...portfolioNames.filter(x=>!preferred.includes(x))].map(x=>`<option value="${x}" ${['Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell'].includes(x)?'selected':''}>${x}</option>`).join('')}</optgroup>
          <optgroup label="Shares currently held">${shareNames.filter(x=>heldShares.has(x)).map(x=>`<option value="${x}" selected>${x}</option>`).join('')}</optgroup>
          <optgroup label="Other shares">${shareNames.filter(x=>!heldShares.has(x)).map(x=>`<option value="${x}">${x}</option>`).join('')}</optgroup>
        </select><span class="frontier-select-help">Hold Ctrl (Windows) or Command (Mac) to select several entries.</span>
      </label>
      <label>Horizontal view: <output class="front-xout">100%</output><input class="front-xzoom" type="range" min="20" max="100" value="100" step="1"></label>
      <label>Vertical view: <output class="front-yout">100%</output><input class="front-yzoom" type="range" min="20" max="100" value="100" step="1"></label>
      <button class="front-reset" type="button">Reset view</button><button class="front-save" type="button">Save high-resolution PNG</button>
    </div><canvas class="frontier-canvas"></canvas><p class="frontier-status"></p>`;
    const canvas=box.querySelector('canvas'), model=box.querySelector('.front-model'), compareSelect=box.querySelector('.frontier-multiselect'), xzoom=box.querySelector('.front-xzoom'), yzoom=box.querySelector('.front-yzoom'), status=box.querySelector('.frontier-status');
    function render(){
      const d=data.models[model.value], frontier=d.frontier, points=d.portfolios;
      const ratio=Math.min(Math.max(window.devicePixelRatio||1,2),3), rect=canvas.getBoundingClientRect();
      canvas.width=Math.max(900,Math.round(rect.width*ratio));canvas.height=Math.round(rect.height*ratio);
      const ctx=canvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);const W=canvas.width/ratio,H=canvas.height/ratio,L=82,R=28,T=45,B=68;
      ctx.clearRect(0,0,W,H);ctx.font='12px system-ui';
      const risks=[...frontier.map(p=>p.risk),...points.map(p=>p.risk)], means=[...frontier.map(p=>p.mean),...points.map(p=>p.mean)];
      const fullX=[Math.min(...risks,0),Math.max(...risks)],fullY=[Math.min(...means,0),Math.max(...means)];
      const xf=Number(xzoom.value)/100,yf=Number(yzoom.value)/100;
      const x0=fullX[0],x1=x0+(fullX[1]-x0)*xf,y0=fullY[0],y1=y0+(fullY[1]-y0)*yf;
      const sx=x=>L+(x-x0)/(x1-x0||1)*(W-L-R), sy=y=>H-B-(y-y0)/(y1-y0||1)*(H-T-B);
      ctx.strokeStyle='#9aabb5';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(L,T);ctx.lineTo(L,H-B);ctx.lineTo(W-R,H-B);ctx.stroke();
      for(let j=0;j<=6;j++){const v=x0+(x1-x0)*j/6,px=sx(v);ctx.fillStyle='#344c5a';ctx.fillText(v.toFixed(5),px-22,H-B+20);}
      for(let j=0;j<=6;j++){const v=y0+(y1-y0)*j/6,py=sy(v);ctx.fillStyle='#344c5a';ctx.fillText(v.toFixed(5),8,py+4);}
      ctx.font='bold 13px system-ui';ctx.fillStyle='#173246';ctx.fillText(d.risk_label,L,H-18);ctx.save();ctx.translate(18,(T+H-B)/2);ctx.rotate(-Math.PI/2);ctx.fillText('Mean daily return',0,0);ctx.restore();
      ctx.strokeStyle='#007f8b';ctx.lineWidth=3;ctx.beginPath();frontier.forEach((p,i)=>{const px=sx(p.risk),py=sy(p.mean);if(i===0)ctx.moveTo(px,py);else ctx.lineTo(px,py);});ctx.stroke();
      const selected=new Set([...compareSelect.selectedOptions].map(x=>x.value)), labelled=new Set(['Current',...selected]);
      points.forEach((p,pi)=>{if(p.risk<x0||p.risk>x1||p.mean<y0||p.mean>y1)return;const isCurrent=p.name==='Current',isSelected=selected.has(p.name),isShare=p.type==='share';ctx.beginPath();if(isShare&&isSelected){ctx.rect(sx(p.risk)-6,sy(p.mean)-6,12,12);}else{ctx.arc(sx(p.risk),sy(p.mean),isCurrent||isSelected?7:(isShare?3:4),0,2*Math.PI);}ctx.fillStyle=isCurrent?'#d7191c':isSelected?(p.name==='Baltic_NetSD'?'#0072b2':p.name==='curent_update_baltic'?'#009e73':palette[pi%palette.length]):(isShare?'#d5dadd':'#8f9ba2');ctx.fill();ctx.strokeStyle=isSelected?'#17212b':'#fff';ctx.lineWidth=isSelected?1.5:1;ctx.stroke();if(labelled.has(p.name)){ctx.font='bold 12px system-ui';ctx.fillStyle='#17212b';ctx.fillText(p.name,sx(p.risk)+9,sy(p.mean)-7);}});
      ctx.strokeStyle='#007f8b';ctx.lineWidth=3;ctx.beginPath();ctx.moveTo(L,T-20);ctx.lineTo(L+28,T-20);ctx.stroke();ctx.fillStyle='#17212b';ctx.font='12px system-ui';ctx.fillText(model.value==='NetSD'?'Observed nondominated candidate envelope':'Efficient frontier',L+36,T-16);
      const cur=points.find(p=>p.name==='Current'), selectedPoints=points.filter(p=>selected.has(p.name));status.textContent=cur?`Current: risk ${cur.risk.toFixed(6)}, mean ${cur.mean.toFixed(6)}${selectedPoints.map(p=>` | ${p.name}: risk ${p.risk.toFixed(6)}, mean ${p.mean.toFixed(6)}`).join('')}`:'';
      box.querySelector('.front-xout').value=`${xzoom.value}%`;box.querySelector('.front-yout').value=`${yzoom.value}%`;
    }
    [model,xzoom,yzoom,compareSelect].forEach(x=>x.addEventListener('input',render));
    canvas.addEventListener('wheel',e=>{e.preventDefault();const control=e.shiftKey?yzoom:xzoom;control.value=Math.max(20,Math.min(100,Number(control.value)+Math.sign(e.deltaY)*4));render();},{passive:false});
    box.querySelector('.front-reset').addEventListener('click',()=>{xzoom.value=100;yzoom.value=100;render();});
    box.querySelector('.front-save').addEventListener('click',()=>{const a=document.createElement('a');a.download=`${model.value}_interactive_frontier.png`;a.href=canvas.toDataURL('image/png');a.click();});
    window.addEventListener('resize',render);render();box.dataset.loaded='yes';
  }).catch(err=>{box.innerHTML=`<p>Interactive frontier could not be loaded: ${err.message}</p>`;box.dataset.loaded='';});
}
document.querySelectorAll('details.frontier-components').forEach(function(d){d.addEventListener('toggle',function(){if(d.open){const box=d.querySelector('.frontier-explorer');if(box)initialiseFrontierExplorer(box);}});if(d.open){const box=d.querySelector('.frontier-explorer');if(box)initialiseFrontierExplorer(box);}});

function initialiseCumulativeExplorer(box) {
  if(box.dataset.loaded)return;
  box.dataset.loaded='loading';
  fetch('interactive/cumulative_drawdown.json').then(r=>{if(!r.ok)throw new Error(`HTTP ${r.status}`);return r.json();}).then(data=>{
    const names=Object.keys(data.series), types=data.series_types||{};
    const portfolios=names.filter(x=>types[x]==='portfolio'), shares=names.filter(x=>types[x]==='share');
    const preferred=['Current','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell','SP500'];
    const orderedPortfolios=[...preferred.filter(x=>portfolios.includes(x)),...portfolios.filter(x=>!preferred.includes(x))];
    const defaults=new Set(['Current','Baltic_NetSD','curent_update_baltic','update2_penalty_sell','update2_penalty_no_sell']);
    box.innerHTML=`<div class="cumulative-controls">
      <label class="cumulative-multiselect-wrap">Displayed portfolios, benchmark and shares
        <select class="cumulative-multiselect" multiple size="10">
          <optgroup label="Portfolios and benchmark">${orderedPortfolios.map(x=>`<option value="${x}"${defaults.has(x)?' selected':''}>${x}</option>`).join('')}</optgroup>
          <optgroup label="Individual shares">${shares.map(x=>`<option value="${x}">${x}</option>`).join('')}</optgroup>
        </select><small>Use Ctrl (Windows) or Cmd (Mac) to select several entries.</small>
      </label><button class="cum-reset" type="button">Reset selection</button><button class="cum-save" type="button">Save high-resolution PNG</button>
    </div><canvas class="cumulative-canvas"></canvas><p class="cumulative-status"></p>`;
    const select=box.querySelector('.cumulative-multiselect'), canvas=box.querySelector('canvas'), status=box.querySelector('.cumulative-status');
    function styleFor(name,index){
      if(name==='Current')return{colour:'#d7191c',dash:[],width:3.4};
      if(name==='Baltic_NetSD')return{colour:'#0072b2',dash:[10,4],width:3};
      if(name==='curent_update_baltic')return{colour:'#009e73',dash:[2,4],width:3};
      if(name==='SP500')return{colour:'#7b3294',dash:[12,4,2,4],width:2.8};
      return{colour:palette[index%palette.length],dash:linePatterns[index%linePatterns.length],width:2};
    }
    function render(){
      const selected=[...select.selectedOptions].map(o=>o.value);
      if(!selected.length){status.textContent='Select at least one portfolio or share.';return;}
      const ratio=Math.min(Math.max(window.devicePixelRatio||1,2),3), rect=canvas.getBoundingClientRect();
      canvas.width=Math.max(900,Math.round(rect.width*ratio));canvas.height=Math.round(rect.height*ratio);
      const ctx=canvas.getContext('2d');ctx.setTransform(ratio,0,0,ratio,0,0);const W=canvas.width/ratio,H=canvas.height/ratio;
      ctx.clearRect(0,0,W,H);ctx.font='12px system-ui';
      const L=72,R=24,T=Math.max(58,28+Math.ceil(selected.length/4)*19),B=48,G=56,panelH=(H-T-B-G)/2;
      const upper={l:L,r:W-R,t:T,b:T+panelH},lower={l:L,r:W-R,t:T+panelH+G,b:H-B};
      const n=data.dates.length, dates=data.dates.map(x=>new Date(x+'T00:00:00'));
      function range(key){let mn=Infinity,mx=-Infinity;selected.forEach(name=>data.series[name][key].forEach(v=>{mn=Math.min(mn,v);mx=Math.max(mx,v);}));if(mx===mn){mx+=1;mn-=1}const pad=(mx-mn)*.06;return[mn-pad,mx+pad];}
      function axes(p,yr,label,showDates){ctx.strokeStyle='#9aabb5';ctx.lineWidth=1;ctx.beginPath();ctx.moveTo(p.l,p.t);ctx.lineTo(p.l,p.b);ctx.lineTo(p.r,p.b);ctx.stroke();ctx.fillStyle='#263d4b';ctx.font='bold 12px system-ui';ctx.fillText(label,p.l,p.t-9);ctx.font='12px system-ui';for(let j=0;j<=5;j++){const v=yr[0]+(yr[1]-yr[0])*j/5,y=p.b-(v-yr[0])/(yr[1]-yr[0])*(p.b-p.t);ctx.fillText(v.toFixed(label.startsWith('Drawdown')?2:3),5,y+4);ctx.strokeStyle='#e1e8eb';ctx.beginPath();ctx.moveTo(p.l,y);ctx.lineTo(p.r,y);ctx.stroke();}if(showDates){for(let j=0;j<=6;j++){const i=Math.round((n-1)*j/6),x=p.l+(p.r-p.l)*j/6;ctx.fillStyle='#344c5a';ctx.fillText(data.dates[i].slice(0,7),x-23,p.b+18);}}}
      function plot(p,key,yr){selected.forEach((name,index)=>{const values=data.series[name][key],s=styleFor(name,index);ctx.strokeStyle=s.colour;ctx.setLineDash(s.dash);ctx.lineWidth=s.width;ctx.beginPath();values.forEach((v,i)=>{const x=p.l+(p.r-p.l)*i/(n-1),y=p.b-(v-yr[0])/(yr[1]-yr[0])*(p.b-p.t);if(i===0)ctx.moveTo(x,y);else ctx.lineTo(x,y);});ctx.stroke();});ctx.setLineDash([]);}
      const wealthRange=range('cumulative'),drawRange=range('drawdown');axes(upper,wealthRange,'Cumulative value of 1 monetary unit',false);plot(upper,'cumulative',wealthRange);axes(lower,drawRange,'Drawdown from previous peak',true);plot(lower,'drawdown',drawRange);
      selected.forEach((name,j)=>{const s=styleFor(name,j),x=L+(j%4)*Math.max(150,(W-L-R)/4),y=18+Math.floor(j/4)*19;ctx.strokeStyle=s.colour;ctx.setLineDash(s.dash);ctx.lineWidth=s.width;ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+24,y);ctx.stroke();ctx.setLineDash([]);ctx.fillStyle='#263d4b';ctx.font='12px system-ui';ctx.fillText(name,x+30,y+4);});
      status.textContent=selected.map(name=>{const s=data.series[name],last=s.cumulative.length-1;return`${name}: final value ${s.cumulative[last].toFixed(3)}, maximum drawdown ${(100*Math.min(...s.drawdown)).toFixed(2)}%`;}).join(' | ');
    }
    select.addEventListener('input',render);
    box.querySelector('.cum-reset').addEventListener('click',()=>{[...select.options].forEach(o=>o.selected=defaults.has(o.value));render();});
    box.querySelector('.cum-save').addEventListener('click',()=>{const a=document.createElement('a');a.download='interactive_cumulative_value_drawdowns.png';a.href=canvas.toDataURL('image/png');a.click();});
    window.addEventListener('resize',render);render();box.dataset.loaded='yes';
  }).catch(err=>{box.innerHTML=`<p>Interactive graph could not be loaded: ${err.message}</p>`;box.dataset.loaded='';});
}
document.querySelectorAll('details.cumulative-components').forEach(function(d){d.addEventListener('toggle',function(){if(d.open){const box=d.querySelector('.cumulative-explorer');if(box)initialiseCumulativeExplorer(box);}});if(d.open){const box=d.querySelector('.cumulative-explorer');if(box)initialiseCumulativeExplorer(box);}});
document.querySelectorAll('details.report-section').forEach(function(section){section.addEventListener('toggle',function(){if(!section.open)return;section.querySelectorAll('details.dominance-components[open] .dominance-explorer').forEach(initialiseDominanceExplorer);section.querySelectorAll('details.frontier-components[open] .frontier-explorer').forEach(initialiseFrontierExplorer);section.querySelectorAll('details.cumulative-components[open] .cumulative-explorer').forEach(initialiseCumulativeExplorer);});});
</script>
</body></html>
