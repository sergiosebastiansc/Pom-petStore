import {test,expect} from "@playwright/test";
import {allure} from 'allure-playwright';
import RegisterPage from "../pages/Registerpage";
import { beforeEach } from "node:test";

let registerPage;
test.describe('validando registro de cuenta', () => {

    test.beforeEach(async ({ page }) => {
        
        registerPage = new RegisterPage(page);
    })

    test('Registro con datos válidos', async ({ page }) => {
        //en caso de usuario ya registrado colocar nuevo usuario y correo
        await registerPage.registro ('Sergio SSCX', 'sergiosebastianxx@gmail.com','clave1234', 'clave1234')
       // await expect ( page.getByRole('button', { name: 'Salir' })).toBeVisible()
    });

    test('Registro de una cuenta ya creada', async ({ page }) => {
        await registerPage.registro ('Sergio Salinas', 'sergiosebastiansc@gmail.com','clave1234', 'clave1234')
        await expect ( await page.getByText('El correo ya está registrado', { exact: true })).toBeVisible()
    });
   
})  