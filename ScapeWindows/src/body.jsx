// import { Nivel0 } from "./niveles/nivel0";
import { Vela } from "./obj3D/vela.jsx";

function BodySW(){
    
    return(
        <div className="bodySW">
            <div className="pared">
                <div className="window-left">
                    <div className="innerWindow">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                    </div>
                </div>
                <div className="window-right">
                    <div className="innerWindow">
                        <div className="line-1"></div>
                        <div className="line-2"></div>
                    </div>
                </div>
            </div>
            <Vela />
            <div className="suelo">
                <div className="innerSuelo">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
                <div className="innerSuelo">
                    <div className="item-1"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item-6"></div>
                </div>
                <div className="innerSuelo">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
                <div className="innerSuelo">
                    <div className="item-1"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item-4"></div>
                    <div className="item"></div>
                    <div className="item-6"></div>
                </div>
                <div className="innerSuelo">
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                </div>
                <div className="innerSuelo">
                    <div className="item-1"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item"></div>
                    <div className="item-6"></div>
                </div>
            </div>
        </div>
    )
}
export default BodySW;