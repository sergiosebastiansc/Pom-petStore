# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra de un producto
- Location: tests\pago.spec.js:16:9

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for locator('.StripeElement StripeElement--empty').contentFrame().getByRole('textbox', { name: 'Credit or debit card number' })

```

```
Error: browserContext.close: Target page, context or browser has been closed
```