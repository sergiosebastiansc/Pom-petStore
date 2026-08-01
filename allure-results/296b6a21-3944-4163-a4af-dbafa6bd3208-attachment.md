# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra con numero de tarjeta inválido
- Location: tests\pago.spec.js:22:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('textbox', { name: 'Calle, número, ciudad' })

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - banner [ref=f4e4]:
    - link "Pet Store" [ref=f4e5] [cursor=pointer]:
      - /url: /
  - main [ref=f4e10]:
    - generic [ref=f4e11]:
      - heading "Bienvenido de nuevo" [level=1] [ref=f4e12]
      - paragraph [ref=f4e13]: Ingresa a tu cuenta de Pet Store
      - generic [ref=f4e14]:
        - generic [ref=f4e15]:
          - generic [ref=f4e16]: Correo electrónico
          - generic [ref=f4e17]:
            - generic [ref=f4e18]: email
            - textbox "tu@correo.com" [ref=f4e19]
        - generic [ref=f4e20]:
          - generic [ref=f4e21]: Contraseña
          - generic [ref=f4e22]:
            - generic [ref=f4e23]: lock
            - textbox "••••••••" [ref=f4e24]
            - button "visibility" [ref=f4e25] [cursor=pointer]
          - link "¿Olvidaste tu contraseña?" [ref=f4e28] [cursor=pointer]:
            - /url: /login
        - button "Iniciar Sesión" [ref=f4e29] [cursor=pointer]
      - paragraph [ref=f4e30]:
        - text: ¿No tienes cuenta?
        - link "Regístrate" [ref=f4e31] [cursor=pointer]:
          - /url: /registro
  - contentinfo [ref=f4e32]:
    - link "Privacidad" [ref=f4e33] [cursor=pointer]:
      - /url: /login
    - link "Términos" [ref=f4e34] [cursor=pointer]:
      - /url: /login
    - link "Contacto" [ref=f4e35] [cursor=pointer]:
      - /url: /login
    - link "Preguntas Frecuentes" [ref=f4e36] [cursor=pointer]:
      - /url: /login
```

# Test source

```ts
  1  | 
  2  | class PayPage {
  3  |     constructor(page) {
  4  |         this.url = '/carrito';
  5  |         this.page=page;
  6  |         this.agregarProducto = page.locator('button').filter({ hasText: 'Añadir al carrito' }).first();
  7  |         this.btnCarrito =  page.getByText('shopping_cart', { exact: true });
  8  |         this.btnPago= page.getByRole('button', { name: 'Proceder al pago' });
  9  |         this.direccion= page.getByRole('textbox', { name: 'Calle, número, ciudad' });
  10 |         const iframeElement= page.frameLocator('.CardNumberField-input-wrapper');
  11 |         this.numeroTarjeta=  iframeElement.getByRole('textbox', { name: 'Credit or debit card number' })
  12 |         this.numeroCaducidad=iframeElement.getByRole('textbox', { name: 'Fecha de caducidad' })
  13 |         this.numeroCVV=iframeElement.getByRole('textbox', { name: 'CVC/CVV de la tarjeta' })
  14 |         this.numeroCP=iframeElement.getByRole('textbox', { name: 'C. P.' })
  15 |         this.btnConfirmarPago= page.locator("//button[@type='submit']");
  16 |     }
  17 | 
  18 |     async agregarAlCarro() {
  19 |         await this.agregarProducto.click()
  20 |     }
  21 | 
  22 |     async clicarCarrito () {
  23 |         await this.btnCarrito.click()
  24 |     }
  25 | 
  26 |     async clicarBtnPago() {
  27 |         await this.btnPago.click()
  28 |     }
  29 | 
  30 |     async llenarDireccion(value){
> 31 |         await this.direccion.fill(value)
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  32 |     }
  33 |     async llenarNumTarjeta(value){
  34 |         
  35 |          await this.numeroTarjeta.fill(value)
  36 |     }
  37 |     async llenarNumeroCaducidad(value) {
  38 |         await this.numeroCaducidad.fill(value)
  39 |     }
  40 |     async llenarNumeroCVV(value){
  41 |         await this.numeroCVV.fill(value)
  42 |     }
  43 |     async llenarNumeroCP(value){
  44 |         await this.numeroCP.fill(value)
  45 |     }
  46 |     async clicarConfirmarPago(){
  47 |         await this.btnConfirmarPago.click()
  48 |     }
  49 | 
  50 | 
  51 |     async pago(direccion,numeroTarjeta){
  52 |         await this.page.goto('https://creative-choux-407b2c.netlify.app/')
  53 |         await this.agregarAlCarro()
  54 |         await this.clicarCarrito()
  55 |         await this.clicarBtnPago()
  56 |         await this.llenarDireccion(direccion)
  57 |         await this.llenarNumTarjeta(numeroTarjeta)
  58 |         await this.llenarNumeroCaducidad(numeroCaducidad)
  59 |         await this.llenarNumeroCVV(numeroCVV)
  60 |         await this.llenarNumeroCP(numeroCP)
  61 |         await this.clicarConfirmarPago()
  62 |         
  63 |     }
  64 | }
  65 | 
  66 | export default PayPage;  
```