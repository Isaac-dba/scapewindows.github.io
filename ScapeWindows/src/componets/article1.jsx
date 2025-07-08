import { useEffect, useState, useRef } from "react";
import { generatPath, handleNext } from "../logic/constant";
import { Reloj } from "./objetos/reloj";

export function Article1({setIndex}){
    //evento click
    const [clicked, setClicked] = useState(null);
    //generar camino
    const [path, setPath] = useState([]);
    useEffect(() => {setPath(generatPath())}, [setIndex]);
    
    //state de los clicks
    const [trueClicks, setTrueClicks] = useState([]);
    const [falseClicks, setFalseClicks] = useState([]);
    //audio
    const audioRef = useRef(null);

    useEffect(() => {
        audioRef.current = new Audio(import.meta.env.BASE_URL + "/sound/ticking-clock-background-sound-effect-331707.mp3");
    }, []);
    //verificar camino
    console.log(clicked);
    const checkedPath = (i) => path.includes(i);
    const contentReloj = [
        <Reloj path={[path[0]]} />,
        <Reloj path={[path[1]]}/>,
        <Reloj path={[path[2]]}/>,
        <Reloj path={[path[3]]}/>,
        <Reloj path={[path[4]]}/>,
        <Reloj path={[path[5]]}/>,
        <Reloj path={[path[6]]}/>,
        <Reloj path={[path[7]]}/>,
        <Reloj path={[path[8]]}/>,
        <Reloj path={[path[9]]}/>
    ];
        if(falseClicks.length == 10){
            window.location.reload();
        }
        if(trueClicks.length == 10){
            audioRef.current?.pause();
        }
        const relojClass = (index) => `reloj${index - (10 - trueClicks.length)}`;
    return(
        <>
            <div className="contentReloj">
                {contentReloj.map((item, index) => (
                    <div key={index} className={`reloj ${relojClass(index)}`}>{item}</div>
                ))}
            </div>
            <div className={`shadowFloor shadow${trueClicks.length}`}></div>
            <div className={`floor ${trueClicks.length == 10 ? "winFloor" : ""}`}>
                {Array.from({length: 50}, (_, i) => (
                    <div key={i} className={`square square${i} ${trueClicks.length == 10 ? "win": ""}`} 
                    
                    onClick={() => {
                        if(checkedPath(i)){
                            if(clicked === i){
                                return;
                            }else{
                                document.querySelector(`.square${i}`).classList.add("true");
                            }
                            setTrueClicks((prev) => [...prev, "true"]);
                        }else{
                            if(clicked === i){
                                return;
                            }else{
                                document.querySelector(`.square${i}`).classList.add("false");
                            }
                            setFalseClicks((prev) => [...prev, "false"]);
                            audioRef.current?.play();
                        }
                        setClicked(i);
                    }}> {clicked === null ? 0 : clicked + 1} 
                    </div>
                ))}
                <button id="btn-1" onClick={() => handleNext({setIndex})}
                    style={{transform : trueClicks.length == 10 
                        ? "scaleY(20) scaleX(10)" : "scale(0)",
                        transition: "transform 2s ease 2s"}}></button>
            </div>
        </>
    )
}