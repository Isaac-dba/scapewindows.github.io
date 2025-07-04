import { Article0 } from "../componets/article0";
import { Article1 } from "../componets/article1";
import { Article2} from "../componets/article2";

export const niveles = ({setIndex}) => ([
    <Article0 setIndex={setIndex}/>,
    <Article1  setIndex={setIndex}/>,
    <Article2 setIndex={setIndex}/>
])