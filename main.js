class ModalVivienda {
    constructor(texto, urlPagina) {
        let container = document.createElement('div')
        this.container = container
        this.texto = texto
        this.urlPagina = urlPagina
    }
    validatePathname() {
        
    }
    modalImagen() {
        if(this.urlPagina == window.location.pathname) {
            this.container.innerHTML = `Hola desde el Modal Imagen`
            document.body.insertBefore(this.container, document.main)
        } else  {
            console.log("No tiene modal")
        }
    }
    modalTexto() {
        if(this.urlPagina == window.location.pathname) {
            this.container.innerHTML = `Hola desde el modal texto`
            document.body.insertBefore(this.container, document.main)
        } else  {
            console.log("No tiene modal")
        }
    }
}


