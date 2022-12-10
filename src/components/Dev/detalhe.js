import React from 'react';
import './Dev.css';
import './card.css';
import '../../Mobile.css';
import '../internas.css';
import { motion } from 'framer-motion';
import './detalhe.css';
import voltar from '../../assets/voltar.png';
import { useState } from 'react';

const Detalhe = (props) => {

    const [detalhe, AbreDetalhe] = useState(false);
    
    const funcDetalhe = event => {
    AbreDetalhe(true);
    }
    const fechaDetalhe = event => {
        AbreDetalhe(false);
    }


    return (
        <>

        {detalhe && 
            <>
                <div className='detalhe'>
                    <button onClick={fechaDetalhe} className='detalheFechar'>
                        <img src={voltar} style={{cursor:'pointer'}}></img>{props.Nome}
                    </button>
                </div>
            </>
        }
        <div className='card'>
        <div className='BoxProjeto' style={{order:(Math.floor(Math. random()*(1-170)+170))}}>
                <div class="content" style={{height:((Math. random()*(25-5)+5)*10),}}>
                    <div class="front" style={{backgroundImage: 'url('+props.Imgbg+')', backgroundSize: 'cover',}}>
                        <div className='cardBranco'>
                        </div>
                        <div className='title'>{props.Nome}</div>
                        <div className='subtitle'>{props.TecDefault}</div>
                        <div className='tipo'>{props.Tipo}</div>
                        
                    </div>
                    <div class="back">
                        <p class="description">
                            {props.DescricaoCurta}
                        </p>
                        <div className='cardlogo'>
                            <a href='#topo' className='Mais' onClick={funcDetalhe}>+</a>
                        </div>
                    </div>
                </div>
        </div>
        </div>
        </>
    )
}
export default Detalhe