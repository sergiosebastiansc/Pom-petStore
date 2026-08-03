import {test,expect} from "@playwright/test";
import {allure} from 'allure-playwright';
import LoginPage from "../pages/LoginPage";
import PayPage from "../pages/PayPage";
import { beforeEach } from "node:test";


let loginPage;
let payPage;
test.describe('validando pasarela de pagos', () => {

    test.beforeEach(async ({ page }) => {
        
        payPage = new PayPage(page);
        loginPage= new LoginPage(page)
    })

    test('compra de un producto', async ({ page }) => {
        allure.epic('flujo de compra');
        await allure.step('paso 1: checkout de credenciales', async () => {    
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        })

        await allure.step('paso 2: compra de producto', async () => {
        await payPage.pago ('santiago123','4242 4242 4242 4242','04/29','123','12345')

        await expect ( page.getByRole('heading', { name: '¡Pago exitoso!' })).toBeVisible();
        });
    })

    test('compra con numero de tarjeta inválido', async ({ page }) => {
         allure.epic('flujo de compra');
        await allure.step('paso 1: checkout de credenciales', async () => {    
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        });

         await allure.step('paso 2: compra de producto', async () => {
        await payPage.pago ('santiago123','0000 1111 2222 3333','04/29','123','12345')

        await expect ( await page.getByText('Your card number is invalid.', { exact: true })).toBeVisible();
        });
    });
     test('compra con numero de tarjeta bloqueada', async ({ page }) => {
        allure.epic('flujo de compra');
        await allure.step('paso 1: checkout de credenciales', async () => { 
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
        })

        await allure.step('paso 2: compra de producto', async () => {
        await payPage.pago ('santiago123','4000 0000 0000 0002','04/29','123','12345')
        await expect ( page.getByText('Your card has been declined.', { exact: true })).toBeVisible();
    });
});

    test('compra sin numero de tarjeta', async ({ page }) => {
        allure.epic('flujo de compra');
        await allure.step('paso 1: checkout de credenciales', async () => { 
        await loginPage.login ('sergiosebastiansc@gmail.com','clave1234')
    });

    await allure.step('paso 2: compra de producto', async () => {
        await payPage.pago ('santiago123','','04/29','123','')
        await expect (page.getByText('Your card number is incomplete.', { exact: true }) ).toBeVisible();
    });
});

     
    
});  