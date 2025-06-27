

//son los niveles para sass (classColor) y btn next
export const articles = Array.from({length: 10}, (_, i) => ({
    id: `article${i}`,
}));

//animacion de los niveles siquiente nivel
export const handleNext = ({setIndex}) => {
    if(document.startViewTransition){
        document.startViewTransition(() => {
            setIndex((prev) => {
                const newIndex = prev + 1;
                window.localStorage.setItem("actuality", JSON.stringify(newIndex));
                return newIndex;
            })
        });
    }
}
export const resetNivel = ({setIndex}) => {
    window.localStorage.removeItem("actuality");
    setIndex(0);
}

//keys correctas para desbloquear
export const claves = [
    "umbral",//0
    "abertura",//1
    "resquicio",//2
    "marco",//3
    "cristal", //4
    "vislumbre", //5
    "reflejo",//6
    "claridad",//7
    "luz filtrada",//8
    "transparencia",//9
    "horizonte enmarcado",//10 
    "contorno translucido",//11
    "puerta de luz",//12
    "mirador",//13
    "franja de vision",//14
    "borde luminoso",//15
    "ranura de claridad",//16
    "silencio de vidrio",//17
    "pasaje invisible",//18
    "ojo de la pared"//19
];

//generador de caminos aleatorios
export const generatPath = () => {
    const path = [];
    let position = Math.floor(Math.random() * 5);
    for(let row = 0; row < 10; row++){
        path.push(position);
        const move = Math.floor(Math.random() * 3) - 1;
        position = Math.max(0, Math.min(4, position + move));
    }
    return path.map((col, row) => row * 5 + col);
}