# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Escenarios de login de cuenta >> login con datos válidos
- Location: tests\login.spec.js:13:9

# Error details

```
TypeError: _LoginPage.default.login is not a function
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import LoginPage from "../pages/LoginPage";
  3  | import { beforeEach } from "node:test";
  4  | 
  5  | let loginPage;
  6  | test.describe('Escenarios de login de cuenta', () => {
  7  | 
  8  |     test.beforeEach(async ({ page }) => {
  9  |         
  10 |         loginPage = new LoginPage(page);
  11 |     })
  12 | 
  13 |     test('login con datos válidos', async ({ page }) => {
> 14 |         await LoginPage.login ('sergiosebastiansc@gmail.com','clave1234')
     |                         ^ TypeError: _LoginPage.default.login is not a function
  15 |         await expect ( page.getByRole('button', { name: 'Salir' })).toBeVisible();
  16 |     });
  17 | 
  18 |     test('login con datos inválidos', async ({ page }) => {
  19 |         await LoginPage.login ('sergiosebastiansc@gmail.com','claveincorrecta')
  20 |         await expect (page.getByText('Credenciales inválidas', { exact: true })).toBeVisible()
  21 |     });
  22 |     
  23 | })  
```