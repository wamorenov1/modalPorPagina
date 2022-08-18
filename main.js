class ModalVivienda {
    constructor(texto, urlPagina) {
        console.log(`${texto} ${window.location.pathname}`)
        if(urlPagina == window.location.pathname) {
            let container = document.createElement('div')
            container.innerHTML = this.modalImagen()
            document.body.insertBefore(container, document.main)
        } else  {
            console.log("No tiene modal")
        }
    }
    modalImagen(texto) { 
        return `<p>${this.texto} Esto es un modal imagen</p>`
    }
}