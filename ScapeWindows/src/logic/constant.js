export const classColor = [
    "rojo", "verde", "azul", "amarillo", "morado",
  "aqua", "rosa", "violeta", "celeste", "cielo"
]

export const articles = Array.from({length: 10}, (_, i) => ({
    title: `Article ${i + 1}`,
    contenido: `Este es el contenido ${i + 1}`
}));