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