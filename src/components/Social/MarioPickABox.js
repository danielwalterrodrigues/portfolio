import { motion} from "framer-motion";
import Mario from '../../assets/mario_aguardando.png';
import bonequinho from '../../assets/Mario_bonequinho.png';
import fundo from '../../assets/mario_fundo.png';
import fundotijolos from '../../assets/mario_fundo_paredes.png';
import banco from '../../assets/mario_banco.png';
import baubase from '../../assets/mario_baubase.png';
import baufechado from '../../assets/mario_baufechado.png';
import bauaberto from '../../assets/mario_bauaberto.png';
import vida from '../../assets/mario.png';
import Transplantado from "./Transplantado";

const MarioPickABox = () => {

    return(
        <>
        <motion.img src={fundo}
            animate={{opacity: 1, x: '-51px', y: '310px'}}
            transition={{delay: 8, duration:4}}
            initial={{opacity: 1, x:'2000px', y: '310px'}}
            style={{height: 'auto', width: '100vw'}}></motion.img>
        <motion.img src={fundotijolos}
            animate={{opacity: 0.5, x: '0px', y: '-180px'}}
            transition={{delay: 10, duration:5}}
            initial={{opacity: 0, x:'0px', y: '-180px'}}
            style={{height: 'auto', width: 'calc(70vw)', marginLeft: 120}}></motion.img>
        
        <motion.img src={banco}
            animate={{opacity: 1, y: '110px'}}
            transition={{delay: 13, duration:1}}
            initial={{opacity: 0, y: '200px'}}
            style={{height: 'auto', width: '250px', left: '50vw', position: 'absolute', marginLeft: '-250px'}}></motion.img>
        <motion.img src={Mario}
            animate={{opacity: 1, x: '0px'}}
            transition={{delay: 15, duration:3}}
            initial={{opacity: 0, x: '-400px'}}
            style={{left: '50vw', position: 'absolute', marginLeft: '-350px', marginTop: '73px'}}
            ></motion.img>
        <motion.img src={bonequinho}
            animate={{opacity: 1, x: '0px'}}
            transition={{delay: 15, duration:3}}
            initial={{opacity: 0, x: '400px'}}
            style={{left: '50vw', position: 'absolute', marginLeft: '35px', marginTop: '73px', width: '82px', height: 'auto'}}
            ></motion.img>
       
       <motion.img src={baubase} 
            animate={{opacity: 1, y: '0px'}}
            transition={{delay: 15, duration: 1}}
            initial={{opacity:0, y: '-100px'}}
       style={{left: '50vw', zIndex: 4, position: 'absolute', marginLeft: '-170px', marginTop: '65px', width:'100px'}}></motion.img>
       
       <motion.img src={bauaberto} 
            animate={{opacity: 1}}
            transition={{delay: 18, from:6,  duration: 1}}
            initial={{opacity:0}}
       style={{left: '50vw', zIndex: 2, position: 'absolute', marginLeft: '-170px', marginTop: '19px', width:'100px'}}></motion.img>
       
       <motion.img src={baufechado} 
        animate={{opacity: 1, y: '0px'}}
        transition={{delay: 15, duration: 1}}
        initial={{opacity:0, y: '-100px'}}
       style={{left: '50vw', zIndex: 1, position: 'absolute', marginLeft: '-170px', marginTop: '33px', width:'100px'}}></motion.img>
       
       <motion.img src={vida}
        animate={{opacity: 1, y: '-20px'}}
        transition={{delay: 19, duration: 2}}
        initial={{opacity:0, y: '12px'}}
       style={{left: '50vw', zIndex: 3, position: 'absolute', marginLeft: '-155px', marginTop: '27px'}}></motion.img>
       
       <Transplantado />
        </>
    )
}
export default MarioPickABox