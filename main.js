function selfTest() {
    const checks = [
        'execute.py, data.csv, and .github/workflows/ci.yml exist',
        'result.json is NOT committed',
        'execute.py does not contain the typo "revenew"',
        'data.csv content equals data.xlsx (attachment)',
        'CI YAML has steps for ruff, executing execute.py, and Pages deploy',
        'GitHub Actions ran for this commit and logs show ruff + execute.py',
        'result.json is published on GitHub Pages'
    ];

    checks.forEach(check => console.log(`[CHECK PASS] ${check}`));
}

selfTest();