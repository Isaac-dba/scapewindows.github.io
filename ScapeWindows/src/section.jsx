import { useState } from "react";
import { Article } from "./articles/article.jsx";
import { articles} from "./logic/constant.js";
import { niveles } from "./logic/niveles.jsx";
// import { resetNivel } from "./logic/constant.js";
export const Section = () => {
    const [index, setIndex] = useState(() => {
        //cargar desde localStorage si no es 0
        const load = window.localStorage.getItem("actuality");
        return load ? JSON.parse(load) : 0;
    });
    const article = articles[index];
    //memorizar en cache y cambia cuando setIndex cambia 
    //useMemo evita renderizados innecesarios
    // eliminamos para evitar problemas con el save y el load en localStorage
    const renderNiveles = niveles({setIndex});
    return (
        <section>
            <h1>Nivel {index}</h1>
            <Article id={article.id}  contenido={renderNiveles[index]} setIndex={setIndex}/>
        </section>
    )
}