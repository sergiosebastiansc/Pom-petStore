# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registro.spec.js >> validando registro de cuenta >> Registro con datos válidos
- Location: tests\registro.spec.js:14:9

# Error details

```
Error: expect(locator).toBeVisible() failed

Locator: getByRole('button', { name: 'Salir' })
Expected: visible
Timeout: 5000ms
Error: element(s) not found

Call log:
  - Expect "toBeVisible" with timeout 5000ms
  - waiting for getByRole('button', { name: 'Salir' })

```

```yaml
- banner:
  - link "Pet Store":
    - /url: /
    - img
    - text: Pet Store
- main:
  - heading "Crea tu cuenta" [level=1]
  - paragraph: Únete a la familia Pet Store
  - text: Nombre completo person
  - textbox "Juan García": Sergio Salinas2
  - text: Correo electrónico email
  - textbox "tu@correo.com": sergiosebastianssc@gmail.com
  - text: Contraseña lock
  - textbox "••••••••": clave1234
  - button "visibility"
  - text: Confirmar contraseña lock_reset
  - textbox "••••••••": clave1234
  - checkbox "Acepto los Términos de Servicio y la Política de Privacidad" [checked]
  - text: Acepto los
  - link "Términos de Servicio":
    - /url: /registro
  - text: y la
  - link "Política de Privacidad":
    - /url: /registro
  - button "Crear Cuenta"
  - paragraph:
    - text: ¿Ya tienes cuenta?
    - link "Inicia Sesión":
      - /url: /login
- contentinfo:
  - link "Privacidad":
    - /url: /registro
  - link "Términos":
    - /url: /registro
  - link "Ayuda":
    - /url: /registro
```

# Test source

```ts
  1  | import {test,expect} from "@playwright/test";
  2  | import {allure} from 'allure-playwright';
  3  | import RegisterPage from "../pages/Registerpage";
  4  | import { beforeEach } from "node:test";
  5  | 
  6  | let registerPage;
  7  | test.describe('validando registro de cuenta', () => {
  8  | 
  9  |     test.beforeEach(async ({ page }) => {
  10 |         
  11 |         registerPage = new RegisterPage(page);
  12 |     })
  13 | 
  14 |     test('Registro con datos válidos', async ({ page }) => {
  15 |         //en caso de usuario ya registrado colocar nuevo usuario y correo
  16 |         await registerPage.registro ('Sergio Salinas2', 'sergiosebastianssc@gmail.com','clave1234', 'clave1234')
> 17 |         await expect ( page.getByRole('button', { name: 'Salir' })).toBeVisible()
     |                                                                     ^ Error: expect(locator).toBeVisible() failed
  18 |     });
  19 | 
  20 |     test('Registro de una cuenta ya creada', async ({ page }) => {
  21 |         await registerPage.registro ('Sergio Salinas', 'sergiosebastiansc@gmail.com','clave1234', 'clave1234')
  22 |         await expect ( await page.getByText('El correo ya está registrado', { exact: true })).toBeVisible()
  23 |     });
  24 |    
  25 | })  
```