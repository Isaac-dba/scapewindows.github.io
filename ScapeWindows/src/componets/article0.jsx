import { useMemo, useState } from "react";
import { handleNext } from "../logic/constant";
import { claves } from "../logic/constant";
export function Article0({setIndex}){
    const [value, setValue] = useState('');
    // Generar una clave secreta aleatoria al cargar el componente
    const [claveSecreta] = useState(() => {
        const aleatoria = claves[Math.floor(Math.random() * claves.length)];
        console.log(aleatoria.replace(/\s+/g, ""));
        return aleatoria.replace(/\s+/g, "");
    });
    // Comprobar si la clave ingresada es correcta
    const esClaveCorrecta = value.replace(/\s+/g, "").toLowerCase() === claveSecreta.replace(/\s+/g, "").toLowerCase();
    
    // render la clave secreta
    const RenderClave = () => {
        const pista = useMemo(() => {
            if(claveSecreta === claves[0]) return `${claveSecreta[0]}--${claveSecreta[3]}--`;
            if(claveSecreta === claves[1]) return `${claveSecreta[0]}-----${claveSecreta[6]}-`;
            if(claveSecreta === claves[2]) return `${claveSecreta[0]}---${claveSecreta[4]}--${claveSecreta[7]}-`;
            if(claveSecreta === claves[3]) return `-${claveSecreta[1]}--${claveSecreta[4]}`;
            if(claveSecreta === claves[4]) return `${claveSecreta[0]}--${claveSecreta[3]}---`;
            if(claveSecreta === claves[5]) return `-${claveSecreta[1]}--${claveSecreta[4]}---${claveSecreta[8]}`;
            if(claveSecreta === claves[6]) return `--${claveSecreta[2]}---${claveSecreta[6]}`;
            if(claveSecreta === claves[7]) return `-${claveSecreta[1]}----${claveSecreta[6]}-`;
            if(claveSecreta === claves[8].replace(/\s+/g, "").toLowerCase()) return `${claveSecreta[0]}-- -${claveSecreta[4]}----${claveSecreta[9]}-`;
            if(claveSecreta === claves[9]) return `---${claveSecreta[3]}----${claveSecreta[8]}---${claveSecreta[12]}`;
            if(claveSecreta === claves[10].replace(/\s+/g, "").toLowerCase()) return `-${claveSecreta[1]}--${claveSecreta[4]}---${claveSecreta[8]} -${claveSecreta[10]}---${claveSecreta[14]}--${claveSecreta[17]}`;
            if(claveSecreta === claves[11].replace(/\s+/g, "").toLowerCase()) return `--${claveSecreta[2]}--${claveSecreta[5]}-- -${claveSecreta[9]}---${claveSecreta[13]}---${claveSecreta[17]}-`;
            if(claveSecreta === claves[12].replace(/\s+/g, "")) return `-${claveSecreta[1]}--${claveSecreta[4]}- -- ${claveSecreta[8]}--`;
            if(claveSecreta === claves[13]) return `-${claveSecreta[1]}--${claveSecreta[4]}--`;
            if(claveSecreta === claves[14].replace(/\s+/g, "").toLowerCase()) return `-${claveSecreta[1]}--${claveSecreta[4]}- -- ${claveSecreta[8]}---${claveSecreta[12]}-`;
            if(claveSecreta === claves[15].replace(/\s+/g, "")) return `--${claveSecreta[2]}-${claveSecreta[4]} -${claveSecreta[6]}--${claveSecreta[9]}--${claveSecreta[12]}`;            
            if(claveSecreta === claves[16].replace(/\s+/g, "")) return `-${claveSecreta[1]}--${claveSecreta[4]}- -- ${claveSecreta[8]}---${claveSecreta[12]}--${claveSecreta[15]}`;
            if(claveSecreta === claves[17].replace(/\s+/g, "")) return `${claveSecreta[0]}-${claveSecreta[2]}---${claveSecreta[6]}- -- ${claveSecreta[10]}---${claveSecreta[14]}-`;
            if(claveSecreta === claves[18].replace(/\s+/g, "")) return `${claveSecreta[0]}---${claveSecreta[4]}- ${claveSecreta[6]}---${claveSecreta[10]}---${claveSecreta[14]}`;
            if(claveSecreta === claves[19].replace(/\s+/g, "")) return `-${claveSecreta[1]}- ${claveSecreta[3]}- -- --${claveSecreta[9]}-${claveSecreta[11]}`;            
        }, []);
        return pista;
    }
    // añadir la clase a los strong
    const letterClave = Array.from(new Set(claveSecreta.replace(/\s+/g, "").toLowerCase()));
    const classLetter = (letter) => {
        return letterClave.includes(letter.toLowerCase()) ? "neon-letter" : "";
    }
    return(
        <>
            <h1 className="neon-title">
                <span className="letter">¡</span>
                <span className="letter broken">B</span>
                <span className="letter">i</span>
                <span className="letter">e</span>
                <span className="letter flicker">n</span>
                <span className="letter">v</span>
                <span className="letter flicker">e</span>
                <span className="letter">n</span>
                <span className="letter">i</span>
                <span className="letter">d</span>
                <span className="letter flicker">o</span>
            </h1>
            <p className={esClaveCorrecta ? "neon-simple p1" : "neon-simple"} >
                <strong className={classLetter("H")}>H</strong>as entrado al um
                <strong className={classLetter("b")}>b</strong>ral de 
                <strong className={classLetter("l")}>l</strong>os acertijos. Aquí 
                <strong className={classLetter("c")}>c</strong>omienza tu viaje men
                <strong className={classLetter("t")}>t</strong>al, donde c
                <strong className={classLetter("a")}>a</strong>da niv
                <strong className={classLetter("e")}>e</strong>l te pondrá a prueba.
            </p>
            <p className={esClaveCorrecta ? "neon-simple p2" : "neon-simple"}>
                Este primer 
                <strong className={classLetter("d")}>d</strong>esafío es 
                <strong className={classLetter("s")}>s</strong>encillo… pero no te con
                <strong className={classLetter("f")}>f</strong>íes. Cada respuesta cor
                <strong className={classLetter("r")}>r</strong>ecta desblo
                <strong className={classLetter("q")}>q</strong>ueará el ca
                <strong className={classLetter("m")}>m</strong>ino al si
                <strong className={classLetter("g")}>g</strong>uiente ni
                <strong className={classLetter("v")}>v</strong>el.
            </p>
            <p className={esClaveCorrecta ? "neon-simple p3" : "neon-simple"}>
                <strong className={classLetter("o")}>O</strong>bserva con atenció
                <strong className={classLetter("n")}>n</strong>, p
                <strong className={classLetter("i")}>i</strong>ensa con calma, 
                <strong className={classLetter("y")}>y</strong> rec
                <strong className={classLetter("u")}>u</strong>erda: en este 
                <strong className={classLetter("j")}>j</strong>uego, nada es lo que 
                <strong className={classLetter("p")}>p</strong>arece. 
                <strong className={classLetter("Z")}>Z</strong>
            </p>
            <div className="contraseña" style={{opacity: esClaveCorrecta ? "0" : "1",
                transition: esClaveCorrecta ? "opacity 1s linear 3s" : "opacity 1s linear 3s"
            }}>
                <input type="text" value={value} onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="pistas" style={{opacity: esClaveCorrecta ? "0" : "1",
                transition: esClaveCorrecta ? "opacity 1s linear 3s" : "opacity 1s linear 3s"
            }}>
                <RenderClave />
            </div>
            <div className="contenBtn" style={{
                scale: esClaveCorrecta ? "1" : "0",
                transition: esClaveCorrecta ? "scale 1s linear 3s"  : "scale 1s linear 0s"
            }}>
                <button id="btn-0" onClick={() => handleNext({setIndex})}>push</button>
            </div>
        </>
    )
} 