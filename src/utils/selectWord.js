const palabras = [
    "arbol",
    "calor",
    "cinco",
    "nieve",
    "luzon",
    "campo",
    "silla",
    "lugar",
    "plaza",
    "marco",
    "coral",
    "rocas",
    "verde",
    "noche",
    "voces",
    "lapiz",
    "pared",
    "costo",
    "valor",
    "denso",
    "barro",
    "casas",
    "puedo",
    "vapor",
    "fruta",
    "muros",
    "piano",
    "cerro",
    "hurto",
    "lince"
];

export const selectRandomWord = () => {
    const randomIndex = Math.floor(Math.random() * palabras.length);
    return palabras[randomIndex];
}


