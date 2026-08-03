
class PayPage {
    constructor(page) {
        this.url = '/carrito';
        this.page=page;
        this.agregarProducto = page.locator('button').filter({ hasText: 'Añadir al carrito' }).first();
        this.btnCarrito =  page.getByText('shopping_cart', { exact: true });
        this.btnPago= page.getByRole('button', { name: 'Proceder al pago' });
        this.direccion= page.getByRole('textbox', { name: 'Calle, número, ciudad' });
        const iframeElement= page.frameLocator('iframe[title="Secure card payment input frame"]');
        
        this.numeroTarjeta=  iframeElement.locator('input[name="cardnumber"]');
        this.numeroCaducidad= iframeElement.locator('input[name="exp-date"]')
        this.numeroCVV=iframeElement.locator('input[name="cvc"]');
        this.numeroCP=iframeElement.locator('input[name="postal"]');
        this.btnConfirmarPago= page.locator("//button[@type='submit']");
    }

    async agregarAlCarro() {
        await this.agregarProducto.click()
    }


    async clicarCarrito () {
        await this.btnCarrito.click()
    }

    async clicarBtnPago() {
        await this.btnPago.click()
    }

    async llenarDireccion(value){
        await this.direccion.fill(value)
    }
    async llenarNumTarjeta(value){
        
         await this.numeroTarjeta.fill(value)
    }
    async llenarNumeroCaducidad(value) {
        await this.numeroCaducidad.fill(value)
    }
    async llenarNumeroCVV(value){
        await this.numeroCVV.fill(value)
    }
    async llenarNumeroCP(value){
        if (value && await this.numeroCP.isVisible()) {
        await this.numeroCP.fill(value);
        }    
    }
    async clicarConfirmarPago(){
        await this.btnConfirmarPago.click()
    }


    async pago(direccion,numeroTarjeta,numeroCaducidad,numeroCVV,numeroCP){
       
        await this.agregarAlCarro()
        await this.clicarCarrito()
        await this.clicarBtnPago()
        await this.llenarDireccion(direccion)
        await this.llenarNumTarjeta(numeroTarjeta)
        await this.llenarNumeroCaducidad(numeroCaducidad)
        await this.llenarNumeroCVV(numeroCVV)
        await this.llenarNumeroCP(numeroCP)
        await this.clicarConfirmarPago()
        
    }
}

export default PayPage;  