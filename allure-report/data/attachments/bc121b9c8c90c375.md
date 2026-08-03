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
  - waiting for getByRole('button', { name: 'Proceder al pago' })
    - locator resolved to <button class="w-full bg-primary text-on-primary py-md rounded-lg font-headline-sm text-headline-sm hover:opacity-90 active:scale-95 transition-all flex items-center justify-center gap-xs">…</button>

```

# Page snapshot

```yaml
- generic [ref=f4e3]:
  - banner [ref=f4e4]:
    - generic [ref=f4e5]:
      - link "pets Pet Store" [ref=f4e6] [cursor=pointer]:
        - /url: /
        - generic [ref=f4e7]: pets
        - generic [ref=f4e9]: Pet Store
      - navigation [ref=f4e10]:
        - link "Inicio" [ref=f4e11] [cursor=pointer]:
          - /url: /
        - link "Productos" [ref=f4e12] [cursor=pointer]:
          - /url: /catalogo
        - link "Perros" [ref=f4e13] [cursor=pointer]:
          - /url: /catalogo?cat=Perros
        - link "Gatos" [ref=f4e14] [cursor=pointer]:
          - /url: /catalogo?cat=Gatos
      - generic [ref=f4e15]:
        - link "shopping_cart 1" [ref=f4e16] [cursor=pointer]:
          - /url: /carrito
          - generic [ref=f4e17]: shopping_cart
          - generic [ref=f4e18]: "1"
        - link "Iniciar Sesión" [ref=f4e19] [cursor=pointer]:
          - /url: /login
  - main [ref=f4e20]:
    - generic [ref=f4e21]:
      - heading "Tu Carrito" [level=1] [ref=f4e22]
      - generic [ref=f4e23]:
        - generic [ref=f4e24]:
          - generic [ref=f4e25]:
            - img "arnes gato" [ref=f4e27]
            - generic [ref=f4e28]:
              - link "arnes gato" [ref=f4e29] [cursor=pointer]:
                - /url: /productos/12
              - generic [ref=f4e30]:
                - generic [ref=f4e31]:
                  - button "−" [ref=f4e32] [cursor=pointer]
                  - generic [ref=f4e33]: "1"
                  - button "+" [ref=f4e34] [cursor=pointer]
                - generic [ref=f4e35]: $15.000
                - button "delete" [ref=f4e36] [cursor=pointer]
          - button "delete_sweep Vaciar carrito" [ref=f4e38] [cursor=pointer]:
            - generic [ref=f4e39]: delete_sweep
            - text: Vaciar carrito
        - generic [ref=f4e40]:
          - heading "Resumen" [level=2] [ref=f4e41]
          - generic [ref=f4e42]:
            - generic [ref=f4e43]:
              - generic [ref=f4e44]: Subtotal
              - generic [ref=f4e45]: $15.000
            - generic [ref=f4e46]:
              - generic [ref=f4e47]: Envío
              - generic [ref=f4e48]: $3.990
            - paragraph [ref=f4e49]: Agrega $10.000 más para envío gratis
            - generic [ref=f4e50]:
              - generic [ref=f4e51]: Total
              - generic [ref=f4e52]: $18.990
          - button "lock Proceder al pago" [ref=f4e53] [cursor=pointer]:
            - generic [ref=f4e54]: lock
            - text: Proceder al pago
          - paragraph [ref=f4e55]:
            - link "Inicia sesión" [ref=f4e56] [cursor=pointer]:
              - /url: /login
            - text: para comprar
  - contentinfo [ref=f4e57]:
    - generic [ref=f4e58]:
      - generic [ref=f4e59]: pets
      - generic [ref=f4e61]: Pet Store
    - generic [ref=f4e62]:
      - link "Privacidad" [ref=f4e63] [cursor=pointer]:
        - /url: /privacidad
      - link "Términos" [ref=f4e64] [cursor=pointer]:
        - /url: /terminos
      - link "Contacto" [ref=f4e65] [cursor=pointer]:
        - /url: /contacto
      - link "Preguntas Frecuentes" [ref=f4e66] [cursor=pointer]:
        - /url: /faq
    - generic [ref=f4e67]: © 2026 Pet Store
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
  10 |         const iframeElement= page.frameLocator('iframe[name^="__privateStripeFrame"]');
  11 |         
  12 |         this.numeroTarjeta=  iframeElement.getByRole('textbox', { name: 'Credit or debit card number' })
  13 |         this.numeroCaducidad=iframeElement.getByRole('textbox', { name: 'Fecha de caducidad' })
  14 |         this.numeroCVV=iframeElement.getByRole('textbox', { name: 'CVC/CVV de la tarjeta' })
  15 |         this.numeroCP=iframeElement.getByRole('textbox', { name: 'C. P.' })
  16 |         this.btnConfirmarPago= page.locator("//button[@type='submit']");
  17 |     }
  18 | 
  19 |     async agregarAlCarro() {
  20 |         await this.agregarProducto.click()
  21 |     }
  22 | 
  23 |     async clicarCarrito () {
  24 |         await this.btnCarrito.click()
  25 |     }
  26 | 
  27 |     async clicarBtnPago() {
> 28 |         await this.btnPago.click()
     |                            ^ Error: locator.click: Test timeout of 30000ms exceeded.
  29 |     }
  30 | 
  31 |     async llenarDireccion(value){
  32 |         await this.direccion.fill(value)
  33 |     }
  34 |     async llenarNumTarjeta(value){
  35 |         
  36 |          await this.numeroTarjeta.fill(value)
  37 |     }
  38 |     async llenarNumeroCaducidad(value) {
  39 |         await this.numeroCaducidad.fill(value)
  40 |     }
  41 |     async llenarNumeroCVV(value){
  42 |         await this.numeroCVV.fill(value)
  43 |     }
  44 |     async llenarNumeroCP(value){
  45 |         await this.numeroCP.fill(value)
  46 |     }
  47 |     async clicarConfirmarPago(){
  48 |         await this.btnConfirmarPago.click()
  49 |     }
  50 | 
  51 | 
  52 |     async pago(direccion,numeroTarjeta){
  53 |         await this.page.goto('https://creative-choux-407b2c.netlify.app/')
  54 |         await this.agregarAlCarro()
  55 |         await this.clicarCarrito()
  56 |         await this.clicarBtnPago()
  57 |         await this.llenarDireccion(direccion)
  58 |         await this.llenarNumTarjeta(numeroTarjeta)
  59 |         await this.llenarNumeroCaducidad(numeroCaducidad)
  60 |         await this.llenarNumeroCVV(numeroCVV)
  61 |         await this.llenarNumeroCP(numeroCP)
  62 |         await this.clicarConfirmarPago()
  63 |         
  64 |     }
  65 | }
  66 | 
  67 | export default PayPage;  
```