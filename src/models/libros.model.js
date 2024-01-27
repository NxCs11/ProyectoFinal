export const crearLibro = (texto) => {
    let nuevoLibro = {
        id: Date.now().toString(36),
        titulo: texto,
        leido: false
    }

    return nuevoLibro;
}