# WhenWise Test Automation

Playwright + TypeScript based E2E test automation for WhenWise booking platform.

## Tech Stack
- Playwright
- TypeScript
- Page Object Model (POM)

## Project Structure
```
whenwise-tests/
├── Pages/
│   ├── LoginPage.ts
│   └── ProfessionalPage.ts
├── tests/
│   ├── login.spec.ts
│   └── booking.spec.ts
└── playwright.config.ts
```

## Test Cases

### Login Tests (6)
- Valid login
- Invalid credentials
- Empty credentials
- Empty email
- Empty password
- Logout

### Professional CRUD Tests (4)
- Show professionals list
- Navigate to new professional form
- Create new professional
- Edit professional

## How to Run

Install dependencies:
```
npm install
npx playwright install
```

Run all tests:
```
npx playwright test
```

Run specific file:
```
npx playwright test login.spec.ts
```

View HTML report:
```
npx playwright show-report
```

## Test Site
- **URL:** https://whenwise.agileway.net
- **Login:** driving@biz.com / test01
