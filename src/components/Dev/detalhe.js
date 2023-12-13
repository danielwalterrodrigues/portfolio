import React from 'react';
import './Dev.css';
import './card.css';
import '../../Mobile.css';
import '../internas.css';
import { motion } from 'framer-motion';
import './detalhe.css';
import voltar from '../../assets/voltar.png';
import { useState } from 'react';
import aguardando from '../../assets/aguardando.png';
import turn from '../../assets/turn.png';

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
            
                <motion.div className='detalhe' 
                    animate={{ x:'0px', opacity: 1}}
                    transition={{ type: 'spring', restSpeed: 1.5 }}
                    initial={{ x:'305px', opacity: 0}}>
                    <a onClick={fechaDetalhe} className='detalheFechar'>
                        <img src={voltar} style={{cursor:'pointer'}}></img>
                    </a>
                    <motion.div className='detalheContent'>
                        <div className='detalheEsq'>
                            <div style={{width: 120, height: 150,}}>
                                <img src={props.Logo}></img>
                            </div>
                        </div>
                        <div className='detalheCentro'>
                            
                                {props.Imagens.map((imagens)=>{
                                return(
                                    <div class='boxImagem'>
                                        <img thumb={aguardando} key={Math.random()} src={imagens} className='detalheImagem'></img>
                                    </div>
                                )})}
                            
                        </div>
                        <div className='detalheDir'>
                            <div className='card2'>
                                <div className='content2'>
                                    <div className='front2'>
                                        <p className='description2'>
                                            {props.Descricao}
                                        </p>
                                        <div className='turn'>
                                            <img src={turn} style={{width:30, height:'auto',}}></img>
                                        </div>
                                    </div>
                                    <div className='back2'>
                                        <div className='tags2'>
                                        {props.Tags.map((tag) => {
                                            return(
                                                <div className='tag'>{tag}</div>
                                            )
                                        })}
                                        </div>
                                        <div className='turn'>
                                            <img src={turn} style={{width:30, height:'auto',}}></img>
                                        </div>
                                    </div>
                                </div>

                            </div>


                        </div>
                    </motion.div>
                </motion.div>
            </>
        }
        <div className='card'>
            <div className='BoxProjeto'>
                <div class="content" style={{height:((Math. random()*(20-5)+5)*10),}}>
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