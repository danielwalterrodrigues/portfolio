import './logoMenor.css';
import { motion } from 'framer-motion';
import Logopequeno from '../assets/logopequeno.png';

const LogoMenor = () => {

    
    return(
        <>
        <div>
            <motion.div className='logoMenor1'
            animate={{ x:'0', opacity: 1}}
            transition={{ type: 'spring', restSpeed: 0.5 }}
            initial={{ x:'105px', opacity: 0}}>
                <img src={Logopequeno}></img>
            </motion.div>
        </div>
        </>
    )
}
export default LogoMenor