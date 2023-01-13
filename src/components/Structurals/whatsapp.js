import React, { button, useState } from "react";
import './barraBotosmenores.css';
import whatsapp1 from '../../assets/ico_whatsapp1.png';
import whatsapp2 from '../../assets/ico_whatsapp2.png';

const Whatsapp = () => {
const [aberto, setAberto] = useState(false);
    return(
    <>
        {aberto ? 
        
            <>
                <button onClick={()=>setAberto(false)} className='botoesMenores' style={{backgroundColor: '#333333'}}>
                    <img src={whatsapp2}></img>
                </button>
                <div className='barracinzaWhats'></div>
            </>
            : 
                <button onClick={()=>setAberto(true)} className='botoesMenores'>
                    <img src={whatsapp1}></img>
                </button>
        }       
    </>
    )
}
export default Whatsapp