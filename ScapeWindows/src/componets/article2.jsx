import { handleNext } from "../logic/constant";
import { useEffect, useMemo, useRef, useState } from "react";
import "../sass/_article2.scss";


export function Article2({setIndex}){
    // arr random para la clave secreta
    const targetPatternRandom = (numLength) => {
        return Array.from({length: numLength}, () => Math.random() < 0.5 ? 0 : 1);
    }
    //nivel de prueba
    const [switchesTest, setSwitchesTest] = useState([0, 0, 0, 0, 0]);
    const targetPatternTest = useMemo(() => targetPatternRandom(5), []);

    //primer nivel
    const [switchesThree, setSwitchesThree] = useState([0,0,0,0,0,0,0,0,0,0]);
    const targetPatternThree = useMemo(() => targetPatternRandom(10), []);
    
    //segundo nivel
    const [switchesTwo, setSwitchesTwo] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const targetPatternTwo = useMemo(() => targetPatternRandom(14), []);
    
    //tercer nivel
    const [switchesOne, setSwitchesOne] = useState([0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]);
    const targetPatternOne = useMemo(() => targetPatternRandom(30), []);
    
    //
    const [doorOpenTest, setDoorOpen] = useState(false);
    const [doorOpenThree, setDoorOpenThree] = useState(false);
    const [doorOpenTwo, setDoorOpenTwo] = useState(false);
    const [doorOpenOne, setDoorOpenOne] = useState(false);
    
    //audio
    const audioRefTest = useRef(null);
    const audioRefThree = useRef(null)
    const audioRefTwo = useRef(null)
    const audioRefOne = useRef(null)
    
    useEffect(() => {
        audioRefTest.current = new Audio(import.meta.env.BASE_URL + "/sound/nivel2/door-lock-1.mp3");
    }, []);
    useEffect(() => {
        audioRefThree.current = new Audio(import.meta.env.BASE_URL + "/sound/nivel2/door-lock-4.mp3");
    }, []);
    useEffect(() => {
        audioRefTwo.current = new Audio(import.meta.env.BASE_URL + "/sound/nivel2/door-lock-3.mp3");
    }, []);
    useEffect(() => {
        audioRefOne.current = new Audio(import.meta.env.BASE_URL + "/sound/nivel2/door-lock-2.mp3");
    }, []);
    
    //configuracion de audios
    useEffect(() => {
    if(doorOpenTest){
        setTimeout(() => {
            audioRefTest?.current.play();
        }, 100);
    }
    }, [doorOpenTest]);
    useEffect(() => {
        if(doorOpenThree){
            setTimeout(() => {
                audioRefThree?.current.play();
            }, 100);
        }
    }, [doorOpenThree]);
    useEffect(() => {
        if(doorOpenTwo){
        setTimeout(() => {
            audioRefTwo?.current.play();
        }, 100);
    }
    }, [doorOpenTwo]);
    useEffect(() => {
        if(doorOpenOne){
            setTimeout(() => {
                audioRefOne?.current.play();
        }, 100);
    }
    }, [doorOpenOne]);
    
    //next nivel
    const [nextButton, setNextButton] = useState(false);
    if(nextButton){
        setTimeout(() => {
            setNextButton(false);
        }, 1000)
    };

    //
    const toggleSwitch = (index) => {
        if(doorOpenTest) return; 
        const newSwitchesTest = [...switchesTest];
        //
        newSwitchesTest[index] = newSwitchesTest[index] === 0 ? 1 : 0;
        //
        setSwitchesTest(newSwitchesTest);
        //verificar patrón
        if(JSON.stringify(newSwitchesTest) === JSON.stringify(targetPatternTest)){
            setDoorOpen(true);
        }
        //
    }
    
    //
    const toggleSwitchThree = (index) => {
        if(doorOpenThree) return;
        const newSwitchesThree = [...switchesThree];
        newSwitchesThree[index] = newSwitchesThree[index] === 0 ? 1 : 0;
        setSwitchesThree(newSwitchesThree);
        if(JSON.stringify(newSwitchesThree) === JSON.stringify(targetPatternThree)){
            setDoorOpenThree(true);
        }
    }
    
    //
    const toggleSwitchTwo = (index) => {
        if(doorOpenTwo) return;
        const newSwitchesTwo = [...switchesTwo];
        newSwitchesTwo[index] = newSwitchesTwo[index] === 0 ? 1 : 0;
        setSwitchesTwo(newSwitchesTwo);
        if(JSON.stringify(newSwitchesTwo) === JSON.stringify(targetPatternTwo)){
            setDoorOpenTwo(true);
        }
    }
    
    //
    const toggleSwitchOne = (index) => {
        if(doorOpenOne) return;
        const newSwitchesOne = [...switchesOne];
        newSwitchesOne[index] = newSwitchesOne[index] === 0 ? 1 : 0;
        setSwitchesOne(newSwitchesOne);
        if(JSON.stringify(newSwitchesOne) === JSON.stringify(targetPatternOne)){
            setDoorOpenOne(true);
        }
    }
    
    return (
        <div className="level-two">
            <h2>{doorOpenOne ? "¡Puerta Abierta!" : "Abre la puerta"}</h2>
            <div className="switches">
                {switchesTest.map((value, i) => (
                    <button key={i} 
                    className={`switch ${value ? "on" : "off"} ${doorOpenTest ? "test-" + i : ""}`}
                    onClick={() => {toggleSwitch(i)}}>
                        {value ? "ON" : "OFF"}
                    </button>
                ))}
            </div>
            <button className={`nextNivel ${nextButton ? "nextButton" : ""} ${doorOpenOne ? "" : "off"}`}
            onClick={() => {setNextButton(true), setTimeout(() => {handleNext({setIndex})}, 2000)}}>Nn</button>
            <div className={`door ${doorOpenOne ? "open" : ""} `}>
                <div className="pomo"></div>
                <div className="innerDoor1">
                    <div className="switches">
                        {switchesOne.map((value, i) => (
                            <button key={i}
                            className={`switch ${value ? "on" : "off"} ${doorOpenTwo ? "one-" + i : ""}
                                ${doorOpenOne ? "checkPath-" + i : ""}`} 
                            onClick={() => {toggleSwitchOne(i)}}
                            >
                                {value ? "ON" : "OFF"}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="innerDoor2">
                    <div className="switches">
                        {switchesTwo.map((value, i) => (
                            <button key={i}
                            className={`switch ${value ? "on" : "off"} ${doorOpenThree ? "two-" + i : ""}
                                ${doorOpenTwo ? "checkPath-" + i : ""} `}
                            onClick={() => toggleSwitchTwo(i)}
                            >
                                {value ? "ON" : "OFF"}
                            </button>
                        ))}
                    </div>
                </div>
                <div className="innerDoor3">
                    <div className="switches">
                        {switchesThree.map((value, i) => (
                            <button key={i}
                            className={`switch ${value ? "on" : "off"} ${doorOpenTest ? "three-" + i : ""}
                                ${doorOpenThree ? "checkPath-" + i : ""}`}
                            onClick={() => toggleSwitchThree(i)}>
                                {value ? "ON" : "OFF"}
                            </button>
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

