# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra de un producto
- Location: tests\pago.spec.js:16:9

# Error details

```
TypeError: this.numeroTarjeta.contentFrame(...).click is not a function
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
        - link "account_circle" [ref=f4e19] [cursor=pointer]:
          - /url: /perfil
        - button "Salir" [ref=f4e21] [cursor=pointer]
  - main [ref=f4e22]:
    - generic [ref=f4e23]:
      - heading "Checkout" [level=1] [ref=f4e24]
      - generic [ref=f4e25]:
        - generic [ref=f4e26]:
          - heading "credit_card Información de pago" [level=2] [ref=f4e27]:
            - generic [ref=f4e28]: credit_card
            - text: Información de pago
          - generic [ref=f4e29]:
            - generic [ref=f4e30]:
              - heading "Resumen del pedido" [level=3] [ref=f4e31]
              - generic [ref=f4e32]:
                - generic [ref=f4e33]: arnes gato x1
                - generic [ref=f4e34]: $15.000
              - generic [ref=f4e35]:
                - generic [ref=f4e36]:
                  - generic [ref=f4e37]: Subtotal
                  - generic [ref=f4e38]: $15.000
                - generic [ref=f4e39]:
                  - generic [ref=f4e40]: Envío
                  - generic [ref=f4e41]: $3.990
                - generic [ref=f4e42]:
                  - generic [ref=f4e43]: Total a pagar
                  - generic [ref=f4e44]: $18.990
            - generic [ref=f4e45]:
              - generic [ref=f4e46]: Código de descuento
              - generic [ref=f4e48]:
                - textbox "Ingresa tu código aquí" [ref=f4e49]
                - button "local_offer Aplicar" [disabled] [ref=f4e50]:
                  - generic [ref=f4e51]: local_offer
                  - text: Aplicar
            - generic [ref=f4e52]:
              - generic [ref=f4e53]: Dirección de envío
              - generic [ref=f4e54]:
                - generic [ref=f4e55]: home
                - textbox "Calle, número, ciudad" [active] [ref=f4e56]: santiago123
            - generic [ref=f4e57]:
              - generic [ref=f4e58]: Datos de tarjeta
              - generic [ref=f4e61]:
                - iframe [ref=f4e62]:
                  - generic [ref=f8e1]:
                    - generic: 0123456789０１２３４５６７８９
                    - textbox [disabled]
                    - generic [ref=f8e3]:
                      - generic [ref=f8e4]:
                        - generic: Number
                        - textbox "Credit or debit card number" [ref=f8e9]:
                          - /placeholder: Card number
                      - generic:
                        - generic:
                          - generic:
                            - generic:
                              - textbox:
                                - /placeholder: MM / YY
                        - generic:
                          - generic:
                            - generic:
                              - textbox:
                                - /placeholder: CVC
                    - textbox [disabled]
                    - button
                - textbox
                - iframe [ref=f4e64]:
                  - button "Autofill with Link" [ref=f11e3] [cursor=pointer]:
                    - generic [ref=f11e4]: Autofill
              - generic [ref=f4e65]:
                - paragraph [ref=f4e66]: "Tarjetas de prueba Stripe:"
                - paragraph [ref=f4e67]: "✅ Exitoso: 4242 4242 4242 4242"
                - paragraph [ref=f4e68]: "❌ Fallido: 4000 0000 0000 0002"
                - paragraph [ref=f4e69]: "Fecha: cualquier futura · CVC: cualquier 3 dígitos"
            - button "lock Pagar $18.990" [ref=f4e70] [cursor=pointer]:
              - generic [ref=f4e71]: lock
              - text: Pagar $18.990
            - paragraph [ref=f4e72]:
              - generic [ref=f4e73]: security
              - text: Pago seguro procesado por Stripe
        - generic [ref=f4e74]:
          - heading "Productos (1)" [level=2] [ref=f4e75]
          - generic [ref=f4e76]:
            - img "arnes gato" [ref=f4e78]
            - generic [ref=f4e79]:
              - paragraph [ref=f4e80]: arnes gato
              - paragraph [ref=f4e81]: "Cantidad: 1"
            - generic [ref=f4e82]: $15.000
  - contentinfo [ref=f4e83]:
    - generic [ref=f4e84]:
      - generic [ref=f4e85]: pets
      - generic [ref=f4e87]: Pet Store
    - generic [ref=f4e88]:
      - link "Privacidad" [ref=f4e89] [cursor=pointer]:
        - /url: /privacidad
      - link "Términos" [ref=f4e90] [cursor=pointer]:
        - /url: /terminos
      - link "Contacto" [ref=f4e91] [cursor=pointer]:
        - /url: /contacto
      - link "Preguntas Frecuentes" [ref=f4e92] [cursor=pointer]:
        - /url: /faq
    - generic [ref=f4e93]: © 2026 Pet Store
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
  10 |         const iframeElement= page.frameLocator('#__PrivateStripeElement-input');
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
  31 |         await this.direccion.fill(value)
  32 |     }
  33 |     async llenarNumTarjeta(value){
> 34 |         await this.numeroTarjeta.contentFrame().click();
     |                                                 ^ TypeError: this.numeroTarjeta.contentFrame(...).click is not a function
  35 |          await this.numeroTarjeta.contentFrame().fill(value)
  36 |     }
  37 |     async llenarNumeroCaducidad(value) {
  38 |         await this.numeroCaducidad.contentFrame().fill(value)
  39 |     }
  40 |     async llenarNumeroCVV(value){
  41 |         await this.numeroCVV.contentFrame().fill(value)
  42 |     }
  43 |     async llenarNumeroCP(value){
  44 |         await this.numeroCP.contentFrame().fill(value)
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