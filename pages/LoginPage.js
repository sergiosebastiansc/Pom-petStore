
class LoginPage {
    constructor(page) {
        this.url = '/login';
        this.page=page;
        this.emailAddress = page.getByRole('textbox', { name: 'tu@correo.com' })
        this.password =  page.getByRole('textbox', { name: '••••••••' })
        this.btnIniciarSesion= page.getByRole('button', { name: 'Iniciar Sesión' })
    }

    async llenarEmailAdress(value) {
        await this.emailAddress.fill(value);
    }

    async llenarPassword(value) {
        await this.password.fill(value);
    }

    async clicarBtnIniciarSesion() {
        await this.btnIniciarSesion.click()
    }


    async login(emailAddress,password){
        await this.page.goto('https://creative-choux-407b2c.netlify.app/')
        await this.page.getByRole('link', { name: 'Iniciar Sesión' }).click()
        await this.llenarEmailAdress(emailAddress)
        await this.llenarPassword(password)
        await this.clicarBtnIniciarSesion()
        
    }
}

export default LoginPage;  