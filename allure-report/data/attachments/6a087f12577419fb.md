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
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for getByRole('button', { name: 'lockProceder al pago' })

```

# Page snapshot

```yaml
- generic [ref=f2e3]:
  - banner [ref=f2e4]:
    - generic [ref=f2e5]:
      - link "pets Pet Store" [ref=f2e6] [cursor=pointer]:
        - /url: /
        - generic [ref=f2e7]: pets
        - generic [ref=f2e9]: Pet Store
      - navigation [ref=f2e10]:
        - link "Inicio" [ref=f2e11] [cursor=pointer]:
          - /url: /
        - link "Productos" [ref=f2e12] [cursor=pointer]:
          - /url: /catalogo
        - link "Perros" [ref=f2e13] [cursor=pointer]:
          - /url: /catalogo?cat=Perros
        - link "Gatos" [ref=f2e14] [cursor=pointer]:
          - /url: /catalogo?cat=Gatos
      - generic [ref=f2e15]:
        - link "shopping_cart 1" [ref=f2e16] [cursor=pointer]:
          - /url: /carrito
          - generic [ref=f2e17]: shopping_cart
          - generic [ref=f2e18]: "1"
        - link "Iniciar Sesión" [ref=f2e19] [cursor=pointer]:
          - /url: /login
  - main [ref=f2e20]:
    - generic [ref=f2e21]:
      - heading "Tu Carrito" [level=1] [ref=f2e22]
      - generic [ref=f2e23]:
        - generic [ref=f2e24]:
          - generic [ref=f2e25]:
            - img "Dentistik" [ref=f2e27]
            - generic [ref=f2e28]:
              - link "Dentistik" [ref=f2e29] [cursor=pointer]:
                - /url: /productos/11
              - generic [ref=f2e30]:
                - generic [ref=f2e31]:
                  - button "−" [ref=f2e32] [cursor=pointer]
                  - generic [ref=f2e33]: "1"
                  - button "+" [ref=f2e34] [cursor=pointer]
                - generic [ref=f2e35]: $1.400
                - button "delete" [ref=f2e36] [cursor=pointer]
          - button "delete_sweep Vaciar carrito" [ref=f2e38] [cursor=pointer]:
            - generic [ref=f2e39]: delete_sweep
            - text: Vaciar carrito
        - generic [ref=f2e40]:
          - heading "Resumen" [level=2] [ref=f2e41]
          - generic [ref=f2e42]:
            - generic [ref=f2e43]:
              - generic [ref=f2e44]: Subtotal
              - generic [ref=f2e45]: $1.400
            - generic [ref=f2e46]:
              - generic [ref=f2e47]: Envío
              - generic [ref=f2e48]: $3.990
            - paragraph [ref=f2e49]: Agrega $23.600 más para envío gratis
            - generic [ref=f2e50]:
              - generic [ref=f2e51]: Total
              - generic [ref=f2e52]: $5.390
          - button "lock Proceder al pago" [ref=f2e53] [cursor=pointer]:
            - generic [ref=f2e54]: lock
            - text: Proceder al pago
          - paragraph [ref=f2e55]:
            - link "Inicia sesión" [ref=f2e56] [cursor=pointer]:
              - /url: /login
            - text: para comprar
  - contentinfo [ref=f2e57]:
    - generic [ref=f2e58]:
      - generic [ref=f2e59]: pets
      - generic [ref=f2e61]: Pet Store
    - generic [ref=f2e62]:
      - link "Privacidad" [ref=f2e63] [cursor=pointer]:
        - /url: /privacidad
      - link "Términos" [ref=f2e64] [cursor=pointer]:
        - /url: /terminos
      - link "Contacto" [ref=f2e65] [cursor=pointer]:
        - /url: /contacto
      - link "Preguntas Frecuentes" [ref=f2e66] [cursor=pointer]:
        - /url: /faq
    - generic [ref=f2e67]: © 2026 Pet Store
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
  8  |         this.btnPago= page.getByRole('button', { name: 'lockProceder al pago' });
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
> 23 |         await this.btnPago.click()
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  24 |     }
  25 | 
  26 |     async llenarDireccion(value){
  27 |         await this.direccion.fill(value)
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