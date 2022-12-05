import './Menuitem.css';
import { useState, useEffect, useContext } from 'react';
import Mario from './Mario';
import { motion } from "framer-motion";
import Context from '../context/contextApi';


const Menuitem = (props) => {

    const [hover, setHover] = useState(false);
    const [clicou, setClicou] = useState(false);
    const [zix, setZix] = useContext(Context);
    //const [abreLogo, setAbreLogo] = useContext(Context);
    const [indice, setIndice] = useState();

    
    const passaMouse = event => {
        setHover(true);
    }
    const tiraMouse = event => {
       setHover(false);
    }

  useEffect(() => {
    setClicou(true);
  },[zix]);

    return(
        <>
            <button onMouseOver={passaMouse} onMouseOut={tiraMouse} style={{
                backgroundColor:props.Cor,
                }} className='botao hover-2' onClick={() => setZix((prevZix) => prevZix + 1)}>
                {props.Leg}
            </button>
            {props.key}
            {hover && 
                <>
                <div className='legenda' style={{backgroundColor: props.Cor}}>{props.Hover}</div>
                <div id="triangulo-para-esquerda" style={{borderRightColor: props.Cor}}></div>
                {props.Mario === 'true' &&
                    <Mario />
                }
                </>
            }
            {clicou &&
            <>
            
                <motion.div className='titulo' style={{backgroundColor: props.corcomplementar, zIndex: zix,}}
                animate={{opacity: 1, height: '100vh',}}
                transition={{delay: 0.5, duration:1}}
                initial={{opacity: 0, height:'0'}}
                >{props.Nome}{zix}</motion.div>
            </>
            }
        </>
     )
}
export default Menuitem