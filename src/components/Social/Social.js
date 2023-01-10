import './Social.css';
import '../../Mobile.css';
import '../internas.css';
import { motion } from 'framer-motion';
import Titulo from '../Structurals/titulo';
import Mario from './Mario';
import MarioPickABox from './MarioPickABox';

const Tx = () => {

    return (
        <>
        
        <Titulo corcomplementar="#750000" Nome="Transplantado"/>
        <div className="brancoGeral">
                <motion.div
                    animate={{}}
                    transition={{delay: 10}} 
                    initial={{}}>
                        <MarioPickABox />
                </motion.div>
                <motion.div 
                    animate={{opacity: 0}}
                    transition={{duration:10, from: 8}}
                    initial={{opacity: 1,}}
                    style={{left: 0, top: 200, position:'absolute',}}>
                    <Mario />
                    </motion.div> 
                
        </div>
        </>
    )
}
export default Tx