# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra de un producto
- Location: tests\pago.spec.js:16:9

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
- generic [ref=f2e3]:
  - banner [ref=f2e4]:
    - link "Pet Store" [ref=f2e5] [cursor=pointer]:
      - /url: /
  - main [ref=f2e10]:
    - generic [ref=f2e11]:
      - heading "Bienvenido de nuevo" [level=1] [ref=f2e12]
      - paragraph [ref=f2e13]: Ingresa a tu cuenta de Pet Store
      - generic [ref=f2e14]:
        - generic [ref=f2e15]:
          - generic [ref=f2e16]: Correo electrónico
          - generic [ref=f2e17]:
            - generic [ref=f2e18]: email
            - textbox "tu@correo.com" [ref=f2e19]
        - generic [ref=f2e20]:
          - generic [ref=f2e21]: Contraseña
          - generic [ref=f2e22]:
            - generic [ref=f2e23]: lock
            - textbox "••••••••" [ref=f2e24]
            - button "visibility" [ref=f2e25] [cursor=pointer]
          - link "¿Olvidaste tu contraseña?" [ref=f2e28] [cursor=pointer]:
            - /url: /login
        - button "Iniciar Sesión" [ref=f2e29] [cursor=pointer]
      - paragraph [ref=f2e30]:
        - text: ¿No tienes cuenta?
        - link "Regístrate" [ref=f2e31] [cursor=pointer]:
          - /url: /registro
  - contentinfo [ref=f2e32]:
    - link "Privacidad" [ref=f2e33] [cursor=pointer]:
      - /url: /login
    - link "Términos" [ref=f2e34] [cursor=pointer]:
      - /url: /login
    - link "Contacto" [ref=f2e35] [cursor=pointer]:
      - /url: /login
    - link "Preguntas Frecuentes" [ref=f2e36] [cursor=pointer]:
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
  10 |         this.numeroTarjeta= page.locator('div.CardField-input-wrapper');
  11 |         this.btnConfirmarPago= page.locator("//button[@type='submit']");
  12 |     }
  13 | 
  14 |     async agregarAlCarro() {
  15 |         await this.agregarProducto.click()
  16 |     }
  17 | 
  18 |     async clicarCarrito () {
  19 |         await this.btnCarrito.click()
  20 |     }
  21 | 
  22 |     async clicarBtnPago() {
  23 |         await this.btnPago.click()
  24 |     }
  25 | 
  26 |     async llenarDireccion(value){
> 27 |         await this.direccion.fill(value)
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  28 |     }
  29 |     async llenarNumTarjeta(value){
  30 |         await this.numeroTarjeta.fill(value)
  31 |     }
  32 |     async clicarConfirmarPago(){
  33 |         await this.btnConfirmarPago.click()
  34 |     }
  35 | 
  36 | 
  37 |     async pago(direccion,numeroTarjeta){
  38 |         await this.page.goto('https://creative-choux-407b2c.netlify.app/')
  39 |         await this.agregarAlCarro()
  40 |         await this.clicarCarrito()
  41 |         await this.clicarBtnPago()
  42 |         await this.llenarDireccion(direccion)
  43 |         await this.llenarNumTarjeta(numeroTarjeta)
  44 |         await this.clicarConfirmarPago()
  45 |         
  46 |     }
  47 | }
  48 | 
  49 | export default PayPage;  
```