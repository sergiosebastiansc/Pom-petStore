# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra con numero de tarjeta inválido
- Location: tests\pago.spec.js:31:9

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.fill: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('iframe[title="Secure card payment input frame"]').contentFrame().locator('input[name="postal"]')

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - banner [ref=e4]:
    - generic [ref=e5]:
      - link "pets Pet Store" [ref=e6] [cursor=pointer]:
        - /url: /
        - generic [ref=e7]: pets
        - generic [ref=e9]: Pet Store
      - navigation [ref=e10]:
        - link "Inicio" [ref=e11] [cursor=pointer]:
          - /url: /
        - link "Productos" [ref=e12] [cursor=pointer]:
          - /url: /catalogo
        - link "Perros" [ref=e13] [cursor=pointer]:
          - /url: /catalogo?cat=Perros
        - link "Gatos" [ref=e14] [cursor=pointer]:
          - /url: /catalogo?cat=Gatos
      - generic [ref=e15]:
        - link "shopping_cart 1" [ref=e16] [cursor=pointer]:
          - /url: /carrito
          - generic [ref=e17]: shopping_cart
          - generic [ref=e18]: "1"
        - link "account_circle" [ref=e19] [cursor=pointer]:
          - /url: /perfil
        - button "Salir" [ref=e21] [cursor=pointer]
  - main [ref=e22]:
    - generic [ref=e23]:
      - heading "Checkout" [level=1] [ref=e24]
      - generic [ref=e25]:
        - generic [ref=e26]:
          - heading "credit_card Información de pago" [level=2] [ref=e27]:
            - generic [ref=e28]: credit_card
            - text: Información de pago
          - generic [ref=e29]:
            - generic [ref=e30]:
              - heading "Resumen del pedido" [level=3] [ref=e31]
              - generic [ref=e32]:
                - generic [ref=e33]: arnes gato x1
                - generic [ref=e34]: $15.000
              - generic [ref=e35]:
                - generic [ref=e36]:
                  - generic [ref=e37]: Subtotal
                  - generic [ref=e38]: $15.000
                - generic [ref=e39]:
                  - generic [ref=e40]: Envío
                  - generic [ref=e41]: $3.990
                - generic [ref=e42]:
                  - generic [ref=e43]: Total a pagar
                  - generic [ref=e44]: $18.990
            - generic [ref=e45]:
              - generic [ref=e46]: Código de descuento
              - generic [ref=e48]:
                - textbox "Ingresa tu código aquí" [ref=e49]
                - button "local_offer Aplicar" [disabled] [ref=e50]:
                  - generic [ref=e51]: local_offer
                  - text: Aplicar
            - generic [ref=e52]:
              - generic [ref=e53]: Dirección de envío
              - generic [ref=e54]:
                - generic [ref=e55]: home
                - textbox "Calle, número, ciudad" [ref=e56]: santiago123
            - generic [ref=e57]:
              - generic [ref=e58]: Datos de tarjeta
              - generic [ref=e61]:
                - iframe [active] [ref=e62]:
                  - generic [ref=f4e1]:
                    - generic: 0123456789０１２３４５６７８９
                    - textbox
                    - generic [ref=f4e3]:
                      - generic [ref=f4e4]:
                        - generic:
                          - generic: "3333"
                          - text: 0000 1111 2222 3333
                        - textbox "Credit or debit card number" [invalid] [ref=f4e9]:
                          - /placeholder: Card number
                          - text: 0000 1111 2222 3333
                      - generic [ref=f4e10]:
                        - textbox "Credit or debit card expiration date" [ref=f4e14]:
                          - /placeholder: MM / YY
                          - text: 04 / 29
                        - textbox "Credit or debit card CVC/CVV" [active] [ref=f4e18]:
                          - /placeholder: CVC
                          - text: "123"
                    - textbox
                    - button
                - textbox
              - generic [ref=e63]:
                - paragraph [ref=e64]: "Tarjetas de prueba Stripe:"
                - paragraph [ref=e65]: "✅ Exitoso: 4242 4242 4242 4242"
                - paragraph [ref=e66]: "❌ Fallido: 4000 0000 0000 0002"
                - paragraph [ref=e67]: "Fecha: cualquier futura · CVC: cualquier 3 dígitos"
            - button "lock Pagar $18.990" [ref=e68] [cursor=pointer]:
              - generic [ref=e69]: lock
              - text: Pagar $18.990
            - paragraph [ref=e70]:
              - generic [ref=e71]: security
              - text: Pago seguro procesado por Stripe
        - generic [ref=e72]:
          - heading "Productos (1)" [level=2] [ref=e73]
          - generic [ref=e74]:
            - img "arnes gato" [ref=e76]
            - generic [ref=e77]:
              - paragraph [ref=e78]: arnes gato
              - paragraph [ref=e79]: "Cantidad: 1"
            - generic [ref=e80]: $15.000
  - contentinfo [ref=e81]:
    - generic [ref=e82]:
      - generic [ref=e83]: pets
      - generic [ref=e85]: Pet Store
    - generic [ref=e86]:
      - link "Privacidad" [ref=e87] [cursor=pointer]:
        - /url: /privacidad
      - link "Términos" [ref=e88] [cursor=pointer]:
        - /url: /terminos
      - link "Contacto" [ref=e89] [cursor=pointer]:
        - /url: /contacto
      - link "Preguntas Frecuentes" [ref=e90] [cursor=pointer]:
        - /url: /faq
    - generic [ref=e91]: © 2026 Pet Store
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
  33 |         await this.direccion.fill(value)
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
> 46 |         await this.numeroCP.fill(value)
     |                             ^ Error: locator.fill: Test timeout of 30000ms exceeded.
  47 |     }
  48 |     async clicarConfirmarPago(){
  49 |         await this.btnConfirmarPago.click()
  50 |     }
  51 | 
  52 | 
  53 |     async pago(direccion,numeroTarjeta,numeroCaducidad,numeroCVV,numeroCP){
  54 |        
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