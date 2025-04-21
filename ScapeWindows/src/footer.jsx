import { useEffect, useState } from "react";

function FooterSW(){
    //estados prueba
    const [backColor, setBC] = useState("#075f88");
    const [count, setCount] = useState(0);
    useEffect(() => {
        setCount(prev => prev + 1);
    },[backColor])
    return(
        <div className="contentFooter" style={{backgroundColor: !backColor ? "red" : "#075f88"}}>
        <div className="footer-Btn">
            <button onClick={() => setBC(!backColor)} id="btnLeft" className="btn-direction">Left</button>
            <button onClick={() => setBC(!backColor)} id="btnRight" className="btn-direction">Right</button>
            <button onClick={() => setBC(!backColor)} id="btnUp" className="btn-direction">Up</button>
            <button onClick={() => setBC(!backColor)} id="btnDown" className="btn-direction">Down</button>
        </div>
        <div className="countNivel">
            <p className="numNivel-0">Nivel - {count}</p>
        </div>
        </div>
    )
}

export default FooterSW;