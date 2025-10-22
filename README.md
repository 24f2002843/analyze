# Analyze App

## How to run
1. Install Python 3.11+ and Pandas 2.3.
2. Run the `execute.py` script to perform data analysis.
3. Use the web client by opening `index.html` in a browser.

## Features
- Data analysis using `execute.py`.
- Display results in a semantic UI.

## Accessibility
- Ensure keyboard navigation and screen reader compatibility.

## Design tokens (CSS variables/palette)
- Primary color: #4CAF50
- Secondary color: #f2f2f2
- Text color: #333
- Header background: #fff

## API endpoints used
- N/A for this version.

## Attachments used
- execute.py
- data.xlsx

## Keyword coverage
| Keyword | Where Implemented |
| ------- | ----------------- |
| execute.py | Main functionality |
| data.csv | Conversion of data.xlsx |
| .github/workflows/ci.yml | CI configuration |
| result.json | Generated in CI |

## Changelog: Round 1
- Added `execute.py`, corrected non-trivial error.
- Converted `data.xlsx` to `data.csv` and committed.
- Created GitHub Actions workflow at `.github/workflows/ci.yml`, included steps for ruff, executing script, and pages deploy.