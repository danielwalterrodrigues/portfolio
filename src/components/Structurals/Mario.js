import './Mario.css';
import mario from '../../assets/mario.png';
import mario1up from '../../assets/mario1up.png';
import mariotijolo from '../../assets/mariotijolo.png';
import { motion } from "framer-motion";
import mariocanoboca from '../../assets/mariocanoboca.png';
import mariocano from '../../assets/mariocano.png';

const Mario = () => {

    return(
        <>
            <motion.div className='life'
                animate={{x: [0, 209, 200, 440, 440], y:[0, 0, 130, 130, 130, 182], opacity: 1}}
                transition={{delay: 0, duration:4, type: 'spring', bounce: 0.6}}
                initial={{opacity: 1, x: '0px',}}>
                <img src={mario}></img>
            </motion.div>
            <motion.div className='tijolo'
                animate={{opacity: 1}}
                transition={{delay: 0.1, duration:1}}
                initial={{opacity: 0, x:'-100px',}}>
                <img src={mariotijolo}></img>
            </motion.div>
            <motion.div className='tijolo'
                animate={{opacity: 1}}
                transition={{delay: 0.2, duration:1}}
                initial={{opacity: 0, x:'-50px',}}>
                <img src={mariotijolo}></img>
            </motion.div>
            <motion.div className='tijolo'
                animate={{opacity: 1}}
                transition={{delay: 0.3, duration:1}}
                initial={{opacity: 0}}>
                <img src={mariotijolo}></img>
            </motion.div>
            <motion.div className='tijolo'
                animate={{opacity: 1}}
                transition={{delay: 0.4, duration:1}}
                initial={{opacity: 0, x:'50px',}}>
                <img src={mariotijolo}></img>
            </motion.div>
            <motion.div className='tijolo'
                animate={{opacity: 1}}
                transition={{delay: 0.5, duration:1}}
                initial={{opacity: 0, x:'100px',}}>
                <img src={mariotijolo}></img>
            </motion.div>
            <motion.img className='tijolo' style={{zIndex:3,}}
                animate={{opacity: 1, height: '200px', width:'64px',}}
                transition={{delay: 0.6, duration:2}}
                initial={{opacity: 1, x:'145px', y: '10px', height:'0px', width: '64px',}} src={mariocano}>
            </motion.img>
            <motion.img className='tijolo' style={{zIndex:3,}}
                animate={{opacity: 1, height: '35px', width:'64px'}}
                transition={{delay: 0.5, duration:1}}
                initial={{opacity: 0, x:'145px', height:'35px', width: '64px',}} src={mariocanoboca}>
            </motion.img>
            <motion.img className='tijolo' style={{zIndex:3,}}
                animate={{opacity: [0, 1, 0], x:'152px', y: '-100px',}}
                transition={{delay: 3.3, duration:1}}
                initial={{opacity: [0, 0, 0],  x:'152px', y: '10px',}} src={mario1up}>
            </motion.img>
        </>
    )
}
export default Mario