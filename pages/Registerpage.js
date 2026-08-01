
class RegisterPage {
    constructor(page) {
        this.url = '/registro';
        this.page=page;
        this.fullName = page.getByRole('textbox', { name: 'Juan García' })
        this.emailAddress = page.getByRole('textbox', { name: 'tu@correo.com' })
        this.password = page.locator("//div[3]//div[1]//input[1]")
        this.confirmPassword = page.locator("//div[4]//div[1]//input[1]");
         this.checkConfirm=page.getByRole('checkbox');
         this.btnCrearCuenta=page.getByRole('button', { name: 'Crear Cuenta' })
    }

    async llenarFullName(value) {
        await this.fullName.fill(value);
    }
     async llenarEmailAdress(value) {
        await this.emailAddress.fill(value);
    }
     async llenarPassword(value) {
        await this.password.fill(value);
    }
     async llenarConfirmPassword(value) {
        await this.confirmPassword.fill(value);
    }
    async clicarCheck (){
        await this.checkConfirm.click ();
    }
    async clicarCrearCuenta() {
        await this.btnCrearCuenta.click();

    }

    async registro(fullName,emailAddress,password,confirmPassword){
        await this.page.goto('https://creative-choux-407b2c.netlify.app/')
        await this.page.getByRole('button', { name: 'Crear cuenta gratis' }).click()
        await this.llenarFullName(fullName)
        await this.llenarEmailAdress(emailAddress)
        await this.llenarPassword(password)
        await this.llenarConfirmPassword(confirmPassword)
        await this.clicarCheck()
        await this.clicarCrearCuenta()
    }
}

export default RegisterPage;  