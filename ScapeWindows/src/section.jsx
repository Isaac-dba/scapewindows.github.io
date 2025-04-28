import { useState } from "react";
import { Article } from "./articles/article.jsx";
import { articles, classColor } from "./logic/constant.js";

export const Section = () => {
    const [index, setIndex] = useState(0);
    const article = articles[index];
    const colorClass = classColor[index];

    const nexArticle = () => {
        setIndex((prev) => (prev + 1) % articles.length);
    }

    return (
        <section>
            <Article title={article.title} contenido={article.contenido} colorClass={colorClass}/>
            <button onClick={nexArticle}
            >siguiente</button>
        </section>
    )
}