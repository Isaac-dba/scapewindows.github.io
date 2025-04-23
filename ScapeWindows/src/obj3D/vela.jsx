import { useEffect, useRef, useState } from "react"

export function Vela(){
    const cStyle = {
        width: "50px",
        height: "100px",
        position: "fixed",
        top: "176px",
        scale: 0.5,
    }
    const bStyle = {
        width: "70px",
        height: "4px",
        backgroundColor: "black",
        transform: "translateX(-10px)"
    }
    const bdVela = {
        width: "40px",
        height: 80,
        backgroundColor: "#fff",
        borderRight: "solid 10px #87a1ce62",
    }
    const mStyle = {
        width: "5px",
        height: 15,
        backgroundColor: "#573707a8",
        transform: "translateX(22.5px)",
        borderRadius: "5px 5px 0px 0px"
    }
    const [enabled, setEnabled] = useState(false);
    const flameRef = useRef(null);
    //animation flame
    useEffect(() => {
        const flame = flameRef.current;
        if(!flame){
            return
        }
        if(enabled){
            flame.classList.toggle("flameAnimate", enabled);
        }else {
            flame.classList.toggle("flameAnimate2");
        }
        return () => {
            flame.classList.remove("flameAnimate", "flameAnimate2");
        }
    }, [enabled]) 
    return(
        <div className="vela" style={cStyle} onClick={() => setEnabled(!enabled)}>
            <div className="flame" ref={flameRef}></div>
            <div className="mecha" style={mStyle}></div>
            <div className="bodyVela" style={bdVela}></div>
            <div className="base" style={bStyle}></div>
        </div>
    )
} 