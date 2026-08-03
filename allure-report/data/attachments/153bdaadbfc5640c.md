# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: login.spec.js >> Escenarios de login de cuenta >> login con datos inválidos
- Location: tests\login.spec.js:18:9

# Error details

```
TypeError: this.btnIniciarSesion is not a function
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - link "Pet Store" [ref=e5] [cursor=pointer]:
      - /url: /
  - main [ref=e10]:
    - generic [ref=e11]:
      - heading "Bienvenido de nuevo" [level=1] [ref=e12]
      - paragraph [ref=e13]: Ingresa a tu cuenta de Pet Store
      - generic [ref=e14]:
        - generic [ref=e15]:
          - generic [ref=e16]: Correo electrónico
          - generic [ref=e17]:
            - generic [ref=e18]: email
            - textbox "tu@correo.com" [ref=e19]: sergiosebastiansc@gmail.com
        - generic [ref=e20]:
          - generic [ref=e21]: Contraseña
          - generic [ref=e22]:
            - generic [ref=e23]: lock
            - textbox "••••••••" [active] [ref=e24]: claveincorrecta
            - button "visibility" [ref=e25] [cursor=pointer]
          - link "¿Olvidaste tu contraseña?" [ref=e28] [cursor=pointer]:
            - /url: /login
        - button "Iniciar Sesión" [ref=e29] [cursor=pointer]
      - paragraph [ref=e30]:
        - text: ¿No tienes cuenta?
        - link "Regístrate" [ref=e31] [cursor=pointer]:
          - /url: /registro
  - contentinfo [ref=e32]:
    - link "Privacidad" [ref=e33] [cursor=pointer]:
      - /url: /login
    - link "Términos" [ref=e34] [cursor=pointer]:
      - /url: /login
    - link "Contacto" [ref=e35] [cursor=pointer]:
      - /url: /login
    - link "Preguntas Frecuentes" [ref=e36] [cursor=pointer]:
      - /url: /login
```

# Test source

```ts
  1  | 
  2  | class LoginPage {
  3  |     constructor(page) {
  4  |         this.url = '/login';
  5  |         this.page=page;
  6  |         this.emailAddress = page.getByRole('textbox', { name: 'tu@correo.com' })
  7  |         this.password =  page.getByRole('textbox', { name: '••••••••' })
  8  |         this.btnIniciarSesion= page.getByRole('button', { name: 'Iniciar Sesión' })
  9  |     }
  10 | 
  11 |     async llenarEmailAdress(value) {
  12 |         await this.emailAddress.fill(value);
  13 |     }
  14 | 
  15 |     async llenarPassword(value) {
  16 |         await this.password.fill(value);
  17 |     }
  18 | 
  19 |     async clicarBtnLogin() {
> 20 |         await this.btnIniciarSesion().click()
     |                    ^ TypeError: this.btnIniciarSesion is not a function
  21 |     }
  22 | 
  23 | 
  24 |     async login(emailAddress,password){
  25 |         await this.page.goto('https://creative-choux-407b2c.netlify.app/')
  26 |         await this.page.getByRole('link', { name: 'Iniciar Sesión' }).click()
  27 |         await this.llenarEmailAdress(emailAddress)
  28 |         await this.llenarPassword(password)
  29 |         await this.clicarBtnLogin()
  30 |         
  31 |     }
  32 | }
  33 | 
  34 | export default LoginPage;  
```