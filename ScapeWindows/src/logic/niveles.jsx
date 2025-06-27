import { Article0 } from "../componets/article0";
import { Article1 } from "../componets/article1";


export const niveles = ({setIndex}) => ([
    <Article0 setIndex={setIndex}/>,
    <Article1  setIndex={setIndex}/>
])