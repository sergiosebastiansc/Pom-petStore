import {test,expect} from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import { beforeEach } from "node:test";

let loginPage;
test.describe('Escenarios de login de cuenta', () => {

    test.beforeEach(async ({ page }) => {
        
        loginPage = new LoginPage(page);
    })

    test('login con datos válidos', async ({ page }) => {
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        await expect ( page.getByRole('button', { name: 'Salir' })).toBeVisible();
    });

    test('login con datos inválidos', async ({ page }) => {
        await loginPage.login ('sergiosebastiansc@gmail.com','claveincorrecta')
        await expect (page.getByText('Credenciales inválidas', { exact: true })).toBeVisible()
    });

     test('login con datos vacios', async ({ page }) => {
        await loginPage.login ('sergiosebastiansc@gmail.com','')
        await expect (await page.getByText('La contraseña es requerida', { exact: true })).toBeVisible()
    });
    
})  