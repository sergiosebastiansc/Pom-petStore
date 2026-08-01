import {test,expect} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import PayPage from "../pages/PayPage";
import { beforeEach } from "node:test";

let payPage;
let loginPage;
test.describe('validando pasarela de pagos', () => {

    test.beforeEach(async ({ page }) => {
        
        payPage = new PayPage(page);
        loginPage= new LoginPage(page)
    })

    test('compra de un producto', async ({ page }) => {
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        await payPage.pago ('santiago123','4242 4242 4242 4242','0429','123','12345')
        await expect ( page.getByRole('heading', { name: '¡Pago exitoso!' })).toBeVisible();
    });

    test('compra con numero de tarjeta inválido', async ({ page }) => {
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        await payPage.pago ('santiago123','000011112222333','0429','123','12345')
        await expect ( await page.getByText('El número de tarjeta no es válido.', { exact: true })).toBeVisible();
    });
     test('compra con numero de tarjeta bloqueada', async ({ page }) => {
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        await payPage.pago ('santiago123','4000000000000002','0429','123','12345')
        await expect ( page.getByText('Tu tarjeta ha sido rechazada.', { exact: true })).toBeVisible();
    });

    test('compra sin numero de tarjeta', async ({ page }) => {
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        await payPage.pago ('santiago123','')
        await expect (page.getByText('El número de tarjeta está incompleto.', { exact: true }) ).toBeVisible();
    });

     
    
})  