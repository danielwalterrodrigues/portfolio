import './Menuitem.css';
import { useState } from 'react';
import Mario from './Mario';
import { motion } from "framer-motion";


const Menuitem = (props) => {

    const [hover, setHover] = useState(false);
    const [clicou, setClicou] = useState();
    const [zix, setZix] = useState('none');
    const [indice, setIndice] = useState();

    
    const passaMouse = event => {
        setHover(true);
    }
    const tiraMouse = event => {
       setHover(false);
    }

    const clicaItem = event => {
        setClicou(true);
        setZix('block');
    }
    const randomico = Math.floor(Math.random() * (123546 - 6)) + 6;
    return(
        <>
            <button onMouseOver={passaMouse} onMouseOut={tiraMouse} style={{
                backgroundColor:props.Cor,
                }} className='botao hover-2' onClick={clicaItem}>
                {props.Leg}
            </button>
            {props.key}
            {hover && 
                <>
                <div className='legenda' style={{backgroundColor: props.Cor,}}>{props.Hover}</div>
                <div id="triangulo-para-esquerda" style={{borderRightColor: props.Cor}}></div>
                {props.Mario === 'true' &&
                    <Mario />
                }
                </>
            }
            {clicou &&
                <motion.div className='titulo' style={{backgroundColor: props.corcomplementar, display: zix, zIndex: -3,}}
                animate={{opacity: 1, height: '100vh',}}
                transition={{delay: 0.5, duration:1}}
                initial={{opacity: 0, height:'0'}}
                >{props.Nome}</motion.div>
            }
        </>
     )
}
export default Menuitem