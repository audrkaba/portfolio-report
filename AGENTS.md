# Publication quote check

Before every public-site push, enable the versioned hook with:
`git config --local core.hooksPath .githooks`.
Run `python scripts/refresh-watch-quotes.py --site .`, review and commit
watch-latest-quotes.json with the intended update, then push. The hook rechecks
providers unless this exact watch/quote snapshot was verified within90 seconds.
If new quotes appear, it updates the quote file and rejects the push so that
those changes can be reviewed and committed. Do not bypass this hook.
Set PORTFOLIO_PUBLISH_PYTHON when a specific interpreter is needed.

Latest quotes/NAV are separate from the signal history and frozen portfolio
inputs. Do not mark technical indicators or models freshly recalculated because
only this quote file changed. Provider failures retain the last genuine quote
with a visible failed-check indication; absent data remain unavailable.
Use local nonsynchronised working storage; publish only completed outputs.

# Required execution proof

Every push also runs scripts/check-execution-contract.py after the quote check. Each nonzero US BUY/SELL must strictly exceed EUR1 at every real node; all A variants are included. Standard No-sale initial cap is EUR2000 total/EUR750 per asset, later stages EUR1000/EUR750; Sale initial cap remains EUR1000. All sectors and US equities separately are capped at30% of invested shares/funds, excluding cash/fixed income, without passive exceptions. Never bypass the hook or replace a missing result with a rounded or invented trade. Model payload changes require an independently regenerated and reviewed execution-validation.json. Source/data hashes bind this proof to the actual public branches and semantic embedded plans.

Every publication also runs scripts/check-benchmark-coverage.py: Current overview, chapter3.3.1 standard/native tables and active dominance matrices must include Berkshire EUR alongside S&P500 EUR and Baltic OMXBBGI. Native measures must match the current-overview source hash, all7 windows and72 measures per entity. The native engine recomputes actual Berkshire returns; a heading-only fix is insufficient. Historical snapshots stay immutable.
