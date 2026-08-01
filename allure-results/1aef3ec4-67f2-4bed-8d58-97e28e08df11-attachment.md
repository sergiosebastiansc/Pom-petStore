# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra de un producto
- Location: tests\pago.spec.js:15:9

# Error details

```
TypeError: Cannot read properties of undefined (reading 'login')
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import LoginPage from "../pages/LoginPage";
  3  | import PayPage from "../pages/PayPage";
  4  | import { beforeEach } from "node:test";
  5  | 
  6  | let payPage;
  7  | let loginPage;
  8  | test.describe('validando pasarela de pagos', () => {
  9  | 
  10 |     test.beforeEach(async ({ page }) => {
  11 |         
  12 |         payPage = new PayPage(page);
  13 |     })
  14 | 
  15 |     test('compra de un producto', async ({ page }) => {
> 16 |         await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
     |                         ^ TypeError: Cannot read properties of undefined (reading 'login')
  17 |         await payPage.pago ('santiago123','4242424242424242 0827123123456')
  18 |         await expect ( page.getByRole('heading', { name: '¡Pago exitoso!' })).toBeVisible();
  19 |     });
  20 | 
  21 |     test('compra con numero de tarjeta inválido', async ({ page }) => {
  22 |         await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
  23 |         await payPage.pago ('santiago123','000011112222333 0827123123456')
  24 |         await expect ( await page.getByText('El número de tarjeta no es válido.', { exact: true })).toBeVisible();
  25 |     });
  26 |      test('compra con numero de tarjeta bloqueada', async ({ page }) => {
  27 |         await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
  28 |         await payPage.pago ('santiago123','4000000000000002 0827123123456')
  29 |         await expect ( page.getByText('Tu tarjeta ha sido rechazada.', { exact: true })).toBeVisible();
  30 |     });
  31 | 
  32 |     test('compra sin numero de tarjeta', async ({ page }) => {
  33 |         await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
  34 |         await payPage.pago ('santiago123','')
  35 |         await expect (page.getByText('El número de tarjeta está incompleto.', { exact: true }) ).toBeVisible();
  36 |     });
  37 | 
  38 |      
  39 |     
  40 | })  
```