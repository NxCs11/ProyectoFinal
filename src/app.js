import htmlElements from "./elements/html.elements";
import librosManager from "./managers/libros.manager";

//Ejecutamos las funciones iniciales

export const app = () => {
    console.log("Ejecutando aplicación");
    htmlElements.formLibros.onsubmit = (event) => {
        event.preventDefault();
        librosManager.agregarLibro();
    }

    librosManager.mostrarLibros();
}

