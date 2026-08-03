# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: registro.spec.js >> validando registro de cuenta >> Registro con datos válidos
- Location: tests\registro.spec.js:13:9

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
  - textbox "Juan García": Sergio Salinas
  - text: Correo electrónico email
  - textbox "tu@correo.com": sergiosebastiansc@gmail.com
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
  2  | import RegisterPage from "../pages/Registerpage";
  3  | import { beforeEach } from "node:test";
  4  | 
  5  | let registerPage;
  6  | test.describe('validando registro de cuenta', () => {
  7  | 
  8  |     test.beforeEach(async ({ page }) => {
  9  |         
  10 |         registerPage = new RegisterPage(page);
  11 |     })
  12 | 
  13 |     test('Registro con datos válidos', async ({ page }) => {
  14 |         await registerPage.registro ('Sergio Salinas', 'sergiosebastiansc@gmail.com','clave1234', 'clave1234')
> 15 |         await expect ( page.getByRole('button', { name: 'Salir' })).toBeVisible()
     |                                                                     ^ Error: expect(locator).toBeVisible() failed
  16 |     });
  17 | 
  18 |     test('Registro de una cuenta ya creada', async ({ page }) => {
  19 |         await registerPage.registro ('Sergio Salinas', 'sergiosebastiansc@gmail.com','clave1234', 'clave1234')
  20 |         await expect ( await page.getByText('El correo ya está registrado', { exact: true })).toBeVisible()
  21 |     });
  22 |    
  23 | })  
```