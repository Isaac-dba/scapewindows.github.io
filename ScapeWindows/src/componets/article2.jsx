import { handleNext } from "../logic/constant";


export function Article2({setIndex}){
    return (
        <>
           hola 2
           <button onClick={() => handleNext({setIndex})}>next</button>
        </>
    )
}