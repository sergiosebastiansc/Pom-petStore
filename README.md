# POM Tienda de Mascotas

Proyecto de automatización de pruebas E2E para una **tienda de mascotas** usando [Playwright](https://playwright.dev/) y el patrón de diseño **Page Object Model (POM)**.

La aplicación bajo prueba está desplegada en Netlify: `https://creative-choux-407b2c.netlify.app/`

## Tecnologías

- **Node.js** (CommonJS/ESM)
- **Playwright** (`@playwright/test`)
- **Allure** (`allure-playwright` + `allure-commandline`) para reportes
- Reportes nativos de Playwright: HTML y JSON

## Estructura del proyecto

```
pom tienda mascotas/
├── pages/                    # Page Objects (modelo de páginas)
│   ├── LoginPage.js          # Página de inicio de sesión
│   ├── Registerpage.js       # Página de registro de cuenta
│   └── PayPage.js            # Pasarela de pago / carrito
├── tests/                    # Suites de pruebas
│   ├── login.spec.js         # Escenarios de login
│   ├── registro.spec.js      # Escenarios de registro
│   └── pago.spec.js          # Escenarios de pago
├── playwright.config.js      # Configuración de Playwright
├── package.json
└── allure-results/           # Resultados generados para Allure
```

## Page Objects

### LoginPage
Encapsula el flujo de inicio de sesión:
- `login(emailAddress, password)`: navega a la tienda, abre el formulario de login y completa los campos.

### Registerpage
Encapsula el flujo de registro de cuenta:
- `registro(fullName, emailAddress, password, confirmPassword)`: navega a la tienda, abre el formulario de registro, completa los campos, acepta los términos y crea la cuenta.

### PayPage
Encapsula el flujo de compra y pago:
- `agregarAlCarro()`, `clicarCarrito()`, `clicarBtnPago()`: navegación del carrito.
- `llenarDireccion(value)`, `llenarNumTarjeta(value)`, etc.: completan dirección y datos de tarjeta (incluye manejo de **iframes** del campo de tarjeta).
- `pago(direccion, numeroTarjeta, ...)`: flujo completo de pago.

## Escenarios de prueba

| Archivo | Escenarios |
|---|---|
| `tests/login.spec.js` | Login con datos válidos, inválidos y vacíos |
| `tests/registro.spec.js` | Registro con datos válidos y cuenta ya existente |
| `tests/pago.spec.js` | Compra exitosa, tarjeta inválida, tarjeta bloqueada y sin tarjeta |

## Requisitos previos

- Node.js instalado.
- Instalar dependencias:

```bash
npm install
```

- Instalar los navegadores de Playwright (primera vez):

```bash
npx playwright install
```

## Ejecución de pruebas

Ejecutar todas las pruebas:

```bash
npx playwright test
```

Ejecutar una suite específica:

```bash
npx playwright test tests/login.spec.js
```

Ejecutar en modo UI (debug visual):

```bash
npx playwright test --ui
```

## Reportes

Al ejecutar las pruebas se generan:

- **Reporte HTML**: `playwright-report/`
- **Reporte JSON**: `resultados.json`
- **Resultados para Allure**: `allure-results/`

Ver el reporte HTML:

```bash
npx playwright show-report
```

Generar y abrir el reporte Allure:

```bash
npx allure generate allure-results --clean
npx allure open
```

## Notas

- Las pruebas corren sobre el proyecto **chromium** (Desktop Chrome).
- Se capturan capturas de pantalla en cada prueba (`screenshot: 'on'`).
- Traces disponibles al reintentar pruebas fallidas (`trace: 'on-first-retry'`).
