# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: pago.spec.js >> validando pasarela de pagos >> compra con numero de tarjeta bloqueada
- Location: tests\pago.spec.js:27:10

# Error details

```
Error: locator.fill: Target page, context or browser has been closed
Call log:
  - waiting for getByRole('textbox', { name: 'Calle, número, ciudad' })

```

```
Error: browserContext.close: Protocol error (Target.disposeBrowserContext): Failed to find context with id 817027E140911DFFFBF544C53501BDCE
```