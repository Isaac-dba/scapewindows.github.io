// import { classColor } from "../logic/constant";
// import { articles } from "../logic/constant";
export const Article = ({title, contenido, colorClass}) => {
    
    return(
        <>
            <article className={`articulo ${colorClass}`}>
                <h1>{title}</h1>
                <p>{contenido}</p>
            </article>
        </>
    )
}