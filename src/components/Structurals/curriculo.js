import React, { button, useState } from "react";
import './barraBotosmenores.css';
import curriculo1 from '../../assets/ico_curriculo1.png';
import curriculo2 from '../../assets/ico_curriculo2.png';
import Imprimir from "../Bio/Imprimir";

const Curriculo = () => {
const [aberto, setAberto] = useState(false);
    return(
    <>
        {aberto ? 
        
            <>
                <button onClick={()=>setAberto(false)} className='botoesMenores' style={{backgroundColor: '#333333'}}>
                    <img src={curriculo2}></img>
                </button>
                <div className='barracinza'></div>
                
            </>
            : 
                <button onClick={()=>setAberto(true)} className='botoesMenores'>
                    <img src={curriculo1}></img>
                </button>
        }       
    </>
    )
}
export default Curriculo