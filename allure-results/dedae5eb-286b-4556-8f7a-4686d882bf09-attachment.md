# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra de un producto
- Location: tests\pago.spec.js:18:9

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
  10 |         const iframeElement= page.frameLocator('iframe[title="Secure card payment input frame"]');
  11 |         
  12 |         this.numeroTarjeta=  iframeElement.locator('input[name="cardnumber"]');
  13 |         this.numeroCaducidad= iframeElement.locator('input[name="exp-date"]')
  14 |         this.numeroCVV=iframeElement.locator('input[name="cvc"]');
  15 |         this.numeroCP=iframeElement.locator('input[name="postal"]');
  16 |         this.btnConfirmarPago= page.locator("//button[@type='submit']");
  17 |     }
  18 | 
  19 |     async agregarAlCarro() {
  20 |         await this.agregarProducto.click()
  21 |     }
  22 | 
  23 | 
  24 |     async clicarCarrito () {
  25 |         await this.btnCarrito.click()
  26 |     }
  27 | 
  28 |     async clicarBtnPago() {
  29 |         await this.btnPago.click()
  30 |     }
  31 | 
  32 |     async llenarDireccion(value){
> 33 |         await this.direccion.fill(value)
     |                              ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  34 |     }
  35 |     async llenarNumTarjeta(value){
  36 |         
  37 |          await this.numeroTarjeta.fill(value)
  38 |     }
  39 |     async llenarNumeroCaducidad(value) {
  40 |         await this.numeroCaducidad.fill(value)
  41 |     }
  42 |     async llenarNumeroCVV(value){
  43 |         await this.numeroCVV.fill(value)
  44 |     }
  45 |     async llenarNumeroCP(value){
  46 |         await this.numeroCP.fill(value)
  47 |     }
  48 |     async clicarConfirmarPago(){
  49 |         await this.btnConfirmarPago.click()
  50 |     }
  51 | 
  52 | 
  53 |     async pago(direccion,numeroTarjeta,numeroCaducidad,numeroCVV,numeroCP){
  54 |         await this.page.goto('https://creative-choux-407b2c.netlify.app/')
  55 |         await this.agregarAlCarro()
  56 |         await this.clicarCarrito()
  57 |         await this.clicarBtnPago()
  58 |         await this.llenarDireccion(direccion)
  59 |         await this.llenarNumTarjeta(numeroTarjeta)
  60 |         await this.llenarNumeroCaducidad(numeroCaducidad)
  61 |         await this.llenarNumeroCVV(numeroCVV)
  62 |         await this.llenarNumeroCP(numeroCP)
  63 |         await this.clicarConfirmarPago()
  64 |         
  65 |     }
  66 | }
  67 | 
  68 | export default PayPage;  
```