import React, { button, useState } from "react";
import './barraBotosmenores.css';
import redessociais1 from '../../assets/ico_redessociais1.png';
import redessociais2 from '../../assets/ico_redessociais2.png';

const RedesSociais = () => {
const [aberto, setAberto] = useState(false);
    return(
    <>
        {aberto ? 
        
            <>
                <button onClick={()=>setAberto(false)} className='botoesMenores' style={{backgroundColor: '#333333'}}>
                    <img src={redessociais2}></img>
                </button>
                <div className='barracinza'></div>
            </>
            : 
                <button onClick={()=>setAberto(true)} className='botoesMenores'>
                    <img src={redessociais1}></img>
                </button>
        }       
    </>
    )
}
export default RedesSociais