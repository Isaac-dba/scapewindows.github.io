import { resetNivel } from "../logic/constant";

export const Article = ({id, contenido, setIndex}) => {

    return(
        <article className={`articulo`} id={id}>
            <div className={`divContent`}>{contenido}</div>
            <button onClick={() => resetNivel({setIndex})} >reset</button>
        </article>
    )
}