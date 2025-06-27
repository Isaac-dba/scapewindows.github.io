

export function Reloj({path}){
    return(
        <div className={`reloj`}>
            <div className="innerReloj">
                {Array.from({length: 60}, (_, i) => (
                    <div key={i} className={`punto${i + 1} ${path.includes(i) ? "checkReloj" : ""}`}>
                    </div>
                    
                ))}
                <div className="clockwiseContainer">
                    <div className="clockCenter"></div>
                    <div className="clockHora"></div>
                    <div className="clockMin"></div>
                    <div className="clockSec"></div>
                </div>
            </div> 
        </div>
    )
}