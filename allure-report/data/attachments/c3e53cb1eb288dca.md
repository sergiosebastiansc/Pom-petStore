# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra con numero de tarjeta inválido
- Location: tests\pago.spec.js:22:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Calle, número, ciudad' })

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
     |                              ^ Error: locator.fill: Target page, context or browser has been closed
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