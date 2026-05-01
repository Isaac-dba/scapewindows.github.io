
export const Article = ({id, contenido, setIndex}) => {
    return (
        <article id={id} setIndex={setIndex}>
            <div className={`divContent${id}`}>{contenido}</div>


        </article>
    )
}