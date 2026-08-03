# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra de un producto
- Location: tests\pago.spec.js:16:9

# Error details

```
Error: locator.fill: SyntaxError: Failed to execute 'querySelectorAll' on 'Document': 'div.p-4.rounded-lg.border.border-outline-variant.bg-surface.focus-within:ring-2.focus-within:ring-primary.transition-all' is not a valid selector.
    at query (<anonymous>:5599:41)
    at <anonymous>:5609:7
    at SelectorEvaluatorImpl._cached (<anonymous>:5386:20)
    at SelectorEvaluatorImpl._queryCSS (<anonymous>:5596:17)
    at SelectorEvaluatorImpl._querySimple (<anonymous>:5476:19)
    at <anonymous>:5424:29
    at SelectorEvaluatorImpl._cached (<anonymous>:5386:20)
    at SelectorEvaluatorImpl.query (<anonymous>:5417:19)
    at Object.query (<anonymous>:5631:44)
    at <anonymous>:5589:21
Call log:
  - waiting for locator('div.p-4.rounded-lg.border.border-outline-variant.bg-surface.focus-within:ring-2.focus-within:ring-primary.transition-all')

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
                  - generic [ref=f4e43]:
                    - generic [ref=f4e44]: celebration
                    - text: Descuento primera compra (10%)
                  - generic [ref=f4e45]: "-$1.500"
                - generic [ref=f4e46]:
                  - generic [ref=f4e47]: Total a pagar
                  - generic [ref=f4e48]: $17.490
            - generic [ref=f4e49]:
              - generic [ref=f4e50]: Código de descuento
              - generic [ref=f4e52]:
                - textbox "Ingresa tu código aquí" [ref=f4e53]
                - button "local_offer Aplicar" [disabled] [ref=f4e54]:
                  - generic [ref=f4e55]: local_offer
                  - text: Aplicar
            - generic [ref=f4e56]:
              - generic [ref=f4e57]: Dirección de envío
              - generic [ref=f4e58]:
                - generic [ref=f4e59]: home
                - textbox "Calle, número, ciudad" [active] [ref=f4e60]: santiago123
            - generic [ref=f4e61]:
              - generic [ref=f4e62]: Datos de tarjeta
              - generic [ref=f4e65]:
                - iframe [ref=f4e66]:
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
                - iframe [ref=f4e68]:
                  - button "Autofill with Link" [ref=f11e3] [cursor=pointer]:
                    - generic [ref=f11e4]: Autofill
              - generic [ref=f4e69]:
                - paragraph [ref=f4e70]: "Tarjetas de prueba Stripe:"
                - paragraph [ref=f4e71]: "✅ Exitoso: 4242 4242 4242 4242"
                - paragraph [ref=f4e72]: "❌ Fallido: 4000 0000 0000 0002"
                - paragraph [ref=f4e73]: "Fecha: cualquier futura · CVC: cualquier 3 dígitos"
            - button "lock Pagar $17.490" [ref=f4e74] [cursor=pointer]:
              - generic [ref=f4e75]: lock
              - text: Pagar $17.490
            - paragraph [ref=f4e76]:
              - generic [ref=f4e77]: security
              - text: Pago seguro procesado por Stripe
        - generic [ref=f4e78]:
          - heading "Productos (1)" [level=2] [ref=f4e79]
          - generic [ref=f4e80]:
            - img "arnes gato" [ref=f4e82]
            - generic [ref=f4e83]:
              - paragraph [ref=f4e84]: arnes gato
              - paragraph [ref=f4e85]: "Cantidad: 1"
            - generic [ref=f4e86]: $15.000
  - contentinfo [ref=f4e87]:
    - generic [ref=f4e88]:
      - generic [ref=f4e89]: pets
      - generic [ref=f4e91]: Pet Store
    - generic [ref=f4e92]:
      - link "Privacidad" [ref=f4e93] [cursor=pointer]:
        - /url: /privacidad
      - link "Términos" [ref=f4e94] [cursor=pointer]:
        - /url: /terminos
      - link "Contacto" [ref=f4e95] [cursor=pointer]:
        - /url: /contacto
      - link "Preguntas Frecuentes" [ref=f4e96] [cursor=pointer]:
        - /url: /faq
    - generic [ref=f4e97]: © 2026 Pet Store
```